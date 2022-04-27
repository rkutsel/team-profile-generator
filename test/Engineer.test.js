const Employee = require("../lib/Employee");
const Engineer = require("../lib/Engineer");

describe("Engineer Tests Section", () => {
  describe("Engineer Successful Tests", () => {
    test("Call 'getRole' method and return user role as 'Engineer'", () => {
      const newEngineer = new Engineer(1, "john", "john@mail.com", "john");

      expect(newEngineer.getRole()).toBe("Engineer");
    });
    test("Expect class Engineer to be an instance of Employee Parent class.", () => {
      const name = "John";
      const email = "john@mail.com";
      const github = "john";
      expect(new Engineer(name, email, github)).toBeInstanceOf(Employee);
    });
  });
  describe("Engineer Expected Failures", () => {
    const newEngineer = new Engineer("john", "john@mail.com", "a");
    test("Call 'getGithub' method with a wrong data type and throw an error", () => {
      expect(() => {
        newEngineer.getGithub();
      }).toThrowError();
    });
    test("Define a new Engineer constructor with no params. Expect an error thrown.", () => {
      expect(() => {
        const newEngineer = new Engineer();
      }).toThrowError();
    });
  });
});
