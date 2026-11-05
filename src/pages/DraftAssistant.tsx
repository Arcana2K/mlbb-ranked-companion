import React, { useState, useMemo } from 'react';
import { Hero, Lane, Role, RecommendationScore, ScoringWeights, PlayerProfile } from '../types/mlbb';
import { HEROES, HERO_MAP } from '../data/heroes';
import { RecommendationEngine } from '../services/recommendationEngine';
import { RoleBadge } from '../components/common/RoleBadge';
import { DataDisclaimer } from '../components/common/DataDisclaimer';
import {
  Crosshair,
  Search,
  Ban,
  RotateCcw,
  Sparkles,
  Info,
  Check,
  X,
  AlertTriangle
} from 'lucide-react';

interface DraftAssistantProps {
  weights: ScoringWeights;
  profile: PlayerProfile;
}

type DraftTarget =
  | { type: 'ally-pick'; index: number }
  | { type: 'enemy-pick'; index: number }
  | { type: 'ally-ban'; index: number }
  | { type: 'enemy-ban'; index: number };

export const DraftAssistant: React.FC<DraftAssistantProps> = ({ weights, profile }) => {
  const [alliedPicks, setAlliedPicks] = useState<(string | null)[]>([null, null, null, null, null]);
  const [enemyPicks, setEnemyPicks] = useState<(string | null)[]>([null, null, null, null, null]);

  const [alliedBans, setAlliedBans] = useState<(string | null)[]>([null, null, null, null, null]);
  const [enemyBans, setEnemyBans] = useState<(string | null)[]>([null, null, null, null, null]);

  const [activeTarget, setActiveTarget] = useState<DraftTarget>({ type: 'ally-pick', index: 0 });

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedRoleFilter, setSelectedRoleFilter] = useState<Role | 'ALL'>('ALL');
  const [selectedLaneFilter, setSelectedLaneFilter] = useState<Lane | 'ALL'>('ALL');

  const [inspectedScore, setInspectedScore] = useState<RecommendationScore | null>(null);

  const unavailableHeroIds = useMemo(() => {
    const set = new Set<string>();
    [...alliedPicks, ...enemyPicks, ...alliedBans, ...enemyBans].forEach((id) => {
      if (id) set.add(id);
    });
    return set;
  }, [alliedPicks, enemyPicks, alliedBans, enemyBans]);

  const filteredHeroes = useMemo(() => {
    return HEROES.filter((hero) => {
      const matchesSearch =
        hero.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        hero.specialties.some((s) => s.toLowerCase().includes(searchQuery.toLowerCase()));

      const matchesRole =
        selectedRoleFilter === 'ALL' ||
        hero.primaryRole === selectedRoleFilter ||
        hero.secondaryRole === selectedRoleFilter;

      const matchesLane =
        selectedLaneFilter === 'ALL' ||
        hero.primaryLane === selectedLaneFilter ||
        hero.secondaryLane === selectedLaneFilter;

      return matchesSearch && matchesRole && matchesLane;
    });
  }, [searchQuery, selectedRoleFilter, selectedLaneFilter]);

  const recommendations = useMemo(() => {
    return RecommendationEngine.getRecommendations({
      alliedPicks,
      enemyPicks,
      alliedBans,
      enemyBans,
      selectedLaneFilter,
      weights,
      userProfile: profile
    });
  }, [alliedPicks, enemyPicks, alliedBans, enemyBans, selectedLaneFilter, weights, profile]);

  const alliedComp = useMemo(() => {
    return RecommendationEngine.analyzeComposition(alliedPicks);
  }, [alliedPicks]);

  const enemyComp = useMemo(() => {
    return RecommendationEngine.analyzeComposition(enemyPicks);
  }, [enemyPicks]);

  const handleAssignHero = (heroId: string) => {
    if (activeTarget.type === 'ally-pick') {
      const next = [...alliedPicks];
      next[activeTarget.index] = heroId;
      setAlliedPicks(next);
      const nextEmpty = next.findIndex((id) => id === null);
      if (nextEmpty !== -1) {
        setActiveTarget({ type: 'ally-pick', index: nextEmpty });
      }
    } else if (activeTarget.type === 'enemy-pick') {
      const next = [...enemyPicks];
      next[activeTarget.index] = heroId;
      setEnemyPicks(next);
      const nextEmpty = next.findIndex((id) => id === null);
      if (nextEmpty !== -1) {
        setActiveTarget({ type: 'enemy-pick', index: nextEmpty });
      }
    } else if (activeTarget.type === 'ally-ban') {
      const next = [...alliedBans];
      next[activeTarget.index] = heroId;
      setAlliedBans(next);
      const nextEmpty = next.findIndex((id) => id === null);
      if (nextEmpty !== -1) {
        setActiveTarget({ type: 'ally-ban', index: nextEmpty });
      }
    } else if (activeTarget.type === 'enemy-ban') {
      const next = [...enemyBans];
      next[activeTarget.index] = heroId;
      setEnemyBans(next);
      const nextEmpty = next.findIndex((id) => id === null);
      if (nextEmpty !== -1) {
        setActiveTarget({ type: 'enemy-ban', index: nextEmpty });
      }
    }
  };

  const handleClearSlot = (target: DraftTarget, e: React.MouseEvent) => {
    e.stopPropagation();
    if (target.type === 'ally-pick') {
      const next = [...alliedPicks];
      next[target.index] = null;
      setAlliedPicks(next);
    } else if (target.type === 'enemy-pick') {
      const next = [...enemyPicks];
      next[target.index] = null;
      setEnemyPicks(next);
    } else if (target.type === 'ally-ban') {
      const next = [...alliedBans];
      next[target.index] = null;
      setAlliedBans(next);
    } else if (target.type === 'enemy-ban') {
      const next = [...enemyBans];
      next[target.index] = null;
      setEnemyBans(next);
    }
  };

  const handleResetDraft = () => {
    setAlliedPicks([null, null, null, null, null]);
    setEnemyPicks([null, null, null, null, null]);
    setAlliedBans([null, null, null, null, null]);
    setEnemyBans([null, null, null, null, null]);
    setActiveTarget({ type: 'ally-pick', index: 0 });
  };

  const handleLoadSampleDraft = () => {
    setAlliedBans(['fanny', 'ling', 'angela', null, null]);
    setEnemyBans(['diggie', 'mathilda', 'harith', null, null]);
    setAlliedPicks(['fredrinn', 'pharsa', null, null, null]);
    setEnemyPicks(['chou', 'claude', 'tigreal', null, null]);
    setActiveTarget({ type: 'ally-pick', index: 2 });
  };

  return (
    <div className="space-y-5">
      <DataDisclaimer type="rule-based" />

      {/* Draft Control Actions */}
      <div className="flex flex-wrap items-center justify-between gap-3 pb-3 border-b border-zinc-800">
        <div>
          <h2 className="text-sm font-semibold text-zinc-100">
            Draft Board
          </h2>
          <p className="text-xs text-zinc-500">
            Active Target: {activeTarget.type.replace('-', ' ').toUpperCase()} #{activeTarget.index + 1}
          </p>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={handleLoadSampleDraft}
            className="px-2.5 py-1 rounded text-xs font-medium bg-zinc-900 border border-zinc-800 text-zinc-300 hover:text-white hover:border-zinc-700 transition-colors cursor-pointer flex items-center gap-1.5"
          >
            <Sparkles className="w-3 h-3 text-zinc-400" />
            <span>Load Mid-Draft</span>
          </button>
          <button
            onClick={handleResetDraft}
            className="px-2.5 py-1 rounded text-xs font-medium bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-zinc-200 transition-colors cursor-pointer flex items-center gap-1.5"
          >
            <RotateCcw className="w-3 h-3 text-zinc-500" />
            <span>Reset</span>
          </button>
        </div>
      </div>

      {/* Teams Draft Stage (Allied vs Enemy) */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        {/* Allied Draft Side */}
        <div className="p-3.5 rounded-lg border border-zinc-800 bg-zinc-900/40 space-y-3.5">
          <div className="flex items-center justify-between pb-2 border-b border-zinc-800">
            <h3 className="text-xs font-semibold text-zinc-200 uppercase tracking-wider">
              Allied Team (Blue)
            </h3>
            <span className="text-xs text-zinc-500 font-mono">
              {alliedPicks.filter(Boolean).length} / 5 Locked
            </span>
          </div>

          {/* Allied Bans Bar */}
          <div className="space-y-1">
            <span className="text-[10px] text-zinc-500 uppercase font-medium block">
              Bans (5 Slots)
            </span>
            <div className="grid grid-cols-5 gap-1.5">
              {alliedBans.map((banId, idx) => {
                const hero = banId ? HERO_MAP.get(banId) : null;
                const isSelected =
                  activeTarget.type === 'ally-ban' && activeTarget.index === idx;

                return (
                  <div
                    key={`ally-ban-${idx}`}
                    onClick={() => setActiveTarget({ type: 'ally-ban', index: idx })}
                    className={`relative aspect-square rounded border flex items-center justify-center cursor-pointer transition-colors overflow-hidden ${
                      isSelected
                        ? 'border-sky-500 bg-zinc-850'
                        : 'border-zinc-800 bg-zinc-950/60 hover:border-zinc-700'
                    }`}
                  >
                    {hero ? (
                      <>
                        <img
                          src={hero.avatar}
                          alt={hero.name}
                          className="w-full h-full object-cover grayscale opacity-60"
                        />
                        <div className="absolute inset-0 flex items-center justify-center bg-black/40">
                          <Ban className="w-3.5 h-3.5 text-zinc-400" />
                        </div>
                        <button
                          onClick={(e) => handleClearSlot({ type: 'ally-ban', index: idx }, e)}
                          className="absolute top-0.5 right-0.5 p-0.5 rounded bg-black/70 text-zinc-400 hover:text-white"
                        >
                          <X className="w-2.5 h-2.5" />
                        </button>
                      </>
                    ) : (
                      <span className="text-[10px] text-zinc-600 font-mono">B{idx + 1}</span>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Allied Picks Slots */}
          <div className="space-y-1">
            <span className="text-[10px] text-zinc-500 uppercase font-medium block">
              Picks (5 Slots)
            </span>
            <div className="grid grid-cols-5 gap-1.5">
              {alliedPicks.map((pickId, idx) => {
                const hero = pickId ? HERO_MAP.get(pickId) : null;
                const isSelected =
                  activeTarget.type === 'ally-pick' && activeTarget.index === idx;

                return (
                  <div
                    key={`ally-pick-${idx}`}
                    onClick={() => setActiveTarget({ type: 'ally-pick', index: idx })}
                    className={`relative rounded border flex flex-col items-center justify-center p-1 cursor-pointer transition-colors aspect-[4/5] overflow-hidden ${
                      isSelected
                        ? 'border-sky-500 bg-zinc-850'
                        : 'border-zinc-800 bg-zinc-950/60 hover:border-zinc-700'
                    }`}
                  >
                    {hero ? (
                      <>
                        <img
                          src={hero.avatar}
                          alt={hero.name}
                          className="w-full h-full object-cover rounded"
                        />
                        <div className="absolute bottom-0 inset-x-0 p-1 bg-black/80 text-center">
                          <p className="text-[10px] font-medium text-zinc-100 truncate">{hero.name}</p>
                        </div>
                        <button
                          onClick={(e) => handleClearSlot({ type: 'ally-pick', index: idx }, e)}
                          className="absolute top-0.5 right-0.5 p-0.5 rounded bg-black/70 text-zinc-400 hover:text-white"
                        >
                          <X className="w-2.5 h-2.5" />
                        </button>
                      </>
                    ) : (
                      <div className="text-center">
                        <span className="text-[11px] font-mono text-zinc-400 block">
                          P{idx + 1}
                        </span>
                        <span className="text-[9px] text-zinc-600">Empty</span>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Allied Lane Needs */}
          <div className="pt-2 text-xs text-zinc-400 flex items-center gap-1.5 flex-wrap">
            <span className="text-[10px] text-zinc-500 uppercase">Missing:</span>
            {alliedComp.missingLanes.length === 0 ? (
              <span className="text-zinc-300 text-[11px]">All standard lanes assigned</span>
            ) : (
              alliedComp.missingLanes.map((lane) => (
                <span
                  key={lane}
                  className="px-1.5 py-0.2 rounded bg-zinc-800 text-zinc-300 font-mono text-[10px] border border-zinc-700/60"
                >
                  {lane}
                </span>
              ))
            )}
          </div>
        </div>

        {/* Enemy Draft Side */}
        <div className="p-3.5 rounded-lg border border-zinc-800 bg-zinc-900/40 space-y-3.5">
          <div className="flex items-center justify-between pb-2 border-b border-zinc-800">
            <h3 className="text-xs font-semibold text-zinc-200 uppercase tracking-wider">
              Enemy Team (Red)
            </h3>
            <span className="text-xs text-zinc-500 font-mono">
              {enemyPicks.filter(Boolean).length} / 5 Locked
            </span>
          </div>

          {/* Enemy Bans Bar */}
          <div className="space-y-1">
            <span className="text-[10px] text-zinc-500 uppercase font-medium block">
              Bans (5 Slots)
            </span>
            <div className="grid grid-cols-5 gap-1.5">
              {enemyBans.map((banId, idx) => {
                const hero = banId ? HERO_MAP.get(banId) : null;
                const isSelected =
                  activeTarget.type === 'enemy-ban' && activeTarget.index === idx;

                return (
                  <div
                    key={`enemy-ban-${idx}`}
                    onClick={() => setActiveTarget({ type: 'enemy-ban', index: idx })}
                    className={`relative aspect-square rounded border flex items-center justify-center cursor-pointer transition-colors overflow-hidden ${
                      isSelected
                        ? 'border-sky-500 bg-zinc-850'
                        : 'border-zinc-800 bg-zinc-950/60 hover:border-zinc-700'
                    }`}
                  >
                    {hero ? (
                      <>
                        <img
                          src={hero.avatar}
                          alt={hero.name}
                          className="w-full h-full object-cover grayscale opacity-60"
                        />
                        <div className="absolute inset-0 flex items-center justify-center bg-black/40">
                          <Ban className="w-3.5 h-3.5 text-zinc-400" />
                        </div>
                        <button
                          onClick={(e) => handleClearSlot({ type: 'enemy-ban', index: idx }, e)}
                          className="absolute top-0.5 right-0.5 p-0.5 rounded bg-black/70 text-zinc-400 hover:text-white"
                        >
                          <X className="w-2.5 h-2.5" />
                        </button>
                      </>
                    ) : (
                      <span className="text-[10px] text-zinc-600 font-mono">B{idx + 1}</span>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Enemy Picks Slots */}
          <div className="space-y-1">
            <span className="text-[10px] text-zinc-500 uppercase font-medium block">
              Picks (5 Slots)
            </span>
            <div className="grid grid-cols-5 gap-1.5">
              {enemyPicks.map((pickId, idx) => {
                const hero = pickId ? HERO_MAP.get(pickId) : null;
                const isSelected =
                  activeTarget.type === 'enemy-pick' && activeTarget.index === idx;

                return (
                  <div
                    key={`enemy-pick-${idx}`}
                    onClick={() => setActiveTarget({ type: 'enemy-pick', index: idx })}
                    className={`relative rounded border flex flex-col items-center justify-center p-1 cursor-pointer transition-colors aspect-[4/5] overflow-hidden ${
                      isSelected
                        ? 'border-sky-500 bg-zinc-850'
                        : 'border-zinc-800 bg-zinc-950/60 hover:border-zinc-700'
                    }`}
                  >
                    {hero ? (
                      <>
                        <img
                          src={hero.avatar}
                          alt={hero.name}
                          className="w-full h-full object-cover rounded"
                        />
                        <div className="absolute bottom-0 inset-x-0 p-1 bg-black/80 text-center">
                          <p className="text-[10px] font-medium text-zinc-100 truncate">{hero.name}</p>
                        </div>
                        <button
                          onClick={(e) => handleClearSlot({ type: 'enemy-pick', index: idx }, e)}
                          className="absolute top-0.5 right-0.5 p-0.5 rounded bg-black/70 text-zinc-400 hover:text-white"
                        >
                          <X className="w-2.5 h-2.5" />
                        </button>
                      </>
                    ) : (
                      <div className="text-center">
                        <span className="text-[11px] font-mono text-zinc-400 block">
                          P{idx + 1}
                        </span>
                        <span className="text-[9px] text-zinc-600">Empty</span>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Enemy Damage Type Profile */}
          <div className="pt-2 text-xs text-zinc-400 flex items-center gap-3 font-mono text-[11px]">
            <span className="text-[10px] text-zinc-500 uppercase font-sans">Damage Profile:</span>
            <span>{enemyComp.damageTypes.physical} Phys</span>
            <span>{enemyComp.damageTypes.magic} Mag</span>
            <span>{enemyComp.damageTypes.trueDamage} True</span>
          </div>
        </div>
      </div>

      {/* Main Bottom Section: Recommendations (Left) + Hero Selector (Right) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
        {/* Recommendation Panel (Left - 5 Cols) */}
        <div className="lg:col-span-5 space-y-3">
          <div className="flex items-center justify-between pb-2 border-b border-zinc-800">
            <h3 className="text-xs font-semibold text-zinc-200 uppercase tracking-wider">
              Recommended Picks
            </h3>
            <span className="text-xs text-zinc-500 font-mono">
              Lane: {selectedLaneFilter}
            </span>
          </div>

          <div className="space-y-2 max-h-[580px] overflow-y-auto pr-1">
            {recommendations.slice(0, 6).map((rec, index) => {
              const { hero, totalScore, reasons, warnings } = rec;
              const isFavorite = profile.favoriteHeroes.includes(hero.id);

              return (
                <div
                  key={hero.id}
                  className="p-3 rounded-lg border border-zinc-800 bg-zinc-900/40 hover:border-zinc-700 transition-colors space-y-2"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <img
                        src={hero.avatar}
                        alt={hero.name}
                        className="w-10 h-10 rounded object-cover border border-zinc-750"
                      />
                      <div>
                        <div className="flex items-center gap-1.5">
                          <h4 className="text-xs font-semibold text-zinc-100">{hero.name}</h4>
                          {isFavorite && (
                            <span className="text-[10px] text-zinc-400 px-1 rounded bg-zinc-800 border border-zinc-700">
                              Mastery
                            </span>
                          )}
                        </div>
                        <div className="flex items-center gap-1 mt-0.5">
                          <RoleBadge role={hero.primaryRole} size="sm" />
                          <span className="text-[11px] text-zinc-500">{hero.primaryLane}</span>
                        </div>
                      </div>
                    </div>

                    <div className="text-right">
                      <div className="text-base font-semibold text-zinc-100 font-mono">
                        {totalScore}<span className="text-[10px] text-zinc-500 font-sans font-normal">/100</span>
                      </div>
                      <span className="text-[10px] text-zinc-500">Fit Score</span>
                    </div>
                  </div>

                  {reasons.length > 0 && (
                    <div className="text-xs text-zinc-400 space-y-0.5">
                      {reasons.slice(0, 2).map((r, i) => (
                        <p key={i} className="flex items-start gap-1.5 text-zinc-300">
                          <span className="text-sky-400 font-bold shrink-0">·</span>
                          <span className="text-[11px]">{r}</span>
                        </p>
                      ))}
                    </div>
                  )}

                  {warnings.length > 0 && (
                    <p className="flex items-start gap-1.5 text-[11px] text-zinc-400">
                      <AlertTriangle className="w-3 h-3 text-amber-500 shrink-0 mt-0.5" />
                      <span>{warnings[0]}</span>
                    </p>
                  )}

                  <div className="flex items-center justify-between pt-1.5 border-t border-zinc-800/80">
                    <button
                      onClick={() => setInspectedScore(rec)}
                      className="text-[11px] text-zinc-400 hover:text-zinc-200 flex items-center gap-1 cursor-pointer"
                    >
                      <Info className="w-3 h-3" />
                      <span>Factors</span>
                    </button>

                    <button
                      onClick={() => handleAssignHero(hero.id)}
                      className="px-2.5 py-1 rounded text-xs font-medium bg-zinc-800 hover:bg-zinc-700 text-zinc-200 cursor-pointer transition-colors"
                    >
                      Assign to Slot
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Hero Selector Grid (Right - 7 Cols) */}
        <div className="lg:col-span-7 space-y-3">
          <div className="p-3 rounded-lg border border-zinc-800 bg-zinc-900/40 space-y-2.5">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5">
              <div className="relative flex-1">
                <Search className="w-3.5 h-3.5 absolute left-3 top-2.5 text-zinc-500" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Filter hero catalog..."
                  className="w-full bg-zinc-950 border border-zinc-800 rounded px-8 py-1 text-xs text-zinc-200 focus:border-zinc-600 focus:outline-none"
                />
              </div>

              <div className="flex items-center gap-1.5">
                <span className="text-[10px] text-zinc-500 uppercase">Lane:</span>
                <select
                  value={selectedLaneFilter}
                  onChange={(e) => setSelectedLaneFilter(e.target.value as Lane | 'ALL')}
                  className="bg-zinc-950 border border-zinc-800 rounded px-2 py-1 text-xs text-zinc-300 focus:outline-none"
                >
                  <option value="ALL">All</option>
                  <option value="Gold Lane">Gold Lane</option>
                  <option value="EXP Lane">EXP Lane</option>
                  <option value="Mid Lane">Mid Lane</option>
                  <option value="Roam">Roam</option>
                  <option value="Jungle">Jungle</option>
                </select>
              </div>
            </div>

            {/* Role Filter Chips */}
            <div className="flex flex-wrap items-center gap-1 pt-1">
              {(['ALL', 'Tank', 'Fighter', 'Assassin', 'Mage', 'Marksman', 'Support'] as const).map(
                (role) => (
                  <button
                    key={role}
                    onClick={() => setSelectedRoleFilter(role)}
                    className={`px-2 py-0.5 rounded text-[11px] font-medium transition-colors cursor-pointer ${
                      selectedRoleFilter === role
                        ? 'bg-zinc-800 text-zinc-100'
                        : 'bg-zinc-950 text-zinc-400 hover:text-zinc-200'
                    }`}
                  >
                    {role}
                  </button>
                )
              )}
            </div>
          </div>

          {/* Hero Tiles Grid */}
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-2 max-h-[500px] overflow-y-auto p-0.5">
            {filteredHeroes.map((hero) => {
              const isUnavailable = unavailableHeroIds.has(hero.id);

              return (
                <button
                  key={hero.id}
                  disabled={isUnavailable}
                  onClick={() => handleAssignHero(hero.id)}
                  className={`relative rounded border flex flex-col items-center p-2 text-center transition-colors cursor-pointer ${
                    isUnavailable
                      ? 'border-zinc-850 bg-zinc-950/30 opacity-30 cursor-not-allowed'
                      : 'border-zinc-800 bg-zinc-900/40 hover:border-zinc-700 hover:bg-zinc-850'
                  }`}
                >
                  <div className="relative w-10 h-10 mb-1">
                    <img
                      src={hero.avatar}
                      alt={hero.name}
                      className="w-full h-full object-cover rounded border border-zinc-750"
                    />
                    {isUnavailable && (
                      <div className="absolute inset-0 bg-black/60 rounded flex items-center justify-center">
                        <Ban className="w-4 h-4 text-zinc-400" />
                      </div>
                    )}
                  </div>
                  <span className="text-xs font-medium text-zinc-200 truncate w-full">
                    {hero.name}
                  </span>
                  <span className="text-[10px] text-zinc-500 truncate w-full">{hero.primaryRole}</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Inspect Score Factors Modal */}
      {inspectedScore && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-zinc-900 border border-zinc-800 rounded-lg max-w-md w-full p-5 space-y-4 shadow-xl relative">
            <button
              onClick={() => setInspectedScore(null)}
              className="absolute top-3.5 right-3.5 p-1 rounded text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="flex items-center gap-3">
              <img
                src={inspectedScore.hero.avatar}
                alt={inspectedScore.hero.name}
                className="w-12 h-12 rounded object-cover border border-zinc-750"
              />
              <div>
                <h3 className="text-sm font-semibold text-zinc-100 flex items-center gap-2">
                  <span>{inspectedScore.hero.name}</span>
                  <span className="text-xs font-mono text-zinc-400">
                    {inspectedScore.totalScore}/100
                  </span>
                </h3>
                <div className="flex items-center gap-1 mt-0.5">
                  <RoleBadge role={inspectedScore.hero.primaryRole} size="sm" />
                  <span className="text-xs text-zinc-500">{inspectedScore.hero.primaryLane}</span>
                </div>
              </div>
            </div>

            {/* Score Factor Breakdown */}
            <div className="space-y-2.5 bg-zinc-950 p-3.5 rounded border border-zinc-800 text-xs">
              <div className="space-y-2">
                <div>
                  <div className="flex justify-between text-zinc-300 mb-1">
                    <span>Role & Lane Fit ({weights.roleFit}%)</span>
                    <span className="font-mono text-zinc-400">{inspectedScore.roleFitScore}/100</span>
                  </div>
                  <div className="h-1 w-full bg-zinc-800 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-zinc-400 rounded-full"
                      style={{ width: `${inspectedScore.roleFitScore}%` }}
                    />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-zinc-300 mb-1">
                    <span>Counter Advantage ({weights.counterAdvantage}%)</span>
                    <span className="font-mono text-zinc-400">{inspectedScore.counterScore}/100</span>
                  </div>
                  <div className="h-1 w-full bg-zinc-800 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-zinc-400 rounded-full"
                      style={{ width: `${inspectedScore.counterScore}%` }}
                    />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-zinc-300 mb-1">
                    <span>Team Synergy ({weights.teamSynergy}%)</span>
                    <span className="font-mono text-zinc-400">{inspectedScore.synergyScore}/100</span>
                  </div>
                  <div className="h-1 w-full bg-zinc-800 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-zinc-400 rounded-full"
                      style={{ width: `${inspectedScore.synergyScore}%` }}
                    />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-zinc-300 mb-1">
                    <span>Player Mastery ({weights.playerProficiency}%)</span>
                    <span className="font-mono text-zinc-400">{inspectedScore.playerProficiencyScore}/100</span>
                  </div>
                  <div className="h-1 w-full bg-zinc-800 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-zinc-400 rounded-full"
                      style={{ width: `${inspectedScore.playerProficiencyScore}%` }}
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Reasons List */}
            <div className="space-y-1.5 text-xs">
              <span className="text-[10px] text-zinc-500 uppercase font-medium block">
                Evaluation Notes
              </span>
              <ul className="text-zinc-300 space-y-1 max-h-36 overflow-y-auto">
                {inspectedScore.reasons.map((r, i) => (
                  <li key={i} className="flex items-start gap-1.5 text-[11px]">
                    <span className="text-sky-400 font-bold shrink-0">·</span>
                    <span>{r}</span>
                  </li>
                ))}
                {inspectedScore.warnings.map((w, i) => (
                  <li key={`w-${i}`} className="flex items-start gap-1.5 text-[11px] text-amber-400">
                    <AlertTriangle className="w-3 h-3 text-amber-500 shrink-0 mt-0.5" />
                    <span>{w}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-2 flex justify-end">
              <button
                onClick={() => setInspectedScore(null)}
                className="px-3 py-1.5 rounded text-xs font-medium bg-zinc-800 hover:bg-zinc-700 text-zinc-200 cursor-pointer"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
