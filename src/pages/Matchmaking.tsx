import React, { useState } from 'react';
import { MatchmakingPlayer, Role, Lane, RankTier } from '../types/mlbb';
import { ALL_RANKS } from '../data/ranks';
import { DataDisclaimer } from '../components/common/DataDisclaimer';
import {
  RotateCcw,
  Sparkles,
  AlertCircle
} from 'lucide-react';

const ROLES: Role[] = ['Tank', 'Fighter', 'Assassin', 'Mage', 'Marksman', 'Support'];
const LANES: Lane[] = ['Gold Lane', 'EXP Lane', 'Mid Lane', 'Roam', 'Jungle'];

const DEFAULT_ALLIES: MatchmakingPlayer[] = [
  {
    id: 'ally-1',
    ign: 'You (Striker)',
    rank: 'Mythical Honor',
    stars: 34,
    preferredRole: 'Marksman',
    preferredLane: 'Gold Lane',
    winRate: 58.5,
    matchesPlayed: 248,
    mainHeroes: ['Claude', 'Beatrix', 'Brody']
  },
  {
    id: 'ally-2',
    ign: 'DragonKnight_PH',
    rank: 'Mythical Honor',
    stars: 28,
    preferredRole: 'Fighter',
    preferredLane: 'EXP Lane',
    winRate: 54.2,
    matchesPlayed: 310,
    mainHeroes: ['Yu Zhong', 'Paquito', 'Chou']
  },
  {
    id: 'ally-3',
    ign: 'SilentBlade',
    rank: 'Mythic',
    stars: 19,
    preferredRole: 'Assassin',
    preferredLane: 'Jungle',
    winRate: 52.0,
    matchesPlayed: 180,
    mainHeroes: ['Hayabusa', 'Ling', 'Lancelot']
  },
  {
    id: 'ally-4',
    ign: 'StarlightAura',
    rank: 'Mythical Honor',
    stars: 31,
    preferredRole: 'Mage',
    preferredLane: 'Mid Lane',
    winRate: 55.4,
    matchesPlayed: 290,
    mainHeroes: ['Pharsa', 'Xavier', 'Novaria']
  },
  {
    id: 'ally-5',
    ign: 'IronShield99',
    rank: 'Mythic',
    stars: 14,
    preferredRole: 'Tank',
    preferredLane: 'Roam',
    winRate: 49.5,
    matchesPlayed: 140,
    mainHeroes: ['Tigreal', 'Minotaur', 'Khufra']
  }
];

const DEFAULT_ENEMIES: MatchmakingPlayer[] = [
  {
    id: 'enemy-1',
    ign: 'ViperSniper',
    rank: 'Mythical Honor',
    stars: 36,
    preferredRole: 'Marksman',
    preferredLane: 'Gold Lane',
    winRate: 61.2,
    matchesPlayed: 420,
    mainHeroes: ['Beatrix', 'Claude', 'Lesley']
  },
  {
    id: 'enemy-2',
    ign: 'MartialGod',
    rank: 'Mythical Honor',
    stars: 42,
    preferredRole: 'Fighter',
    preferredLane: 'EXP Lane',
    winRate: 57.0,
    matchesPlayed: 350,
    mainHeroes: ['Chou', 'Arlott', 'Ruby']
  },
  {
    id: 'enemy-3',
    ign: 'ShadowReaper',
    rank: 'Mythical Glory',
    stars: 52,
    preferredRole: 'Assassin',
    preferredLane: 'Jungle',
    winRate: 64.5,
    matchesPlayed: 510,
    mainHeroes: ['Fanny', 'Ling', 'Hayabusa']
  },
  {
    id: 'enemy-4',
    ign: 'MysticCaster',
    rank: 'Mythic',
    stars: 22,
    preferredRole: 'Mage',
    preferredLane: 'Mid Lane',
    winRate: 51.3,
    matchesPlayed: 195,
    mainHeroes: ['Kagura', 'Pharsa', 'Harith']
  },
  {
    id: 'enemy-5',
    ign: 'DivineSupport',
    rank: 'Mythical Honor',
    stars: 29,
    preferredRole: 'Support',
    preferredLane: 'Roam',
    winRate: 53.8,
    matchesPlayed: 260,
    mainHeroes: ['Angela', 'Mathilda', 'Diggie']
  }
];

export const Matchmaking: React.FC = () => {
  const [allies, setAllies] = useState<MatchmakingPlayer[]>(DEFAULT_ALLIES);
  const [enemies, setEnemies] = useState<MatchmakingPlayer[]>(DEFAULT_ENEMIES);
  const [activeTab, setActiveTab] = useState<'rosters' | 'comparison'>('rosters');

  const updatePlayer = (
    team: 'allies' | 'enemies',
    index: number,
    field: keyof MatchmakingPlayer,
    value: any
  ) => {
    if (team === 'allies') {
      const next = [...allies];
      next[index] = { ...next[index], [field]: value };
      setAllies(next);
    } else {
      const next = [...enemies];
      next[index] = { ...next[index], [field]: value };
      setEnemies(next);
    }
  };

  const handleReset = () => {
    setAllies(
      Array.from({ length: 5 }, (_, i) => ({
        id: `ally-${i + 1}`,
        ign: `Ally Player ${i + 1}`,
        rank: 'Mythic',
        stars: 10,
        preferredRole: ROLES[i % ROLES.length],
        preferredLane: LANES[i % LANES.length],
        winRate: 50.0,
        matchesPlayed: 100,
        mainHeroes: []
      }))
    );
    setEnemies(
      Array.from({ length: 5 }, (_, i) => ({
        id: `enemy-${i + 1}`,
        ign: `Enemy Player ${i + 1}`,
        rank: 'Mythic',
        stars: 10,
        preferredRole: ROLES[i % ROLES.length],
        preferredLane: LANES[i % LANES.length],
        winRate: 50.0,
        matchesPlayed: 100,
        mainHeroes: []
      }))
    );
  };

  const handleLoadSample = () => {
    setAllies(DEFAULT_ALLIES);
    setEnemies(DEFAULT_ENEMIES);
  };

  // Comparative calculations
  const allyAvgWr =
    allies.length > 0
      ? (allies.reduce((acc, p) => acc + (p.winRate || 0), 0) / allies.length).toFixed(1)
      : '0.0';

  const enemyAvgWr =
    enemies.length > 0
      ? (enemies.reduce((acc, p) => acc + (p.winRate || 0), 0) / enemies.length).toFixed(1)
      : '0.0';

  // Role conflict checking
  const getRoleCounts = (players: MatchmakingPlayer[]) => {
    const counts: Record<string, number> = {};
    players.forEach((p) => {
      counts[p.preferredRole] = (counts[p.preferredRole] || 0) + 1;
    });
    return counts;
  };

  const allyRoleCounts = getRoleCounts(allies);
  const enemyRoleCounts = getRoleCounts(enemies);

  const allyConflicts = Object.entries(allyRoleCounts).filter(([_, count]) => count > 1);
  const enemyConflicts = Object.entries(enemyRoleCounts).filter(([_, count]) => count > 1);

  return (
    <div className="space-y-5">
      <DataDisclaimer
        type="notice"
        text="Evaluates manually entered player profiles and roles. Does not access private MLBB server APIs."
      />

      {/* Control Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-zinc-800">
        <div className="flex items-center gap-1 bg-zinc-900 p-0.5 rounded-md border border-zinc-800">
          <button
            onClick={() => setActiveTab('rosters')}
            className={`px-3 py-1 rounded text-xs font-medium transition-colors cursor-pointer ${
              activeTab === 'rosters'
                ? 'bg-zinc-800 text-zinc-100'
                : 'text-zinc-400 hover:text-zinc-200'
            }`}
          >
            Player Roster Entry
          </button>
          <button
            onClick={() => setActiveTab('comparison')}
            className={`px-3 py-1 rounded text-xs font-medium transition-colors cursor-pointer ${
              activeTab === 'comparison'
                ? 'bg-zinc-800 text-zinc-100'
                : 'text-zinc-400 hover:text-zinc-200'
            }`}
          >
            Team Assessment
          </button>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={handleLoadSample}
            className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded text-xs font-medium bg-zinc-900 border border-zinc-800 text-zinc-300 hover:text-white hover:border-zinc-700 transition-colors cursor-pointer"
          >
            <Sparkles className="w-3 h-3 text-zinc-400" />
            <span>Load Sample Lobby</span>
          </button>
          <button
            onClick={handleReset}
            className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded text-xs font-medium bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-zinc-200 transition-colors cursor-pointer"
          >
            <RotateCcw className="w-3 h-3 text-zinc-500" />
            <span>Reset</span>
          </button>
        </div>
      </div>

      {/* Summary KPI Strip */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
        <div className="p-3.5 rounded-lg border border-zinc-800 bg-zinc-900/50">
          <p className="text-[11px] font-medium text-zinc-400 uppercase tracking-wider">
            Allied Roster Average
          </p>
          <div className="mt-1 flex items-baseline gap-2">
            <span className="text-xl font-semibold text-zinc-100 font-mono">{allyAvgWr}%</span>
            <span className="text-xs text-zinc-500">Win Rate (5 players)</span>
          </div>
          {allyConflicts.length > 0 && (
            <p className="mt-1.5 text-xs text-amber-400 flex items-center gap-1">
              <AlertCircle className="w-3 h-3 shrink-0" />
              Role overlap: {allyConflicts.map(([r]) => r).join(', ')}
            </p>
          )}
        </div>

        <div className="p-3.5 rounded-lg border border-zinc-800 bg-zinc-900/50 text-center flex flex-col justify-center">
          <p className="text-[11px] font-medium text-zinc-400 uppercase tracking-wider">
            Differential
          </p>
          <div className="mt-1 text-sm font-medium text-zinc-200">
            {Number(enemyAvgWr) > Number(allyAvgWr)
              ? `Enemy holds +${(Number(enemyAvgWr) - Number(allyAvgWr)).toFixed(1)}% WR advantage`
              : `Allies hold +${(Number(allyAvgWr) - Number(enemyAvgWr)).toFixed(1)}% WR advantage`}
          </div>
        </div>

        <div className="p-3.5 rounded-lg border border-zinc-800 bg-zinc-900/50">
          <p className="text-[11px] font-medium text-zinc-400 uppercase tracking-wider">
            Enemy Roster Average
          </p>
          <div className="mt-1 flex items-baseline gap-2">
            <span className="text-xl font-semibold text-zinc-100 font-mono">{enemyAvgWr}%</span>
            <span className="text-xs text-zinc-500">Win Rate (5 players)</span>
          </div>
          {enemyConflicts.length > 0 && (
            <p className="mt-1.5 text-xs text-amber-400 flex items-center gap-1">
              <AlertCircle className="w-3 h-3 shrink-0" />
              Role overlap: {enemyConflicts.map(([r]) => r).join(', ')}
            </p>
          )}
        </div>
      </div>

      {/* Main View: Player Entry or Comparison View */}
      {activeTab === 'rosters' ? (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          {/* Allied Team Column */}
          <div className="space-y-3">
            <div className="flex items-center justify-between pb-2 border-b border-zinc-800">
              <h3 className="text-xs font-semibold text-zinc-200 uppercase tracking-wider">
                Allied Team
              </h3>
              <span className="text-xs text-zinc-500 font-mono">Blue Side</span>
            </div>

            <div className="space-y-2.5">
              {allies.map((player, idx) => (
                <div
                  key={player.id}
                  className="p-3 rounded-lg border border-zinc-800 bg-zinc-900/40 space-y-2.5"
                >
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <div className="flex items-center gap-2 flex-1 min-w-[140px]">
                      <span className="text-xs font-mono text-zinc-500">#{idx + 1}</span>
                      <input
                        type="text"
                        value={player.ign}
                        onChange={(e) => updatePlayer('allies', idx, 'ign', e.target.value)}
                        placeholder="Player IGN"
                        className="bg-zinc-950 border border-zinc-800 rounded px-2.5 py-1 text-xs text-zinc-200 focus:border-zinc-600 focus:outline-none w-full"
                      />
                    </div>

                    <div className="flex items-center gap-1.5">
                      <select
                        value={player.rank}
                        onChange={(e) =>
                          updatePlayer('allies', idx, 'rank', e.target.value as RankTier)
                        }
                        className="bg-zinc-950 border border-zinc-800 rounded px-2 py-1 text-xs text-zinc-300 focus:outline-none"
                      >
                        {ALL_RANKS.map((r) => (
                          <option key={r} value={r}>
                            {r}
                          </option>
                        ))}
                      </select>

                      <div className="flex items-center gap-1 bg-zinc-950 border border-zinc-800 rounded px-2 py-1">
                        <input
                          type="number"
                          value={player.stars || 0}
                          min={0}
                          max={300}
                          onChange={(e) =>
                            updatePlayer('allies', idx, 'stars', parseInt(e.target.value) || 0)
                          }
                          className="w-8 bg-transparent text-xs text-zinc-300 font-mono focus:outline-none"
                        />
                        <span className="text-xs text-zinc-500">★</span>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs">
                    <div>
                      <label className="text-[10px] text-zinc-500 block mb-0.5">Role</label>
                      <select
                        value={player.preferredRole}
                        onChange={(e) =>
                          updatePlayer('allies', idx, 'preferredRole', e.target.value as Role)
                        }
                        className="w-full bg-zinc-950 border border-zinc-800 rounded px-2 py-1 text-zinc-300 focus:outline-none"
                      >
                        {ROLES.map((r) => (
                          <option key={r} value={r}>
                            {r}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="text-[10px] text-zinc-500 block mb-0.5">Lane</label>
                      <select
                        value={player.preferredLane}
                        onChange={(e) =>
                          updatePlayer('allies', idx, 'preferredLane', e.target.value as Lane)
                        }
                        className="w-full bg-zinc-950 border border-zinc-800 rounded px-2 py-1 text-zinc-300 focus:outline-none"
                      >
                        {LANES.map((l) => (
                          <option key={l} value={l}>
                            {l}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="text-[10px] text-zinc-500 block mb-0.5">Win Rate (%)</label>
                      <input
                        type="number"
                        step="0.1"
                        min="0"
                        max="100"
                        value={player.winRate}
                        onChange={(e) =>
                          updatePlayer('allies', idx, 'winRate', parseFloat(e.target.value) || 0)
                        }
                        className="w-full bg-zinc-950 border border-zinc-800 rounded px-2 py-1 text-zinc-300 font-mono focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="text-[10px] text-zinc-500 block mb-0.5">Matches</label>
                      <input
                        type="number"
                        min="0"
                        value={player.matchesPlayed}
                        onChange={(e) =>
                          updatePlayer('allies', idx, 'matchesPlayed', parseInt(e.target.value) || 0)
                        }
                        className="w-full bg-zinc-950 border border-zinc-800 rounded px-2 py-1 text-zinc-300 font-mono focus:outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-[10px] text-zinc-500 block mb-0.5">
                      Main Heroes (comma-separated)
                    </label>
                    <input
                      type="text"
                      value={player.mainHeroes.join(', ')}
                      onChange={(e) =>
                        updatePlayer(
                          'allies',
                          idx,
                          'mainHeroes',
                          e.target.value.split(',').map((s) => s.trim()).filter(Boolean)
                        )
                      }
                      placeholder="e.g. Claude, Beatrix, Brody"
                      className="w-full bg-zinc-950 border border-zinc-800 rounded px-2 py-1 text-xs text-zinc-300 focus:outline-none"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Enemy Team Column */}
          <div className="space-y-3">
            <div className="flex items-center justify-between pb-2 border-b border-zinc-800">
              <h3 className="text-xs font-semibold text-zinc-200 uppercase tracking-wider">
                Enemy Team
              </h3>
              <span className="text-xs text-zinc-500 font-mono">Red Side</span>
            </div>

            <div className="space-y-2.5">
              {enemies.map((player, idx) => (
                <div
                  key={player.id}
                  className="p-3 rounded-lg border border-zinc-800 bg-zinc-900/40 space-y-2.5"
                >
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <div className="flex items-center gap-2 flex-1 min-w-[140px]">
                      <span className="text-xs font-mono text-zinc-500">#{idx + 1}</span>
                      <input
                        type="text"
                        value={player.ign}
                        onChange={(e) => updatePlayer('enemies', idx, 'ign', e.target.value)}
                        placeholder="Player IGN"
                        className="bg-zinc-950 border border-zinc-800 rounded px-2.5 py-1 text-xs text-zinc-200 focus:border-zinc-600 focus:outline-none w-full"
                      />
                    </div>

                    <div className="flex items-center gap-1.5">
                      <select
                        value={player.rank}
                        onChange={(e) =>
                          updatePlayer('enemies', idx, 'rank', e.target.value as RankTier)
                        }
                        className="bg-zinc-950 border border-zinc-800 rounded px-2 py-1 text-xs text-zinc-300 focus:outline-none"
                      >
                        {ALL_RANKS.map((r) => (
                          <option key={r} value={r}>
                            {r}
                          </option>
                        ))}
                      </select>

                      <div className="flex items-center gap-1 bg-zinc-950 border border-zinc-800 rounded px-2 py-1">
                        <input
                          type="number"
                          value={player.stars || 0}
                          min={0}
                          max={300}
                          onChange={(e) =>
                            updatePlayer('enemies', idx, 'stars', parseInt(e.target.value) || 0)
                          }
                          className="w-8 bg-transparent text-xs text-zinc-300 font-mono focus:outline-none"
                        />
                        <span className="text-xs text-zinc-500">★</span>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs">
                    <div>
                      <label className="text-[10px] text-zinc-500 block mb-0.5">Role</label>
                      <select
                        value={player.preferredRole}
                        onChange={(e) =>
                          updatePlayer('enemies', idx, 'preferredRole', e.target.value as Role)
                        }
                        className="w-full bg-zinc-950 border border-zinc-800 rounded px-2 py-1 text-zinc-300 focus:outline-none"
                      >
                        {ROLES.map((r) => (
                          <option key={r} value={r}>
                            {r}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="text-[10px] text-zinc-500 block mb-0.5">Lane</label>
                      <select
                        value={player.preferredLane}
                        onChange={(e) =>
                          updatePlayer('enemies', idx, 'preferredLane', e.target.value as Lane)
                        }
                        className="w-full bg-zinc-950 border border-zinc-800 rounded px-2 py-1 text-zinc-300 focus:outline-none"
                      >
                        {LANES.map((l) => (
                          <option key={l} value={l}>
                            {l}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="text-[10px] text-zinc-500 block mb-0.5">Win Rate (%)</label>
                      <input
                        type="number"
                        step="0.1"
                        min="0"
                        max="100"
                        value={player.winRate}
                        onChange={(e) =>
                          updatePlayer('enemies', idx, 'winRate', parseFloat(e.target.value) || 0)
                        }
                        className="w-full bg-zinc-950 border border-zinc-800 rounded px-2 py-1 text-zinc-300 font-mono focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="text-[10px] text-zinc-500 block mb-0.5">Matches</label>
                      <input
                        type="number"
                        min="0"
                        value={player.matchesPlayed}
                        onChange={(e) =>
                          updatePlayer('enemies', idx, 'matchesPlayed', parseInt(e.target.value) || 0)
                        }
                        className="w-full bg-zinc-950 border border-zinc-800 rounded px-2 py-1 text-zinc-300 font-mono focus:outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-[10px] text-zinc-500 block mb-0.5">
                      Main Heroes (comma-separated)
                    </label>
                    <input
                      type="text"
                      value={player.mainHeroes.join(', ')}
                      onChange={(e) =>
                        updatePlayer(
                          'enemies',
                          idx,
                          'mainHeroes',
                          e.target.value.split(',').map((s) => s.trim()).filter(Boolean)
                        )
                      }
                      placeholder="e.g. Fanny, Ling, Chou"
                      className="w-full bg-zinc-950 border border-zinc-800 rounded px-2 py-1 text-xs text-zinc-300 focus:outline-none"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      ) : (
        /* Team Assessment & Comparison Tab */
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="p-4 rounded-lg border border-zinc-800 bg-zinc-900/40 space-y-3">
            <div className="flex items-center justify-between pb-2 border-b border-zinc-800">
              <h4 className="text-xs font-semibold text-zinc-200 uppercase tracking-wider">
                Allied Composition
              </h4>
              <span className="text-xs font-mono text-zinc-400">{allyAvgWr}% Win Rate</span>
            </div>

            <div className="space-y-1.5">
              <p className="text-[11px] font-medium text-zinc-400 uppercase">Lane Coverage:</p>
              <div className="flex flex-wrap gap-1.5">
                {LANES.map((lane) => {
                  const covered = allies.some((p) => p.preferredLane === lane);
                  return (
                    <span
                      key={lane}
                      className={`text-xs px-2 py-0.5 rounded font-medium border ${
                        covered
                          ? 'bg-zinc-800 border-zinc-700 text-zinc-200'
                          : 'bg-zinc-950 border-zinc-850 text-zinc-600 line-through'
                      }`}
                    >
                      {lane}
                    </span>
                  );
                })}
              </div>
            </div>

            <div className="space-y-1 text-xs text-zinc-400">
              <p className="text-[11px] font-medium text-zinc-400 uppercase">Observations:</p>
              <ul className="space-y-1 list-disc pl-4 text-zinc-300">
                <li>Core positions (Gold Lane & Mid Lane) covered with sufficient experience.</li>
                <li>Standard 5-role configuration feasible based on preferred pools.</li>
              </ul>
            </div>

            {allyConflicts.length > 0 && (
              <div className="p-2.5 rounded bg-zinc-850 border border-zinc-750 text-xs text-amber-300">
                <p className="font-medium flex items-center gap-1.5 mb-0.5">
                  <AlertCircle className="w-3.5 h-3.5 text-amber-400" />
                  Role Redundancies Detected:
                </p>
                <p className="text-zinc-400">
                  Multiple players prefer {allyConflicts.map(([r]) => r).join(', ')}. Coordinate in lobby chat.
                </p>
              </div>
            )}
          </div>

          <div className="p-4 rounded-lg border border-zinc-800 bg-zinc-900/40 space-y-3">
            <div className="flex items-center justify-between pb-2 border-b border-zinc-800">
              <h4 className="text-xs font-semibold text-zinc-200 uppercase tracking-wider">
                Enemy Composition
              </h4>
              <span className="text-xs font-mono text-zinc-400">{enemyAvgWr}% Win Rate</span>
            </div>

            <div className="space-y-1.5">
              <p className="text-[11px] font-medium text-zinc-400 uppercase">Lane Coverage:</p>
              <div className="flex flex-wrap gap-1.5">
                {LANES.map((lane) => {
                  const covered = enemies.some((p) => p.preferredLane === lane);
                  return (
                    <span
                      key={lane}
                      className={`text-xs px-2 py-0.5 rounded font-medium border ${
                        covered
                          ? 'bg-zinc-800 border-zinc-700 text-zinc-200'
                          : 'bg-zinc-950 border-zinc-850 text-zinc-600 line-through'
                      }`}
                    >
                      {lane}
                    </span>
                  );
                })}
              </div>
            </div>

            <div className="space-y-1 text-xs text-zinc-400">
              <p className="text-[11px] font-medium text-zinc-400 uppercase">Key Enemy Targets:</p>
              <ul className="space-y-1 list-disc pl-4 text-zinc-300">
                {enemies
                  .filter((e) => e.winRate >= 58)
                  .map((e) => (
                    <li key={e.id}>
                      <span className="font-medium text-zinc-200">{e.ign}</span> ({e.winRate}% WR, {e.preferredRole}) — Mains: {e.mainHeroes.join(', ') || 'N/A'}.
                    </li>
                  ))}
              </ul>
            </div>

            {enemyConflicts.length > 0 && (
              <div className="p-2.5 rounded bg-zinc-850 border border-zinc-750 text-xs text-zinc-300">
                <p className="font-medium mb-0.5 text-zinc-200">Enemy Roster Note:</p>
                <p className="text-zinc-400">
                  Enemy roster contains multiple {enemyConflicts.map(([r]) => r).join(', ')} mains, potentially leading to an off-role pick.
                </p>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
