// TODO: Include packages needed for this application
const fs = require('fs')
const inquirer = require('inquirer');
const path = "README.md"
// TODO: Create an array of questions for user input
const questions = [

      {
          type: 'input',
          message: 'What is your projects name?',
          name: 'projectName',
      },
      {
        type: 'input',
        message: 'Please write a short description of your project.',
        name: 'description',
      },
      {
        type: 'input',
        message: 'What command should be run to install dependencies?',
        name: 'install',
    },
    {
        type: 'input',
        message: 'what does the user need to know about using the repo?',
        name: 'usage',
    },
    {
        type: 'input',
        message: 'What does the user need to know about contributing to the repo?',
        name: 'contributions',
    },
    {
        type: 'input',
        message: 'What command should be run to run tests?',
        name: 'tests',
    },
      {
          type: 'list',
          message: 'What kind of license should your project have?',
          name: 'license',
      },
      {
        type: 'input',
        message: 'What is your GitHub username?',
        name: 'userName',
      },
      {
        type: 'input',
        message: 'What is your email?',
        name: 'email',
      },
];

const generateREADME = ({projectName, description, install, usage, tests, contributions, userName, email}) =>
`# ${projectName}

## Description

${description}

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Tests](#tests)
- [License](#license)
- [Questions](#questions)


## Installation

${install}

## Usage

${usage}

## Contributing

${contributions}

## Tests

${tests}

## License

${license}

## Questions

My GitHub is https://github.com/${userName}. You can ask me questions by emailing me at ${email}.
`

// TODO: Create a function to write README file
fs.writeFile(path, data) {
    
}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
