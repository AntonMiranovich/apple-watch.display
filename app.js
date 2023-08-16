const clock = document.querySelector(".time");
function time() {
  let date = new Date();
  let hours = date.getHours() < 10 ? "0" + date.getHours() : date.getHours();
  let minutes = date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes();
  let seconds = date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds();
  clock.innerHTML = `${hours}:${minutes}:${seconds}`;
}
setInterval(time, 1000);

const date = document.querySelector(".data");
function checkDate() {
  let realDate = new Date();
    date.innerHTML = realDate.toDateString();
}
setInterval(checkDate, 1000);
