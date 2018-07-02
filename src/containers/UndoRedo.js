import React, { Component } from 'react'
import { connect } from 'react-redux'
import { undo, redo } from '../actions'

import Button from '../components/Button'

class UndoRedo extends Component {

  componentDidMount = () => {
    window.addEventListener('keydown', this.handleKeyDown)
  }

  componentWillUnmount = () => {
    window.removeEventListener('keydown', this.handleKeyDown)
  }

  // Listen to CTR+Z or CMD+Z
  handleKeyDown = (event) => {
    let charCode = String.fromCharCode(event.which).toLowerCase()

    if ( (event.ctrlKey && event.shiftKey && charCode === 'z') || (event.metaKey && event.shiftKey && charCode === 'z') ) {
      this.props.onRedo()
    } else if ( (event.ctrlKey && charCode === 'z') || (event.metaKey && charCode === 'z') ) {
      this.props.onUndo()
    }
  }

  render () {
    const { canUndo, canRedo, onUndo, onRedo } = this.props

    return (
      <div>
        <Button onClick={onUndo} disabled={!canUndo} aria-label="Undo" type="hollow" size="large">
          &#8617;
        </Button>
        <Button onClick={onRedo} disabled={!canRedo} aria-label="Redo" type="hollow" size="large">
          &#8618;
        </Button>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  canUndo: state.past.length > 0,
  canRedo: state.future.length > 0
})

const mapDispatchToProps = dispatch => ({
  onUndo: () => dispatch(undo()),
  onRedo: () => dispatch(redo())
})

UndoRedo = connect(
  mapStateToProps,
  mapDispatchToProps
)(UndoRedo)

export default UndoRedo
