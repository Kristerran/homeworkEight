const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');

const writeFileAsync = util.promisify(fs.writeFile);

const promptUser = () => {
    return inquirer.prompt([{
        name: "name",
        type: "input",
        message: "What is your name?",
    },
    {
        name: "projectName",
        type: "input",
        message: "What is your projects name?",
    },
    {
        name: "projectDetails",
        type: "input",
        message: "Give us a description of your project!",
    },
    {
        name: "projectMotivation",
        type: "input",
        message: "What was your motivation to create this project?",
    },
    {
        name: "projectProblem",
        type: "input",
        message: "What problem does your project solve?",
    },
    {
        name: "projectLearn",
        type: "input",
        message: "What have you learned from this project?",
    },
    {
        name: "projectInstalation",
        type: "input",
        message: "What steps are required to install your project?",
    },
    {
        name: "projectUsage",
        type: "input",
        message: "What are some uses for your project",
    },
    {
        name: "projectCredits",
        type: "input",
        message: "Did anyone work on this project with you? list their names down below, or simply type your name again.",
    },
    {
        name: "projectTests",
        type: "input",
        message: "What tests could a user run to test your application?",
    },
    {
        name: 'link',
        type: 'input',
        message: "Attach a link to the deployed version of your site.",
    },
])
};
const generateREADME = (answers) =>
`# ${answers.projectName}

## Link to deployed project:
${answers.link}
## Description
-${answers.projectDetails}

### Project Motivation:
- ${answers.projectMotivation}

### Project Problem solved:
- ${answers.projectProblem}

### Skills Learned during project:
- ${answers.projectLearn}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [Tests](#Tests)

## Installation
${answers.projectInstalation}

## Usage
- ${answers.projectUsage}

## Tests
${answers.projectTests}
## Credits
### Created by ${answers.name}
### With the help of ${answers.projectCredits}`
;



const init = () => {
    promptUser()
        .then((answers) => writeFileAsync('README.md', generateREADME(answers)))
        .then(() => console.log('Successfully created your README FIle!'))
        .catch((err) => console.error(err));
};

init();