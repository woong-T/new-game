// PROTOTYPE - NOT FOR PRODUCTION
// Question: 전직·강화·동료 수집이 맞물려 다음 보스를 넘고 싶다는 마음이 15~20분 이어지는가?
// Date: 2026-11-24
// Every tuning value lives here, each with value, min, max and step. The game reads them live
// through tune.<name> (index.html); the tweak panel, an add-on, writes them back here.
window.CONFIG = {
  seed: 1, // every gameplay random call reads rng(), seeded from this (or ?seed= in the address)
  volume: { value: 0.5, min: 0, max: 1, step: 0.05 },

  // ---- Hero ----
  heroBaseAtk: { value: 8, min: 1, max: 50, step: 1 },          // damage per hit at start
  heroBaseSpd: { value: 1.2, min: 0.5, max: 3, step: 0.05 },    // hits per second at start
  levelAtkGrowth: { value: 1.07, min: 1, max: 1.2, step: 0.005 }, // damage multiplier per hero level
  xpBase: { value: 4, min: 1, max: 50, step: 1 },               // xp for level 1 -> 2
  xpQuad: { value: 0.6, min: 0.1, max: 5, step: 0.05 },         // xp need = base + quad * level^2

  // ---- Upgrades (bought with stardust) ----
  atkGrowth: { value: 1.08, min: 1.01, max: 1.3, step: 0.01 },   // damage x per attack level
  atkMilestone: { value: 10, min: 5, max: 50, step: 1 },         // every N attack levels...
  atkMilestoneMult: { value: 2, min: 1, max: 5, step: 0.1 },     // ...damage x this
  atkCostBase: { value: 10, min: 1, max: 200, step: 1 },         // stardust
  atkCostGrowth: { value: 1.24, min: 1.05, max: 2, step: 0.01 }, // cost x per level
  spdPerLv: { value: 0.06, min: 0.01, max: 0.2, step: 0.01 },    // +attack speed per level
  spdMaxLv: { value: 15, min: 1, max: 50, step: 1 },
  spdCostBase: { value: 25, min: 1, max: 500, step: 1 },
  spdCostGrowth: { value: 1.5, min: 1.05, max: 3, step: 0.05 },
  critPerLv: { value: 0.03, min: 0.01, max: 0.1, step: 0.005 },  // +crit chance per level
  critMaxLv: { value: 15, min: 1, max: 50, step: 1 },
  critCostBase: { value: 40, min: 1, max: 500, step: 1 },
  critCostGrowth: { value: 1.5, min: 1.05, max: 3, step: 0.05 },
  critMult: { value: 2, min: 1.2, max: 5, step: 0.1 },           // crit damage x

  // ---- Jobs ----
  job1Level: { value: 10, min: 2, max: 40, step: 1 },   // hero level that opens the 1st job
  job2Level: { value: 30, min: 5, max: 80, step: 1 },   // hero level that opens the 2nd job
  job1Mult: { value: 2, min: 1, max: 5, step: 0.1 },    // damage x for the 1st job
  job2Mult: { value: 2.5, min: 1, max: 6, step: 0.1 },  // further damage x for the 2nd job
  diamondAtk: { value: 1.3, min: 1, max: 3, step: 0.05 },   // 다이아몬드 성기사 extra damage x
  meteorCritDmg: { value: 1.5, min: 0, max: 5, step: 0.1 }, // 운석 투사 line: + crit damage
  destroyerCrit: { value: 0.15, min: 0, max: 0.5, step: 0.01 }, // 소행성 파괴자: + crit chance
  tideSpd: { value: 1.4, min: 1, max: 3, step: 0.05 },      // 조류 검사 line: attack speed x
  tsunamiEvery: { value: 4, min: 2, max: 10, step: 1 },     // 해일 검성: every Nth hit...
  tsunamiMult: { value: 3, min: 1, max: 10, step: 0.1 },    // ...deals this x
  mistSplash: { value: 0.4, min: 0, max: 1, step: 0.05 },   // 안개 마도사: splash to other enemies
  nebulaSplash: { value: 0.7, min: 0, max: 1.5, step: 0.05 },
  starCrit: { value: 0.2, min: 0, max: 0.5, step: 0.01 },   // 별빛 궁수 line: + crit chance
  starStunCut: { value: 0.5, min: 0, max: 1, step: 0.05 },  // 별빛 궁수 line: stun time x
  gravityBoss: { value: 0.6, min: 0, max: 3, step: 0.05 },  // 중력 술사: + boss damage
  blackholeBoss: { value: 1.2, min: 0, max: 5, step: 0.05 },// 블랙홀 군주: + boss damage
  blackholeComp: { value: 0.4, min: 0, max: 2, step: 0.05 },// 블랙홀 군주: + companion damage

  // ---- Elements ----
  strongMult: { value: 1.5, min: 1, max: 3, step: 0.05 },  // 유체 > 고체 > 천체 > 유체
  weakMult: { value: 0.7, min: 0.2, max: 1, step: 0.05 },

  // ---- Stages and enemies ----
  finalStage: { value: 50, min: 10, max: 200, step: 5 },
  killsPerStage: { value: 6, min: 1, max: 30, step: 1 },
  maxMobs: { value: 3, min: 1, max: 6, step: 1 },          // enemies on screen at once
  spawnGap: { value: 0.6, min: 0.1, max: 3, step: 0.05 },  // seconds between spawns
  mobHpBase: { value: 15, min: 1, max: 200, step: 1 },
  mobHpGrowth: { value: 1.28, min: 1.05, max: 1.6, step: 0.01 }, // enemy hp x per stage
  goldBase: { value: 3, min: 1, max: 50, step: 1 },              // stardust per kill at stage 1
  goldGrowth: { value: 1.22, min: 1.05, max: 1.6, step: 0.01 },  // stardust x per stage
  bossHpMult: { value: 12, min: 2, max: 40, step: 1 },     // stages 10, 20, 30, 40
  minibossHpMult: { value: 4, min: 1, max: 20, step: 0.5 },// stages 5, 15, 25, 35, 45
  finalHpMult: { value: 15, min: 2, max: 60, step: 1 },    // 빅뱅
  bossGoldMult: { value: 8, min: 1, max: 50, step: 1 },
  bossTime: { value: 30, min: 5, max: 120, step: 1 },      // seconds to beat a boss, else retreat
  chargerSpeed: { value: 230, min: 50, max: 600, step: 10 }, // px per second
  walkSpeed: { value: 95, min: 20, max: 300, step: 5 },
  chargeStun: { value: 0.4, min: 0, max: 3, step: 0.05 },  // seconds the hero stops attacking
  meleeStun: { value: 0.25, min: 0, max: 2, step: 0.05 },
  meleeInterval: { value: 2, min: 0.5, max: 6, step: 0.1 },
  pulseStun: { value: 0.35, min: 0, max: 2, step: 0.05 },
  pulseInterval: { value: 2.5, min: 0.5, max: 6, step: 0.1 },
  bossStun: { value: 0.4, min: 0, max: 3, step: 0.05 },
  bossInterval: { value: 4, min: 1, max: 10, step: 0.5 },
  shieldFrac: { value: 0.6, min: 0, max: 2, step: 0.05 },  // shield = this x enemy hp
  shieldTake: { value: 0.35, min: 0.05, max: 1, step: 0.05 }, // damage the shield actually takes
  splitFrac: { value: 0.35, min: 0.05, max: 1, step: 0.05 },  // each slime child's hp

  // ---- Companions ----
  partySize: { value: 4, min: 1, max: 8, step: 1 },
  compInterval: { value: 1.5, min: 0.3, max: 5, step: 0.1 }, // seconds between companion shots
  compShare: { value: 1, min: 0.1, max: 5, step: 0.05 },     // x every companion's share of hero damage
  starStep: { value: 0.5, min: 0, max: 2, step: 0.05 },      // + damage per extra star
  synergyPer: { value: 0.12, min: 0, max: 0.5, step: 0.01 }, // + all damage per same-element companion
  summonBase: { value: 60, min: 1, max: 1000, step: 1 },     // stardust for the first summon
  summonGrowth: { value: 1.7, min: 1.05, max: 3, step: 0.05 },

  // ---- Away ----
  offlineRate: { value: 0.5, min: 0, max: 1, step: 0.05 },   // share of the estimated rate earned while away
  offlineCapHours: { value: 8, min: 1, max: 48, step: 1 },
};
