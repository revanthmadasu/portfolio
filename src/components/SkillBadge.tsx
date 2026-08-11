import { motion } from 'framer-motion';
import { getSkillIcon } from '../lib/skillIcons';
import { StarRating } from './StarRating';

interface Props {
  name: string;
  iconKey: string;
  rating?: number;
  index?: number;
}

export function SkillBadge({ name, iconKey, rating, index = 0 }: Props) {
  const icon = getSkillIcon(iconKey);
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.85, y: 12 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.35, delay: Math.min(index * 0.03, 0.4), ease: 'easeOut' }}
      whileHover={{ y: -6 }}
      className="glass glass-hover flex w-24 flex-col items-center gap-2 p-3 sm:w-28"
    >
      <div className="grid h-12 w-12 place-items-center">
        {icon ? (
          <img src={icon} alt={name} className="h-10 w-10 object-contain" loading="lazy" />
        ) : (
          <span className="text-lg font-bold text-accent">{name[0]}</span>
        )}
      </div>
      <span className="text-center text-xs font-medium text-muted">{name}</span>
      {rating !== undefined && <StarRating value={rating} size={11} />}
    </motion.div>
  );
}
