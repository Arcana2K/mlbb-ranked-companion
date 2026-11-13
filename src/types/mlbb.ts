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

export type PatchChangeType = 'buff' | 'nerf' | 'adjustment' | 'revamp' | 'rework';
export type SourceType = 'official' | 'secondary' | 'mixed';

export interface CategoryEvidence {
  status: 'verified' | 'unverified' | 'community_reference';
  verificationStatus?: 'verified' | 'unverified' | 'community_reference';
  sourceName?: string;
  sourceUrl?: string;
  sourceType?: 'official' | 'secondary';
  verifiedDate?: string;
  evidenceNotes?: string;
}

export interface CurrentPatchAuditRecord {
  heroId: string;
  patchVersion: string;
  auditDate: string;
  sourceName: string;
  sourceUrl: string;
  sourceType: 'official' | 'secondary';
  auditResult: 'changed' | 'confirmed_unchanged' | 'unreviewed';
  notes: string;
}

export interface SourceAttributionDetail {
  name: string;
  sourceName: string;
  url?: string;
  sourceUrl?: string;
  sourceType: SourceType;
  recordCount: number;
}

export interface HeroPatchChange {
  id?: string;
  heroId: string;
  heroName: string;
  patchVersion: string;
  date: string;
  type: PatchChangeType;
  title: string;
  affectedSkillOrAttribute: string;
  previousValue?: string;
  newValue?: string;
  summary: string;
  details: string[];
  sourceName: string;
  sourceUrl: string;
  sourceType: SourceType;
  verificationStatus: 'verified' | 'unverified';
  serverType?: 'original' | 'advance';
  verificationNotes?: string;
}

export interface PatchConfig {
  latestOriginalServerPatch: string;
  patchReleaseDate: string;
  databaseVerificationDate: string;
  officialSourceUrl: string;
  archiveSourceUrl: string;
  environment: 'Original Server';
}

export type HeroVerificationTier =
  | 'official_verified'
  | 'secondary_verified'
  | 'partially_verified'
  | 'unverified';

export type CurrentPatchVerificationStatus =
  | 'verified_changed'
  | 'confirmed_unchanged'
  | 'unreviewed';

export type PatchHistorySourceTier =
  | 'official'
  | 'secondary'
  | 'mixed'
  | 'none';

export interface HeroVerificationMetadata {
  currentPatch: string;
  lastVerifiedDate?: string;
  source: string;
  sourceName?: string;
  sourceUrl?: string;
  sourceType?: SourceType;
  sources?: SourceAttributionDetail[];
  verificationStatus: 'verified' | 'unverified' | 'partial';
  verificationTier?: HeroVerificationTier;
  evidenceNotes?: string;
  verificationNotes?: string;

  // Granular verification states per audit requirements
  skillsVerificationStatus: 'verified' | 'unverified' | 'community_reference';
  mechanicsVerificationStatus: 'verified' | 'unverified' | 'community_reference';
  patchHistoryVerificationStatus: 'verified' | 'unverified' | 'partial';
  currentPatchVerificationStatus: CurrentPatchVerificationStatus;

  // Category evidence audit metrics
  patchSourceTier?: PatchHistorySourceTier;
  officialPatchRecordCount?: number;
  secondaryPatchRecordCount?: number;
  unverifiedPatchRecordCount?: number;

  // Structured evidence records
  skillsEvidence?: CategoryEvidence;
  mechanicsEvidence?: CategoryEvidence;
  currentPatchAudit?: CurrentPatchAuditRecord;
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

  // Verified Gameplay Data (Current Original Server Patch 2.2.23)
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
