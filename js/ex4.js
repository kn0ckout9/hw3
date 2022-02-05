let pass = prompt("Enter password:");

if (pass == "secret") {
    // Code to run when the condition is true
    console.log(`You entered the correct password after 1 attempt(s)`)
}
else {
    // Code to run when the condition is false
    console.log("Try again. You get 3 tries total.")
    let i = 1;
    while (i <= 2) {
        let pass = prompt("Enter password:");
        i++;
        if (i == 3) {
            console.log(`Your account is locked!  You failed to enter the correct password ${i} times`);
        }
        if (pass == "secret") {
            // Code to run when the condition is true
            console.log(`You entered the correct password after ${i} attempt(s)`)
            break;
        }
    }
}


