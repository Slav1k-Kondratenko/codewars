// Your task is to return number of people who are still in the bus after the last bus station. 
// Even though it is the last bus stop, the bus is not empty and some people are still in the bus, 
// and they are probably sleeping there :D

// Take a look on the test cases.

// Please keep in mind that the test cases ensure that the number of people 
// in the bus is always >= 0. 
// So the return integer can't be negative.

// The second value in the first integer array is 0, since the bus is empty in the first bus stop.

// My solution
const number = function (busStops) {
    let result = 0;
    busStops.forEach(element => {
        result += element[0] - element[1];
    });
    return result;
};