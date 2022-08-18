// Create an array that sums into integers.

function sumMix(x) {
    return x.reduce((sum, a) => Number(sum) + Number(a), 0);
}