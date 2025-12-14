# Final Fantasy Tactics A2 - Optimization Guide Reference

_Source: [GameFAQs Stat Optimization Guide by pakxenon](https://gamefaqs.gamespot.com/ds/937330-final-fantasy-tactics-a2-grimoire-of-the-rift/faqs/54084)_

## Core Optimization Principles

### Character Min/Maxing Steps

1. **Recruit** at level 30 (recommended for easier calculations)
2. **Decide** character purpose (physical DPS, magic DPS, tank, etc.)
3. **Teach** required job skills and unlock target jobs
4. **Level** in appropriate jobs for optimal stat distribution
5. **Grind** to level 99 for maximum effectiveness

### Mathematical Foundation

#### Stat Limits

- **All stats except SPD**: Maximum 999
- **SPD maximum**: 149
- **Display values**: WATK/WDEF/MATK/MDEF shown as actual ÷ 4 (max display 249)

#### Growth Variance

- **Growth rates 1-10**: Variance = 1
- **Growth rates 11-20**: Variance = 2
- **Probability**: 33.3% chance each for (Rate - Variance), Rate, (Rate + Variance)

#### Speed Growth

- **Unique mechanic**: Percentage chance to gain +1 SPD per level
- **No variance**: Either gains +1 or +0 each level
- **Speed Reset**: Recommended to reset if SPD doesn't increase on level up

---

## Optimization Formulas

### Core Equations

```
Principle = 999 - Base - (CurrentLevel - 1) × Rate1
Level1 = (Principle - (99 - CurrentLevel) × Rate2) / (Rate1 - Rate2)
Level2 = (99 - CurrentLevel) - Level1
```

### Variables

- **Principle**: Total stat growth needed from leveling
- **Rate1**: Growth rate of primary optimization job
- **Rate2**: Growth rate of secondary job
- **Level1**: Levels to gain in primary job
- **Level2**: Levels to gain in secondary job

### Recruitment Base Stats (Level 30)

_Equipment included for convenience - characters recruit with basic gear_

---

## HUME OPTIMIZATION BUILDS

### Watk/Spd Build

- **Recruit as**: Ninja
- **Target**: 58 SPD, 650 WATK
- **Distribution**: 15 levels Parivir + 54 levels Ninja
- **Weakness**: Low defense (702/176 WDEF)
- **Best for**: Fast front-line physical strikers (Fighter, Parivir)

### Watk/Wdef Build

- **Recruit as**: Parivir
- **Target**: 587 WATK, 727 WDEF
- **Distribution**: 12 levels Parivir + 57 levels Paladin
- **Weakness**: Low speed (113 SPD)
- **Best for**: Front-line tanks with Counter abilities (Fighter, Paladin)

### Matk/Spd Build

- **Recruit as**: Ninja
- **Target**: 58 SPD, 718 MATK
- **Distribution**: 10 levels Ninja + 59 levels Black Mage
- **Final SPD**: 127 (requires speed reset for 149)
- **Best for**: Mid-line magic users (Black Mage, White Mage)

### Matk/Mdef/MP Build

- **Recruit as**: Black Mage
- **Target**: 618 MATK, 613 MDEF
- **Distribution**: 33 levels Black Mage + 36 levels Seer
- **Final HP/MP**: 605/600
- **Best for**: Rear-line Illusionists

### Special Character Builds

#### Luso (Story Character)

- **Starting**: Soldier ~Level 9 (90 levels remaining)
- **Base stats**: 154 HP, 24 MP, 61 SPD, 160 WATK, 148 WDEF, 102 MATK, 121 MDEF

**Watk/Spd**: 76 Ninja + 14 Parivir (Final SPD: 138)
**Watk/Wdef**: 50 Paladin + 40 Parivir (Final WDEF: 928/232)
**Watk/Matk**: 30 Black Mage + 60 Parivir (Magick Frenzy build)

#### Adelle (Story Character)

- **Starting**: Thief ~Level 9 (90 levels remaining)
- **Base stats**: 131 HP, 23 MP, 66 SPD, 132 WATK, 130 WDEF, 132 MATK, 112 MDEF

**Watk/Spd**: 57 Parivir + 33 Ninja (Final SPD: 131)
**Watk/Wdef**: 49 Parivir + 41 Paladin (Tanking build)

---

## RACE-SPECIFIC RECOMMENDATIONS

### Hume Best Stats by Job

- **Best HP**: Soldier
- **Best MP**: Illusionist
- **Best SPD**: Ninja (90% chance)
- **Best WATK**: Parivir (11 growth)
- **Best WDEF**: Paladin (10 growth)
- **Best MATK**: Black Mage (10 growth)
- **Best MDEF**: Seer (11 growth)

### Primary Recruitment Jobs

- **Physical DPS**: Ninja (SPD), Parivir (WATK), Fighter (balanced)
- **Magic DPS**: Black Mage (MATK), Seer (MDEF)
- **Tank**: Paladin (WDEF), Blue Mage (balanced defense)
- **Support**: Hunter (balanced), Blue Mage (versatile)

### Secondary Recruitment Considerations

- **Fighter**: Good WATK alternative
- **Blue Mage**: Excellent balanced growth
- **Hunter**: Solid all-around stats

---

## BANGAA OPTIMIZATION BUILDS

### Watk/Spd Build

- **Recruit as**: Trickster
- **Target**: 59 SPD, 725 WATK
- **Distribution**: 60 levels Master Monk + 9 levels Trickster
- **Final SPD**: 141
- **Best for**: Front-line physical sweepers (Master Monk, Dragoon with MATK bonus)

### Matk/Spd Build

- **Recruit as**: Trickster
- **Strategy**: 100% Trickster leveling
- **Result**: Maxed SPD and MATK (70 overgrowth)
- **Best for**: Rear-line Tricksters (limited third stat growth)

### Best Stats by Job

- **Best HP**: Warrior
- **Best WATK**: Gladiator (12 growth)
- **Best MATK**: Trickster
- **Best WDEF**: Defender
- **Best SPD**: Trickster (88% chance)

---

## NU MOU OPTIMIZATION BUILDS

### Matk/Spd/Mdef Build

- **Recruit as**: Alchemist
- **Target**: 619 MATK, 105 SPD
- **Distribution**: 52 levels Alchemist + 17 levels Beastmaster
- **Final SPD**: 112
- **Best for**: Mid/rear-line magic users (Black Mage, Illusionist)

### Physical Nu Mou (Rare)

- **Strategy**: 100% Beastmaster
- **Result**: 118 SPD, maxed WATK (72 overgrowth)
- **Note**: Level 40 Beastmaster sufficient for Blue Mage learning

### Best Stats by Job

- **Best HP**: Beastmaster
- **Best MP**: Arcanist
- **Best MATK**: Black Mage (11 growth)
- **Best MDEF**: Alchemist (11 growth)
- **Best SPD**: Beastmaster

---

## OPTIMIZATION TIPS

### Speed Reset Strategy

1. Level up and check SPD increase
2. If no SPD gain, reset and re-level
3. Particularly important for characters with lower SPD growth rates
4. Essential for reaching 149 SPD cap

### Level Planning Best Practices

- **Primary stat first**: Focus on the stat you want to maximize
- **Secondary considerations**: Balance other important stats
- **Skill learning**: Level skill-teaching jobs early, optimization jobs last
- **Timing**: Plan job switches around skill mastery

### Common Mistakes

- **Late optimization**: Starting optimization too late (high level characters)
- **Wrong recruitment**: Not recruiting optimal base job for build
- **Ignoring SPD**: Undervaluing speed for non-physical builds
- **Inflexible builds**: Not adapting to actual stat rolls vs. theoretical averages

---

## ADVANCED CALCULATIONS

### Multi-Stat Optimization

For optimizing more than two stats, calculations become complex. Generally:

1. **Prioritize** the most important stat
2. **Secondary optimization** for complementary stats
3. **Accept trade-offs** in less critical areas

### Variance Considerations

- Guide uses **absolute averages** (expected values)
- **Actual results** may vary due to growth variance
- **Plan buffer levels** if perfectionist builds are desired
- **Speed reset** can mitigate SPD variance

### Equipment Bonuses

- **Raw stats**: Character's innate capabilities (what optimization affects)
- **Equipment bonuses**: Additional stats from gear (not counted in optimization)
- **Total combat stats**: Raw + Equipment + Abilities

---

## IMPLEMENTATION STATUS

### Current Application Features

- ✅ **Hume optimization**: Fully implemented
- ✅ **Level distribution**: Mathematical formulas working
- ✅ **Job recommendations**: Automated based on stat priorities
- ✅ **Stat projections**: Accurate level 99 calculations

### Future Expansion

- ⏳ **Other races**: Bangaa, Nu Mou, Moogle, Viera, Gria, Seeq
- ⏳ **Advanced builds**: Multi-stat optimization
- ⏳ **Character import**: For existing save files
- ⏳ **Equipment calculator**: Including gear bonuses
