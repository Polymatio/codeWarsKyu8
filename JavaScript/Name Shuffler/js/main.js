// Create a function that shuffes names
// Using the split method will allow the strings to divide into an ordered list
// The reverse method change the order of the first and last name
// Adding the string in the reverse method will allow change the order
// Join method will be wused to return a new string in the order placed on

function nameShuffle(str) {
    return str.split(" ").reverse(str).join(" ");
}