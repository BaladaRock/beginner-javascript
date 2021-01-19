// Classic, using 'fucntion' keyword definition
function calculateAge(dateOfBirth, currentDate){
  return currentDate - dateOfBirth;
}

// Anonymous functions
//let fact = (integer) => factorial(integer); 
let fact = (integer) => integer == 1 || integer * fact(integer - 1); 

function factorial(number){
    return number == 1 
      ? 1
      : number * factorial(number - 1);
}

const add = (a, b = 3) => a + b;

//Return an object

function buildCar(brand, model){
    const car = {
        name: `${brand}`,
        model: `${model}`
    }
    return car;
}

const car = (brand, model) => ({name: `${brand}`, model: `${model}`});

//Methods

const student = {
    name: "Andrei",
    grade: 10,

    // Long version method declaration
    calculateAverage: function(grade){
        return `Your average is: ${grade}`;
    },

    // Shorter version
    getAverage(){
        return `Your average is: ${grade}`;
    },

    //Anonymous version
    calcAverage: (grade) => `Your average is: ${grade}`
}

//Events
const button = document.querySelector('.clickMe');
button.addEventListener("click", () => button.innerHTML = "Hey, it's changed!");
