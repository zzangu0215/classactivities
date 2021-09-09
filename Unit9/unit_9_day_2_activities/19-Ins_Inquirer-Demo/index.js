const inquirer = require('inquirer');

inquirer
  .prompt([
    {
      type: 'input',
      message: 'What is your user name?',
      name: 'username',
    },
    {
      type: 'password',
      message: 'What is your password?',
      name: 'password',
    },
    {
      type: 'password',
      message: 'Re-enter password to confirm:',
      name: 'confirm',
    },
    {
      type: 'list',
      message: 'Which color do you prefer?',
      name: 'color',
      choices: ['Red', 'Green', 'Blue', 'Purple', 'Orange', 'Yellow', 'Brown'],
    },
  ])
  .then((answers) => {
    console.log(`Hello, ${answers.username}!`);
    if (answers.confirm === answers.password) {
      console.log('Success!');
    } else {
      console.log('You forgot your password already?!');
    }

    console.log(`You chose ${answers.color} for you preferred color.`);
  });
