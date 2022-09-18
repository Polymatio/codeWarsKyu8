// Create a function that detects sheep and wolf.
// Using the indexOf method to find the wolf in the array
// The condtional statement will help return whether the wolf is detected or not
// Using the length method to count the numbers of elements in the array

function warnTheSheep(queue) {
    let wolf = queue.indexOf('wolf')

    if(wolf === queue.length - 1) {
        return "Pls go away and stop eating my sheep";
    }

    let sheep = queue.length - wolf - 1;

    return `Oi! Sheep number ${sheep}! You are about to be eaten by a wolf!`;
}