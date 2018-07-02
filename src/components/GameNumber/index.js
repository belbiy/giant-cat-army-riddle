import React from 'react'
import { CSSTransition } from 'react-transition-group'

import styles from './gameNumber.css'

const GameNumber = (props) => {

  const { number, status } = props

  const isError = (status === 'error')

  const className = styles.number + (isError? ' ' + styles.error : '' ) + ( status === 'success' ? ' ' + styles.success : '')

  const show = true

  return (
    <CSSTransition
      classNames="number"
      timeout={300}
      {...props}>
      <span className={className}>
        {number}
      </span>
    </CSSTransition>
  )
}

export default GameNumber
