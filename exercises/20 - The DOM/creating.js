const story = document.createElement('p');
story.innerHTML= "Hi! I'm Andrei";
document.body.appendChild(story);
console.log(story);

// DOM exercise:
// create an 'ul' with multiple 'li' children

const cities = document.createElement('ul');
cities.classList.add('cities');

//add the first 2 children
cities.appendChild(createCity("Brasov"));
cities.appendChild(createCity("Sibiu"));

// add element at the bottom of its parent
cities.insertAdjacentElement("beforeend", createCity("Cluj"));

// add element at the top of its parent
cities.insertAdjacentElement("afterbegin", createCity("Timisoara"));

// add element in the middle of its parent
// append second child using 'addBefore()'
cities.insertBefore(
    createCity("Oradea"),
    cities.lastElementChild.previousSibling
);

// Add the list to the DOM
const mainContainer = document.querySelector(".items");
mainContainer.insertBefore(
    cities,
    mainContainer.querySelector(".item")
);

console.log(mainContainer);

function createCity(name){
    let newCity = document.createElement('li');
    newCity.textContent = `${name}`;

    return newCity;
}