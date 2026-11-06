import React from 'react';
import { PlayerProfile, MatchRecord } from '../types/mlbb';
import { HERO_MAP } from '../data/heroes';
import { StatCard } from '../components/common/StatCard';
import { RankBadge } from '../components/common/RankBadge';
import { RoleBadge } from '../components/common/RoleBadge';
import { HeroAvatar } from '../components/common/HeroAvatar';
import { DataDisclaimer } from '../components/common/DataDisclaimer';
import { ActivePage } from '../components/layout/Sidebar';
import {
  Trophy,
  Percent,
  Crosshair,
  Users,
  ArrowRight,
  TrendingUp,
  Clock,
  Swords,
  ChevronRight
} from 'lucide-react';

interface DashboardProps {
  profile: PlayerProfile;
  matches: MatchRecord[];
  onNavigate: (page: ActivePage) => void;
}

export const Dashboard: React.FC<DashboardProps> = ({ profile, matches, onNavigate }) => {
  const wins = matches.filter((m) => m.result === 'VICTORY').length;
  const losses = matches.length - wins;
  const calculatedWinRate =
    matches.length > 0 ? Number(((wins / matches.length) * 100).toFixed(1)) : 0;

  // Calculate most played heroes
  const heroUsageMap = new Map<string, { count: number; wins: number }>();
  matches.forEach((m) => {
    const cur = heroUsageMap.get(m.heroId) || { count: 0, wins: 0 };
    cur.count++;
    if (m.result === 'VICTORY') cur.wins++;
    heroUsageMap.set(m.heroId, cur);
  });

  const recentlyPlayedHeroIds = Array.from(heroUsageMap.entries())
    .sort((a, b) => b[1].count - a[1].count)
    .slice(0, 4);

  const recentMatches = matches.slice(0, 5);

  return (
    <div className="space-y-6">
      <DataDisclaimer />

      {/* Compact Page Header with Quick Actions */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-2 border-b border-zinc-800">
        <div>
          <h2 className="text-lg font-semibold text-zinc-100">
            Welcome back, {profile.ign}
          </h2>
          <p className="text-xs text-zinc-400 mt-0.5">
            Season 34 ranked analysis. Review team balance, draft counters, and recent performance.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => onNavigate('draft')}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-medium bg-sky-600 hover:bg-sky-500 text-white transition-colors cursor-pointer"
          >
            <Crosshair className="w-3.5 h-3.5" />
            <span>Draft Assistant</span>
          </button>
          <button
            onClick={() => onNavigate('matchmaking')}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-medium bg-zinc-850 hover:bg-zinc-800 border border-zinc-750 text-zinc-200 transition-colors cursor-pointer"
          >
            <Users className="w-3.5 h-3.5 text-zinc-400" />
            <span>Matchmaking Roster</span>
          </button>
        </div>
      </div>

      {/* Simple Key Metrics Row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5">
        <div className="rounded-lg border border-zinc-800 bg-zinc-900/70 p-4 transition-colors hover:border-zinc-700">
          <div className="flex items-center justify-between">
            <p className="text-xs font-medium text-zinc-400">Current Rank</p>
            <Trophy className="w-4 h-4 text-zinc-500" />
          </div>
          <div className="mt-2.5">
            <RankBadge rank={profile.currentRank} stars={profile.stars} size="md" />
            <p className="mt-2 text-[11px] text-zinc-500">
              Peak: {profile.highestRank} ({profile.highestStars}★)
            </p>
          </div>
        </div>

        <StatCard
          label="Overall Win Rate"
          value={`${calculatedWinRate}%`}
          subValue={`${wins}W - ${losses}L`}
          icon={<Percent className="w-4 h-4 text-zinc-500" />}
        />

        <StatCard
          label="Total Matches"
          value={matches.length}
          subValue="Ranked season logs"
          icon={<Swords className="w-4 h-4 text-zinc-500" />}
        />

        <StatCard
          label="Win / Loss Record"
          value={`${wins} / ${losses}`}
          subValue={`${wins >= losses ? '+' : ''}${wins - losses} Star Differential`}
          icon={<TrendingUp className="w-4 h-4 text-zinc-500" />}
        />
      </div>

      {/* Main Content Grid: Hero Proficiency + Recent Matches */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
        {/* Compact Hero Proficiency */}
        <div className="lg:col-span-1 rounded-lg border border-zinc-800 bg-zinc-900/40 p-4">
          <div className="flex items-center justify-between mb-3 pb-2 border-b border-zinc-800">
            <div>
              <h3 className="text-xs font-semibold text-zinc-200 uppercase tracking-wider">
                Hero Proficiency
              </h3>
              <p className="text-[11px] text-zinc-500">Most played in match history</p>
            </div>
            <button
              onClick={() => onNavigate('heroes')}
              className="text-xs text-sky-400 hover:text-sky-300 transition-colors flex items-center gap-0.5 cursor-pointer"
            >
              <span>View all</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="space-y-2">
            {recentlyPlayedHeroIds.map(([heroId, stats]) => {
              const hero = HERO_MAP.get(heroId);
              if (!hero) return null;
              const heroWr = Number(((stats.wins / stats.count) * 100).toFixed(0));

              return (
                <div
                  key={heroId}
                  className="flex items-center justify-between p-2.5 rounded-md bg-zinc-900/80 border border-zinc-800/80 hover:border-zinc-700 transition-colors"
                >
                  <div className="flex items-center gap-2.5">
                    <HeroAvatar hero={hero} size="md" className="rounded" />
                    <div>
                      <p className="text-xs font-medium text-zinc-200">{hero.name}</p>
                      <p className="text-[11px] text-zinc-500">{hero.primaryLane}</p>
                    </div>
                  </div>

                  <div className="text-right font-mono">
                    <p className="text-xs font-semibold text-zinc-200">
                      {heroWr}%
                    </p>
                    <p className="text-[10px] text-zinc-500 font-sans">
                      {stats.count} {stats.count === 1 ? 'game' : 'games'}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Compact Recent Match Performance */}
        <div className="lg:col-span-2 rounded-lg border border-zinc-800 bg-zinc-900/40 p-4">
          <div className="flex items-center justify-between mb-3 pb-2 border-b border-zinc-800">
            <div>
              <h3 className="text-xs font-semibold text-zinc-200 uppercase tracking-wider">
                Recent Matches
              </h3>
              <p className="text-[11px] text-zinc-500">Latest recorded ranked games</p>
            </div>
            <button
              onClick={() => onNavigate('history')}
              className="text-xs text-sky-400 hover:text-sky-300 transition-colors flex items-center gap-0.5 cursor-pointer"
            >
              <span>Full history</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="space-y-1.5">
            {recentMatches.map((match) => {
              const hero = HERO_MAP.get(match.heroId);
              const isWin = match.result === 'VICTORY';
              const kdaRatio =
                match.deaths === 0
                  ? (match.kills + match.assists).toFixed(1)
                  : ((match.kills + match.assists) / match.deaths).toFixed(1);

              return (
                <div
                  key={match.id}
                  className="flex items-center justify-between p-2.5 rounded-md bg-zinc-900/80 border border-zinc-800/80 hover:border-zinc-700 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <span
                      className={`text-xs font-semibold font-mono w-14 ${
                        isWin ? 'text-emerald-400' : 'text-rose-400'
                      }`}
                    >
                      {isWin ? 'VICTORY' : 'DEFEAT'}
                    </span>
                    {hero && (
                      <HeroAvatar hero={hero} size="sm" className="rounded" />
                    )}
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-medium text-zinc-200">
                          {hero?.name || match.heroId}
                        </span>
                        <span className="text-[10px] text-zinc-400 font-mono">
                          {match.medal}
                        </span>
                      </div>
                      <span className="text-[11px] text-zinc-500">
                        {match.lane} · {match.durationMinutes}:{match.durationSeconds < 10 ? `0${match.durationSeconds}` : match.durationSeconds}
                      </span>
                    </div>
                  </div>

                  <div className="text-right">
                    <div className="font-mono text-xs text-zinc-300">
                      {match.kills} / {match.deaths} / {match.assists}
                    </div>
                    <p className="text-[10px] text-zinc-500 font-mono">
                      {kdaRatio} KDA
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Compact Quick Access Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
        <div
          onClick={() => onNavigate('matchmaking')}
          className="p-4 rounded-lg border border-zinc-800 bg-zinc-900/40 hover:border-zinc-700 transition-colors cursor-pointer"
        >
          <div className="flex items-center justify-between mb-1">
            <span className="text-xs font-semibold text-zinc-200 flex items-center gap-1.5">
              <Users className="w-4 h-4 text-zinc-400" />
              Matchmaking Assistant
            </span>
            <ArrowRight className="w-3.5 h-3.5 text-zinc-500" />
          </div>
          <p className="text-xs text-zinc-400 leading-relaxed">
            Enter allied and enemy player ranks, preferred lanes, and signature heroes to audit comparative team strengths and role conflicts.
          </p>
        </div>

        <div
          onClick={() => onNavigate('draft')}
          className="p-4 rounded-lg border border-zinc-800 bg-zinc-900/40 hover:border-zinc-700 transition-colors cursor-pointer"
        >
          <div className="flex items-center justify-between mb-1">
            <span className="text-xs font-semibold text-zinc-200 flex items-center gap-1.5">
              <Crosshair className="w-4 h-4 text-zinc-400" />
              Draft Pick Assistant
            </span>
            <ArrowRight className="w-3.5 h-3.5 text-zinc-500" />
          </div>
          <p className="text-xs text-zinc-400 leading-relaxed">
            Simulate hero drafting in real-time. Lock in picks and bans to evaluate rule-based counter scores, lane fit, and team synergy.
          </p>
        </div>
      </div>
    </div>
  );
};
