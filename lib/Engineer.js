const Employee = require("./Employee");

class Engineer extends Employee {
  constructor(name, email, github) {
    super(name, email);
    this.github = github;
    if (!name || !email || !github) {
      throw "Name, email, github cannot be empty!";
    }
  }
  getGithub() {
    if (this.github.length > 2) {
      return `https://github.com/${this.github}`;
    } else {
      throw "Must be at least 2 characters long.";
    }
  }
  getRole() {
    return "Engineer";
  }
}

module.exports = Engineer;
