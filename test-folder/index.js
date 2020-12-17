'use strict';
// array of questions for user
const inquirer = require('inquirer');
let name_of_project = [];
let user_description = [];
let list_of_steps = [];
let users_contributed = [];
let users_license_choice = [];
let user_github = [];
let user_email = [];
//FIRST ARRAY OF QUESTIONS ASKED
const first_questions = [
    //NAME OF PROJECT
    {type: 'input',
    name: 'name_of_project',
    message: 'What is the name of your project?'},
    //DESCRIPTION OF PROJECT
    { type: 'input',
    name: 'answer_description',
    message: 'Please give a brief description of your application'},
    //ENTER FUNCTION ASKING STEPS
    {type: 'confirm',
    name: 'step_questions',
    message: 'Would you like to add steps to your README?',
    default: true,}
];

//ASK USERS WHAT THEY DID A STEP AND IF THEY WOULD LIKE TO ADD ANOTHER
const user_steps_questions = [
    //WHAT THEY DID THIS SPECIFIC STEP
    {type: 'input',
    name: 'step',
    message: 'What did you do this step?'},
    // WOULD THEY LIKE ANOTHER STEP
    {type: 'confirm',
    name: 'anotherStep',
    message: 'Would you like to an other step?',
    default: true,}

]

//ASKS THE USERS WHO CONTRIBUTED TO THE PROJECT
const user_contribute_questions = [
    //WHAT THEY DID THIS SPECIFIC STEP
    {type: 'input',
    name: 'name',
    message: 'Name of Person Contributing to Project:'},
    // WOULD THEY LIKE ANOTHER STEP
    {type: 'confirm',
    name: 'anotherName',
    message: 'Would you like to add another person?',
    default: true,}

]

//ASKS THE USERS WHAT LICENSE THEY WOULD LIKE TO ADD
const user_license_questions = [
    {       type: 'list',
            name: 'type_of_license',
            message: 'Which license would you like to add?',
            choices: ['MIT', 'Creative Commons', 'Mozilla Public License 2.0', 'NONE'],
            filter: function (val) {
              return val.toLowerCase();
            } }
]

const user_githubname_questions = [
    {type: 'input',
    name: 'github_name',
    message: 'Please enter you github name:'
    },
    {type: 'input',
    name: 'email',
    message: 'Please enter you email:'
    }
]

//FUNCTION TO PROMPT USER STEPS
function user_steps() {
    inquirer.prompt(user_steps_questions).then((answers) => {
      list_of_steps.push(answers.step);
        
      if (answers.anotherStep) {
        user_steps();
      } else {  
        list_of_steps.join(', ');
        user_contributed();
      }
    });
}

// FUNCTION TO PROMPT USERS CONTRIBUTED
function user_contributed() {
    inquirer.prompt(user_contribute_questions).then((answers) => {
      users_contributed.push(answers.name);
        
      if (answers.anotherName) {
        user_contributed();
      } else {  
        users_contributed.join(', ');
        user_license();
      }
    });
}

// FUNCTION TO PROMPT WHICH LICENSE
function user_license() {
    inquirer.prompt(user_license_questions).then((answers) => {
        users_license_choice.push(answers.type_of_license);
        user_github_name();
    });
}

// FUNCTION TO PROMPT USER WHAT THEIR GITHUB USERNAME AND EMAIL IS
function user_github_name() {
    inquirer.prompt(user_githubname_questions).then((answers) => {
        user_github.push(answers.github_name);
        user_email.push(answers.email);
        console.log('Name of Project:' + name_of_project)
        console.log('Users Contributed:' + users_contributed)
        console.log('Brief Description:' + user_description)
        console.log('Users Github:' + user_github)
        console.log('Users Email:' + user_email)
        console.log('Users License Choice:' + users_license_choice)
        console.log('Users List of Steps:' + list_of_steps) 
    });
}

inquirer.prompt(first_questions).then((answers) => {
    name_of_project.push(answers.name_of_project);
    user_description.push(answers.answer_description)
    if (answers.step_questions){
        user_steps();
    } 
    else {
    //GOING TO ASK FINAL QUESTIONS
    }
});

// function to write README file
// function writeToFile(fileName, data) {
// }

// function to initialize program
// function init() {

// }

// function call to initialize program
// init();

//////////////////////////////////
// {            // ASKS IF THEY WANT TO ADD ANOTHER ONE
//     type: 'confirm',
//     name: 'askAgain',
//     message: 'Want to enter another TV show favorite (just hit enter for YES)?',
//     default: true,
//   },

