import React, { useContext } from 'react'
import { ThemeContext } from '../contexts/ThemeContext'

export const ToggleThemeButton = () => {
  const { toggleTheme } = useContext(ThemeContext)

  return (
    <button onClick={toggleTheme} className='btn'>
      Toggle Theme
    </button>
  )
}
