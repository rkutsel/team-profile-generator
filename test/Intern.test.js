const Employee = require("../lib/Employee");
const Intern = require("../lib/Intern");

describe("Intern Tests Section", () => {
  describe("Intern Successful Tests", () => {
    test("Call 'getRole' method and return user role as 'Intern'", () => {
      const newIntern = new Intern(1, "john", "john@mail.com", "UW");

      expect(newIntern.getRole()).toBe("Intern");
    });
    test("Expect class Intern to be an instance of Employee Parent class.", () => {
      const name = "John";
      const email = "john@mail.com";
      const school = "UW";
      expect(new Intern(name, email, school)).toBeInstanceOf(Employee);
    });
  });
  describe("Intern expected failures", () => {
    test("Define a new Intern constructor with no params. Expect an error thrown.", () => {
      expect(() => {
        const newIntern = new Intern();
      }).toThrowError();
    });
  });
});
