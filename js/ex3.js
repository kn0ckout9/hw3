// ex 3 js

let num1 = Number(prompt("Enter num1:"));
let num2 = Number(prompt("Enter num2:"));


if (isNaN(num1) || isNaN(num2)) {
    // Code to run when the condition is true
    console.log("Invalid input. Error.");
  }
  else {
    // Code to run when the condition is false
    console.log(`Addition: `, num1+num2);
    console.log(`Subtraction: `, num1-num2);
    console.log(`Multiplication: `, num1*num2);
    console.log(`Division: `, num1/num2);
    console.log(`Modulo: `, num1%num2);
  }
