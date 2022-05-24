// Smart-ease
// Age-ify (A future age calculator)
const yearOfBirth = 1975;
const yearFuture = 2045;

let age = yearFuture - yearOfBirth;
// console.log(age);

console.log("You will be " + age + " " + "years old in " + yearFuture + ".");



// Goodboy-Oldboy (A dog age calculator)
const dogYearOfBirth = 2020;
const dogYearFuture = 2035;
let dogYear = dogYearFuture - dogYearOfBirth;
let shouldShowResultInDogYears = true;

if (shouldShowResultInDogYears) {
    dogYear = dogYear * 7;
    console.log("Your dog will be " + dogYear + " " + "dog years old in " + dogYearFuture + ".");
}
else {
    console.log("Your dog will be " + dogYear + " " + "human years old in " + dogYearFuture + ".")
}



// House Pricey (A house price calculator)
const peterHouseWidth = 8;
const peterHouseDepth = 10;
const peterHouseHight = 10;
const peterHouseGardenSizeInM2 = 100;

const peterHouseSellingPrice = 2500000;

let volumeInMeters = peterHouseWidth * peterHouseDepth * peterHouseHight;
let peterHouseMarketPrice = volumeInMeters * 2.5 * 1000 + peterHouseGardenSizeInM2 * 300;
// console.log(peterHouseMarketPrice);

if (peterHouseSellingPrice < peterHouseMarketPrice) {
    console.log("Peter is paying a good price for the new house!")
}
else {
    console.log("Peter is paying too much for the new house!")
}

const juliaHouseWidth = 5;
const juliaHouseDepth = 11;
const juliaHouseHight = 8;
const juliaHouseGardenSizeInM2 = 70;

const juliaHouseSellingPrice = 1000000;

let juliaHouseVolumeInMeters = juliaHouseWidth * juliaHouseDepth * juliaHouseHight;
let juliaHouseMarketPrice = juliaHouseVolumeInMeters * 2.5 * 1000 + juliaHouseGardenSizeInM2 * 300;
// console.log(juliaHouseMarketPrice);

if (juliaHouseSellingPrice < juliaHouseMarketPrice) {
    console.log("Julia is paying a good price for the new house!")
}
else {
    console.log("Julia is paying too much for the new house!")
}



// Ez Namey (Startup name generator) 
const firstWords = ["Easy", "Awesome", "Corporate", "Start", "The Best", "Future", "Great", "Tech", "Professional", "Fractal"];
const secondWords = [" For you", " Solutions", " Now", " Innovations", " Choice", " Way", " Data", " Treasure", " Pixel", " Digital"];

const randomNumber = Math.floor(Math.random() * 10);

let startupName = firstWords[randomNumber] + secondWords[randomNumber];
// console.log(startupName);

console.log('The startup name: ' + startupName + ' contains ' + startupName.length + ' caracters.')





