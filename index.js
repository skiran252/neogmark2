const chalk = require('chalk');
const fs = require('fs');
var readlineSync = require("readline-sync");
console.log(chalk.bold.yellow("\n\nTypes of Cyber Attacks Quiz\n\n"));

const username = readlineSync.question("PLEASE ENTER YOUR NAME: ");

let rawdata = fs.readFileSync('questions.json');
let questions = JSON.parse(rawdata).questions;
let score = 0;

questions.forEach((question,i) => {

  console.log("question",i+1,":",question.question);
  question.answers.forEach((answer,j) => {
    console.log(chalk.bold.green("\t\t"+(j+1)+". "+answer));
  });
  const option = readlineSync.question("Enter your choice: ");
  if (option==question.correct) {
    score+=1;
    console.log(chalk.bold.green("\nRIGHT! YOU SCORE 1 POINT\n"));
  } else {
    console.log(chalk.bold.red("\nYOU GOT THIS ONE WRONG\n"));

  }
});

console.log(chalk.magenta("\n\n\t\t\tThank you "+username+" \n\n"));
console.log(chalk.blue("YOU SCORED",score,"/",questions.length,"\n\n"));
