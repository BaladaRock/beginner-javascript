console.log("Traversing");

const removable = document.createElement(`p`);
removable.textContent = `Hi! I will be removed`;

document.body.appendChild(removable);
document.body.removeChild(removable);
document.body.appendChild(removable);
document.body.removeChild(removable);