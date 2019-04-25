import React from 'react'
import { Title } from './components/Title'
import { Info } from './components/Info'

export const AppContext = React.createContext({})

export const App = () => (
  <AppContext.Provider value={{ title: 'My App' }}>
    <main>
      <Title />
      <Info />
    </main>
  </AppContext.Provider>
)
