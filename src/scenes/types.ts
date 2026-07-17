// ------------------------------------------------------------------
// Biome scene system — data-driven so the 2.5D renderer can later be
// swapped for / augmented with a 3D (React Three Fiber) renderer without
// touching the biome definitions or the pages that consume them.
// ------------------------------------------------------------------

export type ParticleKind = 'rain' | 'leaf' | 'mist' | 'firefly' | 'snow' | 'petal';

export interface Emitter {
  kind: ParticleKind;
  /** 0..1 relative density; actual count is scaled by viewport area + intensity */
  density: number;
  /** optional colour palette (leaves, petals, fireflies) */
  palette?: string[];
  /** horizontal drift, positive = rightward wind */
  wind?: number;
}

/** One parallax layer of the backdrop. `depth` 0 = far (sky), 1 = nearest. */
export interface SceneLayer {
  id: string;
  depth: number;
  /** SVG markup rendered into the layer, coloured via currentColor + vars */
  render: 'sky' | 'canopyFar' | 'treesMid' | 'foliageNear' | 'groundMist' | 'shafts' | 'waterfall';
}

export interface BiomePalette {
  skyTop: string;
  skyBottom: string;
  glow: string;
  canopyFar: string;
  treesMid: string;
  foliageNear: string;
  mist: string;
  shaft: string;
  /** colour grade wash laid over the whole scene */
  grade: string;
}

// ------------------------------------------------------------------
// Real-art layers (transparent PNG/WebP depth planes). When a biome
// provides `art`, the renderer uses these images instead of the
// procedural SVG silhouettes. Missing art => procedural fallback, so
// the site always renders a valid background.
// ------------------------------------------------------------------

/** One image depth plane. `parallax` = px of travel at the pointer edge;
 *  larger = nearer the viewer. */
export interface ArtLayer {
  /** URL relative to the public root, e.g. /biomes/rainforest/mid.png */
  src: string;
  parallax: number;
  /** how the image sits in its plane; defaults to cover / bottom */
  fit?: 'cover' | 'contain';
  position?: string;
  /** vertical band the plane occupies (Tailwind-free inline height), e.g. '46%' */
  height?: string;
  anchor?: 'top' | 'bottom' | 'full';
}

export interface BiomeArt {
  /** opaque full-bleed background image (sky / atmosphere) */
  sky?: string;
  /** transparent depth planes, ordered far -> near */
  layers: ArtLayer[];
}

export interface Biome {
  id: string;
  label: string;
  /** which route(s) this biome represents */
  routes: string[];
  day: BiomePalette;
  night: BiomePalette;
  layers: SceneLayer[];
  emitters: Emitter[];
  /** extra emitters added only at night (e.g. fireflies) */
  nightEmitters?: Emitter[];
  features?: { waterfall?: boolean };
  /** real-art depth planes; when present they replace the procedural
   *  silhouettes. Optional day/night variants. */
  art?: { day: BiomeArt; night?: BiomeArt };
}

export type Intensity = 'full' | 'calm';
