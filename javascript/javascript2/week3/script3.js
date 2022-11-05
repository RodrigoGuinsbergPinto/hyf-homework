const btnStart = document.querySelector("button");
const input = document.querySelector("input");

let countL = 0;
let countS = 0;

const lScore = document.getElementById("l-key");
lScore.innerHTML = 0;

const sScore = document.getElementById("s-key");
sScore.innerHTML = 0;

let timeIsUp = true;

btnStart.addEventListener("click", () => {
  timeIsUp = false;
  const seconds = input.value;
  startGame();

  if (seconds === "") {
    alert("Please set time!");
  } else {
    setTimeout(() => {
      const gameOver = document.getElementById("game-over");
      gameOver.innerHTML = "Game Over!";

      if (countS > countL) {
        const sWins = document.getElementById("s-winner");
        sWins.innerHTML = `S wins by ${countS - countL} points 🏆`;
        sWins.style.backgroundColor = "yellow";
        const boxS = document.getElementById("s-box");
        boxS.style.backgroundColor = "yellow";
      } else if (countL > countS) {
        const lWins = document.getElementById("l-winner");
        lWins.innerHTML = `L wins by ${countL - countS} points 🏆`;
        lWins.style.backgroundColor = "yellow";
        const boxL = document.getElementById("l-box");
        boxL.style.backgroundColor = "yellow";
      } else {
        const draw = document.getElementById("draw");
        draw.innerHTML = "It is a draw. No one wins. ";
        draw.style.backgroundColor = "yellow";
      }

      timeIsUp = true;
    }, seconds * 1000);
  }
});

function startGame() {
  document.addEventListener("keyup", (e) => {
    if (!timeIsUp) {
      const keyPressed = e.key;

      if (keyPressed === "s") {
        countS++;
        sScore.innerHTML = countS;
      } else if (keyPressed === "l") {
        countL++;
        lScore.innerHTML = countL;
      }
    }
  });
}
