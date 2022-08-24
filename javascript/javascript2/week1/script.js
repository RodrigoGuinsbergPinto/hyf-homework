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

function findDanishLetters(sentence) {
  const danishLetters = {};
  const lettersArray = sentence.split("");

  let countÆ = 0;
  let countØ = 0;
  let countÅ = 0;

  for (let i = 0; i < lettersArray.length; i++) {
    if (lettersArray[i] === "æ" || lettersArray[i] === "Æ") {
      countÆ++;
    } else if (lettersArray[i] === "ø" || lettersArray[i] === "Ø") {
      countØ++;
    } else if (lettersArray[i] === "å" || lettersArray[i] === "Å") {
      countÅ++;
    }
  }

  const totalDanishLetters = countÆ + countØ + countÅ;
  if (totalDanishLetters === 0) {
    return `No danish letters found!`; // Implementation for string without Danish letters or empty string.
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
    return danishLetters;
  }
}

console.log(findDanishLetters(danishString2));

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

mainBtn.addEventListener("click", function () {
  const savedName = nameInput.value;
  const h3 = document.createElement("h3");
  const newRandomAnimal = spiritAnimalStrings[Math.trunc(Math.random() * 10)];

  if (nameInput.value === "") {
    alert(`Please type your name!`);
  } else if (mainBtn.innerHTML === "Get Animal") {
    document.body.appendChild(h3);
    h3.innerHTML = nameInput.value + " - " + randomAnimal;
    mainBtn.innerHTML = "Get New Spirit Animal";
    mainBtn.style.background = "lightblue";
  } else {
    document.body.appendChild(h3);
    h3.innerHTML = nameInput.value + " - " + newRandomAnimal;
  }
});
