// Task:

// Given a list of integers, determine whether the sum of its elements is odd or even.

// Give your answer as a string matching "odd" or "even".

// If the input array is empty consider it as: [0] (array with a zero).


// My solution
function oddOrEven(array) {
    let total = array;
    total.length > 0 ? (total = array.reduce((total, item) => total + item)) : total = 0;
    return (total % 2 === 0) ? "even" : "odd";
}