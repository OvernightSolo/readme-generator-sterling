var inquirer = require("inquirer");
const fs = require("fs");
const markdownGen = require("./markdownGen");

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
    name: "test_instructions",
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
      "Unlicensed",
    ],
  },
  {
    type: "input",
    name: "github",
    message: "For questions, what is your GitHub username?",
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
    message: "For questions, what is your email address?",
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

  fs.writeFile("README.md", markdownGen(answers), (err) =>
    err ? console.error(err) : console.log("Success!")
  );
});
