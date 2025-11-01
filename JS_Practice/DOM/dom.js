function f2() {
  alert("You just clicked button");
}

let btn = document.getElementById("heading");
btn.addEventListener("click", () => {
  alert("you again clicked button,have any query do let me know");
});

let para = document.getElementById("para");
para.addEventListener("mouseover", () => {
  para.textContent = "we won the trophy";
});

para.addEventListener("mouseleave", () => {
  para.textContent = "this is comeback";
});
// -----------------------------------------------

let parent = document.getElementById("parent");
// console.log(parent.firstElementChild);

// console.log(parent.nextElementSibling);
// console.log(parent.firstElementChild.nextElementSibling);
// console.log(parent.lastElementChild);

let li = document.createElement("li");
li.textContent = "sixth by js";
// ----------------------getting and setting element----------
let myh3 = document.getElementById("head");
// console.log(myh3.getAttribute("id"))
// console.log(myh3.getAttribute("class"));
// console.log(myh3.getAttribute("src"));

function addcss() {
  myh3.setAttribute("class", "sub");
}
function removecss() {
  myh3.removeAttribute("class");
}

console.log(myh3.hasAttribute("class"));
console.log(myh3.hasAttribute("id"));

// setting css with the help of js
// 1 way to add css
let mydiv = document.getElementById("d1");

// mydiv.setAttribute("style","background-color:navy")
// 2 way to add css
mydiv.style.cssText = "color:orange; background-color:maroon";
// -----------------------focus and blurr-------------------

let input_elm = document.getElementById("txt1");
input_elm.addEventListener("focus", () => {
  input_elm.style.cssText = "background-color:lightblue";
});

input_elm.addEventListener("blur", () => {
  input_elm.style.cssText = "background-color:white";
});

input_elm.addEventListener("change", (e) => {
  console.log(e.target.value);
});

let select = document.getElementById("select");
select.addEventListener("change", (event) => {
  let color = event.target.value;
  document.body.style.cssText = `background-color:${color}`;
});

// window object in js
console.log(window);
alert("Without window object");
window.alert("with window object");

console.log("log without window object");
window.console.log("log with window object");

window.addEventListener("scroll", (e) => {
  console.log(window.pageXOffset);
  console.log(window.pageYOffset);

  if (window.pageYOffset > 500) {
    document.body.style.cssText = "background-color:red";
  } else {
    document.body.style.cssText = "background-color:white";
  }
});

// syntax - window.setTimeout(cancelIdleCallback,timeperiod)
setTimeout(() => {
  alert("Login required");
}, 5000);
// syntax - setInterval(() => {},interval)
let clear_id;
function start() {
  clear_id = setInterval(() => {
    console.log(
      "sing a song.....Threee little monkeys jumping on the bed,one fell down ......"
    );
  }, 2000);
}
function stop() {
  clearInterval(clear_id);
}
clearInterval(set_interval_id);
// Date object in window
let mydate = new Date();
console.log(mydate);
console.log(mydate.getMonth);
console.log(mydate.getFullYear);
console.log(mydate.getDate);
console.log(mydate.getHours);
console.log(mydate.getMinutes);
console.log(mydate.getSeconds);
console.log(mydate.getMilliseconds);
console.log(mydate.getTimezoneOffset);
// This is to set year,month 
mydate.setFullYear(2001);
mydate.setMonth(11)
mydate.setHours(10)
// ----------------------------------------------digital clock---------------------------------------

