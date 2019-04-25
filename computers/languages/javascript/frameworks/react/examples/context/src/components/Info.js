import React from 'react'
import { withAppContext } from '../hoc/withAppContext'

export const Info = withAppContext(props => <h1>{props.app.title}</h1>)
