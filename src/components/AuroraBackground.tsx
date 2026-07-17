import { motion } from 'framer-motion';

/**
 * Animated aurora / gradient blobs behind everything. Colours come from CSS
 * vars so it adapts to the day/night theme automatically.
 */
export function AuroraBackground() {
  return (
    <div
      aria-hidden
      className="fixed inset-0 -z-10 overflow-hidden"
      style={{
        background:
          'linear-gradient(180deg, var(--bg-0) 0%, var(--bg-1) 100%)',
      }}
    >
      <motion.div
        className="absolute -top-40 -left-32 h-[38rem] w-[38rem] rounded-full blur-[120px]"
        style={{ background: 'var(--aurora-1)' }}
        animate={{ x: [0, 60, -20, 0], y: [0, 40, 80, 0], scale: [1, 1.15, 0.95, 1] }}
        transition={{ duration: 22, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute top-1/3 -right-40 h-[34rem] w-[34rem] rounded-full blur-[120px]"
        style={{ background: 'var(--aurora-2)' }}
        animate={{ x: [0, -50, 30, 0], y: [0, 60, -30, 0], scale: [1, 0.9, 1.2, 1] }}
        transition={{ duration: 26, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute -bottom-40 left-1/4 h-[32rem] w-[32rem] rounded-full blur-[130px]"
        style={{ background: 'var(--aurora-3)' }}
        animate={{ x: [0, 40, -40, 0], y: [0, -40, 20, 0], scale: [1, 1.1, 0.9, 1] }}
        transition={{ duration: 30, repeat: Infinity, ease: 'easeInOut' }}
      />
      {/* subtle grain / vignette */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse at 50% 0%, transparent 40%, var(--bg-0) 100%)',
          opacity: 0.6,
        }}
      />
    </div>
  );
}
