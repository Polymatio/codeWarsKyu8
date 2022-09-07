// Create a class that finds the smallest array
// Will use Math.min method to find smallest value array
// Return the minimun array
// Use the spread operator in the return to call the array.

class SmallestIntegerFinder {
    findSmallestInt(args) {
        return Math.min(...args);
    }
}