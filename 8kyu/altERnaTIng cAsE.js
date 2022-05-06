// ltERnaTIng cAsE <=> ALTerNAtiNG CaSe
// altERnaTIng cAsE <=> ALTerNAtiNG CaSe


// My solution
function toAlternatingCase(str) {
    return str.split('')
        .map(item => item === item.toLowerCase() ?
            item.toUpperCase() :
            item.toLowerCase())
        .join('');
}