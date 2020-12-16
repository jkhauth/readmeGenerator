'use strict';
// array of questions for user
const inquirer = require('inquirer');

const questions = [{
    type: 'input',
    name: 'name_of_project',
    message: 'What is the name of your project?'
}];

inquirer.prompt(questions).then((answers) => {
    console.log(JSON.stringify(answers, null, '  '));
  });
// function to write README file
// function writeToFile(fileName, data) {
// }

// function to initialize program
// function init() {

// }

// function call to initialize program
// init();
