import React from 'react'
import { connect } from 'react-redux'
import CSSTransition from 'react-transition-group/CSSTransition'
import { restart } from '../../actions'

import styles from './gameOver.css'
import Button from '../Button'

let GameOver = ({show, message, handleRestart}) => {

  return (
    <CSSTransition
      in={show}
      classNames="slide"
      timeout={300}>
      <div className={styles.container}>
        <div className={styles.inner}>
          <h2>Game Over</h2>
          <p>
            {message}
          </p>
          <Button onClick={handleRestart} type="primary" size="medium">
            <i className={styles.icon}>&#8635;</i> Restart
          </Button>
        </div>
      </div>
    </CSSTransition>
  )
}


const mapStateToProps = state => {
  return ({
    show: state.present.gameOver,
    message: state.present.gameOverReason
  })
}

const mapDispatchToProps = dispatch => ({
  handleRestart: () => dispatch(restart()),
})

GameOver = connect(
  mapStateToProps,
  mapDispatchToProps
)(GameOver)

export default GameOver
