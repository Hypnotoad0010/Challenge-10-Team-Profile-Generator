//packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const Employee = require('./lib/employee')
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const gt = require('./dist/generate');

// arrays to hold new team members
let teamManager = [];

let teamEngineer = [];

let teamIntern = [];

// array of questions for user input
const ManagerQuestions = [
    {
        type: 'input',
        message: "Please enter Manager's name",
        name: 'name',
        validate: function validateName(name){
            return name !== '';
        },
    },
    {
        type: 'input',
        message: "Please enter Manager's id",
        name: 'id',
        validate: function validateId(id){
            return id !== '';
        },
    },
    {
        type: 'input',
        message: "Please enter Manager's email",
        name: 'email',
        validate: function validateEmail(email){
            return email !== '';
        },
    },
    {
        type: 'input',
        message: "Please input Manager's office number",
        name: 'officeNum',
        validate: function validateOfficeNum(officeNum){
            return officeNum !== '';
        },
    },
];

const newMemberQuestions= [
    {
        type: 'confirm',
        message: "Would you like to add another team member?",
        name: 'newMember',
    },
    {
        type: 'list',
        message: "What role will this employee be fulfilling?",
        choices: [ "Engineer", "Intern" ],
        name: 'role',
        when: (answers) => answers.newMember === true,
    },
]

const engineerQuestions = [
    {
        type: 'input',
        message: "Please enter Engineer's name",
        name: 'name',
        validate: function validateName(name){
            return name !== '';
        },
    },
    {
        type: 'input',
        message: "Please enter Engineer's id",
        name: 'id',
        validate: function validateId(id){
            return id !== '';
        },
    },
    {
        type: 'input',
        message: "Please enter Engineer's email",
        name: 'email',
        validate: function validateEmail(email){
            return email !== '';
        },
    },
    {
        type: 'input',
        message: "Please input Engineer's GitHub",
        name: 'gitHub',
        validate: function validateGithub(gitHub){
            return gitHub !== '';
        },
    },
];

const internQuestions = [
    {
        type: 'input',
        message: "Please enter Intern's name",
        name: 'name',
        validate: function validateName(name){
            return name !== '';
        },
    },
    {
        type: 'input',
        message: "Please enter Intern's id",
        name: 'id',
        validate: function validateId(id){
            return id !== '';
        },
    },
    {
        type: 'input',
        message: "Please enter Intern's email",
        name: 'email',
        validate: function validateEmail(email){
            return email !== '';
        },
    },
    {
        type: 'input',
        message: "Please input Intern's school",
        name: 'school',
        validate: function validateSchool(school){
            return school !== '';
        },
    },
];

// creates a new constructor Manager class
function addManager() {
    inquirer.prompt(ManagerQuestions)
    .then ((managerAnswers) => {
        teamManager.push(new Manager(managerAnswers.name, managerAnswers.id, managerAnswers.email, managerAnswers.officeNum));
        newMem();
    })
    .catch((err) => {
        console.log(err);
    })
};

// function for asking if user wants to add new member
function newMem() {
    inquirer.prompt(newMemberQuestions)
    .then ((newMemAnswers) => {
        if (newMemAnswers.newMember) {
            switch(newMemAnswers.role) {
                case 'Engineer':
                    addEngineer();
                    break;
        
                case 'Intern':
                    addIntern();
                    break;
            };
        }
        else {
            build();
        }
    }) 
    .catch((err) => {
        console.log(err);
    })
}

// creates a new constructor Engineer class
function addEngineer() {
    inquirer.prompt(engineerQuestions)
    .then ((engineerQuestions) => {
        teamEngineer.push(new Engineer(engineerQuestions.name, engineerQuestions.id, engineerQuestions.email, engineerQuestions.gitHub))
        newMem();
    })
    .catch((err) => {
        console.log(err);
    })
};

// creates a new constructor Intern class
function addIntern() {
    inquirer.prompt(internQuestions)
    .then ((internQuestions) => {
        teamIntern.push(new Intern(internQuestions.name, internQuestions.id, internQuestions.email, internQuestions.school))
        newMem();
    })
    .catch((err) => {
        console.log(err);
    })
};

// initial call to start app
addManager();


// function to write myTeam html file 
function build() {
    fs.writeFileSync('myTeam.html', gt(teamManager, teamEngineer, teamIntern));
    console.log("myTeam.html file succesfully created!");
        
};