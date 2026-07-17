import { useEffect, useRef, useState, type PointerEvent } from 'react';
import { useTheme } from '../theme/ThemeProvider';
import { useSceneSettings } from './SceneSettings';
import { ForestBackdrop } from './ForestBackdrop';
import { ParticleCanvas } from './ParticleCanvas';
import type { Biome, BiomeArt, BiomePalette, Emitter } from './types';

interface Slot {
  key: string;
  palette: BiomePalette;
  emitters: Emitter[];
  art?: BiomeArt;
  /** true for crossfade-in layers; the very first layer shows immediately */
  fadeIn: boolean;
}

/** One crossfading scene layer. Base layer shows immediately; later layers
 *  fade in over the outgoing one. */
function SceneLayer({ slot, active }: { slot: Slot; active: boolean }) {
  const [opacity, setOpacity] = useState(slot.fadeIn ? 0 : 1);
  useEffect(() => {
    // hidden tabs throttle rAF + freeze transitions — jump straight to target
    if (document.hidden) {
      setOpacity(active ? 1 : 0);
      return;
    }
    const r = requestAnimationFrame(() => setOpacity(active ? 1 : 0));
    return () => cancelAnimationFrame(r);
  }, [active]);

  return (
    <div
      className="absolute inset-0"
      style={{
        opacity,
        transition: document.hidden ? 'none' : 'opacity 1s ease-in-out',
      }}
    >
      <ForestBackdrop palette={slot.palette} art={slot.art} />
      <ParticleCanvas emitters={slot.emitters} />
      <div className="absolute inset-0" style={{ background: slot.palette.grade }} />
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(120% 80% at 50% 0%, transparent 40%, rgba(0,0,0,0.35) 100%)',
        }}
      />
    </div>
  );
}

export function BiomeScene({ biome }: { biome: Biome }) {
  const { theme } = useTheme();
  const { reducedMotion } = useSceneSettings();
  const containerRef = useRef<HTMLDivElement>(null);

  const isNight = theme === 'dark';
  const palette = isNight ? biome.night : biome.day;
  const art = isNight ? biome.art?.night ?? biome.art?.day : biome.art?.day;
  const emitters: Emitter[] = [
    ...biome.emitters,
    ...(isNight && biome.nightEmitters ? biome.nightEmitters : []),
  ];
  const key = `${biome.id}-${theme}`;

  // Crossfade stack: keep at most the previous slot + the current one.
  // Object identity of the previous slot is preserved so React doesn't remount
  // it (its opacity state survives and transitions 1 -> 0).
  const [stack, setStack] = useState<Slot[]>([{ key, palette, emitters, art, fadeIn: false }]);

  useEffect(() => {
    setStack((prev) => {
      const last = prev[prev.length - 1];
      if (last.key === key) return prev;
      return [last, { key, palette, emitters, art, fadeIn: true }];
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [key]);

  useEffect(() => {
    if (stack.length > 1) {
      const t = setTimeout(() => setStack((s) => s.slice(-1)), 1100);
      return () => clearTimeout(t);
    }
  }, [stack]);

  const onPointerMove = (e: PointerEvent<HTMLDivElement>) => {
    if (reducedMotion) return;
    const el = containerRef.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    el.style.setProperty('--mx', ((e.clientX - r.left) / r.width - 0.5).toFixed(3));
    el.style.setProperty('--my', ((e.clientY - r.top) / r.height - 0.5).toFixed(3));
  };

  const lastKey = stack[stack.length - 1].key;

  return (
    <div
      ref={containerRef}
      onPointerMove={onPointerMove}
      className="fixed inset-0 -z-10 overflow-hidden"
      aria-hidden
    >
      {stack.map((slot) => (
        <SceneLayer key={slot.key} slot={slot} active={slot.key === lastKey} />
      ))}
    </div>
  );
}
