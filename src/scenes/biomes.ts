import type { Biome, SceneLayer } from './types';

// Shared layer stack — same structural layers, tinted per biome.
export const baseLayers: SceneLayer[] = [
  { id: 'sky', depth: 0, render: 'sky' },
  { id: 'shafts', depth: 0.15, render: 'shafts' },
  { id: 'canopyFar', depth: 0.3, render: 'canopyFar' },
  { id: 'treesMid', depth: 0.55, render: 'treesMid' },
  { id: 'groundMist', depth: 0.7, render: 'groundMist' },
  { id: 'foliageNear', depth: 1, render: 'foliageNear' },
];

export const rainforest: Biome = {
  id: 'rainforest',
  label: 'Rainforest',
  routes: ['/home', '/forest'],
  day: {
    skyTop: '#123a2e',
    skyBottom: '#1f5c44',
    glow: 'rgba(180, 224, 148, 0.5)',
    canopyFar: '#1c4a38',
    treesMid: '#123528',
    foliageNear: '#0a2018',
    mist: 'rgba(198, 226, 205, 0.5)',
    shaft: 'rgba(210, 240, 170, 0.16)',
    grade: 'rgba(20, 60, 45, 0.12)',
  },
  // Evening rain / misty dusk. The site is locked to the dark theme, so this
  // `night` palette is what renders. Values below only affect the image path:
  // glow (cool haze), shaft (faint), mist (smoky, thick), grade (dusk wash).
  night: {
    skyTop: '#04120f',
    skyBottom: '#0a2b22',
    glow: 'rgba(120, 150, 160, 0.20)',
    canopyFar: '#0a221b',
    treesMid: '#061912',
    foliageNear: '#03100b',
    mist: 'rgba(150, 174, 178, 0.44)',
    shaft: 'rgba(150, 185, 205, 0.06)',
    grade: 'rgba(10, 20, 21, 0.52)',
  },
  layers: baseLayers,
  emitters: [
    { kind: 'mist', density: 0.7 },
    { kind: 'rain', density: 0.95, wind: 0.16 },
    { kind: 'leaf', density: 0.06, palette: ['#4f7a2e', '#3c5f26', '#5b6b3a'], wind: 0.25 },
  ],
  nightEmitters: [
    { kind: 'firefly', density: 0.3, palette: ['#b6d98f', '#9ec97a', '#cfe6a8'] },
  ],
  features: { waterfall: true },
  // ── Real art. sky.jpg is a full misty-forest scene (provides the far depth
  //    on its own), so we only overlay two transparent planes: a midground
  //    treeline band and the foreground leaf frame. Larger parallax = nearer.
  // ── Real art. `sky` is the wide panorama: only ~1/N of it is visible per tab,
  //    and navigating pans horizontally across it (moving "forward" through the
  //    scene). The mid/near planes ride along at higher `pan` for parallax depth.
  //    To use a true panorama, drop a wide image at the path below (replacing the
  //    ~16:9 placeholder) — everything else already scales to it.
  art: {
    day: {
      sky: '/biomes/rainforest/panorama.jpg',
      layers: [
        { src: '/biomes/rainforest/mid.png',  parallax: 16, anchor: 'top',  height: '72%', opacity: 0.42, pan: 12 },
        { src: '/biomes/rainforest/near.png', parallax: 42, anchor: 'full', opacity: 0.64, pan: 28 },
      ],
    },
    night: {
      sky: '/biomes/rainforest/panorama.jpg',
      layers: [
        { src: '/biomes/rainforest/mid.png',  parallax: 16, anchor: 'top',  height: '72%', opacity: 0.42, pan: 12 },
        { src: '/biomes/rainforest/near.png', parallax: 42, anchor: 'full', opacity: 0.64, pan: 28 },
      ],
    },
  },
};

// The whole site currently runs the rainforest biome on every route. The other
// seasons (autumn / spring / winter) are retained in ./biomes.extra.ts but are
// intentionally NOT imported here, so they tree-shake out of the prod bundle.
export const rainforestForRoute = (): Biome => rainforest;
