// Sum all the numbers of the array except the highest and 
// the lowest element (the value, not the index!).
// (The highest/lowest element is respectively only one element at each edge, 
//     even if there are more than one with the same value!)

// Example:

// { 6, 2, 1, 8, 10 } => 16
// { 1, 1, 11, 2, 3 } => 6

// My soluttion
function sumArray(array) {
    return array ? array.sort((a, b) => a - b).slice(1, -1).reduce((x, y) => x + y, 0) : 0;
}
