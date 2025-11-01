// function showTime() {
//   let date = new Date();
//   let h = date.getHours(); // 0 - 23
//   let m = date.getMinutes(); // 0 - 59
//   let s = date.getSeconds(); // 0 - 59
//   let session = "AM";

//   if (h == 0) {
//     h = 12;
//   }

//   if (h > 12) {
//     h = h - 12;
//     session = "PM";
//   }

//   h = h < 10 ? "0" + h : h;
//   m = m < 10 ? "0" + m : m;
//   s = s < 10 ? "0" + s : s;

//   let time = h + ":" + m + ":" + s + " " + session;
//   document.getElementById("clock").innerText = time;
//   document.getElementById("clock").textContent = time;

//   setTimeout(showTime, 1000);
// }

// showTime();
// ---------------------------
let myh1 = document.getElementById("clock");
let myh2 = document.getElementById("date");

setInterval(() => {
  let time = new Date();
  (myh1.textContent =
    +time.getDay() +
    "+" +
    time.getDate() +
    +":" +
    time.getMonth() +
    +":" +
    time.getFullYear() +
    "Time-" +
    time.getHours() +
    ":" +
    time.getMinutes() +
    ":" +
    time.getSeconds()),
    1000;
});
