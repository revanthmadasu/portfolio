import { useLocation } from 'react-router-dom';
import { BiomeScene } from './BiomeScene';
import { rainforest } from './biomes';
import { navItems } from '../data/nav';

/**
 * App-level biome backdrop. Mounted once and kept alive across navigation. The
 * site runs the rainforest biome on every route; the day/night toggle switches
 * the forest between its day and night palettes.
 *
 * Navigation drives a forward "walk" through the scene: each nav tab maps to an
 * evenly-spaced position along the panorama, so moving Home → … → Projects pans
 * the wide backdrop from its left edge to its right edge (one slice per tab).
 */
export function RouteScene() {
  const { pathname } = useLocation();
  const idx = navItems.findIndex((n) => n.path === pathname);
  const steps = navItems.length;
  const progress = steps > 1 ? Math.max(0, idx) / (steps - 1) : 0;

  return <BiomeScene biome={rainforest} progress={progress} />;
}
