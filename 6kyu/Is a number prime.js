// Define a function that takes an integer argument and returns a logical value true or false depending on if the integer is a prime.

// Per Wikipedia, a prime number ( or a prime ) is a natural number greater than 1 that has no positive divisors other than 1 and itself.


// My solutuion
function isPrime(num) {
    if (num <= 1) return false
    let prime = true
    let sqrtN = parseInt(Math.sqrt(num))
    for (let i = sqrtN; i > 1; i--) {
        if (num % i == 0) {
            prime = false
            break
        }
    }
    return prime
}