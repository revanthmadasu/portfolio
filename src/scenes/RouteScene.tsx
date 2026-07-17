import { BiomeScene } from './BiomeScene';
import { rainforest } from './biomes';

/**
 * App-level biome backdrop. Mounted once and kept alive across navigation. The
 * site currently runs the rainforest biome on every route; the day/night toggle
 * still switches the forest between its day and night palettes.
 */
export function RouteScene() {
  return <BiomeScene biome={rainforest} />;
}
