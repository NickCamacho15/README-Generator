const generateMarkdown = require('./utils/generateMarkdown');
const fs = require('fs');
const inquirer = require('inquirer');
const util = require('util');

// Array of questions for user input
const questions = [
  {
    type: 'input',
    name: 'title',
    message: 'What is your project title?',
  },
  {
    type: 'input',
    name: 'description',
    message: 'Provide a description of the project',
  },
  {
    type: 'input',
    name: 'installation',
    message: 'Provide installation instructions',
  },
  {
    type: 'input',
    name: 'usage',
    message: 'Provide usage information',
  },
  {
    type: 'input',
    name: 'contributing',
    message: 'Provide contribution guidelines',
  },
  {
    type: 'input',
    name: 'tests',
    message: 'Provide test instructions',
  },
  {
    type: 'list',
    name: 'license',
    message: 'Choose a license for your application',
    choices: ['MIT', 'Apache 2.0', 'GPL 3.0', 'BSD 3', 'None'],
  },
  {
    type: 'input',
    name: 'username',
    message: 'Enter your GitHub Username',
  },
  {
    type: 'input',
    name: 'email',
    message: 'Enter your Email',
  },
];

// Function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) => 
    err ? console.error(err) : console.log('README file generated!')
  );
}

// Function to initialize app
async function init() {
  try {
    const answers = await inquirer.prompt(questions);
    const markdown = generateMarkdown(answers);
    writeToFile('README.md', markdown);
  } catch (err) {
    console.error(err);
  }
}
init();

