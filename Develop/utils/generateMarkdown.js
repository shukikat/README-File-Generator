// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(selectlicense) {
  //console.log("Rendering badge for license:", selectedLicense); 
  
  

  if (selectlicense==="") {
    return ""; 
  }
  else if (selectlicense=="MIT") {
  return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';

  }

  else if (selectlicense=="GNU") {
    return '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)'; 
  }
 
  else if (selectlicense=="Apache") {

    return '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)'; 
  }

  else if (selectlicense=="Boost") {

    return '[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)'; 
  }

  //else {

    //return ''
  //}




};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(selectlicense) { 
  console.log("Rendering link for license:", selectlicense); 
  console.log(typeof selectlicense); 
   
  if (selectlicense==="") {
    return ""; 
  }
  else if (selectlicense==="MIT") {
  return 'https://opensource.org/licenses/MIT';
  }

  else if (selectlicense==="GNU") {
    return 'https://www.gnu.org/licenses/gpl-3.0.html';
    }
 
  else if (selectlicense==="Apache") {

    return 'https://www.apache.org/licenses/LICENSE-2.0'; 
  }

  else if (selectlicense==="Boost") {

    return 'https://www.boost.org/LICENSE_1_0.txt'; 
  }

  //else {

    //return ''
  //}


}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(selectlicense) {
  
  if (!selectlicense) {
    return '## License\nNo license provided.';
  }

  else {
    return `## License\n${renderLicenseBadge(selectlicense)}\n The license for the project is [${selectlicense}] and here is the link [${renderLicenseLink(selectlicense)}]`; 
     

  }
 }

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

        
${renderLicenseSection(data.selectlicense)}

## Table of Contents
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Contribution](#contribution)
- [Tests](#tests)
- [Questions](#questions)

## Description:
          
          ${data.description}

## Installation:
          ${data.installation}

## Usage:
          ${data.usage}

## Contribution:

          ${data.contributing}

## Tests:
          ${data.tests}

## Questions

Please feel free to reach me via email with additional questions. 

GitHub Username: ${data.githubusername}

GitHub Repo: [ReadMeFileGenRepo](${data.githubrepo})

Email: ${data.email}
          
          

`;
}

export default generateMarkdown;
