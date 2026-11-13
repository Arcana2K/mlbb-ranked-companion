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
  'popol-and-kupa': {
    heroId: 'popol-and-kupa',
    patchVersion: CURRENT_ORIGINAL_SERVER_PATCH,
    auditDate: '2026-11-11',
    sourceName: 'MLBBHub Patch Archive (Secondary Source)',
    sourceUrl: 'https://mlbbhub.com/patch-notes/original/2.2.23',
    sourceType: 'secondary',
    auditResult: 'changed',
    notes: 'Documented hero rework: Passive level-scaling Kupa with out-of-combat regen and prayer revival, Skill 2 riding mechanic, updated Skill 1/3 combos, and 9s Alpha Wolf Ultimate.'
  },
  xavier: {
    heroId: 'xavier',
    patchVersion: CURRENT_ORIGINAL_SERVER_PATCH,
    auditDate: '2026-11-11',
    sourceName: 'MLBBHub Patch Archive (Secondary Source)',
    sourceUrl: 'https://mlbbhub.com/patch-notes/original/2.2.23',
    sourceType: 'secondary',
    auditResult: 'changed',
    notes: 'Documented balance buff: Passive MS increased to 60% (slower decay), Skill 1 & 2 backswing reduced by 50%, Skill 2 barrier direct damage shifted into Mystic Field activation (440–690 +130% Total Magic Power), and Mystic Field MS trigger fixed.'
  },
  lunox: {
    heroId: 'lunox',
    patchVersion: CURRENT_ORIGINAL_SERVER_PATCH,
    auditDate: '2026-11-11',
    sourceName: 'MLBBHub Patch Archive (Secondary Source)',
    sourceUrl: 'https://mlbbhub.com/patch-notes/original/2.2.23',
    sourceType: 'secondary',
    auditResult: 'changed',
    notes: 'Documented balance buff: Passive grants immediate 10% Spell Vamp (Order) or 10% Magic Penetration (Chaos); Skill 2 extra % HP damage buffed (3.5%–5% heroes, 2.1%–3% creeps); Ultimate (Chaos) dash foreswing -50% and damage adjusted to 150–300 (+135% Total Magic Power).'
  },
  freya: {
    heroId: 'freya',
    patchVersion: CURRENT_ORIGINAL_SERVER_PATCH,
    auditDate: '2026-11-11',
    sourceName: 'MLBBHub Patch Archive (Secondary Source)',
    sourceUrl: 'https://mlbbhub.com/patch-notes/original/2.2.23',
    sourceType: 'secondary',
    auditResult: 'changed',
    notes: 'Documented balance buff: Passive Sacred Orb consumption recovers 20 (+3*Level) (+20% Total Physical Attack) HP on next Basic Attack; Ultimate cooldown increased to 60–44s, Basic Attack regen removed, +30 Movement Speed added, and Enhanced Basic Attack damage adjusted to 100–200 (+70% Total Physical Attack).'
  },
  gloo: {
    heroId: 'gloo',
    patchVersion: CURRENT_ORIGINAL_SERVER_PATCH,
    auditDate: '2026-11-11',
    sourceName: 'MLBBHub Patch Archive (Secondary Source)',
    sourceUrl: 'https://mlbbhub.com/patch-notes/original/2.2.23',
    sourceType: 'secondary',
    auditResult: 'changed',
    notes: 'Documented balance nerf: Skill 1 immobilize duration reduced to 0.6s, Skill 1 explosion damage reduced to 230–380 (+11% Extra HP), and Skill 3 damage transfer ratio reduced from 80% to 60%.'
  },
  masha: {
    heroId: 'masha',
    patchVersion: CURRENT_ORIGINAL_SERVER_PATCH,
    auditDate: '2026-11-11',
    sourceName: 'MLBBHub Patch Archive (Secondary Source)',
    sourceUrl: 'https://mlbbhub.com/patch-notes/original/2.2.23',
    sourceType: 'secondary',
    auditResult: 'changed',
    notes: 'Documented balance nerf: 50% slow (1s) relocated from Skill 1 to Skill 2; Skill 2 path narrowed by 20%; Skill 1 & Skill 2 damage reduced (Skill 1 minion damage buffed); Passive Wound trigger optimized and Max HP damage/HP regen reduced; claw strike effectiveness slightly reduced.'
  },
  lukas: {
    heroId: 'lukas',
    patchVersion: CURRENT_ORIGINAL_SERVER_PATCH,
    auditDate: '2026-11-11',
    sourceName: 'MLBBHub Patch Archive (Secondary Source)',
    sourceUrl: 'https://mlbbhub.com/patch-notes/original/2.2.23',
    sourceType: 'secondary',
    auditResult: 'changed',
    notes: 'Documented balance adjustment: Base HP (2620) and Base Physical Defense (23) increased; Skill 1 Pulverize/Spin base damage and HP Regen (8% Max HP) increased while Physical Attack scaling was lowered.'
  },
  aldous: {
    heroId: 'aldous',
    patchVersion: CURRENT_ORIGINAL_SERVER_PATCH,
    auditDate: '2026-11-11',
    sourceName: 'MLBBHub Patch Archive (Secondary Source)',
    sourceUrl: 'https://mlbbhub.com/patch-notes/original/2.2.23',
    sourceType: 'secondary',
    auditResult: 'changed',
    notes: 'Documented balance buff: Skill 2 cooldown reduced from 12–9.5s to 8s at all levels and damage reduction increased from 30% to 30%–55%.'
  },
  atlas: {
    heroId: 'atlas',
    patchVersion: CURRENT_ORIGINAL_SERVER_PATCH,
    auditDate: '2026-11-11',
    sourceName: 'MLBBHub Patch Archive (Secondary Source)',
    sourceUrl: 'https://mlbbhub.com/patch-notes/original/2.2.23',
    sourceType: 'secondary',
    auditResult: 'changed',
    notes: 'Documented balance nerf: Passive Frigid Breath duration reduced to 4s and freeze cooldown increased to 4s; defense bonus increased to 20 (+0.7% Extra HP).'
  },
  karrie: {
    heroId: 'karrie',
    patchVersion: CURRENT_ORIGINAL_SERVER_PATCH,
    auditDate: '2026-11-11',
    sourceName: 'MLBBHub Patch Archive (Secondary Source)',
    sourceUrl: 'https://mlbbhub.com/patch-notes/original/2.2.23',
    sourceType: 'secondary',
    auditResult: 'changed',
    notes: 'Documented balance adjustment: Skill 1 Physical Attack scaling reduced (90%->20% base, 20%->10% sustained) with clearer VFX/hit detection; Skill 2 hero-priority detection; Ultimate lightwheel base damage increased to 50 and movement speed boost to 30%.'
  },
  kaja: {
    heroId: 'kaja',
    patchVersion: CURRENT_ORIGINAL_SERVER_PATCH,
    auditDate: '2026-11-11',
    sourceName: 'MLBBHub Patch Archive (Secondary Source)',
    sourceUrl: 'https://mlbbhub.com/patch-notes/original/2.2.23',
    sourceType: 'secondary',
    auditResult: 'changed',
    notes: 'Documented balance buff: Skill 2 Soaring turning speed improved and state duration extended by enhanced Basic Attacks and Skill 2 minion hits; Ultimate delay slightly increased and Control Immunity can no longer escape Ultimate area.'
  },
  kagura: {
    heroId: 'kagura',
    patchVersion: CURRENT_ORIGINAL_SERVER_PATCH,
    auditDate: '2026-11-11',
    sourceName: 'MLBBHub Patch Archive (Secondary Source)',
    sourceUrl: 'https://mlbbhub.com/patch-notes/original/2.2.23',
    sourceType: 'secondary',
    auditResult: 'changed',
    notes: 'Documented balance adjustment: Optimized visual indicator for maximum separation distance between the Seimei Umbrella and Kagura.'
  },
  uranus: {
    heroId: 'uranus',
    patchVersion: CURRENT_ORIGINAL_SERVER_PATCH,
    auditDate: '2026-11-11',
    sourceName: 'MLBBHub Patch Archive (Secondary Source)',
    sourceUrl: 'https://mlbbhub.com/patch-notes/original/2.2.23',
    sourceType: 'secondary',
    auditResult: 'changed',
    notes: "Documented balance adjustment: Changed Basic Attack's Splash Damage to Magic Damage."
  },
  melissa: {
    heroId: 'melissa',
    patchVersion: CURRENT_ORIGINAL_SERVER_PATCH,
    auditDate: '2026-11-11',
    sourceName: 'MLBBHub Patch Archive (Secondary Source)',
    sourceUrl: 'https://mlbbhub.com/patch-notes/original/2.2.23',
    sourceType: 'secondary',
    auditResult: 'changed',
    notes: "Documented balance buff: Skill 2 Muddles's Damage Transfer and Attack Effect Inheritance Ratio adjusted from 52% at all levels to 50%–60%."
  }
};

/**
 * Retrieves structured audit record for a given hero in the active patch.
 */
export function getCurrentPatchAuditRecord(heroId: string): CurrentPatchAuditRecord | undefined {
  return CURRENT_PATCH_AUDIT_REGISTRY[heroId];
}
