const inquirer = require("inquirer");
const fs = require("fs");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const questions = require("./src/questions");
const template = require("./src/template");

function addManager() {
  fs.writeFileSync("./dist/index.html", template.head);
  let savedAnswers = [];

  inquirer.prompt(questions.managerQuestions).then((answer) => {
    savedAnswers.push(answer.first_name, answer.email, answer.office_number);
    const newManager = new Manager(...savedAnswers);
    console.log(newManager.id);
    fs.appendFileSync("./dist/index.html", template.panelManager(newManager));
    addEmployee();
  });
}

function addEmployee() {
  let savedAnswers = [];

  inquirer.prompt(questions.generalQuestions[1]).then((answer) => {
    if (answer.employee === "Engineer") {
      inquirer.prompt(questions.engineerQuestions).then((answer) => {
        savedAnswers.push(
          answer.first_name,
          answer.email,
          answer.engineer_github
        );

        const newEngineer = new Engineer(...savedAnswers);
        fs.appendFileSync(
          "./dist/index.html",
          template.panelEngineer(newEngineer)
        );
        addMoreEmployees();
      });
    } else if (answer.employee === "Intern") {
      inquirer.prompt(questions.internQuestions).then((answer) => {
        savedAnswers.push(
          answer.first_name,
          answer.email,
          answer.intern_school
        );
        const newIntern = new Intern(...savedAnswers);
        fs.appendFileSync("./dist/index.html", template.panelIntern(newIntern));
        addMoreEmployees();
      });
    } else {
      fs.appendFileSync("./dist/index.html", template.tail);
      console.log(
        "Operation canceled. You can try again by running 'node index'"
      );
    }
  });
}

function addMoreEmployees() {
  inquirer.prompt(questions.generalQuestions[0]).then((answer) => {
    console.log(answer);
    if (answer.more_employees) {
      addEmployee();
    } else {
      fs.appendFileSync("./dist/index.html", template.tail);
      console.log(
        "Operation canceled. You can try again by running 'node index'"
      );
    }
  });
}

function init() {
  addManager();
}

init();
