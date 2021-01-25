// a function responsible for decreasing font-size
function makeSmaller(event){
  const newFontSize = parseFloat(getComputedStyle(event.currentTarget).fontSize) - 1;
  event.currentTarget.style.fontSize = `${newFontSize}px`;
}

function addMakeSmaller(button){
    button.addEventListener('click', makeSmaller);
  }

// add and remove event to an element
const firstButton = document.querySelector('.btn');
// anonymous function
/*firstButton.addEventListener('click', function(event)
{
  const newFontSize = parseFloat(getComputedStyle(event.currentTarget).fontSize) - 1;
  event.currentTarget.style.fontSize = `${newFontSize}px`;
});*/
firstButton.addEventListener('click', makeSmaller);
firstButton.removeEventListener('click', makeSmaller);

// add event for all buttons
const buttons = document.querySelectorAll('.btn');
//buttons.forEach(button => button.addEventListener('click', makeSmaller));
buttons.forEach(addMakeSmaller);