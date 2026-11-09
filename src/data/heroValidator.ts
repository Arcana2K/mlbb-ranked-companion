import { Hero } from '../types/mlbb';

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
  };
}

/**
 * Strict validator to guarantee catalog completeness, uniqueness, skill integrity,
 * source credibility, and verification status accuracy.
 *
 * Rules:
 * - Checks completeness against official MLBB roster count.
 * - Detects duplicate hero IDs.
 * - Enforces required attributes, abilities, and mechanics.
 * - Rejects generic root domain (e.g., 'https://www.mobilelegends.com') as valid evidence for hero verification.
 * - Validates patch change structure, dates, and specific source URLs.
 * - Distinguishes verified vs unverified entries instead of treating presence as proof of accuracy.
 */
export function validateHeroCatalog(heroes: Hero[]): HeroCatalogValidationReport {
  const errors: string[] = [];
  const idSet = new Set<string>();

  let verifiedHeroes = 0;
  let unverifiedHeroes = 0;
  let heroesWithPatchHistory = 0;
  let totalPatchChanges = 0;

  // 1. Check catalog completeness against official MLBB roster count
  if (heroes.length < EXPECTED_HERO_COUNT) {
    errors.push(`Hero catalog is incomplete: expected at least ${EXPECTED_HERO_COUNT} heroes, found ${heroes.length}`);
  }

  // 2. Audit core hero attributes and ID uniqueness
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

  // 3. Audit abilities, mechanics, verification status, and patch evidence
  for (const h of heroes) {
    // Audit Ability Kit completeness
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

        // A verified hero MUST have specific source information, NOT a generic root homepage
        if (!v.sourceUrl || v.sourceUrl.trim() === '') {
          errors.push(`Hero ${h.id} marked as verified but missing source URL`);
        } else if (
          v.sourceUrl === 'https://www.mobilelegends.com' ||
          v.sourceUrl === 'https://www.mobilelegends.com/'
        ) {
          errors.push(
            `Hero ${h.id} uses generic homepage as verification evidence instead of specific patch notes or documentation.`
          );
        }

        if (!v.source || v.source.trim() === '') {
          errors.push(`Hero ${h.id} marked as verified but missing source name`);
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

      for (const patch of h.patchHistory) {
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
        if (!Array.isArray(patch.details) || patch.details.length === 0) {
          errors.push(`Hero ${h.id} has patch change missing details array`);
        }
        // Patch changes must cite a specific source URL
        if (!patch.sourceUrl || patch.sourceUrl.trim() === '') {
          errors.push(`Hero ${h.id} has patch change "${patch.title}" missing specific sourceUrl`);
        } else if (
          patch.sourceUrl === 'https://www.mobilelegends.com' ||
          patch.sourceUrl === 'https://www.mobilelegends.com/'
        ) {
          errors.push(`Hero ${h.id} patch change uses generic homepage instead of specific patch notes source`);
        }
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
      totalPatchChanges
    }
  };
}
