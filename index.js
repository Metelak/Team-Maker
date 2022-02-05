// packages needed for the application
const fs = require('fs');
const inquirer = require('inquirer');
// connect HTML file creator
const {writeFile, copyFile} = require('./utils/generate-site');
const generateSite = require('./src/page-template');

// connect team members
const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

var team =[];

const teamInputSite = function (){
    writeFile(generateSite(team));
    copyFile(generateSite(team));
};

// have the user choose type of employee to input
const inputChoices = () => {
    const choice = [
        {
            type: 'list',
            name: 'type',
            message: "Pick which type of employee to add to the team",
            choices: ["Engineer", "Intern", "Finished"],
        }
    ];
    return inquirer.prompt(choice);
}

// engineer prompts/input
const engineerInput = () => {
    return inquirer.prompt ([
        {
            type: 'input',
            name: 'name',
            message: "What is the engineers name?",
            validate: nameInput => {
                if (nameInput) {
                  return true;
                } else {
                  console.log("Enter your engineers name!")
                  return false;
                }
              }
        },
        {
            type: 'input',
            name: 'id',
            message: 'What is the engineers ID?',
            validate: idInput => {
                if (idInput) {
                  return true;
                } else {
                  console.log("Enter your engineers id!")
                  return false;
                }
              }
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is the engineers email address?',
            validate: emailInput => {
                if (emailInput) {
                  return true;
                } else {
                  console.log("Enter your engineers email!")
                  return false;
                }
              }
        },
        {
            type: 'input',
            name: 'github',
            message: 'What is the engineers GitHub username?',
            validate: githubInput => {
                if (githubInput) {
                  return true;
                } else {
                  console.log("Enter your engineers github!")
                  return false;
                }
              }
        },
    ])
    .then(({name, id, email, github}) => {
        team.push(new Engineer(name, id, email, github));
        completeTeam()
    })
};

// intern prompts/input
const internInput = () => {
    return inquirer.prompt ([
        {
            type: 'input',
            name: 'name',
            message: "What is the interns name?",
            validate: nameInput => {
                if (nameInput) {
                  return true;
                } else {
                  console.log("Enter your interns name!")
                  return false;
                }
              }
        },
        {
            type: 'input',
            name: 'id',
            message: 'What is the interns ID?',
            validate: idInput => {
                if (idInput) {
                  return true;
                } else {
                  console.log("Enter your interns id!")
                  return false;
                }
              }
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is the interns email address?',
            validate: emailInput => {
                if (emailInput) {
                  return true;
                } else {
                  console.log("Enter your interns email!")
                  return false;
                }
              }
        },
        {
            type: 'input',
            name: 'school',
            message: 'What is the interns school?',
            validate: emailInput => {
                if (emailInput) {
                  return true;
                } else {
                  console.log("Enter your intern's school!")
                  return false;
                }
              }
        },
    ])
    .then(({name, id, email, school}) => {
        team.push(new Intern(name, id, email, school));
        completeTeam()
    })
};

const finishInput = () =>{
    console.log('Information logged!');
    teamInputSite();
  };

// input based on choices of engineer or intern
const completeTeam = async () => {
    await inputChoices()
    .then(response => {
        if (response.type === 'Engineer'){
            engineerInput();
        }
        if (response.type === 'Intern'){
            internInput();
        }
        if (response.type === 'Finished') {
            finishInput();
        }
    })
};

// initial prompts, starting with manager input
function startQuestions() {
    var teamSize = 0;
    console.log(`
    =======================================================
    Lets make your team, please start with the Team Manager
    =======================================================
    `);
    // if there's no 'employee' array property, create one
    // if (!teamData.employee) {
    //     teamData.employee =  [];
    // }
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is your managers name?',
            validate: nameInput => {
                if (nameInput) {
                  return true;
                } else {
                  console.log("Enter the managers name!")
                  return false;
                }
              }
        },
        {
            type: 'input',
            name: 'id',
            message: 'What is the managers ID?',
            validate: idInput => {
                if (idInput) {
                  return true;
                } else {
                  console.log("Enter the managers id!")
                  return false;
                }
              }
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is the managers email?',
            validate: emailInput => {
                if (emailInput) {
                  return true;
                } else {
                  console.log("Enter the managers email!")
                  return false;
                }
              }
        },
        {
            type: 'input',
            name: 'office',
            message: 'What is the managers office number?',
            validate: officeInput => {
                if (officeInput) {
                  return true;
                } else {
                  console.log("Enter the managers office number!")
                  return false;
                }
              }
        },
    ])
    .then (({name, id, email, office}) => {
        team.push(new Manager(name, id, email, office));
        completeTeam();
    })
};
// .then(employeeData => {
    //     teamData.employee.push(employeeData);
    //     if (employeeData.confirmAddEmployee) {
    //         return startQuestions(teamData);
    //     } else {
    //         return teamData;
    //     }


// initiates the function when user runs node index
startQuestions();