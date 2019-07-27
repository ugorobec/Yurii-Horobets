import './pearl_harbor.css';

let randomLoc =  Math.floor((Math.random() * 5));
let location1 = randomLoc;
let location2 = location1 + 1;
let location3 = location2 + 1;
let guess;
let hits = 0;
let guesses = 0;
let isSunk = false;
console.log(location1);


while (isSunk == false) {
   
    guess = prompt("Заряжаю! (введите клетку от 0 до 6):");
    if (guess < 0 || guess > 6){
        alert('Please, enter a valid cell number');
    } 
    else {
        guesses = guesses + 1;
        if (guess == location1 || guess == location2 || guess == location3) {
            alert('Попадание!');
            hits = hits + 1;
            if (hits == 3) {
                isSunk = true;
                alert('Вы уничтожили корабль');
                }
                
        } else {
            alert('Промазал!');
        }
    }
}
    let stat = ('Вы уничтожили корабль с ' + guesses + ' попыток');
    alert(stat);  

