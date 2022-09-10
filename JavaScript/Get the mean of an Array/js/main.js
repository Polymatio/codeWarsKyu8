// Create a function to find the mean of an array
// Using the reduce method will sums of all elements in the arrays
// Math.floor method helps round down and return largest integer
// Using length method to divide the returned array by half

function getAverage(marks) {
    return Math.floor(marks.reduce((acc, cur) => acc + cur, 0) / marks.length);
}