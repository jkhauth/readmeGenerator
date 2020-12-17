'use strict';
// array of questions for user
const inquirer = require('inquirer');
const fs = require('fs');
inquirer.prompt([
    
    {type: 'input',
    name: 'name_of_project',
    message: 'What is the name of your project?'},
    
    {type: 'input',
    name: 'answer_description',
    message: 'Please give a brief description of your application'},
    
    {type: 'input',
    name: 'step',
    message: 'What do you do to install the application?'},

    {type: 'input',
    name: 'names',
    message: 'Name of People Contributing to Project:'},

    {type: 'list',
    name: 'type_of_license',
    message: 'Which license would you like to add?',
    choices: ['MIT', 'Creative Commons', 'Mozilla Public License 2.0', 'NONE'],
    filter: function (val) {
    return val.toLowerCase();
    }},

    {type: 'input',
    name: 'github_name',
    message: 'Please enter you github name:'
    },

    {type: 'input',
    name: 'email',
    message: 'Please enter you email:'
    }]).
    then((data) =>
        {module.exports = data
        require('./generateMarkdown')});

