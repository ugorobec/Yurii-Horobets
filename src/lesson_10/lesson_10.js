import './lesson_10.scss';
const numbers = [];
const btnLogIn = document.querySelector('#btn');
const btnAddNumber = document.querySelector('#addNumberBtn');
const output = document.querySelector('#output');

btnLogIn.onclick = logIn;
btnAddNumber.onclick = addNumber;

function logIn () {
  let userName = prompt();
  while(userName !== 'admin'){
    userName = prompt('Username not found!', '');
  }
  alert('Hello admin');
} 

function calcTotal(numbersArray) {
  let total = 0;
  for(let i = 0; i < numbersArray.length; i++) {
    total = total+ numbersArray[i];
  }
 return total;
}

function print(printString) {
  output.textContent = printString;
}

function addNumber() {
  let number = parseInt(prompt('Enter any number'));
  while(isNaN(number)) {
    number = parseInt(prompt('Enter any number'));
  } 
  numbers.push(number);
  print('Total +' + calcTotal(numbers));
}
function find (array, number) {
    let indexOfNumber = -1;

    for (let i = 0; i < array.length; i++) {
        if (array[i] === number) {
            indexOfNumber = i;
            break;
        }
    } 
    return indexOfNumber;
}

function findMax(array) {
    let maxOfNumber = array[0];
    for (let i = 1; i < array.length; i++) {
        if (array[i] > maxOfNumber) {
            maxOfNumber = array[i];
        }
    }
   return maxOfNumber;
   
}

const salaries = [
  {
    name: 'John',
    salary: 2200
  },
  {
    name: 'Mike',
    salary: 250
  },
  {
    name: 'Alex',
    salary: 2560
  },
  {
    name: 'James',
    salary: 1200
  }
];
​

function findLargestSalary(arr) {
  if (arr[i].salary > arr[0].salary ) {
    return arr[i].salary;
  }
}
​
function calcTotalSalaries(arr) {
  let total = arr[i].salary;
alert(sum(arr[i].salary))
}
​
findLargestSalary(salaries);
calcTotalSalaries(salaries);
Collapse







