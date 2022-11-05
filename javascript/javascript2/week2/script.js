// FIND THE SHORTEST WORD

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
