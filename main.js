// This program prompts the user for a number and will tell them if it is even or odd
const readline = require('readline-sync');

console.log("Welcome to the Even or Odd Checker Program!");

do {
    let numberInput = readline.questionInt("Enter a number and I'll tell you if it's even or odd: ");
    
    if (numberInput % 2 === 0) {
        console.log(`${numberInput} is even.`);
    } else {
        console.log(`${numberInput} is odd.`);
    }

    let continueChoice = readline.question("Would you like to choose another number (yes/no)? ");
    cleanContinueChoice = continueChoice.toLowerCase();

} while (cleanContinueChoice != 'no');

console.log("Thanks for playing!");