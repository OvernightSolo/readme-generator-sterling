function markdownGen(answers) {
  return `# ${answers.project_title}

## Table of Contents


- [Project Description](#project-description)

- [Usage](#usage)

- [Contributing](#contributions)

- [Installation](#installation)

- [Questions](#questions)

- [License](#license)


## Project Description
${answers.description}


## Installation
${answers.installation}


## Usage
${answers.usage}


## Contributions
${answers.contributions}


## Tests
${answers.test_instructions}


## License
${answers.licensing}


## Questions
- github.com/${answers.github}
- ${answers.email}
  `;
}
module.exports = markdownGen;
