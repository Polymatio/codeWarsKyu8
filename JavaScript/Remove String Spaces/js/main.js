// Create a function that removes spaces in the string.
// Plan to use the replace method to remove spaces.
// Find possible characters/symbols to removes alternative spaces.

function noSpace(x) {
    return x.replace(/\s/g, '');
}