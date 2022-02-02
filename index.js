// packages needed for the application
const { tsExpressionWithTypeArguments } = require('@babel/types');
const fs = require('fs');
const inquirer = require('inquirer');
// connect HTML file creator
const generateSite = require('./utils/generate-site');

// have the user choose type of employee to input
const inputChoices = () => {
    const choice = [
        {
            type: 'list',
            name: 'type',
            message: "Pick which type of employee to add to the team",
            choices: ["Engineer", "Intern"],
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
            message: "What is the engineer's name?",
        },
        {
            type: 'input',
            name: 'id',
            message: 'What is the engineers ID?',
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is the engineers email address?',
        },
        {
            type: 'input',
            name: 'github',
            message: 'What is the engineers GitHub username?',
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
        },
        {
            type: 'input',
            name: 'id',
            message: 'What is the interns ID?',
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is the interns email address?',
        },
        {
            type: 'input',
            name: 'school',
            message: 'What is the interns school?',
        },
    ])
    .then(({name, id, email, school}) => {
        team.push(new Intern(name, id, email, school));
        completeTeam()
    })
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
    })
};

// initial prompts, starting with manager input
function startQuestions() {
    // var teamSize = 0;
    console.log(`
    =======================================================
    Lets make your team, please start with the Team Manager
    =======================================================
    `);
    if there's no 'employee' array property, create one
    if (!teamData.employee) {
        teamData.employee =  [];
    }
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is your managers name?',
        },
        {
            type: 'input',
            name: 'id',
            message: 'What is the managers ID?',
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is the managers email?',
        },
        {
            type: 'input',
            name: 'office',
            message: 'What is the managers office number?',
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