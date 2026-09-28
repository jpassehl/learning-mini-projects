export interface Spell {
  id: string
  name: string
  level: number
}

export interface Character {
  characterId: string
  name: string
  role: string
  level: number
  hp: number
  maxHp: number
}

/*The Array<Spell | null> syntax indicates an array that can contain elements of type Spell or null. 
This allows for representing spell slots that may be empty (null) or occupied by a spell. */
export const spellSlots: Array<Spell | null> = [
  { id: 's1', name: 'Fireball', level: 3 },
  null,
  { id: 's2', name: 'Cure Wounds', level: 1 },
  null,
  { id: 's3', name: 'Shield of Faith', level: 1 },
  null,
]

export const party: Character[] = [
  {
    characterId: 'c1',
    name: 'Aelindra',
    role: 'Healer',
    level: 8,
    hp: 45,
    maxHp: 45,
  },
  {
    characterId: 'c2',
    name: 'Brom',
    role: 'Tank',
    level: 7,
    hp: 60,
    maxHp: 80,
  },
  {
    characterId: 'c3',
    name: 'Cira',
    role: 'Rogue',
    level: 4,
    hp: 30,
    maxHp: 30,
  },
  {
    characterId: 'c4',
    name: 'Doran',
    role: 'Wizard',
    level: 6,
    hp: 22,
    maxHp: 40,
  },
  {
    characterId: 'c5',
    name: 'Eryn',
    role: 'Ranger',
    level: 3,
    hp: 35,
    maxHp: 35,
  },
]
