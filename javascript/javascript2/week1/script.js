// Exercise 1 - FIND THE SHORTEST WORD

const danishWords = ["bil", "plante", "kaffe", "bog", "ø", "planetarium"];

let shortestWord = "";

function getShortestWord(array) {
  for (let i = 0; i < array.length; i++) {
    shortestWord = array[0];
    if (array[i].length < shortestWord.length) {
      shortestWord = array[i];
      return shortestWord;
    }
  }
}

console.log(getShortestWord(danishWords));

// FIND AND COUNT THE DANISH LETTERS
const danishString = "Jeg har en blå bil";
const danishString2 = "Blå grød med rød bær";
const danishString3 = "";

let countÆ = 0;
let countØ = 0;
let countÅ = 0;
// let totalDanishLetters = countÆ + countØ + countÅ;

function findDanishLetters(sentence) {
  const lettersArray = sentence.toLowerCase().split("");

  for (let i = 0; i < lettersArray.length; i++) {
    if (lettersArray[i] === "æ") {
      countÆ++;
    } else if (lettersArray[i] === "ø") {
      countØ++;
    } else if (lettersArray[i] === "å") {
      countÅ++;
    }
  }
  return countÆ + countØ + countÅ;
}

function displayDanishLettersFound() {
  const danishLetters = {};

  if (countÆ + countØ + countÅ === 0) {
    console.log(`No danish letters found!`); // Implementation for string without Danish letters or empty string.
  } else {
    danishLetters.total = countÆ + countØ + countÅ;
    if (countÆ > 0) {
      danishLetters.æ = countÆ;
    }
    if (countØ > 0) {
      danishLetters.ø = countØ;
    }
    if (countÅ > 0) {
      danishLetters.å = countÅ;
    }
    console.log(danishLetters);
  }
}

findDanishLetters(danishString2);

displayDanishLettersFound(findDanishLetters);

// Exercise 2 - SPIRIT ANIMAL

const spiritAnimalStrings = [
  "The stealthy condor",
  "The leading tiger",
  "The tough bulldog",
  "The gentle beaver",
  "The friendly penguin",
  "The authentic manakin",
  "The lone wolf",
  "The cold-blooded lizard",
  "The wise elefant",
  "The persistent turtle",
];

const randomAnimal = spiritAnimalStrings[Math.trunc(Math.random() * 10)];

const nameInput = document.createElement("input");
document.body.appendChild(nameInput);

const mainBtn = document.createElement("button");
mainBtn.innerHTML = "Get Animal";
document.body.appendChild(mainBtn);

const generateSpiritAnimal = function () {
  const savedName = nameInput.value;
  const h3 = document.createElement("h3");
  const newRandomAnimal = spiritAnimalStrings[Math.trunc(Math.random() * 10)];

  if (savedName === "") {
    alert(`Please type your name!`);
  } else if (mainBtn.innerHTML === "Get Animal") {
    document.body.appendChild(h3);
    h3.innerHTML = savedName + " - " + randomAnimal;
    mainBtn.innerHTML = "Get New Spirit Animal";
    mainBtn.style.background = "lightblue";
  } else {
    document.body.appendChild(h3);
    h3.innerHTML = savedName + " - " + newRandomAnimal;
  }
};

mainBtn.addEventListener("click", generateSpiritAnimal);
