function markdownGen(answers) {
  return `
  # ${answers.title}

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
  github.com/${github}
  ${email}
  `;
}
module.exports = markdownGen;
