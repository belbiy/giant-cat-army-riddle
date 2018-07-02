import React from 'react'
import { connect } from 'react-redux'
import { TransitionGroup } from 'react-transition-group'

import GameNumber from '../components/GameNumber'

const style = {
  margin: '10px 0',
  zIndex: 1,
  padding: '10px',
  border: '2px solid #333'
}

let Numbers = ({ numbers }) => {

  return (
    <div style={style}>
      <TransitionGroup style={{display: 'flex', flexWrap: 'wrap'}}>
        {numbers.map(function (number, index) {
          return(
            <GameNumber key={index} {...number} />
          )
        })}
      </TransitionGroup>
    </div>
  )
}

const mapStateToProps = state => {
  return ({
    numbers: state.present.numbers
  })
}

Numbers = connect(
  mapStateToProps
)(Numbers)

export default Numbers
