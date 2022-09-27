// Create a function that determines when to square root and not to sqaure root
// Conditionals to square root or not to square root the numbers in the array
// Use map method to fill in the arrays with the result
// Use Number.isInteger method to determine if the value is an integer and not a string
// Use Math.pow method to square root the numbers in the array
// Return number that is not square root else return square root

function squareOrSquareRoot(array) {
    return array.map(result => {
        if (Number.isInteger(Math.pow(result, .5))) {
        return Math.pow(result, .5)
        } else {
          return Math.pow(result, 2)
        }
    })
}