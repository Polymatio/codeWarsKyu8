// Create a function that fills an array
// Assign arr to Array.from method
// The Array.from method will br used to create a new index in the array
// Return new index of an array

function arr(N) {
    let arr = Array.from({length: N}, (_, index) => index);
    return arr;
}