let userName = ""; // Rodrigo;
const todoList = [];
let lettersToCount = [];

function getName(command) {
  if (command == " " || typeof command !== "string") {
    alert(`command is not a string`);
  }

  if (command.includes("Hello my name is")) {
    const arrayOfInputString = command.split(" ");
    let savedName = arrayOfInputString[4];
    if (savedName === userName) {
      console.log("We met before");
    } else {
      userName = savedName;
      console.log(`Nice to meet you ${savedName}`);
    }
  }

  if (command.includes("What is my name") && userName === "") {
    console.log("You did not tell me your name");
  } else if (command.includes("What is my name")) {
    console.log(`Your name is ${userName}`);
  }
}
getName("Hello my name is Rodrigo");
// getName("Hello my name is Rodrigo");
getName("What is my name?");

function addToDo(command) {
  if (command.includes("Add") && command.includes("to my todo")) {
    const myTodo = command.slice(4, -11);
    todoList.push(myTodo);
    console.log(`${myTodo} added to your todo`);
  }

  if (command === "What is on my todo?") {
    for (let i = 0; i < todoList.length; i++) {
      console.log(todoList[i]);
    }
  }
}
addToDo("Add fishing to my todo");
addToDo("Add singing in the shower to my todo");

// console.log(todoList);
addToDo("What is on my todo?");

function removeToDo(toDo) {
  if (toDo.includes("Remove")) {
    const removeFromTodo = toDo.slice(7, -13);
    for (let i = 0; i < todoList.length; i++) {
      if (todoList[i] === removeFromTodo) {
        todoList.splice(i, 1);
      }
    }
  }
}
removeToDo("Remove fishing from my todo");
// console.log(todoList);

function whatDayIsItToday(date) {
  if (date === "What day is it today?") {
    const today = new Date();
    const day = today.toLocaleString("en-US", { day: "2-digit" });
    const month = today.toLocaleString("en-US", { month: "long" });
    const year = today.toLocaleString("en-US", { year: "numeric" });
    const date = `${day}. of ${month} ${year}`;
    console.log(date);
  }
}
whatDayIsItToday("What day is it today?");

function setATimeFor(time) {
  if (time.includes("Set a timer for")) {
    const regexTime = /\d+/;
    const timeToBeSet = time.match(regexTime);
    console.log(`Timer set for ${timeToBeSet} minutes. ⌛`);
    setTimeout(function () {
      console.log(`Time done.`);
    }, timeToBeSet * 60000);
  }
}
// setATimeFor("Set a timer for 1 minutes?");

function countLetters(sentence) {
  if (sentence.includes("How many letters")) {
    const words = sentence.split(" ");
    for (let i = 7; i < words.length; i++) {
      const capturedWords = words[i];
      lettersToCount.push(capturedWords);
    }

    const letters = lettersToCount.toString();
    const totalLetters = letters.match(/\w/g).length;
    console.log(`There are "${totalLetters}" letters in your sentence.`);
  }
}
countLetters("How many letters are in the sentence: What is your name?");

function getCalc(command) {
  if (
    (command.includes("What is") && command.includes("+")) ||
    command.includes("-") ||
    command.includes("*") ||
    command.includes("/")
  ) {
    const nonLetters = /[^A-Za-z?]/g;
    const myResult = command.match(nonLetters);

    console.log(eval(myResult.join("")));
  }
}
getCalc("What is 3 + 2?");
// getCalc("What is 7 - 3?");
// getCalc("What is 7 * 7?");
// getCalc("What is 30 / 3?");
