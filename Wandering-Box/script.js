document.getElementsByClassName("btn")[0].addEventListener("click", () => {
  document.getElementsByClassName("homepage")[0].style.display = "none";
  document.getElementsByClassName("gamepage")[0].style.display = "flex";
  document.getElementsByClassName("gameBtn")[0].style.display = "flex";
  score = 0;
  timer = 0;
  counting = 5;
  gameStart = false;
});

let gameStart = false;
let score = 0;
let timer = 0;
let counting = 5;
const box = document.querySelector(".gameBox");
let timerInt;

document
  .getElementsByClassName("gameCont")[0]
  .addEventListener("click", (e) => {
    if (gameStart == false) {
      return;
    } else {
      if (e.target == box) {
        score += 1;
        document.getElementsByClassName("score_countdown")[0].innerHTML = score;
      } else {
        document.getElementsByClassName("scorepage")[0].style.display = "flex";
        document.getElementsByClassName("gamepage")[0].style.display = "none";
        document.getElementsByClassName("timer_countdown")[0].innerHTML = 0;
        document.getElementsByClassName("score_countdown")[0].innerHTML = 0;
        document.getElementsByClassName("overCounter")[0].innerHTML = 5;
        clearInterval(timerInt);
        counting -= 1;
        const intervalid = setInterval(() => {
          document.getElementsByClassName("overCounter")[0].innerHTML =
            counting;
          counting -= 1;
        }, 1000);
        document.getElementsByClassName("scoreDisplay")[0].innerHTML = score;
        setTimeout(() => {
          clearInterval(intervalid);
          document.getElementsByClassName("homepage")[0].style.display = "flex";
          document.getElementsByClassName("scorepage")[0].style.display =
            "none";
          let x = 0;
          let y = 0;
          document.getElementsByClassName("gameBox")[0].style.left = `${x}px`;
          document.getElementsByClassName("gameBox")[0].style.top = `${y}px`;
        }, 5000);
      }
    }
  });
document
  .getElementsByClassName("gameBox")[0]
  .addEventListener("mouseenter", () => {
    if (gameStart == false) {
      return;
    } else {
      setTimeout(() => {
        let x = Math.floor(Math.random() * (507 - 0 + 1)) + 0;
        let y = Math.floor(Math.random() * (607 - 0 + 1)) + 0;
        document.getElementsByClassName("gameBox")[0].style.left = `${x}px`;
        document.getElementsByClassName("gameBox")[0].style.top = `${y}px`;
      }, 200);
    }
  });

document.getElementById("gameBtn").addEventListener("click", () => {
  gameStart = true;
  timer = 1;
  timerInt = setInterval(() => {
    document.getElementsByClassName("timer_countdown")[0].innerHTML = timer;
    timer += 1;
  }, 1000);
  let x = Math.floor(Math.random() * (507 - 0 + 1)) + 0;
  let y = Math.floor(Math.random() * (607 - 0 + 1)) + 0;
  document.getElementsByClassName("gameBox")[0].style.left = `${x}px`;
  document.getElementsByClassName("gameBox")[0].style.top = `${y}px`;
  document.getElementsByClassName("gameBtn")[0].style.display = "none";
});
