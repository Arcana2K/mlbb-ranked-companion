import React from 'react';
import {
  LayoutDashboard,
  Users,
  Crosshair,
  Shield,
  History,
  BarChart3,
  Settings,
  ChevronLeft,
  ChevronRight,
  Swords
} from 'lucide-react';

export type ActivePage =
  | 'dashboard'
  | 'matchmaking'
  | 'draft'
  | 'heroes'
  | 'history'
  | 'statistics'
  | 'settings';

interface SidebarProps {
  activePage: ActivePage;
  onNavigate: (page: ActivePage) => void;
  collapsed: boolean;
  onToggleCollapse: () => void;
  isMobileOpen: boolean;
  onCloseMobile: () => void;
  matchCount?: number;
}

interface NavItem {
  id: ActivePage;
  label: string;
  icon: React.ReactNode;
  badge?: string | number;
}

export const Sidebar: React.FC<SidebarProps> = ({
  activePage,
  onNavigate,
  collapsed,
  onToggleCollapse,
  isMobileOpen,
  onCloseMobile,
  matchCount
}) => {
  const navItems: NavItem[] = [
    {
      id: 'dashboard',
      label: 'Dashboard',
      icon: <LayoutDashboard className="w-4 h-4 shrink-0" />
    },
    {
      id: 'matchmaking',
      label: 'Matchmaking',
      icon: <Users className="w-4 h-4 shrink-0" />
    },
    {
      id: 'draft',
      label: 'Draft Assistant',
      icon: <Crosshair className="w-4 h-4 shrink-0" />
    },
    {
      id: 'heroes',
      label: 'Hero Database',
      icon: <Shield className="w-4 h-4 shrink-0" />
    },
    {
      id: 'history',
      label: 'Match History',
      icon: <History className="w-4 h-4 shrink-0" />,
      badge: matchCount
    },
    {
      id: 'statistics',
      label: 'Statistics',
      icon: <BarChart3 className="w-4 h-4 shrink-0" />
    },
    {
      id: 'settings',
      label: 'Settings',
      icon: <Settings className="w-4 h-4 shrink-0" />
    }
  ];

  const handleItemClick = (id: ActivePage) => {
    onNavigate(id);
    onCloseMobile();
  };

  return (
    <>
      {/* Mobile Backdrop */}
      {isMobileOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/60 lg:hidden"
          onClick={onCloseMobile}
        />
      )}

      {/* Sidebar Container */}
      <aside
        className={`fixed top-0 bottom-0 left-0 z-50 flex flex-col bg-zinc-950 border-r border-zinc-800 transition-all duration-200 ease-in-out lg:static ${
          collapsed ? 'w-16' : 'w-56'
        } ${isMobileOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}`}
      >
        {/* Brand Header */}
        <div className="flex h-14 items-center justify-between px-3.5 border-b border-zinc-800">
          <div className="flex items-center gap-2.5 overflow-hidden">
            <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded bg-zinc-850 border border-zinc-750 text-zinc-300">
              <Swords className="w-3.5 h-3.5" />
            </div>
            {!collapsed && (
              <span className="font-semibold text-xs tracking-wider text-zinc-200 uppercase font-sans">
                MLBB Companion
              </span>
            )}
          </div>

          <button
            onClick={onToggleCollapse}
            className="hidden lg:flex p-1 rounded text-zinc-500 hover:text-zinc-300 hover:bg-zinc-900 transition-colors"
            title={collapsed ? 'Expand sidebar' : 'Collapse sidebar'}
          >
            {collapsed ? <ChevronRight className="w-3.5 h-3.5" /> : <ChevronLeft className="w-3.5 h-3.5" />}
          </button>
        </div>

        {/* Navigation List */}
        <nav className="flex-1 overflow-y-auto px-2 py-3 space-y-0.5">
          {navItems.map((item) => {
            const isActive = activePage === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleItemClick(item.id)}
                title={collapsed ? item.label : undefined}
                className={`w-full flex items-center gap-2.5 px-2.5 py-2 rounded-md text-xs font-medium transition-colors ${
                  isActive
                    ? 'bg-zinc-800 text-zinc-100'
                    : 'text-zinc-400 hover:text-zinc-200 hover:bg-zinc-900'
                }`}
              >
                <div className={isActive ? 'text-zinc-100' : 'text-zinc-400'}>
                  {item.icon}
                </div>

                {!collapsed && (
                  <div className="flex flex-1 items-center justify-between text-left truncate">
                    <span className="truncate">{item.label}</span>
                    {item.badge !== undefined && (
                      <span className="text-[10px] px-1.5 py-0.2 rounded font-mono bg-zinc-850 text-zinc-400 border border-zinc-750">
                        {item.badge}
                      </span>
                    )}
                  </div>
                )}
              </button>
            );
          })}
        </nav>

        {/* Bottom Section */}
        <div className="px-3 py-3 border-t border-zinc-800 text-[11px] text-zinc-500">
          {!collapsed ? (
            <div className="flex items-center justify-between">
              <span>Patch 1.9.32</span>
              <span className="font-mono text-[10px]">Season 34</span>
            </div>
          ) : (
            <div className="text-center font-mono text-[10px]">S34</div>
          )}
        </div>
      </aside>
    </>
  );
};
