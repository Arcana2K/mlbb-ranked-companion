import React, { useState, useEffect } from 'react';
import { Sidebar, ActivePage } from './components/layout/Sidebar';
import { Topbar } from './components/layout/Topbar';
import { Dashboard } from './pages/Dashboard';
import { Matchmaking } from './pages/Matchmaking';
import { DraftAssistant } from './pages/DraftAssistant';
import { HeroDatabase } from './pages/HeroDatabase';
import { MatchHistory } from './pages/MatchHistory';
import { Statistics } from './pages/Statistics';
import { Settings } from './pages/Settings';
import { StorageService } from './services/storageService';
import { PlayerProfile, MatchRecord, ScoringWeights } from './types/mlbb';

export default function App() {
  const [activePage, setActivePage] = useState<ActivePage>('dashboard');
  const [sidebarCollapsed, setSidebarCollapsed] = useState<boolean>(false);
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState<boolean>(false);

  // App persistent state
  const [profile, setProfile] = useState<PlayerProfile>(() => StorageService.getProfile());
  const [matches, setMatches] = useState<MatchRecord[]>(() => StorageService.getMatches());
  const [weights, setWeights] = useState<ScoringWeights>(() => StorageService.getWeights());

  const handleAddMatch = (newMatch: MatchRecord) => {
    const updated = StorageService.addMatch(newMatch);
    setMatches(updated);
    setProfile(StorageService.getProfile());
  };

  const handleDeleteMatch = (matchId: string) => {
    const updated = StorageService.deleteMatch(matchId);
    setMatches(updated);
    setProfile(StorageService.getProfile());
  };

  const handleUpdateProfile = (newProfile: PlayerProfile) => {
    StorageService.saveProfile(newProfile);
    setProfile(newProfile);
  };

  const handleUpdateWeights = (newWeights: ScoringWeights) => {
    StorageService.saveWeights(newWeights);
    setWeights(newWeights);
  };

  const handleResetData = () => {
    StorageService.resetToDefaults();
    setProfile(StorageService.getProfile());
    setMatches(StorageService.getMatches());
    setWeights(StorageService.getWeights());
  };

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 flex flex-col font-sans selection:bg-zinc-800 selection:text-zinc-100">
      <div className="flex-1 flex overflow-hidden">
        {/* Sidebar Navigation */}
        <Sidebar
          activePage={activePage}
          onNavigate={setActivePage}
          collapsed={sidebarCollapsed}
          onToggleCollapse={() => setSidebarCollapsed(!sidebarCollapsed)}
          isMobileOpen={mobileSidebarOpen}
          onCloseMobile={() => setMobileSidebarOpen(false)}
          matchCount={matches.length}
        />

        {/* Content Region */}
        <div className="flex-1 flex flex-col min-w-0 overflow-y-auto">
          {/* Header */}
          <Topbar
            onOpenMobileSidebar={() => setMobileSidebarOpen(true)}
            activePage={activePage}
            onNavigate={setActivePage}
            profile={profile}
          />

          {/* Page Body */}
          <main className="flex-1 p-4 sm:p-6 lg:p-7 max-w-6xl w-full mx-auto">
            {activePage === 'dashboard' && (
              <Dashboard
                profile={profile}
                matches={matches}
                onNavigate={setActivePage}
              />
            )}

            {activePage === 'matchmaking' && <Matchmaking />}

            {activePage === 'draft' && (
              <DraftAssistant weights={weights} profile={profile} />
            )}

            {activePage === 'heroes' && <HeroDatabase />}

            {activePage === 'history' && (
              <MatchHistory
                matches={matches}
                onAddMatch={handleAddMatch}
                onDeleteMatch={handleDeleteMatch}
              />
            )}

            {activePage === 'statistics' && (
              <Statistics matches={matches} profile={profile} />
            )}

            {activePage === 'settings' && (
              <Settings
                profile={profile}
                weights={weights}
                onUpdateProfile={handleUpdateProfile}
                onUpdateWeights={handleUpdateWeights}
                onResetData={handleResetData}
              />
            )}
          </main>

          {/* Minimalist Footer */}
          <footer className="border-t border-zinc-850 px-6 py-3.5 text-xs text-zinc-500 flex flex-col sm:flex-row items-center justify-between gap-2 max-w-6xl mx-auto w-full">
            <span>MLBB Ranked Companion</span>
            <span className="font-mono text-[11px] text-zinc-600">
              Rule-Based Analytics Engine
            </span>
          </footer>
        </div>
      </div>
    </div>
  );
}
