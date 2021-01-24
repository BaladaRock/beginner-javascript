const dog = "Ricky";

function getDog(){
  console.log(dog);
}

function callDog(){
  const dog = "Daisy";
  getDog();
}

callDog();