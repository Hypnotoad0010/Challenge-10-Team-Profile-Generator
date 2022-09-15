const inquirer = require("inquirer");
const fs = require("fs");

//Promts classes
const Employee = require('./lib/Employee');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');

const renderHTML = require('./src/renderHTML');

// Team members start off as an empty array
const team = [];

//async added for manager
const addManager = async () => {
    const managerAnswers = await inquirer.prompt(managerQuest)
    const {name, id, email, officeNumber} = managerAnswers;
    const manager = new Manager (name, id, email, officeNumber);
    userResponse.push(manager);
    console.log(manager)
};

// Adds Employee
const addEmployee = [
    {
      name: 'name',
      type: 'input',
      message: "What is the Employees name?"
    },
    {
      name: 'id',
      type: 'input',
      message: "What is the Employees Id?"
    },
    {
      name: 'email',
      type: 'input',
      message: "What is the Employees Email?:"
    },
    {
        name: 'upNext',
        type: 'list',
        choices: ['Add Engineer', 'Add Intern', 'Employee', 'Complete!'],
        message: 'Would you like to add anyone else?',
      },
  ];

//adds engineer
const addEngineer = [
    {
      name: 'name',
      type: 'input',
      message: "What is your Engineers Name?:"
    },
    {
      name: 'id',
      type: 'input',
      message: "What is the Id for your Engineer?:"
    },
    {
      name: 'email',
      type: 'input',
      message: "What is the Engineer's email address?"
    },
    {
      name: 'github',
      type: 'input',
      message: "What is your Engineers GitHub?:"
    },
    {
      name: 'upNext',
      type: 'list',
      choices: ['Add Engineer', 'Add Intern', 'Complete!'],
      message: 'Would you like to add anyone else?',
    },
  ];

  // Adds intern
  const addIntern = [
    {
      name: 'name',
      type: 'input',
      message: "What is the intern's name?"
    },
    {
      name: 'id',
      type: 'input',
      message: "What is the intern's employee ID?"
    },
    {
      name: 'email',
      type: 'input',
      message: "Intern's email address?:"
    },
    {
      name: 'school',
      type: 'input',
      message: "What college or university does the intern attend?"
    },
    {
      name: 'upNext',
      type: 'list',
      choices: ['Add Engineer', 'Add Intern', 'Employee', 'Complete!'],
      message: 'Would you like to add anyone else?',
    },
  ];


  
//Function added to create html page.
const writeFile = data => {
    fs.writeFile('./dist/index.html', data, err => {
        // IF ERROR
        if (err) {
            console.log(err);
            return;
        // CREATE PROFILE
        } else {
            console.log("Your team profile has been successfully created! Your profile is located in the 'dist' folder");
        }
    })
};

addManager()
  .then(addEmployee)
  .then(team => {
    return generatePage(team);
  })
  .then(pageHTML => {
    return writeFile(pageHTML);
  })
  .catch(err => {
 console.log(err);
  });