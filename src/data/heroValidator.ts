import { Role, Lane, DamageType, Hero } from '../types/mlbb';

// Helper validator to guarantee uniqueness and reference integrity
export function validateHeroCatalog(heroes: Hero[]): { valid: boolean; errors: string[] } {
  const errors: string[] = [];
  const idSet = new Set<string>();

  for (const h of heroes) {
    if (!h.id || typeof h.id !== 'string') {
      errors.push(`Hero missing valid id: ${JSON.stringify(h)}`);
      continue;
    }
    if (idSet.has(h.id)) {
      errors.push(`Duplicate hero ID detected: ${h.id}`);
    }
    idSet.add(h.id);

    if (!h.name) errors.push(`Hero ${h.id} missing name`);
    if (!h.avatar) errors.push(`Hero ${h.id} missing avatar`);
    if (!h.primaryRole) errors.push(`Hero ${h.id} missing primaryRole`);
    if (!h.primaryLane) errors.push(`Hero ${h.id} missing primaryLane`);
    if (!h.damageType) errors.push(`Hero ${h.id} missing damageType`);
    if (!h.difficulty) errors.push(`Hero ${h.id} missing difficulty`);
    if (!Array.isArray(h.specialties)) errors.push(`Hero ${h.id} missing specialties array`);
    if (!Array.isArray(h.strengths)) errors.push(`Hero ${h.id} missing strengths array`);
    if (!Array.isArray(h.weaknesses)) errors.push(`Hero ${h.id} missing weaknesses array`);
  }

  // Check relationship references
  for (const h of heroes) {
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

  return { valid: errors.length === 0, errors };
}
