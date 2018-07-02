import React from 'react'
import { connect } from 'react-redux'
import { addInput } from '../actions/index'

import Button from '../components/Button'

let GameButtons = ({ onInput, disabled }) => {

  return (
    <div style={{margin: '10px 0',zIndex: 2, position: 'relative'}}>
      <Button onClick={(e) => onInput(5)} disabled={disabled} type="primary" size="large">
        +5
      </Button>
      <Button onClick={(e) => onInput(7)} disabled={disabled} type="primary" size="large">
        +7
      </Button>
      <Button onClick={(e) => onInput('sqr')} disabled={disabled} type="primary" size="large">
        &#8730;
      </Button>
    </div>
  )
}

const mapStateToProps = state => {
  return ({
    disabled: state.present.gameOver
  })
}

const mapDispatchToProps = dispatch => ({
  onInput: (inputValue) => dispatch(addInput(inputValue)),
})

GameButtons = connect(
  mapStateToProps,
  mapDispatchToProps
)(GameButtons)

export default GameButtons
