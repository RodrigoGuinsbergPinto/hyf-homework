let userName = ""; // Rodrigo;
const todoList = [];
let lettersToCount = [];

function getReply(command) {
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

  if (command.includes("Add") && command.includes("to my todo")) {
    const myTodo = command.slice(4, -11);
    todoList.push(myTodo);
    console.log(`${myTodo} added to your todo`);
  }

  if (command.includes("Remove")) {
    const removeFromTodo = command.slice(7, -13);
    for (let i = 0; i < todoList.length; i++) {
      if (todoList[i] === removeFromTodo) {
        todoList.splice(i, 1);
      }
    }
  }

  if (command === "What is on my todo?") {
    for (let i = 0; i < todoList.length; i++) {
      console.log(todoList[i]);
    }
  }
  if (command === "What day is it today?") {
    const today = new Date();
    const day = today.toLocaleString("en-US", { day: "2-digit" });
    const month = today.toLocaleString("en-US", { month: "long" });
    const year = today.toLocaleString("en-US", { year: "numeric" });
    const date = `${day}. of ${month} ${year}`;
    console.log(date);
  }

  if (command.includes("What is") && command.includes("+")) {
    const regex = /\d+/g;
    const result = command.match(regex);
    console.log(Number(result[0]) + Number(result[1]));
  } else if (command.includes("What is") && command.includes("-")) {
    const regex = /\d+/g;
    const result = command.match(regex);
    console.log(Number(result[0]) - Number(result[1]));
  } else if (command.includes("What is") && command.includes("*")) {
    const regex = /\d+/g;
    const result = command.match(regex);
    console.log(Number(result[0]) * Number(result[1]));
  } else if (command.includes("What is") && command.includes("/")) {
    const regex = /\d+/g;
    const result = command.match(regex);
    console.log(Number(result[0]) / Number(result[1]));
  }

  if (command.includes("Set a timer for")) {
    const regexTime = /\d+/;
    const timeToBeSet = command.match(regexTime);
    console.log(`Timer set for ${timeToBeSet} minutes. ⌛`);
    setTimeout(function () {
      console.log(`Time done.`);
    }, timeToBeSet * 60000);
  }

  if (command.includes("How many letters")) {
    const words = command.split(" ");
    for (let i = 7; i < words.length; i++) {
      const capturedWords = words[i];
      lettersToCount.push(capturedWords);
    }

    const letters = lettersToCount.toString();
    const totalLetters = letters.match(/\w/g).length;
    console.log(`There are "${totalLetters}" letters in your sentence.`);
  }
}

getReply("Hello my name is Rodrigo");
// getReply("Hello my name is Rodrigo");
getReply("What is my name?");
getReply("Add fishing to my todo");
getReply("Add singing in the shower to my todo");
// getReply("Remove fishing from my todo");
// console.log(todoList);
getReply("What is on my todo?");
getReply("What day is it today?");
getReply("What is 2 + 2?");
getReply("What is 7 - 2?");
getReply("What is 7 * 7");
getReply("What is 30 / 3?");
// getReply("Set a timer for 2 minutes?");
getReply("How many letters are in the sentence: What is your name?");
