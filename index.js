const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');

const fileName = 'README.md';

/**
 * this array of prompts will be sent to the inquirer module in the init() fxn
 * @type {object[]} - each prompt is its own object
 */
const questions = [
    {
        // The title of your project
        type: 'input',
        message: 'What is the title of your project?',
        name: 'title',
    },
    {
        // Your description of your project
        type: 'input',
        message: 'What would you like to be included in your description?',
        name: 'description',
    },
    {
        // Any steps to install your project will be listed here
        type: 'input',
        message: 'What would you like to be included in your installation instructions?',
        name: 'installation',
    },
    {
        // Any instructions on how to use your project will go here, including images/gifs as examples
        type: 'input',
        message: 'What would you like to be included in your usage information?',
        name: 'usage',
    },
    {
        // List collaborators, third-party assets, and any tutorials you used in creating the project, and provide aappropriate links
        type: 'input',
        message: 'What would you like to be included in your "credits" section?',
        name: 'credits',
    },
    {
        // Any tests you wrote for your project will be listed here, along with examples on how to run them
        type: 'input',
        message: 'What would you like to be included in your "tests" section?',
        name: 'tests',
    },
    {
        // The license you select to cover your project will be detailed here, and a link to documentation will be provided
        type: 'list',
        message: 'Which license would you like to include?',
        name: 'license',
        choices: ['Apache License 2.0', 'GNU General Public License v3.0', 'GNU General Public License v2.0', 'MIT license', 'BSD 2-Caluse "Simplified" License', 'BSD 3-Clause License', 'Boost Software License 1.0', 'Eclipse Public License 1.0', 'Creative Commons Zero v1.0 Universal', 'GNU Affero General Public License v3.0', 'GNU Lesser General Public License v3.0', 'Mozilla Public License 2.0', 'The Unlicense', `none`],
    },
    {
        // Your github username will be displayed and linked in the 'questions' section
        type: 'input',
        message: 'What is your GitHub username?',
        name: 'username',
    },
    {
        // Your email will also be displayed and linked in the 'questions' section
        type: 'input',
        message: 'What is your email?',
        name: 'email',
    }
];

/**
 * 
 * @param {string} fileName - the name of the .md file that will be written
 * @param {object} data - the objectified answers provided by the user and passed from init()
 */
function writeToFile(fileName, data) {

    let writeData = generateMarkdown(data);

    fs.writeFile(fileName, writeData, (err) =>
        err ? console.log(err) : console.log('README.md created!')
    )
};

function init() {
inquirer.prompt(questions).then((answers) => {
    writeToFile(fileName, answers)
})};

init();