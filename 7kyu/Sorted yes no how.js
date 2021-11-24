// Complete the method which accepts an array of integers, and returns one of the following:

//     "yes, ascending" - if the numbers in the array are sorted in an ascending order
//     "yes, descending" - if the numbers in the array are sorted in a descending order
//     "no" - otherwise

// You can assume the array will always be valid, and there will always be one correct answer.

// My solution
function isSortedAndHow(array) {
    const sortArray = array.slice().sort((a, b) => a - b);
    let result;

    if (array[0] === sortArray[0] &&
        array[array.length] === sortArray[sortArray.length]) {
        result = 'yes, ascending';
    } else if (array[0] == sortArray[sortArray.length - 1] &&
        array[array.length - 1] == sortArray[0]) {
        result = 'yes, descending';
    } else {
        result = 'no';
    }

    return result;
}

// Best Practices
function isSortedAndHow(arr) {
    return arr.every((x, i) => i == 0 || arr[i] >= arr[i - 1]) ? 'yes, ascending' :
        arr.every((x, i) => i == 0 || arr[i] <= arr[i - 1]) ? 'yes, descending' : 'no';
}