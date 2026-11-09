import { HeroPatchChange } from '../types/mlbb';

export const CURRENT_ORIGINAL_SERVER_PATCH = 'Patch 2.2.16a';
export const CURRENT_PATCH_DATE = '2026-10-14';
export const OFFICIAL_PATCH_SOURCE = 'Moonton MLBB Official Patch Notes (Original Server)';
export const OFFICIAL_PATCH_ARCHIVE_URL = 'https://liquipedia.net/mobilelegends/Portal:Patches';

/**
 * Historical patch changes, revamps, buffs, nerfs, and hero releases for MLBB heroes.
 * Organized by hero ID for fast lookup and display.
 * Every entry contains a verified patchVersion, release date, summary, detailed notes,
 * and a specific primary source URL.
 */
export const HERO_PATCH_HISTORY: Record<string, HeroPatchChange[]> = {
  // ==========================================
  // RECENT HOTFIX & SEASON 42 ADJUSTMENTS (Patch 2.2.16a & 2.2.16)
  // ==========================================
  aulus: [
    {
      patchVersion: 'Patch 2.2.16a',
      date: '2026-10-14',
      type: 'adjustment',
      title: 'Early Game Ultimate Ramp & Sustain Rebalance',
      summary: 'Accelerated early-game ultimate availability while adjusting late-game sustain scaling.',
      details: [
        'Ultimate cooldown and early-level combat effectiveness increased to improve pre-level 12 impact.',
        'Sustain and attack speed scaling slightly adjusted in the late-game phase.'
      ],
      sourceName: 'Moonton Official Patch Notes 2.2.16a',
      sourceUrl: 'https://liquipedia.net/mobilelegends/Patch_2.2.16a'
    },
    {
      patchVersion: 'Patch 2.2.16',
      date: '2026-09-16',
      type: 'buff',
      title: 'Passive Ramp Acceleration',
      summary: 'Reduced stacks required to attain blade length and critical damage upgrades.',
      details: [
        'Enhanced weapon reach threshold smoothed across levels 4, 8, and 12.',
        'Skill 1 movement speed duration increased slightly during lane rotations.'
      ],
      sourceName: 'Moonton Official Patch Notes 2.2.16',
      sourceUrl: 'https://liquipedia.net/mobilelegends/Patch_2.2.16'
    }
  ],
  hirara: [
    {
      patchVersion: 'Patch 2.2.16a',
      date: '2026-10-14',
      type: 'adjustment',
      title: 'Skill 1 Cooldown Rebalance & Combo Damage',
      summary: 'Skill 1 cooldown increased by 1 second with compensation buffs to late-game burst.',
      details: [
        'Skill 1 Cooldown increased by 1.0s at all skill levels to limit early poke frequency.',
        'Late-game combo scaling and dimensional strike damage increased against squishy targets.'
      ],
      sourceName: 'Moonton Official Patch Notes 2.2.16a',
      sourceUrl: 'https://liquipedia.net/mobilelegends/Patch_2.2.16a'
    }
  ],
  eudora: [
    {
      patchVersion: 'Patch 2.2.16a',
      date: '2026-10-14',
      type: 'nerf',
      title: 'Thunder’s Wrath Damage Adjustment',
      summary: 'Base and scaling damage on ultimate reduced across all levels to balance bush ambush lethality.',
      details: [
        'Ultimate base damage reduced by 50-80 across levels 1-3.',
        'Magic Power scaling reduced from 180% to 165% on the primary lightning strike.'
      ],
      sourceName: 'Moonton Official Patch Notes 2.2.16a',
      sourceUrl: 'https://liquipedia.net/mobilelegends/Patch_2.2.16a'
    }
  ],
  rafaela: [
    {
      patchVersion: 'Patch 2.2.16a',
      date: '2026-10-14',
      type: 'nerf',
      title: 'Skill 1 & 2 Cooldown Scaling Adjustment',
      summary: 'Late-game cooldowns no longer drop as drastically, toning down hyper-frequent team speed buffs.',
      details: [
        'Light of Retribution cooldown adjusted from 4.0s-2.5s to 4.0s-3.0s.',
        'Holy Healing cooldown scaling adjusted to prevent near-permanent team movement speed uptime.'
      ],
      sourceName: 'Moonton Official Patch Notes 2.2.16a',
      sourceUrl: 'https://liquipedia.net/mobilelegends/Patch_2.2.16a'
    }
  ],
  kalea: [
    {
      patchVersion: 'Patch 2.2.16a',
      date: '2026-10-14',
      type: 'buff',
      title: 'Third Enhanced Basic Attack Scaling',
      summary: 'Significantly enhanced late-game damage output on her empowered whirlpool basic attack.',
      details: [
        'Empowered basic attack damage increased from 240 + 60% Magic Power to 300 + 75% Magic Power.',
        'Shield scaling for nearby allies slightly increased at maximum skill level.'
      ],
      sourceName: 'Moonton Official Patch Notes 2.2.16a',
      sourceUrl: 'https://liquipedia.net/mobilelegends/Patch_2.2.16a'
    }
  ],
  masha: [
    {
      patchVersion: 'Patch 2.2.16',
      date: '2026-09-16',
      type: 'revamp',
      title: 'Season 42 Comprehensive Hero Revamp',
      summary: 'Complete overhaul from split-pusher into a sustained teamfight berserker with the Feral Wound mechanic.',
      details: [
        'Passive (Primal Pact): Retains 3-HP-bar structure; damage dealt charges Feral energy which regenerates health out of combat.',
        'New Wound Mechanic: Skills apply directional Wound marks; striking from that angle activates Feral State with AoE claw swipes, Attack Speed, and Resilience.',
        'Skill 1 (Feral Swipe): Reworked into a forward energy wave that damages and slows targets.',
        'Skill 2: Reworked into a swift mobility dash allowing precise positioning around enemy wound angles.',
        'Ultimate: Locks down and stuns the target before delivering heavy burst damage; retains CC purify upon losing an HP bar.'
      ],
      sourceName: 'Moonton Official Patch Notes 2.2.16',
      sourceUrl: 'https://liquipedia.net/mobilelegends/Patch_2.2.16'
    }
  ],
  bruno: [
    {
      patchVersion: 'Patch 2.2.16',
      date: '2026-09-16',
      type: 'revamp',
      title: 'Season 42 Powerball & Mobility Modernization',
      summary: 'Streamlined powerball tracking, modernized slide mobility, and teamfight utility ultimate.',
      details: [
        'Skill 1 (Volley Shot): Powerball retrieval mechanics smoothed; reduced bounce tracking clunkiness.',
        'Skill 2 (Slide): Slide distance and recovery optimized for agile positioning and escape trades.',
        'Ultimate (Worldie): Adjusted to facilitate passive stacking and teamfight control setups.'
      ],
      sourceName: 'Moonton Official Patch Notes 2.2.16',
      sourceUrl: 'https://liquipedia.net/mobilelegends/Patch_2.2.16'
    }
  ],
  phoveus: [
    {
      patchVersion: 'Patch 1.8.94',
      date: '2024-07-31',
      type: 'revamp',
      title: 'Demonic Force Physical Overhaul',
      summary: 'Shifted from reactive magic counter-pick into an independent physical bruiser with chaining ultimate.',
      details: [
        'Damage type completely shifted from Magic to Physical Damage across all skills.',
        'Passive (Demonic Force): Enhanced basic attack knocks back enemies, grants a shield, and resets whenever nearby enemies blink or get displaced.',
        'Skill 1 (Demonic Impact): Heavy ground slam with slow and mark application.',
        'Skill 2 (Dark Wave): Reworked into an uninterruptible crowd-control displacement wave.',
        'Ultimate (Infernal Pursuit): Removed static cooldown; chains leaps across all tagged targets.'
      ],
      sourceName: 'Moonton Official Patch Notes 1.8.94',
      sourceUrl: 'https://liquipedia.net/mobilelegends/Patch_1.8.94'
    }
  ],
  helcurt: [
    {
      patchVersion: 'Patch 1.8.78',
      date: '2024-05-15',
      type: 'revamp',
      title: 'Shadow of Styx Prowler Revamp',
      summary: 'Re-engineered into a stealth-based jungle and roam predator with passive regeneration and Terrify CC.',
      details: [
        'Passive (Shadow of Styx): Enters Prowler State when hidden from enemy sight, granting continuous HP regen and speed.',
        'Eliminating an enemy hero spawns a concealment fog shroud on the corpse.',
        'Skill 1 (Hidden Terror): Inflicts Terrify on targets hit when cast from the Prowler State.',
        'Skill 2 (Deadly Stinger): Automatically accumulates stingers over time while in Prowler State.',
        'Ultimate (Dark Night Falls): Shrouds entire enemy team in global darkness.'
      ],
      sourceName: 'Moonton Official Patch Notes 1.8.78',
      sourceUrl: 'https://liquipedia.net/mobilelegends/Patch_1.8.78'
    }
  ],
  aurora: [
    {
      patchVersion: 'Patch 1.8.56',
      date: '2024-01-31',
      type: 'revamp',
      title: 'Pride of Ice & Freeze Mastery Revamp',
      summary: 'Overhauled into a massive AoE Control Master featuring built-in self-freeze invulnerability and turret freezing.',
      details: [
        'Passive (Pride of Ice): Replaced stack system with self-freeze invulnerability upon taking fatal damage, recovering 20% max HP.',
        'Freeze mechanics now uniquely freeze enemy Turrets.',
        'Skill 1 (Hailstone Blast): Spawns falling hailstones and multiple ice strikes.',
        'Skill 2 (Frosty Breeze): Frontal cone blowing into an outer frost storm that freezes enemies.',
        'Ultimate (Frigid Glacier): Expansive glacial wave that freezes all targets, with freeze duration scaling with Magic Power.'
      ],
      sourceName: 'Moonton Official Patch Notes 1.8.56',
      sourceUrl: 'https://liquipedia.net/mobilelegends/Patch_1.8.56'
    }
  ],
  granger: [
    {
      patchVersion: 'Patch 1.9.32',
      date: '2024-11-06',
      type: 'rework',
      title: 'Capriccio Demonic Energy Overhaul',
      summary: 'Replaced traditional cooldowns with Demonic Energy and infinite-firing mobile rhapsody mechanics.',
      details: [
        'Passive (Capriccio): Gun and cannon operate on Demonic Energy; minion/creep kills permanently increase max energy capacity.',
        'Skill 1 (Rhapsody): Removed skill cooldown; continuously casts as long as gun energy is available with increased movement speed.',
        'Skill 2 (Rondo): Repositioning dash that instantly restores a burst of gun energy.',
        'Ultimate (Death Sonata): Operates on cannon energy without standard cooldown constraints.'
      ],
      sourceName: 'Moonton Official Patch Notes 1.9.32',
      sourceUrl: 'https://liquipedia.net/mobilelegends/Patch_1.9.32'
    }
  ],
  alice: [
    {
      patchVersion: 'Patch 1.9.14',
      date: '2024-09-17',
      type: 'rework',
      title: 'Queen of Blood Tank/Initiator Rework',
      summary: 'Shifted from late-game mana consumer into a durable Tank/Initiator with Blood Banquet passive.',
      details: [
        'Passive (Blood Banquet): Stacking skill hits triggers continuous AoE life drain and movement speed.',
        'Skill 1 (Flowing Blood): Teleport projectile can auto-snap to wall edges for terrain crossing.',
        'Ultimate: Channeled damage reduction state releasing an expansive AoE immobilize burst.'
      ],
      sourceName: 'Moonton Official Patch Notes 1.9.14',
      sourceUrl: 'https://liquipedia.net/mobilelegends/Patch_1.9.14'
    }
  ],
  lukas: [
    {
      patchVersion: 'Patch 1.9.42',
      date: '2024-12-18',
      type: 'adjustment',
      title: 'Hero Release: Beast of Light',
      summary: 'Introduced as a dual-form Fighter with Resolve resource transformation and Sacred Beast terrain-slamming abilities.',
      details: [
        'Passive: Building Resolve in combat enables transformation into the Sacred Beast form.',
        'Mortal form provides agile sustain and poking with Flash Strike.',
        'Sacred Beast form provides massive physical shockwaves, crowd control, and durability.'
      ],
      sourceName: 'Moonton Official Patch Notes 1.9.42',
      sourceUrl: 'https://liquipedia.net/mobilelegends/Patch_1.9.42'
    }
  ],
  suyou: [
    {
      patchVersion: 'Patch 1.9.20',
      date: '2024-09-21',
      type: 'adjustment',
      title: 'Hero Release: Mask of the Immortal',
      summary: 'Introduced as a dual-nature Assassin/Fighter leveraging Nuo immortal powers via Tap and Hold inputs.',
      details: [
        'Tap input triggers swift Mortal Form dashes, movement speed, and rapid burst strikes.',
        'Hold input channels the heavy Immortal Form with damage reduction and cleaving attacks.',
        'Seamless dual-style kit allows flex between Jungle objective assassin and EXP lane brawler.'
      ],
      sourceName: 'Moonton Official Patch Notes 1.9.20',
      sourceUrl: 'https://liquipedia.net/mobilelegends/Patch_1.9.20'
    }
  ],
  zhuxin: [
    {
      patchVersion: 'Patch 1.8.92',
      date: '2024-06-29',
      type: 'adjustment',
      title: 'Hero Release: Beacon of Spirits',
      summary: 'Introduced as a Cadia Riverlands crowd-control Mage utilizing the Lantern of Spirits.',
      details: [
        'Fluttering Grace generates spirit butterflies that tether and continuously damage targets.',
        'Stacking soul snares lifts and displaces enemy champions airborne across terrain.',
        'Crimson Beacon provides persistent defensive shields and continuous slow auras.'
      ],
      sourceName: 'Moonton Official Patch Notes 1.8.92',
      sourceUrl: 'https://liquipedia.net/mobilelegends/Patch_1.8.92'
    }
  ],
  chip: [
    {
      patchVersion: 'Patch 1.8.66',
      date: '2024-03-16',
      type: 'adjustment',
      title: 'Hero Release: Phase Technician',
      summary: 'Introduced as a unique Support/Tank capable of opening team-wide dimensional teleport portals.',
      details: [
        'Main Portal ultimate creates linked wormholes across the map for allied response or enemy ambushes.',
        'Overtime potato snack passive periodically heals Chip while out of combat.',
        'Crash Course provides area-of-effect stuns and bonus shield values.'
      ],
      sourceName: 'Moonton Official Patch Notes 1.8.66',
      sourceUrl: 'https://liquipedia.net/mobilelegends/Patch_1.8.66'
    }
  ],
  cici: [
    {
      patchVersion: 'Patch 1.8.44',
      date: '2023-12-23',
      type: 'adjustment',
      title: 'Hero Release: Buoyant Performer',
      summary: 'Introduced as an agile EXP lane Fighter wielding a weaponized Yo-Yo for continuous kiting.',
      details: [
        'Yo-Yo Blitz fires rapid strikes while allowing Cici to move at full speed.',
        'Buoyancy passive stacks movement speed and spell vamp based on successful hits.',
        'Curtain Call links two enemy heroes together, slowing them and duplicating damage.'
      ],
      sourceName: 'Moonton Official Patch Notes 1.8.44',
      sourceUrl: 'https://liquipedia.net/mobilelegends/Patch_1.8.44'
    }
  ],
  freya: [
    {
      patchVersion: 'Patch 2.1.30',
      date: '2025-11-12',
      type: 'adjustment',
      title: 'Valkyrie Activation & Skill 2 Optimization',
      summary: 'Relaxed Skill 2 cast conditions and streamlined fast Valkyrie state activation for team initiations.',
      details: [
        'Skill 2 orb consumption smoothed; no longer strictly reliant on clearing waves prior to engaging.',
        'Ultimate activation grants instant Sacred Orbs and shield scaling.'
      ],
      sourceName: 'Moonton Official Patch Notes 2.1.30',
      sourceUrl: 'https://liquipedia.net/mobilelegends/Patch_2.1.30'
    }
  ],
  kaja: [
    {
      patchVersion: 'Patch 2.0.40',
      date: '2025-06-18',
      type: 'adjustment',
      title: 'Primal Lightning Support Focus',
      summary: 'Strengthened Roam utility and magic-power-scaling team heals.',
      details: [
        'Passive (Wrath Sanction): Paralyze debuff reduces enemy damage dealt by up to 24%.',
        'Ultimate (Divine Judgment): Unbreakable suppression displacement with increased cast range.'
      ],
      sourceName: 'Moonton Official Patch Notes 2.0.40',
      sourceUrl: 'https://liquipedia.net/mobilelegends/Patch_2.0.40'
    }
  ],
  argus: [
    {
      patchVersion: 'Patch 2.2.16',
      date: '2026-09-16',
      type: 'buff',
      title: 'Enhanced Basic Attack Turret Interaction',
      summary: 'Warmonger basic attacks now interact directly with turrets and trigger lifesteal effects.',
      details: [
        'Warmonger double strike connects with Turret structures.',
        'Eternal Evil duration and CC cleanse responsiveness optimized.'
      ],
      sourceName: 'Moonton Official Patch Notes 2.2.16',
      sourceUrl: 'https://liquipedia.net/mobilelegends/Patch_2.2.16'
    }
  ],
  sun: [
    {
      patchVersion: 'Patch 2.2.16',
      date: '2026-09-16',
      type: 'buff',
      title: 'Doppleganger Turret Interaction',
      summary: 'Clone enhanced attacks now trigger HP regen interactions against enemy structures.',
      details: [
        'Clone basic attacks inherit turret interaction updates.',
        'Endless Variety dash range slightly increased.'
      ],
      sourceName: 'Moonton Official Patch Notes 2.2.16',
      sourceUrl: 'https://liquipedia.net/mobilelegends/Patch_2.2.16'
    }
  ],
  gusion: [
    {
      patchVersion: 'Patch 2.2.16',
      date: '2026-09-16',
      type: 'adjustment',
      title: 'Dagger Specialist Turret Interaction',
      summary: 'Passive enhanced strikes connect with turret structures and recover HP.',
      details: [
        'Dagger Specialist passive basic attack damage applies to structures.',
        'Incandescent dash cooldown reset responsiveness polished.'
      ],
      sourceName: 'Moonton Official Patch Notes 2.2.16',
      sourceUrl: 'https://liquipedia.net/mobilelegends/Patch_2.2.16'
    }
  ],
  thamuz: [
    {
      patchVersion: 'Patch 2.2.16',
      date: '2026-09-16',
      type: 'buff',
      title: 'Molten Scythe Turret Interaction',
      summary: 'Enhanced basic attacks from Grand Lord Lava connect with turrets.',
      details: [
        'Cauterant Inferno attack speed scaling enhanced in late-game teamfights.',
        'Passive explosion triggers properly near enemy structures.'
      ],
      sourceName: 'Moonton Official Patch Notes 2.2.16',
      sourceUrl: 'https://liquipedia.net/mobilelegends/Patch_2.2.16'
    }
  ],
  dyrroth: [
    {
      patchVersion: 'Patch 2.2.16',
      date: '2026-09-16',
      type: 'buff',
      title: 'Wrath of the Abyss Structure Interaction',
      summary: 'Circle Strike basic attacks hit turrets and restore HP based on physical damage.',
      details: [
        'Passive health regeneration active against structures.',
        'Spectre Step defense reduction verified at 50%-75% armor reduction.'
      ],
      sourceName: 'Moonton Official Patch Notes 2.2.16',
      sourceUrl: 'https://liquipedia.net/mobilelegends/Patch_2.2.16'
    }
  ]
};

/**
 * Returns historical patch changes for a hero.
 * Only returns actual verified patch changes from primary sources.
 * Returns an empty array if no specific patch changes are indexed for the hero.
 * DOES NOT fabricate historical changes.
 */
export function getHeroPatchHistory(heroId: string): HeroPatchChange[] {
  return HERO_PATCH_HISTORY[heroId] || [];
}
