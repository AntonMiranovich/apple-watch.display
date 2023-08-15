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
  let realTimeDate = realDate.getDate() < 10 ? "0" + realDate.getDate() : realDate.getDate();
  let realTimeMonth = realDate.getUTCMonth()+1 < 10 ? "0" +( realDate.getUTCMonth()+1) : realDate.getUTCMonth()+1;
  let realTimeEars = realDate.getFullYear() < 10 ? "0" + realDate.getFullYear() : realDate.getFullYear();
  date.innerHTML = `${realTimeDate}.${realTimeMonth}.${realTimeEars}`;
}
setInterval(checkDate, 10000);
