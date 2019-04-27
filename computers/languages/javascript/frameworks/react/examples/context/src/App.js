import React from 'react'
import { ThemeProvider } from './components/ThemeProvider'
import { Main } from './components/Main'
import { ToggleThemeButton } from './components/ToggleThemeButton'

const app = {
  title: 'Hello, World!',
  info: 'An app demonstrating context and hooks.',
}

export const AppContext = React.createContext({})

export const App = () => (
  <AppContext.Provider value={app}>
    <ThemeProvider>
      <Main />
      <ToggleThemeButton />
    </ThemeProvider>
  </AppContext.Provider>
)
