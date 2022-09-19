// Create an array that sums into integers
// Using the reduce method to sum the numbers inside the array
// Number constuctor will allow string numbers to convert into integers
// Returning the parameter of the array using the sum operator

function sumMix(x) {
    return x.reduce((sum, a) => Number(sum) + Number(a), 0);
}