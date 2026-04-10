"""Render the MGS awareness banner locally with PIL (no API needed).
Chinese text is rendered by the system font — no garbled characters.
"""
from PIL import Image, ImageDraw, ImageFont
import math
import os

# ===== Canvas =====
W, H = 1200, 1500  # 4:5 portrait
MARGIN = 60

# ===== Colors =====
BG = (255, 255, 255)
PRIMARY = (11, 83, 69)      # #0B5345 dark teal
SECONDARY = (20, 143, 119)  # #148F77 medium teal
ACCENT = (26, 188, 156)     # #1ABC9C turquoise
LIGHT = (209, 242, 235)     # #D1F2EB
SOFT = (180, 220, 210)

# ===== Fonts =====
def load_font(path, size):
    try:
        return ImageFont.truetype(path, size)
    except Exception:
        return ImageFont.load_default()

EN_BOLD = "/System/Library/Fonts/Supplemental/Arial Bold.ttf"
EN_REG = "/System/Library/Fonts/Supplemental/Arial.ttf"
CN_FONT = "/System/Library/Fonts/Hiragino Sans GB.ttc"

title_font    = load_font(EN_BOLD, 78)
subtitle_font = load_font(EN_REG,  38)
slogan_font   = load_font(EN_BOLD, 54)
cn_font       = load_font(CN_FONT, 48)
badge_big     = load_font(EN_BOLD, 44)
badge_small   = load_font(EN_BOLD, 22)
badge_label   = load_font(EN_BOLD, 20)

# ===== Canvas =====
img = Image.new("RGB", (W, H), BG)
d = ImageDraw.Draw(img)

# ===== Top & bottom teal bands =====
band_h = 32
d.rectangle([0, 0, W, band_h], fill=PRIMARY)
d.rectangle([0, H - band_h, W, H], fill=PRIMARY)

# Inner teal frame
frame_inset = band_h + 18
d.rectangle(
    [frame_inset, frame_inset, W - frame_inset, H - frame_inset],
    outline=ACCENT, width=3,
)

# ===== Morning glory vines on left & right edges =====
def draw_flower(cx, cy, r, hue=ACCENT):
    """A simple 5-petal morning glory flower."""
    # Outer ring of petals
    petals = 5
    for i in range(petals):
        ang = i * (2 * math.pi / petals) - math.pi / 2
        px = cx + math.cos(ang) * r * 0.55
        py = cy + math.sin(ang) * r * 0.55
        d.ellipse([px - r * 0.55, py - r * 0.55, px + r * 0.55, py + r * 0.55],
                  fill=hue, outline=PRIMARY, width=2)
    # Center
    d.ellipse([cx - r * 0.28, cy - r * 0.28, cx + r * 0.28, cy + r * 0.28],
              fill="white", outline=PRIMARY, width=2)
    d.ellipse([cx - r * 0.12, cy - r * 0.12, cx + r * 0.12, cy + r * 0.12],
              fill=PRIMARY)

def draw_leaf(cx, cy, size, rotation=0):
    """A simple heart-shaped leaf."""
    pts = []
    for t in range(0, 360, 10):
        rad = math.radians(t)
        r = size * (1 - 0.3 * math.cos(rad))
        x = r * math.sin(rad)
        y = -r * math.cos(rad) - size * 0.2
        # rotate
        rr = math.radians(rotation)
        rx = x * math.cos(rr) - y * math.sin(rr)
        ry = x * math.sin(rr) + y * math.cos(rr)
        pts.append((cx + rx, cy + ry))
    d.polygon(pts, fill=SOFT, outline=SECONDARY)

def draw_vine(x_base, mirror=False):
    """Curvy vine with flowers from top to bottom of frame."""
    y_start = frame_inset + 40
    y_end = H - frame_inset - 40
    steps = 14
    prev = None
    for i in range(steps + 1):
        t = i / steps
        y = y_start + t * (y_end - y_start)
        # Sinusoidal curve
        offset = math.sin(t * math.pi * 3.5) * 28
        x = x_base + (offset if not mirror else -offset)
        if prev:
            d.line([prev, (x, y)], fill=SECONDARY, width=4)
        prev = (x, y)
        # Flower at every 3rd point
        if i % 3 == 0:
            r = 26
            cx = x + (30 if not mirror else -30)
            draw_flower(cx, y, r)
        elif i % 3 == 1:
            # leaf
            lx = x + (22 if not mirror else -22)
            draw_leaf(lx, y, 18, rotation=(30 if not mirror else -30))

draw_vine(frame_inset + 55, mirror=False)
draw_vine(W - frame_inset - 55, mirror=True)

# ===== Title =====
def draw_centered(text, font, y, color):
    bbox = d.textbbox((0, 0), text, font=font)
    w = bbox[2] - bbox[0]
    d.text(((W - w) // 2, y), text, font=font, fill=color)

title_y = 170
draw_centered("MORNING GLORY", title_font, title_y, PRIMARY)
draw_centered("SYNDROME",      title_font, title_y + 92, PRIMARY)

# Subtitle
draw_centered("RARE CONGENITAL EYE CONDITION", subtitle_font, title_y + 200, SECONDARY)

# Divider line
div_y = title_y + 260
d.line([(W // 2 - 90, div_y), (W // 2 + 90, div_y)], fill=ACCENT, width=4)

# ===== Eye illustration =====
eye_cx, eye_cy = W // 2, 760
eye_w, eye_h = 360, 220

# Eye outline (lemon shape)
def lemon(cx, cy, w, h):
    pts = []
    for t in range(0, 361, 3):
        rad = math.radians(t)
        x = cx + (w / 2) * math.cos(rad)
        y = cy + (h / 2) * math.sin(rad) * abs(math.sin(rad))**0.3
        pts.append((x, y))
    return pts

# Upper eyelid
pts_upper = []
for t in range(0, 181, 3):
    rad = math.radians(t)
    x = eye_cx - (eye_w / 2) * math.cos(rad)
    y = eye_cy - (eye_h / 2) * math.sin(rad)
    pts_upper.append((x, y))

# Lower eyelid
pts_lower = []
for t in range(0, 181, 3):
    rad = math.radians(t)
    x = eye_cx + (eye_w / 2) * math.cos(rad)
    y = eye_cy + (eye_h / 2) * math.sin(rad) * 0.85
    pts_lower.append((x, y))

eye_shape = pts_upper + pts_lower
d.polygon(eye_shape, fill=LIGHT, outline=PRIMARY)
d.line(pts_upper, fill=PRIMARY, width=6)
d.line(pts_lower, fill=PRIMARY, width=5)

# Eyelashes
for i in range(-8, 9):
    ang = math.radians(90 + i * 10)
    x1 = eye_cx + math.cos(ang) * (eye_w / 2) * 0.92
    y1 = eye_cy - math.sin(ang) * (eye_h / 2) * 0.95
    x2 = eye_cx + math.cos(ang) * (eye_w / 2) * 1.12
    y2 = eye_cy - math.sin(ang) * (eye_h / 2) * 1.35
    d.line([(x1, y1), (x2, y2)], fill=PRIMARY, width=5)

# Iris (turquoise)
iris_r = 92
d.ellipse([eye_cx - iris_r, eye_cy - iris_r, eye_cx + iris_r, eye_cy + iris_r],
          fill=ACCENT, outline=PRIMARY, width=4)

# Radiating vessels (morning glory petals effect)
for i in range(24):
    ang = i * (360 / 24)
    rad = math.radians(ang)
    x1 = eye_cx + math.cos(rad) * (iris_r * 0.35)
    y1 = eye_cy + math.sin(rad) * (iris_r * 0.35)
    x2 = eye_cx + math.cos(rad) * (iris_r * 0.95)
    y2 = eye_cy + math.sin(rad) * (iris_r * 0.95)
    d.line([(x1, y1), (x2, y2)], fill=SECONDARY, width=3)

# Inner iris ring
d.ellipse([eye_cx - iris_r * 0.55, eye_cy - iris_r * 0.55,
           eye_cx + iris_r * 0.55, eye_cy + iris_r * 0.55],
          fill=SECONDARY, outline=PRIMARY, width=3)

# Pupil (dark)
d.ellipse([eye_cx - iris_r * 0.28, eye_cy - iris_r * 0.28,
           eye_cx + iris_r * 0.28, eye_cy + iris_r * 0.28],
          fill=PRIMARY)

# Central white glial tuft (the hallmark of MGS)
d.ellipse([eye_cx - 10, eye_cy - 10, eye_cx + 10, eye_cy + 10],
          fill="white")

# Highlight
d.ellipse([eye_cx + 20, eye_cy - 40, eye_cx + 42, eye_cy - 18], fill="white")

# ===== Slogan =====
slogan_y = 990
draw_centered("EARLY DETECTION SAVES VISION", slogan_font, slogan_y, PRIMARY)

# Chinese slogan — rendered by system font, no API needed
cn_text = "早期发现　守护视力"
bbox = d.textbbox((0, 0), cn_text, font=cn_font)
cn_w = bbox[2] - bbox[0]
d.text(((W - cn_w) // 2, slogan_y + 80), cn_text, font=cn_font, fill=SECONDARY)

# ===== Bottom badges =====
badge_y = 1230
badge_r = 110

for cx, line1, line2, line3 in [
    (W // 2 - 180, "PREVALENCE", "2.6", "/100,000"),
    (W // 2 + 180, "RD RISK",    "30-38%", "AT 10 YEARS"),
]:
    # Outer circle
    d.ellipse([cx - badge_r, badge_y - badge_r, cx + badge_r, badge_y + badge_r],
              fill="white", outline=PRIMARY, width=4)
    d.ellipse([cx - badge_r + 10, badge_y - badge_r + 10,
               cx + badge_r - 10, badge_y + badge_r - 10],
              outline=ACCENT, width=2)

    # Label
    bbox = d.textbbox((0, 0), line1, font=badge_label)
    w = bbox[2] - bbox[0]
    d.text((cx - w // 2, badge_y - 68), line1, font=badge_label, fill=SECONDARY)

    # Big number
    bbox = d.textbbox((0, 0), line2, font=badge_big)
    w = bbox[2] - bbox[0]
    d.text((cx - w // 2, badge_y - 32), line2, font=badge_big, fill=PRIMARY)

    # Small caption
    bbox = d.textbbox((0, 0), line3, font=badge_small)
    w = bbox[2] - bbox[0]
    d.text((cx - w // 2, badge_y + 22), line3, font=badge_small, fill=SECONDARY)

# Footer tagline
footer_font = load_font(EN_REG, 22)
footer_text = "Morning Glory Syndrome · Clinical Awareness"
bbox = d.textbbox((0, 0), footer_text, font=footer_font)
w = bbox[2] - bbox[0]
d.text(((W - w) // 2, H - 80), footer_text, font=footer_font, fill=SECONDARY)

# ===== Save =====
out_path = "/Users/raymond/Documents/牵牛花综合征/images/mgs_awareness_banner.png"
img.save(out_path, "PNG", optimize=True)
print(f"Banner saved: {out_path} ({W}x{H})")
