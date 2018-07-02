import React from 'react'
import { connect } from 'react-redux'

import GameNumber from '../components/GameNumber'

let GameRules = ({ solutions }) => {

  return (
    <div style={{margin: '10px 0'}}>
      <h2>
        Rules
        <small style={{fontSize: '14px', margin: '0 10px', verticalAlign:'middle'}}>
          <a href="https://www.ted.com/talks/dan_finkel_can_you_solve_the_giant_cat_army_riddle">
            Watch the video
          </a>
        </small>
      </h2>

      <p>
        The display must show the numbers in order:
      </p>

      <p style={{display: 'flex'}}>
        {solutions.map( (number, index) => {
          return(
            <GameNumber key={index} {...number} />
          )
        })}
      </p>

      <p>
        The display can safely show other numbers unless it shows:
      </p>

      <ul>
        <li>same number twice</li>
        <li>a number greater than 60</li>
        <li>non-whole number</li>
      </ul>

    </div>
  )
}

const mapStateToProps = state => {
  return ({
    solutions: state.present.solutions
  })
}

GameRules = connect(
  mapStateToProps
)(GameRules)

export default GameRules
