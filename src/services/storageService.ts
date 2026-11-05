import { MatchRecord, PlayerProfile, ScoringWeights } from '../types/mlbb';
import { INITIAL_PLAYER_PROFILE, INITIAL_SAMPLE_MATCHES } from '../data/sampleMatches';

const STORAGE_KEYS = {
  PROFILE: 'mlbb_companion_profile_v1',
  MATCHES: 'mlbb_companion_matches_v1',
  WEIGHTS: 'mlbb_companion_weights_v1',
  LAST_DRAFT: 'mlbb_companion_draft_v1'
};

export const DEFAULT_WEIGHTS: ScoringWeights = {
  roleFit: 35,
  counterAdvantage: 30,
  teamSynergy: 20,
  playerProficiency: 15
};

export class StorageService {
  public static getProfile(): PlayerProfile {
    try {
      const data = localStorage.getItem(STORAGE_KEYS.PROFILE);
      if (data) {
        return JSON.parse(data);
      }
    } catch {
      // fallback
    }
    return INITIAL_PLAYER_PROFILE;
  }

  public static saveProfile(profile: PlayerProfile): void {
    localStorage.setItem(STORAGE_KEYS.PROFILE, JSON.stringify(profile));
  }

  public static getMatches(): MatchRecord[] {
    try {
      const data = localStorage.getItem(STORAGE_KEYS.MATCHES);
      if (data) {
        return JSON.parse(data);
      }
    } catch {
      // fallback
    }
    return INITIAL_SAMPLE_MATCHES;
  }

  public static saveMatches(matches: MatchRecord[]): void {
    localStorage.setItem(STORAGE_KEYS.MATCHES, JSON.stringify(matches));
  }

  public static addMatch(match: MatchRecord): MatchRecord[] {
    const current = this.getMatches();
    const updated = [match, ...current];
    this.saveMatches(updated);
    
    // Automatically recalculate profile stats if needed
    this.updateProfileStatsFromMatches(updated);
    return updated;
  }

  public static deleteMatch(matchId: string): MatchRecord[] {
    const current = this.getMatches();
    const updated = current.filter((m) => m.id !== matchId);
    this.saveMatches(updated);
    this.updateProfileStatsFromMatches(updated);
    return updated;
  }

  public static getWeights(): ScoringWeights {
    try {
      const data = localStorage.getItem(STORAGE_KEYS.WEIGHTS);
      if (data) {
        return JSON.parse(data);
      }
    } catch {
      // fallback
    }
    return DEFAULT_WEIGHTS;
  }

  public static saveWeights(weights: ScoringWeights): void {
    localStorage.setItem(STORAGE_KEYS.WEIGHTS, JSON.stringify(weights));
  }

  public static resetToDefaults(): void {
    localStorage.removeItem(STORAGE_KEYS.PROFILE);
    localStorage.removeItem(STORAGE_KEYS.MATCHES);
    localStorage.removeItem(STORAGE_KEYS.WEIGHTS);
    localStorage.removeItem(STORAGE_KEYS.LAST_DRAFT);
  }

  public static exportAllData(): string {
    const payload = {
      version: '1.0.0',
      exportedAt: new Date().toISOString(),
      profile: this.getProfile(),
      matches: this.getMatches(),
      weights: this.getWeights()
    };
    return JSON.stringify(payload, null, 2);
  }

  public static importData(jsonString: string): boolean {
    try {
      const parsed = JSON.parse(jsonString);
      if (parsed.profile) this.saveProfile(parsed.profile);
      if (parsed.matches && Array.isArray(parsed.matches)) this.saveMatches(parsed.matches);
      if (parsed.weights) this.saveWeights(parsed.weights);
      return true;
    } catch (e) {
      console.error('Failed to import MLBB Companion data:', e);
      return false;
    }
  }

  private static updateProfileStatsFromMatches(matches: MatchRecord[]): void {
    if (matches.length === 0) return;
    const wins = matches.filter((m) => m.result === 'VICTORY').length;
    const winRate = Number(((wins / matches.length) * 100).toFixed(1));
    const currentProfile = this.getProfile();
    this.saveProfile({
      ...currentProfile,
      totalMatches: matches.length,
      overallWinRate: winRate
    });
  }
}
