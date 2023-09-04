// const clock = document.querySelector(".time");
// function time() {
//   let date = new Date();
//   let hours = date.getHours() < 10 ? "0" + date.getHours() : date.getHours();
//   let minutes = date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes();
//   let seconds = date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds();
//   clock.innerHTML = `${hours}:${minutes}:${seconds}`;
// }
// setInterval(time, 1000);

// const date = document.querySelector(".data");
// function checkDate() {
//   let realDate = new Date();
//     date.innerHTML = realDate.getFullYear().toString();
// }
// setInterval(checkDate, 1000);

class Watch {
  constructor(){
    setInterval(this.time, 1000);
    setInterval(this.checkDate, 1000);
  }

  time() {
    let clock = document.querySelector(".time");
    let date = new Date();
    let hours = date.getHours() < 10 ? "0" + date.getHours() : date.getHours();
    let minutes =
      date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes();
    let seconds =
      date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds();
    clock.innerHTML = hours+':'+minutes+':'+seconds
  }

  checkDate() {
    let date = document.querySelector(".data");
    let realDate = new Date();
    date.innerHTML = realDate.getFullYear().toString();
  }
}

const watch = new Watch();



// class Watch {

//   time() {
//     let date = new Date();
//     let hours = date.getHours() < 10 ? "0" + date.getHours() : date.getHours();
//     let minutes =
//       date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes();
//     let seconds =
//       date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds();
//     let clockIn = hours+':'+minutes+':'+seconds
//   }


//   checkDate() {
//     let realDate = new Date();
//     this.date.innerHTML = realDate.getFullYear().toString();
//   }
// }

// const watch = new Watch();
// clock = document.querySelector(".time");
// date = document.querySelector(".data");
