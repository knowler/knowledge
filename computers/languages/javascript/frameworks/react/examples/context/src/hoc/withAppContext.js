import React from 'react'
import { AppContext } from '../App'

/** There’s a bug in eslint-plugin-react which make it only work if you are using named functions */
/* eslint-disable react/display-name */
export const withAppContext = Component => props => (
  <AppContext.Consumer>
    {app => <Component app={app} {...props} />}
  </AppContext.Consumer>
)
