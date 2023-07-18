/*Function to return average array even when empty*/
/*Create condition if array is larger than empty array if so use reduce method and divide by array.length*/
/*if array.length less than empty array return 0*/

function findAverage(array) {
    
    if (array.length > 0 ) {
        return array.reduce((x,y) => x + y)/array.length
    } else {
        return 0;
    }
}