// Given a string, swap the case for each of the letters.
// Examples

// ""           -->   ""
// "CodeWars"   -->   "cODEwARS"
// "abc"        -->   "ABC"
// "ABC"        -->   "abc"
// "123235"     -->   "123235"


// My solution
function swap(str) {
    const arr = str.split('');
    const result = [];

    for (let i = 0; i < arr.length; i++) {
        arr[i] == arr[i].toUpperCase() ?
            result.push(arr[i].toLowerCase()) :
            result.push(arr[i].toUpperCase())
    }

    return result.join('');
}