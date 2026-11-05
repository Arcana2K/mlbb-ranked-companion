import React from 'react';
import { Menu, Zap } from 'lucide-react';
import { RankBadge } from '../common/RankBadge';
import { PlayerProfile } from '../../types/mlbb';
import { ActivePage } from './Sidebar';

interface TopbarProps {
  onOpenMobileSidebar: () => void;
  activePage: ActivePage;
  onNavigate: (page: ActivePage) => void;
  profile: PlayerProfile;
}

const pageTitles: Record<ActivePage, { title: string; subtitle: string }> = {
  dashboard: {
    title: 'Dashboard',
    subtitle: 'Ranked analytics overview'
  },
  matchmaking: {
    title: 'Matchmaking Assistant',
    subtitle: 'Roster and team balance assessment'
  },
  draft: {
    title: 'Draft Pick Assistant',
    subtitle: 'Rule-based hero counters and composition'
  },
  heroes: {
    title: 'Hero Database',
    subtitle: 'Mechanics, lanes, and matchup catalog'
  },
  history: {
    title: 'Match History',
    subtitle: 'Logged ranked engagements'
  },
  statistics: {
    title: 'Statistics',
    subtitle: 'Win rates and role performance metrics'
  },
  settings: {
    title: 'Settings',
    subtitle: 'Profile and scoring weight configuration'
  }
};

export const Topbar: React.FC<TopbarProps> = ({
  onOpenMobileSidebar,
  activePage,
  onNavigate,
  profile
}) => {
  const current = pageTitles[activePage];

  return (
    <header className="h-14 border-b border-zinc-800 bg-zinc-950 px-4 sm:px-6 flex items-center justify-between sticky top-0 z-30">
      <div className="flex items-center gap-3">
        <button
          onClick={onOpenMobileSidebar}
          className="lg:hidden p-1.5 rounded text-zinc-400 hover:text-zinc-200 hover:bg-zinc-900 transition-colors"
          aria-label="Open menu"
        >
          <Menu className="w-4 h-4" />
        </button>

        <div className="flex items-baseline gap-2">
          <h1 className="text-sm font-semibold text-zinc-100">
            {current.title}
          </h1>
          <span className="hidden sm:inline text-xs text-zinc-500">
            — {current.subtitle}
          </span>
        </div>
      </div>

      <div className="flex items-center gap-3">
        {activePage !== 'draft' && (
          <button
            onClick={() => onNavigate('draft')}
            className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-medium bg-sky-600 hover:bg-sky-500 text-white transition-colors cursor-pointer"
          >
            <Zap className="w-3.5 h-3.5" />
            <span>Draft Assistant</span>
          </button>
        )}

        <div
          onClick={() => onNavigate('settings')}
          className="flex items-center gap-2 px-2.5 py-1 rounded-md bg-zinc-900 border border-zinc-800 hover:border-zinc-700 cursor-pointer transition-colors"
          title="Manage profile & settings"
        >
          <div className="hidden sm:flex flex-col text-right">
            <span className="text-xs font-medium text-zinc-200 leading-none">
              {profile.ign}
            </span>
            <span className="text-[10px] text-zinc-500 font-mono mt-0.5">
              {profile.server}
            </span>
          </div>

          <RankBadge rank={profile.currentRank} stars={profile.stars} size="sm" />
        </div>
      </div>
    </header>
  );
};
