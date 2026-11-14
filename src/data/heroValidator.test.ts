import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import { HEROES } from './heroes';
import { validateHeroCatalog } from './heroValidator';
import { CURRENT_PATCH_CONFIG } from './patchConfig';
import { Hero, HeroPatchChange } from '../types/mlbb';

function cloneCatalogWithActivePatchOverride(
  heroId: string,
  overridePatch: (patch: HeroPatchChange) => HeroPatchChange
): Hero[] {
  return HEROES.map((hero) => {
    if (hero.id !== heroId) return hero;

    const updatedHistory = (hero.patchHistory || []).map((patch) =>
      patch.patchVersion === CURRENT_PATCH_CONFIG.latestOriginalServerPatch
        ? overridePatch(patch)
        : patch
    );

    return {
      ...hero,
      patchHistory: updatedHistory
    };
  });
}

describe('validateHeroCatalog - Original Server classification & Brawl isolation', () => {
  it('passes when active patch records explicitly specify serverType="original"', () => {
    const report = validateHeroCatalog(HEROES);
    assert.equal(report.valid, true, `Expected valid catalog, got errors: ${report.errors.join('; ')}`);
    assert.deepEqual(report.errors, []);

    const explicitCatalog = cloneCatalogWithActivePatchOverride('xavier', (patch) => ({
      ...patch,
      serverType: 'original'
    }));
    const explicitReport = validateHeroCatalog(explicitCatalog);
    assert.equal(explicitReport.valid, true);
    assert.deepEqual(explicitReport.errors, []);
  });

  it('fails when an active patch record specifies serverType="advance"', () => {
    const catalog = cloneCatalogWithActivePatchOverride('xavier', (patch) => ({
      ...patch,
      serverType: 'advance'
    }));
    const report = validateHeroCatalog(catalog);

    assert.equal(report.valid, false);
    assert.ok(
      report.errors.some((e) => e.includes('xavier') && e.includes('serverType="advance"')),
      `Expected advance serverType error, got: ${report.errors.join('; ')}`
    );
  });

  it('fails when an active patch record is missing serverType', () => {
    const catalog = cloneCatalogWithActivePatchOverride('xavier', (patch) => {
      const { serverType: _omitted, ...withoutServerType } = patch;
      return withoutServerType;
    });
    const report = validateHeroCatalog(catalog);

    assert.equal(report.valid, false);
    assert.ok(
      report.errors.some((e) => e.includes('xavier') && e.includes('missing explicit serverType')),
      `Expected missing serverType error, got: ${report.errors.join('; ')}`
    );
  });

  it('fails when an active patch record has an invalid serverType value', () => {
    const catalog = cloneCatalogWithActivePatchOverride('xavier', (patch) => ({
      ...patch,
      serverType: 'brawl' as unknown as HeroPatchChange['serverType']
    }));
    const report = validateHeroCatalog(catalog);

    assert.equal(report.valid, false);
    assert.ok(
      report.errors.some((e) => e.includes('xavier') && e.includes('invalid serverType="brawl"')),
      `Expected invalid serverType error, got: ${report.errors.join('; ')}`
    );
  });

  it('fails when an active Original Server patch record includes Brawl-only adjustments', () => {
    const catalog = cloneCatalogWithActivePatchOverride('xavier', (patch) => ({
      ...patch,
      serverType: 'original',
      details: [...patch.details, 'Brawl-only adjustment: Damage Dealt +5%.']
    }));
    const report = validateHeroCatalog(catalog);

    assert.equal(report.valid, false);
    assert.ok(
      report.errors.some((e) => e.includes('xavier') && e.includes('Brawl-only')),
      `Expected Brawl-only error, got: ${report.errors.join('; ')}`
    );
  });
});
