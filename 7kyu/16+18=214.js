// For this kata you will have to forget how to add two numbers.
// In simple terms, our method does not like the principle of carrying over numbers 
// and just writes down every number it calculates :-)

// You may assume both integers are positive integers.

// My solution

function add(num1, num2) {
    num1 = String(num1).split('').map(item => +item);
    num2 = String(num2).split('').map(item => +item);
    let result = [];

    while (num1.length < num2.length) {
        num1.unshift(0);
    }

    while (num2.length < num1.length) {
        num2.unshift(0);
    }
            
    for (let i = 0; i < num2.length; i++) {
        result = result + (num1[i] + num2[i]);
    }

    return +result;
}