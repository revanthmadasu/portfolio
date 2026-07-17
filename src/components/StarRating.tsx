import { Star, StarHalf } from 'lucide-react';

export function StarRating({ value, size = 14 }: { value: number; size?: number }) {
  return (
    <div className="flex items-center gap-0.5" aria-label={`${value} out of 5`}>
      {Array.from({ length: 5 }).map((_, i) => {
        const filled = value >= i + 1;
        const half = !filled && value >= i + 0.5;
        return (
          <span key={i} className="relative text-accent">
            {half ? (
              <span className="relative inline-block">
                <Star size={size} className="text-faint" fill="none" />
                <StarHalf
                  size={size}
                  className="absolute inset-0 text-accent"
                  fill="currentColor"
                  strokeWidth={0}
                />
              </span>
            ) : (
              <Star
                size={size}
                className={filled ? 'text-accent' : 'text-faint'}
                fill={filled ? 'currentColor' : 'none'}
                strokeWidth={filled ? 0 : 1.5}
              />
            )}
          </span>
        );
      })}
    </div>
  );
}
