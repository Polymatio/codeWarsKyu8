// Created a function that reverse a string.
// Will use the split method to seperate each letter into its own strings
// Using the reverse method will allow it to flip the order of each strings
// The join method will combine the strings to become into a single string

function solution(str) {
    return str.split("").reverse().join("");
}