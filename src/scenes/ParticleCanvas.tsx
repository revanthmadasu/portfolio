import { useEffect, useRef } from 'react';
import { ParticleEngine } from './particleEngine';
import { useSceneSettings } from './SceneSettings';
import type { Emitter } from './types';

export function ParticleCanvas({ emitters }: { emitters: Emitter[] }) {
  const ref = useRef<HTMLCanvasElement>(null);
  const engineRef = useRef<ParticleEngine | null>(null);
  const { effective, reducedMotion } = useSceneSettings();

  // create engine + wire resize / visibility once
  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const engine = new ParticleEngine(canvas);
    engineRef.current = engine;

    const parent = canvas.parentElement!;
    const applySize = () => {
      const r = parent.getBoundingClientRect();
      const dpr = Math.min(2, window.devicePixelRatio || 1);
      engine.resize(r.width, r.height, dpr);
    };
    applySize();

    const ro = new ResizeObserver(applySize);
    ro.observe(parent);

    const onVisibility = () => {
      if (document.hidden) engine.stop();
      else if (!reducedMotion) engine.start();
    };
    document.addEventListener('visibilitychange', onVisibility);

    return () => {
      ro.disconnect();
      document.removeEventListener('visibilitychange', onVisibility);
      engine.destroy();
      engineRef.current = null;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // react to emitter / intensity / reduced-motion changes
  useEffect(() => {
    const engine = engineRef.current;
    if (!engine) return;
    engine.setEmitters(emitters, effective);
    // always paint at least one frame so the scene is visible even when the
    // animation loop is paused (reduced motion, or a backgrounded tab)
    engine.renderStatic();
    if (!reducedMotion && !document.hidden) engine.start();
  }, [emitters, effective, reducedMotion]);

  return (
    <canvas
      ref={ref}
      aria-hidden
      className="pointer-events-none absolute inset-0 h-full w-full"
    />
  );
}
