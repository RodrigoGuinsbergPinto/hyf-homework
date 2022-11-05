// Ex. 1.1
const myDelay = function () {
  console.log("Called after 2.5 seconds");
};

setTimeout(myDelay, 2500);

// Ex. 1.2
function logString(delay, stringToLog) {
  setTimeout(() => {
    console.log(stringToLog);
  }, delay * 1000);
}

logString(3, "Today is Sunday!");

// Ex. 1.3
const btn5Sec = document.getElementById("5sec");
btn5Sec.textContent = "5 secs delay";

btn5Sec.addEventListener("click", () => {
  logString(5, "Called after 5 seconds.");
});

// Ex. 1.4
const earthLogger = () => console.log("Earth");

const saturnLogger = () => console.log("Saturn");

const planetLogFunction = (functionName) => functionName();

planetLogFunction(earthLogger);
planetLogFunction(saturnLogger);

// Ex. 1.5
function logLocation() {
  const status = document.querySelector("#status");
  const mapLink = document.querySelector("#map-link");

  mapLink.href = "";
  mapLink.textContent = "";

  function success(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;

    status.textContent = "";
    mapLink.href = `https://www.google.com.br/maps/@55.6885554,12.5078936,14z/${latitude}/${longitude}`;
    mapLink.textContent = `Latitude: ${latitude} °, Longitude: ${longitude} °`;
  }

  navigator.geolocation.getCurrentPosition(success);
}

document.querySelector("#location").addEventListener("click", logLocation);

// Ex. 1.7
function runAfterDelay(delay, callback) {
  setTimeout(() => {
    callback();
  }, delay * 1000);
}

runAfterDelay(4, function () {
  console.log("Show this message 4 seconds after the function is called.");
});

// Ex. 1.8
const p = document.querySelector("p");

p.addEventListener("dblclick", (e) => {
  document.querySelector("p").innerHTML = "Double click!";
});

// Ex. 1.9
function jokeCreator(shouldTellFynnyJoke, logFunnyJoke, logBadJoke) {
  if (shouldTellFynnyJoke === true) {
    logFunnyJoke();
  } else {
    logBadJoke();
  }
}

function logFunnyJoke() {
  console.log(
    "Why do birds fly south in the winter? It's faster than walking!"
  );
}

function logBadJoke() {
  console.log("How does the ocean say hi? It waves!");
}

jokeCreator(true, logFunnyJoke, logBadJoke);
