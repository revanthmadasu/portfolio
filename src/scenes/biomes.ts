import type { Biome, SceneLayer } from './types';

// Shared layer stack — same structural layers, tinted per biome.
const baseLayers: SceneLayer[] = [
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
  night: {
    skyTop: '#04120f',
    skyBottom: '#0a2b22',
    glow: 'rgba(90, 150, 130, 0.35)',
    canopyFar: '#0a221b',
    treesMid: '#061912',
    foliageNear: '#03100b',
    mist: 'rgba(120, 160, 150, 0.28)',
    shaft: 'rgba(150, 200, 255, 0.08)',
    grade: 'rgba(4, 20, 16, 0.45)',
  },
  layers: baseLayers,
  emitters: [
    { kind: 'mist', density: 0.5 },
    { kind: 'rain', density: 0.9, wind: 0.18 },
    { kind: 'leaf', density: 0.12, palette: ['#6b8f3a', '#4f7a2e', '#836b2f'], wind: 0.3 },
  ],
  nightEmitters: [
    { kind: 'firefly', density: 0.5, palette: ['#d6f56b', '#a8e05f', '#f2e37a'] },
  ],
  features: { waterfall: true },
  // ── Real art: drop the four PNG/WebP planes into public/biomes/rainforest/
  //    then uncomment this block. Far -> near; larger parallax = nearer.
  // art: {
  //   day: {
  //     sky: '/biomes/rainforest/sky.webp',
  //     layers: [
  //       { src: '/biomes/rainforest/far.png',  parallax: 8,  anchor: 'top',    height: '55%' },
  //       { src: '/biomes/rainforest/mid.png',  parallax: 18, anchor: 'bottom', height: '85%' },
  //       { src: '/biomes/rainforest/near.png', parallax: 40, anchor: 'full' },
  //     ],
  //   },
  //   night: {
  //     sky: '/biomes/rainforest/sky-night.webp',
  //     layers: [
  //       { src: '/biomes/rainforest/far.png',  parallax: 8,  anchor: 'top',    height: '55%' },
  //       { src: '/biomes/rainforest/mid.png',  parallax: 18, anchor: 'bottom', height: '85%' },
  //       { src: '/biomes/rainforest/near.png', parallax: 40, anchor: 'full' },
  //     ],
  //   },
  // },
};

export const autumn: Biome = {
  id: 'autumn',
  label: 'Autumn',
  routes: ['/experience'],
  day: {
    skyTop: '#3a2410',
    skyBottom: '#8a5322',
    glow: 'rgba(255, 210, 130, 0.55)',
    canopyFar: '#a35d1f',
    treesMid: '#7a3f16',
    foliageNear: '#4a250e',
    mist: 'rgba(240, 214, 170, 0.4)',
    shaft: 'rgba(255, 200, 120, 0.2)',
    grade: 'rgba(120, 60, 20, 0.14)',
  },
  night: {
    skyTop: '#160d06',
    skyBottom: '#3a2110',
    glow: 'rgba(200, 140, 70, 0.32)',
    canopyFar: '#43230d',
    treesMid: '#2e1708',
    foliageNear: '#1c0e05',
    mist: 'rgba(180, 150, 120, 0.24)',
    shaft: 'rgba(230, 170, 110, 0.1)',
    grade: 'rgba(20, 12, 6, 0.45)',
  },
  layers: baseLayers,
  emitters: [
    { kind: 'mist', density: 0.4 },
    { kind: 'leaf', density: 0.55, palette: ['#c8721f', '#b5451f', '#d99a2b', '#8a3312', '#e0a94f'], wind: 0.5 },
  ],
  nightEmitters: [
    { kind: 'firefly', density: 0.3, palette: ['#ffcf6b', '#f2a94f'] },
  ],
  features: { waterfall: false },
};

export const spring: Biome = {
  id: 'spring',
  label: 'Spring',
  routes: ['/skills'],
  day: {
    skyTop: '#1d3a1c',
    skyBottom: '#4f7a34',
    glow: 'rgba(214, 240, 150, 0.6)',
    canopyFar: '#5f8a34',
    treesMid: '#3f6a24',
    foliageNear: '#274914',
    mist: 'rgba(224, 240, 196, 0.42)',
    shaft: 'rgba(226, 245, 150, 0.18)',
    grade: 'rgba(70, 120, 40, 0.12)',
  },
  night: {
    skyTop: '#0a160a',
    skyBottom: '#1c3016',
    glow: 'rgba(150, 190, 110, 0.3)',
    canopyFar: '#20340f',
    treesMid: '#152309',
    foliageNear: '#0c1706',
    mist: 'rgba(150, 170, 130, 0.24)',
    shaft: 'rgba(170, 210, 140, 0.09)',
    grade: 'rgba(10, 22, 8, 0.45)',
  },
  layers: baseLayers,
  emitters: [
    { kind: 'mist', density: 0.35 },
    { kind: 'petal', density: 0.5, palette: ['#f7c8dd', '#f4b0cf', '#ffe0ec', '#e9a6c6'], wind: 0.35 },
    { kind: 'leaf', density: 0.1, palette: ['#7fae44', '#5f8a34', '#a7cc5a'], wind: 0.2 },
  ],
  nightEmitters: [
    { kind: 'firefly', density: 0.4, palette: ['#e6f79a', '#c8e070', '#fff2a8'] },
  ],
  features: { waterfall: false },
};

export const winter: Biome = {
  id: 'winter',
  label: 'Winter',
  routes: ['/projects'],
  day: {
    skyTop: '#20304a',
    skyBottom: '#6f8bb0',
    glow: 'rgba(214, 232, 255, 0.55)',
    canopyFar: '#3f5573',
    treesMid: '#28374d',
    foliageNear: '#182433',
    mist: 'rgba(226, 236, 248, 0.55)',
    shaft: 'rgba(220, 236, 255, 0.16)',
    grade: 'rgba(120, 150, 190, 0.12)',
  },
  night: {
    skyTop: '#070d1a',
    skyBottom: '#1a2740',
    glow: 'rgba(150, 180, 230, 0.3)',
    canopyFar: '#1a2740',
    treesMid: '#101a2e',
    foliageNear: '#0a1220',
    mist: 'rgba(170, 190, 220, 0.3)',
    shaft: 'rgba(170, 200, 255, 0.1)',
    grade: 'rgba(6, 12, 24, 0.5)',
  },
  layers: baseLayers,
  emitters: [
    { kind: 'mist', density: 0.5 },
    { kind: 'snow', density: 0.8, wind: 0.08 },
  ],
  nightEmitters: [
    { kind: 'firefly', density: 0.25, palette: ['#bcd6ff', '#dce8ff'] },
  ],
  features: { waterfall: false },
};

export const biomes: Biome[] = [rainforest, autumn, spring, winter];

export function biomeForRoute(pathname: string): Biome {
  return biomes.find((b) => b.routes.includes(pathname)) ?? rainforest;
}
