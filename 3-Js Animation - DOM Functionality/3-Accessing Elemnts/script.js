// accessing elements
// ek webpage banao usmein kuch element banao

// selection
// document.querySelector
// document.getElementById
// document.getElementsByClassName
// document.getElementsByTagName

// select & save

var btn = document.querySelector("button");

var heading = document.querySelector("#abcd");

var heading2 = document.querySelector(".abcd");
var heading3 = document.getElementsByTagName("h3");

//Problem=> create two img in html and two h3 and select all of them this way: give first image some id and second image a class, give first h3 a class and select the last h3 with id

var firstImg = document.querySelector("#abcd");
var secondImg = document.querySelector(".abcd");

var firsth3 = document.querySelector(".defg");
var secondh3 = document.querySelector("#defg");

// agar aapke pass bahut saarein h3 hai and aap select karte ho to sirf pehla h3 slect hoga

var heading3 = document.querySelector("h3")

var heading3 = document.querySelectorAll("h3");

console.log(heading3);
