import { party, spellSlots, type Spell } from './data'
import './App.css'

function App() {
  const knownSpells = spellSlots.filter(Boolean) as Spell[] // filter(Boolean) — removes all falsy values; as Spell[] — asserts the nulls are gone
  const hasHealer = party.some((c) => c.role === 'Healer') // some — returns true if any callback returns true, false otherwise
  const injuredCharacters = party.filter((c) => c.hp < c.maxHp) // filter — keeps items where callback returns true
  return (
    /* JSON.stringify(value, replacer, space) - a static method that converts a JavaScript object or value to a JSON string.
    / value: { party, spellSlots } - object to convert to a JSON string
    / replacer: null arugment means use the default (include all properties)
    / space: 2 - the number of spaces to use for indentation
    */
    //<pre className="data">{JSON.stringify({ party, spellSlots }, null, 2)}</pre>

    <div className="ui">
      <h2>Known Spells</h2>
      <ul>
        {knownSpells.map((spell) => (
          <li key={spell.id}>
            {spell.name} (Level {spell.level})
          </li>
        ))}
      </ul>
      <p>Has Healer: {String(hasHealer)}</p>
      <h2>Injured Characters</h2>
      <ul>
        {injuredCharacters.map((c) => (
          <li key={c.characterId}>
            {c.name} — {c.hp}/{c.maxHp} HP
          </li>
        ))}
      </ul>
    </div>
  )
}

export default App
