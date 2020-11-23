// function to generate markdown for README
function generateMarkdown(data) {
  return `
![Badge](https://img.shields.io/static/v1?label=License&message=${data.license}&color=9cf)

### Table of Contents:
* [Title](##-Title)
* [Description](##-Description)
* [Installation](##-Installation)
* [Usage](##-Usage)
* [Contributors](##-Contributors)
* [Tests](##-Tests)
* [License](##-License)

## Title: 
${data.title}

## Description:
${data.description}


## Installation:
${data.install}

## Usage:
${data.usage}

## Contributors:
${data.cont}

## Tests:
${data.test}

## License(s):
This project is licensed under ${data.license}
`;
}

module.exports = generateMarkdown;
