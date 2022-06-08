//Function to sum squares.

function squareSum(numbers){
    var sum = 0, 
        i = numbers.length;
    while (i--) 
     sum += Math.pow(numbers[i], 2);
    return sum;
}