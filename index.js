const inquirer = require("inquirer");
const fs = require("fs");
const Engineer = require("./lib/engineer");
// const Employee = require ("./lib/employee");
const Intern = require("./lib/intern");
const Manager = require("./lib/manager");
const employees = [];

function initTeam() {
  startHtml();
  addTeamMember();
}
//EE name
function addTeamMember() {
  inquirer
    .prompt([
      {
        message: "Enter team member name",
        name: "name",
      },
      {
        type: "list", //EE role
        name: "role",
        message: "Select team member's role",
        choices: ["Engineer", "Intern", "Manager", "Employee"],
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
    ])
    .then(function ({ name, role, id, email }) {
      let roleInfo = "";
      if (role === "Engineer") {
        roleInfo = "GitHub username";
      } else if (role === "Intern") {
        roleInfo = "school name";
      } else {
        roleInfo = "office phone number";
      }
      inquirer
        .prompt([
          {
            message: `Enter team member's ${roleInfo}`,
            name: "roleInfo",
          },
          {
            type: "list",
            name: "moreTeamMembers",
            message: "Are there additional team member's to add?",
            choices: ["yes", "no"],
          },
        ])
        .then(function ({ roleInfo, moreTeamMembers }) {
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
          .then(function () {
            if (moreTeamMembers === "yes") {
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
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
        <title>Team Profile</title>
    </head>
    <body>


    <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div classs = "container">
  <div class = "row">`; //change to fs corrects problem
  fs.writeToFile("./src/teamMember.html", html, function (err) {
    //corrected read
    if (err) {
      console.log(err);
    }
  });
  //comment out additional writeFile
  //  fs.writeFile(fileName, data, (err) =>
  //      if (err) new Error(err);
  // console.log("Not Perfect");}

  function addHtml(member) {
    return new Promise(function(resolve, reject) {
      //fixed read issue
      const name = member.getName();
      const role = member.getRole();
      const id = member.getId();
      const email = member.getEmail();
      //to write to
      let data = "";

      if (role === "Engineer") {
        const gitHub = member.getGithub();
        data = `<div class="col-4">
           <h1 class="card-header">${name}Engineer</h1>
           <class="list group list-group-flush>
             <li class="list-group-item">ID: ${id}</li>
             <li class="list-group-item">Email Address: ${email}</li>
             <li class="list-group-item">GitHub: ${gitHub}</li>
              </div>
               </div>`;
      } else if (role === "Intern") {
        const school = member.getSchool();
        //fixed problem
        data = `<div class="col-4"> 
         <class="list group list-group-flush>
         <ul class="list-group list-group-flush">
         <li class="list-group-item">ID: ${id}</li>
         <li class="list-group-item">Email Address: ${email}</li>
         <li class="list-group-item">School: ${school}</li>
         </ul>
         </div>
         </div>`;
      } else {
        const officePhone = member.getOfficeNumber();
        data = `<div class="col-4">
           <class="list group list-group-flush>
             <ul class="list-group list-group-flush">
         <li class="list-group-item">ID: ${id}</li>
         <li class="list-group-item">Email Address: ${email}</li>
         <li class="list-group-item">Office Phone: ${officePhone}</li>
         </ul>
         </div>
         </div>`;
      }

      fs.appendFile("./src/myteam.html", data, function (err) {
        //callback
        if (err) {
          return reject(err);
        }
        return resolve();
      });
    });

    //rewrite finish

    function finishHtml() {
      const html = `</div>
       </div>
       </body>
       </html>`;
       //appenddata to file
      fs.appendFile("./src/team.html", html, function (err) {
        if (err) {
          console.log(err);
        }
      });
    }
  }
}


initTeam();
