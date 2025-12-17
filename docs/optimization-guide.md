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
**Watk**: 50 levels Hunter + 40 levels Parivir (Final SPD: 118)

#### Adelle (Story Character)

- **Starting**: Thief ~Level 9 (90 levels remaining)
- **Base stats**: 131 HP, 23 MP, 66 SPD, 132 WATK, 130 WDEF, 132 MATK, 112 MDEF

**Watk/Spd**: 57 Parivir + 33 Ninja (Final SPD: 131)
**Watk/Wdef**: 49 Parivir + 41 Paladin (Final WDEF: 883/220)
**Watk/Matk**: 24 levels Black Mage + 66 levels Parivir (Final MATK: 768/192)
**Watk**: 49 levels Parivir + 41 levels Heritor (Final SPD: 122)

#### Frimelda (Story Character)

- **Starting**: Paladin ~Level 45 (54 levels remaining)
- **Base stats**: 396 HP, 110 MP, 77 SPD, 108 WATK, 133 WDEF, 95 MATK, 121 MDEF

**Watk/Wdef/Spd**: 9 levels Paladin + 45 levels Parivir (Final WDEF: 937/234)
**Watk/Matk/Spd**: Mix between Ninja and Black Mage or go Blue Mage
**Wdef/Mdef**: 9 levels Black Mage + 10 levels Seer + 35 levels Paladin

#### Vaan (Story Character)

- **Starting**: Sky Pirate ~Level 45 (54 levels remaining)
- **Base stats**: 349 HP, 102 MP, 88 SPD, 96 WATK, 95 WDEF, 96 MATK, 94 MDEF

**Watk/Spd**: 54 levels Parivir
**Spd/Watk**: 54 levels Ninja (Final SPD: 138)
**Life of Crime**: 54 levels Sky Pirate with Thief abilities

#### Al-Cid (Story Character)

- **Starting**: Agent ~Level 45 (54 levels remaining)
- **Base stats**: 422 HP, 108 MP, 83 SPD, 108 WATK, 108 WDEF, 81 MATK, 96 MDEF

**Watk/Wdef**: 9 levels Paladin + 45 levels Parivir (Final WDEF: 834/208)
**Spd/Watk**: 54 levels Ninja

#### Cid (Bangaa Story Character)

- **Starting**: Warrior ~Level 29 (70 levels remaining)
- **Base stats**: 348 HP, 66 MP, 71 SPD, 339 WATK, 312 WDEF, 226 MATK, 234 MDEF

**Watk/Spd**: 27 levels Trickster + 43 levels Master Monk (Final SPD: 125)
**Watk/Wdef**: 45 levels Defender + 25 levels Gladiator (Final SPD: 105)
**Matk/Spd**: 70 levels Trickster (Final MATK/SPD: 926/231; 133)

#### Hurdy (Moogle Story Character)

- **Starting**: Bard ~Level 29 (70 levels remaining)
- **Base stats**: 242 HP, 172 MP, 69 SPD, 238 WATK, 226 WDEF, 341 MATK, 301 MDEF

**Matk/Mdef**: 49 levels Time Mage + 21 levels Tinker (Final SPD: 103)
**Matk/Spd**: 56 levels Time Mage + 14 levels Juggler (Final SPD: 107)
**Mdef/Wdef**: 36 levels Moogle Knight + 34 levels Tinker (Final WDEF: 928/232)
**Watk/Spd**: 70 levels Juggler (Final WATK/SPD: 868/217; 121)

#### Montblanc (Moogle Story Character)

- **Starting**: Black Mage ~Level 45 (54 levels remaining)
- **Base stats**: 297 HP, 298 MP, 76 SPD, 81 WATK, 83 WDEF, 132 MATK, 134 MDEF

**Matk/Mdef/Spd**: 18 levels Chocobo Rider + 36 levels Black Mage (Final SPD: 111)
**Matk/Mdef/Wdef**: 18 levels Moogle Knight + 36 levels Black Mage (Final WDEF: 186)
**Watk/Spd**: 54 levels Juggler or Moogle Knight

#### Penelo (Viera Story Character)

- **Starting**: Dancer ~Level 45 (54 levels remaining)
- **Base stats**: 348 HP, 312 MP, 84 SPD, 82 WATK, 81 WDEF, 109 MATK, 108 MDEF

**Matk/Mdef/Spd**: 11 levels Dancer + 43 levels Summoner (Final SPD: 115)
**Watk/Matk**: 54 levels Red Mage (balanced sword and magic)
**Watk/Spd**: 54 levels Fencer

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

### Matk/Wdef Build

- **Recruit as**: Sage
- **Target**: 723 WDEF, 649 MATK
- **Distribution**: 55 levels Sage + 14 levels Black Mage
- **Final WDEF**: 745/186
- **Best for**: Front-line magic users (Sage)

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

## MOOGLE OPTIMIZATION BUILDS

### Watk/Wdef/Spd Build

- **Recruit as**: Juggler
- **Target**: 64 SPD, 656 WATK, 654 WDEF
- **Distribution**: 34 levels Juggler + 35 levels Moogle Knight
- **Final SPD**: 127
- **Best for**: Front-line physical sweepers/tanks (Moogle Knight)

### Matk/Mdef/Spd Build

- **Recruit as**: Time Mage
- **Target**: 620 MATK, 613 MDEF, 77 SPD
- **Distribution**: 18 levels Chocobo Rider + 51 levels Time Mage
- **Final SPD**: 115
- **Best for**: Mid-line magic users (Black Mage, Fusilier)

### Spd/Watk Build

- **Recruit as**: Chocobo Rider
- **Target**: 55 SPD, 760 WATK
- **Distribution**: 43 levels Chocobo Rider + 26 levels Moogle Knight
- **Final WATK**: 757/189
- **Best for**: Rear-line status affliction (Fusilier, Flintlock, Tinker)

### Spd/Matk Build

- **Recruit as**: Chocobo Rider
- **Target**: 756 MATK
- **Distribution**: 25 levels Black Mage + 44 levels Chocobo Rider
- **Final MATK**: 757/189
- **Best for**: Rear-line magic ranged (Time Mage)

### Best Stats by Job

- **Best HP**: Moogle Knight
- **Best MP**: Time Mage
- **Best MATK**: Black Mage
- **Best MDEF**: Black/Time Mage
- **Best SPD**: Chocobo Rider/Juggler

---

## BANGAA OPTIMIZATION BUILDS

### Watk/Spd Build

- **Recruit as**: Trickster
- **Target**: 59 SPD, 725 WATK
- **Distribution**: 60 levels Master Monk + 9 levels Trickster
- **Final SPD**: 141
- **Best for**: Front-line physical sweepers (Master Monk, Dragoon with MATK bonus)

### Watk/Wdef/Spd Build

- **Recruit as**: Master Monk
- **Target**: 585 WATK, 689 WDEF
- **Distribution**: 46 levels Defender + 23 levels Master Monk
- **Final SPD**: 119
- **Best for**: Front-line tanking (Gladiator, Defender)

### Watk/Wdef/HP Build

- **Recruit as**: Gladiator
- **Target**: 552 WATK, 677 WDEF
- **Distribution**: 42 levels Defender + 27 levels Warrior
- **Final SPD**: 107
- **Best for**: Defense-oriented front-line tanks

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

## VIERA OPTIMIZATION BUILDS

### Matk/Spd Build

- **Recruit as**: Green Mage
- **Target**: 62 SPD, 683 MATK
- **Distribution**: 44 levels Summoner + 25 levels Green Mage
- **Final SPD**: 142
- **Best for**: Fast magic users (Red Mage, Summoner)

### Watk/Spd/Mdef Build

- **Recruit as**: Assassin
- **Target**: 690 WATK, 56 SPD
- **Distribution**: 23 levels Assassin + 46 levels Sniper
- **Final SPD**: 142
- **Best for**: Ranged physical (Sniper, Assassin)

### Watk/Spd/HP/Wdef Build

- **Recruit as**: Assassin
- **Strategy**: 69 levels Fencer
- **Final SPD**: 141
- **Best for**: Melee physical (Fencer, Spellblade)

### Best Stats by Job

- **Best HP**: Fencer
- **Best WATK**: Sniper
- **Best MATK**: Summoner
- **Best WDEF**: Spellblade
- **Best MDEF**: White Mage
- **Best SPD**: Assassin

---

## GRIA OPTIMIZATION BUILDS

### Watk/Spd Build

- **Recruit as**: Raptor
- **Target**: 71 SPD, 650 WATK
- **Distribution**: 40 levels Raptor + 29 levels Ravager
- **Weakness**: 748/187 WDEF
- **Best for**: Rear-line Hunters (low defense growth)

### Watk/Wdef/Mdef Build

- **Recruit as**: Ravager
- **Target**: 617 WATK, 650 WDEF
- **Distribution**: 32 levels Ravager + 37 levels Hunter
- **Final WDEF/MDEF**: 868/217; 730/182
- **Best for**: Front-line Ravagers and Raptors

### Mdef/Matk/Wdef Build

- **Recruit as**: Raptor
- **Target**: 685 MATK, 757 WDEF/MDEF
- **Strategy**: 69 levels Geomancer
- **Best for**: Either all-out MATK (Raptor) or all-out defense (Geomancer)

### Best Stats by Job

- **Best HP**: Ravager
- **Best WATK**: Ravager
- **Best MATK**: Raptor
- **Best WDEF**: Geomancer
- **Best MDEF**: Geomancer
- **Best SPD**: Hunter

---

## SEEQ OPTIMIZATION BUILDS

### Watk/Spd Build

- **Recruit as**: Ranger
- **Target**: 66 SPD, 689 WATK
- **Distribution**: 23 levels Ranger + 46 levels Berserker
- **Final SPD**: 121
- **Best for**: Rear-line Rangers (low defense growth)

### Watk/Wdef Build

- **Recruit as**: Lanista
- **Target**: 652 WATK, 654 WDEF
- **Distribution**: 54 levels Lanista + 15 levels Berserker
- **Best for**: Front-line Berserkers and Lanistas

### Matk Build

- **Options**: Ranger (better SPD growth) or Viking (better MDEF growth)
- **Note**: Magic Seeq builds are rare but viable

### Best Stats by Job

- **Best HP**: Berserker
- **Best WATK**: Berserker
- **Best MATK**: Viking
- **Best WDEF**: Lanista
- **Best MDEF**: Viking
- **Best SPD**: Ranger

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
