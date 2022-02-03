// Our football team finished the championship. The result of each match look like "x:y". 
// Results of all matches are recorded in the collection.


// My solution
function points(games) {
    let points = 0;
    games.forEach(element => {
        if (element[0] > element[2]) {
            points += 3;
        } else if (element[0] == element[2]) {
            points += 1;
        }
    });

    return points;
}