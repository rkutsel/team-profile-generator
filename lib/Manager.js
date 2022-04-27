const Employee = require("./Employee");

class Manager extends Employee {
  constructor(name, email, officeNumber) {
    super(name, email);
    this.officeNumber = officeNumber;
    if (!name || !email || !officeNumber) {
      throw "Name, email, officeNumber cannot be empty!";
    }
  }
  getRole() {
    return "Manager";
  }
}
module.exports = Manager;
