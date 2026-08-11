import { useSceneSettings } from './SceneSettings';

/**
 * A burning campfire anchored to the bottom-centre of the scene. Pure CSS:
 * a warm ground glow plus a few flickering flame tongues (layered radial
 * gradients with a blur + hue flicker). The bright rising sparks are drawn on
 * the particle canvas by the `ember` emitter — this is just the fire itself.
 *
 * Sits behind all page content (the whole scene is at -z-10) and never eats
 * pointer events. Honours reduced-motion by dropping the flicker animation.
 */
export function Campfire() {
  const { reducedMotion } = useSceneSettings();
  const animated = !reducedMotion;

  return (
    <div className="campfire pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2">
      {/* warm light cast on the surrounding ground/mist */}
      <div className="campfire-glow" />
      {/* stacked flame tongues */}
      <div className={`campfire-flames${animated ? ' is-animated' : ''}`}>
        <span className="flame flame-outer" />
        <span className="flame flame-mid" />
        <span className="flame flame-inner" />
        <span className="flame flame-core" />
      </div>
      {/* glowing embers bed at the base */}
      <div className="campfire-base" />
    </div>
  );
}
