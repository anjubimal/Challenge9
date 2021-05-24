// TODO: Include packages needed for this application
const inquirer = require('inquirer')
// const generatePage = require('/Users/anjubimal/Desktop/challenge9/README.md')
const fs = require('fs');
const generateMarkdown = require('/Users/anjubimal/Desktop/challenge9/utils/generateMarkdown.js')


// TODO: Create an array of questions for user input
const questions = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: 'What is the project title? (Required)',
            validate: title => {
                if (title) {
                    return true;
                } else {
                    console.log('Please enter project title!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'installation',
            message: 'Add installation instructions'
        },
        {
            type: 'input',
            name: 'test',
            message: 'Add tests'
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Add usage'
        },
        {
            type: 'input',
            name: 'contributers',
            message: 'Add contributors'
        },
        {
            type: 'input',
            name: 'description',
            message: 'Provide project description:',
            when: ({ confirmAbout }) => {
                if (confirmAbout) {
                    return true;
                } else {
                    return false;
                }
            }
        },
        {
            type: 'checkbox',
            name: 'licenses',
            message: 'Choose appropriate liscence for project (Check all that apply)',
            choices: ['MIT', 'Apache License 2.0', 'GNU GPLv3', 'ISC']
        },
        {
            type: 'input',
            name: 'email',
            message: 'Enter email for contact. (Required)',
            validate: email => {
                if (email) {
                    return true;
                } else {
                    console.log('Please provide email!');
                    return false;
                }
            }
        },

        {
            type: 'input',
            name: 'github',
            message: 'Enter the GitHub username. (Required)',
            validate: github => {
                if (github) {
                    return true;
                } else {
                    console.log('Please provide github username!');
                    return false;
                }
            }
        }
    
    ])
}




questions()
    .then(rmData => {
    (fs.writeFile('README.md', generateMarkdown(rmData) , err => {
        if (err) throw err;

        console.log('Portfolio complete! Check out README.md to see the output!');
    })
    )
})
    






