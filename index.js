const inquirer = require("inquirer");
const fs = require("fs");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const questions = require("./src/questions");
const template = require("./src/template");

function addManager() {
	let savedAnswers = [];
	fs.writeFileSync("./dist/index.html", template.head);

	inquirer.prompt(questions.managerQuestions).then((answers) => {
		const { firstName, email, officeNumber } = answers;
		savedAnswers.push(firstName, email, officeNumber);
		const newManager = new Manager(...savedAnswers);
		appendToFile(template.panelManager(newManager));
		addEmployee();
	});
}

function addEmployee() {
	let savedAnswers = [];

	inquirer.prompt(questions.generalQuestions[1]).then((answer) => {
		if (answer.employee === "Engineer") {
			inquirer.prompt(questions.engineerQuestions).then((answers) => {
				const { firstName, email, githubUser } = answers;
				savedAnswers.push(firstName, email, githubUser);

				const newEngineer = new Engineer(...savedAnswers);
				appendToFile(template.panelEngineer(newEngineer));
				addMoreEmployees();
			});
		} else if (answer.employee === "Intern") {
			inquirer.prompt(questions.internQuestions).then((answers) => {
				const { firstName, email, schoolName } = answers;
				savedAnswers.push(firstName, email, schoolName);
				const newIntern = new Intern(...savedAnswers);
				appendToFile(template.panelIntern(newIntern));
				addMoreEmployees();
			});
		} else {
			fs.appendFileSync(template.tail);
			console.log(
				"Operation canceled. You can try again by running 'node index'"
			);
		}
	});
}

function addMoreEmployees() {
	inquirer.prompt(questions.generalQuestions[0]).then((answer) => {
		if (answer.more_employees) {
			addEmployee();
		} else {
			appendToFile(template.tail);
			console.log(
				"Operation canceled. You can try again by running 'node index'"
			);
		}
	});
}

function appendToFile(role) {
	fs.appendFileSync("./dist/index.html", role);
}

function init() {
	addManager();
}

init();
