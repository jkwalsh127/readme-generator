const inquirer = require('inquirer');
const fs = require('fs');

inquirer
  .prompt([
    {
      type: 'input',
      message: 'What is the title of your project?',
      name: 'title',
    },
    {
      type: 'input',
      message: 'What would you like to be included in your description?',
      name: 'description',
    },
    {
      type: 'input',
      message: 'What would you like to be included in your installation instructions?',
      name: 'installation',
    },
    {
      type: 'input',
      message: 'What would you like to be included in your usage information?',
      name: 'usage',
    },
    {
      type: 'input',
      message: 'What would you like to be included in your "contributing" section?',
      name: 'contributing',
    },
    {
      type: 'input',
      message: 'What would you like to be included in your "tests" section?',
      name: 'tests',
    },
    {
      type: 'list',
      message: 'Which license would you like to include?',
      name: 'license',
      choices: ['Apache License 2.0', 'GNU General Public License v3.0', 'MIT license', 'BSD 2-Caluse "Simplified" License', 'BSD 3-Clause "New" or "Revised" License', 'Boost Software License 1.0', 'Eclipse Public License 2.0', 'Creative Commons Zero v1.0 Universal', 'GNU General Public License v2.0', 'GNU Affero General Public License v3.0', 'GNU Lesser General Public License v2.1', 'Mozilla Public License 2.0', 'The Unlicense'],
    },
    {
      type: 'input',
      message: 'What is your GitHub username?',
      name: 'username',
    },
      {
      type: 'input',
      message: 'What is your email?',
      name: 'email',
    },
  ])
  .then((response) => {
    console.log(response)
    const filename = `README.md`;
    fs.writeFile(filename, JSON.stringify(response, null, '\t'), (err) =>
        err ? console.log(err) : console.log('README.md created!')
    );
  });
