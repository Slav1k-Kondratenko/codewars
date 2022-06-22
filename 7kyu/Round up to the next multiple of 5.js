// Given an integer as input, can you round it to the next (meaning, "higher") multiple of 5?


// My solution
function roundToNext5(n) {
    for (let i = n;; i++) {
        if (i % 5 === 0) {
            return i
        }
    }
}