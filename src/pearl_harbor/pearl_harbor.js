import './pearl_harbor.css';

let location1 = 3;
let location2 = 4;
let location3 = 5;
let guess;
let hits = 0;
let guesses = 0;
let isSunk = false;

while (isSunk == false) {
    guess = prompt("Ready, aim, fire! (enter a number 0-6):");
    if (guess < 0 || guess > 6){
        alert('Please, enter a valid cell number');
    }
    else {
        guesses = guesses + 1;
    }
}
