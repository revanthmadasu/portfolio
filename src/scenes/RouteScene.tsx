import { useLocation } from 'react-router-dom';
import { BiomeScene } from './BiomeScene';
import { biomeForRoute } from './biomes';

/**
 * App-level biome backdrop driven by the current route. Mounted once and kept
 * alive across navigation so BiomeScene can crossfade one season into the next
 * (Home→rainforest, Experience→autumn, Skills→spring, Projects→winter).
 *
 * The /forest prototype renders its own BiomeScene with a manual switcher, so
 * we stand down there to avoid stacking two scenes.
 */
export function RouteScene() {
  const { pathname } = useLocation();
  if (pathname === '/forest') return null;
  return <BiomeScene biome={biomeForRoute(pathname)} />;
}
