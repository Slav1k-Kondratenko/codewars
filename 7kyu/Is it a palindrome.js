// Write a function that checks if a given string (case insensitive) is a palindrome.


// My solution
function isPalindrome(x) {
    return x.toLowerCase() === x.toLowerCase().split('').reverse().join('')
}