// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {

  if (license==="") {
    return ""; 
  }
  else if (license==='MIT') {
  return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';

  }

  else if (license==="GNU") {
    return '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)'
  }
 
  else if (license==='Apache') {

    return '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)'; 
  }

  else if (license==='Boost') {

    return '[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)'; 
  }

  //else {

    //return ''
  //}




};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) { 
  if (license==="") {
    return ""; 
  }
  else if (license==='MIT') {
  return 'https://opensource.org/licenses/MIT';
  }

  else if (license==='GNU') {
    return 'https://www.gnu.org/licenses/gpl-3.0.html';
    }
 
  else if (license==='Apache') {

    return 'https://www.apache.org/licenses/LICENSE-2.0'; 
  }

  else if (license==='Boost') {

    return 'https://opensource.org/licenses/BSD-3-Clause'; 
  }

  //else {

    //return ''
  //}


}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  
  if (!license) {
    return '##License\nNo license noted;'
  }

  else {
    return `##License\n${renderLicenseBadge(license)}\n The license for the project is [${license}] and here is the link [${renderLicenseLink(license)}]`; 
     

  }
 }

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

          ##License
          ${renderLicenseSection(data.selectlicense)}

          ## Table of Contents
          -[Description](#Description)
          -[Installation](#Installation)
          -[Usage](#Usage)
          -[Contrubution](#Contributing)
          -[Testing](#Test)
          -[Question](#Questions)

          ## Description:
          
          ${data.description}

          ## Installation:
          ${data.installation}

          ## Usage:
          ${data.usage}

          ## Installation
          
          ${data.installation}

          ## Contributing:

          ${data.contributing}

          ## Test:
          ${data.tests}

          ## Questions

          
          ${data.githubusername}\n${data.email}\n Please feel free to reach me via email with additional questions
          

`;
}

export default generateMarkdown;
