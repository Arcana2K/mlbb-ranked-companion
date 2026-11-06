import React from 'react';
import { PlayerProfile, MatchRecord } from '../types/mlbb';
import { HERO_MAP } from '../data/heroes';
import { RankBadge } from '../components/common/RankBadge';
import { HeroAvatar } from '../components/common/HeroAvatar';
import { DataDisclaimer } from '../components/common/DataDisclaimer';
import { Tooltip } from '../components/common/Tooltip';
import { ActivePage } from '../components/layout/Sidebar';
import {
  Trophy,
  Percent,
  Crosshair,
  Users,
  Swords,
  ChevronRight,
  Info
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

  // Calculate average duration
  const totalDurationSec = matches.reduce(
    (acc, m) => acc + (m.durationMinutes * 60 + m.durationSeconds),
    0
  );
  const avgSec = matches.length > 0 ? Math.round(totalDurationSec / matches.length) : 0;
  const avgDurationMinutes = Math.floor(avgSec / 60);
  const avgDurationSeconds = avgSec % 60;

  return (
    <div className="space-y-4">
      <DataDisclaimer />

      {/* Streamlined Header & Direct Quick Navigation */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-zinc-800">
        <div>
          <h2 className="text-base font-semibold text-zinc-100">Dashboard</h2>
          <p className="text-xs text-zinc-400">
            Ranked analytics and match performance for <span className="text-zinc-200 font-medium">{profile.ign}</span>
          </p>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => onNavigate('draft')}
            className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded text-xs font-medium bg-zinc-900 hover:bg-zinc-850 border border-zinc-800 hover:border-zinc-700 text-zinc-200 transition-colors cursor-pointer"
          >
            <Crosshair className="w-3.5 h-3.5 text-sky-400" />
            <span>Draft Assistant</span>
          </button>
          <button
            onClick={() => onNavigate('matchmaking')}
            className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded text-xs font-medium bg-zinc-900 hover:bg-zinc-850 border border-zinc-800 hover:border-zinc-700 text-zinc-300 transition-colors cursor-pointer"
          >
            <Users className="w-3.5 h-3.5 text-zinc-400" />
            <span>Matchmaking Roster</span>
          </button>
        </div>
      </div>

      {/* Core Key Metrics (3 Essential Cards with Interactive Tooltips for Secondary Data) */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        {/* 1. Current Rank Overview */}
        <Tooltip
          position="bottom"
          align="start"
          content={
            <div className="space-y-1.5 font-sans">
              <div className="text-[11px] font-semibold text-zinc-200 border-b border-zinc-800 pb-1 flex items-center justify-between">
                <span>Rank Progress</span>
                <span className="text-zinc-500 font-normal">Server {profile.server}</span>
              </div>
              <div className="flex justify-between gap-4 text-[11px]">
                <span className="text-zinc-500">Current Tier</span>
                <span className="text-zinc-200 font-medium">{profile.currentRank}</span>
              </div>
              <div className="flex justify-between gap-4 text-[11px]">
                <span className="text-zinc-500">Current Stars</span>
                <span className="text-zinc-200 font-mono">{profile.stars}★</span>
              </div>
              <div className="flex justify-between gap-4 text-[11px]">
                <span className="text-zinc-500">Peak Rank</span>
                <span className="text-zinc-200 font-mono">
                  {profile.highestRank} ({profile.highestStars}★)
                </span>
              </div>
            </div>
          }
        >
          <div className="rounded-lg border border-zinc-800 bg-zinc-900/40 p-3.5 transition-colors hover:border-zinc-700 cursor-pointer group">
            <div className="flex items-center justify-between">
              <span className="text-xs font-medium text-zinc-400">Current Rank</span>
              <div className="flex items-center gap-1 text-zinc-500 group-hover:text-zinc-400 transition-colors">
                <Trophy className="w-3.5 h-3.5" />
                <Info className="w-3 h-3 text-zinc-600" />
              </div>
            </div>
            <div className="mt-2 flex items-center justify-between">
              <RankBadge rank={profile.currentRank} stars={profile.stars} size="sm" />
              <span className="text-[10px] text-zinc-500 font-mono">
                {profile.stars}★ current
              </span>
            </div>
          </div>
        </Tooltip>

        {/* 2. Overall Win Rate */}
        <Tooltip
          position="bottom"
          align="center"
          content={
            <div className="space-y-1.5 font-sans">
              <div className="text-[11px] font-semibold text-zinc-200 border-b border-zinc-800 pb-1">
                Win Rate Breakdown
              </div>
              <div className="flex justify-between gap-4 text-[11px]">
                <span className="text-zinc-500">Victories</span>
                <span className="text-emerald-400 font-mono">{wins} wins</span>
              </div>
              <div className="flex justify-between gap-4 text-[11px]">
                <span className="text-zinc-500">Defeats</span>
                <span className="text-rose-400 font-mono">{losses} losses</span>
              </div>
              <div className="flex justify-between gap-4 text-[11px]">
                <span className="text-zinc-500">Net Differential</span>
                <span className="text-zinc-200 font-mono">
                  {wins >= losses ? '+' : ''}{wins - losses} games
                </span>
              </div>
              <div className="flex justify-between gap-4 text-[11px]">
                <span className="text-zinc-500">Win/Loss Ratio</span>
                <span className="text-zinc-200 font-mono">
                  {(wins / (losses || 1)).toFixed(2)}:1
                </span>
              </div>
            </div>
          }
        >
          <div className="rounded-lg border border-zinc-800 bg-zinc-900/40 p-3.5 transition-colors hover:border-zinc-700 cursor-pointer group">
            <div className="flex items-center justify-between">
              <span className="text-xs font-medium text-zinc-400">Overall Win Rate</span>
              <div className="flex items-center gap-1 text-zinc-500 group-hover:text-zinc-400 transition-colors">
                <Percent className="w-3.5 h-3.5" />
                <Info className="w-3 h-3 text-zinc-600" />
              </div>
            </div>
            <div className="mt-2 flex items-baseline justify-between">
              <span className="text-xl font-semibold tracking-tight text-zinc-100 font-sans">
                {calculatedWinRate}%
              </span>
              <span className="text-[10px] text-zinc-500 font-mono">
                {wins}W - {losses}L
              </span>
            </div>
          </div>
        </Tooltip>

        {/* 3. Total Matches */}
        <Tooltip
          position="bottom"
          align="end"
          content={
            <div className="space-y-1.5 font-sans">
              <div className="text-[11px] font-semibold text-zinc-200 border-b border-zinc-800 pb-1">
                Match Sample Volume
              </div>
              <div className="flex justify-between gap-4 text-[11px]">
                <span className="text-zinc-500">Ranked Games</span>
                <span className="text-zinc-200 font-mono">{matches.length} recorded</span>
              </div>
              <div className="flex justify-between gap-4 text-[11px]">
                <span className="text-zinc-500">Record</span>
                <span className="text-zinc-200 font-mono">{wins}W - {losses}L</span>
              </div>
              {matches.length > 0 && (
                <div className="flex justify-between gap-4 text-[11px]">
                  <span className="text-zinc-500">Average Duration</span>
                  <span className="text-zinc-200 font-mono">
                    {avgDurationMinutes}m {avgDurationSeconds < 10 ? `0${avgDurationSeconds}` : avgDurationSeconds}s
                  </span>
                </div>
              )}
            </div>
          }
        >
          <div className="rounded-lg border border-zinc-800 bg-zinc-900/40 p-3.5 transition-colors hover:border-zinc-700 cursor-pointer group">
            <div className="flex items-center justify-between">
              <span className="text-xs font-medium text-zinc-400">Total Matches</span>
              <div className="flex items-center gap-1 text-zinc-500 group-hover:text-zinc-400 transition-colors">
                <Swords className="w-3.5 h-3.5" />
                <Info className="w-3 h-3 text-zinc-600" />
              </div>
            </div>
            <div className="mt-2 flex items-baseline justify-between">
              <span className="text-xl font-semibold tracking-tight text-zinc-100 font-sans">
                {matches.length}
              </span>
              <span className="text-[10px] text-zinc-500 font-mono">
                Ranked logs
              </span>
            </div>
          </div>
        </Tooltip>
      </div>

      {/* Main Content: Recently Played Heroes (Left) + Recent Matches (Right) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
        {/* Recently Played Heroes (5 Cols) */}
        <div className="lg:col-span-5 rounded-lg border border-zinc-800 bg-zinc-900/40 p-3.5 space-y-2.5">
          <div className="flex items-center justify-between pb-2 border-b border-zinc-800">
            <Tooltip
              content={
                <div className="text-[11px] text-zinc-300 font-normal">
                  Ranks heroes by total game volume in your recorded match history. Hover or tap any hero for detailed stats.
                </div>
              }
              position="top"
              align="start"
            >
              <div className="flex items-center gap-1.5 cursor-pointer">
                <h3 className="text-xs font-semibold text-zinc-200 uppercase tracking-wider">
                  Recently Played Heroes
                </h3>
                <Info className="w-3 h-3 text-zinc-500" />
              </div>
            </Tooltip>
            <button
              onClick={() => onNavigate('heroes')}
              className="text-xs text-sky-400 hover:text-sky-300 transition-colors flex items-center gap-0.5 cursor-pointer"
            >
              <span>Catalog</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="space-y-1.5">
            {recentlyPlayedHeroIds.length === 0 ? (
              <div className="p-4 text-center text-xs text-zinc-500">
                No hero match logs recorded yet.
              </div>
            ) : (
              recentlyPlayedHeroIds.map(([heroId, stats]) => {
                const hero = HERO_MAP.get(heroId);
                if (!hero) return null;
                const heroWr = Number(((stats.wins / stats.count) * 100).toFixed(0));

                return (
                  <Tooltip
                    key={heroId}
                    position="top"
                    align="center"
                    content={
                      <div className="space-y-1 font-sans">
                        <div className="font-semibold text-zinc-200 text-[11px] border-b border-zinc-800 pb-0.5">
                          {hero.name}
                        </div>
                        <div className="flex justify-between gap-3 text-[11px]">
                          <span className="text-zinc-500">Record</span>
                          <span className="text-zinc-200 font-mono">
                            {stats.wins}W - {stats.count - stats.wins}L
                          </span>
                        </div>
                        <div className="flex justify-between gap-3 text-[11px]">
                          <span className="text-zinc-500">Win Rate</span>
                          <span className="text-emerald-400 font-mono">{heroWr}%</span>
                        </div>
                        <div className="flex justify-between gap-3 text-[11px]">
                          <span className="text-zinc-500">Role / Lane</span>
                          <span className="text-zinc-300">
                            {hero.primaryRole} · {hero.primaryLane}
                          </span>
                        </div>
                        <div className="flex justify-between gap-3 text-[11px]">
                          <span className="text-zinc-500">Damage</span>
                          <span className="text-zinc-300">{hero.damageType}</span>
                        </div>
                      </div>
                    }
                  >
                    <div className="flex items-center justify-between p-2 rounded bg-zinc-950/70 border border-zinc-800/80 hover:border-zinc-700 transition-colors cursor-pointer">
                      <div className="flex items-center gap-2.5">
                        <HeroAvatar hero={hero} size="sm" className="rounded" />
                        <div>
                          <p className="text-xs font-medium text-zinc-200">{hero.name}</p>
                          <p className="text-[10px] text-zinc-500">{hero.primaryLane}</p>
                        </div>
                      </div>

                      <div className="text-right font-mono">
                        <p className="text-xs font-semibold text-zinc-200">{heroWr}%</p>
                        <p className="text-[10px] text-zinc-500 font-sans">
                          {stats.count} {stats.count === 1 ? 'game' : 'games'}
                        </p>
                      </div>
                    </div>
                  </Tooltip>
                );
              })
            )}
          </div>
        </div>

        {/* Recent Matches (7 Cols) */}
        <div className="lg:col-span-7 rounded-lg border border-zinc-800 bg-zinc-900/40 p-3.5 space-y-2.5">
          <div className="flex items-center justify-between pb-2 border-b border-zinc-800">
            <Tooltip
              content={
                <div className="text-[11px] text-zinc-300 font-normal">
                  Displays your latest 5 logged ranked matches. Hover or tap any row to view complete KDA ratios, medal, and game duration.
                </div>
              }
              position="top"
              align="start"
            >
              <div className="flex items-center gap-1.5 cursor-pointer">
                <h3 className="text-xs font-semibold text-zinc-200 uppercase tracking-wider">
                  Recent Matches
                </h3>
                <Info className="w-3 h-3 text-zinc-500" />
              </div>
            </Tooltip>
            <button
              onClick={() => onNavigate('history')}
              className="text-xs text-sky-400 hover:text-sky-300 transition-colors flex items-center gap-0.5 cursor-pointer"
            >
              <span>Full history</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="space-y-1.5">
            {recentMatches.length === 0 ? (
              <div className="p-4 text-center text-xs text-zinc-500">
                No recent matches recorded. Add matches in Match History.
              </div>
            ) : (
              recentMatches.map((match) => {
                const hero = HERO_MAP.get(match.heroId);
                const isWin = match.result === 'VICTORY';
                const kdaRatio =
                  match.deaths === 0
                    ? (match.kills + match.assists).toFixed(1)
                    : ((match.kills + match.assists) / match.deaths).toFixed(1);

                return (
                  <Tooltip
                    key={match.id}
                    position="top"
                    align="center"
                    content={
                      <div className="space-y-1 font-sans">
                        <div className="flex justify-between items-center text-[11px] border-b border-zinc-800 pb-0.5">
                          <span className="font-semibold text-zinc-200">
                            {hero?.name || match.heroId}
                          </span>
                          <span className="font-mono text-zinc-400">{match.date}</span>
                        </div>
                        <div className="flex justify-between gap-3 text-[11px]">
                          <span className="text-zinc-500">Medal & Ratio</span>
                          <span className="text-zinc-200 font-mono">
                            {match.medal} ({kdaRatio} KDA)
                          </span>
                        </div>
                        <div className="flex justify-between gap-3 text-[11px]">
                          <span className="text-zinc-500">K / D / A</span>
                          <span className="text-zinc-200 font-mono">
                            {match.kills} / {match.deaths} / {match.assists}
                          </span>
                        </div>
                        <div className="flex justify-between gap-3 text-[11px]">
                          <span className="text-zinc-500">Duration</span>
                          <span className="text-zinc-200 font-mono">
                            {match.durationMinutes}m {match.durationSeconds < 10 ? `0${match.durationSeconds}` : match.durationSeconds}s
                          </span>
                        </div>
                        <div className="flex justify-between gap-3 text-[11px]">
                          <span className="text-zinc-500">Lane & Spell</span>
                          <span className="text-zinc-300">
                            {match.lane} · {match.battleSpell || 'Flicker'}
                          </span>
                        </div>
                        <div className="flex justify-between gap-3 text-[11px]">
                          <span className="text-zinc-500">Rank At Match</span>
                          <span className="text-zinc-300 font-mono">{match.rankAtMatch}</span>
                        </div>
                      </div>
                    }
                  >
                    <div className="flex items-center justify-between p-2 rounded bg-zinc-950/70 border border-zinc-800/80 hover:border-zinc-700 transition-colors cursor-pointer">
                      <div className="flex items-center gap-2.5">
                        <span
                          className={`text-xs font-semibold font-mono w-14 ${
                            isWin ? 'text-emerald-400' : 'text-rose-400'
                          }`}
                        >
                          {isWin ? 'VICTORY' : 'DEFEAT'}
                        </span>
                        {hero && <HeroAvatar hero={hero} size="sm" className="rounded" />}
                        <div>
                          <div className="flex items-center gap-1.5">
                            <span className="text-xs font-medium text-zinc-200">
                              {hero?.name || match.heroId}
                            </span>
                            <span className="text-[10px] text-zinc-400 font-mono">
                              {match.medal}
                            </span>
                          </div>
                          <span className="text-[10px] text-zinc-500">
                            {match.lane} · {match.durationMinutes}:{match.durationSeconds < 10 ? `0${match.durationSeconds}` : match.durationSeconds}
                          </span>
                        </div>
                      </div>

                      <div className="text-right">
                        <div className="font-mono text-xs text-zinc-300">
                          {match.kills} / {match.deaths} / {match.assists}
                        </div>
                        <p className="text-[10px] text-zinc-500 font-mono">{kdaRatio} KDA</p>
                      </div>
                    </div>
                  </Tooltip>
                );
              })
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
