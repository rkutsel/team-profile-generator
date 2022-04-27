const Employee = require("../lib/Employee");
const Manager = require("../lib/Manager");

describe("Manager Tests Section", () => {
  describe("Manager Successful Tests", () => {
    test("Call 'getRole' method and return user role as 'Manager'", () => {
      const newManager = new Manager(1, "john", "john@mail.com", 101);
      expect(newManager.getRole()).toBe("Manager");
    });
    test("Expect class Manager to be an instance of Employee Parent class.", () => {
      const name = "John";
      const email = "john@mail.com";
      const office = 101;
      expect(new Manager(name, email, office)).toBeInstanceOf(Employee);
    });
  });
  describe("Manager expected failures", () => {
    test("Define a new Manager constructor with no params. Expect an error thrown.", () => {
      expect(() => {
        const newManager = new Manager();
      }).toThrowError();
    });
  });
});
