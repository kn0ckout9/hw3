/* Tutorial 4
   Example 1 JavaScript code
*/

let FirstName = prompt("Enter your Name");
let NumUnits = Number(prompt("Enter your number of units completed at college"));

console.log(`${NumUnits}`)

if (NumUnits < 0) {
   console.log(`Error. Not a valid number of units`);
 } 
 else if (NumUnits >= 0 && NumUnits <= 30) {
   console.log(`Freshman`);
 } 
 else if (NumUnits > 30 && NumUnits <= 60) {
   console.log(`Sophmore`);
 } 
 else if (NumUnits > 60 && NumUnits <= 90) {
   console.log(`Junior`);
 } 
 else {
   console.log(`Senior`);
 }



