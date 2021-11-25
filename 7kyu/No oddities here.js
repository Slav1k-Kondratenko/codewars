// Write a small function that returns the values of an array that are not odd.

// All values in the array will be integers. Return the good values in the order they are given.

// My solution
function noOdds(values) {
    const even = [];
    values.forEach(item => {
        if (item % 2 == 0) {
            even.push(item);
        }
    });
    return even;
}

// Best Practices
function noOdds(values) {
    return values.filter(x => x % 2 === 0);
}

