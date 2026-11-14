import { HeroSkill, HeroGameplayMechanics, CategoryEvidence } from '../types/mlbb';

export interface HeroSkillRecord {
  skills: HeroSkill[];
  resourceType?: HeroGameplayMechanics['resourceType'];
  crowdControl: string[];
  mobility: string[];
  damageCharacteristics: string[];
  skillsEvidence?: CategoryEvidence;
  mechanicsEvidence?: CategoryEvidence;
}

export const HERO_SKILLS_DATA: Record<string, HeroSkillRecord> = {
  "tigreal": {
    "resourceType": "Mana",
    "crowdControl": [
      "Knockup",
      "Push",
      "Stun",
      "Vacuum"
    ],
    "mobility": [
      "Forward Charge"
    ],
    "damageCharacteristics": [
      "Physical AoE",
      "Crowd Control Initiation"
    ],
    "skills": [
      {
        "id": "passive",
        "name": "Fearless",
        "type": "Passive",
        "tags": [
          "Buff",
          "Defense"
        ],
        "description": "Gains a stack of blessing after casting skills or being struck by basic attacks. At 4 stacks, immunizes the next incoming basic attack."
      },
      {
        "id": "skill1",
        "name": "Attack Wave",
        "type": "Skill 1",
        "tags": [
          "AoE",
          "Slow"
        ],
        "cooldown": "7.0s",
        "energyCost": "45 Mana",
        "description": "Fires a shockwave forward in a straight line, dealing physical damage and slowing enemies hit."
      },
      {
        "id": "skill2",
        "name": "Sacred Hammer",
        "type": "Skill 2",
        "tags": [
          "Blink",
          "Crowd Control",
          "Knockup"
        ],
        "cooldown": "12.5s",
        "energyCost": "90 Mana",
        "description": "Charges forward in a designated direction, pushing along enemies hit. Can be recast within 4 seconds to knock enemies airborne."
      },
      {
        "id": "ultimate",
        "name": "Implosion",
        "type": "Ultimate",
        "tags": [
          "AoE",
          "Crowd Control",
          "Stun"
        ],
        "cooldown": "45.0s",
        "energyCost": "120 Mana",
        "description": "Drives his sword into the ground, channeling for a brief moment before pulling all nearby enemies toward himself and stunning them for 1.5 seconds."
      }
    ]
  },
  "khufra": {
    "resourceType": "Mana",
    "crowdControl": [
      "Knockup",
      "Knockback",
      "Stun",
      "Anti-Blink"
    ],
    "mobility": [
      "Long Dash",
      "Bouncing Form"
    ],
    "damageCharacteristics": [
      "Physical Burst",
      "Anti-Dash CC"
    ],
    "skills": [
      {
        "id": "passive",
        "name": "Spell Curse",
        "type": "Passive",
        "tags": [
          "Buff",
          "Heal",
          "Slow"
        ],
        "description": "Every 12 seconds, his next basic attack gains extended range, slows the target, and recovers 8% of his max HP."
      },
      {
        "id": "skill1",
        "name": "Tyrant's Revenge",
        "type": "Skill 1",
        "tags": [
          "Blink",
          "Crowd Control",
          "Knockup"
        ],
        "cooldown": "12.0s",
        "energyCost": "80 Mana",
        "description": "Pulls himself back to launch forward in a target direction, knocking up all enemies hit at the landing site."
      },
      {
        "id": "skill2",
        "name": "Bouncing Ball",
        "type": "Skill 2",
        "tags": [
          "Buff",
          "Anti-Blink",
          "Slow"
        ],
        "cooldown": "10.0s",
        "energyCost": "70 Mana",
        "description": "Wraps himself into a bouncing ball, gaining bonus physical and magic defense. Knocks up any enemy attempting to use blink or dash skills through him."
      },
      {
        "id": "ultimate",
        "name": "Tyrant's Rage",
        "type": "Ultimate",
        "tags": [
          "Crowd Control",
          "Stun",
          "Displacement"
        ],
        "cooldown": "40.0s",
        "energyCost": "150 Mana",
        "description": "Pulls all nearby enemies toward his front, dealing physical damage and slowing them. If targets hit terrain, they take extra damage and are stunned for 1.25s."
      }
    ]
  },
  "minotaur": {
    "resourceType": "Rage",
    "crowdControl": [
      "Airborne",
      "Stun",
      "Slow"
    ],
    "mobility": [
      "Leap"
    ],
    "damageCharacteristics": [
      "Physical AoE",
      "Team Healing"
    ],
    "skills": [
      {
        "id": "passive",
        "name": "Despair Beast",
        "type": "Passive",
        "tags": [
          "Debuff",
          "Defense Shred"
        ],
        "description": "Inflicting crowd control on an enemy reduces their physical and magic defense by 5%–15% for 3 seconds."
      },
      {
        "id": "skill1",
        "name": "Despair Stomp",
        "type": "Skill 1",
        "tags": [
          "AoE",
          "Crowd Control",
          "Airborne"
        ],
        "cooldown": "8.0s",
        "description": "Leaps to a designated location, dealing physical damage to enemies within the area and knocking them airborne."
      },
      {
        "id": "skill2",
        "name": "Motivation Roar",
        "type": "Skill 2",
        "tags": [
          "Heal",
          "Buff"
        ],
        "cooldown": "12.0s",
        "description": "Roars to recover HP for himself and nearby allies, while increasing attack speed for allied units for a short duration."
      },
      {
        "id": "ultimate",
        "name": "Minoan Fury",
        "type": "Ultimate",
        "tags": [
          "AoE",
          "Crowd Control",
          "Airborne"
        ],
        "cooldown": "42.0s",
        "description": "Smashes the ground three consecutive times, releasing shockwaves that knock all surrounding enemies airborne while granting Minotaur CC immunity."
      }
    ]
  },
  "fredrinn": {
    "resourceType": "Crystal Energy",
    "crowdControl": [
      "Airborne",
      "Taunt",
      "Slow"
    ],
    "mobility": [
      "Dash"
    ],
    "damageCharacteristics": [
      "Physical Burst",
      "True Damage Finish"
    ],
    "skills": [
      {
        "id": "passive",
        "name": "Crystalline Armor",
        "type": "Passive",
        "tags": [
          "Shield",
          "Heal"
        ],
        "description": "Stores 85% of damage received as Crystal Energy. Damaging enemies with skills converts Crystal Energy into actual HP."
      },
      {
        "id": "skill1",
        "name": "Piercing Strike",
        "type": "Skill 1",
        "tags": [
          "AoE",
          "Slow"
        ],
        "cooldown": "8.5s",
        "description": "Thrusts sword forward, dealing physical damage, slowing targets, and generating 1 combo point."
      },
      {
        "id": "skill2",
        "name": "Brave Assault",
        "type": "Skill 2",
        "tags": [
          "Blink",
          "Crowd Control",
          "Airborne"
        ],
        "cooldown": "9.5s",
        "description": "Dashes in target direction, stopping upon hitting an enemy hero to knock them airborne and empower his next basic attack."
      },
      {
        "id": "skill3",
        "name": "Energy Eruption",
        "type": "Skill 3",
        "tags": [
          "AoE",
          "Crowd Control",
          "Taunt"
        ],
        "cooldown": "7.0s",
        "description": "Consumes 1 combo point to taunt surrounding enemies for 1s, dealing physical damage and reducing skill 1 and 2 cooldowns."
      },
      {
        "id": "ultimate",
        "name": "Appraiser's Wrath",
        "type": "Ultimate",
        "tags": [
          "AoE",
          "Burst",
          "True Damage"
        ],
        "cooldown": "30.0s",
        "description": "Consumes 3 combo points to unleash a colossal cone slam, converting Crystal Energy into devastating physical and true damage."
      }
    ]
  },
  "atlas": {
    "resourceType": "Mana",
    "crowdControl": [
      "Stun",
      "Airborne",
      "Displacement",
      "Slow"
    ],
    "mobility": [
      "Ejection Dash"
    ],
    "damageCharacteristics": [
      "Magic AoE",
      "Teamfight Initiation"
    ],
    "skills": [
      {
        "id": "passive",
        "name": "Frigid Breath",
        "type": "Passive",
        "tags": [
          "AoE",
          "Slow",
          "Freeze",
          "Buff"
        ],
        "description": "Generates Frigid Breath around himself for 4s whenever casting skills, slowing enemies' movement speed over 2s before freezing them for 0.5s (4s freeze cooldown) and granting 20 (+0.7% Extra HP) Physical & Magic Defense."
      },
      {
        "id": "skill1",
        "name": "Annihilate",
        "type": "Skill 1",
        "tags": [
          "AoE",
          "Magic Damage"
        ],
        "cooldown": "7.0s",
        "energyCost": "60 Mana",
        "description": "Slams the ground to create three expanding explosions, dealing magic damage to enemies caught within."
      },
      {
        "id": "skill2",
        "name": "Perfect Match",
        "type": "Skill 2",
        "tags": [
          "Blink",
          "Buff",
          "Stun"
        ],
        "energyCost": "75 Mana",
        "description": "Ejects from his Mecha Sentry, gaining 30% movement speed and slow immunity; merging back deals Magic Damage and stuns nearby enemies for 0.8s."
      },
      {
        "id": "ultimate",
        "name": "Fatal Links",
        "type": "Ultimate",
        "tags": [
          "AoE",
          "Crowd Control",
          "Displacement"
        ],
        "cooldown": "55.0s",
        "energyCost": "130 Mana",
        "description": "Hurls chains around himself and channels, dealing Magic Damage and slowing enemy heroes by 40% for 3s before dragging and slamming them into a designated landing spot."
      }
    ]
  },
  "franco": {
    "resourceType": "Mana",
    "crowdControl": [
      "Hook",
      "Suppress",
      "Slow"
    ],
    "mobility": [
      "Speed Boost"
    ],
    "damageCharacteristics": [
      "Physical Single-Target",
      "Pickoff Initiation"
    ],
    "skills": [
      {
        "id": "passive",
        "name": "Wasteland Force",
        "type": "Passive",
        "tags": [
          "Heal",
          "Speed Boost"
        ],
        "description": "If taking no damage for 5 seconds, regenerates 1% max HP per second and gains 10% movement speed."
      },
      {
        "id": "skill1",
        "name": "Iron Hook",
        "type": "Skill 1",
        "tags": [
          "Hook",
          "Crowd Control",
          "Displacement"
        ],
        "cooldown": "15.0s",
        "energyCost": "105 Mana",
        "description": "Launches an iron hook in target direction to snag the first enemy hit, dragging them directly to Franco."
      },
      {
        "id": "skill2",
        "name": "Fury Shock",
        "type": "Skill 2",
        "tags": [
          "AoE",
          "Slow"
        ],
        "cooldown": "7.0s",
        "energyCost": "40 Mana",
        "description": "Stomps the ground with ferocious rage, dealing physical damage to nearby enemies and slowing their movement by 70%."
      },
      {
        "id": "ultimate",
        "name": "Bloody Hunt",
        "type": "Ultimate",
        "tags": [
          "Crowd Control",
          "Suppress"
        ],
        "cooldown": "45.0s",
        "energyCost": "110 Mana",
        "description": "Suppresses a target enemy hero for 1.8 seconds, striking them 6 times consecutively with devastating unpurifiable control."
      }
    ]
  },
  "baxia": {
    "resourceType": "Mana",
    "crowdControl": [
      "Stun",
      "Slow"
    ],
    "mobility": [
      "Wheel Roll"
    ],
    "damageCharacteristics": [
      "Magic Continuous",
      "Anti-Heal Shield"
    ],
    "skills": [
      {
        "id": "passive",
        "name": "Baxia Mark",
        "type": "Passive",
        "tags": [
          "Debuff",
          "Anti-Heal",
          "Damage Reduction"
        ],
        "description": "Reduces final damage received by a flat amount and marks targets on hit to reduce their shield and HP regen by 50%."
      },
      {
        "id": "skill1",
        "name": "Baxia-Shield Unity",
        "type": "Skill 1",
        "tags": [
          "Blink",
          "Crowd Control",
          "Stun"
        ],
        "cooldown": "15.0s",
        "energyCost": "80 Mana",
        "description": "Retracts into his shield to roll forward at high speed. Leaping upon an enemy stuns them for 0.8 seconds."
      },
      {
        "id": "skill2",
        "name": "Shield of Spirit",
        "type": "Skill 2",
        "tags": [
          "Magic Damage",
          "Cooldown Reset"
        ],
        "cooldown": "9.0s",
        "energyCost": "25 Mana",
        "description": "Throws his shield forward; hitting an enemy hero or creep resets its cooldown to 1.5 seconds."
      },
      {
        "id": "ultimate",
        "name": "Tortoise's Puissance",
        "type": "Ultimate",
        "tags": [
          "AoE",
          "Buff",
          "Slow"
        ],
        "cooldown": "40.0s",
        "energyCost": "120 Mana",
        "description": "Dashes forward and leaves a trail of lava that continuously burns and slows enemies, boosting Baxia's movement speed and damage reduction."
      }
    ]
  },
  "belerick": {
    "resourceType": "Mana",
    "crowdControl": [
      "Taunt",
      "Immobilize",
      "Slow"
    ],
    "mobility": [
      "Speed Boost"
    ],
    "damageCharacteristics": [
      "Magic Reflect",
      "HP Scaling"
    ],
    "skills": [
      {
        "id": "passive",
        "name": "Deadly Thorns",
        "type": "Passive",
        "tags": [
          "Magic Reflect",
          "HP Scaling"
        ],
        "description": "For every 50 damage taken, has a 25% chance to shoot thorns at nearby enemies, dealing magic damage scaling with max HP."
      },
      {
        "id": "skill1",
        "name": "Ancient Seed",
        "type": "Skill 1",
        "tags": [
          "AoE",
          "Crowd Control",
          "Taunt"
        ],
        "cooldown": "8.0s",
        "energyCost": "60 Mana",
        "description": "Releases vines in a line, damaging and slowing enemies. Enemies caught in the trail are taunted after 1 second."
      },
      {
        "id": "skill2",
        "name": "Nature's Strike",
        "type": "Skill 2",
        "tags": [
          "Speed Boost",
          "Heal"
        ],
        "cooldown": "7.0s",
        "energyCost": "50 Mana",
        "description": "Gains 80% decaying movement speed and empowers his next basic attack to deal bonus magic damage and heal himself."
      },
      {
        "id": "ultimate",
        "name": "Wrath of Dryad",
        "type": "Ultimate",
        "tags": [
          "AoE",
          "Crowd Control",
          "Taunt"
        ],
        "cooldown": "40.0s",
        "energyCost": "100 Mana",
        "description": "Casts vines in a wide expanding circle that taunts all surrounding enemies for 1.5 seconds, triggering Deadly Thorns repeatedly."
      }
    ]
  },
  "hylos": {
    "resourceType": "Mana/HP",
    "crowdControl": [
      "Stun",
      "Slow"
    ],
    "mobility": [
      "Pathway Speed"
    ],
    "damageCharacteristics": [
      "Magic Continuous",
      "Mana-to-HP Scaling"
    ],
    "skills": [
      {
        "id": "passive",
        "name": "Thickened Blood",
        "type": "Passive",
        "tags": [
          "Buff",
          "HP Scaling"
        ],
        "description": "Gains 1.5 max HP for every point of max mana. When out of mana, can consume HP to cast skills without interruption."
      },
      {
        "id": "skill1",
        "name": "Law and Order",
        "type": "Skill 1",
        "tags": [
          "Single-Target",
          "Crowd Control",
          "Stun"
        ],
        "cooldown": "12.0s",
        "energyCost": "80 Mana",
        "description": "Locks onto an enemy to deal magic damage and stun them for 1 second."
      },
      {
        "id": "skill2",
        "name": "Ring of Punishment",
        "type": "Skill 2",
        "tags": [
          "AoE",
          "Continuous Damage",
          "Slow"
        ],
        "cooldown": "1.0s",
        "energyCost": "30 Mana/sec",
        "description": "Toggles a continuous aura of punishment that damages and slows nearby enemies while stacking attack speed debuffs."
      },
      {
        "id": "ultimate",
        "name": "Glorious Pathway",
        "type": "Ultimate",
        "tags": [
          "Buff",
          "Speed Boost",
          "Slow"
        ],
        "cooldown": "40.0s",
        "energyCost": "150 Mana",
        "description": "Creates a glorious pathway forward; allies on it gain massive movement speed and slow immunity, while enemies are heavily slowed."
      }
    ]
  },
  "edith": {
    "resourceType": "Wrath",
    "crowdControl": [
      "Airborne",
      "Displacement",
      "Immobilize"
    ],
    "mobility": [
      "Forward Dash",
      "Flight"
    ],
    "damageCharacteristics": [
      "Hybrid",
      "Tank/Marksman Transform"
    ],
    "skills": [
      {
        "id": "passive",
        "name": "Overload",
        "type": "Passive",
        "tags": [
          "Chain Lightning",
          "AoE"
        ],
        "description": "After casting a skill, Edith's basic attacks trigger chain lightning for 3 seconds, dealing magic damage to multiple nearby targets."
      },
      {
        "id": "skill1",
        "name": "Earth Shatter",
        "type": "Skill 1",
        "tags": [
          "AoE",
          "Crowd Control",
          "Airborne"
        ],
        "cooldown": "10.0s",
        "description": "(Mecha Form) Slams the ground after a brief delay to deal physical damage and knock enemies airborne for 1 second."
      },
      {
        "id": "skill2",
        "name": "On the Move",
        "type": "Skill 2",
        "tags": [
          "Blink",
          "Displacement",
          "Airborne"
        ],
        "cooldown": "10.0s",
        "description": "(Mecha Form) Charges forward to flip the first enemy hero hit over her shoulder, immobilizing them."
      },
      {
        "id": "ultimate",
        "name": "Primal Wrath",
        "type": "Ultimate",
        "tags": [
          "Morph",
          "Marksman Form",
          "Shield"
        ],
        "cooldown": "40.0s",
        "description": "Ejects from her mecha into Flight Mode, gaining a massive shield and converting defense into magic power for ranged rapid basic attacks."
      }
    ]
  },
  "akai": {
    "resourceType": "Mana",
    "crowdControl": [
      "Knockback",
      "Pin",
      "Slow",
      "Airborne"
    ],
    "mobility": [
      "Jump Dash"
    ],
    "damageCharacteristics": [
      "Physical AoE",
      "Displacement Pin"
    ],
    "skills": [
      {
        "id": "passive",
        "name": "Tai Chi",
        "type": "Passive",
        "tags": [
          "Shield",
          "Buff"
        ],
        "description": "Gains a shield based on max HP after using any skill, stacking Tai Chi marks on enemies to deal bonus basic attack damage."
      },
      {
        "id": "skill1",
        "name": "Headbutt",
        "type": "Skill 1",
        "tags": [
          "Blink",
          "Crowd Control",
          "Airborne"
        ],
        "cooldown": "11.0s",
        "energyCost": "70 Mana",
        "description": "Charges forward, knocking enemies airborne and slowing them if hitting an enemy marked by Tai Chi."
      },
      {
        "id": "skill2",
        "name": "Body Slam",
        "type": "Skill 2",
        "tags": [
          "AoE",
          "Slow"
        ],
        "cooldown": "7.0s",
        "energyCost": "60 Mana",
        "description": "Slams his rotund body into the ground, dealing physical damage and slowing targets in the area."
      },
      {
        "id": "ultimate",
        "name": "Heavy Spin",
        "type": "Ultimate",
        "tags": [
          "AoE",
          "Crowd Control",
          "Knockback"
        ],
        "cooldown": "40.0s",
        "energyCost": "120 Mana",
        "description": "Spins like a tornado for 3.5 seconds with CC immunity, continuously knocking back and pinning enemies against obstacles."
      }
    ]
  },
  "johnson": {
    "resourceType": "Mana",
    "crowdControl": [
      "Stun",
      "Slow"
    ],
    "mobility": [
      "Car Transformation",
      "Global Transport"
    ],
    "damageCharacteristics": [
      "Magic Burst",
      "Vehicular Ambush"
    ],
    "skills": [
      {
        "id": "passive",
        "name": "Electro-airbag",
        "type": "Passive",
        "tags": [
          "Shield",
          "Defense"
        ],
        "description": "When HP drops below 30%, automatically triggers a massive electrical shield scaling with physical defense for 10 seconds."
      },
      {
        "id": "skill1",
        "name": "Deadly Pincers",
        "type": "Skill 1",
        "tags": [
          "AoE",
          "Crowd Control",
          "Stun"
        ],
        "cooldown": "9.0s",
        "energyCost": "80 Mana",
        "description": "Hurls a spanner forward to deal magic damage and stun targets in the landing zone."
      },
      {
        "id": "skill2",
        "name": "Electromag Rays",
        "type": "Skill 2",
        "tags": [
          "AoE",
          "Continuous Damage",
          "Slow"
        ],
        "cooldown": "11.0s",
        "energyCost": "60 Mana",
        "description": "Raises his shield to emit continuous fan-shaped electrical rays that deal magic damage and slow enemies."
      },
      {
        "id": "ultimate",
        "name": "Rapid Touchdown",
        "type": "Ultimate",
        "tags": [
          "Morph",
          "Global Drive",
          "Stun"
        ],
        "cooldown": "45.0s",
        "energyCost": "120 Mana",
        "description": "Transforms into a sports car to drive across the battlefield. One allied hero can hop inside; crashing into enemies creates an electrical stun zone."
      }
    ]
  },
  "gatotkaca": {
    "resourceType": "Rage",
    "crowdControl": [
      "Taunt",
      "Airborne",
      "Slow"
    ],
    "mobility": [
      "Colossal Leap"
    ],
    "damageCharacteristics": [
      "Magic AoE",
      "Physical Defense Counter"
    ],
    "skills": [
      {
        "id": "passive",
        "name": "Steel Bones",
        "type": "Passive",
        "tags": [
          "Defense Conversion",
          "Heal"
        ],
        "description": "Converts 2% of lost HP into physical defense. Taking damage builds Rage; reaching 25 Rage empowers his next basic attack to punch and heal."
      },
      {
        "id": "skill1",
        "name": "Blast Iron Fist",
        "type": "Skill 1",
        "tags": [
          "AoE",
          "Slow"
        ],
        "cooldown": "7.0s",
        "description": "Shatters the ground ahead, dealing magic damage and creating a cracked zone that continuously damages and slows enemies."
      },
      {
        "id": "skill2",
        "name": "Unbreakable",
        "type": "Skill 2",
        "tags": [
          "Dash",
          "Crowd Control",
          "Taunt"
        ],
        "cooldown": "11.0s",
        "description": "Charges forward in a battle cry, taunting enemies hit to force them to basic attack Gatotkaca for up to 1.5 seconds."
      },
      {
        "id": "ultimate",
        "name": "Avatar of the Guardian",
        "type": "Ultimate",
        "tags": [
          "Airborne",
          "Long Leap",
          "Crowd Control"
        ],
        "cooldown": "48.0s",
        "description": "Leaps into the stratosphere and crashes down at a target area, knocking up all enemies caught in the epicenter."
      }
    ]
  },
  "grock": {
    "resourceType": "Mana",
    "crowdControl": [
      "Wall Terrain",
      "Airborne",
      "Slow"
    ],
    "mobility": [
      "Charge"
    ],
    "damageCharacteristics": [
      "Physical Burst",
      "Wall Slam"
    ],
    "skills": [
      {
        "id": "passive",
        "name": "Ancestral Gift",
        "type": "Passive",
        "tags": [
          "Defense Buff",
          "CC Immunity"
        ],
        "description": "Near walls or turrets, Grock gains bonus movement speed, physical and magic defense, and HP regeneration."
      },
      {
        "id": "skill1",
        "name": "Power of Nature",
        "type": "Skill 1",
        "tags": [
          "AoE",
          "CC Immunity",
          "Burst"
        ],
        "cooldown": "4.0s",
        "energyCost": "50 Mana",
        "description": "Channels his stone weapon to gain CC immunity near walls, releasing a heavy spinning strike."
      },
      {
        "id": "skill2",
        "name": "Guardian's Barrier",
        "type": "Skill 2",
        "tags": [
          "Terrain",
          "Obstacle"
        ],
        "cooldown": "16.0s",
        "energyCost": "80 Mana",
        "description": "Erects a stone wall at a designated location to block enemy paths and choke points for 5 seconds."
      },
      {
        "id": "ultimate",
        "name": "Wild Charge",
        "type": "Ultimate",
        "tags": [
          "Blink",
          "Crowd Control",
          "Airborne"
        ],
        "cooldown": "40.0s",
        "energyCost": "100 Mana",
        "description": "Charges forward; colliding with terrain unleashes a seismic shockwave that knocks enemies airborne and resets skill 1."
      }
    ]
  },
  "uranus": {
    "resourceType": "Mana",
    "crowdControl": [
      "Slow"
    ],
    "mobility": [
      "Speed Boost",
      "Slow Cleanse"
    ],
    "damageCharacteristics": [
      "Magic Continuous",
      "High Sustain"
    ],
    "skills": [
      {
        "id": "passive",
        "name": "Radiance",
        "type": "Passive",
        "tags": [
          "Heal",
          "Sustain"
        ],
        "description": "Absorbs energy whenever taking damage to gain Radiance stacks (up to 20 stacks), regenerating HP per second. His Basic Attacks (including splash damage) deal Magic Damage scaling with Radiance stacks."
      },
      {
        "id": "skill1",
        "name": "Ionic Edge",
        "type": "Skill 1",
        "tags": [
          "AoE",
          "Damage Stacking"
        ],
        "cooldown": "4.0s",
        "energyCost": "60 Mana",
        "description": "Releases two orbiting energy blades that deal Magic Damage and slow enemies hit by 30% for 2s."
      },
      {
        "id": "skill2",
        "name": "Transcendent Ward",
        "type": "Skill 2",
        "tags": [
          "Blink",
          "Shield"
        ],
        "cooldown": "10.0s",
        "energyCost": "80 Mana",
        "description": "Dashes in target direction, gaining a shield for 4s and detonating to deal Magic Damage upon shield expiration or destruction."
      },
      {
        "id": "ultimate",
        "name": "Consecration",
        "type": "Ultimate",
        "tags": [
          "Buff",
          "Cleanse",
          "Heal"
        ],
        "cooldown": "42.0s",
        "energyCost": "100 Mana",
        "description": "Purges slow effects on himself, recovers HP, gains 60% decaying movement speed for 8s, gains 5 Radiance stacks, and increases shields received and HP Regen by 20% for 8s."
      }
    ]
  },
  "barats": {
    "resourceType": "Mana",
    "crowdControl": [
      "Suppress",
      "Knockback",
      "Stun"
    ],
    "mobility": [
      "Speed Boost"
    ],
    "damageCharacteristics": [
      "Physical AoE",
      "Resilience Scaling"
    ],
    "skills": [
      {
        "id": "passive",
        "name": "Big Guy",
        "type": "Passive",
        "tags": [
          "Buff",
          "Resilience",
          "Size"
        ],
        "description": "Gains Big Guy stacks by damaging enemies with skills, expanding Detona's size and boosting physical/magic defense and resilience."
      },
      {
        "id": "skill1",
        "name": "So-Called Teamwork",
        "type": "Skill 1",
        "tags": [
          "AoE",
          "Slow"
        ],
        "cooldown": "6.0s",
        "energyCost": "40 Mana",
        "description": "Detona spits contaminated oil in a fan area, igniting it with a firecracker to deal two instances of physical damage."
      },
      {
        "id": "skill2",
        "name": "Missile 'Expert'",
        "type": "Skill 2",
        "tags": [
          "Displacement",
          "Crowd Control"
        ],
        "cooldown": "11.0s",
        "energyCost": "80 Mana",
        "description": "Fires two missiles backward that emit plumes of smoke, pulling enemies hit toward Barats."
      },
      {
        "id": "ultimate",
        "name": "Detona's Welcome",
        "type": "Ultimate",
        "tags": [
          "Crowd Control",
          "Suppress",
          "Displacement"
        ],
        "cooldown": "40.0s",
        "energyCost": "120 Mana",
        "description": "Locks onto an enemy hero to devour them with Detona, spitting them into a target direction or wall to stun them."
      }
    ]
  },
  "gloo": {
    "resourceType": "Mana",
    "crowdControl": [
      "Immobilize",
      "Control Tether",
      "Slow"
    ],
    "mobility": [
      "Split Goos",
      "Host Attach"
    ],
    "damageCharacteristics": [
      "Magic Continuous",
      "Host Damage Sharing"
    ],
    "skills": [
      {
        "id": "passive",
        "name": "Stick, Stick",
        "type": "Passive",
        "tags": [
          "Debuff",
          "Slow"
        ],
        "description": "Skills apply Sticky stacks that slow enemy movement speed by 4% for 6s (up to 5 stacks) and reduce their damage dealt to Gloo by 3% per stack."
      },
      {
        "id": "skill1",
        "name": "Slam, Slam",
        "type": "Skill 1",
        "tags": [
          "AoE",
          "Crowd Control",
          "Immobilize"
        ],
        "cooldown": "10.0s",
        "energyCost": "25 Mana",
        "description": "Slams the ground and leaves a Goo that explodes after 3s (230–380 + 11% Extra HP Magic Damage), immobilizing enemies for 0.6s. Touching the Goo detonates it immediately, resets this skill's cooldown, and recovers HP."
      },
      {
        "id": "skill2",
        "name": "Spread, Spread",
        "type": "Skill 2",
        "tags": [
          "Blink",
          "Displacement",
          "Immobilize"
        ],
        "cooldown": "12.0s",
        "energyCost": "80 Mana",
        "description": "Splits into Goos in a fan-shaped area, dealing Magic Damage and immobilizing enemies for 0.5s; hitting a Goo drags Gloo toward it and pulls enemies along."
      },
      {
        "id": "ultimate",
        "name": "Grab, Grab",
        "type": "Ultimate",
        "tags": [
          "Morph",
          "Host Attach",
          "Untargetable"
        ],
        "description": "Unlocked when an enemy hero reaches max Sticky stacks. Attaches to the host for up to 9s, recovering 20% Max HP and transferring 60% of damage taken (excluding Turret damage) to the host (5s cooldown if host dies)."
      }
    ]
  },
  "marcel": {
    "resourceType": "Mana",
    "crowdControl": [
      "Stun",
      "Knockback",
      "Slow"
    ],
    "mobility": [
      "Forward Leap"
    ],
    "damageCharacteristics": [
      "Physical AoE",
      "Allied Protection"
    ],
    "skills": [
      {
        "id": "passive",
        "name": "Iron Bulwark",
        "type": "Passive",
        "tags": [
          "Defense",
          "Shield"
        ],
        "description": "Interceps a portion of incoming damage meant for nearby squishy allies and generates an absorption shield."
      },
      {
        "id": "skill1",
        "name": "Shield Bash",
        "type": "Skill 1",
        "tags": [
          "AoE",
          "Crowd Control",
          "Stun"
        ],
        "cooldown": "8.0s",
        "energyCost": "50 Mana",
        "description": "Strikes forward with his massive bulwark, dealing physical damage and stunning targets directly in front."
      },
      {
        "id": "skill2",
        "name": "Vanguard Leap",
        "type": "Skill 2",
        "tags": [
          "Blink",
          "Slow"
        ],
        "cooldown": "11.0s",
        "energyCost": "65 Mana",
        "description": "Leaps forward into the fray, slowing enemies at the impact point and granting nearby allies a defensive barrier."
      },
      {
        "id": "ultimate",
        "name": "Colossal Fortress",
        "type": "Ultimate",
        "tags": [
          "AoE",
          "Crowd Control",
          "Knockback"
        ],
        "cooldown": "44.0s",
        "energyCost": "110 Mana",
        "description": "Slams his bulwark into the ground, raising a defensive perimeter that knocks back diving enemies and protects backlines."
      }
    ]
  },
  "chou": {
    "resourceType": "Cooldown-Only",
    "crowdControl": [
      "Knockup",
      "Knockback",
      "Displacement",
      "Slow"
    ],
    "mobility": [
      "Triple Dash",
      "CC Immune Dash"
    ],
    "damageCharacteristics": [
      "Physical Burst",
      "Pickoff Isolation"
    ],
    "skills": [
      {
        "id": "passive",
        "name": "Only Fast",
        "type": "Passive",
        "tags": [
          "Buff",
          "Slow",
          "Crit"
        ],
        "description": "Every 8 yards traveled, Chou empowers his next basic attack to deal 180% damage and heavily slow the target."
      },
      {
        "id": "skill1",
        "name": "Jeet Kune Do",
        "type": "Skill 1",
        "tags": [
          "Triple Dash",
          "Crowd Control",
          "Knockup"
        ],
        "cooldown": "9.0s",
        "description": "Punches forward up to 3 times consecutively. The 3rd cast knocks up all nearby enemies and resets Shunpo cooldown."
      },
      {
        "id": "skill2",
        "name": "Shunpo",
        "type": "Skill 2",
        "tags": [
          "Blink",
          "CC Immunity",
          "Shield"
        ],
        "cooldown": "5.0s",
        "description": "Dashes forward with complete crowd-control immunity, gaining a physical shield and armor penetration upon landing."
      },
      {
        "id": "ultimate",
        "name": "The Way of Dragon",
        "type": "Ultimate",
        "tags": [
          "Crowd Control",
          "Displacement",
          "Kick"
        ],
        "cooldown": "34.0s",
        "description": "Roundhouse kicks an enemy hero backward, and can be recast to chase and deliver a flurry of aerial strikes."
      }
    ]
  },
  "yu-zhong": {
    "resourceType": "Sha Essence",
    "crowdControl": [
      "Knockup",
      "Slow"
    ],
    "mobility": [
      "Dragon Form",
      "Leap"
    ],
    "damageCharacteristics": [
      "Physical AoE",
      "Sha Eruption HP Drain"
    ],
    "skills": [
      {
        "id": "passive",
        "name": "Cursing Touch",
        "type": "Passive",
        "tags": [
          "DoT",
          "Heal",
          "Speed Boost"
        ],
        "description": "Applies Sha Residue to targets; at 5 stacks, erupits Sha Essence to continuously drain enemy HP and restore Yu Zhong's health."
      },
      {
        "id": "skill1",
        "name": "Dragon Tail",
        "type": "Skill 1",
        "tags": [
          "AoE",
          "Burst"
        ],
        "cooldown": "6.0s",
        "description": "Spins his cloak into sharp scales, dealing physical damage in an area with outer edge dealing bonus damage and stacks."
      },
      {
        "id": "skill2",
        "name": "Soul Grip",
        "type": "Skill 2",
        "tags": [
          "Slow",
          "Enhanced Attack"
        ],
        "cooldown": "12.0s",
        "description": "Releases Dragon Soul forward to slow enemies, empowering his next basic attack to dash and deal physical damage."
      },
      {
        "id": "skill3",
        "name": "Furious Dive",
        "type": "Skill 3",
        "tags": [
          "Blink",
          "Crowd Control",
          "Knockup"
        ],
        "cooldown": "10.5s",
        "description": "Leaps toward a target area with all his might, dealing damage and knocking up enemies after a brief delay."
      },
      {
        "id": "ultimate",
        "name": "Black Dragon Form",
        "type": "Ultimate",
        "tags": [
          "Morph",
          "CC Immunity",
          "Airborne"
        ],
        "cooldown": "60.0s",
        "description": "Transforms into the soaring Black Dragon with full CC immunity, knocking back enemies and entering empowered Dragonoid form."
      }
    ]
  },
  "paquito": {
    "resourceType": "Champ Stance",
    "crowdControl": [
      "Airborne",
      "Slow"
    ],
    "mobility": [
      "Fast Dash",
      "Champ Reset"
    ],
    "damageCharacteristics": [
      "Physical Burst",
      "Shield Stacking"
    ],
    "skills": [
      {
        "id": "passive",
        "name": "Champ Stance",
        "type": "Passive",
        "tags": [
          "Buff",
          "Cooldown Reset"
        ],
        "description": "Builds Champ Stance stacks by hitting enemies with skills. At 3 stacks, resets the next skill cooldown and empowers its effects."
      },
      {
        "id": "skill1",
        "name": "Heavy Left Punch",
        "type": "Skill 1",
        "tags": [
          "Shield",
          "Burst"
        ],
        "cooldown": "8.0s",
        "description": "Throws a heavy left punch dealing physical damage and gaining a damage-absorption shield (empowered grants double shield)."
      },
      {
        "id": "skill2",
        "name": "Jab",
        "type": "Skill 2",
        "tags": [
          "Blink",
          "AoE",
          "Burst"
        ],
        "cooldown": "7.0s",
        "description": "Dashes forward and delivers a brutal jab, dealing heavy physical damage to all enemies in the area."
      },
      {
        "id": "ultimate",
        "name": "Knockout Strike",
        "type": "Ultimate",
        "tags": [
          "Crowd Control",
          "Airborne",
          "Burst"
        ],
        "cooldown": "18.0s",
        "description": "Launches an elbow strike that slows enemies, followed by an uppercut that knocks targets airborne (empowered launches instant double uppercut)."
      }
    ]
  },
  "ruby": {
    "resourceType": "Mana",
    "crowdControl": [
      "Stun",
      "Pull",
      "Slow"
    ],
    "mobility": [
      "Leap Hops"
    ],
    "damageCharacteristics": [
      "Physical AoE",
      "Massive Lifesteal"
    ],
    "skills": [
      {
        "id": "passive",
        "name": "Let's dance!",
        "type": "Passive",
        "tags": [
          "Blink",
          "Lifesteal",
          "Defense"
        ],
        "description": "Cannot benefit from basic attack lifesteal, but converts 115% of physical lifesteal to skill lifesteal. Leaps in a direction after every skill cast."
      },
      {
        "id": "skill1",
        "name": "Be good!",
        "type": "Skill 1",
        "tags": [
          "AoE",
          "Slow"
        ],
        "cooldown": "4.0s",
        "energyCost": "40 Mana",
        "description": "Slashes forward with her scythe, dealing physical damage and sending a shockwave that slows enemies hit."
      },
      {
        "id": "skill2",
        "name": "Don't run, Wolf King!",
        "type": "Skill 2",
        "tags": [
          "AoE",
          "Crowd Control",
          "Stun"
        ],
        "cooldown": "7.0s",
        "energyCost": "50 Mana",
        "description": "Spins her giant scythe twice to pull surrounding enemies toward herself, dealing damage and stunning them for 0.5 seconds."
      },
      {
        "id": "ultimate",
        "name": "I'm offended!",
        "type": "Ultimate",
        "tags": [
          "Hook",
          "AoE",
          "Crowd Control",
          "Stun"
        ],
        "cooldown": "26.0s",
        "energyCost": "80 Mana",
        "description": "Wields scythe to hook all enemies in a wide forward cone, dragging them directly to Ruby and stunning them for 0.5s."
      }
    ]
  },
  "arlott": {
    "resourceType": "Cooldown-Only",
    "crowdControl": [
      "Stun",
      "Displacement",
      "Slow"
    ],
    "mobility": [
      "Vengeance Dash Spams"
    ],
    "damageCharacteristics": [
      "Physical Burst",
      "Mark Execution"
    ],
    "skills": [
      {
        "id": "passive",
        "name": "Demon Gaze",
        "type": "Passive",
        "tags": [
          "Debuff",
          "Mark"
        ],
        "description": "Eye demon automatically marks nearby enemy units affected by crowd control or spotted in range for 8 seconds."
      },
      {
        "id": "skill1",
        "name": "Dauntless Strike",
        "type": "Skill 1",
        "tags": [
          "Crowd Control",
          "Stun"
        ],
        "cooldown": "8.0s",
        "description": "Swings his spear forward, dealing physical damage and stunning targets in the near area, while slowing those in the far area."
      },
      {
        "id": "skill2",
        "name": "Vengeance",
        "type": "Skill 2",
        "tags": [
          "Blink",
          "Heal",
          "Cooldown Reset"
        ],
        "cooldown": "10.0s",
        "description": "Dashes at a target enemy to strike; if the target is marked by Demon Gaze, resets Vengeance cooldown and heals Arlott."
      },
      {
        "id": "ultimate",
        "name": "Final Slash",
        "type": "Ultimate",
        "tags": [
          "Crowd Control",
          "Displacement",
          "Push"
        ],
        "cooldown": "28.0s",
        "description": "Cleaves in a wide forward arc, pushing all enemy heroes hit toward the edge of the slash and revealing them."
      }
    ]
  },
  "terizla": {
    "resourceType": "Mana",
    "crowdControl": [
      "Tether",
      "Slow",
      "Knockup"
    ],
    "mobility": [
      "Leap"
    ],
    "damageCharacteristics": [
      "Physical AoE",
      "Damage Reduction Passive"
    ],
    "skills": [
      {
        "id": "passive",
        "name": "Body of Smith",
        "type": "Passive",
        "tags": [
          "Damage Reduction",
          "Defense"
        ],
        "description": "For every 2.5% HP lost, gains 1% damage reduction (up to a maximum of 35% damage reduction)."
      },
      {
        "id": "skill1",
        "name": "Revenge Strike",
        "type": "Skill 1",
        "tags": [
          "AoE",
          "Slow",
          "Speed Boost"
        ],
        "cooldown": "7.0s",
        "energyCost": "50 Mana",
        "description": "Cracks the earth to fire a fissure, dealing physical damage, slowing targets, and granting Terizla bonus movement speed."
      },
      {
        "id": "skill2",
        "name": "Execution Strike",
        "type": "Skill 2",
        "tags": [
          "Triple Strike",
          "AoE",
          "Slow"
        ],
        "cooldown": "5.0s",
        "energyCost": "25 Mana",
        "description": "Swings his massive hammer up to 3 times, each strike dealing heavy physical damage and slowing enemies."
      },
      {
        "id": "ultimate",
        "name": "Penalty Zone",
        "type": "Ultimate",
        "tags": [
          "AoE",
          "Crowd Control",
          "Tether"
        ],
        "cooldown": "40.0s",
        "energyCost": "100 Mana",
        "description": "Leaps forward to smash his hammer into the Penalty Zone, pulling and tethering enemies multiple times."
      }
    ]
  },
  "lapu-lapu": {
    "resourceType": "Bravery",
    "crowdControl": [
      "Stun",
      "Airborne",
      "Slow"
    ],
    "mobility": [
      "Dual-Stance Dashes"
    ],
    "damageCharacteristics": [
      "Physical AoE",
      "Heavy Blade Stance"
    ],
    "skills": [
      {
        "id": "passive",
        "name": "Homeland Defender",
        "type": "Passive",
        "tags": [
          "Shield",
          "Enhanced Attack"
        ],
        "description": "Gains Bravery by landing skills; when full, his next basic attack dashes to the target, granting a heavy shield."
      },
      {
        "id": "skill1",
        "name": "Justice Blades",
        "type": "Skill 1",
        "tags": [
          "AoE",
          "Boomerang"
        ],
        "cooldown": "8.0s",
        "description": "(Twin Blade) Throws twin blades forward, damaging enemies going and returning. (Heavy Blade) Slashes forward with stun."
      },
      {
        "id": "skill2",
        "name": "Jungle Warrior",
        "type": "Skill 2",
        "tags": [
          "Blink",
          "Damage Reduction"
        ],
        "cooldown": "8.0s",
        "description": "(Twin Blade) Dashes forward slashing enemies. (Heavy Blade) Whirls heavy blade gaining damage reduction per hero hit."
      },
      {
        "id": "ultimate",
        "name": "Bravest Fighter",
        "type": "Ultimate",
        "tags": [
          "Morph",
          "Airborne",
          "CC Immunity"
        ],
        "cooldown": "25.0s",
        "description": "Leaps into the air and crashes down to stun enemies, combining weapons into the Heavy Blade for 10 seconds with CC immunity."
      }
    ]
  },
  "minsitthar": {
    "resourceType": "Mana",
    "crowdControl": [
      "Hook",
      "Stun",
      "Silence Dashes"
    ],
    "mobility": [
      "Leap"
    ],
    "damageCharacteristics": [
      "Physical Burst",
      "Anti-Dash Zone"
    ],
    "skills": [
      {
        "id": "passive",
        "name": "Mark of the King",
        "type": "Passive",
        "tags": [
          "Stun",
          "Heal",
          "Gold"
        ],
        "description": "Stacking basic attacks or skills 5 times stuns the enemy target, recovers HP for Minsitthar, and grants gold."
      },
      {
        "id": "skill1",
        "name": "Spear of Glory",
        "type": "Skill 1",
        "tags": [
          "Hook",
          "Crowd Control",
          "Pull"
        ],
        "cooldown": "11.0s",
        "energyCost": "70 Mana",
        "description": "Pierces forward with his holy spear, pulling all enemy heroes hit back toward Minsitthar."
      },
      {
        "id": "skill2",
        "name": "Shield Assault",
        "type": "Skill 2",
        "tags": [
          "Shield",
          "AoE",
          "Stun"
        ],
        "cooldown": "8.0s",
        "energyCost": "60 Mana",
        "description": "Raises his golden shield to reduce frontal damage and continuously strike with spear thrusts."
      },
      {
        "id": "ultimate",
        "name": "King's Calling",
        "type": "Ultimate",
        "tags": [
          "AoE",
          "Anti-Blink",
          "Grounding"
        ],
        "cooldown": "48.0s",
        "energyCost": "150 Mana",
        "description": "Leaps forward to summon 4 royal guards, creating an arena where enemy heroes cannot use directional blink or dash skills."
      }
    ]
  },
  "balmond": {
    "resourceType": "Cooldown-Only",
    "crowdControl": [
      "Slow"
    ],
    "mobility": [
      "Forward Dash"
    ],
    "damageCharacteristics": [
      "Physical AoE",
      "Execute Burst"
    ],
    "skills": [
      {
        "id": "passive",
        "name": "Bloodthirst",
        "type": "Passive",
        "tags": [
          "Heal",
          "Sustain"
        ],
        "description": "Recovers 5% max HP upon killing a minion/creep, and 20% max HP upon eliminating an enemy hero."
      },
      {
        "id": "skill1",
        "name": "Soul Lock",
        "type": "Skill 1",
        "tags": [
          "Blink",
          "Slow"
        ],
        "cooldown": "8.0s",
        "description": "Charges forward, dealing physical damage and slowing enemies hit by 60%."
      },
      {
        "id": "skill2",
        "name": "Cyclone Sweep",
        "type": "Skill 2",
        "tags": [
          "AoE",
          "Continuous Damage"
        ],
        "cooldown": "6.0s",
        "description": "Spins his large axe continuously for 3 seconds, dealing increasing physical damage with each revolution."
      },
      {
        "id": "ultimate",
        "name": "Lethal Counter",
        "type": "Ultimate",
        "tags": [
          "AoE",
          "Execute",
          "True/Physical"
        ],
        "cooldown": "28.0s",
        "description": "Slams his giant axe down in a fan area, dealing base damage plus up to 30% of targets' lost HP as execution damage."
      }
    ]
  },
  "alucard": {
    "resourceType": "Cooldown-Only",
    "crowdControl": [
      "Slow"
    ],
    "mobility": [
      "Pursuit Leaps"
    ],
    "damageCharacteristics": [
      "Physical Burst",
      "High Lifesteal"
    ],
    "skills": [
      {
        "id": "passive",
        "name": "Pursuit",
        "type": "Passive",
        "tags": [
          "Blink",
          "Burst"
        ],
        "description": "After casting a skill, his next basic attack leaps to the target to deal extra damage. Deals 1.5x damage if hitting a single target."
      },
      {
        "id": "skill1",
        "name": "Groundsplitter",
        "type": "Skill 1",
        "tags": [
          "Blink",
          "AoE",
          "Slow"
        ],
        "cooldown": "8.0s",
        "description": "Leaps forward to slam the ground, dealing physical damage and slowing enemies hit."
      },
      {
        "id": "skill2",
        "name": "Whirling Smash",
        "type": "Skill 2",
        "tags": [
          "AoE",
          "Burst"
        ],
        "cooldown": "5.0s",
        "description": "Whirls his sword around to slash nearby enemies, dealing physical damage."
      },
      {
        "id": "ultimate",
        "name": "Fission Wave",
        "type": "Ultimate",
        "tags": [
          "Buff",
          "Lifesteal",
          "Projectile"
        ],
        "cooldown": "30.0s",
        "description": "Locks onto an enemy to absorb lifesteal and trigger extra damage; can be recast to fire a massive wave of fission energy."
      }
    ]
  },
  "bane": {
    "resourceType": "Mana",
    "crowdControl": [
      "Airborne",
      "Slow"
    ],
    "mobility": [
      "Speed Boost"
    ],
    "damageCharacteristics": [
      "Hybrid Physical/Magic",
      "Tower Push"
    ],
    "skills": [
      {
        "id": "passive",
        "name": "Shark Bite",
        "type": "Passive",
        "tags": [
          "AoE Splash",
          "Tower Damage"
        ],
        "description": "Infusing his weapon after skills, his next basic attack splashes physical damage to nearby enemies and turrets."
      },
      {
        "id": "skill1",
        "name": "Crab Claw Cannon",
        "type": "Skill 1",
        "tags": [
          "Physical Poke",
          "Bounce"
        ],
        "cooldown": "6.0s",
        "energyCost": "40 Mana",
        "description": "Fires a cannonball in a direction; upon hitting a target, bounces to an enemy behind them for amplified damage."
      },
      {
        "id": "skill2",
        "name": "Ale",
        "type": "Skill 2",
        "tags": [
          "Heal",
          "Magic Spit",
          "Speed Boost"
        ],
        "cooldown": "10.0s",
        "energyCost": "60 Mana",
        "description": "Takes a swig of ale to recover HP and boost movement speed, then spits venom forward dealing magic damage."
      },
      {
        "id": "ultimate",
        "name": "Deadly Catch",
        "type": "Ultimate",
        "tags": [
          "AoE",
          "Crowd Control",
          "Airborne",
          "Tower Damage"
        ],
        "cooldown": "40.0s",
        "energyCost": "120 Mana",
        "description": "Summons a school of sharks to rush forward, knocking enemies airborne and dealing heavy damage to enemy heroes and turrets."
      }
    ]
  },
  "zilong": {
    "resourceType": "Mana",
    "crowdControl": [
      "Flip",
      "Slow"
    ],
    "mobility": [
      "Supreme Speed",
      "Target Dash"
    ],
    "damageCharacteristics": [
      "Physical Attack Speed",
      "Armor Reduction"
    ],
    "skills": [
      {
        "id": "passive",
        "name": "Dragon Flurry",
        "type": "Passive",
        "tags": [
          "Multi-Strike",
          "Heal"
        ],
        "description": "Every 3 basic attacks, his next attack lands a rapid flurry of spear strikes that heals Zilong."
      },
      {
        "id": "skill1",
        "name": "Spear Flip",
        "type": "Skill 1",
        "tags": [
          "Displacement",
          "Crowd Control"
        ],
        "cooldown": "9.0s",
        "energyCost": "80 Mana",
        "description": "Lifts the target enemy hero and flips them backward over his shoulder, dealing physical damage."
      },
      {
        "id": "skill2",
        "name": "Spear Strike",
        "type": "Skill 2",
        "tags": [
          "Blink",
          "Armor Shred",
          "Reset"
        ],
        "cooldown": "7.0s",
        "energyCost": "40 Mana",
        "description": "Dashes to a target enemy to deal physical damage and reduce their physical defense; resets cooldown on kill."
      },
      {
        "id": "ultimate",
        "name": "Supreme Warrior",
        "type": "Ultimate",
        "tags": [
          "Buff",
          "Slow Immunity",
          "Speed Boost"
        ],
        "cooldown": "35.0s",
        "energyCost": "120 Mana",
        "description": "Gains 40% movement speed, 45% attack speed, and absolute immunity to slow effects for 7.5 seconds."
      }
    ]
  },
  "freya": {
    "resourceType": "Sacred Orbs",
    "crowdControl": [
      "Airborne",
      "Slow"
    ],
    "mobility": [
      "Leap",
      "Spirit Dash"
    ],
    "damageCharacteristics": [
      "Physical Burst",
      "High Attack Speed"
    ],
    "skills": [
      {
        "id": "passive",
        "name": "Power of Einherjar",
        "type": "Passive",
        "tags": [
          "Attack Speed",
          "Sacred Orbs"
        ],
        "description": "Gains massive attack speed on basic attacks after skill casts and generates Sacred Orbs to empower skills. Consuming a Sacred Orb causes her next Basic Attack to recover 20 (+3 * Hero Level) (+20% Total Physical Attack) HP."
      },
      {
        "id": "skill1",
        "name": "Leap of Faith",
        "type": "Skill 1",
        "tags": [
          "Blink",
          "Shield",
          "Airborne"
        ],
        "cooldown": "8.0s",
        "description": "Leaps to a target location and strikes with her shield, gaining a 500 (+100% Total Physical Attack) shield, dealing Physical Damage, and knocking enemies airborne for 0.4s."
      },
      {
        "id": "skill2",
        "name": "Valkyrie Slash",
        "type": "Skill 2",
        "tags": [
          "Dash",
          "Slow",
          "Sacred Orbs"
        ],
        "cooldown": "0.396s",
        "description": "Charges forward and slashes, dealing Physical Damage and slowing enemies by 30% for 0.5s (deals 50% damage to creeps). Has no base cooldown and consumes 2 Sacred Orbs per cast."
      },
      {
        "id": "ultimate",
        "name": "Valkyrie Descent",
        "type": "Ultimate",
        "tags": [
          "Morph",
          "Control Immunity",
          "Valkyrie Form"
        ],
        "cooldown": "60.0s",
        "description": "Dives toward the target area with Control Immunity, slowing enemies hit by 40% for 2s, and enters Valkyrie State for 10s with 30 Movement Speed and splash Basic Attacks (100–200 + 70% Total Physical Attack)."
      }
    ]
  },
  "sun": {
    "resourceType": "Mana",
    "crowdControl": [
      "Slow"
    ],
    "mobility": [
      "Doppleganger Swap",
      "Dash"
    ],
    "damageCharacteristics": [
      "Physical Swarm",
      "Armor Shred"
    ],
    "skills": [
      {
        "id": "passive",
        "name": "Simian God",
        "type": "Passive",
        "tags": [
          "Armor Reduction",
          "Heal"
        ],
        "description": "Sun and his clones shred enemy physical defense by 4% per hit (up to 40%) and heal Sun based on clone damage."
      },
      {
        "id": "skill1",
        "name": "Endless Variety",
        "type": "Skill 1",
        "tags": [
          "Clone Spawn",
          "Slow"
        ],
        "cooldown": "10.0s",
        "energyCost": "70 Mana",
        "description": "Hurls his Golden Staff forward, creating a clone upon hitting an enemy hero or creep to attack them."
      },
      {
        "id": "skill2",
        "name": "Swift Exchange",
        "type": "Skill 2",
        "tags": [
          "Blink",
          "Clone Swap"
        ],
        "cooldown": "10.0s",
        "energyCost": "70 Mana",
        "description": "Hurls his staff and leaves a clone behind while Sun dashes concealed along the staff's trajectory."
      },
      {
        "id": "ultimate",
        "name": "Clone Technique",
        "type": "Ultimate",
        "tags": [
          "Clone Spawn",
          "Buff"
        ],
        "cooldown": "36.0s",
        "energyCost": "120 Mana",
        "description": "Summons a powerful Doppleganger clone that inherits 70%–100% of Sun's attributes and fights alongside him."
      }
    ]
  },
  "alpha": {
    "resourceType": "Mana",
    "crowdControl": [
      "Airborne",
      "Slow"
    ],
    "mobility": [
      "Spear Leap"
    ],
    "damageCharacteristics": [
      "True Damage",
      "High Spell Vamp"
    ],
    "skills": [
      {
        "id": "passive",
        "name": "Beta, Advanced!",
        "type": "Passive",
        "tags": [
          "True Damage",
          "Drone"
        ],
        "description": "Attacking marked enemies commands Beta the drone to strafe the target with 3 laser blasts dealing True Damage."
      },
      {
        "id": "skill1",
        "name": "Rotary Impact",
        "type": "Skill 1",
        "tags": [
          "AoE",
          "Slow"
        ],
        "cooldown": "4.0s",
        "energyCost": "50 Mana",
        "description": "Unleashes an energy slash forward, slowing enemies while Beta follows up with strafe fire."
      },
      {
        "id": "skill2",
        "name": "Force Swing",
        "type": "Skill 2",
        "tags": [
          "AoE",
          "Heal"
        ],
        "cooldown": "6.0s",
        "energyCost": "45 Mana",
        "description": "Strikes in a forward fan area, dealing physical damage and healing Alpha for each enemy unit struck."
      },
      {
        "id": "ultimate",
        "name": "Spear of Alpha",
        "type": "Ultimate",
        "tags": [
          "Blink",
          "Crowd Control",
          "Airborne"
        ],
        "cooldown": "16.0s",
        "energyCost": "100 Mana",
        "description": "Wields spear to leap toward a target area, knocking enemies airborne and dragging them along Beta's bombardment line."
      }
    ]
  },
  "hilda": {
    "resourceType": "Cooldown-Only",
    "crowdControl": [
      "Airborne",
      "Slow"
    ],
    "mobility": [
      "Sprint"
    ],
    "damageCharacteristics": [
      "Physical Single-Target",
      "Bush Regen"
    ],
    "skills": [
      {
        "id": "passive",
        "name": "Blessing of Wilderness",
        "type": "Passive",
        "tags": [
          "Bush Regen",
          "Shield"
        ],
        "description": "Regenerates 2% of max HP per second while inside bushes and gains a shield upon entering bushes."
      },
      {
        "id": "skill1",
        "name": "Combat Ritual",
        "type": "Skill 1",
        "tags": [
          "Speed Boost",
          "Enhanced Attack"
        ],
        "cooldown": "8.0s",
        "description": "Activates combat runes to gain 60% movement speed, empowering her next basic attack to leap and strike."
      },
      {
        "id": "skill2",
        "name": "Art of Hunting",
        "type": "Skill 2",
        "tags": [
          "Triple Slash",
          "Knockback"
        ],
        "cooldown": "6.0s",
        "description": "Strikes target up to 3 times, with the final blow knocking back nearby enemies."
      },
      {
        "id": "ultimate",
        "name": "Power of Wildness",
        "type": "Ultimate",
        "tags": [
          "Execute Burst",
          "Airborne"
        ],
        "cooldown": "25.0s",
        "description": "Leaps at an enemy target to deal massive physical damage that scales with Wilderness Mark kill/assist stacks."
      }
    ]
  },
  "roger": {
    "resourceType": "Mana",
    "crowdControl": [
      "Slow"
    ],
    "mobility": [
      "Untargetable Pounce",
      "Speed Boost"
    ],
    "damageCharacteristics": [
      "Physical Burst",
      "Execute Damage"
    ],
    "skills": [
      {
        "id": "passive",
        "name": "Full Moon Curse",
        "type": "Passive",
        "tags": [
          "Slow",
          "Execute"
        ],
        "description": "Human basic attacks slow enemies; Wolf basic attacks deal extra physical damage scaling with targets' lost HP."
      },
      {
        "id": "skill1",
        "name": "Full Bore / Lycan Pounce",
        "type": "Skill 1",
        "tags": [
          "Ranged Net",
          "Untargetable Leap"
        ],
        "cooldown": "7.0s",
        "energyCost": "50 Mana",
        "description": "(Human) Fires two shots that slow enemies. (Wolf) Leaps untargetable onto a target to deliver execute damage."
      },
      {
        "id": "skill2",
        "name": "Hunter's Focus / Bloodthirsty Howl",
        "type": "Skill 2",
        "tags": [
          "Speed Boost",
          "Attack Speed"
        ],
        "cooldown": "10.0s",
        "energyCost": "50 Mana",
        "description": "(Human) Gains movement speed burst. (Wolf) Howls to gain massive attack speed and chase speed toward low-HP targets."
      },
      {
        "id": "ultimate",
        "name": "Wolf Transformation / Restore Human Form",
        "type": "Ultimate",
        "tags": [
          "Morph",
          "Blink",
          "Defense"
        ],
        "cooldown": "6.0s",
        "description": "Dashes forward and shifts between human gunner stance and savage dire wolf melee form."
      }
    ]
  },
  "argus": {
    "resourceType": "Demonic Energy",
    "crowdControl": [
      "Slow",
      "Grapple"
    ],
    "mobility": [
      "Demonic Hand Dash"
    ],
    "damageCharacteristics": [
      "Physical Attack Speed",
      "Absolute Immortality"
    ],
    "skills": [
      {
        "id": "passive",
        "name": "Warmonger",
        "type": "Passive",
        "tags": [
          "Double Strike",
          "Turret Interaction"
        ],
        "description": "Charges demonic blade when dealing or taking damage; at full charge, his next basic attack strikes twice and heals Argus (interacts with Turrets)."
      },
      {
        "id": "skill1",
        "name": "Demonic Grip",
        "type": "Skill 1",
        "tags": [
          "Blink",
          "Crowd Control",
          "Stun"
        ],
        "cooldown": "12.0s",
        "description": "Fires a demonic hand forward; pulling himself to target stuns them and allows a second dash slash."
      },
      {
        "id": "skill2",
        "name": "Meteoric Sword",
        "type": "Skill 2",
        "tags": [
          "Bleed",
          "Slow",
          "Curse"
        ],
        "cooldown": "8.0s",
        "description": "Strikes forward with cursed blade, cursing enemies to bleed and leave a cursed trail that gives Argus speed."
      },
      {
        "id": "ultimate",
        "name": "Eternal Evil",
        "type": "Ultimate",
        "tags": [
          "Invincibility",
          "Cleanse",
          "Heal"
        ],
        "cooldown": "50.0s",
        "description": "Transforms into the Fallen Angel, instantly purifying all CC and gaining 4-5s of absolute death immunity while converting damage dealt into health."
      }
    ]
  },
  "jawhead": {
    "resourceType": "Mana",
    "crowdControl": [
      "Toss",
      "Stun",
      "Slow"
    ],
    "mobility": [
      "Sprint",
      "Charge Dash"
    ],
    "damageCharacteristics": [
      "Physical Burst",
      "Pickoff Fling"
    ],
    "skills": [
      {
        "id": "passive",
        "name": "Smart Missiles",
        "type": "Passive",
        "tags": [
          "Damage Amplification"
        ],
        "description": "Each time Jawhead damages a target, he stacks Compression, increasing subsequent basic attack damage by 8% per stack."
      },
      {
        "id": "skill1",
        "name": "Smart Missiles",
        "type": "Skill 1",
        "tags": [
          "Homing Burst",
          "Physical Damage"
        ],
        "cooldown": "5.0s",
        "energyCost": "60 Mana",
        "description": "Fires 12 missiles randomly at nearby enemies over 5 seconds while moving freely."
      },
      {
        "id": "skill2",
        "name": "Ejector",
        "type": "Skill 2",
        "tags": [
          "Speed Boost",
          "Shield",
          "Toss"
        ],
        "cooldown": "12.0s",
        "energyCost": "80 Mana",
        "description": "Gains movement speed and a shield, and flings the nearest target (allied or enemy) to a designated location to stun on landing."
      },
      {
        "id": "ultimate",
        "name": "Unstoppable Force",
        "type": "Ultimate",
        "tags": [
          "Blink",
          "Crowd Control",
          "Stun"
        ],
        "cooldown": "35.0s",
        "energyCost": "120 Mana",
        "description": "Locks onto an enemy hero to charge unstoppably, dealing physical damage and stunning them upon impact."
      }
    ]
  },
  "martis": {
    "resourceType": "Cooldown-Only",
    "crowdControl": [
      "Knockback",
      "Airborne",
      "Slow"
    ],
    "mobility": [
      "Mortal Coil Dashes"
    ],
    "damageCharacteristics": [
      "True Damage Execute",
      "Reset Chain"
    ],
    "skills": [
      {
        "id": "passive",
        "name": "Ashura's Wrath",
        "type": "Passive",
        "tags": [
          "Attack Speed",
          "Buff"
        ],
        "description": "Each skill cast grants 30% attack speed (up to 120% at 4 stacks) for 4 seconds."
      },
      {
        "id": "skill1",
        "name": "Ashura Aura",
        "type": "Skill 1",
        "tags": [
          "AoE",
          "Crowd Control",
          "Pull"
        ],
        "cooldown": "7.0s",
        "description": "Draws enemies forward with Ashura teeth, dealing physical damage and slowing them by 40%."
      },
      {
        "id": "skill2",
        "name": "Mortal Coil",
        "type": "Skill 2",
        "tags": [
          "Multi-Dash",
          "CC Immunity",
          "Airborne"
        ],
        "cooldown": "8.0s",
        "description": "Strikes forward 3 times with complete CC immunity and damage reduction, knockback, and a final airborne leap."
      },
      {
        "id": "ultimate",
        "name": "Decimation",
        "type": "Ultimate",
        "tags": [
          "True Damage",
          "Execute",
          "Cooldown Reset"
        ],
        "cooldown": "36.0s",
        "description": "Charges an enemy hero dealing physical damage; if the target is below 50% HP, deals True Damage and fully resets cooldown upon securing the kill."
      }
    ]
  },
  "aldous": {
    "resourceType": "Mana",
    "crowdControl": [
      "Stun",
      "Slow"
    ],
    "mobility": [
      "Global Charge"
    ],
    "damageCharacteristics": [
      "Physical One-Shot",
      "Infinite Scaling"
    ],
    "skills": [
      {
        "id": "passive",
        "name": "Contract: Transform",
        "type": "Passive",
        "tags": [
          "Shield",
          "Basic Attack"
        ],
        "description": "Every 8s, gains a shield equal to 350 (+3 per Soul Steal stack) for 3s on his next Basic Attack and gains 60% Movement Speed for 1s."
      },
      {
        "id": "skill1",
        "name": "Contract: Soul Steal",
        "type": "Skill 1",
        "tags": [
          "Stacking",
          "Burst"
        ],
        "cooldown": "4.0s",
        "energyCost": "45 Mana",
        "description": "Empowers his next basic attack and grants 20% Movement Speed when moving toward enemy heroes. Eliminating units permanently increases Soul Steal stacks (up to 1000)."
      },
      {
        "id": "skill2",
        "name": "Contract: Explosion",
        "type": "Skill 2",
        "tags": [
          "Damage Reduction",
          "Stun"
        ],
        "cooldown": "8.0s",
        "energyCost": "80 Mana",
        "description": "Assumes a defensive stance gaining 30%–55% damage reduction for 2s or until canceled; explodes to stun surrounding enemies for 0.5–1s."
      },
      {
        "id": "ultimate",
        "name": "Contract: Chase Fate",
        "type": "Ultimate",
        "tags": [
          "Global Vision",
          "Targeted Charge",
          "Stun"
        ],
        "cooldown": "60.0s",
        "energyCost": "150 Mana",
        "description": "Reveals all enemy hero positions on the map for 5 seconds; re-activating charges unstoppably across the map into a chosen hero to stun them."
      }
    ]
  },
  "leomord": {
    "resourceType": "Cooldown-Only",
    "crowdControl": [
      "Slow",
      "Knockback"
    ],
    "mobility": [
      "Mounted Combat"
    ],
    "damageCharacteristics": [
      "Physical Guaranteed Crit",
      "Mounted Cleaves"
    ],
    "skills": [
      {
        "id": "passive",
        "name": "The Oathkeeper",
        "type": "Passive",
        "tags": [
          "Guaranteed Crit"
        ],
        "description": "If target enemy is below 50% HP, all of Leomord's basic attacks deal guaranteed critical damage."
      },
      {
        "id": "skill1",
        "name": "Momentum",
        "type": "Skill 1",
        "tags": [
          "AoE",
          "Shield",
          "Slow"
        ],
        "cooldown": "7.0s",
        "description": "(Human) Gains shield and charges forward to unleash a heavy slash. (Mounted) Horse stomps dealing physical damage."
      },
      {
        "id": "skill2",
        "name": "Decimation Assault",
        "type": "Skill 2",
        "tags": [
          "Blink",
          "Slow"
        ],
        "cooldown": "10.0s",
        "description": "(Human) Dashes in target direction. (Mounted) Horse charges forward knocking back all enemies in his path."
      },
      {
        "id": "ultimate",
        "name": "Phantom Steed",
        "type": "Ultimate",
        "tags": [
          "Mounted Form",
          "Defense",
          "Speed Boost"
        ],
        "cooldown": "40.0s",
        "description": "Summons steed Barbiel to rush toward him; meeting Barbiel mounts Leomord, granting massive defense, speed, and mounted skills."
      }
    ]
  },
  "thamuz": {
    "resourceType": "Cooldown-Only",
    "crowdControl": [
      "Slow",
      "Pull"
    ],
    "mobility": [
      "Leap"
    ],
    "damageCharacteristics": [
      "True Damage Burn",
      "Extreme Attack Speed"
    ],
    "skills": [
      {
        "id": "passive",
        "name": "Grand Lord Lava",
        "type": "Passive",
        "tags": [
          "True Damage",
          "Molten Pool"
        ],
        "description": "Attacks ignite Scorch marks that erupt into molten lava pools dealing True Damage (interacts with Turrets)."
      },
      {
        "id": "skill1",
        "name": "Molten Scythes",
        "type": "Skill 1",
        "tags": [
          "Scythe Throw",
          "Slow",
          "Pull"
        ],
        "cooldown": "2.0s",
        "description": "Tosses scythes into a target area to continuously damage and slow enemies; retrieving them pulls enemies."
      },
      {
        "id": "skill2",
        "name": "Chasm Trample",
        "type": "Skill 2",
        "tags": [
          "Blink",
          "Slow"
        ],
        "cooldown": "11.0s",
        "description": "Jumps to a target area, dealing physical damage and slowing targets while retrieving thrown scythes."
      },
      {
        "id": "ultimate",
        "name": "Cauterant Inferno",
        "type": "Ultimate",
        "tags": [
          "Buff",
          "Max HP",
          "Attack Speed",
          "Heal"
        ],
        "cooldown": "40.0s",
        "description": "Erupts molten lava around himself, gaining massive bonus max HP, attack speed, and health recovery with basic attacks."
      }
    ]
  },
  "badang": {
    "resourceType": "Mana",
    "crowdControl": [
      "Wall Trap",
      "Knockback",
      "Stun"
    ],
    "mobility": [
      "Dash"
    ],
    "damageCharacteristics": [
      "Physical Burst",
      "Wall Stun Lock"
    ],
    "skills": [
      {
        "id": "passive",
        "name": "Chivalry Fist",
        "type": "Passive",
        "tags": [
          "Knockback",
          "Stun"
        ],
        "description": "Every 4th basic attack knocks back the target; if they hit an obstacle or wall, they are stunned."
      },
      {
        "id": "skill1",
        "name": "Qigong Fist",
        "type": "Skill 1",
        "tags": [
          "AoE",
          "Slow",
          "Knockback"
        ],
        "cooldown": "7.0s",
        "energyCost": "40 Mana",
        "description": "Punches wind energy forward, dealing physical damage and knocking back enemies with charges stored."
      },
      {
        "id": "skill2",
        "name": "Fist Break",
        "type": "Skill 2",
        "tags": [
          "Blink",
          "Terrain",
          "Wall Trap"
        ],
        "cooldown": "9.0s",
        "energyCost": "60 Mana",
        "description": "Dashes forward; hitting an enemy hero creates a stone wall behind them, trapping them inside."
      },
      {
        "id": "ultimate",
        "name": "Fist Crack",
        "type": "Ultimate",
        "tags": [
          "AoE",
          "CC Immunity",
          "Burst"
        ],
        "cooldown": "34.0s",
        "energyCost": "100 Mana",
        "description": "Unleashes an overwhelming flurry of rapid punches with complete CC immunity and shield, devastating wall-trapped foes."
      }
    ]
  },
  "guinevere": {
    "resourceType": "Super Magic",
    "crowdControl": [
      "Airborne",
      "Slow"
    ],
    "mobility": [
      "Jump Dash"
    ],
    "damageCharacteristics": [
      "Magic Burst",
      "Airborne Lock"
    ],
    "skills": [
      {
        "id": "passive",
        "name": "Super Magic",
        "type": "Passive",
        "tags": [
          "Enhanced Attack",
          "Heal"
        ],
        "description": "Deals 25% extra damage to airborne targets; basic attacks build Super Magic to dash and restore lost HP."
      },
      {
        "id": "skill1",
        "name": "Energy Wave",
        "type": "Skill 1",
        "tags": [
          "Poke",
          "Slow",
          "Cooldown Reduction"
        ],
        "cooldown": "4.0s",
        "description": "Fires an energy orb forward, dealing magic damage, slowing enemies, and reducing all skill cooldowns by 1s."
      },
      {
        "id": "skill2",
        "name": "Spatial Migration",
        "type": "Skill 2",
        "tags": [
          "Blink",
          "Crowd Control",
          "Airborne"
        ],
        "cooldown": "17.0s",
        "description": "Leaps to a target location to knock enemies airborne for 1 second, leaving a decoy clone behind."
      },
      {
        "id": "ultimate",
        "name": "Violet Requiem",
        "type": "Ultimate",
        "tags": [
          "AoE",
          "CC Lock",
          "Airborne Extension"
        ],
        "cooldown": "45.0s",
        "description": "Channels a violet magical storm, keeping all nearby airborne enemies suspended in the air while inflicting massive damage."
      }
    ]
  },
  "x-borg": {
    "resourceType": "Firaga Armor",
    "crowdControl": [
      "Slow",
      "Pull"
    ],
    "mobility": [
      "Spinning Dash"
    ],
    "damageCharacteristics": [
      "True Damage",
      "Overheat Melting"
    ],
    "skills": [
      {
        "id": "passive",
        "name": "Firaga Armor",
        "type": "Passive",
        "tags": [
          "Armor State",
          "True Damage"
        ],
        "description": "Equipped with Firaga Armor inheriting his extra HP. Taking fatal damage ejections the armor; flames overheat targets to deal True Damage."
      },
      {
        "id": "skill1",
        "name": "Fire Missiles",
        "type": "Skill 1",
        "tags": [
          "Continuous Flame",
          "True Damage"
        ],
        "cooldown": "4.0s",
        "description": "Sprays a cone of flame forward continuously, melting enemy armor and dealing True Damage to overheated targets."
      },
      {
        "id": "skill2",
        "name": "Fire Stake",
        "type": "Skill 2",
        "tags": [
          "Pull",
          "Displacement"
        ],
        "cooldown": "11.0s",
        "description": "Shoots fire stakes into the ground; pulling them back drags all enemies caught in their path."
      },
      {
        "id": "ultimate",
        "name": "Last Insanity",
        "type": "Ultimate",
        "tags": [
          "Blink",
          "AoE",
          "True Damage Burst"
        ],
        "cooldown": "30.0s",
        "description": "Spins in a designated direction while spraying flames, then self-detonates dealing massive True Damage to all surrounding enemies."
      }
    ]
  },
  "dyrroth": {
    "resourceType": "Rage",
    "crowdControl": [
      "Slow"
    ],
    "mobility": [
      "Spectre Dash"
    ],
    "damageCharacteristics": [
      "Physical Burst",
      "75% Armor Shred"
    ],
    "skills": [
      {
        "id": "passive",
        "name": "Wrath of the Abyss",
        "type": "Passive",
        "tags": [
          "Circle Strike",
          "Heal",
          "Turret Interaction"
        ],
        "description": "Builds Rage; reaching 2 hits triggers Circle Strike, dealing physical damage, healing Dyrroth, and hitting Turrets."
      },
      {
        "id": "skill1",
        "name": "Burst Strike",
        "type": "Skill 1",
        "tags": [
          "AoE",
          "Slow"
        ],
        "cooldown": "5.0s",
        "description": "Releases three linear bursts of abyssal strikes forward, dealing physical damage and slowing enemies."
      },
      {
        "id": "skill2",
        "name": "Spectre Step",
        "type": "Skill 2",
        "tags": [
          "Blink",
          "Defense Shred"
        ],
        "cooldown": "8.0s",
        "description": "Dashes forward; recasting locks onto an enemy to reduce their physical defense by 50% to 75% for 4 seconds."
      },
      {
        "id": "ultimate",
        "name": "The Destruction",
        "type": "Ultimate",
        "tags": [
          "AoE",
          "Execute Burst",
          "Slow"
        ],
        "cooldown": "36.0s",
        "description": "Charges abyssal energy and strikes forward, dealing colossal physical damage plus percentage of targets' lost HP."
      }
    ]
  },
  "masha": {
    "resourceType": "Feral Energy",
    "crowdControl": [
      "Stun",
      "Slow",
      "Knockback"
    ],
    "mobility": [
      "Feral Dash"
    ],
    "damageCharacteristics": [
      "Physical HP Scaling",
      "3-HP Bar Berserker"
    ],
    "skills": [
      {
        "id": "passive",
        "name": "Primal Pact",
        "type": "Passive",
        "tags": [
          "3 HP Bars",
          "Feral State",
          "Purify"
        ],
        "description": "Possesses 3 distinct HP bars, clearing control effects and blocking lethal damage upon losing a bar. Dealing damage charges Feral energy. Skill hits randomly replace one of the target's existing Wounds with a new one in the direction of the hit; breaking a Wound triggers Feral State, granting Resilience, Attack Speed, Movement Speed, and enhanced wide-range claw strikes dealing (2 + 0.5% Extra Physical Attack + 0.2 * Hero Level)% Max HP Extra Physical Damage and restoring 3%–6% Max HP."
      },
      {
        "id": "skill1",
        "name": "Feral Swipe",
        "type": "Skill 1",
        "tags": [
          "AoE",
          "Damage"
        ],
        "cooldown": "8.0s",
        "description": "Releases an energy surge forward, dealing Physical Damage (+55% Total Physical Attack bonus) to enemies in her path and 150%–200% damage to minions."
      },
      {
        "id": "skill2",
        "name": "Claw Strike",
        "type": "Skill 2",
        "tags": [
          "Blink",
          "Mobility",
          "Slow"
        ],
        "cooldown": "9.0s",
        "description": "Dashes in a target direction with a narrowed path (-20% width), dealing 60–240 (+40% Extra Physical Attack) Physical Damage and slowing enemy heroes hit by 50% for 1s. Cooldown resets whenever an HP bar is depleted."
      },
      {
        "id": "ultimate",
        "name": "Savage Maul",
        "type": "Ultimate",
        "tags": [
          "Crowd Control",
          "Stun",
          "Knockback",
          "Burst"
        ],
        "cooldown": "42.0s",
        "description": "Charges directly at a target enemy hero, dealing Physical Damage, stunning them for 1s, and knocking back nearby enemies."
      }
    ]
  },
  "silvanna": {
    "resourceType": "Mana",
    "crowdControl": [
      "Restraint",
      "Stun",
      "Pull"
    ],
    "mobility": [
      "Lance Dash",
      "Imperial Leap"
    ],
    "damageCharacteristics": [
      "Magic Burst",
      "Magic Defense Shred"
    ],
    "skills": [
      {
        "id": "passive",
        "name": "Knightess' Resolve",
        "type": "Passive",
        "tags": [
          "Debuff",
          "Defense Shred"
        ],
        "description": "Basic attacks reduce enemy physical and magic defense by up to 5 stacks, amplifying damage dealt by Silvanna."
      },
      {
        "id": "skill1",
        "name": "Cometic Lance",
        "type": "Skill 1",
        "tags": [
          "Blink",
          "Crowd Control",
          "Stun"
        ],
        "cooldown": "12.0s",
        "energyCost": "70 Mana",
        "description": "Strikes forward with lance to stun the first enemy hit; can be recast to dash in a designated direction."
      },
      {
        "id": "skill2",
        "name": "Spiral Strangling",
        "type": "Skill 2",
        "tags": [
          "AoE",
          "Shield",
          "Multi-Hit"
        ],
        "cooldown": "8.0s",
        "energyCost": "50 Mana",
        "description": "Spins lance forward up to 6 times, pulling enemies inward, dealing magic damage, and generating a shield."
      },
      {
        "id": "ultimate",
        "name": "Imperial Justice",
        "type": "Ultimate",
        "tags": [
          "Blink",
          "Crowd Control",
          "Restraint"
        ],
        "cooldown": "38.0s",
        "energyCost": "130 Mana",
        "description": "Leaps toward target area creating the Imperial Zone, trapping the target so they cannot escape with dashes or blinks."
      }
    ]
  },
  "khaleed": {
    "resourceType": "Desert Power",
    "crowdControl": [
      "Stun",
      "Knockback",
      "Slow"
    ],
    "mobility": [
      "Sand Surfing",
      "Sandstorm Leap"
    ],
    "damageCharacteristics": [
      "Physical Burst",
      "High Channel Heal"
    ],
    "skills": [
      {
        "id": "passive",
        "name": "Sand Walk",
        "type": "Passive",
        "tags": [
          "Sand Surfing",
          "Speed Boost"
        ],
        "description": "Accumulates Desert Power while moving; when full, surfs on sand gaining 25% movement speed and empowering his next attack."
      },
      {
        "id": "skill1",
        "name": "Desert Tornado",
        "type": "Skill 1",
        "tags": [
          "AoE",
          "Multi-Cast"
        ],
        "cooldown": "5.5s",
        "energyCost": "50 Mana",
        "description": "Whirls scimitar to deal physical damage; can be cast up to 3 times consecutively if hitting enemies."
      },
      {
        "id": "skill2",
        "name": "Quicksand Guard",
        "type": "Skill 2",
        "tags": [
          "Heal",
          "Damage Reduction",
          "Slow"
        ],
        "cooldown": "22.0s",
        "energyCost": "80 Mana",
        "description": "Channels quicksand to gain 50%–70% damage reduction and rapidly regenerate massive amounts of HP."
      },
      {
        "id": "ultimate",
        "name": "Raging Sandstorm",
        "type": "Ultimate",
        "tags": [
          "Blink",
          "CC Immunity",
          "Stun"
        ],
        "cooldown": "46.0s",
        "energyCost": "100 Mana",
        "description": "Summons a raging sandstorm to surf forward with CC immunity, slamming down at the destination to stun enemies for 1s."
      }
    ]
  },
  "phoveus": {
    "resourceType": "Mana",
    "crowdControl": [
      "Knockback",
      "Displacement",
      "Slow"
    ],
    "mobility": [
      "Pursuit Leaps"
    ],
    "damageCharacteristics": [
      "Physical Burst",
      "Anti-Blink Chaining"
    ],
    "skills": [
      {
        "id": "passive",
        "name": "Demonic Force",
        "type": "Passive",
        "tags": [
          "Shield",
          "Knockback",
          "Cooldown Reduction"
        ],
        "description": "Empowers his next basic attack to charge at the target, knock them back, deal Physical Damage, and grant a Shield. Cooldown reduced by 5s whenever nearby enemies blink or get displaced."
      },
      {
        "id": "skill1",
        "name": "Demonic Impact",
        "type": "Skill 1",
        "tags": [
          "AoE",
          "Physical Damage",
          "Slow"
        ],
        "cooldown": "4.5s",
        "energyCost": "50 Mana",
        "description": "Slams weapon into the ground, dealing Physical Damage to nearby enemies, slowing them, and applying marks for combo follow-ups."
      },
      {
        "id": "skill2",
        "name": "Dark Wave",
        "type": "Skill 2",
        "tags": [
          "AoE",
          "Crowd Control",
          "Uninterruptible"
        ],
        "cooldown": "8.5s",
        "energyCost": "60 Mana",
        "description": "Deploys a dark wave that pulls enemies inward; the cast animation is completely uninterruptible by control effects."
      },
      {
        "id": "ultimate",
        "name": "Infernal Pursuit",
        "type": "Ultimate",
        "tags": [
          "Target Leap",
          "Chaining",
          "Physical Burst"
        ],
        "cooldown": "12.0s",
        "energyCost": "70 Mana",
        "description": "Leaps aggressively onto targets marked by his skills or enemy displacements, dealing heavy Physical Damage and chaining to multiple marked targets."
      }
    ]
  },
  "aulus": {
    "resourceType": "Mana",
    "crowdControl": [
      "Slow"
    ],
    "mobility": [
      "Charge Sprint"
    ],
    "damageCharacteristics": [
      "Physical AoE Cleaves",
      "Late-Game Hyper-Scaling"
    ],
    "skills": [
      {
        "id": "passive",
        "name": "Fighting Spirit",
        "type": "Passive",
        "tags": [
          "Stacking",
          "Axe Evolution"
        ],
        "description": "Basic attacks build Fighting Spirit. Axe evolves at levels 4, 8, and 12, gaining blade length, critical damage, and physical attack."
      },
      {
        "id": "skill1",
        "name": "Aulus, Charge!",
        "type": "Skill 1",
        "tags": [
          "Speed Boost",
          "Damage Reduction"
        ],
        "cooldown": "12.0s",
        "energyCost": "50 Mana",
        "description": "Channels to gain up to 45% decaying movement speed and 20% frontal damage reduction, unleashing a smash upon release."
      },
      {
        "id": "skill2",
        "name": "The Power of Axe",
        "type": "Skill 2",
        "tags": [
          "AoE",
          "Attack Speed",
          "Heal"
        ],
        "cooldown": "7.0s",
        "energyCost": "45 Mana",
        "description": "Strikes forward with axe, gaining 140% attack speed and health recovery for his next few basic attacks."
      },
      {
        "id": "ultimate",
        "name": "Undying Fury",
        "type": "Ultimate",
        "tags": [
          "AoE",
          "Lava Trail",
          "Slow"
        ],
        "cooldown": "40.0s",
        "energyCost": "120 Mana",
        "description": "Slams ground to split earth into a blazing trail, dealing physical damage and slowing enemies walking on the lava."
      }
    ]
  },
  "yin": {
    "resourceType": "Cooldown-Only",
    "crowdControl": [
      "Stun",
      "Slow",
      "Domain Isolation"
    ],
    "mobility": [
      "Sprint",
      "Instant Dash"
    ],
    "damageCharacteristics": [
      "Physical Burst",
      "1v1 Lieh Realm"
    ],
    "skills": [
      {
        "id": "passive",
        "name": "Leave It to Me",
        "type": "Passive",
        "tags": [
          "Damage Buff"
        ],
        "description": "When no allied heroes are within 4 yards, increases damage dealt by 120% and gains damage reduction."
      },
      {
        "id": "skill1",
        "name": "Charged Punch / Frenzy Strike",
        "type": "Skill 1",
        "tags": [
          "Speed Boost",
          "AoE",
          "Burst"
        ],
        "cooldown": "10.0s",
        "description": "(Yin) Gains speed and delivers a charged punch. (Lieh) Slams ground repeatedly with relentless CC-immune frenzy punches."
      },
      {
        "id": "skill2",
        "name": "Instant Blast",
        "type": "Skill 2",
        "tags": [
          "Blink",
          "Crowd Control",
          "Stun"
        ],
        "cooldown": "12.0s",
        "description": "Dashes forward; golden rings trail behind him, pulling toward Yin and stunning enemies caught in between."
      },
      {
        "id": "ultimate",
        "name": "My Turn",
        "type": "Ultimate",
        "tags": [
          "Domain Pull",
          "Morph",
          "1v1 Arena"
        ],
        "cooldown": "55.0s",
        "description": "Pulls an enemy hero into the Lieh Domain for an isolated 1v1 duel for 8 seconds, transforming into the evil deity Lieh."
      }
    ]
  },
  "cici": {
    "resourceType": "Delight",
    "crowdControl": [
      "Slow",
      "Tether"
    ],
    "mobility": [
      "Buoyant Leap",
      "High Movement Speed"
    ],
    "damageCharacteristics": [
      "Physical % Max HP",
      "Continuous Yo-Yo"
    ],
    "skills": [
      {
        "id": "passive",
        "name": "Performer's Delight",
        "type": "Passive",
        "tags": [
          "Speed Boost",
          "Spell Vamp"
        ],
        "description": "Generates Delight stacks by hitting enemies, gaining up to 10 stacks that boost Movement Speed and Spell Vamp."
      },
      {
        "id": "skill1",
        "name": "Yo-Yo Attack",
        "type": "Skill 1",
        "tags": [
          "% Max HP Damage",
          "Mobile Attack"
        ],
        "cooldown": "6.5s",
        "description": "Hurls Yo-Yo to continuously strike the nearest target for 3.5 seconds, dealing Physical Damage scaling with target's Max HP."
      },
      {
        "id": "skill2",
        "name": "Buoyant Bounce",
        "type": "Skill 2",
        "tags": [
          "Blink",
          "Terrain Jump"
        ],
        "cooldown": "9.5s",
        "description": "Leaps in a direction; landing on any unit bounces Cici further forward, allowing her to traverse walls."
      },
      {
        "id": "ultimate",
        "name": "Curtain Call",
        "type": "Ultimate",
        "tags": [
          "Tether",
          "Slow",
          "Yo-Yo Double Hit"
        ],
        "cooldown": "36.0s",
        "description": "Throws Yo-Yo to tether two enemy heroes together, slowing them and allowing Yo-Yo Attack to strike both simultaneously."
      }
    ]
  },
  "lukas": {
    "resourceType": "Resolve",
    "crowdControl": [
      "Shockwave",
      "Stun",
      "Slow"
    ],
    "mobility": [
      "Flash Step"
    ],
    "damageCharacteristics": [
      "Physical AoE",
      "Sacred Beast Form"
    ],
    "skills": [
      {
        "id": "passive",
        "name": "Hero's Resolve",
        "type": "Passive",
        "tags": [
          "Transformation",
          "Resolve"
        ],
        "description": "Gains 0.5 Resolve per second and 3.5 Resolve when dealing damage to heroes. At 100 Resolve, can transform into Sacred Beast form, boosting combat attributes until Resolve depletes."
      },
      {
        "id": "skill1",
        "name": "Flash Combo",
        "type": "Skill 1",
        "tags": [
          "AoE",
          "Heal",
          "Stun"
        ],
        "cooldown": "5.5s",
        "description": "Consumes Vigor stacks (up to 2) to unleash Pulverize (400–800 + 60% Total Physical Attack Physical Damage, recovering 8% Max HP on hero/minion hit) followed by spinning tonfa strikes (95–235 + 25% Total Physical Attack each)."
      },
      {
        "id": "skill2",
        "name": "Flash Step",
        "type": "Skill 2",
        "tags": [
          "Blink",
          "Dash",
          "Speed Boost"
        ],
        "cooldown": "12.0s",
        "description": "Dashes in the target direction, empowering his next Basic Attack within 4s into Flash Strike to dash behind the enemy and gain 20% Movement Speed and Attack Speed for 4s."
      },
      {
        "id": "ultimate",
        "name": "Unleash the Beast",
        "type": "Ultimate",
        "tags": [
          "Transform",
          "Shockwave",
          "Control Immunity"
        ],
        "description": "Transforms into Sacred Beast form (gaining 30 Movement Speed and 15% increased attributes) and can recast to fire a Shockwave Blast dealing heavy Physical Damage."
      }
    ]
  },
  "sora": {
    "resourceType": "Mana",
    "crowdControl": [
      "Airborne",
      "Slow"
    ],
    "mobility": [
      "Aerial Dash"
    ],
    "damageCharacteristics": [
      "Physical AoE",
      "Wind Deflection"
    ],
    "skills": [
      {
        "id": "passive",
        "name": "Sky Sovereign",
        "type": "Passive",
        "tags": [
          "Deflection",
          "Speed Boost"
        ],
        "description": "Gains aerial swiftness, deflecting incoming ranged projectile damage and increasing lane trading resilience."
      },
      {
        "id": "skill1",
        "name": "Gale Strike",
        "type": "Skill 1",
        "tags": [
          "AoE",
          "Slow"
        ],
        "cooldown": "6.0s",
        "energyCost": "40 Mana",
        "description": "Slashes forward with wind blades that pierce through minions and deal physical damage."
      },
      {
        "id": "skill2",
        "name": "Wind Barrier",
        "type": "Skill 2",
        "tags": [
          "Shield",
          "Projectile Block"
        ],
        "cooldown": "11.0s",
        "energyCost": "65 Mana",
        "description": "Deploys a vortex barrier to absorb incoming attacks and boost Sora's next offensive dash."
      },
      {
        "id": "ultimate",
        "name": "Aerial Descent",
        "type": "Ultimate",
        "tags": [
          "Blink",
          "Crowd Control",
          "Airborne"
        ],
        "cooldown": "42.0s",
        "energyCost": "100 Mana",
        "description": "Soars skyward and descends upon the target area, knocking up all enemies caught within the whirlwind."
      }
    ]
  },
  "fanny": {
    "resourceType": "Energy",
    "crowdControl": [],
    "mobility": [
      "Steel Cables",
      "High-Speed Flight"
    ],
    "damageCharacteristics": [
      "Physical Burst",
      "Flying Cable Cleaves"
    ],
    "skills": [
      {
        "id": "passive",
        "name": "Air Superiority",
        "type": "Passive",
        "tags": [
          "Damage Buff",
          "Energy Regen"
        ],
        "description": "Deals 15%–30% extra damage while flying and regenerates energy when hitting prey marked with Prey Marks."
      },
      {
        "id": "skill1",
        "name": "Tornado Strike",
        "type": "Skill 1",
        "tags": [
          "AoE",
          "Burst"
        ],
        "cooldown": "3.5s",
        "energyCost": "25 Energy",
        "description": "Whirls her twin blades to deal physical damage to nearby enemies. Triggers automatically when cables hit targets while flying."
      },
      {
        "id": "skill2",
        "name": "Steel Cable",
        "type": "Skill 2",
        "tags": [
          "Cable Flight",
          "Mobility"
        ],
        "cooldown": "0.0s",
        "energyCost": "17 Energy",
        "description": "Shoots a cable that pulls Fanny to obstacles. Consecutive cable casts reduce energy cost by 1."
      },
      {
        "id": "ultimate",
        "name": "Cut Throat",
        "type": "Ultimate",
        "tags": [
          "Target Burst",
          "Finisher"
        ],
        "cooldown": "35.0s",
        "energyCost": "30 Energy",
        "description": "Initiates a lethal ambush dive onto an enemy target, dealing colossal physical damage scaling with Prey Marks."
      }
    ]
  },
  "ling": {
    "resourceType": "Lightness Points",
    "crowdControl": [
      "Airborne",
      "Slow"
    ],
    "mobility": [
      "Wall Walking",
      "Invulnerable Tempest"
    ],
    "damageCharacteristics": [
      "Physical Crit Burst",
      "Sword Field Pickups"
    ],
    "skills": [
      {
        "id": "passive",
        "name": "Cloud Walker",
        "type": "Passive",
        "tags": [
          "Crit Rate",
          "Lightness"
        ],
        "description": "Gains 2x critical chance from all sources, but critical damage is capped at 140%. Recovers 4 extra Lightness Points per second while on walls."
      },
      {
        "id": "skill1",
        "name": "Finch Poise",
        "type": "Skill 1",
        "tags": [
          "Wall Leap",
          "Passive Crit"
        ],
        "cooldown": "10.0s",
        "energyCost": "35 Lightness",
        "description": "Leaps onto terrain walls, gaining camouflage and high movement speed. Passively increases critical chance."
      },
      {
        "id": "skill2",
        "name": "Defiant Sword",
        "type": "Skill 2",
        "tags": [
          "Blink",
          "Crit Strike"
        ],
        "cooldown": "2.5s",
        "energyCost": "40 Lightness",
        "description": "Dashes in target direction and stabs, dealing physical damage that can trigger basic attack critical hits."
      },
      {
        "id": "ultimate",
        "name": "Tempest of Blades",
        "type": "Ultimate",
        "tags": [
          "Invincible Leap",
          "Airborne",
          "Sword Field"
        ],
        "cooldown": "48.0s",
        "energyCost": "0 Lightness",
        "description": "Leaps into the air untargetable for 1.5 seconds, then slams down to knock enemies airborne and create a field of 4 Tempest Blades."
      }
    ]
  },
  "hayabusa": {
    "resourceType": "Energy",
    "crowdControl": [
      "Slow"
    ],
    "mobility": [
      "Quad Shadows",
      "Shadow Blink"
    ],
    "damageCharacteristics": [
      "Physical Single-Target",
      "Shadow Strike Marks"
    ],
    "skills": [
      {
        "id": "passive",
        "name": "Ninjutsu: Trace of Shadow",
        "type": "Passive",
        "tags": [
          "Shadow Stacks",
          "Damage Amp"
        ],
        "description": "Deals damage to apply Shadow Marks (up to 4 stacks), each stack amplifying Hayabusa's damage by 5%."
      },
      {
        "id": "skill1",
        "name": "Ninjutsu: Phantom Shuriken",
        "type": "Skill 1",
        "tags": [
          "Multi-Shuriken",
          "Energy Regen"
        ],
        "cooldown": "4.0s",
        "energyCost": "30 Energy",
        "description": "Fires 3 shurikens forward in a fan area, recovering energy upon hitting non-minion targets."
      },
      {
        "id": "skill2",
        "name": "Ninjutsu: Quad Shadow",
        "type": "Skill 2",
        "tags": [
          "Quad Blink",
          "Slow"
        ],
        "cooldown": "18.0s",
        "energyCost": "25 Energy",
        "description": "Dashes in target direction and projects 4 shadows. Recasting teleports Hayabusa directly to any shadow."
      },
      {
        "id": "ultimate",
        "name": "Ougi: Shadow Kill",
        "type": "Ultimate",
        "tags": [
          "Untargetable",
          "Multi-Strike",
          "Burst"
        ],
        "cooldown": "40.0s",
        "energyCost": "25 Energy",
        "description": "Becomes untargetable and executes 6-12 rapid shadow strikes on nearby enemies, prioritizing targets with Shadow Marks."
      }
    ]
  },
  "lancelot": {
    "resourceType": "Mana",
    "crowdControl": [
      "Slow"
    ],
    "mobility": [
      "Puncture Chains",
      "Invulnerable Rose"
    ],
    "damageCharacteristics": [
      "Physical Burst",
      "Untargetable Slashes"
    ],
    "skills": [
      {
        "id": "passive",
        "name": "Soul Cutter",
        "type": "Passive",
        "tags": [
          "Damage Buff"
        ],
        "description": "Each time Lancelot dashes or blinks, his damage dealt increases by 7.5% for 4 seconds (up to 30%)."
      },
      {
        "id": "skill1",
        "name": "Puncture",
        "type": "Skill 1",
        "tags": [
          "Dash Chain",
          "Reset"
        ],
        "cooldown": "12.0s",
        "energyCost": "50 Mana",
        "description": "Charges forward dealing physical damage and applying a Sword Mark. Hitting an unmarked enemy completely resets Puncture cooldown."
      },
      {
        "id": "skill2",
        "name": "Thorned Rose",
        "type": "Skill 2",
        "tags": [
          "Untargetable",
          "AoE",
          "Slow"
        ],
        "cooldown": "8.0s",
        "energyCost": "70 Mana",
        "description": "Strikes in a triangular area 3 times with complete invulnerability, dealing heavy physical damage and slowing targets."
      },
      {
        "id": "ultimate",
        "name": "Phantom Execution",
        "type": "Ultimate",
        "tags": [
          "Invulnerable Dash",
          "Burst"
        ],
        "cooldown": "25.0s",
        "energyCost": "100 Mana",
        "description": "Charges briefly with invulnerability before thrusting forward in a line, dealing devastating physical damage."
      }
    ]
  },
  "saber": {
    "resourceType": "Mana",
    "crowdControl": [
      "Airborne",
      "Knockup"
    ],
    "mobility": [
      "Charge Dash"
    ],
    "damageCharacteristics": [
      "Physical Armor Shred",
      "Single-Target Assassination"
    ],
    "skills": [
      {
        "id": "passive",
        "name": "Enemy's Bane",
        "type": "Passive",
        "tags": [
          "Armor Reduction"
        ],
        "description": "Attacks shred 3–7 physical defense per hit (stacks up to 5 times) for 5 seconds."
      },
      {
        "id": "skill1",
        "name": "Orbiting Swords",
        "type": "Skill 1",
        "tags": [
          "Orbiting Blades",
          "Ranged Procs"
        ],
        "cooldown": "8.0s",
        "energyCost": "80 Mana",
        "description": "Releases 5 flying swords that orbit Saber, shooting toward attacking targets to deal physical damage."
      },
      {
        "id": "skill2",
        "name": "Charge",
        "type": "Skill 2",
        "tags": [
          "Blink",
          "Enhanced Attack"
        ],
        "cooldown": "12.0s",
        "energyCost": "70 Mana",
        "description": "Dashes in target direction, empowering his next basic attack to slow and deal extra physical damage."
      },
      {
        "id": "ultimate",
        "name": "Triple Sweep",
        "type": "Ultimate",
        "tags": [
          "Crowd Control",
          "Airborne",
          "Single-Target Lock"
        ],
        "cooldown": "34.0s",
        "energyCost": "100 Mana",
        "description": "Locks onto an enemy hero and knocks them into the air, unleashing 3 consecutive slashes that deal massive physical damage."
      }
    ]
  },
  "karina": {
    "resourceType": "Mana",
    "crowdControl": [
      "Slow"
    ],
    "mobility": [
      "Elusiveness Sprint",
      "Target Shadow Dash"
    ],
    "damageCharacteristics": [
      "True Damage",
      "Cooldown Resets on Kill"
    ],
    "skills": [
      {
        "id": "passive",
        "name": "Shadow Combo",
        "type": "Passive",
        "tags": [
          "True Damage",
          "% HP Damage"
        ],
        "description": "Every 3rd consecutive attack on the same target deals extra True Damage based on target's lost HP."
      },
      {
        "id": "skill1",
        "name": "Dance of Blades",
        "type": "Skill 1",
        "tags": [
          "Auto-Attack Block",
          "Speed Boost",
          "Reflect"
        ],
        "cooldown": "6.0s",
        "energyCost": "60 Mana",
        "description": "Enters Dance of Blades for 3.5s, gaining 45% speed, blocking all incoming basic attacks, and reflecting damage back to the attacker."
      },
      {
        "id": "skill2",
        "name": "Dance of Death",
        "type": "Skill 2",
        "tags": [
          "AoE",
          "Magic Damage"
        ],
        "cooldown": "4.5s",
        "energyCost": "45 Mana",
        "description": "Whirls dual blades to deal magic damage to surrounding enemies in an area."
      },
      {
        "id": "ultimate",
        "name": "Shadow Assault",
        "type": "Ultimate",
        "tags": [
          "Target Dash",
          "Shadow Mark",
          "Cooldown Reset"
        ],
        "cooldown": "30.0s",
        "energyCost": "100 Mana",
        "description": "Dashes to an enemy hero dealing magic damage and applying a Shadow Mark. If the target dies within 5s, completely resets this skill's cooldown."
      }
    ]
  },
  "gusion": {
    "resourceType": "Mana",
    "crowdControl": [
      "Slow"
    ],
    "mobility": [
      "Double Dash",
      "Blade Teleport"
    ],
    "damageCharacteristics": [
      "Magic Burst",
      "Turret Interaction"
    ],
    "skills": [
      {
        "id": "passive",
        "name": "Dagger Specialist",
        "type": "Passive",
        "tags": [
          "Enhanced Attack",
          "Heal",
          "Turret Interaction"
        ],
        "description": "Stacking skill casts empowers his next basic attack to deal 15% of target's lost HP as magic damage and heal Gusion (interacts with Turrets)."
      },
      {
        "id": "skill1",
        "name": "Sword Spike",
        "type": "Skill 1",
        "tags": [
          "Dagger Throw",
          "Teleport"
        ],
        "cooldown": "6.0s",
        "energyCost": "50 Mana",
        "description": "Throws a dagger in target direction; recasting dashes behind the dagger's target to strike."
      },
      {
        "id": "skill2",
        "name": "Shadowblade Slaughter",
        "type": "Skill 2",
        "tags": [
          "AoE",
          "Multi-Dagger",
          "Slow"
        ],
        "cooldown": "6.0s",
        "energyCost": "65 Mana",
        "description": "Throws 5 daggers forward in a fan area; recasting recalls all daggers back, dealing heavy magic damage along the return path."
      },
      {
        "id": "ultimate",
        "name": "Incandescence",
        "type": "Ultimate",
        "tags": [
          "Blink",
          "Cooldown Reset"
        ],
        "cooldown": "20.0s",
        "energyCost": "100 Mana",
        "description": "Dashes in a target direction and instantly resets the cooldowns of Sword Spike and Shadowblade Slaughter."
      }
    ]
  },
  "natalia": {
    "resourceType": "Mana",
    "crowdControl": [
      "Silence",
      "Slow"
    ],
    "mobility": [
      "Concealed Sprint",
      "Claw Dash"
    ],
    "damageCharacteristics": [
      "Physical Crit Backstab",
      "Smoke Defense"
    ],
    "skills": [
      {
        "id": "passive",
        "name": "Assassin Instinct",
        "type": "Passive",
        "tags": [
          "Camouflage",
          "Silence",
          "Backstab"
        ],
        "description": "In bushes or out of sight, enters Camouflage and enhances her next basic attack to teleport behind the target and silence them for 0.6s."
      },
      {
        "id": "skill1",
        "name": "Claw Dash",
        "type": "Skill 1",
        "tags": [
          "Blink",
          "Reset Dash"
        ],
        "cooldown": "9.0s",
        "energyCost": "50 Mana",
        "description": "Dashes forward dealing physical damage; hitting an enemy allows a second dash within 5 seconds."
      },
      {
        "id": "skill2",
        "name": "Smoke Bomb",
        "type": "Skill 2",
        "tags": [
          "Smoke Zone",
          "Auto-Attack Immunity"
        ],
        "cooldown": "12.0s",
        "energyCost": "80 Mana",
        "description": "Drops a smoke grenade, gaining immunity to all enemy basic attacks, 25% attack speed, and slow for enemies inside."
      },
      {
        "id": "ultimate",
        "name": "The Hunt",
        "type": "Ultimate",
        "tags": [
          "Camouflage",
          "Attack Buff"
        ],
        "cooldown": "30.0s",
        "energyCost": "110 Mana",
        "description": "Instantly triggers Camouflage and empowers her next basic attack with bonus physical attack."
      }
    ]
  },
  "yi-sun-shin": {
    "resourceType": "Mana",
    "crowdControl": [
      "Slow"
    ],
    "mobility": [
      "Traceless Dash",
      "CC Immunity"
    ],
    "damageCharacteristics": [
      "Physical Guaranteed Crit",
      "Global Rain"
    ],
    "skills": [
      {
        "id": "passive",
        "name": "Heavenly Vow",
        "type": "Passive",
        "tags": [
          "Stance Switch",
          "Guaranteed Crit"
        ],
        "description": "Alternating between ranged bow and melee glaive guarantees critical hits on first strikes and grants movement speed."
      },
      {
        "id": "skill1",
        "name": "Traceless",
        "type": "Skill 1",
        "tags": [
          "Blink",
          "CC Immunity"
        ],
        "cooldown": "7.0s",
        "energyCost": "50 Mana",
        "description": "Slashes forward with his sword, gaining crowd control immunity and dealing physical damage."
      },
      {
        "id": "skill2",
        "name": "Bloodfloods",
        "type": "Skill 2",
        "tags": [
          "Piercing Arrow",
          "Melee Sweep"
        ],
        "cooldown": "6.0s",
        "energyCost": "70 Mana",
        "description": "Taps to sweep glaive in front, or holds to charge and fire a long-range piercing arrow."
      },
      {
        "id": "ultimate",
        "name": "Mountain Shocker",
        "type": "Ultimate",
        "tags": [
          "Global Vision",
          "Artillery Bombardment"
        ],
        "cooldown": "60.0s",
        "energyCost": "150 Mana",
        "description": "Commands naval fleet to fire 3 waves of cannon artillery at all enemy heroes across the entire global map, revealing their positions."
      }
    ]
  },
  "helcurt": {
    "resourceType": "Mana",
    "crowdControl": [
      "Terrify",
      "Global Blindness"
    ],
    "mobility": [
      "Prowler Stealth",
      "Hidden Terror Blink"
    ],
    "damageCharacteristics": [
      "Physical Burst",
      "Deadly Stingers"
    ],
    "skills": [
      {
        "id": "passive",
        "name": "Shadow of Styx",
        "type": "Passive",
        "tags": [
          "Prowler State",
          "Stealth",
          "Heal"
        ],
        "description": "Enters Prowler State when unseen by enemy heroes, continuously gaining HP regen and movement speed. Kills spawn a dark fog."
      },
      {
        "id": "skill1",
        "name": "Hidden Terror",
        "type": "Skill 1",
        "tags": [
          "Blink",
          "Crowd Control",
          "Terrify"
        ],
        "cooldown": "10.0s",
        "energyCost": "60 Mana",
        "description": "Blinks to target location dealing physical damage. If cast from Prowler State, terrifies all enemy heroes struck."
      },
      {
        "id": "skill2",
        "name": "Deadly Stinger",
        "type": "Skill 2",
        "tags": [
          "Cone Burst",
          "Stacking"
        ],
        "cooldown": "4.0s",
        "energyCost": "50 Mana",
        "description": "Fires collected deadly stingers forward in a fan area, delivering concentrated physical burst damage."
      },
      {
        "id": "ultimate",
        "name": "Dark Night Falls",
        "type": "Ultimate",
        "tags": [
          "Global Darkness",
          "Speed Boost"
        ],
        "cooldown": "45.0s",
        "energyCost": "120 Mana",
        "description": "Plunges the entire battlefield into pitch-black darkness, drastically reducing all enemy heroes' sight range."
      }
    ]
  },
  "hanzo": {
    "resourceType": "Demon Blood",
    "crowdControl": [
      "Airborne",
      "Slow"
    ],
    "mobility": [
      "Pneuma Wall Phase"
    ],
    "damageCharacteristics": [
      "Physical AoE",
      "Creep Devour"
    ],
    "skills": [
      {
        "id": "passive",
        "name": "Ame no Habakiri",
        "type": "Passive",
        "tags": [
          "Demon Blood",
          "Resource"
        ],
        "description": "Harvests Demon Blood when nearby units die to fuel his Demon Pneuma ultimate form."
      },
      {
        "id": "skill1",
        "name": "Ninjutsu: Demon Feast",
        "type": "Skill 1",
        "tags": [
          "Jungle Devour",
          "True Damage"
        ],
        "cooldown": "8.0s",
        "description": "Unlocked after 5 basic attacks; completely devours a target jungle creep whole to instantly acquire its buff and gold."
      },
      {
        "id": "skill2",
        "name": "Ninjutsu: Soul Reap",
        "type": "Skill 2",
        "tags": [
          "AoE",
          "Slow"
        ],
        "cooldown": "10.0s",
        "description": "Opens a soul portal in target area that damages, slows, and harvests demon blood from trapped targets."
      },
      {
        "id": "ultimate",
        "name": "Kinjutsu: Pinnacle Ninja",
        "type": "Ultimate",
        "tags": [
          "Astral Projection",
          "Wall Phase",
          "Morph"
        ],
        "cooldown": "25.0s",
        "description": "Leaves his physical body in place and sends forth Demon Pneuma across terrain with enhanced speed and demon abilities."
      }
    ]
  },
  "benedetta": {
    "resourceType": "Swordout",
    "crowdControl": [
      "Slow",
      "Parry Stun"
    ],
    "mobility": [
      "Swordout Dashes",
      "Final Blow Slash"
    ],
    "damageCharacteristics": [
      "Physical AoE",
      "Invulnerable Parry"
    ],
    "skills": [
      {
        "id": "passive",
        "name": "Elapsed Daytime",
        "type": "Passive",
        "tags": [
          "Swordout Dash"
        ],
        "description": "Holds basic attack button to charge Swordout; releasing dashes forward to slash all enemies in her path."
      },
      {
        "id": "skill1",
        "name": "Phantom Slash",
        "type": "Skill 1",
        "tags": [
          "AoE",
          "Shadow Strike"
        ],
        "cooldown": "6.5s",
        "energyCost": "50 Mana",
        "description": "Leaps back leaving a shadow to slash forward, dealing physical damage in a fan area."
      },
      {
        "id": "skill2",
        "name": "An Eye for An Eye",
        "type": "Skill 2",
        "tags": [
          "Parry",
          "CC Immunity",
          "Stun"
        ],
        "cooldown": "15.0s",
        "energyCost": "70 Mana",
        "description": "Raises sword in a defensive stance gaining CC immunity; parrying control effects stuns the attacker upon counter-strike."
      },
      {
        "id": "ultimate",
        "name": "Alecto: Final Blow",
        "type": "Ultimate",
        "tags": [
          "Invulnerable Dash",
          "AoE Bleed",
          "Slow"
        ],
        "cooldown": "34.0s",
        "energyCost": "100 Mana",
        "description": "Clenches weapon and dashes forward invulnerable, carving an AoE sword trail that continuously slows and shreds enemies."
      }
    ]
  },
  "aamon": {
    "resourceType": "Mana",
    "crowdControl": [
      "Slow"
    ],
    "mobility": [
      "Camouflage State",
      "Untargetable"
    ],
    "damageCharacteristics": [
      "Magic Burst",
      "Floating Shards"
    ],
    "skills": [
      {
        "id": "passive",
        "name": "Invisible Armor",
        "type": "Passive",
        "tags": [
          "Camouflage",
          "Heal",
          "Speed Boost"
        ],
        "description": "Entering Camouflage after casting skills grants untargetable status, HP regeneration, and movement speed."
      },
      {
        "id": "skill1",
        "name": "Soul Shards",
        "type": "Skill 1",
        "tags": [
          "Shard Throw",
          "Enhanced Attack"
        ],
        "cooldown": "9.0s",
        "energyCost": "60 Mana",
        "description": "Throws daggers at a target enemy; landing hits scatters shards that can be retrieved to empower basic attacks."
      },
      {
        "id": "skill2",
        "name": "Slayer Shards",
        "type": "Skill 2",
        "tags": [
          "Skillshot",
          "Camouflage"
        ],
        "cooldown": "12.0s",
        "energyCost": "75 Mana",
        "description": "Casts a shard forward that slows the first target hit and immediately plunges Aamon into Camouflage."
      },
      {
        "id": "ultimate",
        "name": "Endless Shards",
        "type": "Ultimate",
        "tags": [
          "Homing Burst",
          "Execute"
        ],
        "cooldown": "40.0s",
        "energyCost": "110 Mana",
        "description": "Flings all collected and ground shards at an enemy target, dealing concentrated homing magic burst scaling with lost HP."
      }
    ]
  },
  "joy": {
    "resourceType": "Mana",
    "crowdControl": [
      "Slow"
    ],
    "mobility": [
      "On-Beat Dashes",
      "High Mobility"
    ],
    "damageCharacteristics": [
      "Magic AoE",
      "CC Immune Electric Storm"
    ],
    "skills": [
      {
        "id": "passive",
        "name": "Humph, Joy's Angry!",
        "type": "Passive",
        "tags": [
          "Shield",
          "Speed Boost"
        ],
        "description": "Gains a shield and 100% decaying movement speed whenever her skills hit a non-minion target."
      },
      {
        "id": "skill1",
        "name": "Look, Leonin Crystal!",
        "type": "Skill 1",
        "tags": [
          "Summon",
          "Magic Damage"
        ],
        "cooldown": "4.0s",
        "energyCost": "40 Mana",
        "description": "Summons a Leonin Crystal at target location, dealing magic damage and serving as a stepping stone for dashes."
      },
      {
        "id": "skill2",
        "name": "Meow, Rhythm of Joy!",
        "type": "Skill 2",
        "tags": [
          "Multi-Dash",
          "Rhythm Beat",
          "CC Immunity"
        ],
        "cooldown": "8.0s",
        "energyCost": "50 Mana",
        "description": "Dashes forward; timing the dash to musical beats grants CC immunity, shields, and unlocks ultimate."
      },
      {
        "id": "ultimate",
        "name": "Haaj, Electrifying Beats!",
        "type": "Ultimate",
        "tags": [
          "AoE",
          "CC Immunity",
          "Electric Storm"
        ],
        "cooldown": "36.0s",
        "energyCost": "100 Mana",
        "description": "Unlocks after 4 on-beat dashes: channels an unstoppable lightning storm with CC immunity, dealing 8 rapid AoE magic strikes."
      }
    ]
  },
  "nolan": {
    "resourceType": "Cosmic Energy",
    "crowdControl": [
      "Slow",
      "Rift Pull"
    ],
    "mobility": [
      "Gauge Dash",
      "Cleanse Leap"
    ],
    "damageCharacteristics": [
      "Physical Burst",
      "Dimensional Implosions"
    ],
    "skills": [
      {
        "id": "passive",
        "name": "Dimensional Rift",
        "type": "Passive",
        "tags": [
          "Rift Pull",
          "Burst"
        ],
        "description": "Skills cut dimensional rifts across the battlefield. Intersecting rifts implode to deal physical burst damage and pull enemies."
      },
      {
        "id": "skill1",
        "name": "Expansion",
        "type": "Skill 1",
        "tags": [
          "Linear Slash",
          "Rift"
        ],
        "cooldown": "2.0s",
        "energyCost": "30 Energy",
        "description": "Cuts a rectangular rift ahead, dealing physical damage and slowing enemies hit."
      },
      {
        "id": "skill2",
        "name": "Gauge",
        "type": "Skill 2",
        "tags": [
          "Blink",
          "Rift"
        ],
        "cooldown": "2.0s",
        "energyCost": "30 Energy",
        "description": "Dashes in target direction, cutting a rift in his wake and slashing enemies in his path."
      },
      {
        "id": "ultimate",
        "name": "Fracture",
        "type": "Ultimate",
        "tags": [
          "Cleanse",
          "AoE",
          "3-Rift Burst"
        ],
        "cooldown": "20.0s",
        "energyCost": "0 Energy",
        "description": "Instantly cleanses all crowd control debuffs, slashing forward 3 times to leave 3 overlapping rifts and leaping backward."
      }
    ]
  },
  "suyou": {
    "resourceType": "Mana",
    "crowdControl": [
      "Stun",
      "Slow",
      "Knockback"
    ],
    "mobility": [
      "Soul Leap",
      "Nuo Dashes"
    ],
    "damageCharacteristics": [
      "Physical Tap/Hold",
      "Mortal/Immortal Stances"
    ],
    "skills": [
      {
        "id": "passive",
        "name": "Nuo Transmutation",
        "type": "Passive",
        "tags": [
          "Tap/Hold Morph",
          "Damage Reduction"
        ],
        "description": "Tapping skills casts agile Mortal strikes; holding skills channels heavy Immortal Nuo deity attacks with CC immunity and defense."
      },
      {
        "id": "skill1",
        "name": "Blade Thrust / Soul Leap",
        "type": "Skill 1",
        "tags": [
          "Blink",
          "Stun"
        ],
        "cooldown": "8.0s",
        "energyCost": "45 Mana",
        "description": "(Tap) Thrusts forward dealing physical damage. (Hold) Channels Nuo energy to leap over obstacles and stun target."
      },
      {
        "id": "skill2",
        "name": "Nuo Cleave / Titan Cleave",
        "type": "Skill 2",
        "tags": [
          "AoE",
          "Multi-Cleave",
          "Slow"
        ],
        "cooldown": "6.0s",
        "energyCost": "50 Mana",
        "description": "(Tap) Slashes twice in a fan area. (Hold) Charges a colossal three-strike cleave with wide area coverage."
      },
      {
        "id": "ultimate",
        "name": "Nuo Ward / Titan Slam",
        "type": "Ultimate",
        "tags": [
          "AoE",
          "Burst",
          "Knockback"
        ],
        "cooldown": "32.0s",
        "energyCost": "100 Mana",
        "description": "(Tap) Dashes backward while firing a blade wave. (Hold) Smashes ground forward with Nuo giant form."
      }
    ]
  },
  "hirara": {
    "resourceType": "Mana",
    "crowdControl": [
      "Stun",
      "Slow"
    ],
    "mobility": [
      "Phase Shift",
      "Chrono Rewind"
    ],
    "damageCharacteristics": [
      "Magic Burst",
      "Temporal Rifts"
    ],
    "skills": [
      {
        "id": "passive",
        "name": "Chrono Pulse",
        "type": "Passive",
        "tags": [
          "Speed Boost",
          "Magic Amp"
        ],
        "description": "Skills mark temporal coordinates; phasing near anchors grants movement speed and amplifies combo burst."
      },
      {
        "id": "skill1",
        "name": "Temporal Shift",
        "type": "Skill 1",
        "tags": [
          "Blink",
          "Poke"
        ],
        "cooldown": "7.5s",
        "energyCost": "50 Mana",
        "description": "Blinks a short distance forward, leaving a phantom clone and firing a temporal shard that slows enemies."
      },
      {
        "id": "skill2",
        "name": "Phase Strike",
        "type": "Skill 2",
        "tags": [
          "AoE",
          "Crowd Control",
          "Stun"
        ],
        "cooldown": "9.0s",
        "energyCost": "65 Mana",
        "description": "Phases through target area, dealing magic damage and stunning enemies caught in the dimensional collapse."
      },
      {
        "id": "ultimate",
        "name": "Rift Collapse",
        "type": "Ultimate",
        "tags": [
          "Burst",
          "Rewind Teleport"
        ],
        "cooldown": "38.0s",
        "energyCost": "110 Mana",
        "description": "Detonates all active temporal rifts for massive magic burst, allowing Hirara to rewind back to her initial starting position."
      }
    ]
  },
  "pharsa": {
    "resourceType": "Mana",
    "crowdControl": [
      "Stun",
      "Slow"
    ],
    "mobility": [
      "Bird Flight Form"
    ],
    "damageCharacteristics": [
      "Magic Artillery",
      "Long-Range Bombardment"
    ],
    "skills": [
      {
        "id": "passive",
        "name": "Spiritual Unity",
        "type": "Passive",
        "tags": [
          "Crow Attack",
          "Slow"
        ],
        "description": "Every 8s, companion crow Verri enters hunting mode, empowering Pharsa's next basic attack to deal magic splash damage and slow."
      },
      {
        "id": "skill1",
        "name": "Curse of Crow",
        "type": "Skill 1",
        "tags": [
          "AoE",
          "Mark",
          "Stun"
        ],
        "cooldown": "8.0s",
        "energyCost": "60 Mana",
        "description": "Casts a shadow spell at target area, marking enemies; subsequent attacks stun marked targets for 1s."
      },
      {
        "id": "skill2",
        "name": "Energy Impact",
        "type": "Skill 2",
        "tags": [
          "Linear Wave",
          "Burst"
        ],
        "cooldown": "6.0s",
        "energyCost": "70 Mana",
        "description": "Fires a concentrated magic wave in target direction, dealing magic damage to all enemies in its path."
      },
      {
        "id": "skill3",
        "name": "Wings by Wing",
        "type": "Skill 3",
        "tags": [
          "Morph",
          "Terrain Flight",
          "Speed Boost"
        ],
        "cooldown": "18.0s",
        "energyCost": "50 Mana",
        "description": "Transforms into a mist-shrouded bird around Verri, gaining 80% movement speed and flying freely across terrain."
      },
      {
        "id": "ultimate",
        "name": "Feathered Air Strike",
        "type": "Ultimate",
        "tags": [
          "Artillery",
          "AoE",
          "4-Round Strike"
        ],
        "cooldown": "36.0s",
        "energyCost": "90 Mana",
        "description": "Soars into the air and bombards a target area up to 4 times within 8 seconds, dealing colossal magic damage."
      }
    ]
  },
  "kagura": {
    "resourceType": "Mana",
    "crowdControl": [
      "Stun",
      "Airborne",
      "Slow"
    ],
    "mobility": [
      "Umbrella Swap",
      "Cleanse Dash"
    ],
    "damageCharacteristics": [
      "Magic Burst",
      "Umbrella Play"
    ],
    "skills": [
      {
        "id": "passive",
        "name": "Yin Yang Gathering",
        "type": "Passive",
        "tags": [
          "Shield",
          "Stun"
        ],
        "description": "When Kagura retrieves the Seimei Umbrella, she gains a shield, stuns nearby enemies, and slows them by 60%."
      },
      {
        "id": "skill1",
        "name": "Seimei Umbrella Open",
        "type": "Skill 1",
        "tags": [
          "Umbrella Throw",
          "Slow"
        ],
        "cooldown": "5.0s",
        "energyCost": "45 Mana",
        "description": "Moves the Seimei Umbrella to a designated area, dealing magic damage and slowing enemies by 60% for 0.5s (deals 130% damage to non-hero enemies). Automatically recalls if Kagura moves beyond maximum separation distance."
      },
      {
        "id": "skill2",
        "name": "Rasho Umbrella Flee",
        "type": "Skill 2",
        "tags": [
          "Cleanse",
          "Blink",
          "Umbrella Teleport"
        ],
        "cooldown": "12.0s",
        "energyCost": "55 Mana",
        "description": "(With Umbrella) Purifies all crowd control and dashes away. (Without Umbrella) Teleports directly to the umbrella."
      },
      {
        "id": "ultimate",
        "name": "Yin Yang Overturn",
        "type": "Ultimate",
        "tags": [
          "AoE",
          "Crowd Control",
          "Knockback/Pull"
        ],
        "cooldown": "36.0s",
        "energyCost": "60 Mana",
        "description": "(With Umbrella) Knocks back surrounding enemies and slows them by 60% for 0.5s. (Without Umbrella) Unleashes an umbrella vortex that pulls all enemies inward."
      }
    ]
  },
  "xavier": {
    "resourceType": "Mana",
    "crowdControl": [
      "Immobilize",
      "Slow"
    ],
    "mobility": [
      "Speed Boost"
    ],
    "damageCharacteristics": [
      "Magic Screen-Wide",
      "Global Beam"
    ],
    "skills": [
      {
        "id": "passive",
        "name": "Transcendence",
        "type": "Passive",
        "tags": [
          "Skill Evolution",
          "Transcendence State"
        ],
        "description": "Hitting enemy heroes with skills grants 60% decaying Movement Speed for 1.2s and enhances his skills across 3 stages, entering Transcendence for 5s."
      },
      {
        "id": "skill1",
        "name": "Infinite Extension",
        "type": "Skill 1",
        "tags": [
          "Piercing Laser",
          "AoE"
        ],
        "cooldown": "6.5s",
        "energyCost": "45 Mana",
        "description": "Fires a mystic bullet that deals magic damage and extends its range each time it hits an enemy or Mystic Field (up to 5 times)."
      },
      {
        "id": "skill2",
        "name": "Mystic Field",
        "type": "Skill 2",
        "tags": [
          "Zone Barrier",
          "Immobilize"
        ],
        "cooldown": "13.0s",
        "energyCost": "80 Mana",
        "description": "Creates a mystic barrier for 5s that slows enemies by 50% and speeds up allies by 50%; hitting it with other skills activates Mystic Field for 3s, dealing 440–690 (+130% Total Magic Power) AoE magic damage and immobilizing enemies for 0.8s."
      },
      {
        "id": "ultimate",
        "name": "Dawning Light",
        "type": "Ultimate",
        "tags": [
          "Global Laser",
          "Magic Burst"
        ],
        "cooldown": "56.0s",
        "energyCost": "120 Mana",
        "description": "Fires a global beam of light across the entire battlefield, dealing immense magic damage to all enemies in a straight line and immediately entering Transcendence."
      }
    ]
  },
  "novaria": {
    "resourceType": "Mana",
    "crowdControl": [
      "Slow"
    ],
    "mobility": [
      "Astral Phase Wall Pass"
    ],
    "damageCharacteristics": [
      "Magic Sniper",
      "Global Vision Astral Echo"
    ],
    "skills": [
      {
        "id": "passive",
        "name": "Star Trail",
        "type": "Passive",
        "tags": [
          "% Max HP Damage"
        ],
        "description": "Novaria's skills reveal enemies and inflict magic damage scaling with the target's Max HP."
      },
      {
        "id": "skill1",
        "name": "Astral Meteor",
        "type": "Skill 1",
        "tags": [
          "AoE",
          "Continuous Slow"
        ],
        "cooldown": "8.0s",
        "energyCost": "60 Mana",
        "description": "Summons an astral sphere that crashes down, dealing continuous magic damage and slowing enemies."
      },
      {
        "id": "skill2",
        "name": "Astral Recall",
        "type": "Skill 2",
        "tags": [
          "Phase Flight",
          "Long-Range Snipe"
        ],
        "cooldown": "10.0s",
        "energyCost": "80 Mana",
        "description": "Draws an Astral Sphere toward herself, gaining movement speed and phase-walking through walls; recasts to fire a sniper shot."
      },
      {
        "id": "ultimate",
        "name": "Astral Echo",
        "type": "Ultimate",
        "tags": [
          "Global Vision",
          "Hitbox Expansion"
        ],
        "cooldown": "45.0s",
        "energyCost": "120 Mana",
        "description": "Scatters astral ring mist forward, revealing all enemy positions and expanding their hitbox size by 2.5x."
      }
    ]
  },
  "harith": {
    "resourceType": "Mana",
    "crowdControl": [
      "Slow"
    ],
    "mobility": [
      "Chrono Dash",
      "Zaman Force Resets"
    ],
    "damageCharacteristics": [
      "Magic Crit Basic Attacks",
      "High Shielding"
    ],
    "skills": [
      {
        "id": "passive",
        "name": "Key Insight",
        "type": "Passive",
        "tags": [
          "Resilience",
          "CC Reduction"
        ],
        "description": "Gains up to 45% Resilience (CC duration reduction) scaling with the number of enemy heroes nearby."
      },
      {
        "id": "skill1",
        "name": "Synchro Fission",
        "type": "Skill 1",
        "tags": [
          "Intersecting AoE",
          "Burst"
        ],
        "cooldown": "5.0s",
        "energyCost": "50 Mana",
        "description": "Creates a phantom copy; Harith and his shadow fire energy blasts that intersect to deal heavy magic damage."
      },
      {
        "id": "skill2",
        "name": "Chrono Dash",
        "type": "Skill 2",
        "tags": [
          "Blink",
          "Shield",
          "Crit Magic Attack"
        ],
        "cooldown": "7.0s",
        "energyCost": "45 Mana",
        "description": "Dashes in target direction, gaining a shield and empowering his next basic attack to deal magic critical damage and slow."
      },
      {
        "id": "ultimate",
        "name": "Zaman Force",
        "type": "Ultimate",
        "tags": [
          "AoE Zone",
          "Cooldown Resets",
          "Slow"
        ],
        "cooldown": "34.0s",
        "energyCost": "100 Mana",
        "description": "Summons a cross-shaped Zaman matrix that slows enemies; dashing across the matrix reduces Chrono Dash cooldown to 1s."
      }
    ]
  },
  "valir": {
    "resourceType": "Mana",
    "crowdControl": [
      "Stun",
      "Knockback",
      "Slow"
    ],
    "mobility": [
      "Cleanse Sprint"
    ],
    "damageCharacteristics": [
      "Magic Continuous Burn",
      "Anti-Dive Kiting"
    ],
    "skills": [
      {
        "id": "passive",
        "name": "Ashing",
        "type": "Passive",
        "tags": [
          "% Max HP Burn",
          "Stun"
        ],
        "description": "Ignites enemies with Ablaze stacks dealing % Max HP magic damage; reaching 3 stacks detonates to stun the target for 1s."
      },
      {
        "id": "skill1",
        "name": "Burst Fireball",
        "type": "Skill 1",
        "tags": [
          "Projectile",
          "AoE",
          "Charge Reset"
        ],
        "cooldown": "1.5s",
        "energyCost": "50 Mana",
        "description": "Hurls a fireball that explodes on contact; hitting enemy heroes or monsters completely restores a fireball charge."
      },
      {
        "id": "skill2",
        "name": "Searing Torrent",
        "type": "Skill 2",
        "tags": [
          "Cone Knockback",
          "Fire Wall"
        ],
        "cooldown": "11.0s",
        "energyCost": "70 Mana",
        "description": "Unleashes a torrent of flames forward, knocking back all diving enemies and leaving a fire wall on the ground."
      },
      {
        "id": "ultimate",
        "name": "Vengeance Flame",
        "type": "Ultimate",
        "tags": [
          "Cleanse",
          "Buff",
          "Speed Boost"
        ],
        "cooldown": "36.0s",
        "energyCost": "100 Mana",
        "description": "Instantly purges all crowd control effects and empowers all skills with increased range, damage, and blast size."
      }
    ]
  },
  "luo-yi": {
    "resourceType": "Mana",
    "crowdControl": [
      "Stun",
      "Magnetic Pull"
    ],
    "mobility": [
      "Team Teleport"
    ],
    "damageCharacteristics": [
      "Magic Yin/Yang Reactions",
      "Team Rotation"
    ],
    "skills": [
      {
        "id": "passive",
        "name": "Duality",
        "type": "Passive",
        "tags": [
          "Yin/Yang Mark",
          "Magnetic Pull",
          "Shield"
        ],
        "description": "Marks enemies with Yin or Yang; when opposite marks get near, they attract magnetically to stun and burst both targets."
      },
      {
        "id": "skill1",
        "name": "Dispersion",
        "type": "Skill 1",
        "tags": [
          "Yin/Yang Energy",
          "Stacking"
        ],
        "cooldown": "1.2s",
        "energyCost": "50 Mana",
        "description": "Casts Yin or Yang energy in a line, splashing behind targets and applying opposite elemental marks."
      },
      {
        "id": "skill2",
        "name": "Rotation",
        "type": "Skill 2",
        "tags": [
          "AoE",
          "Continuous Slow"
        ],
        "cooldown": "12.0s",
        "energyCost": "80 Mana",
        "description": "Summons a Yin or Yang zone that continuously damages, slows, and pulls enemies caught in elemental reactions."
      },
      {
        "id": "ultimate",
        "name": "Diversion",
        "type": "Ultimate",
        "tags": [
          "Global Team Teleport",
          "Portal"
        ],
        "cooldown": "50.0s",
        "energyCost": "150 Mana",
        "description": "Opens a teleportation portal on the ground, warping Luo Yi and all allied heroes standing inside to a target map location."
      }
    ]
  },
  "lunox": {
    "resourceType": "Twilight",
    "crowdControl": [
      "Slow"
    ],
    "mobility": [
      "Brilliance Invulnerable",
      "Chaos Dash"
    ],
    "damageCharacteristics": [
      "Magic % HP Burst",
      "Order/Chaos Swapping"
    ],
    "skills": [
      {
        "id": "passive",
        "name": "Dreamland Twist",
        "type": "Passive",
        "tags": [
          "Spell Vamp",
          "Magic Penetration"
        ],
        "description": "When balance is shifted to the Power of Order, immediately gains 10% Spell Vamp; when shifted to the Power of Chaos, immediately gains 10% Magic Penetration."
      },
      {
        "id": "skill1",
        "name": "Starlight Pulse",
        "type": "Skill 1",
        "tags": [
          "AoE",
          "Heal",
          "Order Stance"
        ],
        "cooldown": "2.0s",
        "energyCost": "30 Mana",
        "description": "Shoots starlight rain on nearby enemies, dealing magic damage and healing Lunox for each target hit (doubled against enemy heroes). Grants Power of Order."
      },
      {
        "id": "skill2",
        "name": "Chaos Assault",
        "type": "Skill 2",
        "tags": [
          "% Max HP Damage",
          "Chaos Stance"
        ],
        "cooldown": "2.0s",
        "energyCost": "30 Mana",
        "description": "Unleashes chaos energy forward, dealing magic damage plus 3.5%–5% of the target's Max HP (2.1%–3% against creeps). Grants Power of Chaos."
      },
      {
        "id": "skill3",
        "name": "Cosmic Fission",
        "type": "Skill 3",
        "tags": [
          "AoE",
          "Slow"
        ],
        "cooldown": "10.0s",
        "energyCost": "70 Mana",
        "description": "Channels the power of Order and Chaos in the target direction, dealing Magic Damage and slowing enemies by 40% for 2s."
      },
      {
        "id": "ultimate",
        "name": "Order & Chaos",
        "type": "Ultimate",
        "tags": [
          "Morph",
          "Invincibility / Rapid Chaos"
        ],
        "cooldown": "30.0s",
        "energyCost": "120 Mana",
        "description": "(Order) Becomes a radiant light orb invulnerable to all damage while pulsing magic. (Chaos) Dashes (-50% foreswing), deals 150–300 (+135% Total Magic Power) Magic Damage, and greatly reduces Chaos Assault cooldown."
      }
    ]
  },
  "nana": {
    "resourceType": "Mana",
    "crowdControl": [
      "Morph/Transform",
      "Airborne",
      "Slow"
    ],
    "mobility": [
      "Molina Speed/Invulnerable Passive"
    ],
    "damageCharacteristics": [
      "Magic AoE",
      "Anti-Dive Polymorph"
    ],
    "skills": [
      {
        "id": "passive",
        "name": "Molina's Blessing",
        "type": "Passive",
        "tags": [
          "Invulnerable Escape",
          "Heal"
        ],
        "description": "Upon taking fatal damage, instantly transforms into Molina for 2 seconds, gaining invulnerability, 70% speed, and HP recovery."
      },
      {
        "id": "skill1",
        "name": "Magic Boomerang",
        "type": "Skill 1",
        "tags": [
          "AoE",
          "Boomerang",
          "Slow"
        ],
        "cooldown": "5.5s",
        "energyCost": "50 Mana",
        "description": "Hurls a magical boomerang forward, dealing magic damage and slowing all enemies hit going and returning."
      },
      {
        "id": "skill2",
        "name": "Molina Smooch",
        "type": "Skill 2",
        "tags": [
          "Morph",
          "Polymorph",
          "Silence"
        ],
        "cooldown": "14.5s",
        "energyCost": "80 Mana",
        "description": "Sends Molina to a target location; touching an enemy locks onto them, polymorphing them into a cute cat and reducing defense."
      },
      {
        "id": "ultimate",
        "name": "Molina Blitz",
        "type": "Ultimate",
        "tags": [
          "AoE",
          "Airborne",
          "Stun"
        ],
        "cooldown": "36.0s",
        "energyCost": "120 Mana",
        "description": "Summons 3 massive paw stomps in a targeted direction, dealing heavy magic damage and stunning enemies hit repeatedly."
      }
    ]
  },
  "alice": {
    "resourceType": "Mana",
    "crowdControl": [
      "Immobilize",
      "Slow"
    ],
    "mobility": [
      "Wall Teleport"
    ],
    "damageCharacteristics": [
      "Magic Continuous",
      "Blood Drain Tank"
    ],
    "skills": [
      {
        "id": "passive",
        "name": "Blood Banquet",
        "type": "Passive",
        "tags": [
          "AoE Drain",
          "Heal",
          "Speed Boost"
        ],
        "description": "Stacking skill hits activates Blood Banquet, continuously draining HP from nearby enemies, dealing magic damage, and gaining movement speed."
      },
      {
        "id": "skill1",
        "name": "Flowing Blood",
        "type": "Skill 1",
        "tags": [
          "Blink",
          "Wall Teleport"
        ],
        "cooldown": "5.0s",
        "energyCost": "50 Mana",
        "description": "Fires a sphere of blood in target direction; recasting teleports Alice to the sphere, automatically snapping to terrain edges."
      },
      {
        "id": "skill2",
        "name": "Blood Ode",
        "type": "Skill 2",
        "tags": [
          "AoE Burst",
          "Stacking"
        ],
        "cooldown": "7.0s",
        "energyCost": "60 Mana",
        "description": "Emits blood magic in an area around herself to damage targets and stack Blood Banquet quickly."
      },
      {
        "id": "ultimate",
        "name": "Blood Ancestry",
        "type": "Ultimate",
        "tags": [
          "Channel",
          "Damage Reduction",
          "AoE Immobilize"
        ],
        "cooldown": "38.0s",
        "energyCost": "100 Mana",
        "description": "Channels with heavy damage reduction, releasing an expansive shockwave that immobilizes all surrounding enemies."
      }
    ]
  },
  "eudora": {
    "resourceType": "Mana",
    "crowdControl": [
      "Stun",
      "Magic Shred"
    ],
    "mobility": [],
    "damageCharacteristics": [
      "Magic Single-Target Burst",
      "Bush Ambush"
    ],
    "skills": [
      {
        "id": "passive",
        "name": "Superconductor",
        "type": "Passive",
        "tags": [
          "Debuff",
          "Magic Shred"
        ],
        "description": "Skills apply Superconductor to targets, triggering additional effects and shredding magic defense on subsequent abilities."
      },
      {
        "id": "skill1",
        "name": "Forked Lightning",
        "type": "Skill 1",
        "tags": [
          "AoE",
          "Magic Damage"
        ],
        "cooldown": "6.0s",
        "energyCost": "65 Mana",
        "description": "Casts forked lightning in a fan area, dealing magic damage to all enemies hit."
      },
      {
        "id": "skill2",
        "name": "Ball Lightning",
        "type": "Skill 2",
        "tags": [
          "Single-Target",
          "Crowd Control",
          "Stun"
        ],
        "cooldown": "11.0s",
        "energyCost": "80 Mana",
        "description": "Hurls a lightning ball that deals magic damage and stuns the target for 1.2s (spreads to nearby enemies if superconductor is active)."
      },
      {
        "id": "ultimate",
        "name": "Thunder's Wrath",
        "type": "Ultimate",
        "tags": [
          "AoE",
          "Massive Burst",
          "Single-Target Finisher"
        ],
        "cooldown": "34.0s",
        "energyCost": "130 Mana",
        "description": "Summons a tempestuous thunderbolt down on the target, dealing devastating magic burst damage and spreading shockwaves to surrounding foes."
      }
    ]
  },
  "gord": {
    "resourceType": "Mana",
    "crowdControl": [
      "Stun",
      "Slow"
    ],
    "mobility": [],
    "damageCharacteristics": [
      "True Damage Stacks",
      "Channeling Beam"
    ],
    "skills": [
      {
        "id": "passive",
        "name": "Mystic Favor",
        "type": "Passive",
        "tags": [
          "True Damage",
          "Stacking"
        ],
        "description": "Attacking an enemy 4 times with skills triggers Mystic Favor, dealing True Damage on every subsequent hit."
      },
      {
        "id": "skill1",
        "name": "Mystic Projectile",
        "type": "Skill 1",
        "tags": [
          "Bouncing Ball",
          "Crowd Control",
          "Stun"
        ],
        "cooldown": "7.0s",
        "energyCost": "70 Mana",
        "description": "Launches a bouncing mystic orb forward, stunning all enemies caught in its impact zone for 1 second."
      },
      {
        "id": "skill2",
        "name": "Mystic Injunction",
        "type": "Skill 2",
        "tags": [
          "AoE Zone",
          "Continuous Damage"
        ],
        "cooldown": "7.0s",
        "energyCost": "80 Mana",
        "description": "Creates an energy field on the ground that pulses continuous magic damage to enemies standing within."
      },
      {
        "id": "ultimate",
        "name": "Mystic Gush",
        "type": "Ultimate",
        "tags": [
          "Channel",
          "Piercing Beam",
          "True Damage"
        ],
        "cooldown": "36.0s",
        "energyCost": "150 Mana",
        "description": "Channels a high-energy piercing beam in a target direction for 3 seconds, melting enemies with massive continuous magic and True Damage."
      }
    ]
  },
  "cyclops": {
    "resourceType": "Mana",
    "crowdControl": [
      "Immobilize",
      "Homing"
    ],
    "mobility": [
      "Planetary Speed Boost"
    ],
    "damageCharacteristics": [
      "Magic Continuous",
      "Rapid Cooldown Cycling"
    ],
    "skills": [
      {
        "id": "passive",
        "name": "Starlit Hourglass",
        "type": "Passive",
        "tags": [
          "Cooldown Reduction"
        ],
        "description": "Hitting enemies with skills reduces all skill cooldowns by 0.5 seconds."
      },
      {
        "id": "skill1",
        "name": "Stardust Shock",
        "type": "Skill 1",
        "tags": [
          "Dual Wave",
          "Magic Damage"
        ],
        "cooldown": "8.0s",
        "energyCost": "65 Mana",
        "description": "Fires two stardust shockwaves forward, dealing magic damage to enemies in their path."
      },
      {
        "id": "skill2",
        "name": "Planets Attack",
        "type": "Skill 2",
        "tags": [
          "Orbiting Orbs",
          "Speed Boost",
          "Homing"
        ],
        "cooldown": "12.0s",
        "energyCost": "75 Mana",
        "description": "Summons starlit spheres around himself, gaining 30% movement speed while the spheres auto-target and burst nearby enemies."
      },
      {
        "id": "ultimate",
        "name": "Star Power Lockdown",
        "type": "Ultimate",
        "tags": [
          "Homing Orb",
          "Crowd Control",
          "Immobilize"
        ],
        "cooldown": "38.0s",
        "energyCost": "120 Mana",
        "description": "Creates a tracking planetary lock sphere that chases an enemy hero, dealing magic damage and immobilizing them for up to 2 seconds."
      }
    ]
  },
  "aurora": {
    "resourceType": "Mana",
    "crowdControl": [
      "Freeze",
      "Slow",
      "Turret Freeze"
    ],
    "mobility": [
      "Invulnerable Ice Cocoon"
    ],
    "damageCharacteristics": [
      "Magic AoE",
      "Freeze Scaling"
    ],
    "skills": [
      {
        "id": "passive",
        "name": "Pride of Ice",
        "type": "Passive",
        "tags": [
          "Invincibility",
          "Heal",
          "Turret Freeze"
        ],
        "description": "Upon taking fatal damage, encases herself in ice for 1.3s becoming invincible and recovering 20% max HP. Uniquely freezes enemy Turrets."
      },
      {
        "id": "skill1",
        "name": "Hailstone Blast",
        "type": "Skill 1",
        "tags": [
          "AoE",
          "Falling Hail",
          "Slow"
        ],
        "cooldown": "6.0s",
        "energyCost": "50 Mana",
        "description": "Bombards target area with hailstones, dealing magic damage and slowing enemies, followed by multiple falling ice strikes."
      },
      {
        "id": "skill2",
        "name": "Frosty Breeze",
        "type": "Skill 2",
        "tags": [
          "Cone Blast",
          "Crowd Control",
          "Freeze"
        ],
        "cooldown": "11.0s",
        "energyCost": "75 Mana",
        "description": "Blows a cone of frost forward, creating an ice storm at the far edge that freezes enemies caught in the outer area."
      },
      {
        "id": "ultimate",
        "name": "Frigid Glacier",
        "type": "Ultimate",
        "tags": [
          "AoE",
          "Crowd Control",
          "Freeze"
        ],
        "cooldown": "40.0s",
        "energyCost": "120 Mana",
        "description": "Summons an expansive frost path that spreads into massive glaciers, shattering to deal immense AoE damage and freeze all targets."
      }
    ]
  },
  "vexana": {
    "resourceType": "Mana",
    "crowdControl": [
      "Terrify",
      "Airborne",
      "Slow"
    ],
    "mobility": [],
    "damageCharacteristics": [
      "Magic AoE",
      "Undead Knight Summon"
    ],
    "skills": [
      {
        "id": "passive",
        "name": "Nether Touch",
        "type": "Passive",
        "tags": [
          "Nether Curse",
          "AoE Explosion"
        ],
        "description": "Attacking an enemy applies Nether Curse; when a cursed target dies, they explode to deal magic damage to surrounding units."
      },
      {
        "id": "skill1",
        "name": "Deathly Grasp",
        "type": "Skill 1",
        "tags": [
          "Crowd Control",
          "Terrify"
        ],
        "cooldown": "11.0s",
        "energyCost": "70 Mana",
        "description": "Releases Phantom Claws forward, dealing magic damage and terrifying all enemy heroes hit for 1 second."
      },
      {
        "id": "skill2",
        "name": "Solar Tempest",
        "type": "Skill 2",
        "tags": [
          "AoE Blast",
          "Delayed Burst"
        ],
        "cooldown": "7.0s",
        "energyCost": "80 Mana",
        "description": "Calls down a curse storm at target area that erupts after 0.8 seconds, dealing heavy magic damage."
      },
      {
        "id": "ultimate",
        "name": "Eternal Guard",
        "type": "Ultimate",
        "tags": [
          "Summon",
          "Crowd Control",
          "Airborne"
        ],
        "cooldown": "44.0s",
        "energyCost": "120 Mana",
        "description": "Summons the colossal Undead Knight to crash down at a target area, knocking enemies airborne and fighting alongside Vexana."
      }
    ]
  },
  "harley": {
    "resourceType": "Mana",
    "crowdControl": [
      "Slow"
    ],
    "mobility": [
      "Hat Teleport"
    ],
    "damageCharacteristics": [
      "Magic Single-Target Burst",
      "Deadly Ring Explosion"
    ],
    "skills": [
      {
        "id": "passive",
        "name": "Magic Master",
        "type": "Passive",
        "tags": [
          "Basic Attack Magic",
          "Magic Shred"
        ],
        "description": "Basic attacks deal magic damage and reduce enemy magic defense by 2 points per hit (up to 10 stacks)."
      },
      {
        "id": "skill1",
        "name": "Poker Trick",
        "type": "Skill 1",
        "tags": [
          "Rapid Cards",
          "Burst"
        ],
        "cooldown": "5.5s",
        "energyCost": "60 Mana",
        "description": "Shoots 3–5 rounds of poker cards forward in a direction, each card dealing magic damage to enemies hit."
      },
      {
        "id": "skill2",
        "name": "Space Escape",
        "type": "Skill 2",
        "tags": [
          "Blink",
          "Hat Teleport",
          "Speed Boost"
        ],
        "cooldown": "10.0s",
        "energyCost": "60 Mana",
        "description": "Blinks forward leaving a magical hat behind, gaining 30% speed; recasting teleports Harley back to the hat."
      },
      {
        "id": "ultimate",
        "name": "Deadly Magic",
        "type": "Ultimate",
        "tags": [
          "Ring of Fire",
          "Delayed Execute"
        ],
        "cooldown": "32.0s",
        "energyCost": "100 Mana",
        "description": "Fires a magical ring that locks onto an enemy hero, soaking up damage dealt by Harley and detonating for 50% of total damage taken."
      }
    ]
  },
  "odette": {
    "resourceType": "Mana",
    "crowdControl": [
      "Immobilize",
      "Slow"
    ],
    "mobility": [
      "Shield Channel"
    ],
    "damageCharacteristics": [
      "Magic AoE",
      "Massive Teamfight Storm"
    ],
    "skills": [
      {
        "id": "passive",
        "name": "Lakeshore Ambience",
        "type": "Passive",
        "tags": [
          "Soundwaves",
          "Bounce"
        ],
        "description": "Basic attacks bounce sound waves between nearby enemies, dealing magic splash damage."
      },
      {
        "id": "skill1",
        "name": "Avian Authority",
        "type": "Skill 1",
        "tags": [
          "Swan Wave",
          "Slow"
        ],
        "cooldown": "7.0s",
        "energyCost": "70 Mana",
        "description": "Releases a swan of light forward, dealing magic damage and slowing enemies by 70%."
      },
      {
        "id": "skill2",
        "name": "Blue Nova",
        "type": "Skill 2",
        "tags": [
          "Crowd Control",
          "Immobilize"
        ],
        "cooldown": "10.0s",
        "energyCost": "80 Mana",
        "description": "Fires a magic energy orb forward; upon reaching max distance or hitting an enemy, splits to immobilize targets."
      },
      {
        "id": "ultimate",
        "name": "Swan Song",
        "type": "Ultimate",
        "tags": [
          "Channeled AoE",
          "Shield",
          "Damage Reduction"
        ],
        "cooldown": "45.0s",
        "energyCost": "150 Mana",
        "description": "Gains a massive shield and damage reduction while channeling Swan Song for 5 seconds, dealing continuous AoE magic damage."
      }
    ]
  },
  "zhask": {
    "resourceType": "Mana",
    "crowdControl": [
      "Stun",
      "Slow"
    ],
    "mobility": [
      "Spawn Merge"
    ],
    "damageCharacteristics": [
      "Magic Laser Turret",
      "Nightmarish Spawn"
    ],
    "skills": [
      {
        "id": "passive",
        "name": "Decimation",
        "type": "Passive",
        "tags": [
          "On-Death Explosion"
        ],
        "description": "Summons a frenzied Nightmarish Spawn upon death that self-destructs to deal True Damage to nearby enemies."
      },
      {
        "id": "skill1",
        "name": "Nightmarish Spawn",
        "type": "Skill 1",
        "tags": [
          "Turret Summon",
          "Continuous Laser"
        ],
        "cooldown": "11.0s",
        "energyCost": "80 Mana",
        "description": "Spawns a Nightmarish Spawn that attacks nearby enemies, firing death rays that stun enemies after two hits."
      },
      {
        "id": "skill2",
        "name": "Mind Eater",
        "type": "Skill 2",
        "tags": [
          "Linear Ray",
          "Magic Damage"
        ],
        "cooldown": "8.0s",
        "energyCost": "60 Mana",
        "description": "Fires a mind-piercing energy ray in target direction; the spawn also fires simultaneously."
      },
      {
        "id": "skill3",
        "name": "Hive Clones",
        "type": "Skill 3",
        "tags": [
          "Trap",
          "Slow"
        ],
        "cooldown": "10.0s",
        "energyCost": "60 Mana",
        "description": "Releases a cluster of Nightmarish Clones in a line that explode upon enemy contact, slowing targets by 80%."
      },
      {
        "id": "ultimate",
        "name": "Dominator's Descent",
        "type": "Ultimate",
        "tags": [
          "Morph",
          "Titan Spawn",
          "Shield"
        ],
        "cooldown": "45.0s",
        "energyCost": "150 Mana",
        "description": "Fuses into an enhanced, colossal Nightmarish Spawn, gaining massive shields and unleashing empowered laser rays."
      }
    ]
  },
  "change": {
    "resourceType": "Mana",
    "crowdControl": [
      "Slow"
    ],
    "mobility": [
      "Crescent Speed Boost"
    ],
    "damageCharacteristics": [
      "Magic Barrage",
      "Continuous Stars"
    ],
    "skills": [
      {
        "id": "passive",
        "name": "Trouble Maker",
        "type": "Passive",
        "tags": [
          "Damage Amplification"
        ],
        "description": "Each skill hit marks the target, increasing Chang'e's subsequent damage against them by 2% (up to 40%)."
      },
      {
        "id": "skill1",
        "name": "Starmoon Shockwave",
        "type": "Skill 1",
        "tags": [
          "AoE",
          "Slow"
        ],
        "cooldown": "6.0s",
        "energyCost": "50 Mana",
        "description": "Fires a ball of energy forward that detonates, dealing magic damage and slowing enemies by 20%."
      },
      {
        "id": "skill2",
        "name": "Crescent Moon",
        "type": "Skill 2",
        "tags": [
          "Shield",
          "Speed Boost",
          "Enhanced Skills"
        ],
        "cooldown": "12.0s",
        "energyCost": "70 Mana",
        "description": "Summons the Crescent Moon to gain a permanent shield, movement speed, and enhance all skills while active."
      },
      {
        "id": "ultimate",
        "name": "Meteor Shower",
        "type": "Ultimate",
        "tags": [
          "Channeled Barrage",
          "Long Range"
        ],
        "cooldown": "34.0s",
        "energyCost": "120 Mana",
        "description": "Channels a relentless barrage of 30 meteors in a straight line, dealing continuous magic damage while moving."
      }
    ]
  },
  "selena": {
    "resourceType": "Mana",
    "crowdControl": [
      "Stun",
      "Slow"
    ],
    "mobility": [
      "Garotte Dash",
      "Form Swap"
    ],
    "damageCharacteristics": [
      "Magic Burst",
      "3-Second Arrow Stun"
    ],
    "skills": [
      {
        "id": "passive",
        "name": "Symbiosis",
        "type": "Passive",
        "tags": [
          "Abyssal Mark",
          "Burst"
        ],
        "description": "Elven skills apply Abyssal Marks; Abyssal melee skills consume marks to deal massive bonus magic damage."
      },
      {
        "id": "skill1",
        "name": "Abyssal Trap / Soul Eater",
        "type": "Skill 1",
        "tags": [
          "Vision Trap",
          "Enhanced Claw"
        ],
        "cooldown": "8.0s",
        "energyCost": "50 Mana",
        "description": "(Elven) Deploys an Abyssal Trap granting vision and slow. (Abyssal) Scratches target dealing bonus magic damage and shield."
      },
      {
        "id": "skill2",
        "name": "Abyssal Arrow / Garotte",
        "type": "Skill 2",
        "tags": [
          "Long Stun",
          "Blink"
        ],
        "cooldown": "12.0s",
        "energyCost": "70 Mana",
        "description": "(Elven) Fires an arrow stunning enemies up to 3 seconds based on distance. (Abyssal) Dashes forward slashing enemies."
      },
      {
        "id": "ultimate",
        "name": "Primal Darkness / Blessing of the Moon Goddess",
        "type": "Ultimate",
        "tags": [
          "Morph",
          "Speed Boost"
        ],
        "cooldown": "4.0s",
        "description": "Swaps seamlessly between Elven archer form and Abyssal demon form, granting movement speed bursts."
      }
    ]
  },
  "vale": {
    "resourceType": "Mana",
    "crowdControl": [
      "Airborne",
      "Slow"
    ],
    "mobility": [
      "Windtalk Speed Stacks"
    ],
    "damageCharacteristics": [
      "Magic AoE Burst",
      "Gale Evolution"
    ],
    "skills": [
      {
        "id": "passive",
        "name": "Windtalk",
        "type": "Passive",
        "tags": [
          "Speed Stacks",
          "Evolution"
        ],
        "description": "Each kill or assist grants a stack of Windtalk (up to 10 stacks), boosting permanent movement speed by 8 per stack."
      },
      {
        "id": "skill1",
        "name": "Wind Blade",
        "type": "Skill 1",
        "tags": [
          "Linear Blades",
          "Burst"
        ],
        "cooldown": "4.0s",
        "energyCost": "60 Mana",
        "description": "Releases two wind blades to the left and right, slicing enemies in their path with magic damage."
      },
      {
        "id": "skill2",
        "name": "Windblow",
        "type": "Skill 2",
        "tags": [
          "Crowd Control",
          "Airborne"
        ],
        "cooldown": "8.5s",
        "energyCost": "70 Mana",
        "description": "Sends a whirlwind forward, knocking up all enemy heroes caught along its path for 1.1s."
      },
      {
        "id": "ultimate",
        "name": "Windstorm",
        "type": "Ultimate",
        "tags": [
          "AoE Vortex",
          "Burst"
        ],
        "cooldown": "36.0s",
        "energyCost": "100 Mana",
        "description": "Summons a raging windstorm in target area that continuously pulls enemies and detonates with catastrophic magic damage."
      }
    ]
  },
  "kadita": {
    "resourceType": "Mana",
    "crowdControl": [
      "Airborne",
      "Slow"
    ],
    "mobility": [
      "Ocean Wave Surf",
      "Invulnerable Dive"
    ],
    "damageCharacteristics": [
      "Magic Burst",
      "HP Recovery Passive"
    ],
    "skills": [
      {
        "id": "passive",
        "name": "Thalassophobia",
        "type": "Passive",
        "tags": [
          "Heal",
          "Damage Recovery"
        ],
        "description": "Recovers 65% of lost HP within 4 seconds after taking damage bursts, granting immense survival in skirmishes."
      },
      {
        "id": "skill1",
        "name": "Ocean Oddity",
        "type": "Skill 1",
        "tags": [
          "Blink",
          "CC Immunity",
          "Damage Reduction"
        ],
        "cooldown": "10.0s",
        "energyCost": "60 Mana",
        "description": "Rides an ocean wave forward with CC immunity and 50% damage reduction; can be canceled to leave Kadita in place."
      },
      {
        "id": "skill2",
        "name": "Breath of the Ocean",
        "type": "Skill 2",
        "tags": [
          "AoE",
          "Crowd Control",
          "Airborne"
        ],
        "cooldown": "8.0s",
        "energyCost": "70 Mana",
        "description": "Summons an ocean geyser that erupts after a brief delay, knocking all enemies airborne for 1.5s."
      },
      {
        "id": "ultimate",
        "name": "Rough Waves",
        "type": "Ultimate",
        "tags": [
          "Invulnerable Dive",
          "Tsunami Burst"
        ],
        "cooldown": "40.0s",
        "energyCost": "120 Mana",
        "description": "Dives into an invulnerable tsunami pool, sending 6 water waves in all directions that return to Kadita with lethal burst damage."
      }
    ]
  },
  "esmeralda": {
    "resourceType": "Mana",
    "crowdControl": [
      "Immobilize",
      "Slow"
    ],
    "mobility": [
      "Spinning Speed",
      "Falling Leap"
    ],
    "damageCharacteristics": [
      "Hybrid Physical/Magic",
      "Shield Absorption"
    ],
    "skills": [
      {
        "id": "passive",
        "name": "Starmoon Casket",
        "type": "Passive",
        "tags": [
          "Shield Absorption",
          "Hybrid Damage"
        ],
        "description": "Basic attacks deal physical and magic damage simultaneously, converting enemy shields into her own temporary shield."
      },
      {
        "id": "skill1",
        "name": "Frostmoon Shield",
        "type": "Skill 1",
        "tags": [
          "Shield",
          "Speed Boost"
        ],
        "cooldown": "7.0s",
        "energyCost": "60 Mana",
        "description": "Gains a shield and 40% decaying movement speed while absorbing surrounding enemy shields into herself."
      },
      {
        "id": "skill2",
        "name": "Stardust Dance",
        "type": "Skill 2",
        "tags": [
          "AoE",
          "Cooldown Reduction"
        ],
        "cooldown": "4.5s",
        "energyCost": "50 Mana",
        "description": "Spins Stardust and Frostmoon around herself to deal hybrid damage, reducing Frostmoon Shield's cooldown on hit."
      },
      {
        "id": "ultimate",
        "name": "Falling Starmoon",
        "type": "Ultimate",
        "tags": [
          "Blink",
          "Crowd Control",
          "Immobilize"
        ],
        "cooldown": "32.0s",
        "energyCost": "100 Mana",
        "description": "Channels and leaps toward a target area, dealing hybrid damage and immobilizing enemies for 1 second."
      }
    ]
  },
  "lylia": {
    "resourceType": "Mana",
    "crowdControl": [
      "Slow"
    ],
    "mobility": [
      "Black Shoes Rewind",
      "Speed Boost"
    ],
    "damageCharacteristics": [
      "Magic AoE Chains",
      "Shadow Gloom Detonations"
    ],
    "skills": [
      {
        "id": "passive",
        "name": "Angry Gloom",
        "type": "Passive",
        "tags": [
          "Speed Boost"
        ],
        "description": "Increases movement speed by 15% each time Gloom upgrades in size (up to 45% bonus movement speed)."
      },
      {
        "id": "skill1",
        "name": "Magic Shockwave",
        "type": "Skill 1",
        "tags": [
          "Linear Wave",
          "Slow"
        ],
        "cooldown": "4.0s",
        "energyCost": "50 Mana",
        "description": "Releases Gloom forward in a line to deal magic damage and ignite any Shadow Energy traps along the way."
      },
      {
        "id": "skill2",
        "name": "Shadow Energy",
        "type": "Skill 2",
        "tags": [
          "AoE Trap",
          "Chained Explosions"
        ],
        "cooldown": "1.0s",
        "energyCost": "40 Mana",
        "description": "Drops Shadow Energy on the ground that slows enemies; exploding it with skills cascades into expanding chained detonations."
      },
      {
        "id": "ultimate",
        "name": "Black Shoes",
        "type": "Ultimate",
        "tags": [
          "Time Rewind",
          "HP Reset",
          "Cleanse"
        ],
        "cooldown": "35.0s",
        "energyCost": "0 Mana",
        "description": "Rewinds time by 4 seconds to her shoes' position, resetting all Shadow Energy charges, cleansing CC, and restoring HP/mana."
      }
    ]
  },
  "cecilion": {
    "resourceType": "Mana",
    "crowdControl": [
      "Immobilize",
      "Slow"
    ],
    "mobility": [
      "Bats Feast Speed"
    ],
    "damageCharacteristics": [
      "Magic Late-Game Scaling",
      "Screen-Wide Bat Impact"
    ],
    "skills": [
      {
        "id": "passive",
        "name": "Overflowing",
        "type": "Passive",
        "tags": [
          "Infinite Mana Scaling"
        ],
        "description": "Each skill hit increases his max mana by 10 points. His skill damage scales with his maximum mana pool."
      },
      {
        "id": "skill1",
        "name": "Bat Impact",
        "type": "Skill 1",
        "tags": [
          "Piercing Bat",
          "Burst"
        ],
        "cooldown": "1.5s",
        "energyCost": "75+ Mana",
        "description": "Commands a giant bat to plunge in target direction, dealing colossal magic damage; mana cost doubles with rapid casts."
      },
      {
        "id": "skill2",
        "name": "Sanguine Claws",
        "type": "Skill 2",
        "tags": [
          "Crowd Control",
          "Immobilize"
        ],
        "cooldown": "12.0s",
        "energyCost": "95 Mana",
        "description": "Casts a pair of blood claws that snap shut, pulling enemies toward the center and immobilizing them for 1s."
      },
      {
        "id": "ultimate",
        "name": "Bats Feast",
        "type": "Ultimate",
        "tags": [
          "AoE",
          "Heal",
          "Slow Immunity"
        ],
        "cooldown": "40.0s",
        "energyCost": "150 Mana",
        "description": "Awakens blood demon power, gaining 60% decaying movement speed, slow immunity, and firing 40 blood bolts that heal Cecilion."
      }
    ]
  },
  "yve": {
    "resourceType": "Mana",
    "crowdControl": [
      "Immobilize",
      "Slow"
    ],
    "mobility": [
      "Void Speed"
    ],
    "damageCharacteristics": [
      "Magic Galactic Grid",
      "Channeled Area Denial"
    ],
    "skills": [
      {
        "id": "passive",
        "name": "Galactic Power",
        "type": "Passive",
        "tags": [
          "Galactic Stacks"
        ],
        "description": "Gains Galactic Power stacks when hitting enemies with skills, increasing the number of tap/slide strikes on her ultimate."
      },
      {
        "id": "skill1",
        "name": "Void Blast",
        "type": "Skill 1",
        "tags": [
          "AoE",
          "Speed Boost"
        ],
        "cooldown": "3.5s",
        "energyCost": "60 Mana",
        "description": "Detonates galactic energy at target area, dealing magic damage and granting Yve a movement speed boost on center hits."
      },
      {
        "id": "skill2",
        "name": "Void Crystal",
        "type": "Skill 2",
        "tags": [
          "Linear Zone",
          "Continuous Slow"
        ],
        "cooldown": "12.0s",
        "energyCost": "75 Mana",
        "description": "Summons a Void Crystal that sprays cosmic energy in a direction, heavily slowing enemies standing on the trail."
      },
      {
        "id": "ultimate",
        "name": "Real World Manipulation",
        "type": "Ultimate",
        "tags": [
          "Starboard Grid",
          "Airborne Immunity",
          "Area Denial"
        ],
        "cooldown": "50.0s",
        "energyCost": "130 Mana",
        "description": "Deploys a giant galactic chessboard for 15s with airborne immunity. Tap squares to deal magic damage; slide across tiles to heavily slow foes."
      }
    ]
  },
  "valentina": {
    "resourceType": "Mana",
    "crowdControl": [
      "Terrify",
      "Slow"
    ],
    "mobility": [
      "Double Arcane Dash"
    ],
    "damageCharacteristics": [
      "Magic Burst",
      "Ultimate Mimicry"
    ],
    "skills": [
      {
        "id": "passive",
        "name": "Primal Force",
        "type": "Passive",
        "tags": [
          "Bonus EXP",
          "Heal"
        ],
        "description": "Gains bonus EXP when dealing damage to enemy heroes with lower or equal levels; heals herself based on damage dealt."
      },
      {
        "id": "skill1",
        "name": "Shadow Strike",
        "type": "Skill 1",
        "tags": [
          "Fan Wave",
          "Crowd Control",
          "Terrify"
        ],
        "cooldown": "6.5s",
        "energyCost": "50 Mana",
        "description": "Fires shadow bolts in a fan area, applying shadow marks; hitting marked enemies terrifies them for 0.7s."
      },
      {
        "id": "skill2",
        "name": "Arcane Shade",
        "type": "Skill 2",
        "tags": [
          "Double Blink",
          "Homing Daggers"
        ],
        "cooldown": "10.0s",
        "energyCost": "65 Mana",
        "description": "Dashes in target direction and fires shadow darts; can be recast to dash again within 6 seconds."
      },
      {
        "id": "ultimate",
        "name": "I Am You",
        "type": "Ultimate",
        "tags": [
          "Ultimate Steal",
          "Morph"
        ],
        "cooldown": "40.0s",
        "energyCost": "100 Mana",
        "description": "Steals the target enemy hero's ultimate ability, slowing them and allowing Valentina to cast their ultimate as her own."
      }
    ]
  },
  "zhuxin": {
    "resourceType": "Mana",
    "crowdControl": [
      "Airborne Lift",
      "Displacement Throw",
      "Snare"
    ],
    "mobility": [
      "Speed Boost"
    ],
    "damageCharacteristics": [
      "Magic Continuous",
      "Mana Drain Channelling"
    ],
    "skills": [
      {
        "id": "passive",
        "name": "Butterfly Grace",
        "type": "Passive",
        "tags": [
          "Mana Recovery",
          "Shield"
        ],
        "description": "Converts mana spent into spirit butterfly shields and restores mana while channeling skills."
      },
      {
        "id": "skill1",
        "name": "Fluttering Grace",
        "type": "Skill 1",
        "tags": [
          "Channeled AoE",
          "Snare Stacks",
          "Airborne Throw"
        ],
        "cooldown": "3.0s",
        "energyCost": "30 Mana/sec",
        "description": "Channels spirit butterflies around herself to snare enemies with crimson stacks, lifting fully stacked targets into the air to throw them."
      },
      {
        "id": "skill2",
        "name": "Lantern Snare",
        "type": "Skill 2",
        "tags": [
          "AoE",
          "Slow"
        ],
        "cooldown": "8.0s",
        "energyCost": "60 Mana",
        "description": "Places lantern light that blooms to deal magic damage and apply crimson snare marks."
      },
      {
        "id": "ultimate",
        "name": "Crimson Flare",
        "type": "Ultimate",
        "tags": [
          "Shield",
          "Speed Boost",
          "AoE Zone"
        ],
        "cooldown": "42.0s",
        "energyCost": "100 Mana",
        "description": "Surrounds herself with a celestial butterfly storm, gaining a heavy shield, movement speed, and continuous magic burn."
      }
    ]
  },
  "zetian": {
    "resourceType": "Mana",
    "crowdControl": [
      "Stun",
      "Slow"
    ],
    "mobility": [],
    "damageCharacteristics": [
      "Magic Artillery",
      "Empowered Edicts"
    ],
    "skills": [
      {
        "id": "passive",
        "name": "Celestial Sovereign",
        "type": "Passive",
        "tags": [
          "Edict Stacks",
          "Magic Amp"
        ],
        "description": "Casting decrees gathers celestial favor, empowering every 3rd ability with expanded area and bonus magic damage."
      },
      {
        "id": "skill1",
        "name": "Imperial Decree",
        "type": "Skill 1",
        "tags": [
          "AoE",
          "Slow"
        ],
        "cooldown": "5.0s",
        "energyCost": "50 Mana",
        "description": "Calls down an imperial seal at a target area, dealing magic damage and slowing enemies caught inside."
      },
      {
        "id": "skill2",
        "name": "Starfall Edict",
        "type": "Skill 2",
        "tags": [
          "Crowd Control",
          "Stun"
        ],
        "cooldown": "10.0s",
        "energyCost": "70 Mana",
        "description": "Rains celestial stars down along a targeted line, stunning enemies struck by the edict."
      },
      {
        "id": "ultimate",
        "name": "Judgment of the Heavens",
        "type": "Ultimate",
        "tags": [
          "AoE Bombardment",
          "Massive Burst"
        ],
        "cooldown": "45.0s",
        "energyCost": "120 Mana",
        "description": "Opens the gates of heaven to strike the battlefield with celestial judgment, dealing immense multi-stage magic damage."
      }
    ]
  },
  "beatrix": {
    "resourceType": "Mana",
    "crowdControl": [
      "Slow"
    ],
    "mobility": [
      "Tactical Dash",
      "Weapon Swap"
    ],
    "damageCharacteristics": [
      "Physical 4-Weapon Arsenal",
      "Sniper/Rocket/Shotgun/SMG"
    ],
    "skills": [
      {
        "id": "passive",
        "name": "Mechanical Genius",
        "type": "Passive",
        "tags": [
          "4 Weapons",
          "Arsenal"
        ],
        "description": "Carries 4 specialized weapons (Renner sniper, Bennett rocket, Wesker shotgun, Nibiru SMG), swapping between 2 primary active firearms."
      },
      {
        "id": "skill1",
        "name": "Masterful Gunner",
        "type": "Skill 1",
        "tags": [
          "Weapon Swap"
        ],
        "cooldown": "0.6s",
        "energyCost": "0 Mana",
        "description": "Swaps her primary weapon with her secondary slung weapon in 0.6 seconds."
      },
      {
        "id": "skill2",
        "name": "Tactical Reposition",
        "type": "Skill 2",
        "tags": [
          "Blink",
          "Instant Reload"
        ],
        "cooldown": "8.0s",
        "energyCost": "35 Mana",
        "description": "Dashes in target direction, fully reloading her active weapon's ammunition immediately."
      },
      {
        "id": "ultimate",
        "name": "Weapon Ultimates",
        "type": "Ultimate",
        "tags": [
          "AoE",
          "Sniper Shot / Rocket Barrage"
        ],
        "cooldown": "24.0s",
        "energyCost": "60 Mana",
        "description": "Casts the active weapon's unique ultimate: Renner's Apathy (sniper snipe), Bennett's Rage (carpet bomb), Wesker's Elation (shotgun blast), or Nibiru's Passion (volley)."
      }
    ]
  },
  "claude": {
    "resourceType": "Cooldown-Only",
    "crowdControl": [
      "Slow"
    ],
    "mobility": [
      "Mirror Swap",
      "Dexter Partner"
    ],
    "damageCharacteristics": [
      "Physical Multi-Target DPS",
      "Blazing Duet"
    ],
    "skills": [
      {
        "id": "passive",
        "name": "Battle Side by Side",
        "type": "Passive",
        "tags": [
          "Monkey Assistant",
          "Double Hit"
        ],
        "description": "Monkey partner Dexter assists on every basic attack and ultimate bullet, triggering item passive effects at 35% damage."
      },
      {
        "id": "skill1",
        "name": "Art of Thievery",
        "type": "Skill 1",
        "tags": [
          "AoE",
          "Attack Speed Steal",
          "Movement Speed"
        ],
        "cooldown": "5.0s",
        "description": "Steals attack speed and movement speed from enemies in a fan area, stacking up to 5 times for 6 seconds."
      },
      {
        "id": "skill2",
        "name": "Battle Mirror Image",
        "type": "Skill 2",
        "tags": [
          "Mirror Clone",
          "Blink Teleport"
        ],
        "cooldown": "11.0s",
        "description": "Leaves a mirror image of Dexter at a location; recasting swaps positions with the mirror image instantly."
      },
      {
        "id": "ultimate",
        "name": "Blazing Duet",
        "type": "Ultimate",
        "tags": [
          "AoE Barrage",
          "Shield",
          "Multi-Target"
        ],
        "cooldown": "40.0s",
        "description": "Fires a rapid spinning barrage of bullets at all surrounding enemies for 3 seconds, generating a shield and triggering basic attack effects."
      }
    ]
  },
  "brody": {
    "resourceType": "Mana",
    "crowdControl": [
      "Stun",
      "Slow"
    ],
    "mobility": [
      "Corrosive Leap",
      "Slow Winding Walking"
    ],
    "damageCharacteristics": [
      "Physical Burst",
      "Abyss Marks"
    ],
    "skills": [
      {
        "id": "passive",
        "name": "Abyss Corrosion",
        "type": "Passive",
        "tags": [
          "Winding Attack",
          "Abyss Marks"
        ],
        "description": "Can move while winding up basic attacks, applying Abyss Marks (up to 4 stacks) that increase damage taken by the target."
      },
      {
        "id": "skill1",
        "name": "Abyss Impact",
        "type": "Skill 1",
        "tags": [
          "Linear Wave",
          "Slow"
        ],
        "cooldown": "5.0s",
        "energyCost": "50 Mana",
        "description": "Fires an abyssal shockwave in a line; damage and slow increase for each enemy the wave pierces through."
      },
      {
        "id": "skill2",
        "name": "Corrosive Strike",
        "type": "Skill 2",
        "tags": [
          "Target Stun",
          "Blink Leap"
        ],
        "cooldown": "9.0s",
        "energyCost": "60 Mana",
        "description": "Dashes onto an enemy hero to stun them for 0.8s, vaulting backward to gain movement speed."
      },
      {
        "id": "ultimate",
        "name": "Torn-Apart Memory",
        "type": "Ultimate",
        "tags": [
          "Homing Barrage",
          "Execute"
        ],
        "cooldown": "32.0s",
        "energyCost": "100 Mana",
        "description": "Locks onto all enemies with Abyss Marks within 8 yards, firing homing energy orbs that deal physical damage plus % lost HP."
      }
    ]
  },
  "lesley": {
    "resourceType": "Energy",
    "crowdControl": [
      "Knockback",
      "Disruption"
    ],
    "mobility": [
      "Camouflage Sprint",
      "Tactical Leap"
    ],
    "damageCharacteristics": [
      "True Damage Crits",
      "Sniper Lock"
    ],
    "skills": [
      {
        "id": "passive",
        "name": "Lethal Shot",
        "type": "Passive",
        "tags": [
          "True Damage",
          "Range Buff"
        ],
        "description": "Taking no damage for 5s empowers her next basic attack with extended range, 50% critical chance, and True Damage conversion."
      },
      {
        "id": "skill1",
        "name": "Master of Camouflage",
        "type": "Skill 1",
        "tags": [
          "Camouflage",
          "Speed Boost",
          "Attack Buff"
        ],
        "cooldown": "4.0s",
        "energyCost": "30 Energy",
        "description": "Enters Camouflage for 3 seconds, gaining 40% movement speed and bonus physical attack."
      },
      {
        "id": "skill2",
        "name": "Tactical Grenade",
        "type": "Skill 2",
        "tags": [
          "Knockback",
          "Escape Leap"
        ],
        "cooldown": "10.0s",
        "energyCost": "40 Energy",
        "description": "Throws a tactical grenade forward while leaping backward, knocking back nearby enemies."
      },
      {
        "id": "ultimate",
        "name": "Ultimate Snipe",
        "type": "Ultimate",
        "tags": [
          "Global Snipe",
          "4 Fatal Bullets"
        ],
        "cooldown": "32.0s",
        "energyCost": "0 Energy",
        "description": "Locks onto an enemy hero to fire 4 fatal sniper bullets, revealing obstacles and dealing physical damage plus % lost HP."
      }
    ]
  },
  "wanwan": {
    "resourceType": "Mana",
    "crowdControl": [
      "Stun",
      "Slow"
    ],
    "mobility": [
      "Tiger Pace Hops",
      "CC Cleanse"
    ],
    "damageCharacteristics": [
      "True Damage Weaknesses",
      "Invulnerable Crossbow"
    ],
    "skills": [
      {
        "id": "passive",
        "name": "Tiger Pace",
        "type": "Passive",
        "tags": [
          "Weakness Points",
          "Hop Dash"
        ],
        "description": "Reveals 3 Weakness Points on enemies; hitting all weaknesses breaks them for True Damage and unlocks Crossbow of Tang. Hops on every basic attack."
      },
      {
        "id": "skill1",
        "name": "Swallow's Path",
        "type": "Skill 1",
        "tags": [
          "AoE",
          "Stun",
          "Swallow Daggers"
        ],
        "cooldown": "10.0s",
        "energyCost": "60 Mana",
        "description": "Fires swallow darts forward; pulling them back stuns enemies struck twice from behind."
      },
      {
        "id": "skill2",
        "name": "Needles in Flowers",
        "type": "Skill 2",
        "tags": [
          "Cleanse",
          "AoE Burst"
        ],
        "cooldown": "16.0s",
        "energyCost": "80 Mana",
        "description": "Instantly purges all crowd control effects and scatters needles outward, dealing physical damage."
      },
      {
        "id": "ultimate",
        "name": "Crossbow of Tang",
        "type": "Ultimate",
        "tags": [
          "Invincible Aerial",
          "Multi-Target Reset"
        ],
        "cooldown": "40.0s",
        "energyCost": "100 Mana",
        "description": "Unlocks upon breaking all weaknesses: soars untargetable firing a storm of arrows for 2.5s; killing a target extends duration and switches targets."
      }
    ]
  },
  "karrie": {
    "resourceType": "Mana",
    "crowdControl": [
      "Slow"
    ],
    "mobility": [
      "Phantom Step"
    ],
    "damageCharacteristics": [
      "True Damage % Max HP",
      "Tank Shredder"
    ],
    "skills": [
      {
        "id": "passive",
        "name": "Lightwheel Mark",
        "type": "Passive",
        "tags": [
          "True Damage",
          "% Max HP"
        ],
        "description": "Basic attacks or skills add Lightwheel Marks; at 5 marks, detonates to deal target Max HP True Damage."
      },
      {
        "id": "skill1",
        "name": "Spinning Lightwheel",
        "type": "Skill 1",
        "tags": [
          "AoE Sphere",
          "Continuous Slow"
        ],
        "cooldown": "8.0s",
        "energyCost": "65 Mana",
        "description": "Releases a spinning flywheel forward (20% Total Physical Attack bonus) that stops at destination or hero hit to continuously damage (10% Total Physical Attack bonus) and slow enemies by 80% for 1s."
      },
      {
        "id": "skill2",
        "name": "Phantom Step",
        "type": "Skill 2",
        "tags": [
          "Blink",
          "Lightwheel Throw"
        ],
        "cooldown": "4.5s",
        "energyCost": "35 Mana",
        "description": "Dashes in target direction and detects nearby enemy heroes throughout the dash (or creeps and minions at the end if no heroes are detected) to release a lightwheel and apply Lightwheel Marks."
      },
      {
        "id": "ultimate",
        "name": "Speedy Lightwheel",
        "type": "Ultimate",
        "tags": [
          "Dual Lightwheels",
          "Speed Buff"
        ],
        "cooldown": "35.0s",
        "energyCost": "100 Mana",
        "description": "Enters Dual Wield state for 10s, gaining 30% movement speed and throwing 2 lightwheels (50 base damage per lightwheel) with each basic attack."
      }
    ]
  },
  "bruno": {
    "resourceType": "Mana",
    "crowdControl": [
      "Stun",
      "Knockback"
    ],
    "mobility": [
      "Slide Dash"
    ],
    "damageCharacteristics": [
      "Physical Crit Burst",
      "Volley Shot Stacking"
    ],
    "skills": [
      {
        "id": "passive",
        "name": "Mecha Legs",
        "type": "Passive",
        "tags": [
          "Crit Rate Stacks"
        ],
        "description": "Each skill hit grants 2% critical chance (up to 10 stacks / 20% crit chance) for 5 seconds."
      },
      {
        "id": "skill1",
        "name": "Volley Shot",
        "type": "Skill 1",
        "tags": [
          "Enhanced Ball",
          "Powerball Bounce"
        ],
        "cooldown": "4.0s",
        "energyCost": "50 Mana",
        "description": "Kicks a powerball dealing physical damage and slowing targets; retrieving the bounced ball resets the skill and refreshes Slide."
      },
      {
        "id": "skill2",
        "name": "Slide",
        "type": "Skill 2",
        "tags": [
          "Blink",
          "Crowd Control",
          "Stun"
        ],
        "cooldown": "7.0s",
        "energyCost": "60 Mana",
        "description": "Slides forward with enhanced agile recovery, stunning enemies hit for 0.5s and granting Bruno movement speed."
      },
      {
        "id": "ultimate",
        "name": "Worldie",
        "type": "Ultimate",
        "tags": [
          "Bouncing Energy Ball",
          "Armor Shred",
          "Knockback"
        ],
        "cooldown": "38.0s",
        "energyCost": "120 Mana",
        "description": "Kicks an energy ball that knocks back an enemy hero and bounces between nearby enemies up to 10 times, shredding physical armor."
      }
    ]
  },
  "layla": {
    "resourceType": "Mana",
    "crowdControl": [
      "Stun",
      "Slow"
    ],
    "mobility": [
      "Malefic Speed Buff"
    ],
    "damageCharacteristics": [
      "Physical Long-Range Sniper",
      "Range Scaling"
    ],
    "skills": [
      {
        "id": "passive",
        "name": "Malefic Gun",
        "type": "Passive",
        "tags": [
          "Range Scaling Damage"
        ],
        "description": "Basic attacks and skill damage scale up to 140% based on distance from the target."
      },
      {
        "id": "skill1",
        "name": "Malefic Bomb",
        "type": "Skill 1",
        "tags": [
          "Linear Shot",
          "Range Expansion",
          "Speed Boost"
        ],
        "cooldown": "5.5s",
        "energyCost": "40 Mana",
        "description": "Fires a Malefic Energy Bomb in a line; hitting an enemy expands Layla's attack range and grants 60% movement speed."
      },
      {
        "id": "skill2",
        "name": "Void Projectile",
        "type": "Skill 2",
        "tags": [
          "AoE",
          "Crowd Control",
          "Stun"
        ],
        "cooldown": "9.0s",
        "energyCost": "65 Mana",
        "description": "Fires an energy ball that detonates on impact, slowing targets and applying marks that detonate to stun on follow-up hits."
      },
      {
        "id": "ultimate",
        "name": "Destruction Rush",
        "type": "Ultimate",
        "tags": [
          "Screen-Wide Cannon",
          "Passive Vision/Range"
        ],
        "cooldown": "35.0s",
        "energyCost": "120 Mana",
        "description": "Fires a massive energy laser in a straight line dealing heavy physical damage. Passively extends her basic attack and vision range."
      }
    ]
  },
  "miya": {
    "resourceType": "Mana",
    "crowdControl": [
      "Immobilize",
      "Slow"
    ],
    "mobility": [
      "Concealed Ultimate",
      "Cleanse"
    ],
    "damageCharacteristics": [
      "Physical Multi-Arrow Split",
      "Attack Speed Stacking"
    ],
    "skills": [
      {
        "id": "passive",
        "name": "Moon Blessing",
        "type": "Passive",
        "tags": [
          "Attack Speed",
          "Moon Shadow"
        ],
        "description": "Basic attacks grant attack speed stacks (up to 5 stacks); at max stacks, summons a Moon Shadow to assist on basic attacks."
      },
      {
        "id": "skill1",
        "name": "Moon Arrow",
        "type": "Skill 1",
        "tags": [
          "Multi-Shot Split"
        ],
        "cooldown": "11.0s",
        "energyCost": "60 Mana",
        "description": "Splits basic attacks into 3 arrows for 4 seconds, hitting secondary targets with 30% physical damage."
      },
      {
        "id": "skill2",
        "name": "Arrow of Eclipse",
        "type": "Skill 2",
        "tags": [
          "AoE",
          "Crowd Control",
          "Immobilize"
        ],
        "cooldown": "10.0s",
        "energyCost": "70 Mana",
        "description": "Calls down an eclipse arrow at target area, slowing enemies and immobilizing those caught in the central radius for 1.2s."
      },
      {
        "id": "ultimate",
        "name": "Hidden Moonlight",
        "type": "Ultimate",
        "tags": [
          "Cleanse",
          "Conceal",
          "Speed Boost"
        ],
        "cooldown": "38.0s",
        "energyCost": "120 Mana",
        "description": "Instantly purges all crowd control debuffs, entering Concealment for 1.5–2s with 35% movement speed and instant full Moon Blessing stacks."
      }
    ]
  },
  "moskov": {
    "resourceType": "Mana",
    "crowdControl": [
      "Wall Stun",
      "Displacement"
    ],
    "mobility": [
      "Abyss Blink",
      "Global Teleport Snipe"
    ],
    "damageCharacteristics": [
      "Physical Line Penetration",
      "Attack Speed Stacks"
    ],
    "skills": [
      {
        "id": "passive",
        "name": "Spear of Quiescence",
        "type": "Passive",
        "tags": [
          "Piercing Attack",
          "Cooldown Reduction"
        ],
        "description": "Basic attacks penetrate through targets in a straight line to hit enemies behind them, reducing skill 1 and 2 cooldowns by 0.8s."
      },
      {
        "id": "skill1",
        "name": "Abyss Walker",
        "type": "Skill 1",
        "tags": [
          "Blink",
          "Attack Speed Buff"
        ],
        "cooldown": "7.5s",
        "energyCost": "45 Mana",
        "description": "Teleports in target direction, gaining 1.4x attack speed and increasing penetration damage for 3 seconds."
      },
      {
        "id": "skill2",
        "name": "Spear of Misery",
        "type": "Skill 2",
        "tags": [
          "Knockback",
          "Crowd Control",
          "Wall Stun"
        ],
        "cooldown": "12.0s",
        "energyCost": "70 Mana",
        "description": "Strikes an enemy with full power, knocking them back; if the target collides with a wall or another enemy, they are stunned for 1.5s."
      },
      {
        "id": "ultimate",
        "name": "Spear of Destruction",
        "type": "Ultimate",
        "tags": [
          "Global Spear",
          "Global Teleport",
          "Slow"
        ],
        "cooldown": "45.0s",
        "energyCost": "130 Mana",
        "description": "Throws a spear of death across the entire map; recasting teleports Moskov directly behind the first enemy hero struck."
      }
    ]
  },
  "clint": {
    "resourceType": "Mana",
    "crowdControl": [
      "Immobilize",
      "Slow"
    ],
    "mobility": [
      "Recoil Leap"
    ],
    "damageCharacteristics": [
      "Physical Piercing Burst",
      "Double Shot"
    ],
    "skills": [
      {
        "id": "passive",
        "name": "Double Shot",
        "type": "Passive",
        "tags": [
          "Extended Range",
          "Crit Piercing"
        ],
        "description": "Casting a skill empowers his next basic attack within 4 seconds, firing an extended-range piercing shot dealing heavy physical damage."
      },
      {
        "id": "skill1",
        "name": "Quick Draw",
        "type": "Skill 1",
        "tags": [
          "Fan Burst",
          "5 Bullets"
        ],
        "cooldown": "7.0s",
        "energyCost": "60 Mana",
        "description": "Fires 5 bullets in quick succession at enemies in a fan area, prioritizing heroes."
      },
      {
        "id": "skill2",
        "name": "Trapping Recoil",
        "type": "Skill 2",
        "tags": [
          "Escape Leap",
          "Crowd Control",
          "Immobilize"
        ],
        "cooldown": "9.0s",
        "energyCost": "65 Mana",
        "description": "Shoots a trap net forward that immobilizes the first enemy hit for 1.2s, leaping backward to create distance."
      },
      {
        "id": "ultimate",
        "name": "Grenade Bombward",
        "type": "Ultimate",
        "tags": [
          "Grenade Charges",
          "Slow"
        ],
        "cooldown": "2.0s",
        "energyCost": "40 Mana",
        "description": "Launches a grenade forward that explodes on impact, slowing targets; stores up to 5 charges."
      }
    ]
  },
  "irithel": {
    "resourceType": "Mana",
    "crowdControl": [
      "Slow"
    ],
    "mobility": [
      "Mobile Basic Attacks",
      "Leo Leap"
    ],
    "damageCharacteristics": [
      "Physical AoE Splash",
      "Armor Shred"
    ],
    "skills": [
      {
        "id": "passive",
        "name": "Jungle Heart",
        "type": "Passive",
        "tags": [
          "Moving Attacks",
          "Multi-Arrows"
        ],
        "description": "Can shoot basic attacks while moving without interruption; moving generates energy to fire an extra heavy crossbow shot."
      },
      {
        "id": "skill1",
        "name": "Strafe",
        "type": "Skill 1",
        "tags": [
          "AoE",
          "Armor Shred"
        ],
        "cooldown": "7.0s",
        "energyCost": "60 Mana",
        "description": "Shoots arrows into target area, dealing physical damage and reducing enemy physical defense by 15–25 points."
      },
      {
        "id": "skill2",
        "name": "Force of the Queen",
        "type": "Skill 2",
        "tags": [
          "AoE Roar",
          "Slow"
        ],
        "cooldown": "9.0s",
        "energyCost": "60 Mana",
        "description": "Leo roars fiercely, dealing physical damage to surrounding enemies and slowing them by 80%."
      },
      {
        "id": "ultimate",
        "name": "Heavy Crossbow",
        "type": "Ultimate",
        "tags": [
          "Leap",
          "Heavy Splash",
          "Speed Boost"
        ],
        "cooldown": "36.0s",
        "energyCost": "120 Mana",
        "description": "Leaps forward on Leo, empowering basic attacks for 15 seconds to deal devastating AoE splash physical damage."
      }
    ]
  },
  "hanabi": {
    "resourceType": "Mana",
    "crowdControl": [
      "Immobilize",
      "Bounce CC"
    ],
    "mobility": [
      "Equinox CC Immunity Shield"
    ],
    "damageCharacteristics": [
      "Physical Ricochet",
      "Bouncing Petals"
    ],
    "skills": [
      {
        "id": "passive",
        "name": "Ninjutsu: Equinox",
        "type": "Passive",
        "tags": [
          "CC Immunity Shield",
          "Lifesteal Shield"
        ],
        "description": "Shield generated from lifesteal or skills grants complete crowd-control immunity and 20 movement speed while active."
      },
      {
        "id": "skill1",
        "name": "Ninjutsu: Petal Barrage",
        "type": "Skill 1",
        "tags": [
          "Bouncing Basic Attacks"
        ],
        "cooldown": "12.0s",
        "energyCost": "50 Mana",
        "description": "Empowers basic attacks to ricochet up to 4 times between nearby enemy units and minions, triggering on-hit effects."
      },
      {
        "id": "skill2",
        "name": "Ninjutsu: Soul Scroll",
        "type": "Skill 2",
        "tags": [
          "Linear Scroll",
          "Slow",
          "Mana Regen"
        ],
        "cooldown": "7.0s",
        "energyCost": "40 Mana",
        "description": "Fires a kunai scroll forward, dealing physical damage, slowing targets, and restoring mana upon hitting enemies."
      },
      {
        "id": "ultimate",
        "name": "Forbidden Jutsu: Higanbana",
        "type": "Ultimate",
        "tags": [
          "AoE",
          "Crowd Control",
          "Immobilize",
          "Petal Spread"
        ],
        "cooldown": "40.0s",
        "energyCost": "120 Mana",
        "description": "Hurls Higanbana forward to bloom on impact, immobilizing the target for 0.8s and spreading to nearby enemies."
      }
    ]
  },
  "kimmy": {
    "resourceType": "Energy",
    "crowdControl": [
      "Slow"
    ],
    "mobility": [
      "Chemical Dash",
      "Continuous Mobile Firing"
    ],
    "damageCharacteristics": [
      "Hybrid Physical/Magic",
      "360-Degree Aim"
    ],
    "skills": [
      {
        "id": "passive",
        "name": "Chemist's Instinct",
        "type": "Passive",
        "tags": [
          "360 Degree Aim",
          "Hybrid Scaling"
        ],
        "description": "Fires continuously while moving using a dual-stick aiming wheel; converts attack speed into movement speed."
      },
      {
        "id": "skill1",
        "name": "Energy Transformation",
        "type": "Skill 1",
        "tags": [
          "Magic Chemical Bullets",
          "Energy Drain"
        ],
        "cooldown": "0.0s",
        "energyCost": "5 Energy/shot",
        "description": "Transforms basic attacks into chemical balls dealing magic damage and slowing enemies; consumes energy while firing."
      },
      {
        "id": "skill2",
        "name": "Chemical Refinement",
        "type": "Skill 2",
        "tags": [
          "Escape Dash",
          "Energy Restore"
        ],
        "cooldown": "10.0s",
        "energyCost": "0 Energy",
        "description": "Fires chemical mist backward while dashing forward, slowing enemies on the trail and instantly restoring energy."
      },
      {
        "id": "ultimate",
        "name": "Maximum Charge",
        "type": "Ultimate",
        "tags": [
          "Long-Range Missile",
          "Hybrid Burst"
        ],
        "cooldown": "24.0s",
        "energyCost": "0 Energy",
        "description": "Channels a luminous missile and fires it across screens, detonating on enemy heroes to deal heavy hybrid damage."
      }
    ]
  },
  "granger": {
    "resourceType": "Demonic Energy",
    "crowdControl": [
      "Slow"
    ],
    "mobility": [
      "Rondo Dash",
      "Rhapsody Sprint"
    ],
    "damageCharacteristics": [
      "Physical Mobile Stream",
      "No-Cooldown Energy"
    ],
    "skills": [
      {
        "id": "passive",
        "name": "Capriccio",
        "type": "Passive",
        "tags": [
          "Demonic Energy",
          "Permanent Scaling"
        ],
        "description": "Operates on Demonic Energy instead of cooldowns. Killing minions or creeps permanently increases maximum energy capacity."
      },
      {
        "id": "skill1",
        "name": "Rhapsody",
        "type": "Skill 1",
        "tags": [
          "Continuous Fire",
          "Speed Boost",
          "No Cooldown"
        ],
        "cooldown": "0.0s",
        "energyCost": "Demonic Energy",
        "description": "Fires bullets forward continuously as long as gun energy is available, gaining movement speed while shooting."
      },
      {
        "id": "skill2",
        "name": "Rondo",
        "type": "Skill 2",
        "tags": [
          "Blink",
          "Energy Restore"
        ],
        "cooldown": "4.0s",
        "energyCost": "0 Energy",
        "description": "Dashes in target direction, instantly restoring a burst of energy for his firearm."
      },
      {
        "id": "ultimate",
        "name": "Death Sonata",
        "type": "Ultimate",
        "tags": [
          "Super Cannon",
          "Long Range",
          "No Cooldown"
        ],
        "cooldown": "0.0s",
        "energyCost": "Cannon Energy",
        "description": "Transforms gun into super cannon to fire colossal explosive shells, dealing massive physical damage scaling with lost HP."
      }
    ]
  },
  "popol-and-kupa": {
    "resourceType": "Mana",
    "crowdControl": [
      "Stun",
      "Immobilize",
      "Airborne"
    ],
    "mobility": [
      "Wolf Mount",
      "Wolf Companion Bodyguard"
    ],
    "damageCharacteristics": [
      "Physical Swarm",
      "Rapid Turret Plating"
    ],
    "skills": [
      {
        "id": "passive",
        "name": "We Are Friends",
        "type": "Passive",
        "tags": [
          "Wolf Companion",
          "Heal"
        ],
        "description": "Popol fights alongside Kupa, whose Max HP scales with Popol's level (3500 + 350*Hero Level) and inherits 100% of Popol's attributes and equipment effects. Kupa regenerates 10% Max HP/s out of combat, deals extra True Damage to creeps, and can be revived via Popol's 3s Pray when defeated."
      },
      {
        "id": "skill1",
        "name": "Bite 'em, Kupa!",
        "type": "Skill 1",
        "tags": [
          "Target Bite",
          "Slow",
          "Airborne"
        ],
        "cooldown": "7.0s",
        "energyCost": "50 Mana",
        "description": "Popol throws a spear dealing Physical Damage and commands Kupa to lunge and bite the target, slowing them by 99% for 0.75s while Basic Attacks on the marked target grant Attack and Movement Speed stacks. In Alpha Wolf Form, Kupa strikes nearby enemies, knocking them airborne for 0.5s with increased damage."
      },
      {
        "id": "skill2",
        "name": "Kupa, Help!",
        "type": "Skill 2",
        "tags": [
          "Mount",
          "Mobility",
          "Shield"
        ],
        "cooldown": "10.0s",
        "energyCost": "50 Mana",
        "description": "Calls Kupa back to Popol, granting a shield and letting Popol ride Kupa for 1.5s (+250 Movement Speed) while Kupa continuously recovers 20% Max HP. In Alpha Wolf Form, the shield is stronger and Kupa recovers full HP while mounted."
      },
      {
        "id": "skill3",
        "name": "Popol's Surprise",
        "type": "Skill 3",
        "tags": [
          "Trap",
          "Vision",
          "Immobilize"
        ],
        "cooldown": "1.5s",
        "energyCost": "50 Mana",
        "description": "Sets a frost trap that briefly immobilizes the enemy stepping on it for 1s before exploding into a 4s frost zone that continuously slows enemies within by 20%."
      },
      {
        "id": "ultimate",
        "name": "We Are Angry!",
        "type": "Ultimate",
        "tags": [
          "Morph",
          "Alpha Wolf",
          "Attack Speed"
        ],
        "cooldown": "38.0s",
        "energyCost": "100 Mana",
        "description": "Popol and Kupa enter the Enraged state for 9 seconds. Kupa immediately recovers full HP and transforms into Alpha Wolf Form, gaining extra Max HP and enhancing his other skills."
      }
    ]
  },
  "natan": {
    "resourceType": "Mana",
    "crowdControl": [
      "Displacement",
      "Push"
    ],
    "mobility": [
      "Reverse-Clone Swap"
    ],
    "damageCharacteristics": [
      "Magic Basic Attacks",
      "Spacetime Clone"
    ],
    "skills": [
      {
        "id": "passive",
        "name": "Theory of Everything",
        "type": "Passive",
        "tags": [
          "Magic Basic Attack",
          "Attack Speed Stacks"
        ],
        "description": "Basic attacks deal magic damage. Hitting enemies with skills grants Entanglement stacks, boosting attack speed by up to 90%."
      },
      {
        "id": "skill1",
        "name": "Superposition",
        "type": "Skill 1",
        "tags": [
          "AoE Laser",
          "Magic Damage"
        ],
        "cooldown": "7.0s",
        "energyCost": "65 Mana",
        "description": "Shoots a burst of gravitational energy forward, dealing heavy magic damage to all enemies along its path."
      },
      {
        "id": "skill2",
        "name": "Interference",
        "type": "Skill 2",
        "tags": [
          "Displacement",
          "Gravitational Pull"
        ],
        "cooldown": "11.0s",
        "energyCost": "70 Mana",
        "description": "Launches a gravitational orb forward that pushes enemies along and attracts them to its center upon detonation."
      },
      {
        "id": "ultimate",
        "name": "Entropy?",
        "type": "Ultimate",
        "tags": [
          "Spacetime Clone",
          "Position Swap"
        ],
        "cooldown": "38.0s",
        "energyCost": "100 Mana",
        "description": "Opens a wormhole summoning a Reverse-Clone that copies all skills and basic attacks; recasting swaps positions with the clone."
      }
    ]
  },
  "melissa": {
    "resourceType": "Mana",
    "crowdControl": [
      "Anti-Melee Ward",
      "Slow"
    ],
    "mobility": [
      "Dash"
    ],
    "damageCharacteristics": [
      "Physical Linked Damage",
      "Muddles Doll"
    ],
    "skills": [
      {
        "id": "passive",
        "name": "Doll Buster",
        "type": "Passive",
        "tags": [
          "Damage Amp against Minions/Summons"
        ],
        "description": "Deals 125% damage to minions, creeps, and summoned units."
      },
      {
        "id": "skill1",
        "name": "Falling!",
        "type": "Skill 1",
        "tags": [
          "Blink",
          "Attack Speed Buff"
        ],
        "cooldown": "5.0s",
        "energyCost": "30 Mana",
        "description": "Slides forward and boosts Attack Speed for 2.5 seconds while moving Muddles and Cuddles."
      },
      {
        "id": "skill2",
        "name": "Eyes on You!",
        "type": "Skill 2",
        "tags": [
          "Doll Throw",
          "Damage Link",
          "Slow"
        ],
        "cooldown": "9.0s",
        "energyCost": "70 Mana",
        "description": "Hurls her puppet Muddles forward, linking nearby enemy heroes for up to 6s and slowing them by 60% (decaying over 1.5s); attacking Muddles transfers 50%–60% damage (and matching Attack Effect inheritance) to all linked heroes."
      },
      {
        "id": "ultimate",
        "name": "Go Away!",
        "type": "Ultimate",
        "tags": [
          "Anti-Melee Barrier",
          "Knockback"
        ],
        "cooldown": "50.0s",
        "energyCost": "120 Mana",
        "description": "Summons protective barrier Cuddles for 4 seconds, gaining a shield and knocking back enemies attempting to enter the field."
      }
    ]
  },
  "ixia": {
    "resourceType": "Mana",
    "crowdControl": [
      "Slow",
      "Displacement"
    ],
    "mobility": [
      "Sirlight Speed"
    ],
    "damageCharacteristics": [
      "Physical Conical Barrage",
      "All-Target Ultimate"
    ],
    "skills": [
      {
        "id": "passive",
        "name": "Sirlight Star",
        "type": "Passive",
        "tags": [
          "Heal",
          "Bonus Physical Damage"
        ],
        "description": "Attacking marked enemies consumes Sirlight marks to deal bonus physical damage and recover HP for Ixia."
      },
      {
        "id": "skill1",
        "name": "Dual Beam",
        "type": "Skill 1",
        "tags": [
          "Dual Laser",
          "Speed Boost"
        ],
        "cooldown": "8.0s",
        "energyCost": "50 Mana",
        "description": "Fires two energy beams along the ground; hitting enemies grants Ixia movement speed."
      },
      {
        "id": "skill2",
        "name": "Starhelix",
        "type": "Skill 2",
        "tags": [
          "Linear Pull",
          "Crowd Control"
        ],
        "cooldown": "10.0s",
        "energyCost": "60 Mana",
        "description": "Releases star energy that pulls enemies caught along its path toward the center line."
      },
      {
        "id": "ultimate",
        "name": "Full Barrage",
        "type": "Ultimate",
        "tags": [
          "Conical Sector",
          "Simultaneous Attacks"
        ],
        "cooldown": "45.0s",
        "energyCost": "120 Mana",
        "description": "Opens a colossal conical radar sector for 5s, attacking all enemies inside simultaneously with basic attacks and skills."
      }
    ]
  },
  "obsidia": {
    "resourceType": "Mana",
    "crowdControl": [
      "Slow",
      "Shatter Stun"
    ],
    "mobility": [
      "Fracture Step"
    ],
    "damageCharacteristics": [
      "Physical Piercing Burst",
      "Crystalline Marks"
    ],
    "skills": [
      {
        "id": "passive",
        "name": "Obsidian Shards",
        "type": "Passive",
        "tags": [
          "Armor Penetration",
          "Shard Marks"
        ],
        "description": "Attacks apply obsidian crystal shards to enemies, granting natural percentage physical penetration against marked targets."
      },
      {
        "id": "skill1",
        "name": "Crystalline Volley",
        "type": "Skill 1",
        "tags": [
          "Piercing Volley",
          "Slow"
        ],
        "cooldown": "6.0s",
        "energyCost": "45 Mana",
        "description": "Fires an obsidian shard volley forward, piercing minions and dealing physical damage to enemies hit."
      },
      {
        "id": "skill2",
        "name": "Fracture Step",
        "type": "Skill 2",
        "tags": [
          "Blink",
          "Attack Speed"
        ],
        "cooldown": "8.0s",
        "energyCost": "50 Mana",
        "description": "Dashes in target direction, gaining attack speed and empowering her next basic attack with bonus shard range."
      },
      {
        "id": "ultimate",
        "name": "Shatter Nova",
        "type": "Ultimate",
        "tags": [
          "AoE Detonation",
          "Crowd Control",
          "Stun"
        ],
        "cooldown": "38.0s",
        "energyCost": "100 Mana",
        "description": "Fires a massive obsidian crystal shell that detonates in target area, stunning marked targets and shattering into sharp fragments."
      }
    ]
  },
  "angela": {
    "resourceType": "Mana",
    "crowdControl": [
      "Immobilize",
      "Slow"
    ],
    "mobility": [
      "Heartguard Possession",
      "Speed Boost"
    ],
    "damageCharacteristics": [
      "Magic Team Buff",
      "Global Attachment"
    ],
    "skills": [
      {
        "id": "passive",
        "name": "Smart Heart",
        "type": "Passive",
        "tags": [
          "Speed Boost"
        ],
        "description": "Each skill cast increases her movement speed by 15% (up to 30%), transferring this speed to attached allies."
      },
      {
        "id": "skill1",
        "name": "Love Waves",
        "type": "Skill 1",
        "tags": [
          "AoE",
          "Heal",
          "Lover's Mark"
        ],
        "cooldown": "1.5s",
        "energyCost": "50 Mana",
        "description": "Launches love energy in a forward fan, dealing magic damage and slowing enemies while healing all allied units hit."
      },
      {
        "id": "skill2",
        "name": "Puppet-on-a-String",
        "type": "Skill 2",
        "tags": [
          "Tether",
          "Crowd Control",
          "Immobilize"
        ],
        "cooldown": "11.0s",
        "energyCost": "80 Mana",
        "description": "Attaches a puppet string to a target enemy; maintaining the tether for 3 seconds immobilizes them for 1.5s."
      },
      {
        "id": "ultimate",
        "name": "Heartguard",
        "type": "Ultimate",
        "tags": [
          "Global Possession",
          "Colossal Shield"
        ],
        "cooldown": "65.0s",
        "energyCost": "150 Mana",
        "description": "Teleports into a designated allied hero anywhere on the map, granting them a massive shield and casting free skills from their body."
      }
    ]
  },
  "mathilda": {
    "resourceType": "Mana",
    "crowdControl": [
      "Stun",
      "Knockup"
    ],
    "mobility": [
      "Guiding Flight",
      "Team Fly Transit"
    ],
    "damageCharacteristics": [
      "Magic Burst",
      "Free Guiding Blink for Allies"
    ],
    "skills": [
      {
        "id": "passive",
        "name": "Ancestral Guidance",
        "type": "Passive",
        "tags": [
          "Enhanced Attack",
          "Speed Boost"
        ],
        "description": "Gains Ancestral Guidance stacks while moving; when full, empowers basic attack to dash, deal magic damage, and grant speed."
      },
      {
        "id": "skill1",
        "name": "Soul Bloom",
        "type": "Skill 1",
        "tags": [
          "Wisp Stacks",
          "Homing Burst"
        ],
        "cooldown": "7.5s",
        "energyCost": "60 Mana",
        "description": "Summons wisps while moving (up to 6 wisps); reactivating fires all wisps at nearby enemies, dealing magic burst."
      },
      {
        "id": "skill2",
        "name": "Guiding Wind",
        "type": "Skill 2",
        "tags": [
          "Team Blink Transit",
          "Shield"
        ],
        "cooldown": "12.0s",
        "energyCost": "70 Mana",
        "description": "Creates a wind field granting shields; any allied hero can tap the Guiding Wind button to dash directly to Mathilda."
      },
      {
        "id": "ultimate",
        "name": "Circling Eagle",
        "type": "Ultimate",
        "tags": [
          "Circling Flight",
          "Crowd Control",
          "Airborne"
        ],
        "cooldown": "40.0s",
        "energyCost": "130 Mana",
        "description": "Attaches to an enemy hero and circles around them with CC immunity, then rushes in to knock up surrounding targets."
      }
    ]
  },
  "diggie": {
    "resourceType": "Mana",
    "crowdControl": [
      "Pull/Tether",
      "Slow",
      "Global Anti-CC"
    ],
    "mobility": [
      "Egg Form on Death"
    ],
    "damageCharacteristics": [
      "Magic Traps",
      "Team Cleanse & Shield"
    ],
    "skills": [
      {
        "id": "passive",
        "name": "Young Again",
        "type": "Passive",
        "tags": [
          "Egg Form",
          "Undying Vision"
        ],
        "description": "Upon death, transforms into an egg with unique harassment abilities and free movement instead of being sent to fountain."
      },
      {
        "id": "skill1",
        "name": "Auto Alarm Bomb",
        "type": "Skill 1",
        "tags": [
          "Homing Owl Bomb",
          "Vision Trap"
        ],
        "cooldown": "8.0s",
        "energyCost": "70 Mana",
        "description": "Throws an owl alarm bomb that stays on the ground; automatically chases nearby enemy heroes to detonate for magic damage."
      },
      {
        "id": "skill2",
        "name": "Reverse Time",
        "type": "Skill 2",
        "tags": [
          "Tether",
          "Time Rewind Pull"
        ],
        "cooldown": "15.0s",
        "energyCost": "80 Mana",
        "description": "Locks onto an enemy hero; after 4 seconds or when they flee, rewinds their position back to the center mark."
      },
      {
        "id": "ultimate",
        "name": "Time Journey",
        "type": "Ultimate",
        "tags": [
          "Team Cleanse",
          "Team CC Immunity",
          "Shield"
        ],
        "cooldown": "60.0s",
        "energyCost": "130 Mana",
        "description": "Grants all nearby allied heroes complete immunity to all crowd control effects and a massive protective shield for 3 seconds."
      }
    ]
  },
  "estes": {
    "resourceType": "Mana",
    "crowdControl": [
      "Slow"
    ],
    "mobility": [],
    "damageCharacteristics": [
      "Team Healing",
      "Continuous Regeneration"
    ],
    "skills": [
      {
        "id": "passive",
        "name": "The Code of Moon Elves",
        "type": "Passive",
        "tags": [
          "Moonlight Energy",
          "Splash Attack"
        ],
        "description": "Charges energy over time; when full, his next basic attack ricochets magic damage and slows enemies hit."
      },
      {
        "id": "skill1",
        "name": "Moonlight Immersion",
        "type": "Skill 1",
        "tags": [
          "Direct Heal",
          "Tether Regen"
        ],
        "cooldown": "9.0s",
        "energyCost": "110 Mana",
        "description": "Heals an allied hero instantly and links moonlight to them, continuously regenerating HP for both heroes."
      },
      {
        "id": "skill2",
        "name": "Domain of Moon Goddess",
        "type": "Skill 2",
        "tags": [
          "AoE",
          "90% Slow"
        ],
        "cooldown": "11.0s",
        "energyCost": "80 Mana",
        "description": "Summons a flood of moonlight in a circular area, dealing magic damage and slowing enemies touching the edge by 90%."
      },
      {
        "id": "ultimate",
        "name": "Blessing of Moon Goddess",
        "type": "Ultimate",
        "tags": [
          "Team AoE Heal",
          "Continuous Regen"
        ],
        "cooldown": "50.0s",
        "energyCost": "150 Mana",
        "description": "Casts Moonlight Immersion on all surrounding allied heroes simultaneously for 8 seconds, providing unstoppable continuous team healing."
      }
    ]
  },
  "floryn": {
    "resourceType": "Mana",
    "crowdControl": [
      "Stun",
      "Slow"
    ],
    "mobility": [],
    "damageCharacteristics": [
      "Global Healing",
      "Anti-Anti-Heal Lantern"
    ],
    "skills": [
      {
        "id": "passive",
        "name": "Dew",
        "type": "Passive",
        "tags": [
          "Lantern Item Gift"
        ],
        "description": "Carries Dew's Lantern, which evolves over time and can be gifted to an allied hero at base to provide them a free 7th item slot."
      },
      {
        "id": "skill1",
        "name": "Sow",
        "type": "Skill 1",
        "tags": [
          "Energy Seed",
          "Heal",
          "Magic Damage"
        ],
        "cooldown": "8.0s",
        "energyCost": "60 Mana",
        "description": "Fires an energy seed at an enemy; upon hitting, scatters healing fruit to restore HP for all nearby allies."
      },
      {
        "id": "skill2",
        "name": "Sprout",
        "type": "Skill 2",
        "tags": [
          "Crowd Control",
          "Stun"
        ],
        "cooldown": "11.0s",
        "energyCost": "70 Mana",
        "description": "Casts bloomed energy in a line; reaching destination or hitting an enemy explodes to stun all units in the area for 1s."
      },
      {
        "id": "ultimate",
        "name": "Bloom",
        "type": "Ultimate",
        "tags": [
          "Global Team Heal",
          "Anti-Heal Cleanse"
        ],
        "cooldown": "50.0s",
        "energyCost": "140 Mana",
        "description": "Resonates with Dew to heal all allied heroes twice anywhere on the map, completely neutralizing anti-heal debuffs."
      }
    ]
  },
  "kaja": {
    "resourceType": "Cooldown-Only",
    "crowdControl": [
      "Area Bind",
      "Pull",
      "Stun",
      "Slow"
    ],
    "mobility": [
      "Soaring Wings Dash"
    ],
    "damageCharacteristics": [
      "Magic Control",
      "Damage Reduction Debuff"
    ],
    "skills": [
      {
        "id": "passive",
        "name": "Wings of Lightning",
        "type": "Passive",
        "tags": [
          "Paralysis",
          "Damage Reduction Debuff"
        ],
        "description": "Skill damage applies Paralysis to enemy units, briefly slowing heroes or summoned units and reducing their damage dealt by 8% for 5s."
      },
      {
        "id": "skill1",
        "name": "Ring of Order",
        "type": "Skill 1",
        "tags": [
          "Expanding Ring",
          "Heal",
          "Slow"
        ],
        "cooldown": "5.5s",
        "description": "Summons a ring of Primal Lightning that expands and returns, dealing Magic Damage and recovering HP to Kaja (subsequent hit healing reduced to 33%)."
      },
      {
        "id": "skill2",
        "name": "Soaring Wings",
        "type": "Skill 2",
        "tags": [
          "Blink",
          "Soaring",
          "Stun"
        ],
        "cooldown": "14.0s",
        "description": "Dashes to the target area with Control Immunity, knocking back and stunning nearby enemies for 0.5s before entering the Soaring state (6.6s, ignores obstacles, +15% Movement Speed, improved turning speed; Skill 2 cooldown becomes 4s). Enhanced Basic Attacks while moving (+0.2s) and Skill 2 hits on enemies or minions (+2.6s) extend the Soaring state."
      },
      {
        "id": "ultimate",
        "name": "Divine Binding",
        "type": "Ultimate",
        "tags": [
          "Crowd Control",
          "Area Bind",
          "Pull"
        ],
        "cooldown": "70.0s",
        "description": "Hurls a Primal Lightning Lasso at the target area; after a brief delay, traps all enemy heroes inside for 2.5s (targets with Control Immunity cannot escape the area when it takes effect). While active, Kaja can drag and shrink the lasso to pull enemies at the boundary."
      }
    ]
  },
  "rafaela": {
    "resourceType": "Mana",
    "crowdControl": [
      "Stun",
      "Slow"
    ],
    "mobility": [
      "Team Speed Boost"
    ],
    "damageCharacteristics": [
      "Magic Team Buff",
      "Bush Vision Reveal"
    ],
    "skills": [
      {
        "id": "passive",
        "name": "Deity Penalization",
        "type": "Passive",
        "tags": [
          "Vengeance Strike",
          "True Damage"
        ],
        "description": "Upon dying, targets the killer to fire a sacred light beam dealing True Damage equal to 20% of target's max HP."
      },
      {
        "id": "skill1",
        "name": "Light of Retribution",
        "type": "Skill 1",
        "tags": [
          "Bush Vision",
          "Slow",
          "Magic Damage"
        ],
        "cooldown": "4.0s",
        "energyCost": "70 Mana",
        "description": "Shoots rays of holy light at 3 nearest enemies, revealing hidden enemies in bushes and slowing them by 40%."
      },
      {
        "id": "skill2",
        "name": "Holy Healing",
        "type": "Skill 2",
        "tags": [
          "Heal",
          "Team Speed Boost"
        ],
        "cooldown": "9.5s",
        "energyCost": "100 Mana",
        "description": "Channels holy healing to restore HP to herself and allies, granting 50% movement speed for 1.5 seconds."
      },
      {
        "id": "ultimate",
        "name": "Holy Baptism",
        "type": "Ultimate",
        "tags": [
          "Linear Wave",
          "Crowd Control",
          "Stun"
        ],
        "cooldown": "42.0s",
        "energyCost": "130 Mana",
        "description": "Releases a linear wave of holy light forward, dealing magic damage and stunning all enemies hit for 1.5 seconds."
      }
    ]
  },
  "lolita": {
    "resourceType": "Mana",
    "crowdControl": [
      "Stun",
      "Cone Stun",
      "Slow"
    ],
    "mobility": [
      "Charge Dash"
    ],
    "damageCharacteristics": [
      "Physical Projectile Reflection",
      "AoE Shielding"
    ],
    "skills": [
      {
        "id": "passive",
        "name": "Noumenon Energy Core",
        "type": "Passive",
        "tags": [
          "Team Shield",
          "Sustain"
        ],
        "description": "Periodically generates an absorption shield for herself and all nearby allied heroes."
      },
      {
        "id": "skill1",
        "name": "Charge!",
        "type": "Skill 1",
        "tags": [
          "Blink",
          "Crowd Control",
          "Stun"
        ],
        "cooldown": "10.0s",
        "energyCost": "60 Mana",
        "description": "Dashes in target direction, empowering her next basic attack to stun the enemy target for 0.8s."
      },
      {
        "id": "skill2",
        "name": "Guardian's Bulwark",
        "type": "Skill 2",
        "tags": [
          "Projectile Shield",
          "Reflect"
        ],
        "cooldown": "15.0s",
        "energyCost": "80 Mana",
        "description": "Raises her shield for 3s to completely block and reflect all enemy ranged projectiles and auto-attacks back at attackers."
      },
      {
        "id": "ultimate",
        "name": "Noumenon Blast",
        "type": "Ultimate",
        "tags": [
          "Cone Channel",
          "Crowd Control",
          "Stun"
        ],
        "cooldown": "45.0s",
        "energyCost": "120 Mana",
        "description": "Channels a giant conical sector for 2 seconds, slowing enemies and slamming down to stun all targets inside for 2s."
      }
    ]
  },
  "faramis": {
    "resourceType": "Mana",
    "crowdControl": [
      "Pull",
      "Crowd Control"
    ],
    "mobility": [
      "Shadow State Sprint"
    ],
    "damageCharacteristics": [
      "Magic Nether Bursts",
      "Cult Altar Extra Lives"
    ],
    "skills": [
      {
        "id": "passive",
        "name": "Vicious Retrieval",
        "type": "Passive",
        "tags": [
          "Soul Orbs",
          "Heal",
          "Respawn Reduction"
        ],
        "description": "Harvests soul orbs from fallen units to heal himself and permanently reduce his respawn timer upon death."
      },
      {
        "id": "skill1",
        "name": "Shadow Stampede",
        "type": "Skill 1",
        "tags": [
          "Shadow Form",
          "Speed Boost",
          "Pull"
        ],
        "cooldown": "14.0s",
        "energyCost": "70 Mana",
        "description": "Enters Shadow State gaining movement speed and defense; touching enemies links chains that pull them toward Faramis upon exit."
      },
      {
        "id": "skill2",
        "name": "Ghost Bursters",
        "type": "Skill 2",
        "tags": [
          "Fan Blast",
          "Ricochet Burst"
        ],
        "cooldown": "5.5s",
        "energyCost": "60 Mana",
        "description": "Releases nether energy in a fan area; landing hits causes bursts that ricochet between nearby enemies."
      },
      {
        "id": "ultimate",
        "name": "Cult Altar",
        "type": "Ultimate",
        "tags": [
          "Team Extra HP Bars",
          "Invulnerability State"
        ],
        "cooldown": "65.0s",
        "energyCost": "150 Mana",
        "description": "Turns the surroundings into the Nether Realm, granting Faramis and all nearby allies a massive extra HP bar and brief death immunity."
      }
    ]
  },
  "carmilla": {
    "resourceType": "Mana",
    "crowdControl": [
      "Shared Damage/CC",
      "Stun",
      "Slow"
    ],
    "mobility": [
      "Bloodbath Speed Sprint"
    ],
    "damageCharacteristics": [
      "Magic AoE",
      "Defense Stealing"
    ],
    "skills": [
      {
        "id": "passive",
        "name": "Vampire Pact",
        "type": "Passive",
        "tags": [
          "Defense Steal"
        ],
        "description": "Basic attacks steal 6–12 physical and magic defense from enemy heroes (up to 5 stacks) for 5 seconds."
      },
      {
        "id": "skill1",
        "name": "Crimson Flower",
        "type": "Skill 1",
        "tags": [
          "Orbiting Flowers",
          "Heal",
          "Slow"
        ],
        "cooldown": "8.0s",
        "energyCost": "50 Mana",
        "description": "Summons 2 Crimson Flowers spinning around herself, damaging and slowing nearby enemies while healing Carmilla."
      },
      {
        "id": "skill2",
        "name": "Bloodbath",
        "type": "Skill 2",
        "tags": [
          "Speed Boost",
          "Target Stun"
        ],
        "cooldown": "11.0s",
        "energyCost": "65 Mana",
        "description": "Gains 70% decaying movement speed; recasting hurls blood energy to stun the target enemy for up to 1.5s."
      },
      {
        "id": "ultimate",
        "name": "Curse of Blood",
        "type": "Ultimate",
        "tags": [
          "Curse Link",
          "Shared CC & Damage"
        ],
        "cooldown": "40.0s",
        "energyCost": "100 Mana",
        "description": "Casts Curse of Blood to link up to 3 enemy heroes; damage and crowd control inflicted on any linked hero is shared to the others."
      }
    ]
  },
  "chip": {
    "resourceType": "Mana",
    "crowdControl": [
      "Stun",
      "Slow"
    ],
    "mobility": [
      "Map Shortcut Beacons",
      "Global Team Portal"
    ],
    "damageCharacteristics": [
      "Magic AoE",
      "Snack Initiation"
    ],
    "skills": [
      {
        "id": "passive",
        "name": "Snack Time!",
        "type": "Passive",
        "tags": [
          "Potato Chips",
          "Heal"
        ],
        "description": "Munches potato chips when out of combat to continuously restore HP; can use 4 shortcut beacons on the map to warp."
      },
      {
        "id": "skill1",
        "name": "Crash Course",
        "type": "Skill 1",
        "tags": [
          "Shield",
          "AoE",
          "Stun"
        ],
        "cooldown": "6.0s",
        "energyCost": "50 Mana",
        "description": "Slams the ground with his hovercraft, dealing magic damage and gaining a shield; empowered basic attack stuns the target."
      },
      {
        "id": "skill2",
        "name": "Overtime",
        "type": "Skill 2",
        "tags": [
          "Speed Boost",
          "Knockback"
        ],
        "cooldown": "10.0s",
        "energyCost": "60 Mana",
        "description": "Gains massive decaying movement speed; colliding with an enemy knocks them back and deals magic damage."
      },
      {
        "id": "ultimate",
        "name": "Why Bother?",
        "type": "Ultimate",
        "tags": [
          "Team Teleport Portal",
          "AoE Slow"
        ],
        "cooldown": "50.0s",
        "energyCost": "120 Mana",
        "description": "Drops a giant portal on target enemy hero, slowing them; creates connecting portals at base and near allies to let team warp in instantly."
      }
    ]
  },
  "kalea": {
    "resourceType": "Mana",
    "crowdControl": [
      "Airborne",
      "Slow"
    ],
    "mobility": [
      "Water Current Dash"
    ],
    "damageCharacteristics": [
      "Magic Team Shield",
      "Tidal Whirlpool"
    ],
    "skills": [
      {
        "id": "passive",
        "name": "Tide's Embrace",
        "type": "Passive",
        "tags": [
          "Enhanced 3rd Attack",
          "Shield"
        ],
        "description": "Every 3rd basic attack releases an empowered whirlpool dealing scaling Magic Damage (buffed in Patch 2.2.16a) and shielding nearby allies."
      },
      {
        "id": "skill1",
        "name": "Aqua Stream",
        "type": "Skill 1",
        "tags": [
          "Linear Wave",
          "Slow"
        ],
        "cooldown": "6.0s",
        "energyCost": "50 Mana",
        "description": "Directs a rushing water stream forward, dealing magic damage and slowing enemies in its path."
      },
      {
        "id": "skill2",
        "name": "Flowing Barrier",
        "type": "Skill 2",
        "tags": [
          "Team Shield",
          "Speed Boost"
        ],
        "cooldown": "10.0s",
        "energyCost": "65 Mana",
        "description": "Wraps target ally and herself in flowing water barriers, granting shields and movement speed."
      },
      {
        "id": "ultimate",
        "name": "Whirlpool Domain",
        "type": "Ultimate",
        "tags": [
          "AoE Vortex",
          "Crowd Control",
          "Airborne"
        ],
        "cooldown": "44.0s",
        "energyCost": "110 Mana",
        "description": "Summons a colossal tidal whirlpool at target area, pulling enemies toward the center and knocking them airborne."
      }
    ]
  },
  "julian": {
    "resourceType": "Cooldown-Only",
    "crowdControl": [
      "Airborne",
      "Immobilize",
      "Slow"
    ],
    "mobility": [
      "Untargetable Flying Dash"
    ],
    "damageCharacteristics": [
      "Magic Burst",
      "Enhanced Skills / No Traditional Ultimate"
    ],
    "skills": [
      {
        "id": "passive",
        "name": "Smith's Legacy",
        "type": "Passive",
        "tags": [
          "Enhanced Skill System",
          "Magic Lifesteal"
        ],
        "description": "Julian has no traditional ultimate; all 3 skills can be unlocked at level 1. Casting any 2 skills enhances the 3rd skill and empowers his basic attack with magic lifesteal."
      },
      {
        "id": "skill1",
        "name": "Scythe",
        "type": "Skill 1",
        "tags": [
          "Flying Scythe",
          "Slow",
          "Enhanced Multi-Hit"
        ],
        "cooldown": "6.0s",
        "description": "Hurls a flying scythe forward, dealing magic damage and slowing targets. (Enhanced) Hurls an expanding giant scythe that continuously pulls and shreds enemies."
      },
      {
        "id": "skill2",
        "name": "Sword",
        "type": "Skill 2",
        "tags": [
          "Blink",
          "Untargetable Dash",
          "Enhanced Surge"
        ],
        "cooldown": "7.0s",
        "description": "Summons a flying sword and dashes forward. (Enhanced) Becomes untargetable, flying forward and slicing all enemies in his path with multiple strikes."
      },
      {
        "id": "skill3",
        "name": "Chain",
        "type": "Skill 3",
        "tags": [
          "Crowd Control",
          "Airborne",
          "Immobilize"
        ],
        "cooldown": "6.0s",
        "description": "Casts chains in a target area, immobilizing enemies after a brief delay. (Enhanced) Smashes ground with heavy chains, continuously knocking enemies airborne."
      }
    ]
  }
};

export function getHeroSkillRecord(heroId: string): HeroSkillRecord | undefined {
  return HERO_SKILLS_DATA[heroId];
}
