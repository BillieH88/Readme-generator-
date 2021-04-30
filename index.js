// TODO: Include packages needed for this application
const generateMarkdown = require('./utils/generateMarkdown');
const fs = require('fs');
const inquirer = require('inquirer');
// TODO: Create an array of questions for user input
console.log(generateMarkdown);



// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile( fileName, data,err=>{
  if (err) throw err;
  console.log('File has been successfully made') 

  })


}

// TODO: Create a function to initialize app
function init() {
    inquirer
    .prompt([
        {
      type: 'input',
      name: 'title',
      message: 'What is the your Project Title?'
  
  },
      {
         type: 'input',
         name:'description',
         message:'Description of the project:'
  
  
      },
  {
    type: 'input',
    name: 'installation',
    message: 'How to install your app?'
  
  },
  
  {
    type: 'input',
    name: 'usage',
    message: 'How do you use your Project?'
  
  
  },
  {
    type: 'list',
    name: 'license',
    message: 'What license was used for this Project?',
    choices: ['the BSD','the MIT','GNU', 'none of the above']
  
  },
  
  {
  type: 'input',
  name: 'git',
  message: 'What is your github username?'
  
  
  },
   {
  type: 'input',
  name:'contribution',
  message: ' Who contributed to this Project?'
  }]).then(answers => {

    let templateData = generateMarkdown(answers)
  //console.log(generateMarkdown(answers));})
  writeToFile('README.md', templateData);
  

})
}
// Function call to initialize app
init();
