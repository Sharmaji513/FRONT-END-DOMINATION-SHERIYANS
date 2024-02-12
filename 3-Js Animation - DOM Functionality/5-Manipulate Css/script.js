// Manipulate CSS

var h1 = document.querySelector("h1");

h1.style.color = "red";

var btn = document.querySelector("button");

btn.addEventListener("click", () => {
  h1.style.color = "blue";
  h1.style.fontSize = "50px";

  h1.classList.add("makeitred");
  h1.classList.remove("makeitred");
});

//Create Element

//Example-1
var h2 = document.createElement("h2");
h2.textContent = "Heading 2 with creating element using js";
document.body.append(h2);
// document.body.appendChild(h2);

//Example-2
var img = document.createElement("img");
img.src =
  "https://vz-53036e60-5d9.b-cdn.net/e600d9a7-8240-4135-b021-fff9bdfe7fff/preview.webp";
document.querySelector("body").appendChild(img);
// document.querySelector('body').removeChild(img);
