// Create a function to sum squares
// Using length to count how many integers are in the square sums
// using the while loop will allow the function to work on two different equations
// It will return the sum of the function

function squareSum(numbers){
    let sum = 0, 
        i = numbers.length;
    while (i--) 
     sum += Math.pow(numbers[i], 2);
    return sum;
}