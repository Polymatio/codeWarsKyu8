// Create a function that power of 2.
// Assign myArray to be an array
// For loop to power of 2 for i amount of times
// Use a push method to keep adding more until i amount of times
// will return myArray to power of 2
// Console log the results to see the numbers that returned in myArray

function powersOfTwo(n){
  let myArray = [];
  for (let i=0; i<=n; i++){
    myArray.push(2**i);
  }
  return myArray
}

const result = powersOfTwo(5)
console.log(result)