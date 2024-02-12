// event handling

// jab bhi aap kisi element par kisi bhi prakaar ka koi action krte ho to whaa par event by default automatically raise hota hai ab agar aapne koi event listener nahi banaya hai toh wo event ignore krdiya jaata hai par agar listener banaya hai us event par to wo event ignore nahi kiya jaayega balki uska listener chalega

var btn = document.querySelector("button");

btn.addEventListener("click", (e) => {
console.log(e);
console.log("clicked");

  btn.textContent = "starting";
  btn.style.backgroundColor = "red";
});

btn.addEventListener("mouseover", (e) => {
  btn.textContent = "starting";
  btn.style.backgroundColor = "red";
});

btn.addEventListener("mouseleave", (e) => {
  btn.textContent = "click Me";
  btn.style.backgroundColor = "#fff";
});

// event Object 
var body = document.querySelector("body");
var box = document.querySelector(".box");

body.addEventListener("mousemove", (e) => {
  // console.log(e.clientX);
  // console.log(e.clientY);

  box.style.width = "50px";
  box.style.height = "50px";
  box.style.borderRadius = "50%";
  
  box.style.position = "absolute";

  box.style.left = e.clientX;
  box.style.right = e.clientY;
  box.style.backgroundColor = "red";
});