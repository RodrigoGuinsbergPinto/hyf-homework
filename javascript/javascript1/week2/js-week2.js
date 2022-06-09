// //////   FLIGHT BOOKING FULLNAME FUNCTION     ///////
////////////////////////////////////////////////////////

function getFullname(firstname, surname, useFormalName, gender) {
    if (gender == false && useFormalName == true) { // I believe in this case it should also be a 'checked selector' for gender.
        return `Lady ${firstname} ${surname}`;
    } else if (useFormalName == true) {
        return `Lord ${firstname} ${surname}`;
    } else if (firstname == "" || surname == "") {
      alert(`PLEASE ENTER YOUR FULL NAME!`)
        return `PLEASE ENTER YOUR FULL NAME!`;
    } else {
        return `${firstname} ${surname}`;
    }
    }
   
const fullname1 = getFullname('Frederik', 'Christian', true, true);
const fullname2 = getFullname('Mary', 'Donaldson', true, false);
const fullname3 = getFullname('Joachim','Christian', false, true);
const fullname4 = getFullname('Marie', 'Odile', false, false);

console.log(fullname1);
console.log(fullname2);
console.log(fullname3);
console.log(fullname4);


////////////////////////////////////////////////////////////////////
///////////////////       EVENT APLICATION      ////////////////////
////////////////////////////////////////////////////////////////////

//This was only possible with the help of @Adrian Bordinc through #zendesk-studyroom.

const weekdays = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];

function getEventWeekday(daysToEvent) {
  const currentDate = new Date();
  const currentDay = currentDate.getDay();
  const eventDay = currentDay + daysToEvent;
  const dayIndex = eventDay % 7; // or (eventDay % weekdays.length)
  console.log(`The event will take place on ${weekdays[dayIndex]}.`)
  // return weekdays[dayIndex]; // Should I keep this line?
 }
getEventWeekday(2);


////////////////////////////////////////////////////////////////////
/////////////////////       WEATHER WEAR      //////////////////////
////////////////////////////////////////////////////////////////////

function whatToWear(temperature) {
    if (temperature < 10) {
        console.log(`Wear a very warm jacket.`);
    } else if (temperature < 20) {
        console.log(`Wear a light jacket.`);
    } else if (temperature < 30) {
        console.log(`It's time for shorts and a t-shirt.`);
    } else {
        console.log(`Get your flip-flops on and go to the beach!`);
    }
}
whatToWear(15);


////////////////////////////////////////////////////////////////////
///////////////////       STUDENT MANAGER       ////////////////////
////////////////////////////////////////////////////////////////////

const class07Students = [];

function addStudentToClass(studentName) {
  if (studentName === 'Queen' && !class07Students.includes(studentName)){
    class07Students.push(studentName);
  } else if (class07Students.length >= 6) {
      alert(`Cannot add more students to class07!`);
  } else if (class07Students.includes(studentName)) {
      alert(`Student ${studentName} is already in class!`);
  } else if (studentName === '' || studentName === undefined) {
      alert(`Please enter a valid name!`)
  } else {
    class07Students.push(studentName)
  }
}

addStudentToClass('Mario');
addStudentToClass('Luigi');
addStudentToClass('Peach');
addStudentToClass('Yoshi');
addStudentToClass('Toad');
addStudentToClass('Bowser');
addStudentToClass('Queen');


console.log(class07Students);


function getNumberOfStudents(totalStudents) {
  console.log(`There are ${totalStudents} students in class07.`);
  }

getNumberOfStudents(class07Students.length);


////////////////////////////////////////////////////////////////////
/////////////////////       CANDY PRICE       //////////////////////
////////////////////////////////////////////////////////////////////

const boughtCandyPrices = []

function addCandy(candyType, weight) {
  if (candyType === 'sweet') {
    return boughtCandyPrices.push(weight * 0.5);
  } else if (candyType === 'chocolate') {
    return boughtCandyPrices.push(weight * 0.7);
  } else if (candyType === 'toffee') {
    return boughtCandyPrices.push(weight * 1.1);
  } else if (candyType === 'chewing-gum') {
    return boughtCandyPrices.push(weight * 0.03);
  } else {
    console.log(`Sorry, we don't have ${candyType}`);
  }
}

const candyForRodrigo = addCandy('sweet', 100);
const candyForMarcos = addCandy('chocolate', 150);
const candyForJohn = addCandy('toffee', 200);
const candyForMary = addCandy('chewing-gum', 250);
const candyForThomas = addCandy('skumfiduser', 100);

console.log(boughtCandyPrices);



const amountToSpend = Math.floor(Math.random() * 100);
// I can't get this to work.
function canBuyMoreCandy() {
    let total = 0;
    for(let i = 0; i < boughtCandyPrices.length; i++) {
    if (total <= amountToSpend) {
    console.log(`You can buy more, so please do!`);
  } else {
    console.log(`Enough candy for you!`);
  }
}
}

