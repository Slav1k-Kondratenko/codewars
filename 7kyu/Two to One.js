// Take 2 strings s1 and s2 including only letters from ato z. 
// Return a new sorted string, the longest possible, 
// containing distinct letters - each taken only once - coming from s1 or s2.

// My solution
function longest(s1, s2) {
    s1 = s1.split('');
    s2 = s2.split('');
    const set = new Set([...s1, ...s2].sort());
    const res = [...set].join('');
    return res;
}

// Best Practice
function longest(s1, s2) {
    let str = new Set([...s1, ...s2]);
    return [...str].sort().join('');
}