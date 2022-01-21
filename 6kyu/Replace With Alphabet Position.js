// Welcome.

// In this kata you are required to, given a string, replace every letter with its position in the alphabet.

// If anything in the text isn't a letter, ignore it and don't return it.

// "a" = 1, "b" = 2, etc.


// My solution
function alphabetPosition(text) {
    const arr = text.replace(/[^a-z]/gi, '').toLowerCase().split('');
    const result = arr.map(letter => letter.charCodeAt() - 96);

    return result.join(' ');
}