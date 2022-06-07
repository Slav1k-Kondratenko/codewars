// Amicable numbers are two different numbers so related that the sum of the proper divisors of each is equal to the other number. 
// (A proper divisor of a number is a positive factor of that number other than the number itself. For example, the proper divisors of 6 are 1, 2, and 3.)

// For example, the smallest pair of amicable numbers is (220, 284); 
// for the proper divisors of 220 are 1, 2, 4, 5, 10, 11, 20, 22, 44, 55 and 110, 
// of which the sum is 284; and the proper divisors of 284 are 1, 2, 4, 71 and 142, of which the sum is 220.

// Derive function amicableNumbers(num1, num2) which returns true/True if pair num1 num2 are amicable, false/False if not.


// My solution
function amicableNumbers(num1, num2) {
    let divisorsNum1 = 0;
    let divisorsNum2 = 0;

    for (let i = 0; i < num1; i++) {
        if (num1 % i == 0) {
            divisorsNum1 += i
        }
    }

    for (let i = 0; i < num2; i++) {
        if (num2 % i == 0) {
            divisorsNum2 += i
        }
    }

    return divisorsNum1 === num2 && divisorsNum2 === num1
}