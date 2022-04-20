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
      message: 'What would you like to be included in your "contributions" section?',
      name: 'contributions',
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
  .then(({
      title,
      installation,
      usage,
      contributions,
      tests,
      license,
      username,
      email,
  }) => {
const filename = `README.md`;
const githubLink = `Click <a href="https://github.com/${username}" target="_blank">**here**<a> to go to my GitHub profile`
const emailMe = `If you have any questions about this project or would just like to get in touch, you can email me at <a href="mailto:${email}" target="_blank">${email}</a>`
const layout = `# ${title}

#Table of contents
* [Description](#description)
* [Installation](#installation)
* [Usage](#usage)
* [Contributions](#contributions)
* [Questions](#questions)
* [Tests](#tests)
* [License](#license)

# Installation
${installation}

## Usage
${usage}

## Contributions
${contributions}

### Questions
${githubLink}
${emailMe}

#### Tests
${tests}

#### License
${license}
`;
fs.writeFile(filename, layout, (err) =>
    err ? console.log(err) : console.log('README.md created!')
);
});