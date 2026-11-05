import React from 'react';
import { RankTier } from '../../types/mlbb';
import { Shield } from 'lucide-react';

interface RankBadgeProps {
  rank: RankTier;
  stars?: number;
  size?: 'sm' | 'md' | 'lg';
  showStars?: boolean;
}

export const RankBadge: React.FC<RankBadgeProps> = ({
  rank,
  stars,
  size = 'md',
  showStars = true
}) => {
  const sizeClasses = {
    sm: 'text-xs px-2 py-0.5 gap-1.5',
    md: 'text-xs px-2.5 py-1 gap-1.5',
    lg: 'text-sm px-3 py-1.5 gap-2 font-medium'
  };

  return (
    <div
      className={`inline-flex items-center rounded-md border border-zinc-700/60 bg-zinc-800/80 text-zinc-200 font-medium ${sizeClasses[size]}`}
    >
      <Shield className={size === 'sm' ? 'w-3 h-3 text-zinc-400' : 'w-3.5 h-3.5 text-zinc-400'} />
      <span>{rank}</span>
      {showStars && stars !== undefined && (
        <span className="text-zinc-400 text-xs font-mono ml-0.5">
          {stars}★
        </span>
      )}
    </div>
  );
};
