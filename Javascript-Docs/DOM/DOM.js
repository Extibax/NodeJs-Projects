let h1 = document.getElementById("title");
let paragraph = document.getElementById("paragraph");
let button = document.getElementById("button");
let paragraphClass = document.getElementsByClassName("lead");

console.log(h1);
console.log(paragraph);
console.log(paragraphClass[0]);

h1.style.color = "red";

function changeColor() {
    paragraph.style.color = "olive";
}

button.onclick = changeColor;
button.addEventListener('click', function() {
    console.log("You clicked me")
});

button.addEventListener('mouseover', function() {
    console.log("You are over me!")
});

button.addEventListener('mouseout', function() {
    console.log("Bye mouse")
});