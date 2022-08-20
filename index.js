var inquirer = require("inquirer");
const fs = require("fs");

const questions = [
  {
    type: "input",
    name: "project_title",
    message: "What is the title of your project?",
    validate: (answer) => {
      if (answer === "") {
        return "Please enter the title";
      }
      return true;
    },
  },
  {
    type: "editor",
    name: "description",
    message: "Describe your project",
    validate: (answer) => {
      if (answer === "") {
        return "Please enter something";
      }
      return true;
    },
  },
  {
    type: "input",
    name: "table-of-contents",
    message: "Which items would you like to be in the Table of Contents?",
    validate: (answer) => {
      if (answer === "") {
        return "Please enter something";
      }
      return true;
    },
  },
  {
    type: "editor",
    name: "installation",
    message: "What are the installation instructions?",
    validate: (answer) => {
      if (answer === "") {
        return "Please enter something";
      }
      return true;
    },
  },
  {
    type: "editor",
    name: "usage",
    message: "How do you use this application?",
    validate: (answer) => {
      if (answer === "") {
        return "Please enter something";
      }
      return true;
    },
  },
  {
    type: "editor",
    name: "contributions",
    message: "What are the contribution guidelines?",
    validate: (answer) => {
      if (answer === "") {
        return "Please enter something";
      }
      return true;
    },
  },
  {
    type: "editor",
    name: "test-instructions",
    message: "What are the test instructions?",
    validate: (answer) => {
      if (answer === "") {
        return "Please enter something";
      }
      return true;
    },
  },
  {
    type: "list",
    name: "licensing",
    message:
      "Which of the following is the correct licensing for this application?",
    validate: (answer) => {
      if (answer === "") {
        return "Please select a choice from the options";
      }
      return true;
    },
    choices: ["Choice 1", "Choice 2", "Choice 3"],
  },
  {
    type: "input",
    name: "github-name",
    message: "What is your GitHub username?",
    validate: (answer) => {
      if (answer === "") {
        return "Please enter a username";
      }
      return true;
    },
  },
  {
    type: "input",
    name: "email",
    message: "What is your email address?",
    validate: (answer) => {
      if (answer === "") {
        return "Please enter an email address";
      }
      return true;
    },
  },
];

inquirer.prompt(questions).then((answers) => {
  console.log(JSON.stringify(answers, null, "  "));
});
