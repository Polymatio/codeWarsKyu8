//Create a function that power of 2.

function powersOfTwo(n){
  var myArray = [];
  for (var i=0; i<=n; i++){
    myArray.push(2**i);
  }
  return myArray
}

const result = powersOfTwo(2)
console.log(result)