// FLIGHT BOOKING FULLNAME FUNCTION

function getFullname(firstname, surname, isUsingFormalName, isMale) {
    if (isMale === false && isUsingFormalName === true) {
        return `Lady ${firstname} ${surname}`;
    } else if (isUsingFormalName === true) {
        return `Lord ${firstname} ${surname}`;
    } else if (firstname === "" || surname === "") {
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


// EVENT APLICATION

const weekdays = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];

function getEventWeekday(daysToEvent) {
  const currentDate = new Date();
  const currentDay = currentDate.getDay();
  const eventDay = currentDay + daysToEvent;
  const dayIndex = eventDay % 7; // or (eventDay % weekdays.length)
  console.log(`The event will take place on ${weekdays[dayIndex]}.`)
}
getEventWeekday(2);


// WEATHER WEAR

const whatToWear = function(temperature) {
  switch (true) {
    case temperature < 10:
      console.log(`Wear a very warm jacket.`);
      break;
    case temperature < 20:
      console.log(`Wear a light jacket.`);
      break;
    case temperature < 30:
      console.log(`It's time for shorts and a t-shirt.`);
      break;
    default:
      console.log(`Get your flip-flops on and go to the beach!`);
    }
}
  whatToWear(8);


// STUDENT MANAGER

const class07Students = [];

function addStudentToClass(studentName) {
  switch (true) {
    case studentName === 'Queen' && !class07Students.includes(studentName):
      class07Students.push(studentName);
      break;
    case class07Students.length >= 6:
      alert(`Cannot add more students to class07!`);
      break;
    case class07Students.includes(studentName):
      alert(`Student ${studentName} is already in class!`);
      break;
    case studentName === '' || studentName === undefined:
      alert(`Please enter a valid name!`);
      break;
    default:
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


// CANDY PRICE
// Add Candy Function

const boughtCandyPrices = []

function addCandy(candyType, weight) {
  switch (true) {
    case candyType === 'sweet':
      boughtCandyPrices.push(weight * 0.5);
      break;
    case candyType === 'chocolate':
      boughtCandyPrices.push(weight * 0.7);
      break;
    case candyType === 'toffee':
      boughtCandyPrices.push(weight * 1.1);
      break;
    case candyType === 'chewing-gum':
      boughtCandyPrices.push(weight * 0.03);
      break;
    default:
      console.log(`Sorry, we don't have ${candyType}`);
  }
}

const candyForRodrigo = addCandy('sweet', 100);
const candyForMarcos = addCandy('chocolate', 150);
const candyForJohn = addCandy('toffee', 160);
const candyForMary = addCandy('chewing-gum', 200);
const candyForThomas = addCandy('skumfiduser', 100);

console.log(boughtCandyPrices);



// Can I buy more?
const amountToSpend = Math.floor(Math.random() * 100);
console.log(amountToSpend)
function canBuyMoreCandy() {
  let total = 0;
  for(let i = 0; i < boughtCandyPrices.length; i++) {
    total += boughtCandyPrices[i];
  }

  if (total <= amountToSpend) {
  console.log(`You can buy more, so please do!`);
  } else {
  console.log(`Enough candy for you!`);
  }
}

canBuyMoreCandy(boughtCandyPrices);
