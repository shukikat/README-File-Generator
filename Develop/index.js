// TODO: Include packages needed for this application
import inquirer from 'inquirer'; 
import Choice from 'inquirer'; 
import fs from 'fs'; 
import markdown from './utils/generateMarkdown.js'; 

// TODO: Create an array of questions for user input

//const generateMarkdown=require('./utils/generateMarkdown')

const questions = [
  {
    type: 'input',
    name: 'title', 
    message: "What is the title of the Project?"
  },

  {
    type: 'input',
    name: 'description', 
    message: "Description of Project"
  }, 

  {
    type: 'input',
    name: 'installation', 
    message: "Installation Instructions"
  }, 

  {
    type: 'input',
    name: 'usage', 
    message: "Provide Information on Usage"
  }, 
  
  {
    type: 'input',
    name: 'contributing', 
    message: "Contributing Guidelines"
  }, 

  {
    type: "list", 
    name: "selectlicense", 
    message: "choose a license", 
    choices: ["MIT", "GNU", "Apache", "Boost"]
  }, 

  {
    type: "input", 
    name: "githubusername", 
    message: "Provide Github Username", 
    
  }, 

  {
    type: "input", 
    name: "githubrepo", 
    message: "Provide link to Github Repo ", 
    
  }, 

  {
    type: "input", 
    name: "email", 
    message: "Put in your Github email", 
    
  }, 

  {
    type: "input", 
    name: "tests", 
    message: "Name Some tests you can run", 

  }




];



// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err)=> {
     err ? console.error(err) : console.log("Success")
  }

); 
}; 

// TODO: Create a function to initialize app
function init() {
  console.log("We are about to generate a professional READme file. Please answer thoroughly");  

  inquirer.prompt(questions)
  
  .then((answers) => {
    // Use user feedback for... whatever!!
    console.log(answers); 
    //const selectedLicense=answers.selectlicense;
    //let stringSelectLicense=JSON.stringify(selectedLicense);
    writeToFile('./utils/README.md', markdown(answers)); 
  })
  .catch((error) => {
    if (error.isTtyError) {

      console.log("Error"); 
      // Prompt couldn't be rendered in the current environment
    } 
    else {
      // Something else went wrong
      console.log("Still wrong"); 
  }
  });
}

// Function call to initialize app
init();




//SK TO DO:
//create a .gitignore file-DONE
//gitignore includes node_modules and.DS_store--ensures that node_modules aren't tracked
//repo includes package.json with required dependencies--you can create one runnin npm init (DON't think this is necessary ? Seemed to included in starter code)
//include video of typical workflow through your application, includes views and prompts responses after selection
//refer to video submission -guide need to see what this is about 

//Grading criteria:
//% Delivarables 20%:
  //A Sample README generated using your application must be submitted
  //A GitHub repo containing you code

 //Walkthrough Video 27%:
   //A walkthrough video that demonstrates the functionality of the README generator must be submitted and a link to the video should be included in your README file
   //The walkthrough video must demonstrate how a user would invoke the application from the command line
   //The walkthrough video must demonstrate how a user would enter responses to all of the prompts in the application
   //The walkthrough video must demonstrate a generated README that matches the user Input and has a functioning table of contents
   
 //Technical Acceptance Criteria: 40%
   //Satisfies all of the above AC
      //uses inquirer package
      
//REPO quality: 13%:
  //Repo has Unique name 
  //Repo follows best practices for file structure and naming conventions
  //Repo follows best practices for class/id naming conventions, indentation, quality comments, etc. 
  //Repo contains multiple descriptive commit messages
  //Repo contains a high quality README with description and link to walkthrough video

// GIVEN a command-line application that accepts user input
// WHEN I am prompted for information about my application repository
// THEN a high-quality, professional README.md is generated with the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
// WHEN I enter my project title--NEED question for this
// THEN this is displayed as the title of the README
// WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions--is this one question?
// THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests
// WHEN I choose a license for my application from a list of options--MULTIPLE CHOICE
// THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under
// WHEN I enter my GitHub username
// THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile
// WHEN I enter my email address
// THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions
// WHEN I click on the links in the Table of Contents--GULP not sure how to do this?
// THEN I am taken to the corresponding section of the README

//VIDEO--do not need voiceover!! Just need to show case the functionality--30 seconds to 2 minutes