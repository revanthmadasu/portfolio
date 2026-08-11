import { motion } from 'framer-motion';
import { PageTransition } from '../components/PageTransition';
import { SectionHeading } from '../components/SectionHeading';
import { SkillBadge } from '../components/SkillBadge';
import { skillGroups, hackerRankBadges } from '../data/skills';

export default function Skills() {
  return (
    <PageTransition>
      <SectionHeading
        eyebrow="Models meet engineering"
        title="AI & Engineering Toolkit"
        subtitle="The model, product, and infrastructure layers I use to take AI systems into production."
      />

      <div className="space-y-10">
        {skillGroups.map((group) => (
          <section key={group.label}>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-faint">
              {group.label}
            </h3>
            <div className="flex flex-wrap gap-3">
              {group.skills.map((skill, i) => (
                <SkillBadge
                  key={skill.name}
                  name={skill.name}
                  iconKey={skill.iconKey}
                  rating={skill.rating}
                  index={i}
                />
              ))}
            </div>
          </section>
        ))}
      </div>

      {/* HackerRank badges */}
      <section className="mt-16">
        <h3 className="mb-5 text-sm font-semibold uppercase tracking-wider text-faint">
          HackerRank Badges
        </h3>
        <div className="flex flex-wrap gap-4">
          {hackerRankBadges.map((badge, i) => (
            <motion.div
              key={badge.name}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              whileHover={{ y: -6, rotate: -2 }}
              className="glass glass-hover flex w-28 flex-col items-center gap-2 p-4"
            >
              <div
                className="grid h-16 w-16 place-items-center rounded-2xl"
                style={{
                  background:
                    badge.tier === 'gold'
                      ? 'linear-gradient(135deg, #f9d641, #f8bc36)'
                      : 'linear-gradient(135deg, #cee3eb, #aec8c7)',
                }}
              >
                <img src={badge.iconUrl} alt={badge.name} className="h-9 w-9" loading="lazy" />
              </div>
              <span className="text-center text-xs font-medium">{badge.name}</span>
              <div className="flex gap-0.5">
                {Array.from({ length: badge.stars }).map((_, s) => (
                  <span key={s} className="text-[10px] text-accent">
                    ★
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </PageTransition>
  );
}
