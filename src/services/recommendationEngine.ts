import { Hero, Role, Lane, RecommendationScore, ScoringWeights, PlayerProfile } from '../types/mlbb';
import { HEROES, HERO_MAP } from '../data/heroes';

export interface DraftAnalysisInput {
  alliedPicks: (string | null)[];
  enemyPicks: (string | null)[];
  alliedBans: (string | null)[];
  enemyBans: (string | null)[];
  selectedLaneFilter: Lane | 'ALL';
  weights: ScoringWeights;
  userProfile?: PlayerProfile;
}

export interface TeamCompositionSummary {
  rolesPresent: Set<Role>;
  missingRoles: Role[];
  damageTypes: {
    physical: number;
    magic: number;
    trueDamage: number;
  };
  lanesPresent: Set<Lane>;
  missingLanes: Lane[];
  strengths: string[];
  weaknesses: string[];
}

export class RecommendationEngine {
  public static analyzeComposition(pickedHeroIds: (string | null)[]): TeamCompositionSummary {
    const validHeroes: Hero[] = pickedHeroIds
      .filter((id): id is string => Boolean(id))
      .map((id) => HERO_MAP.get(id))
      .filter((h): h is Hero => Boolean(h));

    const rolesPresent = new Set<Role>();
    const lanesPresent = new Set<Lane>();
    let physical = 0;
    let magic = 0;
    let trueDamage = 0;

    for (const h of validHeroes) {
      rolesPresent.add(h.primaryRole);
      if (h.secondaryRole) rolesPresent.add(h.secondaryRole);

      lanesPresent.add(h.primaryLane);
      if (h.secondaryLane) lanesPresent.add(h.secondaryLane);

      if (h.damageType === 'Physical') physical++;
      else if (h.damageType === 'Magic') magic++;
      else if (h.damageType === 'True') trueDamage++;
      else if (h.damageType === 'Hybrid') {
        physical += 0.5;
        magic += 0.5;
      }
    }

    const allStandardRoles: Role[] = ['Tank', 'Fighter', 'Assassin', 'Mage', 'Marksman', 'Support'];
    const allStandardLanes: Lane[] = ['Gold Lane', 'EXP Lane', 'Mid Lane', 'Roam', 'Jungle'];

    const missingRoles = allStandardRoles.filter((r) => !rolesPresent.has(r));
    const missingLanes = allStandardLanes.filter((l) => !lanesPresent.has(l));

    const strengths: string[] = [];
    const weaknesses: string[] = [];

    if (physical > 0 && magic > 0) {
      strengths.push('Balanced Physical & Magic damage distribution');
    } else if (physical > 3 && magic === 0) {
      weaknesses.push('High Physical vulnerability: Enemy can counter-stack Physical Defense (Antique Cuirass/Blade Armor)');
    } else if (magic > 3 && physical === 0) {
      weaknesses.push('High Magic vulnerability: Enemy can counter-stack Radiant Armor & Athena Shield');
    }

    if (!rolesPresent.has('Tank') && !rolesPresent.has('Support')) {
      weaknesses.push('Lacks frontline durability or protection support for objectives');
    }

    if (rolesPresent.has('Marksman') && lanesPresent.has('Gold Lane')) {
      strengths.push('Reliable late-game physical damage carry present');
    } else if (!rolesPresent.has('Marksman') && validHeroes.length >= 3) {
      weaknesses.push('Missing traditional late-game sustained marksman push');
    }

    if (lanesPresent.has('Jungle')) {
      strengths.push('Dedicated jungler equipped for retribution smite battles');
    } else if (validHeroes.length >= 4 && !lanesPresent.has('Jungle')) {
      weaknesses.push('Warning: No clear Retribution jungle objective carrier identified');
    }

    return {
      rolesPresent,
      missingRoles,
      damageTypes: { physical, magic, trueDamage },
      lanesPresent,
      missingLanes,
      strengths,
      weaknesses
    };
  }

  public static getRecommendations(input: DraftAnalysisInput): RecommendationScore[] {
    const {
      alliedPicks,
      enemyPicks,
      alliedBans,
      enemyBans,
      selectedLaneFilter,
      weights,
      userProfile
    } = input;

    // Set of all unavailable heroes
    const unavailableIds = new Set<string>();
    [...alliedPicks, ...enemyPicks, ...alliedBans, ...enemyBans].forEach((id) => {
      if (id) unavailableIds.add(id);
    });

    const alliedHeroes: Hero[] = alliedPicks
      .filter((id): id is string => Boolean(id))
      .map((id) => HERO_MAP.get(id))
      .filter((h): h is Hero => Boolean(h));

    const enemyHeroes: Hero[] = enemyPicks
      .filter((id): id is string => Boolean(id))
      .map((id) => HERO_MAP.get(id))
      .filter((h): h is Hero => Boolean(h));

    const alliedComp = this.analyzeComposition(alliedPicks);

    const availableHeroes = HEROES.filter((h) => !unavailableIds.has(h.id));

    const recommendations: RecommendationScore[] = [];

    for (const hero of availableHeroes) {
      // Filter by lane if lane filter is active
      if (
        selectedLaneFilter !== 'ALL' &&
        hero.primaryLane !== selectedLaneFilter &&
        hero.secondaryLane !== selectedLaneFilter
      ) {
        continue;
      }

      let roleFitRaw = 50; // base score out of 100
      let counterRaw = 50;
      let synergyRaw = 50;
      let proficiencyRaw = 50;

      const reasons: string[] = [];
      const warnings: string[] = [];

      // 1. ROLE & LANE FIT
      if (alliedComp.missingLanes.includes(hero.primaryLane)) {
        roleFitRaw += 35;
        reasons.push(`Fills unfilled ${hero.primaryLane} requirement.`);
      } else if (hero.secondaryLane && alliedComp.missingLanes.includes(hero.secondaryLane)) {
        roleFitRaw += 20;
        reasons.push(`Can comfortably cover secondary lane ${hero.secondaryLane}.`);
      } else if (alliedPicks.filter(Boolean).length > 0) {
        roleFitRaw -= 25;
        warnings.push(`Lane overlap: ${hero.primaryLane} is already occupied in allied picks.`);
      }

      if (alliedComp.missingRoles.includes(hero.primaryRole)) {
        roleFitRaw += 15;
        reasons.push(`Supplies missing team role: ${hero.primaryRole}.`);
      }

      // Damage balance check
      if (alliedComp.damageTypes.physical >= 3 && hero.damageType === 'Magic') {
        roleFitRaw += 10;
        reasons.push('Adds essential Magic Damage to an otherwise physical-heavy draft.');
      } else if (alliedComp.damageTypes.magic >= 3 && hero.damageType === 'Physical') {
        roleFitRaw += 10;
        reasons.push('Adds essential Physical Damage against anti-magic defense.');
      }

      // 2. COUNTER ADVANTAGE & TEAM SYNERGY
      // Requirement: Exclude all matchup relationships marked 'unverified_reference' from recommendation scoring.
      // Do not describe a hero as a confirmed counter or synergy partner unless supported by verified data.
      const isMatchupVerified = hero.matchupStatus === 'verified';
      let counterScore: number | null = null;
      let synergyScore: number | null = null;

      if (isMatchupVerified) {
        let counterRaw = 50;
        let counterMatches = 0;
        let counteredByMatches = 0;

        for (const enemy of enemyHeroes) {
          if (hero.counters.includes(enemy.id)) {
            counterMatches++;
            reasons.push(`Effective counter against enemy ${enemy.name}.`);
          }
          if (hero.counteredBy.includes(enemy.id)) {
            counteredByMatches++;
            warnings.push(`Disadvantaged against selected enemy ${enemy.name}.`);
          }
        }

        counterRaw += counterMatches * 25;
        counterRaw -= counteredByMatches * 25;
        counterScore = Math.max(0, Math.min(100, Math.round(counterRaw)));

        let synergyRaw = 50;
        let synergyMatches = 0;
        for (const ally of alliedHeroes) {
          if (hero.synergies.includes(ally.id) || ally.synergies.includes(hero.id)) {
            synergyMatches++;
            reasons.push(`Strong tactical synergy when paired with allied ${ally.name}.`);
          }
        }
        synergyRaw += synergyMatches * 20;
        synergyScore = Math.max(0, Math.min(100, Math.round(synergyRaw)));
      }

      // 3. PLAYER PROFICIENCY
      if (userProfile) {
        if (userProfile.favoriteHeroes.includes(hero.id)) {
          proficiencyRaw += 35;
          reasons.push('One of your designated favorite/mastery heroes.');
        }
        if (userProfile.preferredRoles.includes(hero.primaryRole)) {
          proficiencyRaw += 15;
        }
        if (userProfile.preferredLanes.includes(hero.primaryLane)) {
          proficiencyRaw += 10;
        }
      }

      // Clamp raw scores to [0, 100]
      const clamp = (val: number) => Math.max(0, Math.min(100, Math.round(val)));
      const roleFitScore = clamp(roleFitRaw);
      const playerProficiencyScore = clamp(proficiencyRaw);

      // 4. MATHEMATICAL WEIGHT RENORMALIZATION
      // If matchup data is unverified, counterAdvantage and teamSynergy are excluded.
      // Remaining active factors (roleFit and playerProficiency) are renormalized over their sum,
      // ensuring scores remain fair, intuitive (0-100 scale), and unpenalized by missing feeds.
      let calculatedScore: number;
      let effectiveWeights: {
        roleFit: number;
        counterAdvantage: number;
        teamSynergy: number;
        playerProficiency: number;
      };

      if (!isMatchupVerified) {
        const activeWeightSum = weights.roleFit + weights.playerProficiency;

        if (activeWeightSum > 0) {
          calculatedScore = Math.round(
            (roleFitScore * weights.roleFit + playerProficiencyScore * weights.playerProficiency) /
              activeWeightSum
          );
          const effectiveRoleFit = Math.round((weights.roleFit / activeWeightSum) * 100);
          effectiveWeights = {
            roleFit: effectiveRoleFit,
            counterAdvantage: 0,
            teamSynergy: 0,
            playerProficiency: 100 - effectiveRoleFit
          };
        } else {
          // Fallback if both active weights are set to 0 in settings
          calculatedScore = Math.round((roleFitScore + playerProficiencyScore) / 2);
          effectiveWeights = {
            roleFit: 50,
            counterAdvantage: 0,
            teamSynergy: 0,
            playerProficiency: 50
          };
        }
      } else {
        const totalWeight =
          weights.roleFit +
          weights.counterAdvantage +
          weights.teamSynergy +
          weights.playerProficiency;

        const safeTotalWeight = totalWeight > 0 ? totalWeight : 100;
        const validCounterScore = counterScore ?? 50;
        const validSynergyScore = synergyScore ?? 50;

        calculatedScore = Math.round(
          (roleFitScore * weights.roleFit +
            validCounterScore * weights.counterAdvantage +
            validSynergyScore * weights.teamSynergy +
            playerProficiencyScore * weights.playerProficiency) /
            safeTotalWeight
        );

        effectiveWeights = {
          roleFit: Math.round((weights.roleFit / safeTotalWeight) * 100),
          counterAdvantage: Math.round((weights.counterAdvantage / safeTotalWeight) * 100),
          teamSynergy: Math.round((weights.teamSynergy / safeTotalWeight) * 100),
          playerProficiency: Math.round((weights.playerProficiency / safeTotalWeight) * 100)
        };
      }

      recommendations.push({
        hero,
        totalScore: Math.max(1, Math.min(99, calculatedScore)),
        roleFitScore,
        counterScore,
        synergyScore,
        playerProficiencyScore,
        reasons,
        warnings,
        matchupScoringExcluded: !isMatchupVerified,
        effectiveWeights
      });
    }

    // Sort descending by totalScore
    return recommendations.sort((a, b) => b.totalScore - a.totalScore);
  }
}
