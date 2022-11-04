// Create a function that sort the string alpabetically and have star in between
// Will return using the sort, split, and join method to order the strings, divide the strings, and lastly join using ***

function twoSort(s) {
    return s.sort()[0].split('').join('***');
}