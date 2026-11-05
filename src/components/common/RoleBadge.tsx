import React from 'react';
import { Role, Lane } from '../../types/mlbb';
import { Shield, Swords, Zap, Wand2, Target, HeartHandshake, MapPin } from 'lucide-react';

interface RoleBadgeProps {
  role?: Role;
  lane?: Lane;
  size?: 'sm' | 'md';
}

const roleIcons: Record<Role, React.ReactNode> = {
  Tank: <Shield className="w-3 h-3 text-zinc-400" />,
  Fighter: <Swords className="w-3 h-3 text-zinc-400" />,
  Assassin: <Zap className="w-3 h-3 text-zinc-400" />,
  Mage: <Wand2 className="w-3 h-3 text-zinc-400" />,
  Marksman: <Target className="w-3 h-3 text-zinc-400" />,
  Support: <HeartHandshake className="w-3 h-3 text-zinc-400" />
};

export const RoleBadge: React.FC<RoleBadgeProps> = ({ role, lane, size = 'sm' }) => {
  const sizeClass = size === 'sm' ? 'text-[11px] px-2 py-0.5' : 'text-xs px-2.5 py-1';

  if (role) {
    return (
      <span
        className={`inline-flex items-center gap-1.5 rounded border border-zinc-700/60 bg-zinc-800/60 text-zinc-300 font-medium ${sizeClass}`}
      >
        {roleIcons[role]}
        <span>{role}</span>
      </span>
    );
  }

  if (lane) {
    return (
      <span
        className={`inline-flex items-center gap-1.5 rounded border border-zinc-700/60 bg-zinc-800/40 text-zinc-400 font-medium ${sizeClass}`}
      >
        <MapPin className="w-3 h-3 text-zinc-500" />
        <span>{lane}</span>
      </span>
    );
  }

  return null;
};
