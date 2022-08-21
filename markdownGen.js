function markdownGen(answers) {
  return `# ${answers.project_title}

## Table of Contents


- [Project Description](#project-description)

- [Usage](#usage)

- [Contributing](#contributing)

- [Installation](#installation)

- [Questions](#questions)

- [License](#license)


## Project Description
${answers.description}


## Installation
${answers.installation}


## Usage
${answers.usage}


## Contributing
${answers.contributions}


## Tests
${answers.test_instructions}


## License
${answers.licensing}


## Questions
- [Visit my GitHub](https://github.com/${answers.github})
- Drop me a line at ${answers.email} with your questions.
  `;
}
module.exports = markdownGen;
