const jest = require('jest');
const inquirer = require("inquirer");
const fs = require("fs");

//Promts classes
const Employee = require('./lib/Employee');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');
// Links you to created html page in source folder
const generatePage = require("./src/Emploees");


// Team members start off as an empty array
const team = [];

//Questions for Manager
const addManager = () => {
  return inquirer.prompt ([
      {
          type: 'input',
          name: 'name',
          message: "Please enter the manager's name?", 
          validate: nameInput => {
              if (nameInput) {
                  return true;
              } else {
                  console.log ("Please enter the manager's name!");
                  return false; 
              }
          }
      },
      {
          type: 'input',
          name: 'id',
          message: "Please enter the manager's ID.",
          validate: nameInput => {
              if  (isNaN(nameInput)) {
                  console.log ("Please enter the manager's ID!")
                  return false; 
              } else {
                  return true;
              }
          }
      },
      {
          type: 'input',
          name: 'email',
          message: "Please enter the manager's email.",
          validate: email => {
               valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
              if (valid) {
                  return true;
              } else {
                  console.log ('Please enter an email!')
                  return false; 
              }
          }
      },
      {
          type: 'input',
          name: 'officeNumber',
          message: "Please enter the manager's office number",
          validate: nameInput => {
              if  (isNaN(nameInput)) {
                  console.log ('Please enter an office number!')
                  return false; 
              } else {
                  return true;
              }
          }
      }
  ])
  .then(managerInput => {
      const  { name, id, email, officeNumber } = managerInput; 
      const manager = new Manager (name, id, email, officeNumber);

      team.push(manager); 
      console.log(manager); 
  })
};

// Adds Employee
const addEmployee = () => {
  console.log ('Create your team profile')
  return inquirer.prompt ([
    {
      name: 'name',
      type: 'input',
      message: "What is the Employees name?",
      validate: nameInput => {
        if (nameInput) {
          return true;
        } else { console.log ('Enter employees name');
          return false;
        }
      }
    },
    {
      name: 'id',
      type: 'input',
      message: "What is the Employees Id?",
      validate: nameInput => {
        if (isNaN(nameInput)) { console.log("Enter employee Id")
          return false;
        } else {
          return true;
        }
      }
    },
    {
      name: 'email',
      type: 'input',
      message: "What is the Employees Email?:",
      validate: email => {
        valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
        if (valid) {
          return true;
        } else { console.log ("Employee Email")
          return false;
        }
      }
    },
    {
        name: 'upNext',
        type: 'list',
        choices: ['Add Engineer', 'Add Intern', ' Add Employee', 'Complete!'],
        message: 'Would you like to add anyone else?',
        default: false
      }
      
  ])
  
};
//adds engineer
const addEngineer = () => {
  console.log ('Engineer')
  return inquirer.prompt ([
  {
    name: 'name',
    type: 'input',
    message: "What is your Engineers Name?:",
    validate: nameInput => {
      if (nameInput) {
        return true;
      } else { console.log ('Name of Engineer');
        return false;
      }
    }
  },
  {
    name: 'id',
    type: 'input',
    message: "What is the Id for your Engineer?:",
    validate: nameInput => {
      if (isNaN(nameInput)) { console.log("Id for Engineer")
        return false;
      } else {
        return true;
      }
    }
  },
  {
    name: 'email',
    type: 'input',
    message: "What is the Engineer's email address?",
    validate: email => {
      valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
      if (valid) {
        return true;
      } else { console.log ("Employee Email")
        return false;
      }
    }
  },
  {
    name: 'github',
    type: 'input',
    message: "What is your Engineers GitHub?:",
    validate: nameInput => {
      if (nameInput ) {
          return true;
      } else {
          console.log ("Please enter the Engineers github username!")
      }
    }
  },
  {
    name: 'upNext',
    type: 'list',
    choices: ['Add Engineer', 'Add Intern', 'Complete!'],
    message: 'Would you like to add anyone else?',
  }
      
])

};

// Adds intern
const addIntern = () => {
  console.log ('Intern')
  return inquirer.prompt ([
  {
    name: 'name',
    type: 'input',
    message: "What is the intern's name?",
    validate: nameInput => {
      if (nameInput) {
        return true;
      } else { console.log ('Name of Intern');
        return false;
      }
    }
  },
  {
    name: 'id',
    type: 'input',
    message: "What is the intern's employee ID?",
    validate: nameInput => {
      if (isNaN(nameInput)) { console.log("Id for Intern")
        return false;
      } else {
        return true;
      }
    }
  },
  {
    name: 'email',
    type: 'input',
    message: "Intern's email address?:",
    validate: email => {
      valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
      if (valid) {
        return true;
      } else { console.log ("Intern Email")
        return false;
      }
    }
  },
  {
    name: 'school',
    type: 'input',
    message: "What college or university does the intern attend?",
    validate: nameInput => {
      if (nameInput) {
          return true;
      } else {
          console.log ("What school does the Intern attend")
      }
  }
  },
  {
    name: 'upNext',
    type: 'list',
    choices: ['Add Engineer', 'Add Intern', ' Add Employee', 'Complete!'],
    message: 'Would you like to add anyone else?',
  },
])
};
  
  


  
//Function added to create html page.
const writeFile = data => {
  fs.writeFile('./dist/index.html', data, err => {
      // IF ERROR
      if (err) {
          console.log(err);
          return;
      // CREATE PROFILE
      } else {
          console.log("Congrats, Your team has been rendered into the dist folder");
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