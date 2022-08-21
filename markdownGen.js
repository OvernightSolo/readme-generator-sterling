function markdownGen(answers) {
  return `
# ${answers.project_title}

## Table of Contents
[Project Description](#Description)
[Usage](#Usage)
[Contributing](#Contributing)
[Installation](#Installation)
[Questions](#Questions)
[License](#License)

## Description
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

## Contact Information
github.com/${answers.github}
${answers.email}
  `;
}
module.exports = markdownGen;
