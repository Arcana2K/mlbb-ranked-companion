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

/**
 * Statistical dataset model for MLBB heroes.
 * Stored separately from static hero characteristics to prevent presenting
 * unverified percentages as factual game data.
 */
export interface HeroStatisticalData {
  winRate: number;
  pickRate?: number;
  banRate?: number;
  source: string;
  gameMode: string;
  rankRange: string;
  patchVersion: string;
  lastUpdated: string;
  sampleSize?: number;
  isVerified: boolean;
}

export interface HeroSkill {
  id: string; // 'passive' | 'skill1' | 'skill2' | 'skill3' | 'ultimate'
  name: string;
  type: 'Passive' | 'Skill 1' | 'Skill 2' | 'Skill 3' | 'Ultimate';
  description: string;
  cooldown?: string;
  energyCost?: string;
  tags?: string[]; // e.g. ['Crowd Control', 'Blink', 'AoE', 'Buff', 'Slow', 'Shield', 'Burst', 'Invincible', 'True Damage']
}

export interface HeroPatchChange {
  patchVersion: string;
  date: string;
  type: 'revamp' | 'rework' | 'buff' | 'nerf' | 'adjustment';
  title: string;
  summary: string;
  details: string[];
}

export interface HeroVerificationMetadata {
  currentPatch: string;
  lastVerifiedDate: string;
  source: string;
  sourceUrl: string;
  verificationStatus: 'verified' | 'unverified';
}

export interface HeroGameplayMechanics {
  crowdControl: string[];
  mobility: string[];
  damageCharacteristics: string[];
  resourceType?: string;
}

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
  // Matchup references
  counters: string[]; // Hero IDs this hero counters (community reference)
  counteredBy: string[]; // Hero IDs that counter this hero (community reference)
  synergies: string[]; // Hero IDs this hero pairs well with (community reference)
  matchupStatus: 'verified' | 'unverified_reference';
  // Statistical dataset is optional; undefined indicates no verified dataset is attached
  stats?: HeroStatisticalData;
  description: string;
  strengths: string[];
  weaknesses: string[];

  // Verified Gameplay Data (Current Original Server Patch 2.2.16a)
  skills?: HeroSkill[];
  gameplayMechanics?: HeroGameplayMechanics;

  // Patch Tracking & Verification
  verification?: HeroVerificationMetadata;
  patchHistory?: HeroPatchChange[];
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
  counterScore: number | null;
  synergyScore: number | null;
  playerProficiencyScore: number;
  reasons: string[];
  warnings: string[];
  matchupScoringExcluded: boolean;
  effectiveWeights: {
    roleFit: number;
    counterAdvantage: number;
    teamSynergy: number;
    playerProficiency: number;
  };
}

export interface ScoringWeights {
  roleFit: number;
  counterAdvantage: number;
  teamSynergy: number;
  playerProficiency: number;
}
