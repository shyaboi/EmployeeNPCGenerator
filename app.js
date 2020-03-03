const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");

const becky = new Intern("Becky", 3, "becky@2u.com", "UofA");
const tucker = new Engineer("tucker", 3, "becky@2u.com", "tuckerbeauchamp");
const brent = new Manager("brent", 3, "becky@2u.com", 214);
const dave = new Manager("donus", 3, "donus@gmiak.com", 333);
console.log(becky);
console.log(tucker);
console.log(brent);
console.log(dave);
// console.log(render);
// render(dave)

function start() {
  inquirer
    .prompt([
        {
      type: "list",
      message: "What type of employee would you like to add?",
      name: "role",
      choices: [
        "Manager",
        "Engineer",
        "Intern",
        "I'm finished adding employees"
      ]
    },

],
    
    )
    .then(function(response) {
      console.log(response);
      console.log(response.role);

      switch (response.role) {
        case "Manger":
          manager();
          break;
        case "Engineer":
          engineer();
          break;
        case "Intern":
          intern();
          break;
        default:
          finish();
      }
    });
}
start();

function manager() {}

function intern() {}

function engineer() {}

function finish() {}
// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)

// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work!```
