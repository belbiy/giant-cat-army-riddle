import React from 'react'
import styles from './button.css'

const Button = (props) => {

  const { type, size } = props

  var className = styles.button + (props.className ? ' ' + props.className : '')

  switch (type) {
    case 'primary':
      className += ' ' + styles.primary
      break
    case 'hollow':
      className += ' ' + styles.hollow
      break
    default:
      className += ''
  }

  switch (size) {
    case 'medium':
      className += ' ' + styles.medium
      break
    case 'large':
      className += ' ' + styles.large
      break
    default:
      className += ''
  }

  return (
    <button {...props} className={className}>
      {props.children}
    </button>
  )
}

export default Button
