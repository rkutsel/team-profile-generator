const Employee = require("./Employee");
const Engineer = require("./Engineer");

class Intern extends Employee {
  constructor(name, email, school) {
    super(name, email);
    this.school = school;
    if (!name || !email || !school) {
      throw "Name, email, school cannot be empty!";
    }
  }
  getSchool() {
    return this.school;
  }
  getRole() {
    return "Intern";
  }
}

module.exports = Intern;
