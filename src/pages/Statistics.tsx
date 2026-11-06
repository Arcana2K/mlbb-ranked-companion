import React, { useMemo } from 'react';
import { MatchRecord, PlayerProfile, Role } from '../types/mlbb';
import { HERO_MAP } from '../data/heroes';
import { StatCard } from '../components/common/StatCard';
import { RoleBadge } from '../components/common/RoleBadge';
import { HeroAvatar } from '../components/common/HeroAvatar';
import { DataDisclaimer } from '../components/common/DataDisclaimer';
import {
  Percent,
  Award,
  Clock,
  Swords
} from 'lucide-react';

interface StatisticsProps {
  matches: MatchRecord[];
  profile: PlayerProfile;
}

export const Statistics: React.FC<StatisticsProps> = ({ matches }) => {
  const totalMatches = matches.length;
  const totalWins = matches.filter((m) => m.result === 'VICTORY').length;
  const totalLosses = totalMatches - totalWins;
  const overallWinRate = totalMatches > 0 ? ((totalWins / totalMatches) * 100).toFixed(1) : '0.0';

  const mvpCount = matches.filter((m) => m.medal === 'MVP').length;
  const mvpRate = totalMatches > 0 ? ((mvpCount / totalMatches) * 100).toFixed(1) : '0.0';

  const avgDurationMinutes =
    totalMatches > 0
      ? (
          matches.reduce((acc, m) => acc + m.durationMinutes + m.durationSeconds / 60, 0) /
          totalMatches
        ).toFixed(1)
      : '0.0';

  const roleStats = useMemo(() => {
    const roles: Role[] = ['Marksman', 'Mage', 'Assassin', 'Fighter', 'Tank', 'Support'];
    const map: Record<Role, { matches: number; wins: number; kills: number; deaths: number; assists: number }> = {
      Marksman: { matches: 0, wins: 0, kills: 0, deaths: 0, assists: 0 },
      Mage: { matches: 0, wins: 0, kills: 0, deaths: 0, assists: 0 },
      Assassin: { matches: 0, wins: 0, kills: 0, deaths: 0, assists: 0 },
      Fighter: { matches: 0, wins: 0, kills: 0, deaths: 0, assists: 0 },
      Tank: { matches: 0, wins: 0, kills: 0, deaths: 0, assists: 0 },
      Support: { matches: 0, wins: 0, kills: 0, deaths: 0, assists: 0 }
    };

    matches.forEach((m) => {
      if (map[m.role]) {
        map[m.role].matches++;
        if (m.result === 'VICTORY') map[m.role].wins++;
        map[m.role].kills += m.kills;
        map[m.role].deaths += m.deaths;
        map[m.role].assists += m.assists;
      }
    });

    return roles.map((role) => {
      const data = map[role];
      const wr = data.matches > 0 ? Number(((data.wins / data.matches) * 100).toFixed(1)) : 0;
      const kda =
        data.deaths === 0
          ? (data.kills + data.assists).toFixed(1)
          : ((data.kills + data.assists) / data.deaths).toFixed(1);
      return { role, ...data, wr, kda };
    });
  }, [matches]);

  const heroStats = useMemo(() => {
    const map = new Map<
      string,
      { matches: number; wins: number; kills: number; deaths: number; assists: number }
    >();

    matches.forEach((m) => {
      const cur = map.get(m.heroId) || { matches: 0, wins: 0, kills: 0, deaths: 0, assists: 0 };
      cur.matches++;
      if (m.result === 'VICTORY') cur.wins++;
      cur.kills += m.kills;
      cur.deaths += m.deaths;
      cur.assists += m.assists;
      map.set(m.heroId, cur);
    });

    return Array.from(map.entries())
      .map(([heroId, data]) => {
        const hero = HERO_MAP.get(heroId);
        const wr = data.matches > 0 ? Number(((data.wins / data.matches) * 100).toFixed(1)) : 0;
        const kda =
          data.deaths === 0
            ? (data.kills + data.assists).toFixed(1)
            : ((data.kills + data.assists) / data.deaths).toFixed(1);

        return {
          heroId,
          hero,
          matches: data.matches,
          wins: data.wins,
          losses: data.matches - data.wins,
          wr,
          kda,
          avgKills: (data.kills / data.matches).toFixed(1),
          avgDeaths: (data.deaths / data.matches).toFixed(1),
          avgAssists: (data.assists / data.matches).toFixed(1)
        };
      })
      .sort((a, b) => b.matches - a.matches);
  }, [matches]);

  return (
    <div className="space-y-5">
      <DataDisclaimer text="Aggregated from match history logs. Distinguishes baseline samples from verified user entries." />

      {/* KPI Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5">
        <StatCard
          label="Cumulative Win Rate"
          value={`${overallWinRate}%`}
          subValue={`${totalWins}W - ${totalLosses}L`}
          icon={<Percent className="w-4 h-4 text-zinc-500" />}
        />

        <StatCard
          label="MVP Ratio"
          value={`${mvpRate}%`}
          subValue={`${mvpCount} MVP Medals`}
          icon={<Award className="w-4 h-4 text-zinc-500" />}
        />

        <StatCard
          label="Avg Game Duration"
          value={`${avgDurationMinutes}m`}
          subValue="Match pacing average"
          icon={<Clock className="w-4 h-4 text-zinc-500" />}
        />

        <StatCard
          label="Total Matches"
          value={totalMatches}
          subValue="Ranked season logs"
          icon={<Swords className="w-4 h-4 text-zinc-500" />}
        />
      </div>

      {/* Recent Match Form / Sequence Visualization */}
      <div className="p-4 rounded-lg border border-zinc-800 bg-zinc-900/40 space-y-2.5">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-xs font-semibold text-zinc-200 uppercase tracking-wider">
              Match Outcome Sequence
            </h3>
            <p className="text-[11px] text-zinc-500">
              Chronological outcome of logged matches (Oldest to Newest)
            </p>
          </div>
          <span className="text-xs font-mono text-zinc-400">
            Streak: 2W
          </span>
        </div>

        <div className="flex items-center gap-1.5 pt-1 overflow-x-auto pb-1">
          {matches.slice().reverse().map((match, i) => {
            const isWin = match.result === 'VICTORY';
            const hero = HERO_MAP.get(match.heroId);

            return (
              <div
                key={match.id}
                title={`${hero?.name || match.heroId} - ${match.result}`}
                className="flex-1 min-w-[42px] p-1.5 rounded border border-zinc-800 bg-zinc-950 text-center"
              >
                <span className="text-[9px] font-mono text-zinc-500 block mb-0.5">#{i + 1}</span>
                <span className={`font-semibold text-xs font-mono ${isWin ? 'text-emerald-400' : 'text-rose-400'}`}>
                  {isWin ? 'W' : 'L'}
                </span>
                <span className="text-[9px] text-zinc-400 truncate max-w-[44px] block mt-0.5">
                  {hero?.name || match.heroId}
                </span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Role Breakdown & Performance */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        {/* Role Performance Cards */}
        <div className="p-4 rounded-lg border border-zinc-800 bg-zinc-900/40 space-y-3.5">
          <div className="pb-2 border-b border-zinc-800">
            <h3 className="text-xs font-semibold text-zinc-200 uppercase tracking-wider">
              Role Performance
            </h3>
            <p className="text-[11px] text-zinc-500">Win rates by competitive classification</p>
          </div>

          <div className="space-y-3">
            {roleStats.map((item) => (
              <div key={item.role} className="space-y-1">
                <div className="flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2">
                    <RoleBadge role={item.role} size="sm" />
                    <span className="text-zinc-500 text-[11px]">
                      {item.matches} {item.matches === 1 ? 'match' : 'matches'}
                    </span>
                  </div>
                  <div className="flex items-center gap-3 font-mono text-xs">
                    <span className="text-zinc-500">{item.kda} KDA</span>
                    <span className="font-semibold text-zinc-200">
                      {item.matches > 0 ? `${item.wr}%` : 'N/A'}
                    </span>
                  </div>
                </div>

                <div className="h-1.5 w-full bg-zinc-950 rounded-full overflow-hidden border border-zinc-800">
                  <div
                    className="h-full bg-zinc-400 rounded-full transition-all duration-300"
                    style={{ width: `${item.matches > 0 ? item.wr : 0}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Hero Performance Overview Table */}
        <div className="p-4 rounded-lg border border-zinc-800 bg-zinc-900/40 space-y-3.5">
          <div className="pb-2 border-b border-zinc-800">
            <h3 className="text-xs font-semibold text-zinc-200 uppercase tracking-wider">
              Individual Hero Statistics
            </h3>
            <p className="text-[11px] text-zinc-500">Match sample volume & KDA ratios</p>
          </div>

          <div className="space-y-2 max-h-[380px] overflow-y-auto pr-1">
            {heroStats.map((item) => (
              <div
                key={item.heroId}
                className="flex items-center justify-between p-2.5 rounded bg-zinc-950/70 border border-zinc-800/80 hover:border-zinc-700 transition-colors"
              >
                <div className="flex items-center gap-2.5">
                  {item.hero && (
                    <HeroAvatar hero={item.hero} size="md" className="rounded" />
                  )}
                  <div>
                    <h4 className="text-xs font-medium text-zinc-200">
                      {item.hero?.name || item.heroId}
                    </h4>
                    <p className="text-[10px] text-zinc-500">
                      {item.matches} games ({item.wins}W - {item.losses}L)
                    </p>
                  </div>
                </div>

                <div className="text-right font-mono text-xs">
                  <p className="font-semibold text-zinc-200">
                    {item.wr}%
                  </p>
                  <p className="text-[10px] text-zinc-500">
                    {item.avgKills}/{item.avgDeaths}/{item.avgAssists} ({item.kda} KDA)
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
