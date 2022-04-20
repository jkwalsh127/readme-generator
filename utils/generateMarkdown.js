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