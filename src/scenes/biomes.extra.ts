import type { Biome } from './types';
import { baseLayers } from './biomes';

/**
 * Retained seasonal biomes that are NOT currently wired into the site (the app
 * runs rainforest on every route). Kept here so re-enabling a season later is a
 * one-line import — and so they stay out of the production bundle until then.
 * The /forest demo page (src/pages/Forest.tsx) imports these for its switcher.
 */

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
  // ── Real art (GPT-image, genuine alpha — no keying needed).
  art: {
    day: {
      sky: '/biomes/autumn/sky.jpg',
      layers: [
        { src: '/biomes/autumn/mid.png',  parallax: 16, anchor: 'top',  height: '72%' },
        { src: '/biomes/autumn/near.png', parallax: 42, anchor: 'full' },
      ],
    },
    night: {
      sky: '/biomes/autumn/sky.jpg',
      layers: [
        { src: '/biomes/autumn/mid.png',  parallax: 16, anchor: 'top',  height: '72%' },
        { src: '/biomes/autumn/near.png', parallax: 42, anchor: 'full' },
      ],
    },
  },
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

export const extraBiomes: Biome[] = [autumn, spring, winter];
