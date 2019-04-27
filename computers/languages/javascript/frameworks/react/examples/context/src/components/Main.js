import React, { useContext } from 'react'
import { ThemeContext } from '../contexts/ThemeContext'
import { Title } from './Title'
import { Info } from './Info'

export const Main = () => {
  const { theme } = useContext(ThemeContext)

  return (
    <main style={{
      backgroundColor: theme.background,
      color: theme.text,
      fontFamily: 'sans-serif',
      padding: '10rem 1rem',
      transition: '1s ease',
    }}>
      <Title />
      <Info />
    </main>
  )
}
