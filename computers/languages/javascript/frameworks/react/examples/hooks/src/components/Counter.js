import React, { useState, useEffect, useContext } from 'react'
import { ThemeContext } from '../App'

export const Counter = () => {
  const [count, setCount] = useState(0)
  const theme = useContext(ThemeContext)

  useEffect(() => {
    document.title = `You clicked ${count} times`
  })

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Add One
      </button>
      <p>Current theme mode is {theme.mode}</p>
    </div>
  )
}
