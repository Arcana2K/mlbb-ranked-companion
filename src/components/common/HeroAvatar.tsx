import React, { useState } from 'react';
import { Hero } from '../../types/mlbb';

interface HeroAvatarProps {
  hero?: Hero | null;
  name?: string;
  avatarUrl?: string;
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

const sizeClasses = {
  sm: 'w-7 h-7 text-[10px]',
  md: 'w-8 h-8 text-xs',
  lg: 'w-10 h-10 text-xs',
  xl: 'w-16 h-16 text-base'
};

export const HeroAvatar: React.FC<HeroAvatarProps> = ({
  hero,
  name,
  avatarUrl,
  className = '',
  size = 'md'
}) => {
  const [hasError, setHasError] = useState(false);

  const heroName = hero?.name || name || 'Hero';
  const src = avatarUrl || hero?.avatar;

  // Extract up to 2 uppercase initials
  const initials = heroName
    .split(/[\s-]+/)
    .map((word) => word.charAt(0))
    .join('')
    .slice(0, 2)
    .toUpperCase();

  const containerClass = `relative overflow-hidden rounded bg-zinc-850 border border-zinc-750 flex items-center justify-center font-medium select-none text-zinc-300 shrink-0 ${sizeClasses[size]} ${className}`;

  if (!src || hasError) {
    return (
      <div className={containerClass} title={heroName}>
        <span>{initials}</span>
      </div>
    );
  }

  return (
    <div className={containerClass}>
      <img
        src={src}
        alt={heroName}
        loading="lazy"
        onError={() => setHasError(true)}
        className="w-full h-full object-cover"
      />
    </div>
  );
};
