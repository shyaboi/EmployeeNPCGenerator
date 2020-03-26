// my SQL var npm
const mysql = require("mysql");
// my inquirer var npm
const inquirer = require('inquirer');
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

const PORT = connection.config.port
// console.log(PORT)

connection.connect(function(err) {
    if (err) throw err;
    console.log("connected to PORT: " + PORT + "\n");
    start();
});

function start() {
    inquirer
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
        .then(function(res) {
            switch (res.start) {

                case "View all Employees":
                    viewAllEmployees();
                    break;

                case "Add Employee":
                    addEmployee();
                    break;

                case "Remove Employee":
                    removeEmployee();
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