// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
              #Description
              #Install Instructions
              #Usage of App
              #Contributors
              #Test for App
              #License
              
              Title: 
              ${data.title},
              Description:
              ${data.description},
              Installation:
              ${data.install},
              Usage:
              ${data.usage}, 
              Contributors:
              ${data.cont}, 
              Tests:
              ${data.test}, 
              License(s):
              ${data.license}
`;
}

module.exports = generateMarkdown;
