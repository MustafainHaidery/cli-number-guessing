#! \usr\bin\env node

import inquirer from "inquirer";

// 1) computer will generate a random number

// 2) user input for guessing number

// 3) compare user input with computer gennerated number and show result


const randomNumber = Math.floor(Math.random() * 10 + 1);
// console.log(randomNumber);

const answers = await inquirer.prompt([
    {
        name: "userGuessedNumber",
        type: "number",
        message: "please guess a number between 1-10:",
    },
]);

if(answers.userGuessedNumber === randomNumber){
    console.log("Congratulations! you gussed right number.")
}else {
    console.log("You guessed wrong number");

}
console.log(answers);
