// ex 3 js

let num1 = Number(prompt("Enter hour"));
let num2 = Number(prompt("Enter minute"));
let num3 = Number(prompt("Enter seconds"));


if (isNaN(num1) || isNaN(num2) || isNaN(num3)) {
    // Code to run when the condition is true
    console.log("Invalid input. Error.");
  }
else if (num1 < 0 || num2 < 0 || num3 < 0) {
    // Code to run when the condition is false
    console.log("Invalid input. Error.");
}
else if (num1 > 24 || num2 > 60 || num3 > 60) {
    console.log("Invalid input. Error.");
}
else {
    console.log(`Time input: ${num1}h${num2}m${num3}s`);
}
