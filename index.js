const inquirer = require("inquirer");
const fs = require("fs");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const questions = require("./src/questions");
const template = require("./src/template");

function addManager() {
	let savedAnswers = [];

	inquirer.prompt(questions.managerQuestions).then((answers) => {
		const { firstName, email, officeNumber } = answers;
		savedAnswers.push(firstName, email, officeNumber);
		const newManager = new Manager(...savedAnswers);
		appendToFile(template.panelManager(newManager));
		addEmployee();
	});
}

function addEngineer() {
	let savedAnswers = [];

	inquirer.prompt(questions.engineerQuestions).then((answers) => {
		const { firstName, email, githubUser } = answers;
		savedAnswers.push(firstName, email, githubUser);

		const newEngineer = new Engineer(...savedAnswers);
		appendToFile(template.panelEngineer(newEngineer));
		addMoreEmployees();
	});
}

function addIntern() {
	let savedAnswers = [];

	inquirer.prompt(questions.internQuestions).then((answers) => {
		const { firstName, email, schoolName } = answers;
		savedAnswers.push(firstName, email, schoolName);
		const newIntern = new Intern(...savedAnswers);
		appendToFile(template.panelIntern(newIntern));
		addMoreEmployees();
	});
}

function addEmployee() {
	inquirer.prompt(questions.generalQuestions[1]).then((answer) => {
		if (answer.employee === "Manager") {
			addManager();
		} else if (answer.employee === "Engineer") {
			addEngineer();
		} else if (answer.employee === "Intern") {
			addIntern();
		} else {
			appendToFile(template.tail);
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

function appendToFile(section) {
	fs.appendFileSync("./dist/index.html", section);
}

function isFile(path = "./dist/index.html") {
	try {
		if (fs.existsSync(path)) {
			fs.writeFileSync(path, template.head);
		} else {
			fs.appendFileSync(path, template.head);
		}
	} catch (err) {
		console.error(err);
	}
}

function init() {
	isFile();
	// appendToFile(template.head);
	addManager();
}

init();
