// Clock shows h hours, m minutes and s seconds after midnight.

// Your task is to write a function which returns the time since midnight in milliseconds.

// My solution
function past(h, m, s) {
    return h * (60000 * 60) + m * 60000 + s * 1000;
}

//     Best Practices
function past(h, m, s){
    return ((h*3600)+(m*60)+s)*1000;
  }