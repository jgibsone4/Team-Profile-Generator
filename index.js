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
 // },
 function addTeamMember {
   inquirer.prompt([{//EE name
     message: "Enter team member name",
     name: "name",
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
 
 }])
  .then(function({name, role, id, email}) {
      let roleInfo = "";
      if (role === "Engineer") {
          roleInfo = "GitHub username";
      } else if (role === "Intern") {
          roleInfo = "school name";
      } else {
          roleInfo = "office phone number";
      }
      inquirer.prompt([{
          message: `Enter team member's ${roleInfo}`,
          name: "roleInfo"
      },
      {
    type: "list",
    name: "moreMembers",
    message: "Are there additional team member's to add?",
    choices: [
        "yes",
        "no"
    ],
    }])
    .then(function({roleInfo, moreMembers}) {
      let newMember;
      if (role === "Engineer") {
          newMember = new Engineer(name, id, email, roleInfo);
      } else if (role === "Intern") {
          newMember = new Intern(name, id, email, roleInfo);
      } else {
          newMember = new Manager(name, id, email, roleInfo);
      }
      employees.push(newMember);
      addHtml(newMember)
      .then(function() {
          if (moreMembers === "yes") {
              addMember();
          } else {
              finishHtml();
          }
      });
      
  });
});
}

function startHtml() {
    const html = `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
        <title>Team Profile</title>
    </head>
    <body>

// function writeToFile(fileName, data) {
//   fs.writeFile(fileName, data, (err) => {
//     if (err) new Error(err);
//     console.log("Perfect");
//   });
// }
// // TODO: Create a function to initialize app
// function init() {
//   inquirer
//     .prompt(questions)
//     .then((answers) => {
//       writeToFile("test.md", generateMarkdown(answers));
//     })
//     .catch((err) => console.log(err));
// }

// // Function call to initialize app
// init();
