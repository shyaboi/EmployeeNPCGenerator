// my SQL var npm
const mysql = require('mysql');
// my inquirer var npm
const inquirer = require('inquirer');
// figltet ascii art npm
const figlet = require('figlet')
// chalk npm
const chalk = require('chalk');
// clear npm
const clear = require('clear')
 
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
const PORT = connection.config.port
// console.log(PORT)
// connection init with port var clg
connection.connect(function(err) {
    if (err) throw err;
     console.log("connected to PORT: " + PORT + "\n");
    start();
    
});
// start inquirer
function start() {
    
    //  inquirer prompt init for 1st sereris of questions
    inquirer
    // figlet prompt
    .prompt([{
            type: "list",
            message: "What would you like to do?",
            name: "start",
            choices: [
                "Add Employee",
                "View all Employees",
                "Remove Employee",
                "Add Department",
                "View all Departments",
                "Add Roles",
                "View all Roles",
                "Update Employee Role",
                "Exit"
            ]
        }])
        // switch cases for inquirer prompt selection
        .then(function(res) {
            switch (res.start) {

                case "View all Employees":
                    figlet('All Emloyees', function(err, data) {
                        if (err) {
                            console.log('Something went wrong...');
                            console.dir(err);
                            return;
                        }
                        console.log(data)
                    });
                    viewAllEmp();
                    break;

                case "Add Employee":
                    addEmp();
                    break;

                case "Remove Employee":
                    removeEmp();
                    break;

                case "Add Department":
                    addDept();
                    break;

                case "View all Departments":
                    viewAllDept();
                    break;

                case "Add Roles":
                    addRole();
                    break;

                case "View all Roles":
                    viewAllRoles();
                    break;

                case "Update Employee Role":
                    updateEmRole();
                    break;

                case "Exit":
                    connection.end();
                    break;
            }
        })
}

// view all emp from sql db function
function viewAllEmp() {

    connection.query("SELECT employee.first_name, employee.last_name, role.title AS role, manager.first_name AS manager FROM employee LEFT JOIN role ON employee.role_id = role.id LEFT JOIN employee manager ON employee.manager_id = manager.id GROUP BY employee.id",
        function(err, res) {
            if (err) throw err;
            clear()
                console.table(res);
            start();
        });
}

// add employee function
function addEmp() {
    console.log("Inserting a new employee");
    inquirer
        .prompt([{
                type: "input",
                message: "New Employee's First Name?",
                name: "first_name",
            },
            {
                type: "input",
                message: "New Employee's Last Name?",
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
            
           ('All Emloyees', function(err, data) {
                if (err) {
                    console.log('Something went wrong...');
                    console.dir(err);
                    return;
                }
                console.log(data)
            });
           
            const query = connection.query(
                "INSERT INTO employee SET ?",
                res,
                function(err, res) {
                    if (err) throw err;
                    console.log("Employee added");

                    start();
                }
            );
        })
}