import React, { useState, useMemo, useEffect } from 'react';
import { Hero, Role, Lane, PatchChangeType } from '../types/mlbb';
import { HEROES, HERO_MAP } from '../data/heroes';
import {
  CURRENT_ORIGINAL_SERVER_PATCH,
  CURRENT_PATCH_DATE,
  OFFICIAL_PATCH_SOURCE,
  OFFICIAL_PATCH_ARCHIVE_URL,
  getLatestHeroPatchChange,
} from '../data/heroPatchHistory';
import { RoleBadge } from '../components/common/RoleBadge';
import { HeroAvatar } from '../components/common/HeroAvatar';
import { DataDisclaimer } from '../components/common/DataDisclaimer';
import {
  Search,
  ShieldAlert,
  BarChart3,
  CheckCircle2,
  ExternalLink,
  Zap,
  Clock,
  Info,
} from 'lucide-react';

const ROLES: (Role | 'ALL')[] = ['ALL', 'Tank', 'Fighter', 'Assassin', 'Mage', 'Marksman', 'Support'];
const LANES: (Lane | 'ALL')[] = ['ALL', 'Gold Lane', 'EXP Lane', 'Mid Lane', 'Roam', 'Jungle'];

type DetailTab = 'overview' | 'skills' | 'patch';
type PatchFilterCategory = 'all' | 'buff' | 'nerf' | 'adjustment' | 'revamp' | 'rework';

export const HeroDatabase: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedRole, setSelectedRole] = useState<Role | 'ALL'>('ALL');
  const [selectedLane, setSelectedLane] = useState<Lane | 'ALL'>('ALL');
  const [selectedHero, setSelectedHero] = useState<Hero | null>(HEROES[0]);
  const [activeTab, setActiveTab] = useState<DetailTab>('overview');
  const [patchFilter, setPatchFilter] = useState<PatchFilterCategory>('all');

  const filteredHeroes = useMemo(() => {
    return HEROES.filter((hero) => {
      const matchSearch =
        hero.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        hero.specialties.some((s) => s.toLowerCase().includes(searchQuery.toLowerCase())) ||
        hero.damageType.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (hero.skills && hero.skills.some((sk) => sk.name.toLowerCase().includes(searchQuery.toLowerCase())));

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

  const isSelectedVerified = selectedHero?.verification?.verificationStatus === 'verified';
  const latestHeroPatch = selectedHero ? getLatestHeroPatchChange(selectedHero.id) : undefined;

  // Filtered patch changes for the selected hero
  const heroPatchList = useMemo(() => {
    if (!selectedHero?.patchHistory) return [];
    if (patchFilter === 'all') return selectedHero.patchHistory;
    return selectedHero.patchHistory.filter((p) => p.type === patchFilter);
  }, [selectedHero, patchFilter]);

  // Patch counts by category for the filter tabs
  const patchCounts = useMemo(() => {
    if (!selectedHero?.patchHistory) return { all: 0, buff: 0, nerf: 0, adjustment: 0, revamp: 0, rework: 0 };
    const list = selectedHero.patchHistory;
    return {
      all: list.length,
      buff: list.filter((p) => p.type === 'buff').length,
      nerf: list.filter((p) => p.type === 'nerf').length,
      adjustment: list.filter((p) => p.type === 'adjustment').length,
      revamp: list.filter((p) => p.type === 'revamp').length,
      rework: list.filter((p) => p.type === 'rework').length
    };
  }, [selectedHero]);

  return (
    <div className="space-y-5">
      {/* Official Patch Banner */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2.5 p-3 rounded-lg border border-zinc-800 bg-zinc-900/60 text-xs">
        <div className="flex items-center gap-2">
          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[11px] font-medium bg-sky-950/70 text-sky-400 border border-sky-800/60 font-mono">
            <CheckCircle2 className="w-3 h-3 text-sky-400" />
            {CURRENT_ORIGINAL_SERVER_PATCH}
          </span>
          <span className="text-zinc-300 font-medium">Original Server Roster</span>
          <span className="text-zinc-500 hidden md:inline">|</span>
          <span className="text-zinc-400 font-mono text-[11px] hidden md:inline">
            133 Heroes Cataloged
          </span>
        </div>

        <div className="flex items-center gap-3">
          <span className="text-zinc-500 text-[11px]">Archive: {OFFICIAL_PATCH_SOURCE}</span>
          <a
            href={OFFICIAL_PATCH_ARCHIVE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-[11px] text-sky-400 hover:text-sky-300 transition-colors"
          >
            <span>liquipedia.net</span>
            <ExternalLink className="w-3 h-3" />
          </a>
        </div>
      </div>

      <DataDisclaimer
        type="notice"
        text="Mobile Legends: Bang Bang catalog of 133 heroes. Balance changes and revamps are verified against documented patch notes; other entries reflect the current in-game baseline. Unverified matchmaking statistics and win rates are omitted to preserve analytical integrity."
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
              placeholder="Search catalog by hero name, skill name, specialty, or damage type..."
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
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2.5 max-h-[760px] overflow-y-auto p-0.5">
              {filteredHeroes.map((hero) => {
                const isSelected = selectedHero?.id === hero.id;
                const isVerified = hero.verification?.verificationStatus === 'verified';

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

                      {isVerified && (
                        <div className="absolute top-1 left-1 px-1 py-0.2 rounded bg-sky-950/90 text-[8px] font-mono text-sky-300 border border-sky-800/60">
                          VERIFIED
                        </div>
                      )}

                      {hero.patchHistory && hero.patchHistory.length > 0 && (
                        <div className="absolute bottom-1 left-1 px-1 py-0.2 rounded bg-zinc-950/90 text-[8px] font-mono text-zinc-300 border border-zinc-800">
                          {hero.patchHistory[0].type.toUpperCase()}
                        </div>
                      )}
                    </div>

                    <h4 className="font-medium text-xs text-zinc-100 truncate">
                      {hero.name}
                    </h4>

                    <div className="flex items-center gap-1 mt-1">
                      <RoleBadge role={hero.primaryRole} size="sm" />
                      {hero.secondaryRole && (
                        <RoleBadge role={hero.secondaryRole} size="sm" />
                      )}
                    </div>

                    <div className="flex items-center justify-between text-[10px] text-zinc-500 mt-1">
                      <span className="truncate">{hero.primaryLane}</span>
                      <span className="font-mono text-zinc-400">{hero.damageType}</span>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>

        {/* Selected Hero Information Panel (5 Cols) */}
        <div className="lg:col-span-5">
          {selectedHero ? (
            <div className="sticky top-20 rounded-lg border border-zinc-800 bg-zinc-900/60 p-4 space-y-4">
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

                  {/* Latest Verified Balance Change Highlight */}
                  {latestHeroPatch && (
                    <div className="mt-2 flex items-center gap-1.5 p-1.5 rounded bg-zinc-950 border border-zinc-800 text-[11px]">
                      <span className={`px-1.5 py-0.2 rounded text-[9px] font-mono uppercase font-semibold border ${
                        latestHeroPatch.type === 'buff'
                          ? 'bg-emerald-950/70 text-emerald-300 border-emerald-800/60'
                          : latestHeroPatch.type === 'nerf'
                          ? 'bg-rose-950/70 text-rose-300 border-rose-800/60'
                          : latestHeroPatch.type === 'revamp' || latestHeroPatch.type === 'rework'
                          ? 'bg-purple-950/70 text-purple-300 border-purple-800/60'
                          : 'bg-amber-950/70 text-amber-300 border-amber-800/60'
                      }`}>
                        {latestHeroPatch.type}
                      </span>
                      <span className="text-zinc-300 truncate font-medium">{latestHeroPatch.title}</span>
                      <span className="text-zinc-500 font-mono text-[10px] ml-auto shrink-0">{latestHeroPatch.patchVersion}</span>
                    </div>
                  )}
                </div>
              </div>

              {/* Navigation Tabs */}
              <div className="flex items-center gap-1 p-1 bg-zinc-950 rounded border border-zinc-800 text-xs font-medium">
                <button
                  onClick={() => setActiveTab('overview')}
                  className={`flex-1 py-1.5 rounded transition-colors text-center cursor-pointer ${
                    activeTab === 'overview'
                      ? 'bg-zinc-800 text-zinc-100'
                      : 'text-zinc-400 hover:text-zinc-200'
                  }`}
                >
                  Overview
                </button>
                <button
                  onClick={() => setActiveTab('skills')}
                  className={`flex-1 py-1.5 rounded transition-colors text-center cursor-pointer flex items-center justify-center gap-1 ${
                    activeTab === 'skills'
                      ? 'bg-zinc-800 text-zinc-100'
                      : 'text-zinc-400 hover:text-zinc-200'
                  }`}
                >
                  <span>Abilities</span>
                  <span className="px-1.5 py-0.2 rounded bg-zinc-900 text-[10px] font-mono text-zinc-400">
                    {selectedHero.skills?.length || 4}
                  </span>
                </button>
                <button
                  onClick={() => setActiveTab('patch')}
                  className={`flex-1 py-1.5 rounded transition-colors text-center cursor-pointer flex items-center justify-center gap-1 ${
                    activeTab === 'patch'
                      ? 'bg-zinc-800 text-zinc-100'
                      : 'text-zinc-400 hover:text-zinc-200'
                  }`}
                >
                  <span>Patch History</span>
                  {selectedHero.patchHistory && selectedHero.patchHistory.length > 0 && (
                    <span className="px-1.5 py-0.2 rounded bg-sky-950 text-[10px] font-mono text-sky-300 border border-sky-800/60">
                      {selectedHero.patchHistory.length}
                    </span>
                  )}
                </button>
              </div>

              {/* TAB 1: OVERVIEW */}
              {activeTab === 'overview' && (
                <div className="space-y-4">
                  {/* Verification Status Card */}
                  {isSelectedVerified ? (
                    <div className="flex items-center justify-between p-2.5 rounded bg-sky-950/30 border border-sky-900/40 text-xs">
                      <div className="flex items-center gap-1.5 text-sky-300 font-medium">
                        <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0" />
                        <span>Verified Patch Documentation</span>
                      </div>
                      <a
                        href={selectedHero.verification?.sourceUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-[11px] text-sky-400 hover:text-sky-300 font-mono transition-colors"
                      >
                        <span className="truncate max-w-[150px]">{selectedHero.verification?.source}</span>
                        <ExternalLink className="w-3 h-3 shrink-0" />
                      </a>
                    </div>
                  ) : (
                    <div className="flex items-center justify-between p-2.5 rounded bg-zinc-950 border border-zinc-800 text-xs">
                      <div className="flex items-center gap-1.5 text-zinc-400">
                        <Info className="w-3.5 h-3.5 text-zinc-500 shrink-0" />
                        <span>Community Reference Baseline</span>
                      </div>
                      <span className="text-[10px] text-zinc-500 font-mono">Pending Patch Record</span>
                    </div>
                  )}

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

                  {/* Gameplay Mechanics Quick Summary */}
                  {selectedHero.gameplayMechanics && (
                    <div className="p-3 rounded bg-zinc-950 border border-zinc-800 space-y-2 text-xs">
                      <div className="flex items-center gap-1.5 text-zinc-300 font-medium">
                        <Zap className="w-3.5 h-3.5 text-sky-400" />
                        <span>Core Mechanics Summary</span>
                      </div>
                      <div className="grid grid-cols-2 gap-2 text-[11px]">
                        <div>
                          <span className="text-[10px] text-zinc-500 uppercase block">Resource:</span>
                          <span className="text-zinc-300 font-mono">
                            {selectedHero.gameplayMechanics.resourceType || 'Mana'}
                          </span>
                        </div>
                        <div>
                          <span className="text-[10px] text-zinc-500 uppercase block">Mobility:</span>
                          <span className="text-zinc-300">
                            {selectedHero.gameplayMechanics.mobility.join(', ') || 'Low'}
                          </span>
                        </div>
                        <div className="col-span-2">
                          <span className="text-[10px] text-zinc-500 uppercase block">Crowd Control:</span>
                          <span className="text-zinc-300">
                            {selectedHero.gameplayMechanics.crowdControl.join(', ') || 'None'}
                          </span>
                        </div>
                        <div className="col-span-2">
                          <span className="text-[10px] text-zinc-500 uppercase block">Damage Profile:</span>
                          <span className="text-zinc-300">
                            {selectedHero.gameplayMechanics.damageCharacteristics.join(', ')}
                          </span>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Statistical Data Section */}
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
                      <span>Community matchup reference. Strictly excluded from automated recommendation scoring.</span>
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
              )}

              {/* TAB 2: ABILITIES (SKILLS) */}
              {activeTab === 'skills' && (
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-xs text-zinc-400 border-b border-zinc-800 pb-2">
                    <div className="flex items-center gap-2">
                      <span className="font-medium text-zinc-200">
                        {isSelectedVerified ? 'Verified Ability Kit' : 'Ability Kit (Reference Baseline)'}
                      </span>
                      <span className={`px-1.5 py-0.2 rounded text-[9px] font-mono border ${
                        isSelectedVerified
                          ? 'bg-sky-950/70 text-sky-300 border-sky-800/60'
                          : 'bg-zinc-950 text-zinc-400 border-zinc-800'
                      }`}>
                        {isSelectedVerified ? 'Verified' : 'Unverified'}
                      </span>
                    </div>
                    <span className="font-mono text-[10px] text-zinc-500">
                      {selectedHero.skills?.length || 0} Abilities
                    </span>
                  </div>

                  {selectedHero.skills && selectedHero.skills.length > 0 ? (
                    <div className="space-y-2.5 max-h-[580px] overflow-y-auto pr-0.5">
                      {selectedHero.skills.map((skill) => {
                        const isPassive = skill.type === 'Passive';
                        const isUltimate = skill.type === 'Ultimate';

                        const badgeColor = isPassive
                          ? 'bg-emerald-950/70 text-emerald-300 border-emerald-800/60'
                          : isUltimate
                          ? 'bg-sky-950/70 text-sky-300 border-sky-800/60'
                          : 'bg-zinc-850 text-zinc-300 border-zinc-750';

                        return (
                          <div
                            key={skill.id}
                            className={`p-3 rounded-lg border bg-zinc-950 space-y-1.5 transition-colors ${
                              isUltimate
                                ? 'border-sky-900/40'
                                : isPassive
                                ? 'border-emerald-950/50'
                                : 'border-zinc-800'
                            }`}
                          >
                            <div className="flex items-start justify-between gap-2">
                              <div className="flex items-center gap-2">
                                <span
                                  className={`px-1.5 py-0.5 rounded text-[10px] font-mono uppercase font-semibold border ${badgeColor}`}
                                >
                                  {skill.type}
                                </span>
                                <h4 className="text-xs font-semibold text-zinc-100">
                                  {skill.name}
                                </h4>
                              </div>

                              <div className="flex items-center gap-2 font-mono text-[10px] text-zinc-400">
                                {skill.cooldown && (
                                  <span className="flex items-center gap-1 text-zinc-400">
                                    <Clock className="w-2.5 h-2.5 text-zinc-500" />
                                    {skill.cooldown}
                                  </span>
                                )}
                                {skill.energyCost && (
                                  <span className="flex items-center gap-1 text-zinc-400">
                                    <Zap className="w-2.5 h-2.5 text-amber-500" />
                                    {skill.energyCost}
                                  </span>
                                )}
                              </div>
                            </div>

                            <p className="text-[11px] text-zinc-300 leading-relaxed">
                              {skill.description}
                            </p>

                            {skill.tags && skill.tags.length > 0 && (
                              <div className="flex flex-wrap gap-1 pt-1">
                                {skill.tags.map((tag) => (
                                  <span
                                    key={tag}
                                    className="px-1.5 py-0.2 rounded text-[9px] bg-zinc-900 text-zinc-400 border border-zinc-800"
                                  >
                                    {tag}
                                  </span>
                                ))}
                              </div>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  ) : (
                    <div className="p-6 text-center text-zinc-500 text-xs bg-zinc-950 rounded border border-zinc-800">
                      Detailed ability breakdown currently indexing for this hero.
                    </div>
                  )}

                  {/* Mechanics Details */}
                  {selectedHero.gameplayMechanics && (
                    <div className="p-2.5 rounded bg-zinc-950 border border-zinc-800 text-[11px] space-y-1">
                      <div className="text-[10px] uppercase font-medium text-zinc-500">
                        Mechanics Checklist
                      </div>
                      <div className="flex flex-wrap gap-1.5 text-zinc-300">
                        {selectedHero.gameplayMechanics.crowdControl.map((cc) => (
                          <span key={cc} className="px-1.5 py-0.2 rounded bg-zinc-900 border border-zinc-800 text-[10px]">
                            CC: {cc}
                          </span>
                        ))}
                        {selectedHero.gameplayMechanics.mobility.map((mob) => (
                          <span key={mob} className="px-1.5 py-0.2 rounded bg-zinc-900 border border-zinc-800 text-[10px]">
                            Mobility: {mob}
                          </span>
                        ))}
                        {selectedHero.gameplayMechanics.damageCharacteristics.map((dc) => (
                          <span key={dc} className="px-1.5 py-0.2 rounded bg-zinc-900 border border-zinc-800 text-[10px]">
                            {dc}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              )}

              {/* TAB 3: PATCH HISTORY & VERIFICATION */}
              {activeTab === 'patch' && (
                <div className="space-y-3.5">
                  {/* Verification Card with Granular States */}
                  <div className={`p-3 rounded-lg border space-y-2.5 ${
                    selectedHero.verification?.verificationStatus === 'verified'
                      ? 'border-sky-900/40 bg-sky-950/20'
                      : selectedHero.verification?.verificationStatus === 'partial'
                      ? 'border-amber-900/40 bg-amber-950/15'
                      : 'border-zinc-800 bg-zinc-950/50'
                  }`}>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-1.5 text-xs font-medium">
                        {selectedHero.verification?.verificationStatus === 'verified' ? (
                          <CheckCircle2 className="w-4 h-4 text-sky-400" />
                        ) : selectedHero.verification?.verificationStatus === 'partial' ? (
                          <Info className="w-4 h-4 text-amber-400" />
                        ) : (
                          <ShieldAlert className="w-4 h-4 text-zinc-500" />
                        )}
                        <span className={
                          selectedHero.verification?.verificationStatus === 'verified'
                            ? 'text-sky-300'
                            : selectedHero.verification?.verificationStatus === 'partial'
                            ? 'text-amber-300'
                            : 'text-zinc-300'
                        }>
                          {selectedHero.verification?.verificationStatus === 'verified'
                            ? 'Original Server Patch Verification (Complete)'
                            : selectedHero.verification?.verificationStatus === 'partial'
                            ? 'Partial Patch Verification (Historical Data Verified)'
                            : 'Community Reference Baseline (Pending Patch Audit)'}
                        </span>
                      </div>
                      <span className={`px-2 py-0.5 rounded text-[10px] font-mono uppercase font-semibold border ${
                        selectedHero.verification?.verificationStatus === 'verified'
                          ? 'bg-sky-900/60 text-sky-200 border-sky-700/50'
                          : selectedHero.verification?.verificationStatus === 'partial'
                          ? 'bg-amber-950/70 text-amber-300 border-amber-800/60'
                          : 'bg-zinc-900 text-zinc-400 border-zinc-800'
                      }`}>
                        {selectedHero.verification?.verificationStatus.toUpperCase() || 'UNVERIFIED'}
                      </span>
                    </div>

                    {/* Granular Sub-Status Badges */}
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-1.5 text-[10px] font-mono">
                      <div className="p-1.5 rounded bg-zinc-900/60 border border-zinc-800/80">
                        <span className="text-zinc-500 block uppercase text-[9px]">Skills:</span>
                        <span className={selectedHero.verification?.skillsVerificationStatus === 'verified' ? 'text-emerald-400' : 'text-zinc-400'}>
                          {selectedHero.verification?.skillsVerificationStatus === 'verified' ? 'Verified' : 'Ref Baseline'}
                        </span>
                      </div>
                      <div className="p-1.5 rounded bg-zinc-900/60 border border-zinc-800/80">
                        <span className="text-zinc-500 block uppercase text-[9px]">Mechanics:</span>
                        <span className={selectedHero.verification?.mechanicsVerificationStatus === 'verified' ? 'text-emerald-400' : 'text-zinc-400'}>
                          {selectedHero.verification?.mechanicsVerificationStatus === 'verified' ? 'Verified' : 'Ref Baseline'}
                        </span>
                      </div>
                      <div className="p-1.5 rounded bg-zinc-900/60 border border-zinc-800/80">
                        <span className="text-zinc-500 block uppercase text-[9px]">Patch History:</span>
                        <span className={selectedHero.verification?.patchHistoryVerificationStatus === 'verified' ? 'text-emerald-400' : 'text-zinc-400'}>
                          {selectedHero.verification?.patchHistoryVerificationStatus === 'verified' ? `${patchCounts.all} Verified` : 'No Records'}
                        </span>
                      </div>
                      <div className="p-1.5 rounded bg-zinc-900/60 border border-zinc-800/80">
                        <span className="text-zinc-500 block uppercase text-[9px]">Patch 2.2.16a:</span>
                        <span className={selectedHero.verification?.currentPatchVerificationStatus === 'verified' ? 'text-sky-400' : 'text-zinc-500'}>
                          {selectedHero.verification?.currentPatchVerificationStatus === 'verified' ? 'Audited' : 'Pending'}
                        </span>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-2 text-[11px] font-mono text-zinc-400 pt-1 border-t border-zinc-850">
                      <div>
                        <span className="text-[10px] text-zinc-500 uppercase block">Active Patch:</span>
                        <span className="text-zinc-200">{selectedHero.verification?.currentPatch || CURRENT_ORIGINAL_SERVER_PATCH}</span>
                      </div>
                      <div>
                        <span className="text-[10px] text-zinc-500 uppercase block">Last Verified Date:</span>
                        <span className="text-zinc-200">{selectedHero.verification?.lastVerifiedDate || CURRENT_PATCH_DATE}</span>
                      </div>
                      <div className="col-span-2">
                        <span className="text-[10px] text-zinc-500 uppercase block">Primary Attribution:</span>
                        <div className="flex items-center justify-between">
                          <span className="text-zinc-300 truncate">{selectedHero.verification?.source}</span>
                          {selectedHero.verification?.sourceUrl && (
                            <a
                              href={selectedHero.verification.sourceUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1 text-[10px] text-sky-400 hover:text-sky-300 shrink-0 ml-2"
                            >
                              <span>Inspect Source</span>
                              <ExternalLink className="w-2.5 h-2.5" />
                            </a>
                          )}
                        </div>
                      </div>
                      {selectedHero.verification?.evidenceNotes && (
                        <div className="col-span-2 text-[10px] text-zinc-500 pt-0.5">
                          {selectedHero.verification.evidenceNotes}
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Latest Documented Balance Change Highlight */}
                  {latestHeroPatch && (
                    <div className="p-2.5 rounded-lg border border-sky-900/30 bg-sky-950/15 space-y-1">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-1.5">
                          <span className="px-1.5 py-0.2 rounded text-[9px] font-mono font-semibold uppercase bg-sky-900/60 text-sky-300 border border-sky-700/50">
                            Latest Balance Change
                          </span>
                          <span className="text-xs font-semibold text-zinc-100">{latestHeroPatch.title}</span>
                        </div>
                        <span className="text-[10px] font-mono text-zinc-400">
                          {latestHeroPatch.patchVersion} ({latestHeroPatch.date})
                        </span>
                      </div>
                      <p className="text-[11px] text-zinc-300 leading-snug">
                        {latestHeroPatch.summary}
                      </p>
                    </div>
                  )}

                  {/* Category Filter Toolbar */}
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] text-zinc-500 uppercase font-medium block">
                        Balance & Rework History
                      </span>
                      <span className="text-[10px] font-mono text-zinc-500">
                        {heroPatchList.length} of {selectedHero.patchHistory?.length || 0} changes
                      </span>
                    </div>

                    {selectedHero.patchHistory && selectedHero.patchHistory.length > 0 && (
                      <div className="flex flex-wrap gap-1 p-1 bg-zinc-950 rounded border border-zinc-800 text-[11px]">
                        <button
                          onClick={() => setPatchFilter('all')}
                          className={`px-2 py-0.5 rounded transition-colors cursor-pointer ${
                            patchFilter === 'all'
                              ? 'bg-zinc-800 text-zinc-100 font-medium'
                              : 'text-zinc-400 hover:text-zinc-200'
                          }`}
                        >
                          All ({patchCounts.all})
                        </button>
                        {patchCounts.buff > 0 && (
                          <button
                            onClick={() => setPatchFilter('buff')}
                            className={`px-2 py-0.5 rounded transition-colors cursor-pointer ${
                              patchFilter === 'buff'
                                ? 'bg-emerald-950 text-emerald-300 border border-emerald-800 font-medium'
                                : 'text-zinc-400 hover:text-emerald-400'
                            }`}
                          >
                            Buffs ({patchCounts.buff})
                          </button>
                        )}
                        {patchCounts.nerf > 0 && (
                          <button
                            onClick={() => setPatchFilter('nerf')}
                            className={`px-2 py-0.5 rounded transition-colors cursor-pointer ${
                              patchFilter === 'nerf'
                                ? 'bg-rose-950 text-rose-300 border border-rose-800 font-medium'
                                : 'text-zinc-400 hover:text-rose-400'
                            }`}
                          >
                            Nerfs ({patchCounts.nerf})
                          </button>
                        )}
                        {patchCounts.adjustment > 0 && (
                          <button
                            onClick={() => setPatchFilter('adjustment')}
                            className={`px-2 py-0.5 rounded transition-colors cursor-pointer ${
                              patchFilter === 'adjustment'
                                ? 'bg-amber-950 text-amber-300 border border-amber-800 font-medium'
                                : 'text-zinc-400 hover:text-amber-400'
                            }`}
                          >
                            Adjustments ({patchCounts.adjustment})
                          </button>
                        )}
                        {patchCounts.revamp > 0 && (
                          <button
                            onClick={() => setPatchFilter('revamp')}
                            className={`px-2 py-0.5 rounded transition-colors cursor-pointer ${
                              patchFilter === 'revamp'
                                ? 'bg-purple-950 text-purple-300 border border-purple-800 font-medium'
                                : 'text-zinc-400 hover:text-purple-400'
                            }`}
                          >
                            Revamps ({patchCounts.revamp})
                          </button>
                        )}
                        {patchCounts.rework > 0 && (
                          <button
                            onClick={() => setPatchFilter('rework')}
                            className={`px-2 py-0.5 rounded transition-colors cursor-pointer ${
                              patchFilter === 'rework'
                                ? 'bg-indigo-950 text-indigo-300 border border-indigo-800 font-medium'
                                : 'text-zinc-400 hover:text-indigo-400'
                            }`}
                          >
                            Reworks ({patchCounts.rework})
                          </button>
                        )}
                      </div>
                    )}

                    {/* Timeline List */}
                    {heroPatchList.length > 0 ? (
                      <div className="space-y-2.5 max-h-[500px] overflow-y-auto pr-0.5">
                        {heroPatchList.map((change, idx) => {
                          const badgeColor =
                            change.type === 'buff'
                              ? 'bg-emerald-950/70 text-emerald-300 border-emerald-800/60'
                              : change.type === 'nerf'
                              ? 'bg-rose-950/70 text-rose-300 border-rose-800/60'
                              : change.type === 'revamp'
                              ? 'bg-purple-950/70 text-purple-300 border-purple-800/60'
                              : change.type === 'rework'
                              ? 'bg-indigo-950/70 text-indigo-300 border-indigo-800/60'
                              : 'bg-amber-950/70 text-amber-300 border-amber-800/60';

                          return (
                            <div
                              key={change.id || idx}
                              className="p-3 rounded-lg border border-zinc-800 bg-zinc-950 space-y-2"
                            >
                              <div className="flex items-start justify-between gap-2">
                                <div className="space-y-1">
                                  <div className="flex items-center gap-1.5 flex-wrap">
                                    <span
                                      className={`px-1.5 py-0.2 rounded text-[9px] font-mono uppercase font-semibold border ${badgeColor}`}
                                    >
                                      {change.type}
                                    </span>
                                    <h4 className="font-semibold text-xs text-zinc-100">
                                      {change.title}
                                    </h4>
                                  </div>
                                  <div className="text-[10px] text-zinc-400 font-mono">
                                    <span className="text-zinc-500 uppercase">Affected: </span>
                                    <strong className="text-zinc-300 font-medium">
                                      {change.affectedSkillOrAttribute}
                                    </strong>
                                  </div>
                                </div>
                                <span className="text-[10px] font-mono text-zinc-500 shrink-0">
                                  {change.patchVersion} ({change.date})
                                </span>
                              </div>

                              {/* Numerical Comparison Block */}
                              {(change.previousValue || change.newValue) && (
                                <div className="p-2 rounded bg-zinc-900/60 border border-zinc-850 text-[10px] grid grid-cols-1 sm:grid-cols-2 gap-1.5 font-mono">
                                  {change.previousValue && (
                                    <div className="text-zinc-400">
                                      <span className="text-rose-400 block font-semibold text-[9px] uppercase tracking-wider">
                                        Previous Value
                                      </span>
                                      <span className="text-zinc-300">{change.previousValue}</span>
                                    </div>
                                  )}
                                  {change.newValue && (
                                    <div className="text-zinc-300">
                                      <span className="text-emerald-400 block font-semibold text-[9px] uppercase tracking-wider">
                                        New Value
                                      </span>
                                      <span className="text-zinc-100">{change.newValue}</span>
                                    </div>
                                  )}
                                </div>
                              )}

                              <p className="text-[11px] text-zinc-300 leading-relaxed">
                                {change.summary}
                              </p>

                              {change.details && change.details.length > 0 && (
                                <ul className="text-[10px] text-zinc-400 space-y-0.5 list-disc pl-4 pt-1 border-t border-zinc-900">
                                  {change.details.map((item, dIdx) => (
                                    <li key={dIdx}>{item}</li>
                                  ))}
                                </ul>
                              )}

                              {change.sourceUrl && (
                                <div className="pt-1.5 border-t border-zinc-900 flex items-center justify-between text-[10px]">
                                  <div className="flex items-center gap-1.5 flex-wrap">
                                    <span className={`px-1.5 py-0.2 rounded text-[8px] font-mono uppercase font-semibold border ${
                                      change.verificationStatus === 'verified'
                                        ? 'bg-emerald-950/80 text-emerald-300 border-emerald-800/60'
                                        : 'bg-zinc-900 text-zinc-400 border-zinc-800'
                                    }`}>
                                      {change.verificationStatus === 'verified' ? 'Verified' : 'Unverified'}
                                    </span>
                                    <span className={`px-1.5 py-0.2 rounded text-[8px] font-mono uppercase border ${
                                      change.sourceType === 'official'
                                        ? 'bg-sky-950 text-sky-300 border-sky-800'
                                        : 'bg-zinc-900 text-zinc-400 border-zinc-800'
                                    }`}>
                                      {change.sourceType === 'official' ? 'Official Moonton' : 'Secondary (Liquipedia)'}
                                    </span>
                                    <span className="text-zinc-500 truncate max-w-[130px] hidden sm:inline">
                                      {change.sourceName}
                                    </span>
                                  </div>
                                  <a
                                    href={change.sourceUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-1 text-sky-400 hover:text-sky-300 shrink-0 ml-2"
                                  >
                                    <span>View Patch Notes</span>
                                    <ExternalLink className="w-2.5 h-2.5" />
                                  </a>
                                </div>
                              )}
                            </div>
                          );
                        })}
                      </div>
                    ) : (
                      <div className="p-4 rounded bg-zinc-950 border border-zinc-800 text-center space-y-1">
                        <p className="text-xs text-zinc-400 font-medium">
                          {patchFilter === 'all'
                            ? 'No Specific Patch Notes Indexed'
                            : `No ${patchFilter.toUpperCase()} Records`}
                        </p>
                        <p className="text-[10px] text-zinc-500">
                          {patchFilter === 'all'
                            ? `${selectedHero.name}’s kit conforms to the active Original Server baseline (${CURRENT_ORIGINAL_SERVER_PATCH}). Specific historical patch documentation is pending verification.`
                            : `There are no recorded ${patchFilter} adjustments for ${selectedHero.name} in the active patch registry.`}
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              )}
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
