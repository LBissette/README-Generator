// TODO: Include packages needed for this application
const fs = require('fs')
const inquirer = require('inquirer');
const path = "README.md"

const generateREADME = ({projectName, description, install, usage, tests, contributions, license, licenseBadge, userName, email}) =>
`# ${projectName}

## Description

${description} 
${licenseBadge}

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
          choices: ['MIT', 'Apache 2.0', 'BSD 2-Clause', 'None'],
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


// TODO: Create a function to write README file
inquirer.prompt(questions)
.then((answers) => {
    if (answers.license === 'MIT') {
        answers.license = `The MIT License (MIT)
        Copyright © 2022
        
        Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the “Software”), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
        
        The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
        
        THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.`,
        answers.licenseBadge = `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
    }
    if (answers.license === 'Apache 2.0') {
        answers.license = `The Apache 2.0 License
        Copyright 2022

        Licensed under the Apache License, Version 2.0 (the "License");
        you may not use this file except in compliance with the License.
        You may obtain a copy of the License at
        
            http://www.apache.org/licenses/LICENSE-2.0
        
        Unless required by applicable law or agreed to in writing, software
        distributed under the License is distributed on an "AS IS" BASIS,
        WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
        See the License for the specific language governing permissions and
        limitations under the License.`
        answers.licenseBadge = `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)        `
    }
    if (answers.license === 'BSD 2-Clause') {
        answers.license = `BSD 2-Clause License
        Copyright 2022

        Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:
        
        Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
        Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.
        THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.`
        answers.licenseBadge = `[![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)`
    }
    const data = generateREADME(answers)
    fs.writeFile(path, data, (err) => {
        if (err) {
            console.log(err.message);
        } else {
            console.log("README Created!")
        }
    })
});

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
