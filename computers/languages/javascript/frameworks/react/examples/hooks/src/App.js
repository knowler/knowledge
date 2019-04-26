import React from 'react'
import { Counter } from './components/Counter'
import { CounterWithReducer } from './components/CounterWithReducer'
import { StarWarsCharacter } from './components/StarWarsCharacter'

export const ThemeContext = React.createContext({})

const theme = {
  mode: 'light',
}

export const App = () => (
  <ThemeContext.Provider value={theme}>
    <main>
      <Counter />
      <CounterWithReducer initialCount={0} />
      <StarWarsCharacter characterId={1} />
    </main>
  </ThemeContext.Provider>
)
