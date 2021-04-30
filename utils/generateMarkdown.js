// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicense(license) {
  var licenseBadge = "";

  if (license === "the MIT") {
    licenseBadge =
      "[![License MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
  } else if (license === "the BSD") {
    licenseBadge =
      "[![License](https://img.shields.io/badge/License-BSD%202--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)";
  } else if (license === "GNU") {
    licenseBadge =
      "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
  }

  if (licenseBadge !== "") {
    return `
  ## License
  ${licenseBadge}
  `;
  } else {
    return "";
  }
}

function tableOfContent(license) {
  //var licenseContent="";
  if (license === "the MIT" || license === "the BSD" || license === "GNU") {
  return "* [License](#license)";
  } else {
    return "";
  }
}
// TODO: Create a function to generate markdown for README
function generateMarkdown(answers) {
  return `# ${answers.title}
  
  
  ## Description  
   ${answers.description}
  
   ## Table of contents
   * [Description](#description)
   * [Installation](#installation)
   ${tableOfContent(answers.license)}
   * [Usage](#usage)
   
   * [Contribution](#contribution)
  
   ## Installation
      ${answers.installation}
  
   ## Usage 
      ${answers.usage}
  
${renderLicense(answers.license)}

   ## Contribution
     ${answers.contribution}

`;
}

module.exports = generateMarkdown;
