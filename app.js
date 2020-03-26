// my SQL var npm
const mysql = require("mysql");
// my inquirer var npm
const inquirer = require("inquirer");
// figltet ascii art npm
const figlet = require("figlet");
// chalk npm
const chalk = require("chalk");
// clear npm
const clear = require("clear");

console.log();
// connection var object
const connection = mysql.createConnection({
  host: "localhost",

  // Your port;
  port: 3306,

  // Your username
  user: "root",

  password: "",
  database: "employees_db"
});
// port var
const PORT = connection.config.port;
// console.log(PORT)
// connection init with port var clg
connection.connect(function(err) {
  if (err) throw err;
  clear();
  
  
  console.log(chalk.greenBright("connected to PORT: " + PORT + "\n"));
  console.log(
    chalk.red(
      figlet.textSync("Employee Managment Sim", { horizontalLayout: "full" })
      //   figlet.textSync("All Employees", { horizontalLayout: "full" })
    )
  );

setTimeout(() => { start();}, 2000);
      
    });

// start inquirer
function start() {
  // clear()
  console.log(
    chalk.red(
      figlet.textSync("Main Menu", { horizontalLayout: "full" })
      //   figlet.textSync("All Employees", { horizontalLayout: "full" })
    )
  );
  //  inquirer prompt init for 1st sereris of questions
  inquirer
    // figlet prompt
    .prompt([
      {
        type: "list",
        message: "What would you like to do?",
        name: "start",
        choices: [
          chalk.blue("Add Employee"),
          chalk.yellow("View all Employees"),
          chalk.blue("Add Employee"),
          chalk.yellow("View all Employees"),
          chalk.magenta("Add Department"),
          chalk.cyan("View all Departments"),
          chalk.greenBright("Add Roles"),
          chalk.blueBright("View all Roles"),
          chalk.yellowBright("Update Employee Role"),
          chalk.bgRed("Remove Employee"),
          chalk.dim.bgGreenBright.black("Exit")
        ]
      }
    ])
    // switch cases for inquirer prompt selection
    .then(function(res) {
      switch (res.start) {
        case chalk.blue("Add Employee"):
          addEmp();
          break;

        case chalk.yellow("View all Employees"):
          viewAllEmp();
          break;

        case chalk.magenta("Add Department"):
          addDept();
          break;

        case chalk.cyan("View all Departments"):
          viewAllDept();
          break;

        case chalk.bgRed("Remove Employee"):
          removeEmp();
          break;

        case chalk.greenBright("Add Roles"):
          addRole();
          break;

        case chalk.blueBright("View all Roles"):
          viewAllRoles();
          break;

        case chalk.yellowBright("Update Employee Role"):
          updateEmRole();
          break;

        case chalk.dim.bgGreenBright.black("Exit"):
            clear()
          console.log(
            chalk.red(
              figlet.textSync("WHyÿyyyyyyyyyy!!!!!!!!!", {
                horizontalLayout: "full}"
              })
            )
          );
          setTimeout(() => {
            connection.end();
            clear();
          }, 2000);
          break;
      }
    });
}

// view all emp from sql db function
function viewAllEmp() {
  connection.query(
    "SELECT employee.first_name, employee.last_name, role.title AS role, manager.first_name AS manager FROM employee LEFT JOIN role ON employee.role_id = role.id LEFT JOIN employee manager ON employee.manager_id = manager.id GROUP BY employee.id",
    function(err, res) {
      if (err) throw err;
      //   clear();
      clear();
      console.log(
        chalk.blueBright(
          figlet.textSync("All Employeets", { horizontalLayout: "full" })
        )
      );
      console.table(res);
      setTimeout(() => { start();}, 2000);
      
    }
  );
}

// add employee function
function addEmp() {
  clear();
  console.log(
    chalk.green(
      figlet.textSync("Adding New Employee", { horizontalLayout: "full" })
    )
  );
//   add employee inquirer start
  inquirer
    .prompt([
      {
        type: "input",
        message: chalk.blue("New Employee's First Name?"),
        name: "first_name"
      },
      {
        type: "input",
        message: chalk.green("New Employee's Last Name?"),
        name: "last_name"
      },
      {
        type: "list",
        message: "What is their role?",
        name: "role_id",
        choices: [1, 2, 3]
      },
      {
        type: "input",
        message: "What is their Managers ID?",
        name: "manager_id"
      }
    ])
    .then(function(res) {
      "All Emloyees",
      console.log(chalk.green(figlet.textSync("Employee"))),
      console.log(chalk.blueBright(figlet.textSync("Added!"))),
        function(err, data) {
          if (err) {
            console.log("Something went wrong...");
            console.dir(err);
            return;
          }
          console.log(data);
        };

      const query = connection.query(
        "INSERT INTO employee SET ?",
        res,
        function(err, res) {
          if (err) throw err;
          setTimeout(() => {
            clear()
          
          start();
          }, 2000);
          
        }
      );
    });
}


function removeEmp() {

    clear();
    console.log(
      chalk.green(
        figlet.textSync("Terminator", { horizontalLayout: "full" })
      )
    );

    let employeeList = [];
    connection.query(
        "SELECT employee.first_name, employee.last_name FROM employee", (err, res) => {
            for (let i = 0; i < res.length; i++) {
                employeeList.push(res[i].first_name + " " + res[i].last_name);
            }
            inquirer
                .prompt([{
                    type: "list",
                    message: "Choose An Employee to Terminate!",
                    name: "employee",
                    choices: employeeList 
                }, ])
                .then(function(res) {
                    const query = connection.query(
                        `DELETE FROM employee WHERE concat(first_name, ' ' ,last_name) = '${res.employee}'`,
                        function(err, res) {
                            if (err) throw err;
                       
                           setTimeout(() => {
                            console.log(
                              chalk.green(
                                figlet.textSync("Employee")
                              )
                            );
                        }, 1000);
                        
                        clear()
                        setTimeout(() => {
                         console.log(
                           chalk.redBright(
                             figlet.textSync("Terminated!!")
                           )
                         );
                     }, 2000);

                            setTimeout(() => {
                                clear()
                              
                              start();
                              }, 4000);
                            
                        });
                });
        }
    );
};