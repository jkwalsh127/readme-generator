function renderLicenseBadge(license) {

};

function renderLicenseLink(license) {

};

function renderLicenseSection(license) {

};

function generateMarkdown(data) {
    const githubLink = `Click <a href="https://github.com/${data.username}" target="_blank">**here**<a> to go to my GitHub profile`
    const emailMe = `If you have any questions about this project or would just like to get in touch, you can email me at <a href="mailto:${data.email}" target="_blank">${data.email}</a>`
    return `# ${data.title}
#Table of contents
* [Description](#description)
* [Installation](#installation)
* [Usage](#usage)
* [Contributions](#contributions)
* [Questions](#questions)
* [Tests](#tests)
* [License](#license)

# Installation
${data.installation}

## Usage
${data.usage}

## Contributions
${data.contributions}

### Questions
${githubLink}
${emailMe}

#### Tests
${data.tests}

#### License
${data.license}
`;
};

module.exports = generateMarkdown;