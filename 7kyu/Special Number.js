// Definition

// A number is a Special Number if it’s digits only consist 0, 1, 2, 3, 4 or 5

// Given a number determine if it special number or not . 

// My solution
function specialNumber(n) {
    return (/^[0-5]+$/g.test(n) ? 'Special!!' : 'NOT!!');
}

console.log(specialNumber(55));