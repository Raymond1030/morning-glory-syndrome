from google import genai
from google.genai import types
import os

client = genai.Client(api_key=os.environ.get("GEMINI_API_KEY") or os.environ.get("GOOGLE_API_KEY"))

output_dir = "/Users/raymond/Documents/牵牛花综合征/images"
os.makedirs(output_dir, exist_ok=True)

def generate_and_save(prompt, filename):
    print(f"Generating: {filename}...")
    try:
        response = client.models.generate_content(
            model="gemini-2.5-flash-image",
            contents=prompt,
            config=types.GenerateContentConfig(
                response_modalities=["TEXT", "IMAGE"],
            ),
        )
        for part in response.parts:
            if part.inline_data is not None:
                image = part.as_image()
                path = os.path.join(output_dir, filename)
                image.save(path)
                print(f"  Saved to {path}")
                return True
            elif part.text:
                print(f"  Text: {part.text[:100]}")
        print(f"  No image generated for {filename}")
        return False
    except Exception as e:
        print(f"  Error: {e}")
        return False

# Image 1: Fundus illustration comparison
generate_and_save(
    """Create a medical educational illustration showing Morning Glory Syndrome.
Left side: a beautiful purple-blue morning glory flower (Ipomoea).
Right side: a medical illustration of the optic disc fundoscopy view that resembles the flower -
showing the characteristic funnel-shaped excavation, central white glial tuft,
radial retinal blood vessels spreading outward like flower petals,
and peripapillary pigment ring.
Style: Clean medical illustration with teal-green color scheme, professional educational tone.
Text at top: "Morning Glory Syndrome".""",
    "mgs_fundus_illustration.png"
)

# Image 2: Awareness banner
generate_and_save(
    """Create a medical awareness banner for Morning Glory Syndrome, a rare eye condition.
Modern clean design showing:
- A stylized eye with visible optic disc in the center
- Morning glory flowers as decorative elements
- Color scheme: deep teal, bright teal, white
- Professional medical poster style for hospital display
- Text: "Early Detection Saves Vision" and Chinese text "早期发现 守护视力"
- Stats: "Prevalence 2.6/100,000" and "30-38% retinal detachment risk".""",
    "mgs_awareness_banner.png"
)

# Image 3: Multidisciplinary care
generate_and_save(
    """Create a medical illustration showing multidisciplinary team care for a rare eye disease.
A circular diagram with a child patient in the center, surrounded by 4 medical specialists:
- Ophthalmologist (eye icon)
- Neurologist (brain icon)
- Endocrinologist (gland icon)
- Nephrologist (kidney icon)
All connected by lines showing collaborative care.
Modern flat design, teal and green colors, clean white background.
Title: "Multidisciplinary Management".""",
    "mgs_multidisciplinary.png"
)

print("\nDone!")
