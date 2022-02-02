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


// const userQuestions = () => {
//     return inquirer.prompt([
//         {
//             type: 'input',
//             name: 'name',
//             message: 'What is your name?',
//         },
//         {
//             type: 'input',

//         }
//     ])
// }