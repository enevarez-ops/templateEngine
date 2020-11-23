const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");
const fs = require("fs");

// array of questions for user
const questions = [
  {
    type: "input",
    name: "title",
    message: "What is the title of your project?",
  },
  {
    type: "input",
    name: "description",
    message: "What is the description of your project?",
  },
  {
    type: "input",
    name: "install",
    message: "What are the installation instructions for your project?",
  },
  {
    type: "input",
    name: "usage",
    message: "What is the usage for your project?",
  },
  {
    type: "input",
    name: "cont",
    message: "Who contributed to your project",
  },
  {
    type: "input",
    name: "test",
    message: "What tests are performed for your project?",
  },
  {
    type: "checkbox",
    name: "license",
    choices: ["MIT", "Apache 2", "GPL 3.0", "BSD 3"],
    message: "What licenses is your project using?",
  },
];

// console.log(questions);

// function to write README file
// function writeToFile(fileName, data)  {
// }

// function to initialize program
function init() {
  inquirer.prompt(questions).then((response) => {

    fs.writeFileSync("README.md", generateMarkdown(response), function(err) {

      if (err){
        console.log(err)
      } else {
        console.log("Success!")
      }
    })

  })
}

// function call to initialize program
init();
