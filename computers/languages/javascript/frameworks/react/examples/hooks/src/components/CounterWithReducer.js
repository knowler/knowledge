import React, { useReducer } from 'react'
import PropTypes from 'prop-types'

const init = initialCount => ({ count: initialCount })

const reducer = (state, action) => {
  /* ESLint doesn’t like the indents for the switch */
  /* eslint-disable indent */
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 }
    case 'decrement':
      return { count: state.count - 1 }
    case 'reset':
      return init(action.payload)
    default:
      throw new Error()
  }
  /* eslint-enable indent */
}

export const CounterWithReducer = ({ initialCount }) => {
  const [state, dispatch] = useReducer(reducer, initialCount, init)

  return (
    <>
      <p>Count: {state.count}</p>
      <button onClick={() => dispatch({ type: 'increment' })}>+</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
      <button onClick={() => dispatch({ type: 'reset', payload: initialCount })}>reset</button>
    </>
  )
}

CounterWithReducer.propTypes = { initialCount: PropTypes.number }
