import React from 'react'
import { AppContext } from '../App'

/**
 * Maybe a bad example, but it checks out.
 */
export const Title = () => (
  <AppContext.Consumer>
    {({title}) => <h1>{title}</h1>}
  </AppContext.Consumer>
)
