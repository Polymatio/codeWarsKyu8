// Create a constant that flips the gravity
// Will use the sort method to sort the element and return the array
// Will use conditional to sort the array

const flip = (d, a)=> {

    if(d === 'L') {
        return a.sort((a, b) => b - a);
    }

    return a.sort((a, b) => a - b);
}