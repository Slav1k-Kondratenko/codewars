// Complete the solution so that it returns true if the first argument(string) 
// passed in ends with the 2nd argument (also a string).

// Examples:

// solution('abc', 'bc') // returns true
// solution('abc', 'd') // returns false

// My solution
function solution(str, ending) {
    str = str.split('').reverse();
    ending = ending.split('').reverse();
    let result = true;
    for (let i = 0; i < ending.length; i++) {
        if (str[i] !== ending[i]) {
            result = false;
        }
    }
    return result;
}

// Best Practices
function solution(str, ending){
    return str.endsWith(ending);
  }