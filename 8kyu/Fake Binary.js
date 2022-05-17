// Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.


// My solution
function fakeBin(x) {
    return x.split('')
        .map(item => item > 4 ? item = 1 : 0)
        .join('')
}