// Rock Paper Scissors

// Let's play! You have to return which player won! In case of a draw return Draw!.

// Examples:

// rps('scissors','paper') // Player 1 won!
// rps('scissors','rock') // Player 2 won!
// rps('paper','paper') // Draw!


// My solution
const rps = (p1, p2) => {
    let mgs = 'Draw!';

    if (p1 == 'scissors' && p2 == 'paper') {
        mgs = 'Player 1 won!';
        return mgs;
    } else if (p1 == 'scissors' && p2 == 'rock') {
        mgs = 'Player 2 won!';
        return mgs;
    } else if (p1 == 'scissors' && p2 == 'scissors') {
        return mgs;
    } else if (p1 == 'paper' && p2 == 'rock') {
        mgs = 'Player 1 won!';
        return mgs;
    } else if (p1 == 'paper' && p2 == 'scissors') {
        mgs = 'Player 2 won!';
        return mgs;
    } else if (p1 == 'paper' && p2 == 'paper') {
        return mgs;
    } else if (p1 == 'rock' && p2 == 'rock') {
        return mgs;
    } else if (p1 == 'rock' && p2 == 'scissors') {
        mgs = 'Player 1 won!';
        return mgs;
    } else if (p1 == 'rock' && p2 == 'paper') {
        mgs = 'Player 2 won!';
        return mgs;
    }
};


// Best practices
const rpsBest = (p1, p2) => {
    if (p1 === p2) {
        return "Draw!";
    }
    const rules = {rock: "scissors", paper: "rock", scissors: "paper"};
    if (p2 === rules[p1]) {
        return "Player 1 won!";
    } else {
        return "Player 2 won!";
    }
};