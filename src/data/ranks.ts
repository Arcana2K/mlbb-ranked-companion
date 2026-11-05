import { RankTier } from '../types/mlbb';

export interface RankInfo {
  tier: RankTier;
  color: string;
  badgeBg: string;
  borderColor: string;
  description: string;
}

export const MLBB_RANKS: Record<RankTier, RankInfo> = {
  Warrior: {
    tier: 'Warrior',
    color: 'text-stone-400',
    badgeBg: 'bg-stone-800/80',
    borderColor: 'border-stone-600',
    description: 'Beginner tier (Warrior III - I)'
  },
  Elite: {
    tier: 'Elite',
    color: 'text-amber-500',
    badgeBg: 'bg-amber-950/40',
    borderColor: 'border-amber-700/60',
    description: 'Developing mechanics (Elite III - I)'
  },
  Master: {
    tier: 'Master',
    color: 'text-emerald-400',
    badgeBg: 'bg-emerald-950/40',
    borderColor: 'border-emerald-700/60',
    description: 'Intermediate laning (Master IV - I)'
  },
  Grandmaster: {
    tier: 'Grandmaster',
    color: 'text-cyan-400',
    badgeBg: 'bg-cyan-950/40',
    borderColor: 'border-cyan-700/60',
    description: 'Objective contesting (Grandmaster V - I)'
  },
  Epic: {
    tier: 'Epic',
    color: 'text-indigo-400',
    badgeBg: 'bg-indigo-950/40',
    borderColor: 'border-indigo-700/60',
    description: 'Draft pick unlocked (Epic V - I)'
  },
  Legend: {
    tier: 'Legend',
    color: 'text-violet-400',
    badgeBg: 'bg-violet-950/40',
    borderColor: 'border-violet-700/60',
    description: 'Advanced macro rotations (Legend V - I)'
  },
  Mythic: {
    tier: 'Mythic',
    color: 'text-rose-400',
    badgeBg: 'bg-rose-950/40',
    borderColor: 'border-rose-700/60',
    description: 'Premier competitive tier (0 - 24 Stars)'
  },
  'Mythical Honor': {
    tier: 'Mythical Honor',
    color: 'text-amber-300',
    badgeBg: 'bg-amber-950/60',
    borderColor: 'border-amber-500/70',
    description: 'High competitive tier (25 - 49 Stars)'
  },
  'Mythical Glory': {
    tier: 'Mythical Glory',
    color: 'text-yellow-400',
    badgeBg: 'bg-yellow-950/60',
    borderColor: 'border-yellow-500/80',
    description: 'Elite tier (50 - 99 Stars)'
  },
  'Mythical Immortal': {
    tier: 'Mythical Immortal',
    color: 'text-fuchsia-300',
    badgeBg: 'bg-gradient-to-r from-fuchsia-950/80 to-indigo-950/80',
    borderColor: 'border-fuchsia-500',
    description: 'Apex tier (100+ Stars)'
  }
};

export const ALL_RANKS: RankTier[] = [
  'Warrior',
  'Elite',
  'Master',
  'Grandmaster',
  'Epic',
  'Legend',
  'Mythic',
  'Mythical Honor',
  'Mythical Glory',
  'Mythical Immortal'
];
