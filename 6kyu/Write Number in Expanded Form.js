// Write Number in Expanded Form

// You will be given a number and you will need to return it as a string in Expanded Form. For example:

// expandedForm(12); // Should return '10 + 2'
// expandedForm(42); // Should return '40 + 2'
// expandedForm(70304); // Should return '70000 + 300 + 4'

// NOTE: All numbers will be whole numbers greater than 0.


// My solution
function expandedForm(num) {
    num = String(num);
    let result = num[0] * Math.pow(10, num.length - 1);
    for (let i = 1; i < num.length; i++) {
        if (num[i] > 0) {
            result = `${result} + ${num[i] * Math.pow(10, (num.length - 1) - i)}`
            
        }
    }
    return String(result);
}