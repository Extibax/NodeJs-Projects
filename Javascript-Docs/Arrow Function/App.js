let greetingID = document.getElementById("greeting");
let additionID = document.getElementById("addition");

/* function greeting(name)
{
    return 'Hello ' + name;
} */

let greeting = name => 'Hello ' + name;
let addition = (num1, num2) => num1 + num2;

greetingID.innerHTML = greeting('Juan Bedoya');
additionID.innerHTML += addition(2, 5);