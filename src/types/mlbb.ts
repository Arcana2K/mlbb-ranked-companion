export type Role = 'Tank' | 'Fighter' | 'Assassin' | 'Mage' | 'Marksman' | 'Support';

export type Lane = 'Gold Lane' | 'EXP Lane' | 'Mid Lane' | 'Roam' | 'Jungle';

export type DamageType = 'Physical' | 'Magic' | 'True' | 'Hybrid';

export type RankTier =
  | 'Warrior'
  | 'Elite'
  | 'Master'
  | 'Grandmaster'
  | 'Epic'
  | 'Legend'
  | 'Mythic'
  | 'Mythical Honor'
  | 'Mythical Glory'
  | 'Mythical Immortal';

export interface Hero {
  id: string;
  name: string;
  avatar: string;
  primaryRole: Role;
  secondaryRole?: Role;
  primaryLane: Lane;
  secondaryLane?: Lane;
  damageType: DamageType;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  specialties: string[];
  counters: string[]; // Hero IDs this hero counters
  counteredBy: string[]; // Hero IDs that counter this hero
  synergies: string[]; // Hero IDs this hero pairs well with
  winRate: number; // Curated baseline win rate (e.g. 51.4%)
  pickRate: number; // Pick rate (%)
  banRate: number; // Ban rate (%)
  description: string;
  strengths: string[];
  weaknesses: string[];
}

export interface PlayerProfile {
  ign: string;
  server: string;
  currentRank: RankTier;
  stars: number;
  highestRank: RankTier;
  highestStars: number;
  totalMatches: number;
  overallWinRate: number;
  preferredRoles: Role[];
  preferredLanes: Lane[];
  favoriteHeroes: string[]; // hero IDs
}

export interface MatchRecord {
  id: string;
  date: string;
  heroId: string;
  role: Role;
  lane: Lane;
  result: 'VICTORY' | 'DEFEAT';
  durationMinutes: number;
  durationSeconds: number;
  kills: number;
  deaths: number;
  assists: number;
  medal: 'MVP' | 'Gold' | 'Silver' | 'Bronze';
  battleSpell: string;
  rankAtMatch: RankTier;
  isVerifiedUserMatch: boolean;
  notes?: string;
}

export interface MatchmakingPlayer {
  id: string;
  ign: string;
  rank: RankTier;
  stars?: number;
  preferredRole: Role;
  preferredLane: Lane;
  winRate: number;
  matchesPlayed: number;
  mainHeroes: string[];
  notes?: string;
}

export interface DraftSlot {
  slotNumber: number;
  heroId: string | null;
  assignedRole?: Role;
  assignedLane?: Lane;
  playerIgn?: string;
}

export interface DraftBan {
  slotNumber: number;
  heroId: string | null;
}

export interface DraftState {
  alliedPicks: DraftSlot[];
  enemyPicks: DraftSlot[];
  alliedBans: DraftBan[];
  enemyBans: DraftBan[];
  selectedLaneFilter: Lane | 'ALL';
  currentStep: number;
}

export interface RecommendationScore {
  hero: Hero;
  totalScore: number;
  roleFitScore: number;
  counterScore: number;
  synergyScore: number;
  playerProficiencyScore: number;
  reasons: string[];
  warnings: string[];
}

export interface ScoringWeights {
  roleFit: number;
  counterAdvantage: number;
  teamSynergy: number;
  playerProficiency: number;
}
