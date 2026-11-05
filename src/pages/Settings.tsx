import React, { useState } from 'react';
import { PlayerProfile, ScoringWeights, Role, Lane, RankTier } from '../types/mlbb';
import { ALL_RANKS } from '../data/ranks';
import { HEROES } from '../data/heroes';
import { StorageService, DEFAULT_WEIGHTS } from '../services/storageService';
import {
  User,
  Sliders,
  Download,
  Upload,
  RotateCcw,
  Check,
  Save
} from 'lucide-react';

interface SettingsProps {
  profile: PlayerProfile;
  weights: ScoringWeights;
  onUpdateProfile: (profile: PlayerProfile) => void;
  onUpdateWeights: (weights: ScoringWeights) => void;
  onResetData: () => void;
}

const ROLES: Role[] = ['Tank', 'Fighter', 'Assassin', 'Mage', 'Marksman', 'Support'];
const LANES: Lane[] = ['Gold Lane', 'EXP Lane', 'Mid Lane', 'Roam', 'Jungle'];

export const Settings: React.FC<SettingsProps> = ({
  profile,
  weights,
  onUpdateProfile,
  onUpdateWeights,
  onResetData
}) => {
  const [profileForm, setProfileForm] = useState<PlayerProfile>(profile);
  const [weightsForm, setWeightsForm] = useState<ScoringWeights>(weights);
  const [saveStatus, setSaveStatus] = useState<string | null>(null);
  const [importStatus, setImportStatus] = useState<string | null>(null);

  const handleProfileSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onUpdateProfile(profileForm);
    setSaveStatus('Player profile updated.');
    setTimeout(() => setSaveStatus(null), 3000);
  };

  const handleWeightsSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onUpdateWeights(weightsForm);
    setSaveStatus('Recommendation weights saved.');
    setTimeout(() => setSaveStatus(null), 3000);
  };

  const handleToggleRole = (role: Role) => {
    const exists = profileForm.preferredRoles.includes(role);
    const updated = exists
      ? profileForm.preferredRoles.filter((r) => r !== role)
      : [...profileForm.preferredRoles, role];
    setProfileForm({ ...profileForm, preferredRoles: updated });
  };

  const handleToggleLane = (lane: Lane) => {
    const exists = profileForm.preferredLanes.includes(lane);
    const updated = exists
      ? profileForm.preferredLanes.filter((l) => l !== lane)
      : [...profileForm.preferredLanes, lane];
    setProfileForm({ ...profileForm, preferredLanes: updated });
  };

  const handleToggleHero = (heroId: string) => {
    const exists = profileForm.favoriteHeroes.includes(heroId);
    const updated = exists
      ? profileForm.favoriteHeroes.filter((id) => id !== heroId)
      : [...profileForm.favoriteHeroes, heroId];
    setProfileForm({ ...profileForm, favoriteHeroes: updated });
  };

  const handleExportData = () => {
    const jsonStr = StorageService.exportAllData();
    const blob = new Blob([jsonStr], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `mlbb-ranked-companion-backup-${new Date().toISOString().slice(0, 10)}.json`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const handleImportFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      const content = event.target?.result as string;
      if (content) {
        const success = StorageService.importData(content);
        if (success) {
          setImportStatus('Backup loaded successfully! Refreshing...');
          setTimeout(() => window.location.reload(), 1000);
        } else {
          setImportStatus('Failed to parse backup file. Please check format.');
        }
      }
    };
    reader.readAsText(file);
  };

  return (
    <div className="space-y-6 max-w-4xl">
      {saveStatus && (
        <div className="p-2.5 rounded bg-zinc-900 border border-zinc-800 text-zinc-200 text-xs flex items-center gap-2">
          <Check className="w-3.5 h-3.5 text-zinc-400 shrink-0" />
          <span>{saveStatus}</span>
        </div>
      )}

      {/* 1. Player Profile Section */}
      <div className="p-4 rounded-lg border border-zinc-800 bg-zinc-900/40 space-y-4">
        <div className="pb-2 border-b border-zinc-800 flex items-center gap-2">
          <User className="w-4 h-4 text-zinc-400" />
          <div>
            <h3 className="text-xs font-semibold text-zinc-200 uppercase tracking-wider">
              Player Profile
            </h3>
            <p className="text-[11px] text-zinc-500">Configure your identity and current rank tier</p>
          </div>
        </div>

        <form onSubmit={handleProfileSubmit} className="space-y-3.5 text-xs">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="text-[10px] uppercase text-zinc-500 block mb-1">
                In-Game Name (IGN)
              </label>
              <input
                type="text"
                value={profileForm.ign}
                onChange={(e) => setProfileForm({ ...profileForm, ign: e.target.value })}
                className="w-full bg-zinc-950 border border-zinc-800 rounded px-2.5 py-1.5 text-zinc-200 focus:border-zinc-600 focus:outline-none"
              />
            </div>

            <div>
              <label className="text-[10px] uppercase text-zinc-500 block mb-1">
                Server / Zone ID
              </label>
              <input
                type="text"
                value={profileForm.server}
                onChange={(e) => setProfileForm({ ...profileForm, server: e.target.value })}
                className="w-full bg-zinc-950 border border-zinc-800 rounded px-2.5 py-1.5 text-zinc-200 focus:border-zinc-600 focus:outline-none"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
            <div>
              <label className="text-[10px] uppercase text-zinc-500 block mb-1">
                Current Rank
              </label>
              <select
                value={profileForm.currentRank}
                onChange={(e) =>
                  setProfileForm({ ...profileForm, currentRank: e.target.value as RankTier })
                }
                className="w-full bg-zinc-950 border border-zinc-800 rounded px-2 py-1.5 text-zinc-300 focus:outline-none"
              >
                {ALL_RANKS.map((r) => (
                  <option key={r} value={r}>
                    {r}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="text-[10px] uppercase text-zinc-500 block mb-1">
                Current Stars
              </label>
              <input
                type="number"
                min="0"
                max="500"
                value={profileForm.stars}
                onChange={(e) =>
                  setProfileForm({ ...profileForm, stars: parseInt(e.target.value) || 0 })
                }
                className="w-full bg-zinc-950 border border-zinc-800 rounded px-2.5 py-1.5 text-zinc-200 font-mono focus:outline-none"
              />
            </div>

            <div>
              <label className="text-[10px] uppercase text-zinc-500 block mb-1">
                Peak Rank
              </label>
              <select
                value={profileForm.highestRank}
                onChange={(e) =>
                  setProfileForm({ ...profileForm, highestRank: e.target.value as RankTier })
                }
                className="w-full bg-zinc-950 border border-zinc-800 rounded px-2 py-1.5 text-zinc-300 focus:outline-none"
              >
                {ALL_RANKS.map((r) => (
                  <option key={r} value={r}>
                    {r}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="text-[10px] uppercase text-zinc-500 block mb-1">
                Peak Stars
              </label>
              <input
                type="number"
                min="0"
                max="500"
                value={profileForm.highestStars}
                onChange={(e) =>
                  setProfileForm({ ...profileForm, highestStars: parseInt(e.target.value) || 0 })
                }
                className="w-full bg-zinc-950 border border-zinc-800 rounded px-2.5 py-1.5 text-zinc-200 font-mono focus:outline-none"
              />
            </div>
          </div>

          {/* Preferred Roles Checkboxes */}
          <div>
            <label className="text-[10px] uppercase text-zinc-500 block mb-1.5">
              Preferred Roles (Prioritized in recommendations)
            </label>
            <div className="flex flex-wrap gap-1.5">
              {ROLES.map((role) => {
                const isSelected = profileForm.preferredRoles.includes(role);
                return (
                  <button
                    key={role}
                    type="button"
                    onClick={() => handleToggleRole(role)}
                    className={`px-2.5 py-1 rounded text-xs transition-colors cursor-pointer border ${
                      isSelected
                        ? 'bg-zinc-800 text-zinc-100 border-zinc-650'
                        : 'bg-zinc-950 text-zinc-500 border-zinc-800 hover:text-zinc-300'
                    }`}
                  >
                    {isSelected ? '✓ ' : '+ '} {role}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Preferred Lanes */}
          <div>
            <label className="text-[10px] uppercase text-zinc-500 block mb-1.5">
              Preferred Lanes
            </label>
            <div className="flex flex-wrap gap-1.5">
              {LANES.map((lane) => {
                const isSelected = profileForm.preferredLanes.includes(lane);
                return (
                  <button
                    key={lane}
                    type="button"
                    onClick={() => handleToggleLane(lane)}
                    className={`px-2.5 py-1 rounded text-xs transition-colors cursor-pointer border ${
                      isSelected
                        ? 'bg-zinc-800 text-zinc-100 border-zinc-650'
                        : 'bg-zinc-950 text-zinc-500 border-zinc-800 hover:text-zinc-300'
                    }`}
                  >
                    {isSelected ? '✓ ' : '+ '} {lane}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Favorite Signature Heroes Pool */}
          <div>
            <label className="text-[10px] uppercase text-zinc-500 block mb-1.5">
              Signature Hero Pool ({profileForm.favoriteHeroes.length} selected)
            </label>
            <div className="flex flex-wrap gap-1 max-h-32 overflow-y-auto p-2 bg-zinc-950 rounded border border-zinc-800">
              {HEROES.map((hero) => {
                const isSelected = profileForm.favoriteHeroes.includes(hero.id);
                return (
                  <button
                    key={hero.id}
                    type="button"
                    onClick={() => handleToggleHero(hero.id)}
                    className={`px-2 py-0.5 rounded text-[11px] transition-colors cursor-pointer border ${
                      isSelected
                        ? 'bg-zinc-800 text-zinc-200 border-zinc-700'
                        : 'bg-zinc-900/60 text-zinc-500 border-transparent hover:text-zinc-300'
                    }`}
                  >
                    {hero.name}
                  </button>
                );
              })}
            </div>
          </div>

          <div className="flex justify-end pt-1">
            <button
              type="submit"
              className="px-3 py-1.5 rounded text-xs font-medium bg-sky-600 hover:bg-sky-500 text-white cursor-pointer flex items-center gap-1.5"
            >
              <Save className="w-3.5 h-3.5" />
              <span>Save Profile</span>
            </button>
          </div>
        </form>
      </div>

      {/* 2. Scoring Weights Calibration */}
      <div className="p-4 rounded-lg border border-zinc-800 bg-zinc-900/40 space-y-4">
        <div className="pb-2 border-b border-zinc-800 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Sliders className="w-4 h-4 text-zinc-400" />
            <div>
              <h3 className="text-xs font-semibold text-zinc-200 uppercase tracking-wider">
                Recommendation Weight Calibration
              </h3>
              <p className="text-[11px] text-zinc-500">
                Adjust how mathematical factors are weighted in the draft engine
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={() => setWeightsForm(DEFAULT_WEIGHTS)}
            className="text-xs text-zinc-500 hover:text-zinc-300 cursor-pointer"
          >
            Reset Defaults
          </button>
        </div>

        <form onSubmit={handleWeightsSubmit} className="space-y-3 text-xs">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="p-3 rounded bg-zinc-950 border border-zinc-800 space-y-1.5">
              <div className="flex justify-between">
                <span className="text-zinc-300 font-medium">Role & Lane Fit</span>
                <span className="text-zinc-400 font-mono">{weightsForm.roleFit}%</span>
              </div>
              <input
                type="range"
                min="0"
                max="60"
                value={weightsForm.roleFit}
                onChange={(e) =>
                  setWeightsForm({ ...weightsForm, roleFit: parseInt(e.target.value) || 0 })
                }
                className="w-full accent-zinc-400"
              />
              <p className="text-[10px] text-zinc-500">
                Prioritizes filling unfilled roles and balancing team damage.
              </p>
            </div>

            <div className="p-3 rounded bg-zinc-950 border border-zinc-800 space-y-1.5">
              <div className="flex justify-between">
                <span className="text-zinc-300 font-medium">Counter Advantage</span>
                <span className="text-zinc-400 font-mono">{weightsForm.counterAdvantage}%</span>
              </div>
              <input
                type="range"
                min="0"
                max="60"
                value={weightsForm.counterAdvantage}
                onChange={(e) =>
                  setWeightsForm({
                    ...weightsForm,
                    counterAdvantage: parseInt(e.target.value) || 0
                  })
                }
                className="w-full accent-zinc-400"
              />
              <p className="text-[10px] text-zinc-500">
                Favors heroes with mechanical counter superiority over enemy locks.
              </p>
            </div>

            <div className="p-3 rounded bg-zinc-950 border border-zinc-800 space-y-1.5">
              <div className="flex justify-between">
                <span className="text-zinc-300 font-medium">Team Synergy</span>
                <span className="text-zinc-400 font-mono">{weightsForm.teamSynergy}%</span>
              </div>
              <input
                type="range"
                min="0"
                max="60"
                value={weightsForm.teamSynergy}
                onChange={(e) =>
                  setWeightsForm({ ...weightsForm, teamSynergy: parseInt(e.target.value) || 0 })
                }
                className="w-full accent-zinc-400"
              />
              <p className="text-[10px] text-zinc-500">
                Boosts hero combinations with proven teamfight synergy with allies.
              </p>
            </div>

            <div className="p-3 rounded bg-zinc-950 border border-zinc-800 space-y-1.5">
              <div className="flex justify-between">
                <span className="text-zinc-300 font-medium">Player Mastery</span>
                <span className="text-zinc-400 font-mono">{weightsForm.playerProficiency}%</span>
              </div>
              <input
                type="range"
                min="0"
                max="60"
                value={weightsForm.playerProficiency}
                onChange={(e) =>
                  setWeightsForm({
                    ...weightsForm,
                    playerProficiency: parseInt(e.target.value) || 0
                  })
                }
                className="w-full accent-zinc-400"
              />
              <p className="text-[10px] text-zinc-500">
                Rewards heroes in your signature pool and preferred roles.
              </p>
            </div>
          </div>

          <div className="flex justify-end pt-1">
            <button
              type="submit"
              className="px-3 py-1.5 rounded text-xs font-medium bg-zinc-800 hover:bg-zinc-700 text-zinc-200 cursor-pointer flex items-center gap-1.5"
            >
              <Save className="w-3.5 h-3.5" />
              <span>Apply Weights</span>
            </button>
          </div>
        </form>
      </div>

      {/* 3. Data Backup, Export & Reset */}
      <div className="p-4 rounded-lg border border-zinc-800 bg-zinc-900/40 space-y-3">
        <div className="pb-2 border-b border-zinc-800">
          <h3 className="text-xs font-semibold text-zinc-200 uppercase tracking-wider">
            Data Management
          </h3>
          <p className="text-[11px] text-zinc-500">
            Export JSON backups or restore defaults
          </p>
        </div>

        {importStatus && (
          <p className="text-xs text-zinc-400 font-mono">{importStatus}</p>
        )}

        <div className="flex flex-wrap items-center gap-2 pt-1">
          <button
            onClick={handleExportData}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded bg-zinc-850 hover:bg-zinc-800 border border-zinc-750 text-zinc-200 text-xs font-medium transition-colors cursor-pointer"
          >
            <Download className="w-3.5 h-3.5 text-zinc-400" />
            <span>Export Backup (.json)</span>
          </button>

          <label className="flex items-center gap-1.5 px-3 py-1.5 rounded bg-zinc-850 hover:bg-zinc-800 border border-zinc-750 text-zinc-200 text-xs font-medium transition-colors cursor-pointer">
            <Upload className="w-3.5 h-3.5 text-zinc-400" />
            <span>Import Backup</span>
            <input
              type="file"
              accept=".json"
              onChange={handleImportFile}
              className="hidden"
            />
          </label>

          <button
            onClick={() => {
              if (window.confirm('Reset all profile settings and match history to initial baseline?')) {
                onResetData();
              }
            }}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded border border-zinc-800 hover:bg-zinc-800 text-zinc-400 hover:text-zinc-200 text-xs font-medium transition-colors cursor-pointer ml-auto"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Reset to Baseline</span>
          </button>
        </div>
      </div>
    </div>
  );
};
