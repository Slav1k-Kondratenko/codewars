// You are given an odd-length array of integers, 
// in which all of them are the same, except for one single number.

// Complete the method which accepts such an array, and returns that single different number.

// The input array will always be valid! (odd-length >= 3)

// My solution
function stray(numbers) {
     return +numbers.filter((el) => numbers.indexOf(el) === numbers.lastIndexOf(el)).join('');
}

// Best practices
const str = nums => nums.reduce((a, b) => a ^ b);