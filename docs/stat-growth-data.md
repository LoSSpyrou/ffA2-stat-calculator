# Final Fantasy Tactics A2 - Stat Growth Data Reference

_Source: [GameFAQs Stat Growth Chart by Synangel](https://gamefaqs.gamespot.com/ds/937330-final-fantasy-tactics-a2-grimoire-of-the-rift/faqs/53256)_

## Understanding Stat Growth

### Base and Growth Values

Each job has **Base** and **Growth** values for 7 stats:

- **Base**: Starting stat at Level 1 (no variance)
- **Growth**: Amount increased per level (with variance)

### Growth Mechanics

**Formula**: `((growth*4)+9)/10` rounded down determines stat increase per level.

**Growth Ranges:**

- **Passive Stats** (Atk, Def, Mgk, Res): 1.50 to 3.00 in 0.25 increments
- **HP**: 5 to 9 in whole integers
- **MP**: 1 to 8 in whole integers
- **Speed**: Percentage chance for +0.25 points per level

**Variance**:

- **1/3 chance each**: Lower (Growth - Variance), Normal (Growth), Higher (Growth + Variance)
- **Variance**: `[(Growth + 9) / 10]` rounded down
  - Growth 1-10: Variance = 1
  - Growth 11-20: Variance = 2

### Speed (SPD) Special Rules

- **SPD Growth**: Percentage chance to gain +0.25 SPD per level
- **Maximum SPD**: 149 (all other stats max at 999)

### Displayed vs Actual Values

- **HP/MP**: Shown values are actual
- **WATK/WDEF/MATK/MDEF**: Displayed = Actual ÷ 4 (rounded down)
- **Max displayed**: 249 for combat stats

### Job Rating System

**Rankings (A-E for HP, A-H for MP, A-G for others):**

- **A-Ranked Jobs**: Berserker, Gladiator, Dragoon, Master Monk, Parivir, Ranger, Sniper (Atk)
- **Special Case**: Trickster has 1.86 Res growth (only "E+" rating)

---

## HUME STAT GROWTHS

| Job             | HP   | MP   | SPD    | W.ATK | W.DEF | M.POW | M.RES |
| --------------- | ---- | ---- | ------ | ----- | ----- | ----- | ----- |
| **Soldier**     | 90/8 | 15/1 | 57/50% | 88/9  | 84/8  | 60/6  | 72/7  |
| **Thief**       | 83/6 | 15/1 | 60/70% | 76/7  | 74/7  | 76/7  | 64/6  |
| **White Mage**  | 84/6 | 36/4 | 58/52% | 64/6  | 73/7  | 84/8  | 80/8  |
| **Black Mage**  | 79/5 | 38/5 | 56/46% | 60/6  | 68/6  | 91/10 | 96/10 |
| **Archer**      | 86/7 | 18/1 | 59/55% | 72/7  | 72/7  | 64/6  | 79/7  |
| **Paladin**     | 88/7 | 22/2 | 56/48% | 80/8  | 92/10 | 72/7  | 88/9  |
| **Fighter**     | 84/6 | 12/1 | 58/53% | 92/10 | 86/8  | 56/5  | 68/6  |
| **Parivir**     | 86/7 | 10/1 | 60/62% | 93/11 | 69/7  | 68/6  | 69/5  |
| **Ninja**       | 79/5 | 21/2 | 65/90% | 88/9  | 68/6  | 78/7  | 76/7  |
| **Illusionist** | 76/5 | 38/7 | 54/35% | 60/6  | 64/6  | 92/9  | 84/8  |
| **Blue Mage**   | 84/6 | 30/3 | 57/50% | 80/8  | 88/9  | 84/8  | 92/9  |
| **Hunter**      | 84/6 | 26/3 | 61/65% | 84/8  | 66/6  | 68/7  | 84/8  |
| **Seer**        | 83/6 | 42/7 | 55/40% | 63/6  | 71/7  | 90/8  | 99/11 |

### Special Hume Jobs

| Job            | HP   | MP   | SPD    | W.ATK | W.DEF | M.POW | M.RES |
| -------------- | ---- | ---- | ------ | ----- | ----- | ----- | ----- |
| **Sky Pirate** | 85/6 | 14/2 | 60/64% | 76/7  | 74/7  | 76/7  | 72/7  |
| **Heritor**    | 84/6 | 36/4 | 61/62% | 80/8  | 86/8  | 84/8  | 80/8  |
| **Agent**      | 86/7 | 12/2 | 59/54% | 80/8  | 83/8  | 70/6  | 72/7  |

---

## VIERA STAT GROWTHS

| Job              | HP   | MP   | SPD    | W.ATK | W.DEF | M.POW | M.RES |
| ---------------- | ---- | ---- | ------ | ----- | ----- | ----- | ----- |
| **Fencer**       | 89/8 | 15/1 | 61/69% | 90/10 | 78/7  | 69/6  | 64/6  |
| **White Mage**   | 81/6 | 36/5 | 59/58% | 63/6  | 72/7  | 84/8  | 80/8  |
| **Green Mage**   | 85/6 | 30/3 | 62/86% | 73/7  | 76/7  | 84/8  | 79/7  |
| **Archer**       | 86/7 | 19/1 | 61/66% | 75/8  | 71/7  | 70/6  | 70/7  |
| **Elementalist** | 80/6 | 28/3 | 57/41% | 70/7  | 74/7  | 88/10 | 73/7  |
| **Red Mage**     | 83/6 | 28/2 | 60/62% | 82/9  | 63/6  | 86/9  | 70/6  |
| **Spellblade**   | 80/5 | 24/2 | 60/64% | 85/9  | 80/7  | 76/7  | 75/7  |
| **Summoner**     | 74/5 | 42/4 | 58/56% | 59/6  | 61/6  | 90/11 | 74/8  |
| **Assassin**     | 76/5 | 16/1 | 65/96% | 77/8  | 68/6  | 71/7  | 66/6  |
| **Sniper**       | 80/6 | 18/1 | 58/59% | 93/11 | 65/6  | 73/7  | 72/7  |

### Special Viera Jobs

| Job        | HP   | MP   | SPD    | W.ATK | W.DEF | M.POW | M.RES |
| ---------- | ---- | ---- | ------ | ----- | ----- | ----- | ----- |
| **Dancer** | 78/6 | 48/6 | 58/58% | 64/6  | 60/6  | 87/8  | 80/8  |

---

## BANGAA STAT GROWTHS

| Job             | HP   | MP   | SPD    | W.ATK | W.DEF | M.POW | M.RES |
| --------------- | ---- | ---- | ------ | ----- | ----- | ----- | ----- |
| **Warrior**     | 96/9 | 10/2 | 57/50% | 87/9  | 88/8  | 58/6  | 66/6  |
| **White Monk**  | 82/6 | 12/2 | 60/61% | 89/9  | 70/7  | 70/7  | 68/6  |
| **Dragoon**     | 90/8 | 6/1  | 60/62% | 97/11 | 90/9  | 53/5  | 62/5  |
| **Defender**    | 90/8 | 8/1  | 56/45% | 84/8  | 98/11 | 60/6  | 78/7  |
| **Gladiator**   | 92/8 | 18/2 | 58/55% | 99/12 | 90/8  | 57/6  | 64/6  |
| **Master Monk** | 81/6 | 14/3 | 61/71% | 95/11 | 78/8  | 76/8  | 76/7  |
| **Bishop**      | 80/6 | 28/5 | 55/39% | 65/6  | 69/6  | 82/9  | 86/8  |
| **Templar**     | 92/7 | 20/3 | 53/34% | 86/9  | 94/10 | 75/7  | 80/7  |
| **Cannoneer**   | 85/7 | 19/3 | 59/57% | 76/7  | 71/7  | 65/7  | 72/7  |
| **Trickster**   | 80/5 | 7/1  | 64/88% | 71/7  | 73/7  | 89/10 | 74/7  |

---

## NU MOU STAT GROWTHS

| Job             | HP   | MP   | SPD    | W.ATK | W.DEF | M.POW | M.RES |
| --------------- | ---- | ---- | ------ | ----- | ----- | ----- | ----- |
| **White Mage**  | 79/5 | 36/6 | 58/52% | 64/6  | 73/7  | 84/8  | 80/9  |
| **Black Mage**  | 77/5 | 34/6 | 56/46% | 60/6  | 68/6  | 91/11 | 96/10 |
| **Beastmaster** | 88/7 | 19/2 | 59/60% | 91/10 | 86/8  | 69/6  | 72/7  |
| **Time Mage**   | 78/5 | 38/6 | 57/50% | 59/5  | 61/6  | 89/10 | 96/10 |
| **Illusionist** | 76/5 | 42/7 | 54/35% | 60/6  | 63/6  | 92/9  | 84/9  |
| **Alchemist**   | 81/6 | 44/7 | 58/54% | 71/7  | 64/6  | 90/10 | 99/11 |
| **Arcanist**    | 74/5 | 48/8 | 53/34% | 59/5  | 60/6  | 87/8  | 74/7  |
| **Sage**        | 84/7 | 32/4 | 56/48% | 79/8  | 73/7  | 89/9  | 77/8  |
| **Scholar**     | 85/7 | 24/3 | 58/58% | 88/10 | 77/7  | 78/7  | 71/7  |

---

## MOOGLE STAT GROWTHS

| Job               | HP   | MP   | SPD    | W.ATK | W.DEF | M.POW | M.RES |
| ----------------- | ---- | ---- | ------ | ----- | ----- | ----- | ----- |
| **Animist**       | 85/7 | 22/2 | 60/56% | 81/8  | 88/9  | 70/7  | 80/8  |
| **Thief**         | 83/6 | 15/1 | 62/70% | 76/7  | 74/7  | 76/7  | 64/6  |
| **Black Mage**    | 77/5 | 34/6 | 56/46% | 60/6  | 68/6  | 91/10 | 96/10 |
| **Moogle Knight** | 88/7 | 28/3 | 56/48% | 88/10 | 91/11 | 72/6  | 84/9  |
| **Fusilier**      | 85/6 | 12/1 | 59/54% | 80/8  | 83/8  | 70/6  | 72/7  |
| **Juggler**       | 81/6 | 18/1 | 64/74% | 82/9  | 84/9  | 72/7  | 68/6  |
| **Tinker**        | 82/7 | 24/2 | 55/45% | 84/9  | 86/9  | 82/8  | 98/11 |
| **Time Mage**     | 78/5 | 38/6 | 57/50% | 59/5  | 61/6  | 89/10 | 96/10 |
| **Chocobo Rider** | 74/5 | 9/1  | 65/99% | 65/6  | 72/7  | 69/6  | 69/7  |
| **Flintlock**     | 76/5 | 33/5 | 58/52% | 84/8  | 72/7  | 78/7  | 76/7  |

### Special Moogle Jobs

| Job      | HP   | MP   | SPD    | W.ATK | W.DEF | M.POW | M.RES |
| -------- | ---- | ---- | ------ | ----- | ----- | ----- | ----- |
| **Bard** | 74/6 | 32/5 | 56/48% | 70/6  | 58/6  | 89/9  | 77/8  |

---

## SEEQ STAT GROWTHS

| Job           | HP   | MP   | SPD    | W.ATK | W.DEF | M.POW | M.RES |
| ------------- | ---- | ---- | ------ | ----- | ----- | ----- | ----- |
| **Berserker** | 94/7 | 4/1  | 56/48% | 91/11 | 69/6  | 61/6  | 59/6  |
| **Ranger**    | 86/7 | 10/1 | 63/68% | 78/8  | 82/8  | 72/7  | 86/9  |
| **Lanista**   | 88/7 | 19/2 | 57/50% | 86/9  | 84/9  | 74/7  | 64/6  |
| **Viking**    | 90/7 | 22/3 | 59/54% | 82/8  | 73/7  | 78/7  | 97/11 |

---

## GRIA STAT GROWTHS

| Job           | HP   | MP   | SPD    | W.ATK | W.DEF | M.POW | M.RES |
| ------------- | ---- | ---- | ------ | ----- | ----- | ----- | ----- |
| **Hunter**    | 84/6 | 23/3 | 61/65% | 84/8  | 66/6  | 68/7  | 84/8  |
| **Raptor**    | 90/7 | 26/3 | 60/63% | 88/9  | 68/6  | 82/8  | 68/6  |
| **Ravager**   | 94/7 | 18/2 | 58/50% | 92/10 | 88/9  | 62/6  | 62/6  |
| **Geomancer** | 82/6 | 36/5 | 59/52% | 79/7  | 90/11 | 76/7  | 90/11 |

---

## IMPLEMENTATION NOTES

### Current Status

- ✅ **Hume Jobs**: Fully implemented in application
- ⏳ **Other Races**: Data available for future implementation

### Format Notes

- `Base/Growth` format (e.g., `90/8` = 90 base, 8 per level)
- SPD percentages (e.g., `50%` = 50% chance per level)
- All data validated against original GameFAQs sources
