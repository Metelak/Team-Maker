// packages needed for the application
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

// initial prompts, starting with manager input
const userQuestions = teamData => {
    console.log(`
    =======================================================
    Lets make your team, please start with the Team Manager
    =======================================================
    `);
    // if there's no 'employee' array property, create one
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
    .then(employeeData => {
        teamData.employee.push(employeeData);
        if (employeeData.confirmAddEmployee) {
            return userQuestions(teamData);
        } else {
            return teamData;
        }
    });
}