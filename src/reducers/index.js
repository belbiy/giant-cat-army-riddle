import { ADD_INPUT, RESTART } from '../actions'
import addInput from './addInput'

const initialState = {
  message: '?',
  solutions: [
    {
      number: 2,
      status: '',
    },
    {
      number: 10,
      status: '',
    },
    {
      number: 14,
      status: '',
    }
  ],
  gameOver: false,
  gameOverReason: '',
  numbers: [
    {
      number: 0,
      status: '',
    }
  ]
}

const numbersReducer = (state = initialState, action) => {

  switch (action.type) {
    case ADD_INPUT:
      return addInput(state, action);
    default:
      return state
  }
}


function undoable(reducer) {
  // Call the reducer with empty action to populate the initial state

  var initialState = {
    past: [],
    present: reducer(undefined, {}),
    future: []
  }

  // Return a reducer that handles undo and redo
  return function (state = initialState, action) {
    const { past, present, future } = state

    switch (action.type) {
      case RESTART:
        return {
          past: [],
          present: reducer(undefined, {}),
          future: []
        }
      case 'UNDO':
        const previous = past[past.length - 1]
        if (typeof(previous) !== 'undefined') {
          const newPast = past.slice(0, past.length - 1)
          return {
            past: newPast,
            present: previous,
            future: [present, ...future]
          }
        } else {
          return state
        }
      case 'REDO':
        const next = future[0]
        if (typeof(next) !== 'undefined') {
          const newFuture = future.slice(1)
          return {
            past: [...past, present],
            present: next,
            future: newFuture
          }
        } else {
          return state
        }
      default:
        // Delegate handling the action to the passed reducer
        const newPresent = reducer(present, action)
        if (present === newPresent) {
          return state
        }
        return {
          past: [...past, present],
          present: newPresent,
          future: []
        }
    }
  }
}

const undoableReducer = undoable(numbersReducer)
//console.log(undoableReducer)

export default undoableReducer
