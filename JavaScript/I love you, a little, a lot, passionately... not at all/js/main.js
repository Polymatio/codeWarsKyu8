// Create a function that determines the phrase what the girl will say on the flower's petals
// Will use conditionals to return different outputs
// The conditionals will return at least 6 different outputs
// Using the modulus will help the output display based on the remainders

function howMuchILoveYou(nbPetals) {
    if(nbPetals % 6 == 1) {
        return ("I love you");
    }else if(nbPetals % 6 == 2) {
        return ("a little");
    }else if(nbPetals % 6 == 3) {
        return ("a lot");
    }else if(nbPetals % 6 == 4) {
        return ("passionately");
    }else if(nbPetals % 6 == 5) {
        return ("madly");
    }else {
        return ("not at all");
    }
}