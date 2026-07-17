import { motion } from 'framer-motion';
import { ExternalLink, Trophy } from 'lucide-react';
import { PageTransition } from '../components/PageTransition';
import { SectionHeading } from '../components/SectionHeading';
import { RichText } from '../lib/richText';
import { getSkillIcon } from '../lib/skillIcons';
import { experiences } from '../data/experience';

export default function Experience() {
  return (
    <PageTransition>
      <SectionHeading
        eyebrow="Where I've worked"
        title="Experience"
        subtitle="3+ years shipping products at startups and large enterprises."
      />

      <div className="relative space-y-6 pl-6 sm:pl-8">
        {/* timeline spine */}
        <div
          className="absolute left-1.5 top-2 bottom-2 w-px sm:left-2.5"
          style={{ background: 'var(--line)' }}
        />

        {experiences.map((exp, idx) => (
          <motion.article
            key={exp.company}
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, delay: idx * 0.05 }}
            className="glass glass-hover relative p-6 sm:p-8"
          >
            {/* node */}
            <span className="absolute -left-[1.35rem] top-9 grid h-3.5 w-3.5 place-items-center rounded-full bg-accent ring-4 sm:-left-[1.85rem]"
              style={{ ['--tw-ring-color' as string]: 'var(--bg-1)' }}
            />

            <div className="flex flex-wrap items-start justify-between gap-4">
              <div className="flex items-center gap-4">
                <div className="glass grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-white/90 p-2">
                  <img
                    src={exp.logoUrl}
                    alt={exp.company}
                    className="max-h-full max-w-full object-contain"
                  />
                </div>
                <div>
                  <h3 className="font-display text-xl font-bold">{exp.company}</h3>
                  <p className="text-sm text-accent">{exp.role}</p>
                </div>
              </div>
              <div className="text-right">
                <span className="chip">{exp.timeline}</span>
                <p className="mt-1 text-xs text-faint">{exp.period}</p>
              </div>
            </div>

            {/* description */}
            <ul className="mt-6 space-y-2">
              {exp.description.map((d, i) => (
                <li key={i} className="flex gap-3 text-sm text-muted">
                  <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-accent/70" />
                  <span className="leading-relaxed">
                    <RichText text={d} />
                  </span>
                </li>
              ))}
            </ul>

            {/* achievements */}
            <div className="mt-6">
              <h4 className="mb-2 flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-faint">
                <Trophy size={13} className="text-accent" />
                Key Achievements
              </h4>
              <ul className="space-y-2">
                {exp.achievements.map((a, i) => (
                  <li key={i} className="flex gap-3 text-sm text-muted">
                    <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-accent" />
                    <span className="leading-relaxed">
                      <RichText text={a} />
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* tech + link */}
            <div className="mt-6 flex flex-wrap items-center gap-2">
              {exp.skills.map((s) => {
                const icon = getSkillIcon(s);
                return (
                  <span
                    key={s}
                    className="grid h-8 w-8 place-items-center rounded-lg border border-line"
                    style={{ background: 'var(--surface)' }}
                    title={s}
                  >
                    {icon ? (
                      <img src={icon} alt={s} className="h-4.5 w-4.5 object-contain" style={{ height: 18, width: 18 }} />
                    ) : (
                      <span className="text-[10px] uppercase text-muted">{s.slice(0, 2)}</span>
                    )}
                  </span>
                );
              })}
              <a
                href={exp.link}
                target="_blank"
                rel="noopener noreferrer"
                className="ml-auto inline-flex items-center gap-1.5 text-sm text-muted transition hover:text-accent"
              >
                Visit <ExternalLink size={14} />
              </a>
            </div>
          </motion.article>
        ))}
      </div>
    </PageTransition>
  );
}
