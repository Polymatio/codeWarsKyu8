//Create a function that detects sheep and wolf.

function warnTheSheep(queue) {

    //Create an index for wolf.
    let wolf = queue.indexOf('wolf')

    //Create condition for sheep and wolf.
    if(wolf === queue.length - 1) {
        return "Pls go away and stop eating my sheep";
    }

    //Create an index for sheep.
    let sheep = queue.length - wolf - 1;

    return `Oi! Sheep number ${sheep}! You are about to be eaten by a wolf!`;

}