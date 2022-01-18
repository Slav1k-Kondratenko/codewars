// Complete the method/function so that it converts dash/underscore delimited words into camel casing. 
// The first word within the output should be capitalized only if 
// the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case).


// My solution
function toCamelCase(str) {
    const arr = str.split(/[_ -]/);

    for (let i = 1; i < arr.length; i++) {
        arr[i] = arr[i][0].toUpperCase() + arr[i].slice(1);
    }

    return arr.join('');
}

// Best practices
function toCamelCase(str) {
    return str.replace(/[-_](.)/g, (_, c) => c.toUpperCase());
}