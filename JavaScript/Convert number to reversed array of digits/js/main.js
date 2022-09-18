// Create a function that convert number to reverse array's digits
// Using Array.from method to create shallow copied Array from an array-like object
// In the Array.from mthod will write String and Number to convert the string to number
// The reverse method will be used to reverse the order of the array

function digitize(n) {
    return Array.from(String(n), Number).reverse()
}