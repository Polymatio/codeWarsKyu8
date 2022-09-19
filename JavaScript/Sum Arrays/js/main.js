// Create a function for the sum of array
// Using the reduce method to sum the numbers inside the array
// Will return a number inside the array using sum operator 

function sum(numbers) {
    return numbers.reduce((a, b) => a + b, 0);
}