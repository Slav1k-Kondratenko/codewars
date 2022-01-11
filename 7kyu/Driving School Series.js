// Every month, a random number of students take the driving test at Fast & Furious (F&F) Driving School. 
// To pass the test, a student cannot accumulate more than 18 demerit points.

// At the end of the month, F&F wants to calculate the average demerit points accumulated by ONLY the students who have passed, 
// rounded to the nearest integer.

// Write a function which would allow them to do so. If no students passed the test that month, return 'No pass scores registered.'.


// My solution
function average(list) {
  const passed = list.filter((x) => x <= 18);

  return passed.length ?
    Math.round(passed.reduce((a, b) => a + b) / passed.length) :
    'No pass scores registered.';
}