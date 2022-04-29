const generalQuestions = [
	{
		type: "confirm",
		name: "more_employees",
		message: "Would you like to add more Employees?",
	},
	{
		type: "list",
		name: "employee",
		message:
			"Would you like to add an Engineer or an Intern?\n Choose CANCEL to EXIT.",
		choices: ["Engineer", "Intern", "CANCEL"],
	},
];

const managerQuestions = [
	{
		type: "input",
		name: "firstName",
		message: "Enter Manager's first name",
	},
	{
		type: "input",
		name: "email",
		message: "Enter Manager's email",
	},
	{
		type: "input",
		name: "officeNumber",
		message: "Enter Manager's office number.",
	},
];

const engineerQuestions = [
	{
		type: "input",
		name: "firstName",
		message: "Enter Engineer's first name",
	},
	{
		type: "input",
		name: "email",
		message: "Enter Engineer's email",
	},
	{
		type: "input",
		name: "githubUser",
		message: "Enter Engineer's github username.",
	},
];

const internQuestions = [
	{
		type: "input",
		name: "firstName",
		message: "Enter Intern's first name",
	},
	{
		type: "input",
		name: "email",
		message: "Enter Intern's email",
	},
	{
		type: "input",
		name: "schoolName",
		message: "Enter Intern's school name.",
	},
];

module.exports = {
	generalQuestions,
	managerQuestions,
	engineerQuestions,
	internQuestions,
};
