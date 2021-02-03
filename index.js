const inquirer = require("inquirer");
const fs = require("fs");
const engineer = require ("./lib/engineer");
const employee = require ("./lib/employee");
const intern = require ("./lib/intern");
const manager = require ("./lib/manager");

// const generateMarkdown = require("./utils/generateMarkdown.js");
// // TODO: Create an array of questions for user input
// const questions = [
//   {
//     type: "confirm",
//     name: "start",
//     message:
//       "This will generate a README file after you enter some information",
  },
   {
    type: "prompt", //EE name
    name: "name",
    message: "Enter team member's name",
  },
  {
    type: "list", //EE role
    name: "role",
    message: "Select team member's role",
    choices:  ["Engineer", "Intern", "Manager", "Employee"],
  },
  {
    type: "input",
    name: "id",
    message: "Enter team member's ID",
  
  },
  {
    type: "input",
    name: "email",
    message: "Enter team member's email address",
  },
  {
    type: "input",
    name: "title",
    message: "Application Title:",
  },  
];

function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) => {
    if (err) new Error(err);
    console.log("Perfect");
  });
}
// TODO: Create a function to initialize app
function init() {
  inquirer
    .prompt(questions)
    .then((answers) => {
      writeToFile("test.md", generateMarkdown(answers));
    })
    .catch((err) => console.log(err));
}

// Function call to initialize app
init();
