// Write a function that accepts an array of 10 integers (between 0 and 9), 
// that returns a string of those numbers in the form of a phone number.

// My solution
function createPhoneNumber(numbers){
    const match = numbers.join('').match(/^(\d{3})(\d{3})(\d{4})$/);

    return `(${match[1]}) ${match[2]}-${match[3]}`;
}

// Best practices
function createPhoneNumber(numbers){
  return numbers.join('').replace(/(...)(...)(.*)/, '($1) $2-$3');
}