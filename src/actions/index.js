export const ADD_INPUT = 'ADD_INPUT'
export const UNDO = 'UNDO'
export const REDO = 'REDO'
export const RESTART = 'RESTART'

export const addInput = inputValue => ({
  type: ADD_INPUT,
  inputValue,
})

export const undo = () => ({
  type: UNDO
})

export const redo = () => ({
  type: REDO
})

export const restart = () => ({
  type: RESTART
})
