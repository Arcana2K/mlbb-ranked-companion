import React, { useState } from 'react';
import { MatchRecord, Role, Lane } from '../types/mlbb';
import { HEROES, HERO_MAP } from '../data/heroes';
import { RoleBadge } from '../components/common/RoleBadge';
import { HeroAvatar } from '../components/common/HeroAvatar';
import { DataDisclaimer } from '../components/common/DataDisclaimer';
import {
  Plus,
  Trash2,
  Clock,
  Swords,
  X
} from 'lucide-react';

interface MatchHistoryProps {
  matches: MatchRecord[];
  onAddMatch: (match: MatchRecord) => void;
  onDeleteMatch: (id: string) => void;
}

export const MatchHistory: React.FC<MatchHistoryProps> = ({
  matches,
  onAddMatch,
  onDeleteMatch
}) => {
  const [filterResult, setFilterResult] = useState<'ALL' | 'VICTORY' | 'DEFEAT'>('ALL');
  const [filterRole, setFilterRole] = useState<Role | 'ALL'>('ALL');
  const [isModalOpen, setIsModalOpen] = useState(false);

  // New Match Form State
  const [formHeroId, setFormHeroId] = useState<string>('claude');
  const [formResult, setFormResult] = useState<'VICTORY' | 'DEFEAT'>('VICTORY');
  const [formRole, setFormRole] = useState<Role>('Marksman');
  const [formLane, setFormLane] = useState<Lane>('Gold Lane');
  const [formMinutes, setFormMinutes] = useState<number>(15);
  const [formSeconds, setFormSeconds] = useState<number>(30);
  const [formKills, setFormKills] = useState<number>(8);
  const [formDeaths, setFormDeaths] = useState<number>(2);
  const [formAssists, setFormAssists] = useState<number>(6);
  const [formMedal, setFormMedal] = useState<'MVP' | 'Gold' | 'Silver' | 'Bronze'>('MVP');
  const [formSpell, setFormSpell] = useState<string>('Flicker');
  const [formNotes, setFormNotes] = useState<string>('');

  const filteredMatches = matches.filter((m) => {
    const matchRes = filterResult === 'ALL' || m.result === filterResult;
    const matchRole = filterRole === 'ALL' || m.role === filterRole;
    return matchRes && matchRole;
  });

  const handleHeroSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const id = e.target.value;
    setFormHeroId(id);
    const hero = HERO_MAP.get(id);
    if (hero) {
      setFormRole(hero.primaryRole);
      setFormLane(hero.primaryLane);
    }
  };

  const handleCreateMatch = (e: React.FormEvent) => {
    e.preventDefault();
    const newRecord: MatchRecord = {
      id: `match-${Date.now()}`,
      date: new Date().toISOString().replace('T', ' ').substring(0, 16),
      heroId: formHeroId,
      role: formRole,
      lane: formLane,
      result: formResult,
      durationMinutes: Number(formMinutes) || 12,
      durationSeconds: Number(formSeconds) || 0,
      kills: Number(formKills) || 0,
      deaths: Number(formDeaths) || 0,
      assists: Number(formAssists) || 0,
      medal: formMedal,
      battleSpell: formSpell,
      rankAtMatch: 'Mythical Honor',
      isVerifiedUserMatch: true,
      notes: formNotes
    };

    onAddMatch(newRecord);
    setIsModalOpen(false);
    setFormNotes('');
  };

  return (
    <div className="space-y-5">
      <DataDisclaimer text="Logged games represent personal statistics. Initial records are labeled baseline benchmark data." />

      {/* Action Header & Filters */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 pb-3 border-b border-zinc-800">
        <div className="flex flex-wrap items-center gap-2">
          {/* Result Filter */}
          <div className="flex rounded bg-zinc-900 p-0.5 border border-zinc-800 text-xs">
            {(['ALL', 'VICTORY', 'DEFEAT'] as const).map((res) => (
              <button
                key={res}
                onClick={() => setFilterResult(res)}
                className={`px-2.5 py-1 rounded transition-colors cursor-pointer ${
                  filterResult === res
                    ? 'bg-zinc-800 text-zinc-100 font-medium'
                    : 'text-zinc-400 hover:text-zinc-200'
                }`}
              >
                {res === 'ALL' ? 'All' : res === 'VICTORY' ? 'Victories' : 'Defeats'}
              </button>
            ))}
          </div>

          {/* Role Filter */}
          <select
            value={filterRole}
            onChange={(e) => setFilterRole(e.target.value as Role | 'ALL')}
            className="bg-zinc-900 border border-zinc-800 rounded px-2.5 py-1 text-xs text-zinc-300 focus:outline-none"
          >
            <option value="ALL">All Roles</option>
            <option value="Tank">Tank</option>
            <option value="Fighter">Fighter</option>
            <option value="Assassin">Assassin</option>
            <option value="Mage">Mage</option>
            <option value="Marksman">Marksman</option>
            <option value="Support">Support</option>
          </select>
        </div>

        <button
          onClick={() => setIsModalOpen(true)}
          className="inline-flex items-center justify-center gap-1.5 px-3 py-1.5 rounded text-xs font-medium bg-sky-600 hover:bg-sky-500 text-white transition-colors cursor-pointer"
        >
          <Plus className="w-3.5 h-3.5" />
          <span>Log Match</span>
        </button>
      </div>

      {/* Match Table */}
      <div className="rounded-lg border border-zinc-800 bg-zinc-900/40 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs text-zinc-300">
            <thead className="bg-zinc-950 text-[10px] uppercase font-semibold text-zinc-500 border-b border-zinc-800 tracking-wider">
              <tr>
                <th className="py-2.5 px-4">Result</th>
                <th className="py-2.5 px-4">Hero & Lane</th>
                <th className="py-2.5 px-4">Role</th>
                <th className="py-2.5 px-4">KDA</th>
                <th className="py-2.5 px-4">Duration</th>
                <th className="py-2.5 px-4">Medal</th>
                <th className="py-2.5 px-4">Date</th>
                <th className="py-2.5 px-4 text-right">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-800/60 font-sans">
              {filteredMatches.map((match) => {
                const hero = HERO_MAP.get(match.heroId);
                const isWin = match.result === 'VICTORY';
                const kdaRatio =
                  match.deaths === 0
                    ? (match.kills + match.assists).toFixed(1)
                    : ((match.kills + match.assists) / match.deaths).toFixed(1);

                return (
                  <tr
                    key={match.id}
                    className="hover:bg-zinc-850/40 transition-colors"
                  >
                    {/* Result */}
                    <td className="py-3 px-4 whitespace-nowrap">
                      <div className="flex items-center gap-2">
                        <span
                          className={`font-semibold text-xs font-mono ${
                            isWin ? 'text-emerald-400' : 'text-rose-400'
                          }`}
                        >
                          {match.result}
                        </span>
                        {!match.isVerifiedUserMatch && (
                          <span className="text-[10px] text-zinc-500 font-mono">
                            (baseline)
                          </span>
                        )}
                      </div>
                    </td>

                    {/* Hero & Lane */}
                    <td className="py-3 px-4 whitespace-nowrap">
                      <div className="flex items-center gap-2.5">
                        {hero && (
                          <HeroAvatar hero={hero} size="sm" className="rounded shrink-0" />
                        )}
                        <div>
                          <p className="font-medium text-zinc-200">{hero?.name || match.heroId}</p>
                          <p className="text-[10px] text-zinc-500">{match.lane}</p>
                        </div>
                      </div>
                    </td>

                    {/* Role */}
                    <td className="py-3 px-4 whitespace-nowrap">
                      <RoleBadge role={match.role} size="sm" />
                    </td>

                    {/* KDA */}
                    <td className="py-3 px-4 whitespace-nowrap font-mono text-xs">
                      <span className="text-zinc-200">{match.kills}</span> /{' '}
                      <span className="text-zinc-400">{match.deaths}</span> /{' '}
                      <span className="text-zinc-400">{match.assists}</span>
                      <span className="text-[11px] text-zinc-500 ml-1.5 font-sans">
                        ({kdaRatio})
                      </span>
                    </td>

                    {/* Duration */}
                    <td className="py-3 px-4 whitespace-nowrap font-mono text-xs text-zinc-400">
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3 text-zinc-600" />
                        {match.durationMinutes}:
                        {match.durationSeconds < 10
                          ? `0${match.durationSeconds}`
                          : match.durationSeconds}
                      </span>
                    </td>

                    {/* Medal & Spell */}
                    <td className="py-3 px-4 whitespace-nowrap">
                      <div className="flex items-center gap-1.5">
                        <span className="px-1.5 py-0.2 rounded text-[10px] font-medium bg-zinc-800 text-zinc-300 border border-zinc-700">
                          {match.medal}
                        </span>
                        <span className="text-[11px] text-zinc-500 font-mono">
                          {match.battleSpell}
                        </span>
                      </div>
                    </td>

                    {/* Date */}
                    <td className="py-3 px-4 whitespace-nowrap font-mono text-[11px] text-zinc-500">
                      {match.date}
                    </td>

                    {/* Action */}
                    <td className="py-3 px-4 text-right whitespace-nowrap">
                      <button
                        onClick={() => onDeleteMatch(match.id)}
                        className="p-1 rounded text-zinc-500 hover:text-zinc-300 hover:bg-zinc-800 transition-colors cursor-pointer"
                        title="Delete match"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

      {/* Log Match Modal Dialog */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-zinc-900 border border-zinc-800 rounded-lg max-w-md w-full p-5 space-y-4 shadow-xl relative">
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-3.5 right-3.5 p-1 rounded text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>

            <div>
              <h3 className="text-sm font-semibold text-zinc-100 flex items-center gap-1.5">
                <Swords className="w-4 h-4 text-zinc-400" />
                <span>Log Ranked Match</span>
              </h3>
              <p className="text-xs text-zinc-500 mt-0.5">
                Record your real Mobile Legends ranked match
              </p>
            </div>

            <form onSubmit={handleCreateMatch} className="space-y-3 text-xs">
              <div className="grid grid-cols-2 gap-2.5">
                <div>
                  <label className="text-[10px] text-zinc-500 uppercase block mb-1">
                    Hero
                  </label>
                  <select
                    value={formHeroId}
                    onChange={handleHeroSelectChange}
                    className="w-full bg-zinc-950 border border-zinc-800 rounded px-2.5 py-1.5 text-zinc-200 focus:outline-none"
                  >
                    {HEROES.map((h) => (
                      <option key={h.id} value={h.id}>
                        {h.name} ({h.primaryRole})
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="text-[10px] text-zinc-500 uppercase block mb-1">
                    Result
                  </label>
                  <select
                    value={formResult}
                    onChange={(e) => setFormResult(e.target.value as 'VICTORY' | 'DEFEAT')}
                    className="w-full bg-zinc-950 border border-zinc-800 rounded px-2.5 py-1.5 text-zinc-200 focus:outline-none"
                  >
                    <option value="VICTORY">VICTORY</option>
                    <option value="DEFEAT">DEFEAT</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-2.5">
                <div>
                  <label className="text-[10px] text-zinc-500 uppercase block mb-1">
                    Lane
                  </label>
                  <select
                    value={formLane}
                    onChange={(e) => setFormLane(e.target.value as Lane)}
                    className="w-full bg-zinc-950 border border-zinc-800 rounded px-2.5 py-1.5 text-zinc-200 focus:outline-none"
                  >
                    <option value="Gold Lane">Gold Lane</option>
                    <option value="EXP Lane">EXP Lane</option>
                    <option value="Mid Lane">Mid Lane</option>
                    <option value="Roam">Roam</option>
                    <option value="Jungle">Jungle</option>
                  </select>
                </div>

                <div>
                  <label className="text-[10px] text-zinc-500 uppercase block mb-1">
                    Medal
                  </label>
                  <select
                    value={formMedal}
                    onChange={(e) =>
                      setFormMedal(e.target.value as 'MVP' | 'Gold' | 'Silver' | 'Bronze')
                    }
                    className="w-full bg-zinc-950 border border-zinc-800 rounded px-2.5 py-1.5 text-zinc-200 focus:outline-none"
                  >
                    <option value="MVP">MVP</option>
                    <option value="Gold">Gold</option>
                    <option value="Silver">Silver</option>
                    <option value="Bronze">Bronze</option>
                  </select>
                </div>
              </div>

              {/* Kills, Deaths, Assists */}
              <div className="grid grid-cols-3 gap-2">
                <div>
                  <label className="text-[10px] text-zinc-500 uppercase block mb-1">
                    Kills
                  </label>
                  <input
                    type="number"
                    min="0"
                    value={formKills}
                    onChange={(e) => setFormKills(parseInt(e.target.value) || 0)}
                    className="w-full bg-zinc-950 border border-zinc-800 rounded px-2.5 py-1 text-zinc-200 font-mono focus:outline-none"
                  />
                </div>

                <div>
                  <label className="text-[10px] text-zinc-500 uppercase block mb-1">
                    Deaths
                  </label>
                  <input
                    type="number"
                    min="0"
                    value={formDeaths}
                    onChange={(e) => setFormDeaths(parseInt(e.target.value) || 0)}
                    className="w-full bg-zinc-950 border border-zinc-800 rounded px-2.5 py-1 text-zinc-200 font-mono focus:outline-none"
                  />
                </div>

                <div>
                  <label className="text-[10px] text-zinc-500 uppercase block mb-1">
                    Assists
                  </label>
                  <input
                    type="number"
                    min="0"
                    value={formAssists}
                    onChange={(e) => setFormAssists(parseInt(e.target.value) || 0)}
                    className="w-full bg-zinc-950 border border-zinc-800 rounded px-2.5 py-1 text-zinc-200 font-mono focus:outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-2.5">
                <div>
                  <label className="text-[10px] text-zinc-500 uppercase block mb-1">
                    Duration (Min : Sec)
                  </label>
                  <div className="flex items-center gap-1.5">
                    <input
                      type="number"
                      min="5"
                      max="60"
                      value={formMinutes}
                      onChange={(e) => setFormMinutes(parseInt(e.target.value) || 12)}
                      className="w-14 bg-zinc-950 border border-zinc-800 rounded px-2 py-1 text-zinc-200 font-mono text-center focus:outline-none"
                    />
                    <span className="text-zinc-600">:</span>
                    <input
                      type="number"
                      min="0"
                      max="59"
                      value={formSeconds}
                      onChange={(e) => setFormSeconds(parseInt(e.target.value) || 0)}
                      className="w-14 bg-zinc-950 border border-zinc-800 rounded px-2 py-1 text-zinc-200 font-mono text-center focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-[10px] text-zinc-500 uppercase block mb-1">
                    Battle Spell
                  </label>
                  <input
                    type="text"
                    value={formSpell}
                    onChange={(e) => setFormSpell(e.target.value)}
                    placeholder="e.g. Flicker"
                    className="w-full bg-zinc-950 border border-zinc-800 rounded px-2.5 py-1 text-zinc-200 focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="text-[10px] text-zinc-500 uppercase block mb-1">
                  Notes
                </label>
                <input
                  type="text"
                  value={formNotes}
                  onChange={(e) => setFormNotes(e.target.value)}
                  placeholder="Key match takeaway..."
                  className="w-full bg-zinc-950 border border-zinc-800 rounded px-2.5 py-1 text-zinc-200 focus:outline-none"
                />
              </div>

              <div className="flex justify-end gap-2 pt-2 border-t border-zinc-800">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="px-3 py-1 rounded text-xs text-zinc-400 hover:text-zinc-200 cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-3 py-1 rounded text-xs font-medium bg-sky-600 hover:bg-sky-500 text-white cursor-pointer"
                >
                  Save Record
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
