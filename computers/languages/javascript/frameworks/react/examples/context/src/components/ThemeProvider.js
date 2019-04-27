import React, { useState } from 'react'
import themes from '../themes'
import { ThemeContext } from '../contexts/ThemeContext'

export const ThemeProvider = (props) => {
  const [theme, setTheme] = useState(themes.dark)

  const themeToggle = () => {
    setTheme(theme === themes.dark ? themes.light : themes.dark)
  }

  return <ThemeContext.Provider value={{ theme, toggleTheme: themeToggle }} {...props} />
}

