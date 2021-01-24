// Make a div
const container = document.createElement('div');

// add a class of wrapper to it
container.classList.add('wrapper');

// put it into the body
document.body.appendChild(container);

// make an unordered list
const numbers = document.createElement('ul');

// add three list items with the words "one, two, three" in them
const numbersElements = `
  <li>one</li>
  <li>two</li>
  <li>three</li>
`;
numbers.innerHTML = numbersElements;

// put that list into the above wrapper
container.appendChild(numbers);

// create an image
const insertedImage = document.createElement('img');

// set the source to an image
insertedImage.src = './P7060173.JPG';

// set the width to 250
insertedImage.width = 250;

// add a class of cute
insertedImage.classList.add('cute');

// add an alt of Cute Puppy
insertedImage.alt = 'Cute Puppy';

// Append that image to the wrapper
container.appendChild(insertedImage);

// with HTML string, make a div, with two paragraphs inside of it
const paragraphs = `
  <div>
    <p>Hey! I'm first</p>
    <p>I'm second</p>
  </div>
`;

const texts = document.createElement('div');
texts.innerHTML = paragraphs;

// put this div before the unordered list from above
document.querySelector('ul').insertAdjacentElement('beforebegin', texts);

// add a class to the second paragraph called warning
const second = document.querySelector('div p').nextElementSibling;
second.classList.add('warning');

// remove the first paragraph
second.previousElementSibling.remove();

// create a function called generatePlayerCard that takes in three arguments: name, age, and height
// have that function return html that looks like this:
// <div class="playerCard">
//   <h2>NAME — AGE</h2>
//   <p>They are HEIGHT and AGE years old. In Dog years this person would be AGEINDOGYEARS. That would be a tall dog!</p>
// </div>
function generatePlayerCard(name, age, height) {
    const html = `
  <div class="playerCard">
    <h2>${name} — ${age}</h2>
    <p>They are ${height} cm and ${age} years old. In Dog years this person would be ${age * 7}.
       That would be a tall dog!
    </p>
    <button class="delete" type="button">&times; Delete</button>
  </div>
  `;
  
    return html;
}

// make a new div with a class of cards
const cards = document.createElement('div');
cards.classList.add('cards');

// make 4 player cards using generatePlayerCard
// append those cards to the div
const currentYear = new Date().getFullYear();

function generatePlayerName() {
    let generateRandomName = () => String.fromCharCode(97 + (Math.random() * 25));
    let res = '';
    for (let i = 0; i < Math.ceil(Math.random() * 10 + 3); i++) {
        res += i == 0 ?
            generateRandomName().toUpperCase() :
            generateRandomName();
    };
    return res;
};

let getPlayerAge = (playerIndex) => currentYear - 1996 - playerIndex;
let getPlayerHeight = () => Math.round(Math.random() * (200 - 50) + 50);

let players = '';
for (let i = 0; i < 3; i++) {
    players += generatePlayerCard(generatePlayerName(), getPlayerAge(i), getPlayerHeight());
}

cards.innerHTML = players;

// put the div into the DOM just before the wrapper element
container.insertAdjacentElement("beforebegin", cards);

// Bonus, put a delete Button on each card so when you click it, the whole card is removed
// select all the buttons!
// make out delete function
// loop over them and attach a listener
buttons = document.querySelectorAll('.delete');
buttons.forEach(button => button.addEventListener('click', addDelete));

function addDelete(event){
  const clickedButton = event.currentTarget;
  clickedButton.closest('.playerCard').remove();
}
