// Exercise 2.1
const arrayOfFunctions = [function1, function2, function3];

function function1() {
  console.log("Message from function1.");
}

function function2() {
  console.log("Message from function2.");
}

function function3() {
  console.log("Message from function2.");
}

arrayOfFunctions.forEach((arrayOfFunction) => {
  arrayOfFunction();
});

// Exercise 2.2
const functionAsConst = () => {
  console.log("Function created as a const.");
};
functionAsConst();

function functionWithKeyword() {
  console.log("Function created with keyworkd 'function'.");
}
functionWithKeyword();

// Exercise 2.3
const keyFunction = () => {
  console.log("This is a object as a function.");
};

const functionWithKeyFunction = { key: keyFunction };

functionWithKeyFunction.key();
