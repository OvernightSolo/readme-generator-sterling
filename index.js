var inquirer = require("inquirer");
const fs = require("fs");
// var ui = new inquirer.ui.BottomBar();
// ui.log.write("Press ctrl + D to cancel out.");
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
    type: "input",
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
    type: "input",
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
    type: "input",
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
    type: "input",
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
    choices: [
      "Apache",
      "Boost",
      "Eclipse",
      "MIT",
      "Mozilla",
      "Perl",
      "Unlicense",
    ],
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
