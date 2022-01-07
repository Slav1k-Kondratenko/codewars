// Definition

// Balanced number is the number that * 
// The sum of all digits to the left of the middle digit(s) and 
// the sum of all digits to the right of the middle digit(s) are equal*.

// My solution
function balancedNum(number) {
    number = String(number).split('');
    let sumLeft = 0;
    let sumRight = 0;

    const index = Math.round((number.length - 1) / 2);

    if (number.length < 3) {
        return "Balanced";
    } if (index % 2 == 0) {
        for (let i = 0; i < index - 1; i++) {
            sumLeft += +number[i];
        }
    } else {
        for (let i = 0; i < index; i++) {
            sumLeft += +number[i];
        }
    }

    for (let i = index + 1; i < number.length; i++) {
        sumRight += +number[i];
    }

    return (sumRight === sumLeft) ? "Balanced" : "Not Balanced";
}

// Best practices
function balancedNum(number) {

    let str = `${number}`;
    let len = (str.length - (str.length % 2 ? -1 : -2)) / 2;
    let sum = digits => [ ...digits ].reduce((a, b) => a + (+b), 0);
  
    return sum(str.slice(0, len)) === sum(str.slice(-len)) ? 'Balanced' : 'Not Balanced';
  }