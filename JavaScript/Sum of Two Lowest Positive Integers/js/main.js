//Create a function to sum two lowest integers.
//By using the sort method it will add two of the lowest integers.

function sumTwoSmallestNumbers(numbers) {  
    numbers = numbers.sort(function(a,b){
      return a - b;
  });
  
  return numbers[0] + numbers[1];
  };

  console.log(sumTwoSmallestNumbers([1,5,8,2,4]))