// Create a function that counts arrays by multiples of x numbers.
// Leave the number as a variable.
// Let z equal to an empty array.
// Create a for loop to start at number 1 and returning the array with z.

function countBy(x, n) {
    let z = []
    for(i = 1; i <= n; i++) {
        z.push(i * x)
    }
    return z;
}