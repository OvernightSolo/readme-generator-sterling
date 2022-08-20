var inquirer = require("inquirer");
const fs = require("fs");

const questions = [
  {
    type: "input",
    name: "project_title",
    message: "What is the title of your project?",
  },
  {
    type: "input",
    name: "description",
    message: "Describe your project",
  },
  {
    type: "input",
    name: "table-of-contents",
    message: "Which items would you like to be in the Table of Contents?",
  },
  {
    type: "input",
    name: "installation",
    message: "What are the installation instructions?",
  },
  {
    type: "input",
    name: "usage",
    message: "How do you use this application?",
  },
  {
    type: "input",
    name: "contributions",
    message: "What are the contribution guidelines?",
  },
  {
    type: "input",
    name: "test-instructions",
    message: "What are the test instructions?",
  },
];

inquirer.prompt(questions).then((answers) => {
  console.log(JSON.stringify(answers, null, "  "));
});
