import React from 'react'
import { withAppContext } from '../hoc/withAppContext'

export const Info = withAppContext(props => <p>{props.app.info}</p>)
