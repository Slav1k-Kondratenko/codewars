// An isogram is a word that has no repeating letters, consecutive or non-consecutive. 
// Implement a function that determines whether a string that contains only letters is an isogram. 
// Assume the empty string is an isogram. Ignore letter case.

// "Dermatoglyphics" --> true
// "aba" --> false
// "moOse" --> false (ignore letter casing)

// My solution

function isIsogram(str) {
    return new Set(str.toLowerCase()).size == str.toLowerCase().length;

}

// Best Practices
function isIsogram(str) {
    return !/(\w).*\1/i.test(str);
}