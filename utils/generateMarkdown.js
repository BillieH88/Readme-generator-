// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
if (license === 'the MIT'){
return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'

  //  }else if (license === "the BSD"){
  //  return '[![License](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)]'
  // }else if (license === "GNU"){
  // return '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)]'
  // }else if (license === "none of the above")
  //  return ''
  }
}
  
// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}
//if (license === "none of the above")



//}

// TODO: Create a function to generate markdown for README
function generateMarkdown(answers) {
  return `# ${answers.title}
  
  
  ## Description  
   ${answers.description}
  
   ## Table of contents
   * [Description](#description)
   * [Installation](#installation)
   * [Usage](#usage)
   * [License](#license)
   * [Contribution](#contribution)
  
   ## Installation
      ${answers.installation}
  
   ## Usage 
      ${answers.usage}
  
   ## License
      ${renderLicenseBadge(answers.license)}

   ## Contribution
     ${answers.contribution}

`;
}

module.exports = generateMarkdown;
