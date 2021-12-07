// In this kata you will create a function that takes a list of non-negative integers and 
// strings and returns a new list with the strings filtered out.

// My solution
function filterList(n) {
    let res = [];
    for (let item of n) {
        if (typeof item === 'number') {
            res.push(item);
        }
    }

    return res;
}

// Best practices
function filterList(l) {
    return l.filter(n => typeof n == 'number');
}