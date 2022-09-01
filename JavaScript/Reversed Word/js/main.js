// Create a function that reverses the words of the the string.
// Needs to use split medthod, reverse method and join method.
// Will create sentences with reversed strings with returned.

function reversedWord(str) {
    let newString = str.split(" ");
    newString.reverse();
    newString = newString.join(" ");
    return newString;
}