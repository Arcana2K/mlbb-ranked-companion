import { PatchConfig } from '../types/mlbb';

/**
 * Centralized Original Server Patch Configuration.
 * Tracks the current live verified patch, release dates, and verification timestamps.
 */
export const CURRENT_PATCH_CONFIG: PatchConfig = {
  latestOriginalServerPatch: 'Patch 2.2.16a',
  patchReleaseDate: '2026-10-14',
  databaseVerificationDate: '2026-11-08',
  officialSourceUrl: 'https://play.mobilelegends.com/lore/news',
  archiveSourceUrl: 'https://liquipedia.net/mobilelegends/Portal:Patches',
  environment: 'Original Server'
};

export interface HistoricalPatchMeta {
  patchVersion: string;
  releaseDate: string;
  majorTheme: string;
  sourceUrl: string;
  sourceType: 'official' | 'secondary';
  sourceName: string;
}

/**
 * Historical Original Server Patch Registry.
 * Used for timeline tracking, audit checks, and future patch registration.
 */
export const HISTORICAL_PATCH_REGISTRY: HistoricalPatchMeta[] = [
  {
    patchVersion: 'Patch 2.2.16a',
    releaseDate: '2026-10-14',
    majorTheme: 'Balance Hotfix: Aulus, Hirara, Eudora, Rafaela, Kalea',
    sourceUrl: 'https://liquipedia.net/mobilelegends/Patch_2.2.16a',
    sourceType: 'secondary',
    sourceName: 'Liquipedia MLBB Patch Archive'
  },
  {
    patchVersion: 'Patch 2.2.16',
    releaseDate: '2026-09-16',
    majorTheme: 'Season 42: Masha & Bruno Revamp, Turret Basic Attack Interactions',
    sourceUrl: 'https://liquipedia.net/mobilelegends/Patch_2.2.16',
    sourceType: 'secondary',
    sourceName: 'Liquipedia MLBB Patch Archive'
  },
  {
    patchVersion: 'Patch 2.1.40',
    releaseDate: '2025-12-18',
    majorTheme: 'Hero Release: Sora, Roaming Blessings, Item Balancing',
    sourceUrl: 'https://liquipedia.net/mobilelegends/Patch_2.1.40',
    sourceType: 'secondary',
    sourceName: 'Liquipedia MLBB Patch Archive'
  },
  {
    patchVersion: 'Patch 2.1.30',
    releaseDate: '2025-11-04',
    majorTheme: 'Freya Rework, Roaming Tank Equipment Optimization',
    sourceUrl: 'https://liquipedia.net/mobilelegends/Patch_2.1.30',
    sourceType: 'secondary',
    sourceName: 'Liquipedia MLBB Patch Archive'
  },
  {
    patchVersion: 'Patch 1.9.91',
    releaseDate: '2025-09-20',
    majorTheme: 'Hero Release: Obsidia (Marksman)',
    sourceUrl: 'https://liquipedia.net/mobilelegends/Patch_1.9.91',
    sourceType: 'secondary',
    sourceName: 'Liquipedia MLBB Patch Archive'
  },
  {
    patchVersion: 'Patch 1.9.90',
    releaseDate: '2025-06-18',
    majorTheme: 'Hero Release: Zetian, Rafaela Rework, Jungle Clear Balances',
    sourceUrl: 'https://liquipedia.net/mobilelegends/Patch_1.9.90',
    sourceType: 'secondary',
    sourceName: 'Liquipedia MLBB Patch Archive'
  },
  {
    patchVersion: 'Patch 1.9.68',
    releaseDate: '2025-04-22',
    majorTheme: 'Hero Revamps: Kimmy (Starlium) & Gloo (Stick, Stick)',
    sourceUrl: 'https://liquipedia.net/mobilelegends/Patch_1.9.68',
    sourceType: 'secondary',
    sourceName: 'Liquipedia MLBB Patch Archive'
  },
  {
    patchVersion: 'Patch 1.9.64',
    releaseDate: '2025-03-18',
    majorTheme: 'Hero Release: Kalea, Wind of Nature & Rose Gold Meteor Adjustments',
    sourceUrl: 'https://liquipedia.net/mobilelegends/Patch_1.9.64',
    sourceType: 'secondary',
    sourceName: 'Liquipedia MLBB Patch Archive'
  },
  {
    patchVersion: 'Patch 1.9.42B',
    releaseDate: '2025-01-01',
    majorTheme: 'Balance Tuning: Karrie, Harith, Cici Follow-up Buffs & Nerfs',
    sourceUrl: 'https://liquipedia.net/mobilelegends/Patch_1.9.42B',
    sourceType: 'secondary',
    sourceName: 'Liquipedia MLBB Patch Archive'
  },
  {
    patchVersion: 'Patch 1.9.42',
    releaseDate: '2024-12-18',
    majorTheme: 'Hero Release: Lukas (Beast of Light), Basic Attack Fighter Optimization',
    sourceUrl: 'https://liquipedia.net/mobilelegends/Patch_1.9.42',
    sourceType: 'secondary',
    sourceName: 'Liquipedia MLBB Patch Archive'
  },
  {
    patchVersion: 'Patch 1.9.32',
    releaseDate: '2024-11-06',
    majorTheme: 'Hero Rework: Granger (Capriccio Demonic Energy)',
    sourceUrl: 'https://liquipedia.net/mobilelegends/Patch_1.9.32',
    sourceType: 'secondary',
    sourceName: 'Liquipedia MLBB Patch Archive'
  },
  {
    patchVersion: 'Patch 1.9.20E',
    releaseDate: '2024-10-08',
    majorTheme: 'Claude Early-Game Damage Buff & Suyou Execution Tuning',
    sourceUrl: 'https://liquipedia.net/mobilelegends/Patch_1.9.20E',
    sourceType: 'secondary',
    sourceName: 'Liquipedia MLBB Patch Archive'
  },
  {
    patchVersion: 'Patch 1.9.20D',
    releaseDate: '2024-09-28',
    majorTheme: 'Fanny Cut Throat Damage Bug Fix & Direct Cast Tuning',
    sourceUrl: 'https://liquipedia.net/mobilelegends/Patch_1.9.20D',
    sourceType: 'secondary',
    sourceName: 'Liquipedia MLBB Patch Archive'
  },
  {
    patchVersion: 'Patch 1.9.20',
    releaseDate: '2024-09-21',
    majorTheme: '8th Anniversary: Hero Release Suyou, High-Rank Nerfs (Terizla, Hayabusa, Hylos, Roger)',
    sourceUrl: 'https://liquipedia.net/mobilelegends/Patch_1.9.20',
    sourceType: 'secondary',
    sourceName: 'Liquipedia MLBB Patch Archive'
  },
  {
    patchVersion: 'Patch 1.9.14',
    releaseDate: '2024-09-17',
    majorTheme: 'Hero Rework: Alice (Queen of Blood Tank/Initiator)',
    sourceUrl: 'https://liquipedia.net/mobilelegends/Patch_1.9.14',
    sourceType: 'secondary',
    sourceName: 'Liquipedia MLBB Patch Archive'
  },
  {
    patchVersion: 'Patch 1.8.94',
    releaseDate: '2024-07-31',
    majorTheme: 'Hero Revamp: Phoveus (Physical Damage Overhaul & Demonic Force)',
    sourceUrl: 'https://liquipedia.net/mobilelegends/Patch_1.8.94',
    sourceType: 'secondary',
    sourceName: 'Liquipedia MLBB Patch Archive'
  },
  {
    patchVersion: 'Patch 1.8.92',
    releaseDate: '2024-06-29',
    majorTheme: 'Project NEXT Equipment Evolution, Hero Release: Zhuxin, Zhask Revamp',
    sourceUrl: 'https://liquipedia.net/mobilelegends/Patch_1.8.92',
    sourceType: 'secondary',
    sourceName: 'Liquipedia MLBB Patch Archive'
  },
  {
    patchVersion: 'Patch 1.8.78',
    releaseDate: '2024-05-15',
    majorTheme: 'Hero Revamp: Helcurt (Shadow of Styx Prowler), Ling Critical Multiplier Buff',
    sourceUrl: 'https://liquipedia.net/mobilelegends/Patch_1.8.78',
    sourceType: 'secondary',
    sourceName: 'Liquipedia MLBB Patch Archive'
  },
  {
    patchVersion: 'Patch 1.8.66',
    releaseDate: '2024-03-16',
    majorTheme: 'Hero Release: Chip (Phase Technician Main Portal)',
    sourceUrl: 'https://liquipedia.net/mobilelegends/Patch_1.8.66',
    sourceType: 'secondary',
    sourceName: 'Liquipedia MLBB Patch Archive'
  },
  {
    patchVersion: 'Patch 1.8.56',
    releaseDate: '2024-01-31',
    majorTheme: 'Hero Revamp: Aurora (Pride of Ice Freeze Invulnerability & Turret Freeze)',
    sourceUrl: 'https://liquipedia.net/mobilelegends/Patch_1.8.56',
    sourceType: 'secondary',
    sourceName: 'Liquipedia MLBB Patch Archive'
  },
  {
    patchVersion: 'Patch 1.8.44',
    releaseDate: '2023-12-23',
    majorTheme: 'Hero Release: Cici, Classic Hero Optimizations (Balmond, Nana, Barats, Lunox)',
    sourceUrl: 'https://liquipedia.net/mobilelegends/Patch_1.8.44',
    sourceType: 'secondary',
    sourceName: 'Liquipedia MLBB Patch Archive'
  },
  {
    patchVersion: 'Patch 1.8.30',
    releaseDate: '2023-10-24',
    majorTheme: 'Tigreal Implosion Interruptibility & First-Stage Stun Optimization',
    sourceUrl: 'https://liquipedia.net/mobilelegends/Patch_1.8.30',
    sourceType: 'secondary',
    sourceName: 'Liquipedia MLBB Patch Archive'
  },
  {
    patchVersion: 'Patch 1.8.20',
    releaseDate: '2023-09-19',
    majorTheme: 'Project NEXT 2023: Hero Release Nolan, Support Revitalizations (Mathilda, Floryn)',
    sourceUrl: 'https://liquipedia.net/mobilelegends/Patch_1.8.20',
    sourceType: 'secondary',
    sourceName: 'Liquipedia MLBB Patch Archive'
  },
  {
    patchVersion: 'Patch 1.8.08',
    releaseDate: '2023-08-08',
    majorTheme: 'Post-Emblem Hero Rebalances: Alpha True Damage Tuning',
    sourceUrl: 'https://liquipedia.net/mobilelegends/Patch_1.8.08',
    sourceType: 'secondary',
    sourceName: 'Liquipedia MLBB Patch Archive'
  },
  {
    patchVersion: 'Patch 1.8.47',
    releaseDate: '2024-01-09',
    majorTheme: 'Balance Tuning: Post-Cici Follow-up Hotfix',
    sourceUrl: 'https://liquipedia.net/mobilelegends/Patch_1.8.47',
    sourceType: 'secondary',
    sourceName: 'Liquipedia MLBB Patch Archive'
  },
  {
    patchVersion: 'Patch 1.7.94',
    releaseDate: '2023-06-27',
    majorTheme: 'Project NEXT 2023: Season 29 Official Server Debut & Emblem Revamp',
    sourceUrl: 'https://liquipedia.net/mobilelegends/Patch_1.7.94',
    sourceType: 'secondary',
    sourceName: 'Liquipedia MLBB Patch Archive'
  },
  {
    patchVersion: 'Patch 1.7.82B',
    releaseDate: '2023-05-30',
    majorTheme: 'High-Rank Competitive Tuning: Joy Damage Scaling & Arlott Vengeance Nerf',
    sourceUrl: 'https://liquipedia.net/mobilelegends/Patch_1.7.82B',
    sourceType: 'secondary',
    sourceName: 'Liquipedia MLBB Patch Archive'
  },
  {
    patchVersion: 'Patch 1.7.58',
    releaseDate: '2023-02-14',
    majorTheme: 'Hero Release: Arlott (Lone Lancer)',
    sourceUrl: 'https://liquipedia.net/mobilelegends/Patch_1.7.58',
    sourceType: 'secondary',
    sourceName: 'Liquipedia MLBB Patch Archive'
  },
  {
    patchVersion: 'Patch 1.7.44',
    releaseDate: '2022-12-20',
    majorTheme: 'M4 World Championship Update: Beatrix & Wanwan Rebalance',
    sourceUrl: 'https://liquipedia.net/mobilelegends/Patch_1.7.44',
    sourceType: 'secondary',
    sourceName: 'Liquipedia MLBB Patch Archive'
  },
  {
    patchVersion: 'Patch 1.7.20',
    releaseDate: '2022-09-20',
    majorTheme: 'Project NEXT 2022: Gusion & Lesley Revamps',
    sourceUrl: 'https://liquipedia.net/mobilelegends/Patch_1.7.20',
    sourceType: 'secondary',
    sourceName: 'Liquipedia MLBB Patch Archive'
  }
];

/**
 * Checks whether a given patch version is in the registered historical patch database.
 */
export function isRegisteredPatch(patchVersion: string): boolean {
  return HISTORICAL_PATCH_REGISTRY.some((p) => p.patchVersion === patchVersion);
}

/**
 * Retrieves the official release date for a given patch version.
 */
export function getPatchReleaseDate(patchVersion: string): string | undefined {
  return HISTORICAL_PATCH_REGISTRY.find((p) => p.patchVersion === patchVersion)?.releaseDate;
}

/**
 * Retrieves full patch metadata for a registered patch.
 */
export function getPatchMetadata(patchVersion: string): HistoricalPatchMeta | undefined {
  return HISTORICAL_PATCH_REGISTRY.find((p) => p.patchVersion === patchVersion);
}

/**
 * Registers a new Original Server patch into the historical registry.
 * Prevents accidental overwrite of existing historical records.
 */
export function registerPatch(patchMeta: HistoricalPatchMeta): boolean {
  if (isRegisteredPatch(patchMeta.patchVersion)) {
    return false;
  }
  HISTORICAL_PATCH_REGISTRY.unshift(patchMeta);
  return true;
}

