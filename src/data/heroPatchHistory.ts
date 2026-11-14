import { HeroPatchChange } from '../types/mlbb';
import { CURRENT_PATCH_CONFIG } from './patchConfig';

export const CURRENT_ORIGINAL_SERVER_PATCH = CURRENT_PATCH_CONFIG.latestOriginalServerPatch;
export const CURRENT_PATCH_DATE = CURRENT_PATCH_CONFIG.patchReleaseDate;
export const OFFICIAL_PATCH_SOURCE = 'Moonton MLBB Official Patch Notes (Original Server)';
export const OFFICIAL_PATCH_ARCHIVE_URL = CURRENT_PATCH_CONFIG.archiveSourceUrl;

/**
 * Verified Historical Patch Database.
 * Every record represents an authentic Mobile Legends: Bang Bang Original Server balance update
 * with verified patch versions, release dates, affected skills or attributes, previous and new values,
 * detailed explanations, and specific source attribution.
 */
export const HERO_PATCH_HISTORY: Record<string, HeroPatchChange[]> = {
  // ==========================================
  // PATCH 2.2.23 (November 11, 2026) - Hero Revamp & Meta Realignment
  // ==========================================
  'popol-and-kupa': [
    {
      id: 'popol-and-kupa-2.2.23',
      heroId: 'popol-and-kupa',
      heroName: 'Popol and Kupa',
      patchVersion: 'Patch 2.2.23',
      date: '2026-11-11',
      type: 'rework',
      title: 'Icefield Companions Hero Rework',
      affectedSkillOrAttribute: 'Complete Hero Kit (Passive, Skill 1, Skill 2, Skill 3, Ultimate)',
      previousValue: 'Pre-revamp kit with limited mobility, limited skill combo potential, and long Kupa downtime after defeat',
      newValue: 'Level-scaling Kupa with out-of-combat regen & prayer revival, Skill 2 riding mechanic, and 9s Alpha Wolf Ultimate',
      summary: 'Comprehensive hero rework improving mobility, coordinated combos, and Kupa uptime. Kupa now scales with Popol’s level and recovers HP out of combat, Popol can ride Kupa via Skill 2, and Ultimate enters Enraged Alpha Wolf Form for 9s.',
      details: [
        "Passive (We Are Friends): Kupa's HP scales with Popol's level, and it inherits Popol's other attributes and equipment effects. Kupa continuously recovers HP while out of combat. If Kupa falls, Popol can pray to bring Kupa back to the battlefield. Kupa deals extra True Damage to creeps.",
        "Skill 1 (Bite 'em, Kupa!): Popol throws a spear at the target enemy, dealing damage, and commands Kupa to lunge at the target and bite them, greatly slowing them. In Alpha Wolf Form, Kupa strikes the target area, knocking nearby enemies airborne and dealing increased damage.",
        'Skill 2 (Kupa, Help!): Popol calls Kupa back to his side, gaining a shield. He can then ride Kupa to move rapidly, during which Kupa continuously recovers HP. In Alpha Wolf Form, Popol gains a stronger shield, and Kupa recovers to full HP while mounted.',
        "Skill 3 (Popol's Surprise): Popol sets a trap at the target location that briefly immobilizes the enemy who steps on it. It then explodes and creates a frost zone that slows enemies within.",
        'Ultimate (We Are Angry!): Popol and Kupa enter the Enraged state for 9s. Kupa immediately recovers to full HP and transforms into Alpha Wolf Form, gaining extra Max HP and enhancing his other skills.'
      ],
      sourceName: 'MLBBHub Patch Archive (Secondary Source)',
      sourceUrl: 'https://mlbbhub.com/patch-notes/original/2.2.23',
      sourceType: 'secondary',
      verificationStatus: 'verified',
      serverType: 'original'
    }
  ],
  xavier: [
    {
      id: 'xavier-2.2.23',
      heroId: 'xavier',
      heroName: 'Xavier',
      patchVersion: 'Patch 2.2.23',
      date: '2026-11-11',
      type: 'buff',
      title: 'Mystic Field AoE Shift & Skill Feel Optimization',
      affectedSkillOrAttribute: 'Passive, Skill 1, Skill 2 (Mystic Field)',
      previousValue: 'Passive MS Bonus: 50%; Mystic Field Damage: 220–345 (+65% Total Magic Power); Mystic Barrier dealt direct damage',
      newValue: 'Passive MS Bonus: 60% (slower decay); Mystic Field Damage: 440–690 (+130% Total Magic Power); Skill 1 & 2 backswing -50%',
      summary: 'Shifted Skill 2 (Mystic Barrier) damage into the activation of Mystic Field to increase AOE teamfight damage, reduced Skill 1 and Skill 2 backswing times by 50%, and boosted Passive movement speed.',
      details: [
        'Passive (Movement Speed Bonus): Increased from 50% to 60%, and the bonus now decays more slowly.',
        'Skill 1: Reduced backswing time by 50%.',
        "Skill 2: Reduced backswing time by 50%. Removed Mystic Barrier's direct damage.",
        'Skill 2 (Mystic Field Damage): Increased from 220–345 (+65% Total Magic Power) to 440–690 (+130% Total Magic Power).',
        "Skill 2 Bug Fix: Fixed an issue where Mystic Field Damage could not trigger the passive's Movement Speed bonus."
      ],
      sourceName: 'MLBBHub Patch Archive (Secondary Source)',
      sourceUrl: 'https://mlbbhub.com/patch-notes/original/2.2.23',
      sourceType: 'secondary',
      verificationStatus: 'verified',
      serverType: 'original'
    }
  ],
  aldous: [
    {
      id: 'aldous-2.2.23',
      heroId: 'aldous',
      heroName: 'Aldous',
      patchVersion: 'Patch 2.2.23',
      date: '2026-11-11',
      type: 'buff',
      title: 'Contract: Explosion Cooldown & Late-Game Damage Reduction Buff',
      affectedSkillOrAttribute: 'Skill 2 (Contract: Explosion)',
      previousValue: 'Cooldown: 12–9.5s; Damage Reduction: 30% at all levels',
      newValue: 'Cooldown: 8s at all levels; Damage Reduction: 30%–55%',
      summary: "Reduced Aldous's downtime between trades during the laning phase and increased his late-game Damage Reduction.",
      details: [
        'Skill 2 (Contract: Explosion) Cooldown: Reduced from 12–9.5s to 8s at all levels.',
        'Skill 2 Damage Reduction: Increased from 30% at all levels to 30%–55%.'
      ],
      sourceName: 'MLBBHub Patch Archive (Secondary Source)',
      sourceUrl: 'https://mlbbhub.com/patch-notes/original/2.2.23',
      sourceType: 'secondary',
      verificationStatus: 'verified',
      serverType: 'original'
    }
  ],
  atlas: [
    {
      id: 'atlas-2.2.23',
      heroId: 'atlas',
      heroName: 'Atlas',
      patchVersion: 'Patch 2.2.23',
      date: '2026-11-11',
      type: 'nerf',
      title: 'Frigid Breath Freeze Frequency Nerf & Defense Compensation',
      affectedSkillOrAttribute: 'Passive (Frigid Breath)',
      previousValue: 'Frigid Breath Duration: 5s; Freeze Cooldown: 2.5s; Defense gained: 20 (+0.5% Extra HP)',
      newValue: 'Frigid Breath Duration: 4s; Freeze Cooldown: 4s; Defense gained: 20 (+0.7% Extra HP)',
      summary: "Shortened Frigid Breath's duration and increased the freeze cooldown because Atlas's Passive was freezing enemies too often, while increasing Physical and Magic Defense bonuses to help him withstand damage after engaging.",
      details: [
        'Passive (Frigid Breath Duration): Reduced from 5s to 4s.',
        'Passive (Freeze Cooldown): Increased from 2.5s to 4s.',
        'Passive (Physical & Magic Defense gained during Frigid Breath): Increased from 20 (+0.5% Extra HP) to 20 (+0.7% Extra HP).'
      ],
      sourceName: 'MLBBHub Patch Archive (Secondary Source)',
      sourceUrl: 'https://mlbbhub.com/patch-notes/original/2.2.23',
      sourceType: 'secondary',
      verificationStatus: 'verified',
      serverType: 'original'
    }
  ],
  melissa: [
    {
      id: 'melissa-2.2.23',
      heroId: 'melissa',
      heroName: 'Melissa',
      patchVersion: 'Patch 2.2.23',
      date: '2026-11-11',
      type: 'buff',
      title: 'Muddles Damage Transfer Ratio Scaling Buff',
      affectedSkillOrAttribute: 'Skill 2 (Eyes on You!)',
      previousValue: 'Damage Transfer & Attack Effect Inheritance: flat 52%',
      newValue: 'Damage Transfer & Attack Effect Inheritance: 50%–60%',
      summary: 'Partially rolled back previous damage nerfs to restore late-game teamfight damage transfer on Muddles.',
      details: [
        "Skill 2 (Eyes on You!) Muddles damage transfer and attack effect inheritance ratio adjusted from flat 52% to 50%–60% scaling with level."
      ],
      sourceName: 'MLBBHub Patch Archive (Secondary Source)',
      sourceUrl: 'https://mlbbhub.com/patch-notes/original/2.2.23',
      sourceType: 'secondary',
      verificationStatus: 'verified',
      serverType: 'original'
    }
  ],
  uranus: [
    {
      id: 'uranus-2.2.23',
      heroId: 'uranus',
      heroName: 'Uranus',
      patchVersion: 'Patch 2.2.23',
      date: '2026-11-11',
      type: 'adjustment',
      title: 'Basic Attack Splash Damage Type Conversion',
      affectedSkillOrAttribute: 'Basic Attack',
      previousValue: 'Splash damage dealt as Physical Damage',
      newValue: 'Splash damage converted to Magic Damage',
      summary: 'Changed Uranus Basic Attack splash damage type to Magic Damage to align with his magic damage profile.',
      details: [
        'Basic Attack splash damage converted from physical to Magic Damage.'
      ],
      sourceName: 'MLBBHub Patch Archive (Secondary Source)',
      sourceUrl: 'https://mlbbhub.com/patch-notes/original/2.2.23',
      sourceType: 'secondary',
      verificationStatus: 'verified',
      serverType: 'original'
    }
  ],
  kagura: [
    {
      id: 'kagura-2.2.23',
      heroId: 'kagura',
      heroName: 'Kagura',
      patchVersion: 'Patch 2.2.23',
      date: '2026-11-11',
      type: 'adjustment',
      title: 'Seimei Umbrella Range Indicator Optimization',
      affectedSkillOrAttribute: 'Passive / Seimei Umbrella Tether',
      previousValue: 'Standard range tether visual feedback',
      newValue: 'Enhanced visual indicator for maximum umbrella separation distance',
      summary: 'Optimized the visual range indicator indicating maximum tether separation distance between Kagura and her Seimei Umbrella.',
      details: [
        'Optimized visual indicator for maximum separation distance between Seimei Umbrella and Kagura before automatic recall.'
      ],
      sourceName: 'MLBBHub Patch Archive (Secondary Source)',
      sourceUrl: 'https://mlbbhub.com/patch-notes/original/2.2.23',
      sourceType: 'secondary',
      verificationStatus: 'verified',
      serverType: 'original'
    }
  ],

  // ==========================================
  // PATCH 2.2.16a (October 14, 2026) - Balance Hotfix
  // ==========================================
  aulus: [
    {
      id: 'aulus-2.2.16a',
      heroId: 'aulus',
      heroName: 'Aulus',
      patchVersion: 'Patch 2.2.16a',
      date: '2026-10-14',
      type: 'nerf',
      title: 'Passive Fighting Spirit Late-Game Sustain & Attack Speed Nerf',
      affectedSkillOrAttribute: 'Passive (Fighting Spirit)',
      previousValue: 'Enhanced attack sustain: 15% physical lifesteal & 45% attack speed at max stacks',
      newValue: 'Enhanced attack sustain: 10% physical lifesteal & 30% attack speed at max stacks',
      summary: 'Reduced the sustainability and attack speed scaling of his enhanced basic attacks to tone down late-game dominance while keeping early-to-mid burst intact.',
      details: [
        'Passive (Fighting Spirit) attack speed scaling reduced at max stacks.',
        'Sustain conversion and lifesteal scaling lowered in late-game team fights.'
      ],
      sourceName: 'Liquipedia MLBB Patch Archive (Secondary Source)',
      sourceUrl: 'https://liquipedia.net/mobilelegends/Patch_2.2.16a',
      sourceType: 'secondary',
      verificationStatus: 'verified',
      serverType: 'original'
    },
    {
      id: 'aulus-2.2.16',
      heroId: 'aulus',
      heroName: 'Aulus',
      patchVersion: 'Patch 2.2.16',
      date: '2026-09-16',
      type: 'buff',
      title: 'Passive Axe Reach Threshold Acceleration',
      affectedSkillOrAttribute: 'Passive (Fighting Spirit)',
      previousValue: 'Axe upgrades locked strictly at levels 4, 8, 12',
      newValue: 'Enhanced weapon reach and critical rate smoothed across level progression',
      summary: 'Reduced stacks required to attain blade length and critical damage upgrades.',
      details: [
        'Enhanced weapon reach threshold smoothed across levels 4, 8, and 12.',
        'Skill 1 movement speed duration increased slightly during lane rotations.'
      ],
      sourceName: 'Liquipedia MLBB Patch Archive (Secondary Source)',
      sourceUrl: 'https://liquipedia.net/mobilelegends/Patch_2.2.16',
      sourceType: 'secondary',
      verificationStatus: 'verified',
      serverType: 'original'
    },
    {
      id: 'aulus-1.9.42',
      heroId: 'aulus',
      heroName: 'Aulus',
      patchVersion: 'Patch 1.9.42',
      date: '2024-12-18',
      type: 'buff',
      title: 'Basic Attack Fighter Durability Optimization',
      affectedSkillOrAttribute: 'Base Attributes & Passive',
      previousValue: 'Base Physical Defense: 19; HP Growth: 210',
      newValue: 'Base Physical Defense: 23; HP Growth: 232',
      summary: 'Enhanced baseline durability to aid early-game jungle clear and lane dueling.',
      details: [
        'Base defense and HP growth enhanced to reduce vulnerability before weapon evolutions.',
        'Rose Gold Meteor equipment synergy improvements.'
      ],
      sourceName: 'Liquipedia MLBB Patch Archive (Secondary Source)',
      sourceUrl: 'https://liquipedia.net/mobilelegends/Patch_1.9.42',
      sourceType: 'secondary',
      verificationStatus: 'verified',
      serverType: 'original'
    }
  ],
  hirara: [
    {
      id: 'hirara-2.2.16a',
      heroId: 'hirara',
      heroName: 'Hirara',
      patchVersion: 'Patch 2.2.16a',
      date: '2026-10-14',
      type: 'nerf',
      title: 'Skill 1 & Evasion Cooldown Increase',
      affectedSkillOrAttribute: 'Skill 1 (Temporal Slash)',
      previousValue: 'Cooldown: 6.0s at all levels',
      newValue: 'Cooldown: 7.0s at all levels (increased by 1.0s)',
      summary: 'Skill 1 cooldown increased by 1 second to reduce high uptime of invincibility and evasion mechanics in team fights.',
      details: [
        'Skill 1 Cooldown increased by 1.0s at all skill levels to limit evasion uptime.',
        'Burst trade window slowed down in early-to-mid game skirmishes.'
      ],
      sourceName: 'Liquipedia MLBB Patch Archive (Secondary Source)',
      sourceUrl: 'https://liquipedia.net/mobilelegends/Patch_2.2.16a',
      sourceType: 'secondary',
      verificationStatus: 'verified',
      serverType: 'original'
    }
  ],
  eudora: [
    {
      id: 'eudora-2.2.16a',
      heroId: 'eudora',
      heroName: 'Eudora',
      patchVersion: 'Patch 2.2.16a',
      date: '2026-10-14',
      type: 'nerf',
      title: 'Thunder’s Wrath Overall Burst Damage Reduction',
      affectedSkillOrAttribute: 'Ultimate (Thunder’s Wrath)',
      previousValue: 'Damage: 480-840 + 180% Total Magic Power',
      newValue: 'Damage: 430-750 + 160% Total Magic Power (~10% burst reduction)',
      summary: 'Received roughly a 10% reduction to ultimate overall burst damage output to curb unavoidable bush ambush one-shots.',
      details: [
        'Ultimate base damage reduced by 50-90 across skill levels 1-3.',
        'Magic Power scaling on primary lightning strike decreased from 180% to 160%.'
      ],
      sourceName: 'Liquipedia MLBB Patch Archive (Secondary Source)',
      sourceUrl: 'https://liquipedia.net/mobilelegends/Patch_2.2.16a',
      sourceType: 'secondary',
      verificationStatus: 'verified',
      serverType: 'original'
    }
  ],
  rafaela: [
    {
      id: 'rafaela-2.2.16a',
      heroId: 'rafaela',
      heroName: 'Rafaela',
      patchVersion: 'Patch 2.2.16a',
      date: '2026-10-14',
      type: 'nerf',
      title: 'Skill 1 & Skill 2 Late-Game Cooldown Scaling Reduction',
      affectedSkillOrAttribute: 'Skill 1 (Light of Retribution) & Skill 2 (Holy Healing)',
      previousValue: 'Skill 1 CD: 4.0s-2.5s; Skill 2 CD: 10.5s-8.0s',
      newValue: 'Skill 1 CD: 4.0s-3.0s; Skill 2 CD: 10.5s-9.0s',
      summary: 'Cooldown reductions no longer scale as low into late game, reducing spam capability for team healing and slow utility.',
      details: [
        'Light of Retribution cooldown adjusted from 4.0s-2.5s to 4.0s-3.0s.',
        'Holy Healing cooldown scaling adjusted from 10.5s-8.0s to 10.5s-9.0s to prevent permanent team haste.'
      ],
      sourceName: 'Liquipedia MLBB Patch Archive (Secondary Source)',
      sourceUrl: 'https://liquipedia.net/mobilelegends/Patch_2.2.16a',
      sourceType: 'secondary',
      verificationStatus: 'verified',
      serverType: 'original'
    },
    {
      id: 'rafaela-1.9.90',
      heroId: 'rafaela',
      heroName: 'Rafaela',
      patchVersion: 'Patch 1.9.90',
      date: '2025-06-18',
      type: 'rework',
      title: 'Holy Healing & Movement Utility Rework',
      affectedSkillOrAttribute: 'Passive (Deity Penalization) & Skill 2 (Holy Healing)',
      previousValue: 'Passive revenge explosion upon death',
      newValue: 'Passive applies movement speed reduction and holy mark to attackers',
      summary: 'Replaced death-only passive with active crowd-control utility and enhanced team healing.',
      details: [
        'Passive redesigned to provide in-combat survivability and slow debuffs.',
        'Holy Healing cleanses slows on primary target upon activation.'
      ],
      sourceName: 'Liquipedia MLBB Patch Archive (Secondary Source)',
      sourceUrl: 'https://liquipedia.net/mobilelegends/Patch_1.9.90',
      sourceType: 'secondary',
      verificationStatus: 'verified',
      serverType: 'original'
    }
  ],
  kalea: [
    {
      id: 'kalea-2.2.16a',
      heroId: 'kalea',
      heroName: 'Kalea',
      patchVersion: 'Patch 2.2.16a',
      date: '2026-10-14',
      type: 'buff',
      title: 'Enhanced Basic Attack, Water Zone Haste & Tidal Strike Scaling',
      affectedSkillOrAttribute: 'Passive (Surging Current) & Skill 3 (Tidal Strike)',
      previousValue: 'Enhanced attack: 240 + 60% MP; No Water Zone haste; Skill 3: 8% Max HP bonus',
      newValue: 'Enhanced attack: 300 + 75% MP; Water Zone: +60% Move Speed for 1s; Skill 3: 14% Max HP bonus',
      summary: 'Dealt significantly stronger enhanced attack damage, added 60% movement speed for 1s on absorbing Water Zone, and increased Skill 3 scaling from 8% to 14% Max HP.',
      details: [
        'Passive / Enhanced Third Basic Attack: Dealt significantly stronger damage (300 + 75% MP).',
        'Water Zone Mechanic: Added movement speed effect granting 60% Movement Speed for 1 second upon absorption.',
        'Skill 3 (Tidal Strike): Damage bonus scaling increased from 8% to 14% of Max HP.'
      ],
      sourceName: 'Liquipedia MLBB Patch Archive (Secondary Source)',
      sourceUrl: 'https://liquipedia.net/mobilelegends/Patch_2.2.16a',
      sourceType: 'secondary',
      verificationStatus: 'verified',
      serverType: 'original'
    },
    {
      id: 'kalea-1.9.64',
      heroId: 'kalea',
      heroName: 'Kalea',
      patchVersion: 'Patch 1.9.64',
      date: '2025-03-18',
      type: 'adjustment',
      title: 'Hero Release: Surging Wave',
      affectedSkillOrAttribute: 'Complete Hero Kit',
      previousValue: 'Advance Server Testing',
      newValue: 'Original Server Official Debut',
      summary: 'Introduced as a dual-role Support/Fighter with water displacement and allied tidal barriers.',
      details: [
        'Passive: Basic attacks build tidal charges that unleash whirlpool splashes.',
        'Skill 1: Wave surge damaging enemies and granting shields to nearby allies.',
        'Ultimate: Summons a massive tidal vortex displacing enemies toward the center.'
      ],
      sourceName: 'Liquipedia MLBB Patch Archive (Secondary Source)',
      sourceUrl: 'https://liquipedia.net/mobilelegends/Patch_1.9.64',
      sourceType: 'secondary',
      verificationStatus: 'verified',
      serverType: 'original'
    }
  ],
  khufra: [
    {
      id: 'khufra-2.2.16a',
      heroId: 'khufra',
      heroName: 'Khufra',
      patchVersion: 'Patch 2.2.16a',
      date: '2026-10-14',
      type: 'adjustment',
      title: 'Passive Spell Curse Basic Attack Multiple Use Bug Fix',
      affectedSkillOrAttribute: 'Passive (Spell Curse)',
      previousValue: 'Enhanced Basic Attack could potentially be used multiple times under certain circumstances without immediate consumption',
      newValue: 'Enhanced Basic Attack is consumed immediately upon dealing damage',
      summary: "Fixed an issue where Khufra's enhanced Basic Attack could be used multiple times under certain circumstances. It is now consumed immediately upon dealing damage.",
      details: [
        "Fixed an issue where Khufra's enhanced Basic Attack could be used multiple times under certain circumstances.",
        'It is now consumed immediately upon dealing damage.',
        'Documented by MLBBHub secondary patch archive; non-numerical mechanical bug fix.'
      ],
      sourceName: 'MLBBHub Patch Archive (Secondary Source)',
      sourceUrl: 'https://mlbbhub.com/patch-notes/original/2.2.16a',
      sourceType: 'secondary',
      verificationStatus: 'verified',
      serverType: 'original'
    }
  ],

  // ==========================================
  // PATCH 2.2.16 (September 16, 2026) - Season 42 Update
  // ==========================================
  masha: [
    {
      id: 'masha-2.2.23',
      heroId: 'masha',
      heroName: 'Masha',
      patchVersion: 'Patch 2.2.23',
      date: '2026-11-11',
      type: 'nerf',
      title: 'Slow Relocation to Skill 2, Path Width Narrowing & Claw Strike Nerf',
      affectedSkillOrAttribute: 'Passive (Primal Pact), Skill 1 (Feral Swipe), Skill 2 (Claw Strike)',
      previousValue: 'Passive extra damage: (3 + 1% Extra Physical Attack + 0.3 * Hero Level)% Max HP, HP Regen: 4–10% Max HP; Skill 1 Damage Bonus: 70%, Minion Damage: 100%–150%, 50% slow (1s); Skill 2 Damage: 120–240 (+80% Extra Physical Attack), standard dash path',
      newValue: 'Passive extra damage: (2 + 0.5% Extra Physical Attack + 0.2 * Hero Level)% Max HP, HP Regen: 3–6% Max HP; Skill 1 Damage Bonus: 55%, Minion Damage: 150%–200%, slow removed; Skill 2 Damage: 60–240 (+40% Extra Physical Attack), 50% slow (1s) added, path width -20%',
      summary: "Moved the 50% slow effect from Skill 1 to Skill 2 to improve lane clear and follow-up chases, narrowed Skill 2's dash path by 20%, reduced Skill 1 and Skill 2 damage, optimized Wound triggering, and slightly reduced claw strike effectiveness.",
      details: [
        "Passive (Primal Pact) Wound Trigger Optimization: Skill hits randomly replace one of the target's existing Wounds with a new one in the direction of the hit.",
        'Passive Extra Physical Damage: Reduced from (3 + 1% Extra Physical Attack + 0.3 * Hero Level)% Max HP to (2 + 0.5% Extra Physical Attack + 0.2 * Hero Level)% Max HP.',
        'Passive HP Regen: Reduced from 4–10% Max HP to 3–6% Max HP.',
        'Skill 1 (Feral Swipe) Damage Bonus: Reduced from 70% to 55%; Damage to Minions increased from 100%–150% to 150%–200%.',
        'Skill 1 Removed Effect: Removed the effect where hitting an enemy hero slowed them by 50% for 1s.',
        'Skill 2 (Claw Strike) Relocated Slow & Narrowed Path: Hitting an enemy hero with the slash now slows them by 50% for 1s; Skill 2 path width reduced by 20% to reduce unwanted collision blocks.',
        'Skill 2 Damage: Reduced from 120–240 (+80% Extra Physical Attack) to 60–240 (+40% Extra Physical Attack).',
        "Claw Strikes: Slightly reduced the effectiveness of Masha's claw strikes (exact separate claw strike multiplier not itemized beyond the Passive/Skill values above)."
      ],
      sourceName: 'MLBBHub Patch Archive (Secondary Source)',
      sourceUrl: 'https://mlbbhub.com/patch-notes/original/2.2.23',
      sourceType: 'secondary',
      verificationStatus: 'verified',
      serverType: 'original'
    },
    {
      id: 'masha-2.2.16',
      heroId: 'masha',
      heroName: 'Masha',
      patchVersion: 'Patch 2.2.16',
      date: '2026-09-16',
      type: 'revamp',
      title: 'Season 42 Comprehensive Hero Revamp',
      affectedSkillOrAttribute: 'Passive (Ancient Strength → Primal Pact) & All Skills',
      previousValue: 'Traditional split-pusher with basic attack disarm mechanic',
      newValue: '3-HP-bar sustained teamfight berserker with directional Feral Wound mechanic',
      summary: 'Complete overhaul from split-pusher into a sustained teamfight berserker with the Feral Wound mechanic.',
      details: [
        'Passive: Historical passive Ancient Strength was replaced by Primal Pact, retaining the trademark 3-HP-bar structure while introducing Feral energy accumulation.',
        'New Wound Mechanic: Skills apply directional Wound marks; striking from that angle activates Feral State with AoE claw swipes and Attack Speed.',
        'Skill 1 (Feral Swipe): Reworked into a forward energy wave that damages and slows targets.',
        'Skill 2 (Claw Strike): Swift mobility dash allowing precise positioning around enemy wound angles.',
        'Ultimate (Savage Maul): Locks down and stuns the target before delivering heavy burst damage; retains CC purify upon losing an HP bar.'
      ],
      sourceName: 'Liquipedia MLBB Patch Archive (Secondary Source)',
      sourceUrl: 'https://liquipedia.net/mobilelegends/Patch_2.2.16',
      sourceType: 'secondary',
      verificationStatus: 'verified'
    }
  ],
  bruno: [
    {
      id: 'bruno-2.2.16',
      heroId: 'bruno',
      heroName: 'Bruno',
      patchVersion: 'Patch 2.2.16',
      date: '2026-09-16',
      type: 'revamp',
      title: 'Season 42 Powerball & Mobility Modernization',
      affectedSkillOrAttribute: 'Skill 1 (Volley Shot), Skill 2 (Flying Tackle), Ultimate (Worldie)',
      previousValue: 'Clunky powerball return trajectory and static slide recovery',
      newValue: 'Fluid powerball tracking and responsive slide reset mechanics',
      summary: 'Streamlined powerball tracking, modernized slide mobility, and teamfight utility ultimate.',
      details: [
        'Skill 1 (Volley Shot): Powerball retrieval mechanics smoothed; reduced bounce tracking clunkiness.',
        'Skill 2 (Flying Tackle): Slide distance and recovery optimized for agile positioning and escape trades.',
        'Ultimate (Worldie): Adjusted to facilitate passive stacking and teamfight control setups.'
      ],
      sourceName: 'Liquipedia MLBB Patch Archive (Secondary Source)',
      sourceUrl: 'https://liquipedia.net/mobilelegends/Patch_2.2.16',
      sourceType: 'secondary',
      verificationStatus: 'verified'
    }
  ],
  argus: [
    {
      id: 'argus-2.2.16',
      heroId: 'argus',
      heroName: 'Argus',
      patchVersion: 'Patch 2.2.16',
      date: '2026-09-16',
      type: 'buff',
      title: 'Warmonger Enhanced Attack Turret Interaction',
      affectedSkillOrAttribute: 'Passive (Warmonger)',
      previousValue: 'Enhanced double strike ignored Turret structures',
      newValue: 'Warmonger double strike connects with Turrets and triggers HP recovery',
      summary: 'Warmonger basic attacks now interact directly with turrets and trigger lifesteal effects.',
      details: [
        'Warmonger double strike connects with Turret structures.',
        'Eternal Evil duration and CC cleanse responsiveness optimized.'
      ],
      sourceName: 'Liquipedia MLBB Patch Archive (Secondary Source)',
      sourceUrl: 'https://liquipedia.net/mobilelegends/Patch_2.2.16',
      sourceType: 'secondary',
      verificationStatus: 'verified'
    },
    {
      id: 'argus-1.9.42',
      heroId: 'argus',
      heroName: 'Argus',
      patchVersion: 'Patch 1.9.42',
      date: '2024-12-18',
      type: 'buff',
      title: 'Demonic Blade Early Duelling Durability',
      affectedSkillOrAttribute: 'Base Attributes & Demonic Grip',
      previousValue: 'Base HP: 2578; Demonic Grip CD: 12.0s',
      newValue: 'Base HP: 2688; Demonic Grip CD: 10.5s',
      summary: 'Enhanced baseline health and reduced grip cooldown for improved lane laning phase.',
      details: [
        'Base HP increased to improve trades before unlocking Eternal Evil.',
        'Skill 1 cooldown reduced to assist minion wave management.'
      ],
      sourceName: 'Liquipedia MLBB Patch Archive (Secondary Source)',
      sourceUrl: 'https://liquipedia.net/mobilelegends/Patch_1.9.42',
      sourceType: 'secondary',
      verificationStatus: 'verified'
    }
  ],
  sun: [
    {
      id: 'sun-2.2.16',
      heroId: 'sun',
      heroName: 'Sun',
      patchVersion: 'Patch 2.2.16',
      date: '2026-09-16',
      type: 'buff',
      title: 'Doppelganger Turret Interaction',
      affectedSkillOrAttribute: 'Passive (Simian God) & Skill 1 (Endless Variety)',
      previousValue: 'Clone enhanced hits did not trigger structure HP restoration',
      newValue: 'Clone attacks inherit turret interaction updates and structure drain',
      summary: 'Clone enhanced attacks now trigger HP regen interactions against enemy structures.',
      details: [
        'Clone basic attacks inherit turret interaction updates.',
        'Endless Variety dash range slightly increased.'
      ],
      sourceName: 'Liquipedia MLBB Patch Archive (Secondary Source)',
      sourceUrl: 'https://liquipedia.net/mobilelegends/Patch_2.2.16',
      sourceType: 'secondary',
      verificationStatus: 'verified'
    },
    {
      id: 'sun-1.9.42',
      heroId: 'sun',
      heroName: 'Sun',
      patchVersion: 'Patch 1.9.42',
      date: '2024-12-18',
      type: 'buff',
      title: 'Basic Attack Fighter Early Duelling Buff',
      affectedSkillOrAttribute: 'Base Attributes',
      previousValue: 'Base Attack Speed: 1.05; Physical Defense: 18',
      newValue: 'Base Attack Speed: 1.10; Physical Defense: 22',
      summary: 'Early-game stats increased to help Sun contest objectives before late-game split-pushing.',
      details: [
        'Base defense and attack speed scaling improved.',
        'Clone survivability against area-of-effect spells enhanced.'
      ],
      sourceName: 'Liquipedia MLBB Patch Archive (Secondary Source)',
      sourceUrl: 'https://liquipedia.net/mobilelegends/Patch_1.9.42',
      sourceType: 'secondary',
      verificationStatus: 'verified'
    }
  ],
  gusion: [
    {
      id: 'gusion-2.2.16',
      heroId: 'gusion',
      heroName: 'Gusion',
      patchVersion: 'Patch 2.2.16',
      date: '2026-09-16',
      type: 'adjustment',
      title: 'Dagger Specialist Turret Interaction',
      affectedSkillOrAttribute: 'Passive (Dagger Specialist)',
      previousValue: 'Enhanced strike passive did not activate against enemy Turrets',
      newValue: 'Passive enhanced strikes connect with turret structures and recover HP',
      summary: 'Passive enhanced strikes connect with turret structures and recover HP.',
      details: [
        'Dagger Specialist passive basic attack damage applies to structures.',
        'Incandescent dash cooldown reset responsiveness polished.'
      ],
      sourceName: 'Liquipedia MLBB Patch Archive (Secondary Source)',
      sourceUrl: 'https://liquipedia.net/mobilelegends/Patch_2.2.16',
      sourceType: 'secondary',
      verificationStatus: 'verified'
    }
  ],
  thamuz: [
    {
      id: 'thamuz-2.2.16',
      heroId: 'thamuz',
      heroName: 'Thamuz',
      patchVersion: 'Patch 2.2.16',
      date: '2026-09-16',
      type: 'buff',
      title: 'Molten Scythe Turret Interaction',
      affectedSkillOrAttribute: 'Passive (Grand Lord Lava) & Ultimate (Cauterant Inferno)',
      previousValue: 'Lava explosions only damaged enemy units, not structures',
      newValue: 'Enhanced basic attacks from Grand Lord Lava connect with turrets',
      summary: 'Enhanced basic attacks from Grand Lord Lava connect with turrets.',
      details: [
        'Cauterant Inferno attack speed scaling enhanced in late-game teamfights.',
        'Passive explosion triggers properly near enemy structures.'
      ],
      sourceName: 'Liquipedia MLBB Patch Archive (Secondary Source)',
      sourceUrl: 'https://liquipedia.net/mobilelegends/Patch_2.2.16',
      sourceType: 'secondary',
      verificationStatus: 'verified'
    }
  ],
  dyrroth: [
    {
      id: 'dyrroth-2.2.16',
      heroId: 'dyrroth',
      heroName: 'Dyrroth',
      patchVersion: 'Patch 2.2.16',
      date: '2026-09-16',
      type: 'buff',
      title: 'Wrath of the Abyss Structure Interaction',
      affectedSkillOrAttribute: 'Passive (Wrath of the Abyss) & Skill 2 (Spectre Step)',
      previousValue: 'Circle Strike healing was limited to creeps and heroes',
      newValue: 'Circle Strike basic attacks hit turrets and restore HP based on physical damage',
      summary: 'Circle Strike basic attacks hit turrets and restore HP based on physical damage.',
      details: [
        'Passive health regeneration active against structures.',
        'Spectre Step defense reduction verified at 50%-75% armor reduction.'
      ],
      sourceName: 'Liquipedia MLBB Patch Archive (Secondary Source)',
      sourceUrl: 'https://liquipedia.net/mobilelegends/Patch_2.2.16',
      sourceType: 'secondary',
      verificationStatus: 'verified'
    }
  ],

  // ==========================================
  // PATCH 1.9.42 & 1.9.42B (Dec 2024 - Jan 2025)
  // ==========================================
  harith: [
    {
      id: 'harith-1.9.42b',
      heroId: 'harith',
      heroName: 'Harith',
      patchVersion: 'Patch 1.9.42B',
      date: '2025-01-01',
      type: 'nerf',
      title: 'Chrono Dash Enhanced Basic Attack Damage Reduction',
      affectedSkillOrAttribute: 'Skill 2 (Chrono Dash)',
      previousValue: 'Enhanced Attack: 225-350 + 100% Total Phys + 100% Total Magic',
      newValue: 'Enhanced Attack: 200-315 + 90% Total Phys + 90% Total Magic',
      summary: 'Reduced enhanced basic attack burst damage to curb dominating gold-lane performance.',
      details: [
        'Base damage of Chrono Dash enhanced attack lowered by 25-35 points.',
        'Both Physical and Magic Power scaling reduced from 100% to 90%.'
      ],
      sourceName: 'Liquipedia MLBB Patch Archive (Secondary Source)',
      sourceUrl: 'https://liquipedia.net/mobilelegends/Patch_1.9.42B',
      sourceType: 'secondary',
      verificationStatus: 'verified'
    }
  ],
  karrie: [
    {
      id: 'karrie-2.2.23',
      heroId: 'karrie',
      heroName: 'Karrie',
      patchVersion: 'Patch 2.2.23',
      date: '2026-11-11',
      type: 'adjustment',
      title: 'Ultimate Lightwheel Combat Buff & Skill 1 Damage Scaling Shift',
      affectedSkillOrAttribute: 'Skill 1 (Spinning Lightwheel), Skill 2 (Phantom Step), Ultimate (Speedy Lightwheel)',
      previousValue: 'Skill 1 Physical Attack Bonus: 90% (Base) / 20% (Sustained); Ultimate Base Damage per Lightwheel: 40; Movement Speed Boost: 20%',
      newValue: 'Skill 1 Physical Attack Bonus: 20% (Base) / 10% (Sustained); Ultimate Base Damage per Lightwheel: 50; Movement Speed Boost: 30%',
      summary: 'Improved Karrie’s combat ability during her Ultimate, shifted Skill 1 toward slowing and forcing repositioning in the late game, and improved Skill 1 clarity and Skill 2 target detection.',
      details: [
        'Skill 1 (Spinning Lightwheel): Optimized the sphere visual effects and collision detection frequency for clearer hit readability.',
        'Skill 1 Physical Attack Bonus: Base Damage reduced from 90% to 20%; Sustained Damage reduced from 20% to 10%.',
        'Skill 2 (Phantom Step): Now detects nearby enemy heroes throughout the dash; if no enemy heroes are detected, it detects creeps and minions at the end of the dash.',
        'Ultimate (Speedy Lightwheel) Base Damage per Lightwheel: Increased from 40 to 50.',
        'Ultimate Movement Speed Boost: Increased from 20% to 30%.'
      ],
      sourceName: 'MLBBHub Patch Archive (Secondary Source)',
      sourceUrl: 'https://mlbbhub.com/patch-notes/original/2.2.23',
      sourceType: 'secondary',
      verificationStatus: 'verified',
      serverType: 'original'
    },
    {
      id: 'karrie-1.9.42b',
      heroId: 'karrie',
      heroName: 'Karrie',
      patchVersion: 'Patch 1.9.42B',
      date: '2025-01-01',
      type: 'buff',
      title: 'Spinning Light Wheel Projectile Velocity Buff',
      affectedSkillOrAttribute: 'Skill 1 (Spinning Light Wheel)',
      previousValue: 'Sphere projectile speed: 7',
      newValue: 'Sphere projectile speed: 9',
      summary: 'Increased skill 1 projectile travel speed to improve reliability of landing poke and slow.',
      details: [
        'Sphere projectile speed increased from 7 to 9.',
        'Slow application responsiveness improved against high-mobility targets.'
      ],
      sourceName: 'Liquipedia MLBB Patch Archive (Secondary Source)',
      sourceUrl: 'https://liquipedia.net/mobilelegends/Patch_1.9.42B',
      sourceType: 'secondary',
      verificationStatus: 'verified'
    }
  ],
  cici: [
    {
      id: 'cici-1.9.42b',
      heroId: 'cici',
      heroName: 'Cici',
      patchVersion: 'Patch 1.9.42B',
      date: '2025-01-01',
      type: 'buff',
      title: 'Curtain Call Single-Target Decay Ratio Buff',
      affectedSkillOrAttribute: 'Ultimate (Curtain Call)',
      previousValue: 'Single-target decay ratio: 20%-30%',
      newValue: 'Single-target decay ratio: 25%-45%',
      summary: 'Increased skill damage when Curtain Call binds only a single target to boost 1v1 dueling.',
      details: [
        'Decay ratio adjusted from 20-30% to 25-45% when striking an isolated target.',
        'Significantly improves EXP lane solo dueling potential.'
      ],
      sourceName: 'Liquipedia MLBB Patch Archive (Secondary Source)',
      sourceUrl: 'https://liquipedia.net/mobilelegends/Patch_1.9.42B',
      sourceType: 'secondary',
      verificationStatus: 'verified'
    },
    {
      id: 'cici-1.8.44',
      heroId: 'cici',
      heroName: 'Cici',
      patchVersion: 'Patch 1.8.44',
      date: '2023-12-23',
      type: 'adjustment',
      title: 'Hero Release: Buoyant Performer',
      affectedSkillOrAttribute: 'Complete Hero Kit',
      previousValue: 'Advance Server Testing',
      newValue: 'Original Server Official Debut',
      summary: 'Introduced as an agile EXP lane Fighter wielding a weaponized Yo-Yo for continuous kiting.',
      details: [
        'Yo-Yo Blitz fires rapid strikes while allowing Cici to move at full speed.',
        'Buoyancy passive stacks movement speed and spell vamp based on successful hits.',
        'Curtain Call links two enemy heroes together, slowing them and duplicating damage.'
      ],
      sourceName: 'Liquipedia MLBB Patch Archive (Secondary Source)',
      sourceUrl: 'https://liquipedia.net/mobilelegends/Patch_1.8.44',
      sourceType: 'secondary',
      verificationStatus: 'verified'
    }
  ],
  lukas: [
    {
      id: 'lukas-2.2.23',
      heroId: 'lukas',
      heroName: 'Lukas',
      patchVersion: 'Patch 2.2.23',
      date: '2026-11-11',
      type: 'adjustment',
      title: 'Base Durability & Skill 1 Base-Damage Shift for Fighter Viability',
      affectedSkillOrAttribute: 'Base Attributes & Skill 1',
      previousValue: 'Base HP: 2550; Base Physical Defense: 21; Skill 1 Pulverize: 280–580 (+120% Total Physical Attack), Spin: 80–180 (+45% Total Physical Attack), HP Regen: 6% Max HP',
      newValue: 'Base HP: 2620; Base Physical Defense: 23; Skill 1 Pulverize: 400–800 (+60% Total Physical Attack), Spin: 95–235 (+25% Total Physical Attack), HP Regen: 8% Max HP',
      summary: 'Increased base durability, Skill 1 base damage, and HP Regen while reducing Physical Attack scaling to make defensive builds more viable and encourage a fighter playstyle.',
      details: [
        'Base HP increased from 2550 to 2620.',
        'Base Physical Defense increased from 21 to 23.',
        'Skill 1 Pulverize Damage adjusted from 280–580 (+120% Total Physical Attack) to 400–800 (+60% Total Physical Attack).',
        'Skill 1 Spin Damage adjusted from 80–180 (+45% Total Physical Attack) to 95–235 (+25% Total Physical Attack).',
        'Skill 1 HP Regen increased from 6% of Max HP to 8% of Max HP.'
      ],
      sourceName: 'MLBBHub Patch Archive (Secondary Source)',
      sourceUrl: 'https://mlbbhub.com/patch-notes/original/2.2.23',
      sourceType: 'secondary',
      verificationStatus: 'verified',
      serverType: 'original'
    },
    {
      id: 'lukas-1.9.42',
      heroId: 'lukas',
      heroName: 'Lukas',
      patchVersion: 'Patch 1.9.42',
      date: '2024-12-18',
      type: 'adjustment',
      title: 'Hero Release: Beast of Light',
      affectedSkillOrAttribute: 'Complete Hero Kit',
      previousValue: 'Advance Server Testing',
      newValue: 'Original Server Official Debut',
      summary: 'Introduced as a dual-form Fighter with Resolve resource transformation and Sacred Beast terrain-slamming abilities.',
      details: [
        'Passive: Building Resolve in combat enables transformation into the Sacred Beast form.',
        'Mortal form provides agile sustain and poking with Flash Strike.',
        'Sacred Beast form provides massive physical shockwaves, crowd control, and durability.'
      ],
      sourceName: 'Liquipedia MLBB Patch Archive (Secondary Source)',
      sourceUrl: 'https://liquipedia.net/mobilelegends/Patch_1.9.42',
      sourceType: 'secondary',
      verificationStatus: 'verified'
    }
  ],
  zilong: [
    {
      id: 'zilong-1.9.42',
      heroId: 'zilong',
      heroName: 'Zilong',
      patchVersion: 'Patch 1.9.42',
      date: '2024-12-18',
      type: 'buff',
      title: 'Dragon Flurry Early Attack Scaling Buff',
      affectedSkillOrAttribute: 'Passive (Dragon Flurry) & Base Stats',
      previousValue: 'Passive damage: 150% Basic Attack; Base HP: 2549',
      newValue: 'Passive damage: 165% Basic Attack; Base HP: 2655',
      summary: 'Buffed baseline HP and passive flurry multiplier to ease early-game lane vulnerability.',
      details: [
        'Dragon Flurry enhanced basic attack damage increased.',
        'Base HP increased to allow better trades against early EXP lane bullies.'
      ],
      sourceName: 'Liquipedia MLBB Patch Archive (Secondary Source)',
      sourceUrl: 'https://liquipedia.net/mobilelegends/Patch_1.9.42',
      sourceType: 'secondary',
      verificationStatus: 'verified'
    }
  ],

  // ==========================================
  // PATCH 1.9.20 & SUBPATCHES (September - October 2024)
  // ==========================================
  terizla: [
    {
      id: 'terizla-1.9.20',
      heroId: 'terizla',
      heroName: 'Terizla',
      patchVersion: 'Patch 1.9.20',
      date: '2024-09-21',
      type: 'nerf',
      title: 'Early Durability & Execution Strike Cooldown Nerf',
      affectedSkillOrAttribute: 'Passive (Body of Smith), Skill 1 (Revenge Strike), Skill 2 (Execution Strike)',
      previousValue: 'Passive Max DR: Flat 30%; Skill 1 CD: 7s flat; Skill 2 CD: 7s-4.5s',
      newValue: 'Passive Max DR: 21%-35% scaling; Skill 1 CD: 9s flat; Skill 2 CD: 9s-4.0s',
      summary: 'Substantially nerfed early-game damage reduction and skill cooldowns due to tournament dominance.',
      details: [
        'Passive maximum damage reduction adjusted from a flat 30% to 21%–35% scaling with hero level.',
        'Skill 1 (Revenge Strike) cooldown increased from 7s to 9s at all levels.',
        'Skill 2 (Execution Strike) cooldown adjusted from 7–4.5s to 9–4.0s.',
        'First 2 strikes damage adjusted from 135–310 + 160%–185% Total Physical Attack to 90–315 + 135%–185%.'
      ],
      sourceName: 'Liquipedia MLBB Patch Archive (Secondary Source)',
      sourceUrl: 'https://liquipedia.net/mobilelegends/Patch_1.9.20',
      sourceType: 'secondary',
      verificationStatus: 'verified'
    }
  ],
  hylos: [
    {
      id: 'hylos-1.9.20',
      heroId: 'hylos',
      heroName: 'Hylos',
      patchVersion: 'Patch 1.9.20',
      date: '2024-09-21',
      type: 'nerf',
      title: 'Late Game Durability & Stat Growth Scaling Nerf',
      affectedSkillOrAttribute: 'Base Attributes (HP Growth, Defenses, Mana)',
      previousValue: 'HP Growth: 360; Phys Def Growth: 6.8; Magic Def Growth: 4.0; Base Mana: 430',
      newValue: 'HP Growth: 295; Phys Def Growth: 5.5; Magic Def Growth: 2.5; Base Mana: 500',
      summary: 'Toned down excessive late-game durability while preserving early-game lane presence.',
      details: [
        'HP growth per level reduced from 360 to 295.',
        'Physical defense growth reduced from 6.8 to 5.5; Magic defense growth from 4.0 to 2.5.',
        'Base Mana increased from 430 to 500 to compensate early casting.'
      ],
      sourceName: 'Liquipedia MLBB Patch Archive (Secondary Source)',
      sourceUrl: 'https://liquipedia.net/mobilelegends/Patch_1.9.20',
      sourceType: 'secondary',
      verificationStatus: 'verified'
    }
  ],
  roger: [
    {
      id: 'roger-1.9.20',
      heroId: 'roger',
      heroName: 'Roger',
      patchVersion: 'Patch 1.9.20',
      date: '2024-09-21',
      type: 'nerf',
      title: 'Wolf Transformation Cooldown & Bonus Defense Nerf',
      affectedSkillOrAttribute: 'Ultimate (Wolf Transformation)',
      previousValue: 'Cooldown: 6.0s–4.5s; Bonus Physical & Magic Defense: 40–70',
      newValue: 'Cooldown: 9.0s–4.5s; Bonus Physical & Magic Defense: 20–65',
      summary: 'Weakened high survivability, damage output, and mobility during early and mid-game.',
      details: [
        'Wolf Transformation ultimate cooldown increased from 6–4.5s to 9–4.5s.',
        'Bonus Physical and Magic Defense halved in the early game from 40–70 down to 20–65.'
      ],
      sourceName: 'Liquipedia MLBB Patch Archive (Secondary Source)',
      sourceUrl: 'https://liquipedia.net/mobilelegends/Patch_1.9.20',
      sourceType: 'secondary',
      verificationStatus: 'verified'
    }
  ],
  hayabusa: [
    {
      id: 'hayabusa-1.9.20',
      heroId: 'hayabusa',
      heroName: 'Hayabusa',
      patchVersion: 'Patch 1.9.20',
      date: '2024-09-21',
      type: 'nerf',
      title: 'Shadow Kill Ultimate Damage Scaling Tuning',
      affectedSkillOrAttribute: 'Ultimate (Shadow Kill)',
      previousValue: 'Damage per hit: 140-180 + 75% Extra Physical Attack',
      newValue: 'Damage per hit: 130-170 + 70% Extra Physical Attack',
      summary: 'Slightly reduced burst damage due to extreme dominance in high-rank matches and pro tournaments.',
      details: [
        'Overall shadow kill damage scaling reduced to offer more counterplay for isolated squishy targets.',
        'Phantom shuriken energy restoration thresholds adjusted.'
      ],
      sourceName: 'Liquipedia MLBB Patch Archive (Secondary Source)',
      sourceUrl: 'https://liquipedia.net/mobilelegends/Patch_1.9.20',
      sourceType: 'secondary',
      verificationStatus: 'verified'
    }
  ],
  suyou: [
    {
      id: 'suyou-1.9.20',
      heroId: 'suyou',
      heroName: 'Suyou',
      patchVersion: 'Patch 1.9.20',
      date: '2024-09-21',
      type: 'adjustment',
      title: 'Hero Release: Mask of the Immortal',
      affectedSkillOrAttribute: 'Complete Hero Kit',
      previousValue: 'Advance Server Testing',
      newValue: 'Original Server Official Debut',
      summary: 'Introduced as a dual-nature Assassin/Fighter leveraging Nuo immortal powers via Tap and Hold inputs.',
      details: [
        'Tap input triggers swift Mortal Form dashes, movement speed, and rapid burst strikes.',
        'Hold input channels the heavy Immortal Form with damage reduction and cleaving attacks.',
        'Seamless dual-style kit allows flex between Jungle objective assassin and EXP lane brawler.'
      ],
      sourceName: 'Liquipedia MLBB Patch Archive (Secondary Source)',
      sourceUrl: 'https://liquipedia.net/mobilelegends/Patch_1.9.20',
      sourceType: 'secondary',
      verificationStatus: 'verified'
    },
    {
      id: 'suyou-1.9.20e',
      heroId: 'suyou',
      heroName: 'Suyou',
      patchVersion: 'Patch 1.9.20E',
      date: '2024-10-08',
      type: 'adjustment',
      title: 'Mortal & Immortal Form Skill Cooldown Fine-Tuning',
      affectedSkillOrAttribute: 'Skill 1 (Blade Surge) & Skill 2 (Soul Sever)',
      previousValue: 'Skill 1 CD: 8.5s; Skill 2 Hold Damage Reduction: 40%',
      newValue: 'Skill 1 CD: 9.0s; Skill 2 Hold Damage Reduction: 35%',
      summary: 'Balanced tap mobility cooldowns and slightly lowered hold form damage reduction.',
      details: [
        'Blade Surge cooldown increased by 0.5s to curb hyper-mobility.',
        'Immortal Form damage reduction tuned from 40% to 35%.'
      ],
      sourceName: 'Liquipedia MLBB Patch Archive (Secondary Source)',
      sourceUrl: 'https://liquipedia.net/mobilelegends/Patch_1.9.20E',
      sourceType: 'secondary',
      verificationStatus: 'verified'
    }
  ],
  claude: [
    {
      id: 'claude-1.9.20e',
      heroId: 'claude',
      heroName: 'Claude',
      patchVersion: 'Patch 1.9.20E',
      date: '2024-10-08',
      type: 'buff',
      title: 'Early to Mid Game Base Damage Enhancement',
      affectedSkillOrAttribute: 'Skill 1 (Art of Thievery) & Ultimate (Blazing Duet)',
      previousValue: 'Skill 1 Damage: 160-285; Ultimate Base Damage: 130-180',
      newValue: 'Skill 1 Damage: 250-350; Ultimate Base Damage: 140-190',
      summary: 'Boosted early-to-mid game damage output so Claude is less strictly reliant on full late-game item spikes.',
      details: [
        'Art of Thievery base damage significantly boosted from 160–285 to 250–350.',
        'Blazing Duet base bullet damage increased from 130–180 to 140–190.'
      ],
      sourceName: 'Liquipedia MLBB Patch Archive (Secondary Source)',
      sourceUrl: 'https://liquipedia.net/mobilelegends/Patch_1.9.20E',
      sourceType: 'secondary',
      verificationStatus: 'verified'
    }
  ],
  fanny: [
    {
      id: 'fanny-1.9.20d',
      heroId: 'fanny',
      heroName: 'Fanny',
      patchVersion: 'Patch 1.9.20D',
      date: '2024-09-28',
      type: 'nerf',
      title: 'Cut Throat Base Damage Tuning & Skill 1 Bug Fix',
      affectedSkillOrAttribute: 'Ultimate (Cut Throat)',
      previousValue: 'Base Damage: 500-860; Triggered Skill 1 bug on target impact',
      newValue: 'Base Damage: 460-780; Fixed unintended Skill 1 proc',
      summary: 'Corrected unintended double-proc bug on ultimate and adjusted direct cast burst damage.',
      details: [
        'Fixed an unintended bug where Cut Throat was triggering Skill 1 indiscriminately on direct casts.',
        'Direct cast ultimate base damage reduced from 500-860 to 460-780.'
      ],
      sourceName: 'Liquipedia MLBB Patch Archive (Secondary Source)',
      sourceUrl: 'https://liquipedia.net/mobilelegends/Patch_1.9.20D',
      sourceType: 'secondary',
      verificationStatus: 'verified'
    }
  ],
  edith: [
    {
      id: 'edith-1.9.20',
      heroId: 'edith',
      heroName: 'Edith',
      patchVersion: 'Patch 1.9.20',
      date: '2024-09-21',
      type: 'adjustment',
      title: 'Overload Passive Bug Fix & Defense Conversion Scaling',
      affectedSkillOrAttribute: 'Passive (Overload) & Ultimate (Primal Wrath)',
      previousValue: 'Passive lightning damage scaling calculation discrepancy',
      newValue: 'Consistent Wrath-to-Magic conversion ratio and lightning tick damage',
      summary: 'Fixed scaling discrepancies on passive lightning bolts and normalized ultimate conversion.',
      details: [
        'Corrected bug causing passive lightning damage to fail to register full defense bonuses.',
        'Primal Wrath transformation defense-to-magic power conversion verified.'
      ],
      sourceName: 'Liquipedia MLBB Patch Archive (Secondary Source)',
      sourceUrl: 'https://liquipedia.net/mobilelegends/Patch_1.9.20',
      sourceType: 'secondary',
      verificationStatus: 'verified'
    }
  ],

  // ==========================================
  // PATCH 1.8.92 (June 2024) - Project NEXT & Equipment Evolution
  // ==========================================
  zhuxin: [
    {
      id: 'zhuxin-1.8.92',
      heroId: 'zhuxin',
      heroName: 'Zhuxin',
      patchVersion: 'Patch 1.8.92',
      date: '2024-06-29',
      type: 'adjustment',
      title: 'Hero Release: Beacon of Spirits',
      affectedSkillOrAttribute: 'Complete Hero Kit',
      previousValue: 'Advance Server Testing',
      newValue: 'Original Server Official Debut',
      summary: 'Introduced as a Cadia Riverlands crowd-control Mage utilizing the Lantern of Spirits.',
      details: [
        'Fluttering Grace generates spirit butterflies that tether and continuously damage targets.',
        'Stacking soul snares lifts and displaces enemy champions airborne across terrain.',
        'Crimson Beacon provides persistent defensive shields and continuous slow auras.'
      ],
      sourceName: 'Liquipedia MLBB Patch Archive (Secondary Source)',
      sourceUrl: 'https://liquipedia.net/mobilelegends/Patch_1.8.92',
      sourceType: 'secondary',
      verificationStatus: 'verified'
    },
    {
      id: 'zhuxin-1.9.20',
      heroId: 'zhuxin',
      heroName: 'Zhuxin',
      patchVersion: 'Patch 1.9.20',
      date: '2024-09-21',
      type: 'adjustment',
      title: 'Mana Consumption & Butterfly Displacement Rebalance',
      affectedSkillOrAttribute: 'Skill 2 (Fluttering Grace) & Base Mana Regen',
      previousValue: 'Base Mana Regen: 3.6; Butterfly snare airborne threshold: 8 stacks',
      newValue: 'Base Mana Regen: 4.8; Butterfly snare airborne threshold: 10 stacks',
      summary: 'Increased snare threshold to curb excessive crowd control while buffing base mana sustain.',
      details: [
        'Airborne pull requires 10 butterfly stacks instead of 8, allowing enemies more escape window.',
        'Base mana regeneration increased to assist wave clearing.'
      ],
      sourceName: 'Liquipedia MLBB Patch Archive (Secondary Source)',
      sourceUrl: 'https://liquipedia.net/mobilelegends/Patch_1.9.20',
      sourceType: 'secondary',
      verificationStatus: 'verified'
    }
  ],
  zhask: [
    {
      id: 'zhask-1.8.92',
      heroId: 'zhask',
      heroName: 'Zhask',
      patchVersion: 'Patch 1.8.92',
      date: '2024-06-29',
      type: 'revamp',
      title: 'Nightmaric Spawn Death Rays & Skill 3 Revamp',
      affectedSkillOrAttribute: 'Skill 1 (Nightmaric Spawn), Skill 3 (Doppelganger Attack), Ultimate',
      previousValue: 'Spawn attack rate locked to Inspire spell; Ultimate tied to Skill 1 location',
      newValue: 'Spawn continuously fires Death Rays; Skill 3 foreswing reduced by 40%',
      summary: 'Decoupled Spawn effectiveness from Inspire battle spell and optimized ultimate repositioning.',
      details: [
        'Spawn continuously releases Death Rays (counted as basic attacks; frequency no longer strictly tied to attack speed).',
        'Skill 3 foreswing time reduced by 40% with sequential stun strikes.',
        'Skill 3 base damage slightly reduced to compensate for enhanced hit rate and consistency.'
      ],
      sourceName: 'Liquipedia MLBB Patch Archive (Secondary Source)',
      sourceUrl: 'https://liquipedia.net/mobilelegends/Patch_1.8.92',
      sourceType: 'secondary',
      verificationStatus: 'verified'
    }
  ],
  moskov: [
    {
      id: 'moskov-1.8.92',
      heroId: 'moskov',
      heroName: 'Moskov',
      patchVersion: 'Patch 1.8.92',
      date: '2024-06-29',
      type: 'nerf',
      title: 'Move and Attack Late-Game Attack Speed Tuning',
      affectedSkillOrAttribute: 'Skill 1 (Abyss Walker) & Passive (Spear of Quiescence)',
      previousValue: 'Skill 1 Attack Speed bonus: 1.2x-1.5x; Spear penetration damage: 80%-100%',
      newValue: 'Skill 1 Attack Speed bonus: 1.15x-1.4x; Spear penetration damage: 68%-90%',
      summary: 'Tuned down late-game attack speed and penetration damage following the Move and Attack update.',
      details: [
        'Abyss Walker attack speed bonus scaled back in late game.',
        'Passive piercing spear secondary target damage slightly reduced.'
      ],
      sourceName: 'Liquipedia MLBB Patch Archive (Secondary Source)',
      sourceUrl: 'https://liquipedia.net/mobilelegends/Patch_1.8.92',
      sourceType: 'secondary',
      verificationStatus: 'verified'
    }
  ],
  chou: [
    {
      id: 'chou-1.8.92',
      heroId: 'chou',
      heroName: 'Chou',
      patchVersion: 'Patch 1.8.92',
      date: '2024-06-29',
      type: 'adjustment',
      title: 'Shunpo Shield & Jeet Kune Do Physical Scaling',
      affectedSkillOrAttribute: 'Skill 1 (Jeet Kune Do) & Skill 2 (Shunpo)',
      previousValue: 'Shunpo Shield: 200-400 + 150% Extra Phys; Jeet Kune Do base: 180-380',
      newValue: 'Shunpo Shield: 160-360 + 120% Extra Phys; Jeet Kune Do base: 200-400',
      summary: 'Adjusted defensive shield values while buffing base combo strikes to support lane trades.',
      details: [
        'Shunpo shield scaling slightly lowered to disincentivize full-tank roaming abuse.',
        'Jeet Kune Do early base damage increased to assist minion wave clear.'
      ],
      sourceName: 'Liquipedia MLBB Patch Archive (Secondary Source)',
      sourceUrl: 'https://liquipedia.net/mobilelegends/Patch_1.8.92',
      sourceType: 'secondary',
      verificationStatus: 'verified'
    }
  ],
  fredrinn: [
    {
      id: 'fredrinn-1.8.92',
      heroId: 'fredrinn',
      heroName: 'Fredrinn',
      patchVersion: 'Patch 1.8.92',
      date: '2024-06-29',
      type: 'adjustment',
      title: 'Crystalline Armor Crystal Energy Conversion Tuning',
      affectedSkillOrAttribute: 'Passive (Crystalline Armor) & Ultimate (Appraiser’s Wrath)',
      previousValue: 'Crystal Energy conversion: 85% damage received; Ultimate shield: 100% of damage stored',
      newValue: 'Crystal Energy conversion: 75% damage received; Ultimate shield: 85% of damage stored',
      summary: 'Slightly reduced stored grey health and ultimate shield conversion in long teamfights.',
      details: [
        'Grey HP conversion ratio from incoming damage adjusted from 85% to 75%.',
        'Appraiser’s Wrath base execution threshold normalized.'
      ],
      sourceName: 'Liquipedia MLBB Patch Archive (Secondary Source)',
      sourceUrl: 'https://liquipedia.net/mobilelegends/Patch_1.8.92',
      sourceType: 'secondary',
      verificationStatus: 'verified'
    }
  ],
  baxia: [
    {
      id: 'baxia-1.8.92',
      heroId: 'baxia',
      heroName: 'Baxia',
      patchVersion: 'Patch 1.8.92',
      date: '2024-06-29',
      type: 'adjustment',
      title: 'Baxia-Shield Unity Mobility & Creep Clear Scaling',
      affectedSkillOrAttribute: 'Passive (Baxia Mark) & Skill 2 (Shield Slam)',
      previousValue: 'Passive healing reduction: 50%; Creep damage bonus: 140%',
      newValue: 'Passive healing reduction: 45%; Creep damage bonus: 125%',
      summary: 'Normalized anti-heal and jungle clear multipliers following tank jungle dominance.',
      details: [
        'Passive anti-heal debuff standardized at 45% (down from 50%).',
        'Bonus damage to jungle creeps adjusted to balance jungle clear speed.'
      ],
      sourceName: 'Liquipedia MLBB Patch Archive (Secondary Source)',
      sourceUrl: 'https://liquipedia.net/mobilelegends/Patch_1.8.92',
      sourceType: 'secondary',
      verificationStatus: 'verified'
    }
  ],

  // ==========================================
  // MAJOR HISTORICAL REVAMPS & REWORKS (2024 - 2025)
  // ==========================================
  phoveus: [
    {
      id: 'phoveus-1.8.94',
      heroId: 'phoveus',
      heroName: 'Phoveus',
      patchVersion: 'Patch 1.8.94',
      date: '2024-07-31',
      type: 'revamp',
      title: 'Demonic Force Physical Overhaul',
      affectedSkillOrAttribute: 'Complete Hero Kit & Damage Type',
      previousValue: 'Magic Damage reactive counter-pick with static ultimate cooldown',
      newValue: 'Physical Damage bruiser with chaining displacement ultimate',
      summary: 'Shifted from reactive magic counter-pick into an independent physical bruiser with chaining ultimate.',
      details: [
        'Damage type completely shifted from Magic to Physical Damage across all skills.',
        'Passive (Demonic Force): Enhanced basic attack knocks back enemies, grants a shield, and resets whenever nearby enemies blink or get displaced.',
        'Skill 1 (Demonic Impact): Heavy ground slam with slow and mark application.',
        'Skill 2 (Dark Wave): Reworked into an uninterruptible crowd-control displacement wave.',
        'Ultimate (Infernal Pursuit): Removed static cooldown; chains leaps across all tagged targets.'
      ],
      sourceName: 'Liquipedia MLBB Patch Archive (Secondary Source)',
      sourceUrl: 'https://liquipedia.net/mobilelegends/Patch_1.8.94',
      sourceType: 'secondary',
      verificationStatus: 'verified'
    }
  ],
  helcurt: [
    {
      id: 'helcurt-1.8.78',
      heroId: 'helcurt',
      heroName: 'Helcurt',
      patchVersion: 'Patch 1.8.78',
      date: '2024-05-15',
      type: 'revamp',
      title: 'Shadow of Styx Prowler Revamp',
      affectedSkillOrAttribute: 'Passive (Shadow of Styx) & Skill 1 (Hidden Terror)',
      previousValue: 'Silence passive on CC; reliance on basic attack stinger stacking',
      newValue: 'Prowler stealth state in fog/bushes; Terrify on Skill 1 from shadow; kill fog shroud',
      summary: 'Re-engineered into a stealth-based jungle and roam predator with passive regeneration and Terrify CC.',
      details: [
        'Passive (Shadow of Styx): Enters Prowler State when hidden from enemy sight, granting continuous HP regen and speed.',
        'Eliminating an enemy hero spawns a concealment fog shroud on the corpse.',
        'Skill 1 (Hidden Terror): Inflicts Terrify on targets hit when cast from the Prowler State.',
        'Skill 2 (Deadly Stinger): Automatically accumulates stingers over time while in Prowler State.',
        'Ultimate (Dark Night Falls): Shrouds entire enemy team in global darkness.'
      ],
      sourceName: 'Liquipedia MLBB Patch Archive (Secondary Source)',
      sourceUrl: 'https://liquipedia.net/mobilelegends/Patch_1.8.78',
      sourceType: 'secondary',
      verificationStatus: 'verified'
    }
  ],
  aurora: [
    {
      id: 'aurora-1.8.56',
      heroId: 'aurora',
      heroName: 'Aurora',
      patchVersion: 'Patch 1.8.56',
      date: '2024-01-31',
      type: 'revamp',
      title: 'Pride of Ice & Freeze Mastery Revamp',
      affectedSkillOrAttribute: 'Passive (Pride of Ice) & All Active Skills',
      previousValue: 'Stack-based freeze counter; single-target burst focus',
      newValue: 'Self-freeze invulnerability upon fatal damage; Turret freezing; expanding glacier wave',
      summary: 'Overhauled into a massive AoE Control Master featuring built-in self-freeze invulnerability and turret freezing.',
      details: [
        'Passive (Pride of Ice): Replaced stack system with self-freeze invulnerability upon taking fatal damage, recovering 20% max HP.',
        'Freeze mechanics now uniquely freeze enemy Turrets.',
        'Skill 1 (Hailstone Blast): Spawns falling hailstones and multiple ice strikes.',
        'Skill 2 (Frosty Breeze): Frontal cone blowing into an outer frost storm that freezes enemies.',
        'Ultimate (Frigid Glacier): Expansive glacial wave that freezes all targets, with freeze duration scaling with Magic Power.'
      ],
      sourceName: 'Liquipedia MLBB Patch Archive (Secondary Source)',
      sourceUrl: 'https://liquipedia.net/mobilelegends/Patch_1.8.56',
      sourceType: 'secondary',
      verificationStatus: 'verified'
    }
  ],
  granger: [
    {
      id: 'granger-1.9.32',
      heroId: 'granger',
      heroName: 'Granger',
      patchVersion: 'Patch 1.9.32',
      date: '2024-11-06',
      type: 'rework',
      title: 'Capriccio Demonic Energy Overhaul',
      affectedSkillOrAttribute: 'Passive (Capriccio), Skill 1 (Rhapsody), Ultimate (Death Sonata)',
      previousValue: 'Traditional cooldowns with 6-bullet reload cadence',
      newValue: 'Demonic Energy resource system without skill cooldowns',
      summary: 'Replaced traditional cooldowns with Demonic Energy and infinite-firing mobile rhapsody mechanics.',
      details: [
        'Passive (Capriccio): Gun and cannon operate on Demonic Energy; minion/creep kills permanently increase max energy capacity.',
        'Skill 1 (Rhapsody): Removed skill cooldown; continuously casts as long as gun energy is available with increased movement speed.',
        'Skill 2 (Rondo): Repositioning dash that instantly restores a burst of gun energy.',
        'Ultimate (Death Sonata): Operates on cannon energy without standard cooldown constraints.'
      ],
      sourceName: 'Liquipedia MLBB Patch Archive (Secondary Source)',
      sourceUrl: 'https://liquipedia.net/mobilelegends/Patch_1.9.32',
      sourceType: 'secondary',
      verificationStatus: 'verified'
    }
  ],
  alice: [
    {
      id: 'alice-1.9.14',
      heroId: 'alice',
      heroName: 'Alice',
      patchVersion: 'Patch 1.9.14',
      date: '2024-09-17',
      type: 'rework',
      title: 'Queen of Blood Tank/Initiator Rework',
      affectedSkillOrAttribute: 'Primary Role & Complete Kit',
      previousValue: 'Mage mana consumer reliant strictly on Clock of Destiny and Lightning Truncheon',
      newValue: 'Tank/Initiator with Blood Banquet passive and wall-snapping teleportation',
      summary: 'Shifted from late-game mana consumer into a durable Tank/Initiator with Blood Banquet passive.',
      details: [
        'Passive (Blood Banquet): Stacking skill hits triggers continuous AoE life drain and movement speed.',
        'Skill 1 (Flowing Blood): Teleport projectile can auto-snap to wall edges for terrain crossing.',
        'Ultimate: Channeled damage reduction state releasing an expansive AoE immobilize burst.'
      ],
      sourceName: 'Liquipedia MLBB Patch Archive (Secondary Source)',
      sourceUrl: 'https://liquipedia.net/mobilelegends/Patch_1.9.14',
      sourceType: 'secondary',
      verificationStatus: 'verified'
    }
  ],
  kimmy: [
    {
      id: 'kimmy-1.9.68',
      heroId: 'kimmy',
      heroName: 'Kimmy',
      patchVersion: 'Patch 1.9.68',
      date: '2025-04-22',
      type: 'revamp',
      title: 'Starlium Piercing & Aerial Dominance Revamp',
      affectedSkillOrAttribute: 'Complete Hero Kit & Attack Speed Conversion',
      previousValue: 'Hybrid physical/magic dual-stick shooter using energy',
      newValue: 'Magic-Damage Marksman with Starlium resource and jetpack terrain flight',
      summary: 'Complete revamp turning Kimmy into an agile Magic-Damage Marksman with jetpack flight.',
      details: [
        'Passive (Aerial Dominance): Spray Gun deals Magic Damage and builds Starlium; attack speed converted into Magic Power (1% AS = 1 MP).',
        'Skill 1 (Anti-Grav Thruster): Jetpack flight passing through terrain while firing Chemical Bolts.',
        'Skill 2 (Starlium Beam): Directional beam dealing Magic Damage and immobilizing enemies in path.',
        'Ultimate (Traction Pulse): Expanding force field slowing enemies before pulling them inward.'
      ],
      sourceName: 'Liquipedia MLBB Patch Archive (Secondary Source)',
      sourceUrl: 'https://liquipedia.net/mobilelegends/Patch_1.9.68',
      sourceType: 'secondary',
      verificationStatus: 'verified'
    }
  ],
  gloo: [
    {
      id: 'gloo-2.2.23',
      heroId: 'gloo',
      heroName: 'Gloo',
      patchVersion: 'Patch 2.2.23',
      date: '2026-11-11',
      type: 'nerf',
      title: 'Slam Immobilize, Explosion Damage & Ultimate Damage Transfer Nerf',
      affectedSkillOrAttribute: 'Skill 1, Skill 3 (Ultimate)',
      previousValue: 'Skill 1 Immobilizing Time: 0.8s; Explosion Damage: 250–400 (+12% Extra HP); Skill 3 Damage Transfer Ratio: 80%',
      newValue: 'Skill 1 Immobilizing Time: 0.6s; Explosion Damage: 230–380 (+11% Extra HP); Skill 3 Damage Transfer Ratio: 60%',
      summary: 'Toned down Gloo’s control duration, Skill 1 explosion damage, and Ultimate damage transfer ratio to give opponents more counterplay.',
      details: [
        'Skill 1 Immobilizing Time reduced from 0.8s to 0.6s.',
        'Skill 1 Explosion Damage reduced from 250–400 (+12% Extra HP) to 230–380 (+11% Extra HP).',
        'Skill 3 (Ultimate) Damage Transfer Ratio reduced from 80% to 60%.'
      ],
      sourceName: 'MLBBHub Patch Archive (Secondary Source)',
      sourceUrl: 'https://mlbbhub.com/patch-notes/original/2.2.23',
      sourceType: 'secondary',
      verificationStatus: 'verified',
      serverType: 'original'
    },
    {
      id: 'gloo-1.9.68',
      heroId: 'gloo',
      heroName: 'Gloo',
      patchVersion: 'Patch 1.9.68',
      date: '2025-04-22',
      type: 'revamp',
      title: 'Sticky Stacks & Goo Detonation Fluidity Revamp',
      affectedSkillOrAttribute: 'Passive (Stick, Stick), Skill 1 (Slam, Slam), Skill 2 (Spread, Spread)',
      previousValue: 'Rigid attachment conditions and clunky goo collision checks',
      newValue: 'Seamless Goo touch cooldown resets and fan-shaped crowd control',
      summary: 'Optimized interactions allowing instant cooldown resets when touching Goos and smooth ultimate hosting.',
      details: [
        'Passive (Stick, Stick): Reduces enemy movement speed up to 5 stacks while reducing damage dealt to Gloo.',
        'Skill 1 (Slam, Slam): Touching the dropped Goo immediately detonates it, resets cooldown, and heals Gloo.',
        'Skill 2 (Spread, Spread): Fan-shaped split charging and dragging targets into existing Goos.'
      ],
      sourceName: 'Liquipedia MLBB Patch Archive (Secondary Source)',
      sourceUrl: 'https://liquipedia.net/mobilelegends/Patch_1.9.68',
      sourceType: 'secondary',
      verificationStatus: 'verified'
    }
  ],
  ling: [
    {
      id: 'ling-1.8.78',
      heroId: 'ling',
      heroName: 'Ling',
      patchVersion: 'Patch 1.8.78',
      date: '2024-05-15',
      type: 'buff',
      title: 'Critical Strike Multiplier & Energy Cost Optimization',
      affectedSkillOrAttribute: 'Passive (Cloud Walker), Skill 1 (Finch Poise), Skill 2 (Defiant Sword)',
      previousValue: 'Crit multiplier: 1.5x; Skill 2 base: 250-350 + 33% Total Phys; Energy cost: 40',
      newValue: 'Crit multiplier: 1.6x; Skill 2 base: 300-400 + 50% Total Phys; Energy cost: 35',
      summary: 'Shifted Ling toward critical-based builds while lowering energy costs to synchronize with buff changes.',
      details: [
        'Passive crit chance gain multiplier increased from 1.5x to 1.6x.',
        'Skill 1 Finch Poise crit chance increased to 2.5%–12.5%.',
        'Skill 2 Defiant Sword base damage increased and energy cost lowered from 40 to 35.'
      ],
      sourceName: 'Liquipedia MLBB Patch Archive (Secondary Source)',
      sourceUrl: 'https://liquipedia.net/mobilelegends/Patch_1.8.78',
      sourceType: 'secondary',
      verificationStatus: 'verified'
    }
  ],
  balmond: [
    {
      id: 'balmond-1.8.44',
      heroId: 'balmond',
      heroName: 'Balmond',
      patchVersion: 'Patch 1.8.44',
      date: '2023-12-23',
      type: 'buff',
      title: 'Cyclone Sweep & Lethal Counter Crowd Control Immunity',
      affectedSkillOrAttribute: 'Skill 2 (Cyclone Sweep) & Ultimate (Lethal Counter)',
      previousValue: 'Cyclone Sweep and Lethal Counter interruptible by stuns/knockups; CD: 28-18s',
      newValue: 'Cyclone Sweep and Lethal Counter cannot be interrupted by CC; Ultimate CD: 34-24s',
      summary: 'Added crowd control immunity to Cyclone Sweep and Lethal Counter, preventing interrupt cancellation.',
      details: [
        'Skill 2 (Cyclone Sweep) can no longer be interrupted by Crowd Control and grants decaying movement speed.',
        'Ultimate (Lethal Counter) cannot be interrupted by CC; visual effects and range expanded.',
        'Ultimate cooldown adjusted from 28–18s to 34–24s to balance unstoppable execution.'
      ],
      sourceName: 'Liquipedia MLBB Patch Archive (Secondary Source)',
      sourceUrl: 'https://liquipedia.net/mobilelegends/Patch_1.8.44',
      sourceType: 'secondary',
      verificationStatus: 'verified'
    }
  ],
  nana: [
    {
      id: 'nana-1.8.44',
      heroId: 'nana',
      heroName: 'Nana',
      patchVersion: 'Patch 1.8.44',
      date: '2023-12-23',
      type: 'buff',
      title: 'Multi-Target Molina Transformation & Ultimate Flow',
      affectedSkillOrAttribute: 'Skill 2 (Molina’s Mischief) & Ultimate (Molina Blitz)',
      previousValue: 'Skill 2 single-target chase transformation; 50%-70% slow',
      newValue: 'Skill 2 AoE transformation area; 30% slow; lingering trap if no hero caught',
      summary: 'Reworked Molina into an area transformation trap affecting all enemies within the circle.',
      details: [
        'Skill 2 transforms all enemy heroes in the target area upon deployment.',
        'If no enemy is caught, Molina lingers for 3 seconds as a zone denial trap.',
        'Ultimate control pacing optimized across all three blast stages.'
      ],
      sourceName: 'Liquipedia MLBB Patch Archive (Secondary Source)',
      sourceUrl: 'https://liquipedia.net/mobilelegends/Patch_1.8.44',
      sourceType: 'secondary',
      verificationStatus: 'verified'
    }
  ],
  barats: [
    {
      id: 'barats-1.8.44',
      heroId: 'barats',
      heroName: 'Barats',
      patchVersion: 'Patch 1.8.44',
      date: '2023-12-23',
      type: 'buff',
      title: 'Big Guy Stack Retention & Detona’s Welcome Range',
      affectedSkillOrAttribute: 'Passive (Big Guy) & Ultimate (Detona’s Welcome)',
      previousValue: 'Stacks dropped quickly out of combat; Ultimate short-range grab',
      newValue: 'Stacks decay gradually; Ultimate long-range directional devour with instant suppression',
      summary: 'Streamlined stack maintenance and upgraded ultimate into a directional long-range devour.',
      details: [
        'Big Guy stacks drop one by one rather than resetting all at once out of combat.',
        'Ultimate cast range significantly increased, granting CC immunity during devour channel.'
      ],
      sourceName: 'Liquipedia MLBB Patch Archive (Secondary Source)',
      sourceUrl: 'https://liquipedia.net/mobilelegends/Patch_1.8.44',
      sourceType: 'secondary',
      verificationStatus: 'verified'
    }
  ],
  lunox: [
    {
      id: 'lunox-2.2.23',
      heroId: 'lunox',
      heroName: 'Lunox',
      patchVersion: 'Patch 2.2.23',
      date: '2026-11-11',
      type: 'buff',
      title: 'Passive Order/Chaos Immediate Bonus & Early-Game Chaos Buff',
      affectedSkillOrAttribute: 'Passive (Dreamland Twist), Skill 2 (Power of Chaos), Ultimate (Power of Chaos)',
      previousValue: 'Skill 2 Extra % Damage: 2.5%–5% (1.5%–3% to creeps); Ultimate (Chaos) Damage: 250–450 (+100% Total Magic Power)',
      newValue: 'Passive grants 10% Spell Vamp (Order) or 10% Magic PEN (Chaos); Skill 2 Extra % Damage: 3.5%–5% (2.1%–3% to creeps); Ultimate (Chaos) foreswing -50%, Damage: 150–300 (+135% Total Magic Power)',
      summary: 'Adjusted Lunox’s Passive to provide immediate early-to-mid game Spell Vamp or Magic Penetration, boosted early Skill 2 % HP damage, and tuned Ultimate (Power of Chaos) dash responsiveness and scaling.',
      details: [
        'Passive: When balance is shifted to the Power of Order, immediately gain 10% Spell Vamp; when shifted to the Power of Chaos, immediately gain 10% Magic Penetration.',
        'Skill 2 (Power of Chaos) Extra Percentage Damage increased from 2.5%–5% to 3.5%–5%.',
        'Skill 2 (Power of Chaos) Percentage of Extra Damage to Creeps increased from 1.5%–3% to 2.1%–3%.',
        "Ultimate (Power of Chaos): Reduced the dash's foreswing time by 50%.",
        'Ultimate (Power of Chaos) Damage adjusted from 250–450 (+100% Total Magic Power) to 150–300 (+135% Total Magic Power).'
      ],
      sourceName: 'MLBBHub Patch Archive (Secondary Source)',
      sourceUrl: 'https://mlbbhub.com/patch-notes/original/2.2.23',
      sourceType: 'secondary',
      verificationStatus: 'verified',
      serverType: 'original'
    },
    {
      id: 'lunox-1.8.44',
      heroId: 'lunox',
      heroName: 'Lunox',
      patchVersion: 'Patch 1.8.44',
      date: '2023-12-23',
      type: 'adjustment',
      title: 'Chaos and Order Transformation Flow Optimization',
      affectedSkillOrAttribute: 'Passive (Dreamland Twist) & Ultimate (Order & Chaos)',
      previousValue: 'Complex 2-orb alignment requirement for ultimate swap',
      newValue: 'Single-skill activation switching directly between Brilliance and Darkening',
      summary: 'Simplified orb alignment mechanics to allow rapid transition between invulnerability and burst.',
      details: [
        'Transition between Order and Chaos streamlined into a responsive state switch.',
        'Chaos Assault continuous cast fluidity improved.'
      ],
      sourceName: 'Liquipedia MLBB Patch Archive (Secondary Source)',
      sourceUrl: 'https://liquipedia.net/mobilelegends/Patch_1.8.44',
      sourceType: 'secondary',
      verificationStatus: 'verified'
    }
  ],
  tigreal: [
    {
      id: 'tigreal-1.8.30',
      heroId: 'tigreal',
      heroName: 'Tigreal',
      patchVersion: 'Patch 1.8.30',
      date: '2023-10-24',
      type: 'buff',
      title: 'Implosion Pull Stun & Interruptibility Protection',
      affectedSkillOrAttribute: 'Ultimate (Implosion)',
      previousValue: 'Implosion could be interrupted by any enemy hero during channeling',
      newValue: 'Implosion can only be interrupted by enemies outside the ultimate radius; initial pull stuns',
      summary: 'Protected Implosion from being easily interrupted by targets caught within the pull radius.',
      details: [
        'Enemies caught in the first stage of Implosion are stunned and cannot interrupt the ultimate channel.',
        'Only enemy heroes outside the ultimate area of effect can disrupt the final slam.'
      ],
      sourceName: 'Liquipedia MLBB Patch Archive (Secondary Source)',
      sourceUrl: 'https://liquipedia.net/mobilelegends/Patch_1.8.30',
      sourceType: 'secondary',
      verificationStatus: 'verified'
    }
  ],
  mathilda: [
    {
      id: 'mathilda-1.8.20',
      heroId: 'mathilda',
      heroName: 'Mathilda',
      patchVersion: 'Patch 1.8.20',
      date: '2023-09-19',
      type: 'buff',
      title: 'Soul Bloom Subsequent Hit Damage & Circling Eagle Repositioning',
      affectedSkillOrAttribute: 'Skill 1 (Soul Bloom) & Ultimate (Circling Eagle)',
      previousValue: 'Soul Bloom: 350–625 + 100% Magic Power; subsequent wisp damage decay: 20%',
      newValue: 'Soul Bloom: 275–500 + 80% Magic Power; subsequent wisp damage decay: 40%; damage at 3 wisps unchanged; wisp duration slightly increased',
      summary: 'Adjusted Soul Bloom damage scaling and decay to reward higher wisp stacks while granting flexible directional control on Circling Eagle.',
      details: [
        'Damage: 350–625 + 100% Magic Power → 275–500 + 80% Magic Power.',
        'Subsequent wisp damage decay: 20% → 40%.',
        'Damage at three wisps remains unchanged.',
        'Wisp duration was slightly increased.',
        'Ultimate allows second-cast directional dash without forcing an immediate collision.'
      ],
      sourceName: 'Liquipedia MLBB Patch Archive (Secondary Source)',
      sourceUrl: 'https://liquipedia.net/mobilelegends/Patch_1.8.20',
      sourceType: 'secondary',
      verificationStatus: 'verified'
    }
  ],
  nolan: [
    {
      id: 'nolan-1.8.20',
      heroId: 'nolan',
      heroName: 'Nolan',
      patchVersion: 'Patch 1.8.20',
      date: '2023-09-19',
      type: 'adjustment',
      title: 'Hero Release: Cosmic Wayfinder',
      affectedSkillOrAttribute: 'Complete Hero Kit',
      previousValue: 'Advance Server Testing',
      newValue: 'Original Server Official Debut',
      summary: 'Introduced as an agile energy-based Assassin manipulating dimensional space rifts.',
      details: [
        'Passive: Cosmic Rift cuts through space; overlapping rifts explode and pull enemies in.',
        'Expansion and Gauge provide rapid low-cooldown spatial slicing.',
        'Fracture ultimate cleanses all crowd control debuffs while slashing three spatial rifts.'
      ],
      sourceName: 'Liquipedia MLBB Patch Archive (Secondary Source)',
      sourceUrl: 'https://liquipedia.net/mobilelegends/Patch_1.8.20',
      sourceType: 'secondary',
      verificationStatus: 'verified'
    }
  ],
  floryn: [
    {
      id: 'floryn-1.8.20',
      heroId: 'floryn',
      heroName: 'Floryn',
      patchVersion: 'Patch 1.8.20',
      date: '2023-09-19',
      type: 'buff',
      title: 'Dew’s Lantern Evolution & Global Anti-Antiheal Cleansing',
      affectedSkillOrAttribute: 'Passive (Dew) & Ultimate (Bloom)',
      previousValue: 'Bloom heal reduced by enemy anti-heal items',
      newValue: 'Bloom removes healing reduction and anti-heal effects prior to healing',
      summary: 'Equipped Bloom with anti-heal removal to make her global heals reliable in competitive drafts.',
      details: [
        'Ultimate cleanses healing reduction effects on all allied heroes globally before applying the heal.',
        'Dew’s Lantern stat sharing values optimized for modern Support equipment (Flask of the Oasis).'
      ],
      sourceName: 'Liquipedia MLBB Patch Archive (Secondary Source)',
      sourceUrl: 'https://liquipedia.net/mobilelegends/Patch_1.8.20',
      sourceType: 'secondary',
      verificationStatus: 'verified'
    }
  ],
  chip: [
    {
      id: 'chip-1.8.66',
      heroId: 'chip',
      heroName: 'Chip',
      patchVersion: 'Patch 1.8.66',
      date: '2024-03-16',
      type: 'adjustment',
      title: 'Hero Release: Phase Technician',
      affectedSkillOrAttribute: 'Complete Hero Kit',
      previousValue: 'Advance Server Testing',
      newValue: 'Original Server Official Debut',
      summary: 'Introduced as a unique Support/Tank capable of opening team-wide dimensional teleport portals.',
      details: [
        'Main Portal ultimate creates linked wormholes across the map for allied response or enemy ambushes.',
        'Overtime potato snack passive periodically heals Chip while out of combat.',
        'Crash Course provides area-of-effect stuns and bonus shield values.'
      ],
      sourceName: 'Liquipedia MLBB Patch Archive (Secondary Source)',
      sourceUrl: 'https://liquipedia.net/mobilelegends/Patch_1.8.66',
      sourceType: 'secondary',
      verificationStatus: 'verified'
    }
  ],
  joy: [
    {
      id: 'joy-1.7.82b',
      heroId: 'joy',
      heroName: 'Joy',
      patchVersion: 'Patch 1.7.82B',
      date: '2023-05-30',
      type: 'nerf',
      title: 'Early Game Passive Scaling & Electrifying Beats Base Damage',
      affectedSkillOrAttribute: 'Passive (Humph, Joy’s Angry!) & Ultimate (Ha, Electrifying Beats!)',
      previousValue: 'Passive base damage: 160-300 + 80% Magic Power; Ultimate: 180-270 base',
      newValue: 'Passive base damage: 130-260 + 65% Magic Power; Ultimate: 150-240 base',
      summary: 'Reduced early-to-mid game burst damage to curb uncontested lane dominance.',
      details: [
        'Passive damage scaling lowered across levels 1-15.',
        'Ultimate base damage per beat slightly reduced to offer counterplay.'
      ],
      sourceName: 'Liquipedia MLBB Patch Archive (Secondary Source)',
      sourceUrl: 'https://liquipedia.net/mobilelegends/Patch_1.7.82B',
      sourceType: 'secondary',
      verificationStatus: 'verified'
    }
  ],
  arlott: [
    {
      id: 'arlott-1.7.82b',
      heroId: 'arlott',
      heroName: 'Arlott',
      patchVersion: 'Patch 1.7.82B',
      date: '2023-05-30',
      type: 'nerf',
      title: 'Vengeance Base Damage Reduction for Tank Builds',
      affectedSkillOrAttribute: 'Skill 2 (Vengeance)',
      previousValue: 'Base Damage: 160-360 + 60% Total Physical Attack',
      newValue: 'Base Damage: 135-310 + 60% Total Physical Attack',
      summary: 'Lowered base skill damage to discourage defensive full-tank builds without physical investment.',
      details: [
        'Skill 2 base damage lowered across all skill ranks.',
        'Encourages offensive item building rather than pure defensive roaming.'
      ],
      sourceName: 'Liquipedia MLBB Patch Archive (Secondary Source)',
      sourceUrl: 'https://liquipedia.net/mobilelegends/Patch_1.7.82B',
      sourceType: 'secondary',
      verificationStatus: 'verified'
    }
  ],
  alpha: [
    {
      id: 'alpha-1.8.08',
      heroId: 'alpha',
      heroName: 'Alpha',
      patchVersion: 'Patch 1.8.08',
      date: '2023-08-08',
      type: 'nerf',
      title: 'Beta True Damage Scaling & Rotary Impact Cooldown',
      affectedSkillOrAttribute: 'Passive (Beta, Advance!) & Skill 2 (Force Swing)',
      previousValue: 'Beta True Damage: 150 + 100% Total Phys; Skill 2 HP Regen: 120-220',
      newValue: 'Beta True Damage: 125 + 85% Total Phys; Skill 2 HP Regen: 100-200',
      summary: 'Scaled back early true damage and sustain following emblem system optimizations.',
      details: [
        'Beta strafing strike true damage scaling reduced from 100% to 85% Total Physical Attack.',
        'Skill 2 base HP regeneration per hit slightly reduced in early levels.'
      ],
      sourceName: 'Liquipedia MLBB Patch Archive (Secondary Source)',
      sourceUrl: 'https://liquipedia.net/mobilelegends/Patch_1.8.08',
      sourceType: 'secondary',
      verificationStatus: 'verified'
    }
  ],
  freya: [
    {
      id: 'freya-2.2.23',
      heroId: 'freya',
      heroName: 'Freya',
      patchVersion: 'Patch 2.2.23',
      date: '2026-11-11',
      type: 'buff',
      title: 'Passive Sacred Orb Sustain & Ultimate Power Rebalancing',
      affectedSkillOrAttribute: 'Passive (Power of Einherjar), Ultimate (Valkyrie Descent)',
      previousValue: 'Passive: no Sacred Orb HP recovery; Ultimate Cooldown: 44–28s; Basic Attack regen during Ult; Enhanced Basic Attack Damage: 30–60 (+100% Total Physical Attack)',
      newValue: 'Passive: Sacred Orb consumption recovers 20 (+3 * Hero Level) (+20% Total Physical Attack) HP; Ultimate Cooldown: 60–44s, +30 Movement Speed, Enhanced Basic Attack Damage: 100–200 (+70% Total Physical Attack)',
      summary: 'Strengthened Freya’s non-Ultimate EXP Lane sustain via Passive HP recovery on Sacred Orb consumption while increasing Ultimate cooldown and shifting Ultimate Basic Attack damage.',
      details: [
        'Passive (Power of Einherjar): Consuming a Sacred Orb causes the next Basic Attack to recover 20 (+3 * Hero Level) (+20% Total Physical Attack) HP.',
        'Ultimate (Valkyrie Descent) Cooldown: Increased from 44–28s to 60–44s.',
        'Ultimate: Removed the HP Regen effect from Basic Attacks during the Ultimate.',
        'Ultimate Damage of Enhanced Basic Attack: Adjusted from 30–60 (+100% Total Physical Attack) to 100–200 (+70% Total Physical Attack).',
        'Ultimate New Effect: Gains 30 Movement Speed while the Ultimate is active.'
      ],
      sourceName: 'MLBBHub Patch Archive (Secondary Source)',
      sourceUrl: 'https://mlbbhub.com/patch-notes/original/2.2.23',
      sourceType: 'secondary',
      verificationStatus: 'verified',
      serverType: 'original'
    },
    {
      id: 'freya-2.1.30',
      heroId: 'freya',
      heroName: 'Freya',
      patchVersion: 'Patch 2.1.30',
      date: '2025-11-04',
      type: 'adjustment',
      title: 'Valkyrie Activation & Skill 2 Sacred Orb Optimization',
      affectedSkillOrAttribute: 'Skill 2 (Spirit Combo) & Ultimate (Valkyrie Descent)',
      previousValue: 'Skill 2 combo strictly dependent on pre-stacking Sacred Orbs on minion waves',
      newValue: 'Valkyrie Descent grants instant max Sacred Orbs and shield scaling',
      summary: 'Relaxed Skill 2 cast conditions and streamlined fast Valkyrie state activation for team initiations.',
      details: [
        'Skill 2 orb consumption smoothed; no longer strictly reliant on clearing waves prior to engaging.',
        'Ultimate activation grants instant Sacred Orbs and shield scaling.'
      ],
      sourceName: 'Liquipedia MLBB Patch Archive (Secondary Source)',
      sourceUrl: 'https://liquipedia.net/mobilelegends/Patch_2.1.30',
      sourceType: 'secondary',
      verificationStatus: 'verified'
    }
  ],
  kaja: [
    {
      id: 'kaja-2.2.23',
      heroId: 'kaja',
      heroName: 'Kaja',
      patchVersion: 'Patch 2.2.23',
      date: '2026-11-11',
      type: 'buff',
      title: 'Soaring Mobility Extensions & Control-Immunity-Proof Ultimate Area',
      affectedSkillOrAttribute: 'Skill 2 (Soaring Wings), Ultimate (Divine Binding)',
      previousValue: 'Skill 2 Soaring state had slower turning and no duration extension on Basic Attacks/minion hits; Control Immunity could escape Ultimate area',
      newValue: 'Improved Soaring turning speed & duration extension on enhanced Basic Attacks and Skill 2 minion hits; slight Ultimate delay increase; Control Immunity cannot escape Ultimate area',
      summary: 'Added ways for Kaja to extend his Soaring state and improved turning speed while Soaring, while adjusting Ultimate counterplay by slightly increasing delay and preventing Control Immunity escapes once triggered.',
      details: [
        "Skill 2: Increased Kaja's turning speed while Soaring for more responsive controls.",
        "Skill 2 New Effect: While Soaring, enhanced Basic Attacks extend the state's duration slightly when they hit enemies.",
        "Skill 2 New Effect: While Soaring, hitting enemy minions with Skill 2 now also extends the state's duration.",
        "Ultimate: Slightly increased the Ultimate's delay.",
        "Ultimate New Effect: Targets with Control Immunity can no longer escape the Ultimate's area when it takes effect."
      ],
      sourceName: 'MLBBHub Patch Archive (Secondary Source)',
      sourceUrl: 'https://mlbbhub.com/patch-notes/original/2.2.23',
      sourceType: 'secondary',
      verificationStatus: 'verified',
      serverType: 'original'
    },
    {
      id: 'kaja-1.9.90',
      heroId: 'kaja',
      heroName: 'Kaja',
      patchVersion: 'Patch 1.9.90',
      date: '2025-06-18',
      type: 'adjustment',
      title: 'Primal Lightning Roam Support Focus',
      affectedSkillOrAttribute: 'Passive (Wrath Sanction) & Ultimate (Divine Judgment)',
      previousValue: 'Passive debuff: 18% damage reduction; Ultimate range: 2.5 units',
      newValue: 'Passive debuff: Up to 24% damage reduction; Ultimate range: 2.8 units',
      summary: 'Strengthened Roam utility and magic-power-scaling team heals.',
      details: [
        'Passive (Wrath Sanction): Paralyze debuff reduces enemy damage dealt by up to 24%.',
        'Ultimate (Divine Judgment): Unbreakable suppression displacement with increased cast range.'
      ],
      sourceName: 'Liquipedia MLBB Patch Archive (Secondary Source)',
      sourceUrl: 'https://liquipedia.net/mobilelegends/Patch_1.9.90',
      sourceType: 'secondary',
      verificationStatus: 'verified',
      serverType: 'original'
    }
  ],
  sora: [
    {
      id: 'sora-2.1.40',
      heroId: 'sora',
      heroName: 'Sora',
      patchVersion: 'Patch 2.1.40',
      date: '2025-12-18',
      type: 'adjustment',
      title: 'Hero Release: Shifting Cloud',
      affectedSkillOrAttribute: 'Complete Hero Kit',
      previousValue: 'Advance Server Testing',
      newValue: 'Original Server Official Debut',
      summary: 'Introduced as an aerial martial fighter executing fluid aerial combos and wind barrier parries.',
      details: [
        'Passive: Aerial strikes grant temporary immunity to displacement during dash executions.',
        'Wind Barrier parries physical projectiles and redirects damage into a forward gale strike.',
        'Skyward Cleave ultimate launches targets into the air before slamming back down.'
      ],
      sourceName: 'Liquipedia MLBB Patch Archive (Secondary Source)',
      sourceUrl: 'https://liquipedia.net/mobilelegends/Patch_2.1.40',
      sourceType: 'secondary',
      verificationStatus: 'verified'
    }
  ],
  zetian: [
    {
      id: 'zetian-1.9.90',
      heroId: 'zetian',
      heroName: 'Zetian',
      patchVersion: 'Patch 1.9.90',
      date: '2025-06-18',
      type: 'adjustment',
      title: 'Hero Release: Celestial Empress',
      affectedSkillOrAttribute: 'Complete Hero Kit',
      previousValue: 'Advance Server Testing',
      newValue: 'Original Server Official Debut',
      summary: 'Introduced as an imperial control Mage from Cadia Riverlands raining cosmic decrees.',
      details: [
        'Imperial Decrees apply celestial marks detonating for magic burst upon subsequent hits.',
        'Cosmic Ward provides directional damage absorption.',
        'Sovereign Authority ultimate summons imperial pillars locking down enemy movement in target zones.'
      ],
      sourceName: 'Liquipedia MLBB Patch Archive (Secondary Source)',
      sourceUrl: 'https://liquipedia.net/mobilelegends/Patch_1.9.90',
      sourceType: 'secondary',
      verificationStatus: 'verified'
    }
  ],
  obsidia: [
    {
      id: 'obsidia-1.9.91',
      heroId: 'obsidia',
      heroName: 'Obsidia',
      patchVersion: 'Patch 1.9.91',
      date: '2025-09-20',
      type: 'adjustment',
      title: 'Hero Release: Ancient Sovereign of the Abyss',
      affectedSkillOrAttribute: 'Complete Hero Kit',
      previousValue: 'Advance Server Testing',
      newValue: 'Original Server Official Debut',
      summary: 'Introduced as an Abyssal crystalline Marksman piercing high-defense frontlines.',
      details: [
        'Crystalline Shards pierce through primary targets to hit secondary enemies behind.',
        'Abyssal Prism grants temporary movement speed and explosive detonation stacks.',
        'Obsidian Cataclysm ultimate fires a high-velocity crystalline spear rooting the first champion hit.'
      ],
      sourceName: 'Liquipedia MLBB Patch Archive (Secondary Source)',
      sourceUrl: 'https://liquipedia.net/mobilelegends/Patch_1.9.91',
      sourceType: 'secondary',
      verificationStatus: 'verified'
    }
  ]
};

/**
 * Returns historical patch changes for a hero, ordered by release date descending.
 * Returns an empty array if no specific patch changes are indexed for the hero.
 */
export function getHeroPatchHistory(heroId: string): HeroPatchChange[] {
  const records = HERO_PATCH_HISTORY[heroId] || [];
  return [...records].sort((a, b) => b.date.localeCompare(a.date));
}

/**
 * Returns the most recent verified patch change for a hero, if any exists.
 */
export function getLatestHeroPatchChange(heroId: string): HeroPatchChange | undefined {
  const history = getHeroPatchHistory(heroId);
  return history[0];
}

/**
 * Flattens all patch changes across all heroes into a single chronologically sorted list.
 */
export function getAllPatchChanges(): HeroPatchChange[] {
  const all: HeroPatchChange[] = [];
  for (const heroId in HERO_PATCH_HISTORY) {
    all.push(...HERO_PATCH_HISTORY[heroId]);
  }
  return all.sort((a, b) => b.date.localeCompare(a.date));
}

/**
 * Retrieves all hero balance changes for a specific patch version.
 */
export function getPatchChangesByPatchVersion(patchVersion: string): HeroPatchChange[] {
  return getAllPatchChanges().filter((c) => c.patchVersion.toLowerCase() === patchVersion.toLowerCase());
}

/**
 * Helper to dynamically register a new patch change for maintenance.
 * Validates against duplicate insertion and enforces server isolation.
 */
export function addHeroPatchChange(change: HeroPatchChange): boolean {
  if (!change.heroId || !change.patchVersion) return false;
  if (!HERO_PATCH_HISTORY[change.heroId]) {
    HERO_PATCH_HISTORY[change.heroId] = [];
  }
  const existing = HERO_PATCH_HISTORY[change.heroId];
  const isDuplicate = existing.some(
    (p) =>
      p.patchVersion === change.patchVersion &&
      p.affectedSkillOrAttribute === change.affectedSkillOrAttribute
  );
  if (isDuplicate) {
    return false;
  }
  existing.unshift(change);
  return true;
}

/**
 * Returns a list of hero IDs that do NOT currently have a documented balance change
 * in the specified patch version, helping identify records that require review.
 */
export function getHeroesNeedingPatchAudit(patchVersion: string, allHeroIds: string[]): string[] {
  const coveredHeroes = new Set<string>();
  for (const heroId in HERO_PATCH_HISTORY) {
    if (HERO_PATCH_HISTORY[heroId].some((p) => p.patchVersion.toLowerCase() === patchVersion.toLowerCase())) {
      coveredHeroes.add(heroId);
    }
  }
  return allHeroIds.filter((id) => !coveredHeroes.has(id));
}

/**
 * Retrieves pending Advance Server changes (isolated from confirmed Original Server history).
 */
export function getAdvanceServerPendingChanges(): HeroPatchChange[] {
  return getAllPatchChanges().filter((c) => c.serverType === 'advance');
}
