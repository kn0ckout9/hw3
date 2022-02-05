/* Tutorial 4
   Example 2 JavaScript code
*/

let day = prompt("Enter a day of week (sun, mon, tue, wed, thu, fri, or sat)");
console.log(`You entered: ${day}`);

switch (day) {
   case "sun":
     console.log("The next day is: mon");
     break;
   case "mon":
      console.log("The next day is: tues");
      break;
   case "tues":
      console.log("The next day is: wed");
      break;
   case "wed":
         console.log("The next day is: thu");
         break;
   case "thu":
         console.log("The next day is: fri");
         break;
   case "fri":
         console.log("The next day is: sat");
         break;
   case "sat":
      console.log("The next day is: sun");
      break;
   }