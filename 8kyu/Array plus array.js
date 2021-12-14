// I'm new to coding and now I want to get the sum of two arrays...
// actually the sum of all their elements. 
// I'll appreciate for your help.

// P.S. Each array includes only integer numbers. Output is a number too.


// My solution
function arrayPlusArray(arr1, arr2) {
    const result = [...arr1, ...arr2];
    return result.reduce((a, b) => a + b);
}

console.log(arrayPlusArray([1, 2, 3], [4, 5, 6]));