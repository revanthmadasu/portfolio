import { motion } from 'framer-motion';

interface Props {
  eyebrow?: string;
  title: string;
  subtitle?: string;
}

export function SectionHeading({ eyebrow, title, subtitle }: Props) {
  return (
    <motion.header
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="scene-rail mb-8"
    >
      {eyebrow && (
        <span className="mb-2 inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.2em] text-accent">
          <span className="h-px w-6 bg-accent" />
          {eyebrow}
        </span>
      )}
      <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">
        <span className="text-gradient">{title}</span>
      </h2>
      {subtitle && <p className="mt-2 max-w-xl text-muted">{subtitle}</p>}
    </motion.header>
  );
}
