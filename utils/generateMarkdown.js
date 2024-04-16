// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch (license) {
    case "MIT":
      return "![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)";
    case "GPLv2":
      return "![License: GPL v2](https://img.shields.io/badge/License-GPL%20v2-blue.svg)";
    case "Apache":
      return "![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)";
    case "ISC":
      return "![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)";
    default:
      return "";
  }
}
// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch (license) {
    case "MIT":
      return "https://opensource.org/licenses/MIT";
    case "GPLv2":
      return "https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html";
    case "Apache":
      return "https://www.apache.org/licenses/LICENSE-2.0";
    case "ISC":
      return "https://opensource.org/licenses/ISC";
    default:
      return "";
  }
}
// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  switch (license) {
    case "MIT":
      return `This project is licensed under the MIT License.`;
    case "GPLv2":
      return `This project is licensed under the GPLv2 License.`;
    case "Apache":
      return `This project is licensed under the Apache License.`;
    case "ISC":
      return `This project is licensed under the ISC License.`;
    default:
      return "";
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ## Description

  ${data.desc}

  ## Table of Contents

  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)
  
  ## Installation

  ${data.installation}

  ## Usage

  ${data.usage}

  ## License

  ${renderLicenseBadge(data.license)}
  ${renderLicenseLink(data.license)}

  ${renderLicenseSection(data.license)}

  ## Contributing

  ${data.contributing}

  ## Tests

  ${data.tests}

  ## Questions

  If you have any questions about this project, you can reach me at ${
    data.email
  } 
  or you can find me on GitHub at [${data.github}](https://github.com/${
    data.github
  }).

`;
}

module.exports = generateMarkdown;
