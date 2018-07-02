import React, { Component } from 'react'
import PropTypes from 'prop-types'

import Numbers from './containers/Numbers'
import GameButtons from './containers/GameButtons'
import UndoRedo from './containers/UndoRedo'
import GameRules from './containers/GameRules'

import GameOver from './components/GameOver'

import './styles/reset.css'
import './styles/app.css'

class App extends Component {

  handleRestart = function () {
    this.props.restart()
  }

  render() {

    return (
      <div className="app">

        <h1>Giant cat army riddle</h1>

        <div className="game-container">
          <div className="game-controls">

            <Numbers />
            <GameButtons />
            <UndoRedo />
            <GameOver />

          </div>
          <div className="game-rules">

            <GameRules />

          </div>
        </div>

        <footer className="app-footer">
          Made by <a href="http://belbiy.com">Eugene Bannykh</a>.
          Riddle by <a href="https://mathforlove.com/who-am-i/dan-finkel/">Dan Finkel</a>.
        </footer>
        
      </div>
    )
  }
}

App.propTypes = {

}

export default App
