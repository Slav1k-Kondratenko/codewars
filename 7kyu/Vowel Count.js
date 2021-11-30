// Return the number (count) of vowels in the given string.

// We will consider a, e, i, o, u as vowels for this Kata (but not y).

// The input string will only consist of lower case letters and/or spaces.

// My solution

function getCount(str) {
    const count = str.replace(/\s+/g, '').match(/[a, e, i, o, u]/g);
    return count !== null ? count.length : 0;
}

// Best Practices
function getCount(str) {
    return (str.match(/[aeiou]/ig)||[]).length;
  }
