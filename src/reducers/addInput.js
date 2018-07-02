function addInput (state, action) {

  const inputValue = action.inputValue
  const lastNumber = state.numbers[state.numbers.length - 1]

  var newNumber = 0
  var newNumbers = []
  var newStatus = ''

  // Calculate a new number
  if (inputValue === 'sqr') {
    newNumber = Math.sqrt(lastNumber.number)
  } else {
    newNumber = lastNumber.number + parseInt(inputValue, 10)
  }

  // ------ Game Over scenarios ------ //

  // Check for duplicate numbers
  const duplicate = state.numbers.find( (number) => {return number.number === newNumber } )
  // Check if new number is bigger than 60
  const large = (newNumber > 60)
  // Check if non-whole number
  const floatNum = (newNumber % 1 !== 0)

  var gameOver = false
  var gameOverReason = ''

  if ( floatNum ) {
    gameOver = true
    gameOverReason = 'The display showed the non-whole number.'
  }
  if ( large ) {
    gameOver = true
    gameOverReason = 'The display showed the number greater than 60.'
  }
  if ( typeof(duplicate) !== 'undefined' ) {
    gameOver = true
    gameOverReason = 'The display showed the same number twice.'
  }

  if (gameOver) {
    newStatus = 'error'
  }


  // ------ Winning scenario ------ //
  const solutions = state.solutions

  var ind = 0

  // Find new number in solutions
  var newSolutions = solutions.map( function (solution, index) {

    if (solution.status === 'success') {
      ind += 1
    }

    console.log(ind)

    if (solution.number === newNumber && ind === index) {
      ind += 1
      newStatus = 'success'
      return {...solution, status: 'success'}
    } else {
      return solution
    }
  })

  if (ind === solutions.length) {
    gameOver = true
    gameOverReason = 'You win!'
  }



  newNumbers = [...state.numbers, { number: newNumber, status: newStatus} ]

  return {
    ...state,
    solutions: newSolutions,
    numbers: newNumbers,
    gameOver: gameOver,
    gameOverReason: gameOverReason,
  }
}

export default addInput;
