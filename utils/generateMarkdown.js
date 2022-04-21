/**
 * 
 * @param {string} license - the license selection made by the user, passed from the generateMarkdown() fxn
 * @returns {string} - license badges to pass into the generateMarkdown() return
 */
function renderLicenseBadge(license) {
    if (license = `Apache 2.0 License`) {
        return `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`;
    } else if (license = `GNU General Public License v3.0`) {
        return `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`;
    } else if (license = `GNU General Public License v2.0`) {
        return `[![License: GPL v2](https://img.shields.io/badge/License-GPL_v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)`;
    } else if (license = `MIT license`) {
        return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;
    } else if (license = `BSD 2-Caluse "Simplified" License`) {
        return `[![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)`;
    } else if (license = `BSD 3-Clause License`) {
        return `[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)`;
    } else if (license = `Boost Software License 1.0`) {
        return `[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)`;
    } else if (license = `Eclipse Public License 1.0`) {
        return `[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)](https://opensource.org/licenses/EPL-1.0)`;
    } else if (license = `Creative Commons Zero v1.0 Universal`) {
        return `[![License: CC0-1.0](https://licensebuttons.net/l/zero/1.0/80x15.png)](http://creativecommons.org/publicdomain/zero/1.0/)`;
    } else if (license = `GNU Affero General Public License v3.0`) {
        return `[![License: AGPL v3](https://img.shields.io/badge/License-AGPL_v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)`;
    } else if (license = `GNU Lesser General Public License v3.0`) {
        return `[![License: LGPL v3](https://img.shields.io/badge/License-LGPL_v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0)`;
    } else if (license = `Mozilla Public License 2.0`) {
        return `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)`;
    } else if (license = `The Unlicense`) {
        return `[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)`;
    } else if (license = `none`) {
        return ``;
    }
};

/**
 * 
 * @param {string} license - the license selection made by the user, passed from the renderLicenseSection() fxn
 * @returns {string} - links to license documentation, passed into the renderLicenseSection() fxn 
 */
function renderLicenseLink(license) {
    if (license = `Apache 2.0 License`) {
        return `https://www.apache.org/licenses/LICENSE-2.0`;
    } else if (license = `GNU General Public License v3.0`) {
        return `https://www.gnu.org/licenses/gpl-3.0.en.html`;
    } else if (license = `GNU General Public License v2.0`) {
        return `https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html`;
    } else if (license = `MIT license`) {
        return `https://opensource.org/licenses/MIT`;
    } else if (license = `BSD 2-Caluse "Simplified" License`) {
        return `https://opensource.org/licenses/BSD-2-Clause)`;
    } else if (license = `BSD 3-Clause License`) {
        return `https://opensource.org/licenses/BSD-3-Clause`;
    } else if (license = `Boost Software License 1.0`) {
        return `https://www.boost.org/users/license.html`;
    } else if (license = `Eclipse Public License 1.0`) {
        return `https://www.eclipse.org/legal/epl-v10.html`;
    } else if (license = `Creative Commons Zero v1.0 Universal`) {
        return `https://creativecommons.org/publicdomain/zero/1.0/`;
    } else if (license = `GNU Affero General Public License v3.0`) {
        return `https://www.gnu.org/licenses/agpl-3.0.en.html`;
    } else if (license = `GNU Lesser General Public License v3.0`) {
        return `https://www.gnu.org/licenses/lgpl-3.0.en.html`;
    } else if (license = `Mozilla Public License 2.0`) {
        return `https://www.mozilla.org/en-US/MPL/2.0/`;
    } else if (license = `The Unlicense`) {
        return `https://unlicense.org/`;
    } else if (license = `none`) {
        return ``;
    }
};

/**
 * 
 * @param {string} license - the license selection made by user, passed from the generateMarkdown() fxn 
 * @return {string} - returns variable with string literal to be used in generateMarkdown() fxn return 
 */
function renderLicenseSection(license) {
    licenseUrl = renderLicenseLink(license);
    if (!license == 'none') {
        return licenseSection = `#### License
        The contents of this repository are protected under the <a href="${licenseUrl}">${license}.</a>`
    } else return licenseSection = '';
};

/**
 * 
 * @param {string} tests - the tests input by the user, passed from the generateMarkdown() fxn 
 * @returns {string} - passed to a constant in generateMarkdown() fxn to populate its return string
 */
function renderTestsSection(tests) {
    if (!tests == '') {
        return testsSection = `#### Tests
        ${tests}`
    } else return testsSection = '';
};

function languagesTable(languages) {
    languageTable = ``;
    for (var i = 0; i < languages.length; i++) {
        languageTable += `| ${languages[i]} | ✅ |\n`;
    } return languageTable;
};

/**
 * 
 * @param {object} data - user responses passed from the writeToFile() fxn in index.js
 * @return {string} - returns the content to be written to the .md file into the writeToFile() fxn in index.js
 */
function generateMarkdown(data) {
    //Pass data to functions dynamically render license info
    const licenseBadge = renderLicenseBadge(data.license);
    const licenseSection = renderLicenseSection(data.license);
    const testsSection = renderTestsSection(data.tests);

    const languageString = `${data.languages}`;
    const languageArray = languageString.split(',');
    const languageTable = languagesTable(languageArray);
    console.log(languageTable);
    console.log(typeof languageTable);

    return `# ${data.title}

${licenseBadge}

|  Languages  |    Used     | 
| ----------- | ----------- |
${languageTable}

#Table of contents
* [Description](#description)
* [Installation](#installation)
* [Usage](#usage)
* [Credits](#credits)
* [Questions](#questions)
* [Tests](#tests)
* [License](#license)

# Installation
${data.installation}

## Usage
${data.usage}

## Credits
${data.credits}

### Questions
Click <a href="https://github.com/${data.username}" target="_blank">**here**<a> to go to my GitHub profile
If you have any questions about this project or would just like to get in touch, you can email me at <a href="mailto:${data.email}" target="_blank">${data.email}</a>

${testsSection}

${licenseSection}`;
};

module.exports = generateMarkdown;

