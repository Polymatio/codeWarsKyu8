// Create a function that sum positive numbers in the array
// Make sum to be assign to 0 as the minimum as negative integers cannot be in the function
// Using the for loop will allow the function to sum for i amount of times
// Conditional statement to add only positive integers in the array
// Return the result of the sum

function positiveSum(arr) {
    let sum = 0;
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] > 0){
            sum += arr[i]
        }
    }
    return sum
}