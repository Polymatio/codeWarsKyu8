//Create a constant that flips the gravity

const flip = (d, a)=> {

    if(d === 'L') {
        return a.sort((a, b) => b - a);
    }

    return a.sort((a, b) => a - b);
}