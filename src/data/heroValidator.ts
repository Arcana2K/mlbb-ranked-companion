import { Hero } from '../types/mlbb';
import { CURRENT_PATCH_CONFIG, isRegisteredPatch, getPatchReleaseDate } from './patchConfig';

export const EXPECTED_HERO_COUNT = 133;

export interface HeroCatalogValidationReport {
  valid: boolean;
  errors: string[];
  warnings: string[];
  unverifiedItems: string[];
  stats: {
    totalHeroes: number;
    fullyVerifiedHeroes: number;
    partiallyVerifiedHeroes: number;
    unverifiedHeroes: number;
    heroesWithVerifiedPatchHistory: number;
    totalPatchChanges: number;
    totalVerifiedPatchRecords: number;
    totalUnverifiedPatchRecords: number;
    latestOriginalServerPatch: string;
  };
}

/**
 * Validates whether a date string is a real calendar date strictly formatted as YYYY-MM-DD.
 */
export function isValidCalendarDate(dateStr: string): boolean {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(dateStr)) return false;
  const [y, m, d] = dateStr.split('-').map(Number);
  if (m < 1 || m > 12 || d < 1 || d > 31) return false;
  const dateObj = new Date(Date.UTC(y, m - 1, d));
  return (
    dateObj.getUTCFullYear() === y &&
    dateObj.getUTCMonth() + 1 === m &&
    dateObj.getUTCDate() === d
  );
}

/**
 * Strict and granular validator for MLBB Hero Database and Patch History.
 * Audits:
 * 1. Completeness, uniqueness, and cross-reference integrity against the entire roster.
 * 2. Ability kits, descriptions, cooldowns/energy, and mechanics checklists.
 * 3. Strict separation of errors, warnings, and unverified data.
 * 4. Granular verification states: skills, mechanics, patch history, and current patch status.
 * 5. Patch changes: patchVersion registry lookup, release date consistency, category, affected skill,
 *    numerical previous/new values when claims are made, source credibility, and duplicate detection.
 * 6. Conflict detection between current hero attributes and documented revamps/reworks.
 */
export function validateHeroCatalog(heroes: Hero[]): HeroCatalogValidationReport {
  const errors: string[] = [];
  const warnings: string[] = [];
  const unverifiedItems: string[] = [];

  // Build the complete ID collection first to check references without iteration-order biases
  const completeHeroIdSet = new Set<string>();
  for (const h of heroes) {
    if (h.id && typeof h.id === 'string') {
      if (completeHeroIdSet.has(h.id)) {
        errors.push(`Duplicate hero ID detected: ${h.id}`);
      }
      completeHeroIdSet.add(h.id);
    } else {
      errors.push(`Hero missing valid id: ${JSON.stringify(h)}`);
    }
  }

  let fullyVerifiedHeroes = 0;
  let partiallyVerifiedHeroes = 0;
  let unverifiedHeroes = 0;
  let heroesWithVerifiedPatchHistory = 0;
  let totalPatchChanges = 0;
  let totalVerifiedPatchRecords = 0;
  let totalUnverifiedPatchRecords = 0;

  // 1. Catalog completeness check
  if (heroes.length < EXPECTED_HERO_COUNT) {
    errors.push(`Hero catalog is incomplete: expected at least ${EXPECTED_HERO_COUNT} heroes, found ${heroes.length}`);
  }

  // 2. Audit core attributes, ability kits, mechanics, and verification
  for (const h of heroes) {
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

    // Audit Verification Metadata and Granular States
    if (!h.verification) {
      errors.push(`Hero ${h.id} missing verification metadata`);
    } else {
      const v = h.verification;

      // Track stats based on overall verification
      if (v.verificationStatus === 'verified') {
        fullyVerifiedHeroes++;
      } else if (v.verificationStatus === 'partial') {
        partiallyVerifiedHeroes++;
      } else if (v.verificationStatus === 'unverified') {
        unverifiedHeroes++;
      } else {
        errors.push(`Hero ${h.id} has invalid verificationStatus: "${v.verificationStatus}"`);
      }

      // Check granular status values
      if (!['verified', 'unverified', 'community_reference'].includes(v.skillsVerificationStatus)) {
        errors.push(`Hero ${h.id} has invalid skillsVerificationStatus: "${v.skillsVerificationStatus}"`);
      }
      if (!['verified', 'unverified', 'community_reference'].includes(v.mechanicsVerificationStatus)) {
        errors.push(`Hero ${h.id} has invalid mechanicsVerificationStatus: "${v.mechanicsVerificationStatus}"`);
      }
      if (!['verified', 'unverified', 'partial'].includes(v.patchHistoryVerificationStatus)) {
        errors.push(`Hero ${h.id} has invalid patchHistoryVerificationStatus: "${v.patchHistoryVerificationStatus}"`);
      }
      if (!['verified_changed', 'confirmed_unchanged', 'unreviewed', 'verified', 'unverified'].includes(v.currentPatchVerificationStatus)) {
        errors.push(`Hero ${h.id} has invalid currentPatchVerificationStatus: "${v.currentPatchVerificationStatus}"`);
      }

      // Category 1 & 2 Evidence Checks (Skills and Mechanics)
      const validateEvidence = (
        categoryName: 'skills' | 'mechanics',
        status: 'verified' | 'unverified' | 'community_reference',
        evidence: typeof v.skillsEvidence
      ) => {
        if (status === 'verified') {
          // Requirement 1 & 2: verified status requires complete and valid evidence
          if (!evidence) {
            errors.push(`Hero ${h.id} marked ${categoryName} as verified without structured ${categoryName}Evidence`);
            return;
          }

          // Requirement 5: Ensure unverified or community-reference data cannot be counted as verified
          const evidenceStatus = evidence.verificationStatus || evidence.status;
          if (evidenceStatus !== 'verified') {
            errors.push(`Hero ${h.id} marked ${categoryName}VerificationStatus="verified" but ${categoryName}Evidence status is "${evidenceStatus}"`);
          }

          // Requirement 3: Validate source name, specific source URL, source type, and real calendar verification date
          if (!evidence.sourceName || evidence.sourceName.trim() === '') {
            errors.push(`Hero ${h.id} has incomplete ${categoryName}Evidence: missing sourceName`);
          }

          if (!evidence.sourceUrl || evidence.sourceUrl.trim() === '') {
            errors.push(`Hero ${h.id} has incomplete ${categoryName}Evidence: missing sourceUrl`);
          } else {
            // Requirement 4: Reject generic homepage URLs and incorrect official/secondary source labels
            if (
              evidence.sourceUrl === 'https://www.mobilelegends.com' ||
              evidence.sourceUrl === 'https://www.mobilelegends.com/'
            ) {
              errors.push(`Hero ${h.id} ${categoryName}Evidence uses generic homepage as sourceUrl instead of specific documentation`);
            }
            if (evidence.sourceUrl.includes('liquipedia.net') && evidence.sourceType === 'official') {
              errors.push(`Hero ${h.id} ${categoryName}Evidence mislabels Liquipedia secondary source as official`);
            }
          }

          if (!evidence.sourceType || !['official', 'secondary'].includes(evidence.sourceType)) {
            errors.push(`Hero ${h.id} ${categoryName}Evidence has invalid sourceType: "${evidence.sourceType}" (expected "official" or "secondary")`);
          }

          if (!evidence.verifiedDate || !isValidCalendarDate(evidence.verifiedDate)) {
            errors.push(`Hero ${h.id} ${categoryName}Evidence has invalid calendar verifiedDate: "${evidence.verifiedDate}" (expected valid YYYY-MM-DD)`);
          }
        } else {
          // If status is unverified or community_reference, ensure verified evidence is not inconsistently attached without updating status
          if (evidence) {
            const evidenceStatus = evidence.verificationStatus || evidence.status;
            if (evidenceStatus === 'verified') {
              errors.push(`Hero ${h.id} has verified ${categoryName}Evidence but ${categoryName}VerificationStatus is "${status}"`);
            }
            if (evidence.verifiedDate && !isValidCalendarDate(evidence.verifiedDate)) {
              errors.push(`Hero ${h.id} ${categoryName}Evidence has invalid calendar verifiedDate: "${evidence.verifiedDate}"`);
            }
            if (evidence.sourceUrl && (evidence.sourceUrl === 'https://www.mobilelegends.com' || evidence.sourceUrl === 'https://www.mobilelegends.com/')) {
              errors.push(`Hero ${h.id} ${categoryName}Evidence uses generic homepage as sourceUrl`);
            }
            if (evidence.sourceUrl && evidence.sourceUrl.includes('liquipedia.net') && evidence.sourceType === 'official') {
              errors.push(`Hero ${h.id} ${categoryName}Evidence mislabels Liquipedia secondary source as official`);
            }
          }
        }
      };

      validateEvidence('skills', v.skillsVerificationStatus, v.skillsEvidence);
      validateEvidence('mechanics', v.mechanicsVerificationStatus, v.mechanicsEvidence);

      // Category 4 Current Patch Audit Checks
      const hasActivePatchChangeRecord = (h.patchHistory || []).some(
        (p) => p.patchVersion === CURRENT_PATCH_CONFIG.latestOriginalServerPatch && p.verificationStatus === 'verified'
      );

      // Verify status expectations against patch records and audit registry
      if (v.currentPatchVerificationStatus === 'verified_changed') {
        // Requirement 6: Ensure changed matches an existing verified patch-history record
        if (!hasActivePatchChangeRecord) {
          errors.push(`Hero ${h.id} marked currentPatchVerificationStatus="verified_changed" without verified patch change for ${CURRENT_PATCH_CONFIG.latestOriginalServerPatch}`);
        }
        if (!v.currentPatchAudit) {
          errors.push(`Hero ${h.id} marked currentPatchVerificationStatus="verified_changed" without structured currentPatchAudit record`);
        } else if (v.currentPatchAudit.auditResult !== 'changed') {
          errors.push(`Hero ${h.id} marked currentPatchVerificationStatus="verified_changed" but currentPatchAudit.auditResult is "${v.currentPatchAudit.auditResult}" (expected "changed")`);
        }
      } else if (v.currentPatchVerificationStatus === 'confirmed_unchanged') {
        // Requirement 7: Ensure confirmed_unchanged does not conflict with a verified patch-history record
        if (hasActivePatchChangeRecord) {
          errors.push(`Hero ${h.id} marked currentPatchVerificationStatus="confirmed_unchanged" but conflicts with verified active patch change record for ${CURRENT_PATCH_CONFIG.latestOriginalServerPatch}`);
        }
        if (!v.currentPatchAudit) {
          errors.push(`Hero ${h.id} marked currentPatchVerificationStatus="confirmed_unchanged" without structured currentPatchAudit record`);
        } else if (v.currentPatchAudit.auditResult !== 'confirmed_unchanged') {
          errors.push(`Hero ${h.id} marked currentPatchVerificationStatus="confirmed_unchanged" but currentPatchAudit.auditResult is "${v.currentPatchAudit.auditResult}" (expected "confirmed_unchanged")`);
        }
      } else if (v.currentPatchVerificationStatus === 'unreviewed') {
        if (hasActivePatchChangeRecord) {
          errors.push(`Hero ${h.id} marked currentPatchVerificationStatus="unreviewed" but has verified patch change for ${CURRENT_PATCH_CONFIG.latestOriginalServerPatch}`);
        }
        if (v.currentPatchAudit && (v.currentPatchAudit.auditResult === 'changed' || v.currentPatchAudit.auditResult === 'confirmed_unchanged')) {
          errors.push(`Hero ${h.id} marked currentPatchVerificationStatus="unreviewed" but has active currentPatchAudit with auditResult="${v.currentPatchAudit.auditResult}"`);
        }
      }

      // Requirements 1-5: Validate currentPatchAudit record (applied to both changed and confirmed_unchanged)
      if (v.currentPatchAudit) {
        const audit = v.currentPatchAudit;

        // Requirement 1: Verify that each audit record's heroId matches its hero
        if (audit.heroId !== h.id) {
          errors.push(`Hero ${h.id} currentPatchAudit heroId mismatch: "${audit.heroId}" does not match hero id "${h.id}"`);
        }

        // Requirement 2: Verify that patchVersion matches the active Original Server patch
        if (audit.patchVersion !== CURRENT_PATCH_CONFIG.latestOriginalServerPatch) {
          errors.push(`Hero ${h.id} currentPatchAudit patchVersion "${audit.patchVersion}" does not match active Original Server patch "${CURRENT_PATCH_CONFIG.latestOriginalServerPatch}"`);
        }

        // Requirement 3: Validate the audit date as a real calendar date in YYYY-MM-DD format
        if (!audit.auditDate || !isValidCalendarDate(audit.auditDate)) {
          errors.push(`Hero ${h.id} currentPatchAudit has invalid calendar auditDate: "${audit.auditDate}" (expected valid YYYY-MM-DD)`);
        }

        // Requirement 4: Require a valid source name, specific source URL, source type, and non-empty notes
        if (!audit.sourceName || audit.sourceName.trim() === '') {
          errors.push(`Hero ${h.id} currentPatchAudit missing valid sourceName`);
        }

        if (!audit.sourceUrl || audit.sourceUrl.trim() === '') {
          errors.push(`Hero ${h.id} currentPatchAudit missing specific sourceUrl`);
        } else {
          if (
            audit.sourceUrl === 'https://www.mobilelegends.com' ||
            audit.sourceUrl === 'https://www.mobilelegends.com/'
          ) {
            errors.push(`Hero ${h.id} currentPatchAudit uses generic homepage as source URL instead of specific patch notes source`);
          }
          if (audit.sourceUrl.includes('liquipedia.net') && audit.sourceType === 'official') {
            errors.push(`Hero ${h.id} currentPatchAudit mislabels Liquipedia secondary source as official`);
          }
        }

        if (!['official', 'secondary'].includes(audit.sourceType)) {
          errors.push(`Hero ${h.id} currentPatchAudit has invalid sourceType: "${audit.sourceType}" (expected "official" or "secondary")`);
        }

        if (!audit.notes || audit.notes.trim() === '') {
          errors.push(`Hero ${h.id} currentPatchAudit missing non-empty audit notes`);
        }

        // Requirement 6 & 7: Check auditResult cross-consistency with patch history
        if (audit.auditResult === 'changed' && !hasActivePatchChangeRecord) {
          errors.push(`Hero ${h.id} currentPatchAudit specifies auditResult="changed" but lacks verified patch change record for ${CURRENT_PATCH_CONFIG.latestOriginalServerPatch}`);
        }
        if (audit.auditResult === 'confirmed_unchanged' && hasActivePatchChangeRecord) {
          errors.push(`Hero ${h.id} currentPatchAudit specifies auditResult="confirmed_unchanged" but conflicts with verified active patch change record for ${CURRENT_PATCH_CONFIG.latestOriginalServerPatch}`);
        }
      }

      // Source Attribution & Mixed Sources Integrity
      if (v.sources && Array.isArray(v.sources)) {
        // Validate each individual source record
        for (const [idx, src] of v.sources.entries()) {
          const srcName = src.sourceName || src.name;
          const srcUrl = src.sourceUrl || src.url;

          if (!srcName || srcName.trim() === '') {
            errors.push(`Hero ${h.id} source record at index ${idx} missing source name`);
          }

          if (!srcUrl || srcUrl.trim() === '') {
            errors.push(`Hero ${h.id} source record "${srcName || idx}" missing source URL`);
          } else {
            if (
              srcUrl === 'https://www.mobilelegends.com' ||
              srcUrl === 'https://www.mobilelegends.com/'
            ) {
              errors.push(`Hero ${h.id} source record "${srcName || idx}" uses generic homepage instead of specific patch source`);
            }
            if (srcUrl.includes('liquipedia.net') && src.sourceType === 'official') {
              errors.push(`Hero ${h.id} source record "${srcName || idx}" mislabels Liquipedia secondary source as official`);
            }
          }

          if (!['official', 'secondary'].includes(src.sourceType)) {
            errors.push(`Hero ${h.id} source record "${srcName || idx}" has invalid sourceType: "${src.sourceType}" (expected "official" or "secondary")`);
          }
        }

        const hasOfficial = v.sources.some((s) => s.sourceType === 'official');
        const hasSecondary = v.sources.some((s) => s.sourceType === 'secondary');

        if (hasOfficial && hasSecondary) {
          if (v.sourceType !== 'mixed') {
            errors.push(`Hero ${h.id} has both official and secondary sources but sourceType is "${v.sourceType}" instead of "mixed"`);
          }
          if (v.sourceUrl && (v.sourceUrl.includes('mobilelegends.com') || v.sourceUrl.includes('liquipedia.net'))) {
            errors.push(`Hero ${h.id} with mixed sources incorrectly provides a single sourceUrl ("${v.sourceUrl}") implying one source covers all records`);
          }
        } else if (hasOfficial && !hasSecondary) {
          if (v.sourceType !== 'official') {
            errors.push(`Hero ${h.id} has only official verified sources but sourceType is "${v.sourceType}"`);
          }
        } else if (hasSecondary && !hasOfficial) {
          if (v.sourceType !== 'secondary') {
            errors.push(`Hero ${h.id} has only secondary verified sources but sourceType is "${v.sourceType}"`);
          }
        }
      }

      // If hero has sourceType === 'mixed', require individual source records in sources and prohibit official_verified tier
      if (v.sourceType === 'mixed') {
        if (!v.sources || !Array.isArray(v.sources) || v.sources.length === 0) {
          errors.push(`Hero ${h.id} marked with mixed sources but missing individual source records in sources`);
        } else {
          const hasOfficial = v.sources.some((s) => s.sourceType === 'official');
          const hasSecondary = v.sources.some((s) => s.sourceType === 'secondary');
          if (!hasOfficial || !hasSecondary) {
            errors.push(`Hero ${h.id} marked with mixed sources but sources array does not contain both official and secondary sources`);
          }
        }
        if (v.verificationTier === 'official_verified') {
          errors.push(`Hero ${h.id} with mixed source evidence cannot be classified as official_verified`);
        }
      }

      // Strict enforcement: A hero cannot be fully verified unless skills, mechanics, and current patch are verified
      if (v.verificationStatus === 'verified') {
        if (v.skillsVerificationStatus !== 'verified') {
          errors.push(`Hero ${h.id} marked as fully verified but skillsVerificationStatus is "${v.skillsVerificationStatus}"`);
        }
        if (v.mechanicsVerificationStatus !== 'verified') {
          errors.push(`Hero ${h.id} marked as fully verified but mechanicsVerificationStatus is "${v.mechanicsVerificationStatus}"`);
        }
        if (!['verified', 'verified_changed', 'confirmed_unchanged'].includes(v.currentPatchVerificationStatus)) {
          errors.push(`Hero ${h.id} marked as fully verified but currentPatchVerificationStatus is "${v.currentPatchVerificationStatus}"`);
        }
        // Allow sourceType === 'mixed' without an aggregate sourceUrl; require sourceUrl for non-mixed verified heroes
        if (v.sourceType === 'mixed') {
          if (!v.sources || !Array.isArray(v.sources) || v.sources.length === 0) {
            errors.push(`Hero ${h.id} marked as verified with mixed sources but missing individual source records in sources`);
          }
        } else {
          if (!v.sourceUrl || v.sourceUrl.trim() === '') {
            errors.push(`Hero ${h.id} marked as verified but missing source URL`);
          }
        }
      }

      // Verification tier consistency checks
      if (v.verificationTier) {
        if (!['official_verified', 'secondary_verified', 'partially_verified', 'unverified'].includes(v.verificationTier)) {
          errors.push(`Hero ${h.id} has invalid verificationTier: "${v.verificationTier}"`);
        }

        if (v.verificationTier === 'official_verified') {
          if (v.sourceType === 'mixed') {
            errors.push(`Hero ${h.id} with mixed source evidence cannot be classified as official_verified`);
          }
          if (v.verificationStatus !== 'verified' || v.sourceType !== 'official') {
            errors.push(`Hero ${h.id} marked as official_verified without full official verification evidence`);
          }
          if (v.skillsVerificationStatus !== 'verified') {
            errors.push(`Hero ${h.id} marked as official_verified but skillsVerificationStatus is "${v.skillsVerificationStatus}"`);
          }
          if (v.mechanicsVerificationStatus !== 'verified') {
            errors.push(`Hero ${h.id} marked as official_verified but mechanicsVerificationStatus is "${v.mechanicsVerificationStatus}"`);
          }
        }

        if (v.verificationTier === 'secondary_verified') {
          if (v.verificationStatus !== 'verified') {
            errors.push(`Hero ${h.id} marked as secondary_verified without full verification evidence`);
          }
          if (v.skillsVerificationStatus !== 'verified') {
            errors.push(`Hero ${h.id} marked as secondary_verified but skillsVerificationStatus is "${v.skillsVerificationStatus}"`);
          }
          if (v.mechanicsVerificationStatus !== 'verified') {
            errors.push(`Hero ${h.id} marked as secondary_verified but mechanicsVerificationStatus is "${v.mechanicsVerificationStatus}"`);
          }
        }

        if (v.verificationTier === 'partially_verified') {
          const hasPartialEvidence =
            v.patchHistoryVerificationStatus === 'verified' ||
            v.currentPatchVerificationStatus === 'verified_changed' ||
            v.currentPatchVerificationStatus === 'confirmed_unchanged';
          if (!hasPartialEvidence) {
            warnings.push(`Hero ${h.id} marked as partially_verified without verified patch or active patch evidence`);
          }
        }
      }

      // Source URL validation
      if (v.sourceUrl) {
        if (
          v.sourceUrl === 'https://www.mobilelegends.com' ||
          v.sourceUrl === 'https://www.mobilelegends.com/'
        ) {
          errors.push(`Hero ${h.id} uses generic homepage as verification evidence instead of specific patch notes.`);
        }

        // Check source labeling honesty: secondary source must not be labeled as official
        if (v.sourceUrl.includes('liquipedia.net') && v.sourceType === 'official') {
          errors.push(`Hero ${h.id} incorrectly labels Liquipedia secondary source as official Moonton source`);
        }
      }

      // Verification Dates check
      if (v.lastVerifiedDate) {
        if (!isValidCalendarDate(v.lastVerifiedDate)) {
          errors.push(`Hero ${h.id} has invalid lastVerifiedDate format (expected valid calendar date in YYYY-MM-DD): "${v.lastVerifiedDate}"`);
        }
        if (v.lastVerifiedDate > CURRENT_PATCH_CONFIG.patchReleaseDate) {
          warnings.push(`Hero ${h.id} has lastVerifiedDate (${v.lastVerifiedDate}) ahead of active patch release date (${CURRENT_PATCH_CONFIG.patchReleaseDate})`);
        }
      }

      // Log unverified baseline info for transparency
      if (v.skillsVerificationStatus === 'community_reference') {
        unverifiedItems.push(`Hero ${h.id} abilities are based on community reference baseline`);
      }
    }

    // Audit Patch History Changes
    if (h.patchHistory && h.patchHistory.length > 0) {
      if (h.verification?.patchHistoryVerificationStatus === 'verified') {
        heroesWithVerifiedPatchHistory++;
      }
      totalPatchChanges += h.patchHistory.length;

      const patchKeySet = new Set<string>();

      for (const patch of h.patchHistory) {
        if (patch.verificationStatus === 'verified') {
          totalVerifiedPatchRecords++;
        } else {
          totalUnverifiedPatchRecords++;
          unverifiedItems.push(`Hero ${h.id} patch record "${patch.title}" (${patch.patchVersion}) is marked unverified`);
        }

        // Duplicate patch record detection per hero
        const patchKey = `${patch.patchVersion}::${patch.affectedSkillOrAttribute || patch.title}`;
        if (patchKeySet.has(patchKey)) {
          errors.push(`Hero ${h.id} has duplicate patch record: "${patchKey}"`);
        }
        patchKeySet.add(patchKey);

        if (!patch.patchVersion || patch.patchVersion.trim() === '') {
          errors.push(`Hero ${h.id} has patch change missing patchVersion`);
        } else {
          // Check against historical patch registry
          if (!isRegisteredPatch(patch.patchVersion)) {
            warnings.push(`Hero ${h.id} references unregistered patch version: "${patch.patchVersion}"`);
          } else {
            const expectedDate = getPatchReleaseDate(patch.patchVersion);
            if (expectedDate && patch.date !== expectedDate) {
              warnings.push(`Hero ${h.id} patch ${patch.patchVersion} date (${patch.date}) does not match registry release date (${expectedDate})`);
            }
          }
        }

        if (!patch.date || !isValidCalendarDate(patch.date)) {
          errors.push(`Hero ${h.id} has patch change with invalid date format (expected valid calendar date in YYYY-MM-DD): "${patch.date}"`);
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

        // Numerical changes detection: if summary or details cite specific numbers/scaling, previous/new values must be present
        const hasNumericalClaims =
          /\d+/.test(patch.summary) ||
          patch.details.some((d) => /\d+/.test(d));
        if (hasNumericalClaims && (!patch.previousValue || !patch.newValue)) {
          warnings.push(`Hero ${h.id} patch change "${patch.title}" makes numerical claims but lacks explicit previousValue or newValue`);
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

    // 3. Conflict detection between current hero data and documented patch changes
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

    // 4. Audit Matchup Reference Integrity against complete roster collection
    for (const c of h.counters || []) {
      if (!completeHeroIdSet.has(c)) {
        errors.push(`Hero ${h.id} has invalid counter reference: "${c}"`);
      }
    }
    for (const c of h.counteredBy || []) {
      if (!completeHeroIdSet.has(c)) {
        errors.push(`Hero ${h.id} has invalid counteredBy reference: "${c}"`);
      }
    }
    for (const s of h.synergies || []) {
      if (!completeHeroIdSet.has(s)) {
        errors.push(`Hero ${h.id} has invalid synergy reference: "${s}"`);
      }
    }
  }

  return {
    valid: errors.length === 0,
    errors,
    warnings,
    unverifiedItems,
    stats: {
      totalHeroes: heroes.length,
      fullyVerifiedHeroes,
      partiallyVerifiedHeroes,
      unverifiedHeroes,
      heroesWithVerifiedPatchHistory,
      totalPatchChanges,
      totalVerifiedPatchRecords,
      totalUnverifiedPatchRecords,
      latestOriginalServerPatch: CURRENT_PATCH_CONFIG.latestOriginalServerPatch
    }
  };
}
