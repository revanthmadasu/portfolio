import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  BrainCircuit,
  Workflow,
  Layers3,
  ShieldCheck,
  Sparkles,
  type LucideIcon,
} from 'lucide-react';
import { PageTransition } from '../components/PageTransition';
import { RichText } from '../lib/richText';
import { profile, summary, highlights, stats, aiWorkflow } from '../data/profile';

const iconMap: Record<string, LucideIcon> = {
  brain: BrainCircuit,
  workflow: Workflow,
  layers: Layers3,
  shield: ShieldCheck,
};

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};
const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

export default function Home() {
  return (
    <PageTransition>
      <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_1fr]">
        {/* Intro */}
        <motion.div variants={container} initial="hidden" animate="show" className="scene-rail">
          <motion.span
            variants={item}
            className="chip mb-5"
          >
            <span className="h-2 w-2 rounded-full bg-accent" />
            AI-native products · Austin, TX
          </motion.span>

          <motion.p variants={item} className="text-lg text-muted">
            {profile.greeting}
          </motion.p>
          <motion.h1
            variants={item}
            className="font-display text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl"
          >
            <span className="text-gradient">{profile.name}</span>
          </motion.h1>
          <motion.p
            variants={item}
            className="mt-3 font-display text-2xl font-medium text-ink/90 sm:text-3xl"
          >
            {profile.title}
          </motion.p>
          <motion.p variants={item} className="mt-4 max-w-md text-muted">
            {profile.tagline}
          </motion.p>

          <motion.div variants={item} className="mt-8 flex flex-wrap gap-3">
            <Link
              to="/projects"
              className="group inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 font-semibold text-[#0f1a0c] shadow-lg shadow-accent/25 transition hover:shadow-accent/40"
            >
              Explore AI work
              <ArrowRight
                size={18}
                className="transition-transform group-hover:translate-x-1"
              />
            </Link>
            <Link
              to="/experience"
              className="glass glass-hover inline-flex items-center gap-2 rounded-full px-6 py-3 font-medium"
            >
              Experience
            </Link>
          </motion.div>

          {/* Stats */}
          <motion.div
            variants={item}
            className="mt-10 grid max-w-md grid-cols-2 gap-5 sm:grid-cols-4 sm:gap-3"
          >
            {stats.map((s) => (
              <div key={s.label} className="text-center">
                <div className="font-display text-2xl font-bold text-gradient sm:text-3xl">
                  {s.value}
                </div>
                <div className="mt-1 text-[0.7rem] leading-tight text-faint">
                  {s.label}
                </div>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* Photo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
          className="relative mx-auto max-w-sm"
        >
          <div
            className="absolute -inset-6 rounded-full blur-3xl"
            style={{ background: 'var(--accent-soft)' }}
          />
          <div className="glass relative aspect-square overflow-hidden rounded-[2rem] p-3">
            <img
              src={profile.photoUrl}
              alt={profile.name}
              className="h-full w-full rounded-[1.5rem] object-cover object-top"
            />
          </div>
        </motion.div>
      </div>

      <motion.section
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55, delay: 0.35 }}
        className="mt-12 glass overflow-hidden p-6 sm:p-8"
      >
        <div className="mb-6 flex flex-wrap items-end justify-between gap-3">
          <div>
            <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-accent">
              <Sparkles size={14} /> AI systems I build
            </p>
            <h2 className="mt-2 font-display text-2xl font-bold">From intent to production</h2>
          </div>
          <p className="max-w-md text-sm leading-relaxed text-muted">
            A practical generation loop shaped by product constraints, not a one-shot prompt.
          </p>
        </div>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {aiWorkflow.map((item, index) => (
            <div key={item.step} className="relative rounded-2xl border border-line p-4" style={{ background: 'var(--surface)' }}>
              <div className="mb-5 flex items-center justify-between">
                <span className="font-display text-xs font-bold text-accent">{item.step}</span>
                {index < aiWorkflow.length - 1 && <ArrowRight size={14} className="hidden text-faint lg:block" />}
              </div>
              <h3 className="font-display font-semibold">{item.title}</h3>
              <p className="mt-1 text-xs leading-relaxed text-muted">{item.detail}</p>
            </div>
          ))}
        </div>
      </motion.section>

      {/* About / summary */}
      <section className="mt-20">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="glass p-6 sm:p-10"
        >
          <h2 className="mb-6 font-display text-2xl font-bold">
            <span className="text-gradient">About</span>
          </h2>

          {/* Highlight pills */}
          <div className="mb-8 flex flex-wrap gap-3">
            {highlights.map((h) => {
              const Icon = iconMap[h.icon];
              return (
                <div
                  key={h.label}
                  className="flex items-center gap-2 rounded-2xl border border-line px-4 py-2.5"
                  style={{ background: 'var(--surface)' }}
                >
                  <Icon size={18} className="text-accent" />
                  <span className="text-sm font-medium">{h.label}</span>
                </div>
              );
            })}
          </div>

          <ul className="space-y-3">
            {summary.map((line, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, x: -12 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="flex gap-3 text-muted"
              >
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                <span className="leading-relaxed">
                  <RichText text={line} />
                </span>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </section>
    </PageTransition>
  );
}
