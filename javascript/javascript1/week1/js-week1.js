// Smart-ease
// Age-ify (A future age calculator)
const yearOfBirth = 1975;
const yearFuture = 2045;
const age = yearFuture - yearOfBirth;

console.log(`You will be ${age} years old in ${yearFuture}.`);

// Goodboy-Oldboy (A dog age calculator)
const dogYearOfBirth = 2020;
const dogYearFuture = 2035;
let dogYear = dogYearFuture - dogYearOfBirth;
const shouldShowResultInDogYears = false;

if (shouldShowResultInDogYears) {
    dogYear = dogYear * 7;
    console.log(`Your dog will be ${dogYear} dog years old in ${dogYearFuture}.`)
}
else {
    console.log(`Your dog will be ${dogYear} human years old in ${dogYearFuture}.`)
}


// House Pricey (A house price calculator)
const volumeInMeters = [8*10*10, 5*11*8];
const gardenSizeInM2 = [100, 70];

const peterHouseSellingPrice = 2500000;
const peterHouseMarketPrice = volumeInMeters[0] * 2.5 * 1000 + gardenSizeInM2[0] * 300;

if (peterHouseSellingPrice < peterHouseMarketPrice) {
    console.log("Peter is paying a good price for the new house!")
}
else {
    console.log("Peter is paying too much for the new house!")
}

const juliaHouseSellingPrice = 1000000;
const juliaHouseMarketPrice = volumeInMeters[1] * 2.5 * 1000 + gardenSizeInM2[1] * 300;

if (juliaHouseSellingPrice < juliaHouseMarketPrice) {
    console.log("Julia is paying a good price for the new house!")
}
else {
    console.log("Julia is paying too much for the new house!")
};


// Ez Namey (Startup name generator) 
const firstWords = ["Easy", "Awesome", "Corporate", "Start", "The Best", "Future", "Great", "Tech", "Professional", "Fractal"];
const secondWords = [" For you", " Solutions", " Now", " Innovations", " Choice", " Way", " Data", " Treasure", " Pixel", " Digital"];

const firstRandomNumber = Math.floor(Math.random() * 10);
const secondRandomNumber = Math.floor(Math.random() * 10);

const startupName = firstWords[firstRandomNumber] + secondWords[secondRandomNumber];

console.log(`The startup name: ${startupName} contains ${startupName.length} caracters.`);




