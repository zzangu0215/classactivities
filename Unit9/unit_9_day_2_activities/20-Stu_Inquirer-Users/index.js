const inquirer = require('inquirer');
const fs = require('fs');

inquirer
  .prompt([
    {
      type: 'input',
      message: 'What is your name?',
      name: 'name',
    },
    {
      type: 'checkbox',
      message: 'What programming languages do you know?',
      name: 'language',
      choices: ['CSS', 'HTML', 'JavaScript', 'Python', 'C++', 'C', 'MATLAB'],
    },
    {
      type: 'list',
      message: 'What is your preferred method of communication?',
      name: 'method',
      choices: ['email', 'WhatsApp', 'Discord', 'Slack'],
    }
  ])
  .then((answers) => {
    // console.log(`Hello, ${answers.name}`);
    // console.log(`You know ${answers.language}`);
    // console.log(`Your preferred method of communication is ${answers.method}`);
    console.log(answers);

    const data = JSON.stringify(answers, null, 2);
    fs.writeFile('response.json', data, (err) => 
    err ? console.error(err) : console.log('Success!')
    )
  })