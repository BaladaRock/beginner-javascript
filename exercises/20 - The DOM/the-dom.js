const heading = document.querySelector('h2');
console.dir(heading);

console.log(heading.innerText);
console.log(heading.textContent);

const pizza = document.querySelector('.pizza');
console.log(pizza.textContent);
pizza.insertAdjacentText("beforeend", "🍕");
pizza.insertAdjacentText("beforeend", "🍕");

const image = document.querySelector('.transition');
image.classList.toggle('round');
console.log(image.classList);

image.addEventListener('click', transition(image));

function transition(image) {
    return function(){
         return image.classList.toggle('round')};
}