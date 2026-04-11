"""Generate mechanism illustrations for MGS using Nano Banana 2.
Two diagrams:
1. Cross-sectional anatomy — normal vs MGS eye with funnel excavation & CSF pathway
2. Retinal detachment mechanisms schematic
"""
from google import genai
from google.genai import types
import os

client = genai.Client(
    api_key=os.environ.get("GOOGLE_API_KEY") or os.environ.get("GEMINI_API_KEY")
)

IMG_DIR = "/Users/raymond/Documents/牵牛花综合征/images"
MODEL = "gemini-3.1-flash-image-preview"

# ---------- Diagram 1: Anatomy comparison ----------
anatomy_prompt = """A clean medical textbook illustration comparing normal eye anatomy
versus Morning Glory Syndrome (MGS). Split into two panels side by side.

LEFT PANEL — "Normal Eye":
Cross-sectional diagram of a normal human eye shown in sagittal view.
Show: cornea (front), lens, vitreous body (clear gel), retina (pink layer),
sclera (white outer coat), optic nerve exiting at the back normally (slim cylindrical
nerve with central cup at the optic disc). Label "Normal Optic Disc" with a thin
arrow pointing to the flat disc area.

RIGHT PANEL — "Morning Glory Syndrome":
Same cross-sectional eye anatomy, but at the back of the eye show a dramatic
FUNNEL-SHAPED EXCAVATION carved into the posterior sclera — the retina dips
backward into a cone/crater shape centered on the optic disc. Inside the crater,
show the enlarged optic disc with radial blood vessels emerging outward,
and a WHITE CENTRAL GLIAL TUFT. Show a subtle PATHOLOGICAL COMMUNICATION
as dashed blue arrows between the subarachnoid space around the optic nerve
and the subretinal space (indicating CSF can leak into the retinal layer).
Label: "Funnel Excavation", "Glial Tuft", "CSF Pathway".

Style: flat medical illustration, clean vector look, pastel teal / pink / white
color palette, soft shadows, textbook quality. Plain white background.
Typography: clean sans-serif labels in dark teal color. English labels only.
Aspect ratio 16:9 landscape.
"""

# ---------- Diagram 2: RD mechanisms ----------
rd_mechanism_prompt = """A medical infographic showing the FOUR MECHANISMS of retinal
detachment in Morning Glory Syndrome. Four panels arranged in a 2x2 grid,
each panel shows a zoomed-in cross-section of the optic disc crater.

PANEL 1 — "CSF Leak":
Funnel excavation with blue fluid dripping from the subarachnoid space around the
optic nerve through an abnormal channel into the subretinal space, lifting the retina.
Label: "1. CSF Leak"

PANEL 2 — "Rhegmatogenous":
Funnel excavation with a small tear/hole (slit) at the disc margin, showing vitreous
fluid flowing through the retinal break into the subretinal space. Small red arrow
pointing at the tear.
Label: "2. Retinal Break"

PANEL 3 — "Tractional":
Funnel excavation with a contracting white glial tuft in the center, pulling adjacent
retina inward with tension lines. Show fibrous scar tissue tugging on the retina.
Label: "3. Traction"

PANEL 4 — "Exudative":
Funnel excavation with new abnormal blood vessels (red fine lines) around the disc
margin, showing fluid leaking out as small droplets into the subretinal space.
Label: "4. Exudation"

Style: flat medical illustration, clean vector, consistent teal/pink/white palette,
each panel framed with a thin teal border, panel number badge in top-left corner.
Clean sans-serif English labels. White background. Aspect ratio 4:3.
"""

def generate(prompt, out_name, aspect="16:9"):
    print(f"Generating {out_name}...")
    try:
        response = client.models.generate_content(
            model=MODEL,
            contents=prompt,
            config=types.GenerateContentConfig(
                response_modalities=["TEXT", "IMAGE"],
                image_config=types.ImageConfig(aspect_ratio=aspect),
            ),
        )
        for part in response.parts:
            if part.inline_data is not None:
                img = part.as_image()
                path = os.path.join(IMG_DIR, out_name)
                img.save(path)
                print(f"  ✓ saved to {path}")
                return True
            elif part.text:
                print(f"  [text] {part.text[:200]}")
    except Exception as e:
        print(f"  ✗ failed: {e}")
        return False
    return False


ok1 = generate(anatomy_prompt, "mgs_mechanism_anatomy.png", aspect="16:9")
ok2 = generate(rd_mechanism_prompt, "mgs_mechanism_rd.png", aspect="4:3")
print(f"\nResults: anatomy={ok1}, rd_mechanism={ok2}")
