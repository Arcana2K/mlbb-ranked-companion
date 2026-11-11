import { CurrentPatchAuditRecord } from '../types/mlbb';
import { CURRENT_ORIGINAL_SERVER_PATCH } from './heroPatchHistory';

/**
 * Structured Current Patch Audit Evidence Registry.
 *
 * Replaces unstructured text searching in patch descriptions with structured audit evidence.
 *
 * Rules:
 * 1. A hero with auditResult: 'changed' must be supported by a corresponding verified patch record
 *    in HERO_PATCH_HISTORY for CURRENT_ORIGINAL_SERVER_PATCH.
 * 2. A hero with auditResult: 'confirmed_unchanged' must have an explicit audit record verifying
 *    that the patch notes were reviewed and confirmed absence of live adjustments.
 * 3. Heroes without sufficient evidence remain 'unreviewed'.
 */
export const CURRENT_PATCH_AUDIT_REGISTRY: Record<string, CurrentPatchAuditRecord> = {
  aulus: {
    heroId: 'aulus',
    patchVersion: CURRENT_ORIGINAL_SERVER_PATCH,
    auditDate: '2026-10-14',
    sourceName: 'Liquipedia MLBB Patch 2.2.16a Hotfix Archive',
    sourceUrl: 'https://liquipedia.net/mobilelegends/Patch_2.2.16a',
    sourceType: 'secondary',
    auditResult: 'changed',
    notes: 'Documented balance tuning to Passive Fighting Spirit lifesteal and attack speed scaling.'
  },
  hirara: {
    heroId: 'hirara',
    patchVersion: CURRENT_ORIGINAL_SERVER_PATCH,
    auditDate: '2026-10-14',
    sourceName: 'Liquipedia MLBB Patch 2.2.16a Hotfix Archive',
    sourceUrl: 'https://liquipedia.net/mobilelegends/Patch_2.2.16a',
    sourceType: 'secondary',
    auditResult: 'changed',
    notes: 'Documented balance tuning to Skill 1 base damage and cooldown.'
  },
  eudora: {
    heroId: 'eudora',
    patchVersion: CURRENT_ORIGINAL_SERVER_PATCH,
    auditDate: '2026-10-14',
    sourceName: 'Liquipedia MLBB Patch 2.2.16a Hotfix Archive',
    sourceUrl: 'https://liquipedia.net/mobilelegends/Patch_2.2.16a',
    sourceType: 'secondary',
    auditResult: 'changed',
    notes: 'Documented balance adjustment to Skill 2 Electric Arrow stun duration and cooldown.'
  },
  rafaela: {
    heroId: 'rafaela',
    patchVersion: CURRENT_ORIGINAL_SERVER_PATCH,
    auditDate: '2026-10-14',
    sourceName: 'Liquipedia MLBB Patch 2.2.16a Hotfix Archive',
    sourceUrl: 'https://liquipedia.net/mobilelegends/Patch_2.2.16a',
    sourceType: 'secondary',
    auditResult: 'changed',
    notes: 'Documented balance buff to Skill 2 Holy Healing movement speed buff duration.'
  },
  kalea: {
    heroId: 'kalea',
    patchVersion: CURRENT_ORIGINAL_SERVER_PATCH,
    auditDate: '2026-10-14',
    sourceName: 'Liquipedia MLBB Patch 2.2.16a Hotfix Archive',
    sourceUrl: 'https://liquipedia.net/mobilelegends/Patch_2.2.16a',
    sourceType: 'secondary',
    auditResult: 'changed',
    notes: 'Documented balance adjustment to Ultimate tidal wave damage and displacement duration.'
  },
  khufra: {
    heroId: 'khufra',
    patchVersion: CURRENT_ORIGINAL_SERVER_PATCH,
    auditDate: '2026-10-14',
    sourceName: 'Liquipedia MLBB Patch 2.2.16a Hotfix Archive',
    sourceUrl: 'https://liquipedia.net/mobilelegends/Patch_2.2.16a',
    sourceType: 'secondary',
    auditResult: 'confirmed_unchanged',
    notes: 'Reviewed against official Patch 2.2.16a hotfix release; confirmed no live stat or balance adjustments were applied to Khufra.'
  }
};

/**
 * Retrieves structured audit record for a given hero in the active patch.
 */
export function getCurrentPatchAuditRecord(heroId: string): CurrentPatchAuditRecord | undefined {
  return CURRENT_PATCH_AUDIT_REGISTRY[heroId];
}
