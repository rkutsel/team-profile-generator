class Employee {
  constructor(name, email) {
    this.id = Math.floor(Math.random() * 1000 + 1000);
    this.name = name;
    this.email = email;
  }
  getId() {
    if (parseInt(this.id)) {
      return this.id;
    } else {
      throw "ID must be a number! Please try again.";
    }
  }
  getName() {
    if (this.name.length > 2) {
      return this.name;
    } else {
      throw "Name must be longer than 2 characters.";
    }
  }
  getEmail() {
    if (this.email.length >= 5) {
      return this.email;
    } else {
      throw "Email length must be longer.";
    }
  }
  getRole() {
    return "Employee";
  }
}

module.exports = Employee;
