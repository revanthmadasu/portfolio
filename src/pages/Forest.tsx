import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Wind, Sparkles, Leaf, Flower2, Snowflake } from 'lucide-react';
import { BiomeScene } from '../scenes/BiomeScene';
import { useSceneSettings } from '../scenes/SceneSettings';
import { rainforest } from '../scenes/biomes';
import { autumn, spring, winter } from '../scenes/biomes.extra';
import { profile, stats } from '../data/profile';

const options = [
  { biome: rainforest, label: 'Rainforest', sub: 'Home', icon: Sparkles },
  { biome: autumn, label: 'Autumn', sub: 'Experience', icon: Leaf },
  { biome: spring, label: 'Spring', sub: 'Skills', icon: Flower2 },
  { biome: winter, label: 'Winter', sub: 'Projects', icon: Snowflake },
];

export default function Forest() {
  const [active, setActive] = useState(rainforest.id);
  const { intensity, toggleCalm, reducedMotion } = useSceneSettings();
  const biome = options.find((o) => o.biome.id === active)?.biome ?? rainforest;

  return (
    <>
      <BiomeScene biome={biome} />

      <main className="relative mx-auto flex min-h-[100dvh] max-w-6xl flex-col justify-center px-5 pb-24 pt-28 sm:px-8">
        <motion.div
          key={biome.id}
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-2xl"
        >
          {/* disciplined content panel over lush scenery */}
          <div className="rounded-[1.75rem] border border-white/15 bg-black/25 p-8 backdrop-blur-md sm:p-10">
            <span className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.22em] text-white/70">
              <span className="h-1.5 w-1.5 rounded-full bg-white/80" />
              {biome.label} · {({
                rainforest: 'Available for work',
                autumn: 'Where I have been',
                spring: 'What I work with',
                winter: 'What I have built',
              } as Record<string, string>)[biome.id]}
            </span>

            <h1 className="mt-5 font-display text-5xl font-semibold leading-[1.02] tracking-tight text-white sm:text-6xl">
              {profile.name}
            </h1>
            <p className="mt-3 font-display text-2xl font-medium text-white/85">
              Software Engineer · 7 years
            </p>
            <p className="mt-4 max-w-md text-white/70">
              Seven years building fast, considered products — from consumer apps
              at scale to enterprise platforms.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <button className="group inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 font-medium text-black transition hover:bg-white/90">
                View my work
                <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
              </button>
              <button className="inline-flex items-center gap-2 rounded-full border border-white/25 px-6 py-3 font-medium text-white backdrop-blur-md transition hover:bg-white/10">
                Experience
              </button>
            </div>

            <div className="mt-9 grid max-w-md grid-cols-4 gap-3 border-t border-white/12 pt-6">
              {stats.map((s) => (
                <div key={s.label}>
                  <div className="font-display text-2xl font-bold text-white sm:text-[1.75rem]">
                    {s.value}
                  </div>
                  <div className="mt-1 text-[0.68rem] leading-tight text-white/55">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </main>

      {/* demo controls — switch biome (simulates page change) + calm toggle */}
      <div className="fixed bottom-5 left-1/2 z-30 flex -translate-x-1/2 items-center gap-2 rounded-full border border-white/15 bg-black/40 p-1.5 backdrop-blur-md">
        {options.map(({ biome: b, label, sub, icon: Icon }) => {
          const on = active === b.id;
          return (
            <button
              key={b.id}
              onClick={() => setActive(b.id)}
              className={`flex items-center gap-2 rounded-full px-4 py-2 text-sm transition ${
                on ? 'bg-white text-black' : 'text-white/75 hover:text-white'
              }`}
            >
              <Icon size={15} />
              <span className="font-medium">{label}</span>
              <span className={on ? 'text-black/50' : 'text-white/40'}>{sub}</span>
            </button>
          );
        })}
        <span className="mx-1 h-6 w-px bg-white/15" />
        <button
          onClick={toggleCalm}
          title={reducedMotion ? 'Reduced motion is on (system)' : 'Toggle calm mode'}
          className={`flex items-center gap-2 rounded-full px-4 py-2 text-sm transition ${
            intensity === 'calm' || reducedMotion
              ? 'bg-white/90 text-black'
              : 'text-white/75 hover:text-white'
          }`}
        >
          <Wind size={15} />
          <span className="font-medium">Calm</span>
        </button>
      </div>
    </>
  );
}
