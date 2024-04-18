#! /usr/bin/env node
import inquirer from "inquirer";
const UserAns = await inquirer.prompt([
    {
        name: "sentence",
        type: "input",
        message: "Enter Your Sentence To Count The Word:"
    }
]);
const words = UserAns.sentence.trim().split(" ");
console.log(words);
console.log(`Your Sentence Word Count Is: ${words.length}`);
