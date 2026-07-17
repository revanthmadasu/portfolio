import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, X, ArrowUpRight } from 'lucide-react';
import { PageTransition } from '../components/PageTransition';
import { SectionHeading } from '../components/SectionHeading';
import { getSkillIcon } from '../lib/skillIcons';
import { projects, type Project } from '../data/projects';

const statusLabel: Record<NonNullable<Project['status']>, string> = {
  live: 'Live',
  ongoing: 'Ongoing',
  archived: 'Archived',
};

export default function Projects() {
  const [active, setActive] = useState<Project | null>(null);

  return (
    <PageTransition>
      <SectionHeading
        eyebrow="Things I've built"
        title="Projects"
        subtitle="A selection of apps and experiments — click any card for details."
      />

      <div className="grid gap-5 sm:grid-cols-2">
        {projects.map((project, i) => (
          <motion.button
            key={project.slug}
            layoutId={`card-${project.slug}`}
            onClick={() => setActive(project)}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.45, delay: i * 0.06 }}
            whileHover={{ y: -6 }}
            className="glass glass-hover group overflow-hidden p-0 text-left"
          >
            <div
              className="relative flex h-40 items-center justify-center overflow-hidden"
              style={{ background: project.imageBg ?? 'var(--surface)' }}
            >
              <img
                src={project.imageUrl}
                alt={project.title}
                className="h-20 w-20 object-contain transition-transform duration-500 group-hover:scale-110"
                loading="lazy"
              />
              {project.status && (
                <span className="absolute right-3 top-3 rounded-full bg-black/40 px-2.5 py-1 text-[0.7rem] font-medium text-white backdrop-blur">
                  {statusLabel[project.status]}
                </span>
              )}
            </div>
            <div className="p-5">
              <div className="flex items-center justify-between gap-2">
                <h3 className="font-display text-lg font-bold">{project.title}</h3>
                <ArrowUpRight
                  size={18}
                  className="text-faint transition group-hover:text-accent"
                />
              </div>
              <p className="mt-1 text-sm text-muted">{project.tagline}</p>
              <div className="mt-4 flex flex-wrap gap-1.5">
                {project.skills.map((s) => {
                  const icon = getSkillIcon(s);
                  return icon ? (
                    <img
                      key={s}
                      src={icon}
                      alt={s}
                      title={s}
                      className="h-5 w-5 object-contain"
                    />
                  ) : null;
                })}
              </div>
            </div>
          </motion.button>
        ))}
      </div>

      <ProjectModal project={active} onClose={() => setActive(null)} />
    </PageTransition>
  );
}

function ProjectModal({
  project,
  onClose,
}: {
  project: Project | null;
  onClose: () => void;
}) {
  return (
    <AnimatePresence>
      {project && (
        <motion.div
          className="fixed inset-0 z-50 flex items-start justify-center overflow-y-auto p-4 pt-20 sm:items-center sm:pt-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {/* backdrop */}
          <div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm"
            onClick={onClose}
          />

          <motion.div
            layoutId={`card-${project.slug}`}
            className="glass relative z-10 w-full max-w-2xl overflow-hidden"
          >
            <div
              className="relative flex h-44 items-center justify-center"
              style={{ background: project.imageBg ?? 'var(--surface)' }}
            >
              <img
                src={project.imageUrl}
                alt={project.title}
                className="h-24 w-24 object-contain"
              />
              <button
                onClick={onClose}
                aria-label="Close"
                className="absolute right-4 top-4 grid h-9 w-9 place-items-center rounded-full bg-black/40 text-white backdrop-blur transition hover:bg-black/60"
              >
                <X size={18} />
              </button>
            </div>

            <div className="max-h-[60vh] overflow-y-auto p-6 sm:p-8">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="font-display text-2xl font-bold">{project.title}</h3>
                  <p className="mt-1 text-sm text-accent">{project.tagline}</p>
                </div>
                {project.gitUrl && (
                  <a
                    href={project.gitUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="glass glass-hover inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm"
                  >
                    <Github size={16} /> Code
                  </a>
                )}
              </div>

              <div className="mt-5 space-y-2">
                {project.description.map((d, i) => (
                  <p key={i} className="text-sm leading-relaxed text-muted">
                    {d}
                  </p>
                ))}
              </div>

              {project.features && (
                <div className="mt-6">
                  <h4 className="mb-3 text-xs font-semibold uppercase tracking-wider text-faint">
                    Features
                  </h4>
                  <div className="space-y-4">
                    {project.features.map((f) => (
                      <div key={f.title}>
                        <h5 className="text-sm font-semibold text-accent">{f.title}</h5>
                        <ul className="mt-1 space-y-1">
                          {f.points.map((p, i) => (
                            <li key={i} className="flex gap-2 text-sm text-muted">
                              <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-accent/70" />
                              <span className="leading-relaxed">{p}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              <div className="mt-6">
                <h4 className="mb-3 text-xs font-semibold uppercase tracking-wider text-faint">
                  Technologies
                </h4>
                <div className="flex flex-wrap gap-2">
                  {project.skills.map((s) => {
                    const icon = getSkillIcon(s);
                    return (
                      <span key={s} className="chip capitalize">
                        {icon && <img src={icon} alt="" className="h-4 w-4 object-contain" />}
                        {s}
                      </span>
                    );
                  })}
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
