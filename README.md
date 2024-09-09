# README File Generator 

        
## Description

This purpose of this project was to create a command line application to generate a README.md file based on user input. This allows the user to simply complete the README without having to manually format and provide content of the README file. The code source for the markdown project can be found  [here](./Develop/utils/generateMarkdown.js) and for the index.js can be found [here](./Develop/index.js).

## Installation:

This project requires the npm install of the Inquirer package. To install the the Inquirer package simply navigate to the applicable location in your project directory in your command line and input "npm install inquirer" command. 

The inquirer logic is included within the index.js file and markdown formatting logic is included within the generateMarkdown.js file.  
          

## Usage

To use this command line generated app the user must navigate to the root directory of their project using the command line. 

To initate the the app the user must input the "node index.js" command in the command line. Once the app is initiated a series of prompts will appear for which the user provides input and then hits enter to record the response. 

Upon hitting enter the user then receives the next prompt and repeats the process noted above. Once input for all prompts have been provided the user will see a success message that all responses have been recorded. 

Upon completion of all user inputs, the README file has been generated with the user provided input located in specific sections of the file.    
          

## Contributing:

I received some assistance for this project. One source of assistance was the Xpert Learning Assistant, available through my bootcamp account, to help me better understand how to implement node.js functions such as export/import and write file functionalities. 

In addition, I consulted with a tutor (name will be added upon receiving permission from this individual) who helped correct the logic in my generateMarkdown.js file to format the README file. In addition, he found an error in my code within the selectlicense prompt. I had selected input type:"checkbox" and needed to update to input type: "list. " By making this correction, my license information was rendered correctly.  

Lastly, I found this youtube tutorial https://www.youtube.com/watch?v=o8hkjz1TQuQ  from Engineering Hacks to be an immense help to gain a better understanding of how all the logic from this project (from index.js, generateMarkdown.js and Inquirer package) worked together to allow functionality and logic to be implemented.  

## License

Please refer to LICENSE in repo. 

## Link to Video
[Walkthrough Tutorial](https://drive.google.com/file/d/10l27ldOMKqkf7E9pOUGCrRCwlK0Gszvj/view?usp=sharing)

## Questions

For additional questions please contact me via email at kathuriashuki@gmail.com or github: https://github.com/shukikat/





          
          
          

