import { Hero } from '../types/mlbb';
import { CURRENT_PATCH_CONFIG } from './patchConfig';

export const EXPECTED_HERO_COUNT = 133;

export interface HeroCatalogValidationReport {
  valid: boolean;
  errors: string[];
  stats: {
    totalHeroes: number;
    verifiedHeroes: number;
    unverifiedHeroes: number;
    heroesWithPatchHistory: number;
    totalPatchChanges: number;
    totalVerifiedPatchRecords: number;
    totalUnverifiedPatchRecords: number;
    latestOriginalServerPatch: string;
  };
}

/**
 * Strict validator for MLBB Hero Database and Patch History.
 * Audits:
 * 1. Completeness, uniqueness, and reference integrity.
 * 2. Ability kits, descriptions, and mechanics checklists.
 * 3. Verification labels and absence of generic homepage sources.
 * 4. Patch changes: patchVersion, date format (YYYY-MM-DD), category, affected skill,
 *    numerical previous/new values when present, source type, and duplication detection.
 * 5. Conflict detection between current hero attributes and documented revamps.
 */
export function validateHeroCatalog(heroes: Hero[]): HeroCatalogValidationReport {
  const errors: string[] = [];
  const idSet = new Set<string>();

  let verifiedHeroes = 0;
  let unverifiedHeroes = 0;
  let heroesWithPatchHistory = 0;
  let totalPatchChanges = 0;
  let totalVerifiedPatchRecords = 0;
  let totalUnverifiedPatchRecords = 0;

  // 1. Catalog completeness
  if (heroes.length < EXPECTED_HERO_COUNT) {
    errors.push(`Hero catalog is incomplete: expected at least ${EXPECTED_HERO_COUNT} heroes, found ${heroes.length}`);
  }

  // 2. Audit core attributes & ID uniqueness
  for (const h of heroes) {
    if (!h.id || typeof h.id !== 'string') {
      errors.push(`Hero missing valid id: ${JSON.stringify(h)}`);
      continue;
    }
    if (idSet.has(h.id)) {
      errors.push(`Duplicate hero ID detected: ${h.id}`);
    }
    idSet.add(h.id);

    if (!h.name) errors.push(`Hero ${h.id} missing official name`);
    if (!h.avatar) errors.push(`Hero ${h.id} missing avatar URL`);
    if (!h.primaryRole) errors.push(`Hero ${h.id} missing primaryRole`);
    if (!h.primaryLane) errors.push(`Hero ${h.id} missing primaryLane`);
    if (!h.damageType) errors.push(`Hero ${h.id} missing damageType`);
    if (!h.difficulty) errors.push(`Hero ${h.id} missing difficulty rating`);
    if (!Array.isArray(h.specialties) || h.specialties.length === 0) {
      errors.push(`Hero ${h.id} missing valid specialties array`);
    }
    if (!Array.isArray(h.strengths) || h.strengths.length === 0) {
      errors.push(`Hero ${h.id} missing strengths array`);
    }
    if (!Array.isArray(h.weaknesses) || h.weaknesses.length === 0) {
      errors.push(`Hero ${h.id} missing weaknesses array`);
    }
  }

  // 3. Audit abilities, mechanics, verification, and patch history
  for (const h of heroes) {
    // Audit Abilities
    if (!Array.isArray(h.skills) || h.skills.length < 3) {
      errors.push(`Hero ${h.id} missing complete ability kit (found ${h.skills?.length || 0} skills)`);
    } else {
      for (const skill of h.skills) {
        if (!skill.id || !skill.name || !skill.type || !skill.description) {
          errors.push(`Hero ${h.id} has invalid skill definition: ${JSON.stringify(skill)}`);
        }
      }
    }

    // Audit Gameplay Mechanics
    if (!h.gameplayMechanics) {
      errors.push(`Hero ${h.id} missing gameplay mechanics specification`);
    } else {
      if (!Array.isArray(h.gameplayMechanics.crowdControl)) {
        errors.push(`Hero ${h.id} missing crowdControl mechanics array`);
      }
      if (!Array.isArray(h.gameplayMechanics.mobility)) {
        errors.push(`Hero ${h.id} missing mobility mechanics array`);
      }
      if (!Array.isArray(h.gameplayMechanics.damageCharacteristics)) {
        errors.push(`Hero ${h.id} missing damageCharacteristics mechanics array`);
      }
    }

    // Audit Verification Metadata
    if (!h.verification) {
      errors.push(`Hero ${h.id} missing verification metadata`);
    } else {
      const v = h.verification;
      if (v.verificationStatus === 'verified') {
        verifiedHeroes++;

        if (!v.sourceUrl || v.sourceUrl.trim() === '') {
          errors.push(`Hero ${h.id} marked as verified but missing source URL`);
        } else if (
          v.sourceUrl === 'https://www.mobilelegends.com' ||
          v.sourceUrl === 'https://www.mobilelegends.com/'
        ) {
          errors.push(`Hero ${h.id} uses generic homepage as verification evidence instead of specific patch notes.`);
        }

        if (!v.source || v.source.trim() === '') {
          errors.push(`Hero ${h.id} marked as verified but missing source name`);
        }

        // Check source labeling honesty: secondary source must not be labeled as official
        if (v.sourceUrl.includes('liquipedia.net') && v.sourceType === 'official') {
          errors.push(`Hero ${h.id} incorrectly labels Liquipedia secondary source as official Moonton source`);
        }
      } else if (v.verificationStatus === 'unverified') {
        unverifiedHeroes++;
      } else {
        errors.push(`Hero ${h.id} has invalid verificationStatus: "${v.verificationStatus}"`);
      }
    }

    // Audit Patch History Changes
    if (h.patchHistory && h.patchHistory.length > 0) {
      heroesWithPatchHistory++;
      totalPatchChanges += h.patchHistory.length;

      const patchKeySet = new Set<string>();

      for (const patch of h.patchHistory) {
        if (patch.verificationStatus === 'verified') {
          totalVerifiedPatchRecords++;
        } else {
          totalUnverifiedPatchRecords++;
        }

        // Duplicate patch record detection per hero
        const patchKey = `${patch.patchVersion}::${patch.affectedSkillOrAttribute || patch.title}`;
        if (patchKeySet.has(patchKey)) {
          errors.push(`Hero ${h.id} has duplicate patch record: "${patchKey}"`);
        }
        patchKeySet.add(patchKey);

        if (!patch.patchVersion || patch.patchVersion.trim() === '') {
          errors.push(`Hero ${h.id} has patch change missing patchVersion`);
        }
        if (!patch.date || !/^\d{4}-\d{2}-\d{2}$/.test(patch.date)) {
          errors.push(`Hero ${h.id} has patch change with invalid date format (expected YYYY-MM-DD): "${patch.date}"`);
        }
        if (!['revamp', 'rework', 'buff', 'nerf', 'adjustment'].includes(patch.type)) {
          errors.push(`Hero ${h.id} has patch change with invalid type: "${patch.type}"`);
        }
        if (!patch.title || !patch.summary) {
          errors.push(`Hero ${h.id} has patch change missing title or summary`);
        }
        if (!patch.affectedSkillOrAttribute || patch.affectedSkillOrAttribute.trim() === '') {
          errors.push(`Hero ${h.id} patch change "${patch.title}" missing affectedSkillOrAttribute`);
        }
        if (!Array.isArray(patch.details) || patch.details.length === 0) {
          errors.push(`Hero ${h.id} has patch change missing details array`);
        }

        // Audit Source Credibility
        if (!patch.sourceUrl || patch.sourceUrl.trim() === '') {
          errors.push(`Hero ${h.id} has patch change "${patch.title}" missing specific sourceUrl`);
        } else if (
          patch.sourceUrl === 'https://www.mobilelegends.com' ||
          patch.sourceUrl === 'https://www.mobilelegends.com/'
        ) {
          errors.push(`Hero ${h.id} patch change uses generic homepage instead of specific patch notes source`);
        }

        // Audit Source Type Labeling
        if (patch.sourceUrl.includes('liquipedia.net') && patch.sourceType === 'official') {
          errors.push(`Hero ${h.id} patch change "${patch.title}" mislabels Liquipedia secondary source as official`);
        }
      }
    }

    // 4. Conflict detection between current hero data and documented patch changes
    if (h.id === 'phoveus') {
      const hasPhysicalRevamp = h.patchHistory?.some(
        (p) => p.type === 'revamp' && p.details.some((d) => d.toLowerCase().includes('physical damage'))
      );
      if (hasPhysicalRevamp && h.damageType !== 'Physical') {
        errors.push(`Conflict: Phoveus has documented Physical Damage revamp but catalog damageType is "${h.damageType}"`);
      }
    }

    if (h.id === 'alice') {
      const hasTankRework = h.patchHistory?.some(
        (p) => p.type === 'rework' && p.title.toLowerCase().includes('tank')
      );
      if (hasTankRework && h.primaryRole !== 'Tank' && h.secondaryRole !== 'Tank') {
        errors.push(`Conflict: Alice has documented Tank/Initiator rework but roles are "${h.primaryRole}/${h.secondaryRole}"`);
      }
    }

    if (h.id === 'granger') {
      const hasDemonicEnergy = h.patchHistory?.some(
        (p) => p.type === 'rework' && p.title.toLowerCase().includes('demonic energy')
      );
      if (hasDemonicEnergy && h.gameplayMechanics?.resourceType !== 'Demonic Energy') {
        errors.push(`Conflict: Granger has documented Demonic Energy rework but resourceType is "${h.gameplayMechanics?.resourceType}"`);
      }
    }

    // Audit Matchup Reference Integrity
    for (const c of h.counters || []) {
      if (!idSet.has(c)) {
        errors.push(`Hero ${h.id} has invalid counter reference: "${c}"`);
      }
    }
    for (const c of h.counteredBy || []) {
      if (!idSet.has(c)) {
        errors.push(`Hero ${h.id} has invalid counteredBy reference: "${c}"`);
      }
    }
    for (const s of h.synergies || []) {
      if (!idSet.has(s)) {
        errors.push(`Hero ${h.id} has invalid synergy reference: "${s}"`);
      }
    }
  }

  return {
    valid: errors.length === 0,
    errors,
    stats: {
      totalHeroes: heroes.length,
      verifiedHeroes,
      unverifiedHeroes,
      heroesWithPatchHistory,
      totalPatchChanges,
      totalVerifiedPatchRecords,
      totalUnverifiedPatchRecords,
      latestOriginalServerPatch: CURRENT_PATCH_CONFIG.latestOriginalServerPatch
    }
  };
}
