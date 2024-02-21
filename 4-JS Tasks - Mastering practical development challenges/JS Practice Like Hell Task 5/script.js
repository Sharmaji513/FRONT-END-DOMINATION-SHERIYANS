// Build a countdown timer that starts when a button is clicked and updates the display in real-time.

var span = document.querySelector("span");
var startBtn = document.querySelector(".start");
var stopBtn = document.querySelector(".stop");
var restartBtn = document.querySelector(".restart");
var count = 0;
var id;

startBtn.addEventListener("click", () => {
  // var count = 0;
  id = setInterval(() => {
    span.textContent = count;
  
    count++;
  }, 1000);
});

stopBtn.addEventListener("click", () => {
  clearInterval(id);
});

restartBtn.addEventListener("click", () => {
  count = 0;
  span.textContent = count;
  clearInterval(id);
});
