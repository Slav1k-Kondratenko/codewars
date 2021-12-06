// Write a function which calculates the average of the numbers in a given list.

// Note: Empty arrays should return 0.

// My solution
function findAverage(array) {
    let result = 0;
    for (let value of array) {
        result += value;
    }
    return array.length > 0 ? result/array.length : 0;
}