// Create a function that sums an array with an array
// Use the concat method to merge the arrays together
// The reduce method will be use add the numbers

function arrayPlusArray(arr1, arr2) {
    return arr1.concat(arr2).reduce((prev, curr) => prev + curr);
}