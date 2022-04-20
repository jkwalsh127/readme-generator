const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');
const fileName = `README.md`;
const questions = [
    'What is the title of your project?',
    'What would you like to be included in your description?',
    'What would you like to be included in your installation instructions?',
    'What would you like to be included in your usage information?',
    'What would you like to be included in your "contributions" section?',
    'What would you like to be included in your "tests" section?',
    'Which license would you like to include?',
    'What is your GitHub username?',
    'What is your email?',
];

function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
        err ? console.log(err) : console.log('README.md created!')
    )
};

function init() {
inquirer
  .prompt([
    {
      type: 'input',
      message: questions[0],
      name: 'title',
    },
    {
      type: 'input',
      message: questions[1],
      name: 'description',
    },
    {
      type: 'input',
      message: questions[2],
      name: 'installation',
    },
    {
      type: 'input',
      message: questions[3],
      name: 'usage',
    },
    {
      type: 'input',
      message: questions[4],
      name: 'contributions',
    },
    {
      type: 'input',
      message: questions[5],
      name: 'tests',
    },
    {
      type: 'list',
      message: questions[6],
      name: 'license',
      choices: ['Apache License 2.0', 'GNU General Public License v3.0', 'GNU General Public License v2.0', 'MIT license', 'BSD 2-Caluse "Simplified" License', 'BSD 3-Clause License', 'Boost Software License 1.0', 'Eclipse Public License 1.0', 'Creative Commons Zero v1.0 Universal', 'GNU Affero General Public License v3.0', 'GNU Lesser General Public License v3.0', 'Mozilla Public License 2.0', 'The Unlicense', `none`],
    },
    {
      type: 'input',
      message: questions[7],
      name: 'username',
    },
      {
      type: 'input',
      message: questions[8],
      name: 'email',
    },
  ])
  .then((data) => {
    generateMarkdown(data);
    writeToFile(fileName, data);
  });
}

init();