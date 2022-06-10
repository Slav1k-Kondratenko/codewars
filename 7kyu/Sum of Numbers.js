// Given two integers a and b, which can be positive or negative, find the sum of all the integers between and including them and return it. 
// If the two numbers are equal return a or b.

// Note: a and b are not ordered!


// My solution
function getSum(a, b) {
    const sortArr = [a, b].sort((a, b) => a - b)
    let result = 0

    for (let i = sortArr[0]; i <= sortArr[1]; i++) {
        result += i
    }
    return result
}