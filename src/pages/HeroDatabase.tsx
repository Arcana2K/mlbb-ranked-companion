import React, { useState, useMemo, useEffect } from 'react';
import { Hero, Role, Lane } from '../types/mlbb';
import { HEROES, HERO_MAP } from '../data/heroes';
import { RoleBadge } from '../components/common/RoleBadge';
import { HeroAvatar } from '../components/common/HeroAvatar';
import { DataDisclaimer } from '../components/common/DataDisclaimer';
import { Search, ShieldAlert, BarChart3, ArrowRight } from 'lucide-react';

const ROLES: (Role | 'ALL')[] = ['ALL', 'Tank', 'Fighter', 'Assassin', 'Mage', 'Marksman', 'Support'];
const LANES: (Lane | 'ALL')[] = ['ALL', 'Gold Lane', 'EXP Lane', 'Mid Lane', 'Roam', 'Jungle'];

export const HeroDatabase: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedRole, setSelectedRole] = useState<Role | 'ALL'>('ALL');
  const [selectedLane, setSelectedLane] = useState<Lane | 'ALL'>('ALL');
  const [selectedHero, setSelectedHero] = useState<Hero | null>(HEROES[0]);

  const filteredHeroes = useMemo(() => {
    return HEROES.filter((hero) => {
      const matchSearch =
        hero.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        hero.specialties.some((s) => s.toLowerCase().includes(searchQuery.toLowerCase())) ||
        hero.damageType.toLowerCase().includes(searchQuery.toLowerCase());

      const matchRole =
        selectedRole === 'ALL' ||
        hero.primaryRole === selectedRole ||
        hero.secondaryRole === selectedRole;

      const matchLane =
        selectedLane === 'ALL' ||
        hero.primaryLane === selectedLane ||
        hero.secondaryLane === selectedLane;

      return matchSearch && matchRole && matchLane;
    });
  }, [searchQuery, selectedRole, selectedLane]);

  // Keep selected hero valid when filters change
  useEffect(() => {
    if (selectedHero && !filteredHeroes.some((h) => h.id === selectedHero.id)) {
      setSelectedHero(filteredHeroes[0] || null);
    } else if (!selectedHero && filteredHeroes.length > 0) {
      setSelectedHero(filteredHeroes[0]);
    }
  }, [filteredHeroes, selectedHero]);

  const handleSelectHeroById = (heroId: string) => {
    const hero = HERO_MAP.get(heroId);
    if (hero) {
      setSelectedHero(hero);
    }
  };

  return (
    <div className="space-y-5">
      <DataDisclaimer
        type="notice"
        text="Verified mechanical attributes, community matchup references, and competitive role alignments. Hero win rates and pick rates are shown only when backed by reliable datasets."
      />

      {/* Filter and Search Bar */}
      <div className="p-3.5 rounded-lg border border-zinc-800 bg-zinc-900/40 space-y-2.5">
        <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-2.5">
          <div className="relative flex-1">
            <Search className="w-3.5 h-3.5 absolute left-3 top-2.5 text-zinc-500" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search hero catalog by name, specialty, or damage type..."
              className="w-full bg-zinc-950 border border-zinc-800 rounded px-8 py-1.5 text-xs text-zinc-200 focus:border-zinc-600 focus:outline-none placeholder:text-zinc-500"
            />
          </div>

          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1.5">
              <span className="text-[10px] text-zinc-500 uppercase">Lane:</span>
              <select
                value={selectedLane}
                onChange={(e) => setSelectedLane(e.target.value as Lane | 'ALL')}
                className="bg-zinc-950 border border-zinc-800 rounded px-2.5 py-1 text-xs text-zinc-300 focus:outline-none"
              >
                {LANES.map((lane) => (
                  <option key={lane} value={lane}>
                    {lane === 'ALL' ? 'All Lanes' : lane}
                  </option>
                ))}
              </select>
            </div>

            <span className="text-xs text-zinc-500 font-mono">
              {filteredHeroes.length} / {HEROES.length} heroes
            </span>
          </div>
        </div>

        {/* Role Filters */}
        <div className="flex flex-wrap items-center gap-1 pt-1 border-t border-zinc-800">
          <span className="text-[10px] text-zinc-500 uppercase mr-1">Role:</span>
          {ROLES.map((role) => (
            <button
              key={role}
              onClick={() => setSelectedRole(role)}
              className={`px-2.5 py-1 rounded text-xs font-medium transition-colors cursor-pointer ${
                selectedRole === role
                  ? 'bg-zinc-800 text-zinc-100'
                  : 'bg-zinc-950 text-zinc-400 hover:text-zinc-200'
              }`}
            >
              {role === 'ALL' ? 'All' : role}
            </button>
          ))}
        </div>
      </div>

      {/* Main Catalog & Detail View */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
        {/* Heroes Grid (7 Cols) */}
        <div className="lg:col-span-7">
          {filteredHeroes.length === 0 ? (
            <div className="p-8 text-center border border-zinc-800 rounded-lg bg-zinc-900/30 text-zinc-500 text-xs">
              No heroes match the selected role, lane, or search query.
            </div>
          ) : (
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2.5 max-h-[700px] overflow-y-auto p-0.5">
              {filteredHeroes.map((hero) => {
                const isSelected = selectedHero?.id === hero.id;

                return (
                  <div
                    key={hero.id}
                    onClick={() => setSelectedHero(hero)}
                    className={`rounded border p-2.5 cursor-pointer transition-colors ${
                      isSelected
                        ? 'border-sky-500 bg-zinc-850'
                        : 'border-zinc-800 bg-zinc-900/40 hover:border-zinc-700 hover:bg-zinc-850'
                    }`}
                  >
                    <div className="relative aspect-square w-full rounded overflow-hidden mb-2 bg-zinc-950">
                      <HeroAvatar
                        hero={hero}
                        className="w-full h-full rounded"
                      />
                      <div className="absolute top-1 right-1 px-1 py-0.2 rounded bg-black/75 text-[9px] font-mono text-zinc-300">
                        {hero.difficulty}
                      </div>
                    </div>

                    <h4 className="font-medium text-xs text-zinc-100 truncate">
                      {hero.name}
                    </h4>

                    <div className="flex items-center gap-1 mt-1">
                      <RoleBadge role={hero.primaryRole} size="sm" />
                    </div>

                    <p className="text-[10px] text-zinc-500 mt-0.5 truncate">{hero.primaryLane}</p>
                  </div>
                );
              })}
            </div>
          )}
        </div>

        {/* Selected Hero Information Panel (5 Cols) */}
        <div className="lg:col-span-5">
          {selectedHero ? (
            <div className="sticky top-20 rounded-lg border border-zinc-800 bg-zinc-900/60 p-5 space-y-4">
              {/* Header Profile */}
              <div className="flex items-start gap-3">
                <HeroAvatar
                  hero={selectedHero}
                  size="xl"
                  className="rounded border border-zinc-700"
                />
                <div className="min-w-0 flex-1">
                  <div className="flex items-center justify-between">
                    <h3 className="text-base font-semibold text-zinc-100 truncate">{selectedHero.name}</h3>
                    <span className="text-[10px] font-mono text-zinc-500">ID: {selectedHero.id}</span>
                  </div>
                  <div className="flex flex-wrap items-center gap-1 mt-1">
                    <RoleBadge role={selectedHero.primaryRole} size="sm" />
                    {selectedHero.secondaryRole && (
                      <RoleBadge role={selectedHero.secondaryRole} size="sm" />
                    )}
                    <span className="text-xs text-zinc-400 ml-1">{selectedHero.primaryLane}</span>
                    {selectedHero.secondaryLane && (
                      <span className="text-xs text-zinc-500">/ {selectedHero.secondaryLane}</span>
                    )}
                  </div>
                  <div className="flex items-center gap-3 mt-1 text-[11px] text-zinc-400 font-mono">
                    <span>Damage: <strong className="text-zinc-300">{selectedHero.damageType}</strong></span>
                    <span>Diff: <strong className="text-zinc-300">{selectedHero.difficulty}</strong></span>
                  </div>
                </div>
              </div>

              {/* Description */}
              <p className="text-xs text-zinc-400 leading-relaxed bg-zinc-950 p-3 rounded border border-zinc-800">
                {selectedHero.description}
              </p>

              {/* Specialties */}
              <div className="space-y-1">
                <span className="text-[10px] text-zinc-500 uppercase font-medium block">
                  Specialties:
                </span>
                <div className="flex flex-wrap gap-1">
                  {selectedHero.specialties.map((spec) => (
                    <span
                      key={spec}
                      className="px-2 py-0.5 rounded text-[11px] bg-zinc-850 text-zinc-300 border border-zinc-750"
                    >
                      {spec}
                    </span>
                  ))}
                </div>
              </div>

              {/* Statistical Data Section (Separate from core attributes) */}
              <div className="p-3 rounded bg-zinc-950 border border-zinc-800 space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1.5 text-xs text-zinc-300 font-medium">
                    <BarChart3 className="w-3.5 h-3.5 text-zinc-400" />
                    <span>Ranked Statistical Data</span>
                  </div>
                  <span className="text-[10px] font-mono text-zinc-500">
                    {selectedHero.stats ? selectedHero.stats.source : 'No external feed'}
                  </span>
                </div>

                {selectedHero.stats ? (
                  <div className="space-y-2">
                    <div className="grid grid-cols-3 gap-2 pt-1 text-center font-mono">
                      <div className="p-1.5 rounded bg-zinc-900 border border-zinc-800">
                        <span className="text-[10px] text-zinc-500 block">Win Rate</span>
                        <span className="text-xs font-semibold text-emerald-400">
                          {selectedHero.stats.winRate.toFixed(1)}%
                        </span>
                      </div>
                      <div className="p-1.5 rounded bg-zinc-900 border border-zinc-800">
                        <span className="text-[10px] text-zinc-500 block">Pick Rate</span>
                        <span className="text-xs font-semibold text-zinc-300">
                          {selectedHero.stats.pickRate !== undefined ? `${selectedHero.stats.pickRate.toFixed(1)}%` : '—'}
                        </span>
                      </div>
                      <div className="p-1.5 rounded bg-zinc-900 border border-zinc-800">
                        <span className="text-[10px] text-zinc-500 block">Ban Rate</span>
                        <span className="text-xs font-semibold text-zinc-300">
                          {selectedHero.stats.banRate !== undefined ? `${selectedHero.stats.banRate.toFixed(1)}%` : '—'}
                        </span>
                      </div>
                    </div>
                    <div className="text-[10px] text-zinc-500 space-y-0.5 font-mono">
                      <div>Rank: {selectedHero.stats.rankRange} | Mode: {selectedHero.stats.gameMode}</div>
                      <div>Patch: {selectedHero.stats.patchVersion} | Updated: {selectedHero.stats.lastUpdated}</div>
                    </div>
                  </div>
                ) : (
                  <div className="text-[11px] text-zinc-500 bg-zinc-900/50 p-2.5 rounded border border-zinc-850 leading-relaxed">
                    <span className="text-zinc-400 font-medium">No verified statistics attached.</span> To preserve analytical integrity, ranked win and ban percentages are displayed only when backed by validated telemetry rather than fabricated estimates.
                  </div>
                )}
              </div>

              {/* Matchup Relationships */}
              <div className="space-y-2">
                <div className="flex items-center justify-between text-[10px] text-zinc-500 uppercase font-medium">
                  <span>Matchup Reference</span>
                  <span className="text-[9px] text-zinc-600 font-normal">Click hero to inspect</span>
                </div>

                <div className="grid grid-cols-2 gap-2.5 text-xs">
                  <div className="p-2.5 rounded bg-zinc-950 border border-zinc-800 space-y-1.5">
                    <span className="text-[10px] text-zinc-400 uppercase font-medium block">
                      Counters:
                    </span>
                    <div className="flex flex-wrap gap-1">
                      {selectedHero.counters.length > 0 ? (
                        selectedHero.counters.map((heroId) => {
                          const target = HERO_MAP.get(heroId);
                          return (
                            <button
                              key={heroId}
                              onClick={() => handleSelectHeroById(heroId)}
                              className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded text-[10px] bg-zinc-850 hover:bg-zinc-800 text-zinc-300 border border-zinc-750 transition-colors cursor-pointer"
                              title={`Inspect ${target?.name || heroId}`}
                            >
                              <HeroAvatar hero={target} size="sm" className="w-3.5 h-3.5 text-[8px] rounded-none" />
                              <span>{target?.name || heroId}</span>
                            </button>
                          );
                        })
                      ) : (
                        <span className="text-[11px] text-zinc-600">Universal matchup</span>
                      )}
                    </div>
                  </div>

                  <div className="p-2.5 rounded bg-zinc-950 border border-zinc-800 space-y-1.5">
                    <span className="text-[10px] text-zinc-400 uppercase font-medium block">
                      Countered By:
                    </span>
                    <div className="flex flex-wrap gap-1">
                      {selectedHero.counteredBy.length > 0 ? (
                        selectedHero.counteredBy.map((heroId) => {
                          const target = HERO_MAP.get(heroId);
                          return (
                            <button
                              key={heroId}
                              onClick={() => handleSelectHeroById(heroId)}
                              className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded text-[10px] bg-zinc-850 hover:bg-zinc-800 text-zinc-300 border border-zinc-750 transition-colors cursor-pointer"
                              title={`Inspect ${target?.name || heroId}`}
                            >
                              <HeroAvatar hero={target} size="sm" className="w-3.5 h-3.5 text-[8px] rounded-none" />
                              <span>{target?.name || heroId}</span>
                            </button>
                          );
                        })
                      ) : (
                        <span className="text-[11px] text-zinc-600">Low counters</span>
                      )}
                    </div>
                  </div>
                </div>

                {/* Team Synergies */}
                {selectedHero.synergies && selectedHero.synergies.length > 0 && (
                  <div className="p-2.5 rounded bg-zinc-950 border border-zinc-800 space-y-1.5">
                    <span className="text-[10px] text-zinc-400 uppercase font-medium block">
                      Recommended Team Synergies:
                    </span>
                    <div className="flex flex-wrap gap-1">
                      {selectedHero.synergies.map((heroId) => {
                        const target = HERO_MAP.get(heroId);
                        return (
                          <button
                            key={heroId}
                            onClick={() => handleSelectHeroById(heroId)}
                            className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded text-[10px] bg-zinc-850 hover:bg-zinc-800 text-sky-300 border border-zinc-750 transition-colors cursor-pointer"
                            title={`Inspect ${target?.name || heroId}`}
                          >
                            <HeroAvatar hero={target} size="sm" className="w-3.5 h-3.5 text-[8px] rounded-none" />
                            <span>{target?.name || heroId}</span>
                          </button>
                        );
                      })}
                    </div>
                  </div>
                )}

                <div className="flex items-center gap-1.5 text-[10px] text-zinc-500 pt-0.5">
                  <ShieldAlert className="w-3 h-3 text-zinc-500 shrink-0" />
                  <span>Community matchup reference. Subject to draft composition and individual player skill.</span>
                </div>
              </div>

              {/* Strengths & Weaknesses */}
              <div className="space-y-2 text-xs pt-1 border-t border-zinc-800">
                <div>
                  <span className="text-[10px] text-zinc-500 uppercase font-medium block mb-0.5">
                    Strengths:
                  </span>
                  <ul className="text-zinc-300 space-y-0.5 list-disc pl-4 text-[11px]">
                    {selectedHero.strengths.map((s, idx) => (
                      <li key={idx}>{s}</li>
                    ))}
                  </ul>
                </div>

                <div>
                  <span className="text-[10px] text-zinc-500 uppercase font-medium block mb-0.5">
                    Weaknesses:
                  </span>
                  <ul className="text-zinc-400 space-y-0.5 list-disc pl-4 text-[11px]">
                    {selectedHero.weaknesses.map((w, idx) => (
                      <li key={idx}>{w}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ) : (
            <div className="p-8 text-center text-zinc-600 border border-zinc-800 rounded-lg">
              Select a hero to inspect attributes.
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
