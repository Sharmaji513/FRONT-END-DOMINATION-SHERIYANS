// Modifying elements
// kisi ko bhi change krne se pehle usko select krna

var btn = document.querySelector("button");

btn.textContent = "Starting..."; // value replace

// btn.textContent += "  Starting..."; // concat with button text

// textContent   &  innerHTML

// textContent = string ki tarah aata hai text

// innerHTMl = tags dhalna chhte ho tab

// var h1 = document.querySelector("h1");
h1.innerHTML += "  <i>Hello</i>";