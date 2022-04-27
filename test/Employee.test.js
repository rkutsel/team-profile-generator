const Employee = require("../lib/Employee");

describe("Employee Tests Section", () => {
  describe("Employee Successful Tests", () => {
    const name = "John";
    const email = "john@john.com";

    const newEmployee = new Employee(name, email);
    test("Call 'getName' method and return user name", () => {
      expect(newEmployee.getName()).toBe(name);
    });
    test("Call 'getEmail' method and return user email", () => {
      expect(newEmployee.getEmail()).toBe(email);
    });
    test("Call 'getRole' method and return user role", () => {
      expect(newEmployee.getRole()).toBe("Employee");
    });
  });
  describe("Employee Expected Failures", () => {
    const name = "";
    const email = "";
    const newEmployee = new Employee(name, email);
    test("Pass an empty string to 'getName' method and throw an error", () => {
      expect(() => {
        newEmployee.getName();
      }).toThrowError();
    });
    test("Pass an empty string to 'getEmail' method and throw an error", () => {
      expect(() => {
        newEmployee.getEmail();
      }).toThrowError();
    });
  });
});
