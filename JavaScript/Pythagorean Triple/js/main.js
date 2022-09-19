// Create a function that determines if the non-negative integers form a pythagorean triple
// Assign num as intergers.sort
// Using the sort method to arrange the integers
// Must return the mathimatic equation to square root

function isPythagoreanTriple(integers) {
    let num = integers.sort((a, b) => a - b)
    return (num[0] ** 2 + num[1] ** 2 == num[2] ** 2)
}