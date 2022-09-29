// Create a function that counts positive integers and add negative integers
// Conditional if integer is either a null or 0 return an empty array
// assign positive and negative integers to be 0 as base number
// Used forEach method to count the positive and negative integers each time
// Made the positive integer to increment ++ and negative integer to sum each time
// Return the count of the positive integers and sum the negative integers

function countPositivesSumNegatives(input) {
    if(input == null || input.length == 0){
        return [];
    }
    let positive = 0;
    let negative = 0;
    input.forEach((num) => num > 0 ? positive++ : negative += num);
    return [positive, negative];
}