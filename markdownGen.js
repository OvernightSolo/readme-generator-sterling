function markdownGen(answers) {
  function renderBadge(licensing) {
    switch (licensing) {
      case "Apache":
        return "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
        break;
      case "Boost":
        return "[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)";
        break;
      case "Eclipse":
        return "[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)](https://opensource.org/licenses/EPL-1.0)";
        break;
      case "MIT":
        return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
        break;
      case "Mozilla":
        return "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)";
        break;
      case "Perl":
        return "[![License: Artistic-2.0](https://img.shields.io/badge/License-Perl-0298c3.svg)](https://opensource.org/licenses/Artistic-2.0)";
        break;
      default:
        return "[![License: unlicensed](https://img.shields.io/badge/license-This%20project%20is%20not%20licensed-red.svg)](https://img.shields.io/badge/license-This%20project%20is%20not%20licensed-red.svg)";
    }
  }

  return `# ${answers.project_title}  ${renderBadge(answers.licensing)}

## 📙 Table of Contents


- [Project Description](#project-description)

- [Usage](#usage)

- [Contributing](#contributing)

- [Installation](#installation)

- [Questions](#questions)

- [License](#license)


## 💻 Project Description
${answers.project_title}


## 🪛 Installation
${answers.installation}


## 🔑 Usage
${answers.usage}


## 🤝🏽 Contributing
${answers.contributions}


## 🧪 Tests
${answers.test_instructions}


## 📃 License
${answers.licensing}


## 🤔 Questions
- [Visit my GitHub](https://github.com/${answers.github})
- Drop me a line at ${answers.email} with your questions.
  `;
}

module.exports = markdownGen;
