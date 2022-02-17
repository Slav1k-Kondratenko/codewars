// You are given an array (which will have a length of at least 3, but could be very large) containing integers. 
// The array is either entirely comprised of odd integers or entirely comprised of even integers except for a single integer N. 
// Write a method that takes the array as an argument and returns this "outlier" N.


// My solution
function findOutlier(integers) {
    let odd = 0;
    let even = 0;
    let result = 0;

    for (let i = 0; i < integers.length; i++) {
        integers[i] % 2 === 0 ? even += 1 : odd += 1;
    }

    if (even < odd) {
        for (let i = 0; i < integers.length; i++) {
            if (integers[i] % 2 === 0) {
                result = integers[i]
            }
        }
    } else {
        for (let i = 0; i < integers.length; i++) {
            if (integers[i] % 2 !== 0) {
                result = integers[i]
            }
        }
    }

    return result;
}


// Best practices
function findOutlier(integers) {
    const even = integers.filter(int => int % 2 === 0);
    const odd = integers.filter(int => int % 2 !== 0);
    return even.length === 1 ? even[0] : odd[0];
}