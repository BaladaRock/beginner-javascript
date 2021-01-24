const width = 500;
const localPicture = `./P7060173.JPG`;
const webPicture = `https://picsum.photos/${width}`;
const text = "SCUBA crab";
const xssClass = "inserted-list";

// Inserting a string to DOM via innerHtml property,
// The browser will convert it to the corresponding HTML
const insertedElements = 
`<li class = ${xssClass}; style="list-style: none">
    <ul>
      <img src=${localPicture} alt=${text} width=500</img>
    </ul>
    <ul>
      <p> Hi! This is an inserted element.</p>
    </ul>
    <ul>
      <img src="${webPicture}" alt="random image"/>
    </ul>
</li>
`;

const paragraph = document.querySelector(".items p");
paragraph.innerHTML = insertedElements;

// You can also turn a string into a DOM element, by calling
// createrange() and createContextualFragment()
const htmlFragment = document.createRange().createContextualFragment(insertedElements)
document.body.appendChild(htmlFragment);

console.log(insertedElements);