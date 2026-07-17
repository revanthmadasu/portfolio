# Biome art — real, lush forest layers

Each biome is built from **depth planes** stacked back-to-front. The renderer
(`src/scenes/ForestBackdrop.tsx`) moves each plane at a different parallax rate,
which is what creates real depth. Until you drop art in, biomes fall back to the
procedural SVG forest automatically — the site is never blank.

## Folder → route map

| Folder        | Biome      | Route         |
| ------------- | ---------- | ------------- |
| `rainforest/` | Rainforest | `/home`, `/`  |
| `autumn/`     | Autumn     | `/experience` |
| `skills/`     | Spring     | `/skills`     |
| `projects/`   | Winter     | `/projects`   |

## Files per folder

Generate **four planes**, far → near. All 16:9, as wide as possible (≥2560px).

| File        | What it is                     | Background      |
| ----------- | ------------------------------ | --------------- |
| `sky.webp`  | atmosphere / haze / god-rays   | **opaque**      |
| `far.png`   | distant misty treeline         | **transparent** |
| `mid.png`   | band of trunks + vines         | **transparent** |
| `near.png`  | big leaves framing the edges   | **transparent** |

Optional: `sky-night.webp` for a night variant (else day art is reused at night
and the palette grade darkens it).

## How to generate (AI layers)

Best tools for transparent planes: **GPT-image-1** (ChatGPT/API — easiest),
**Flux** (Replicate/fal.ai — cheap, scriptable). Midjourney looks great but has
no alpha — you'd cut layers out with remove.bg / Photoshop afterward.

Keep the **same 4-plane structure and phrasing** across biomes — that's what
makes them feel like one consistent world.

### Rainforest
- **sky.webp** — "A dense tropical rainforest atmosphere seen from within, deep
  misty greens, soft god-rays from upper right, no distinct trees, painterly,
  cinematic depth haze, wide 16:9. Opaque background."
- **far.png** — "Silhouette of a distant misty rainforest treeline, dark
  teal-green, soft focus, treeline shapes only, everything else fully
  transparent. PNG transparent background, 16:9, elements in the upper-middle band."
- **mid.png** — "A band of tall rainforest tree trunks and hanging vines,
  mid-depth, rich green, sharp but atmospheric, transparent above and below,
  PNG with alpha, 16:9."
- **near.png** — "Large foreground rainforest leaves, ferns and monstera fronds
  framing the left, right and bottom edges only, dark saturated green,
  out-of-focus blur, center completely empty and transparent. PNG transparent
  background, 16:9."

### Autumn (`autumn/`)
Swap the season into the same four prompts: "amber and orange oak/maple forest,
golden-hour light, warm haze, falling-leaf mood."

### Spring (`skills/`)
"Fresh spring bamboo grove and young green leaves, soft morning light, light
airy green, gentle pink blossom accents."

### Winter (`projects/`)
"Snow-covered pine forest at dusk, cold blue tones, quiet, falling snow mood,
soft mist between trees."

## Post-processing
- Need alpha but the model gave a background? → **remove.bg** (free) or
  Photoshop "Remove Background".
- Compress PNG → WebP at **squoosh.app** to keep the page light.
- The `near.png` plane can be wider than 16:9 so parallax never reveals an edge.

## Going live
Once a biome's files exist, open `src/scenes/biomes.ts`, find that biome, and
uncomment its `art: { day: {...}, night: {...} }` block (there's a filled-in
example on `rainforest`). No other code changes needed. Tune each layer's
`parallax` (bigger = nearer/moves more) and `height` / `anchor` to taste.
