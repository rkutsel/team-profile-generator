### MIT License

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

# Rudimentary HTML Profile Generator

## Description

**Node.js** command-line **HTML** page generator that relies on **[enquirer](https://www.npmjs.com/package/inquirer)** to interact with a user and plugs that into the generated HTML page with some basic user info that includes a Manager, Engineer and an Intern roles. That's just a simple example that can be further extended into something more concrete. The classes that were already defined for `Employee` as a parent and its children: `Manager`, `Engineer`, `Intern`

## Installation Instructions

> NOTE: Make sure you have `Node.JS ~v16.14.2` and `NPM ~8.5.0` installed. You can quickly check this by running `node -v` for Node.JS and `npm -v` for NPM in your terminal.

Once the above is confirmed, you can go ahead and clone the repo and install the dependencies by running `npm i` in your terminal. I recommend you install them locally. You should run and get somewhat similar output like the one bellow:

```bash
>npm i

added 57 packages, and audited 58 packages in 1s

17 packages are looking for funding
  run `npm fund` for details

found 0 vulnerabilities
```

## Usage with Examples

## Tests

## User Story

```md
AS A manager
I WANT to generate a webpage that displays my team's basic info
SO THAT I have quick access to their emails and GitHub profiles
```

## Acceptance Criteria

```md
GIVEN a command-line application that accepts user input
WHEN I am prompted for my team members and their information
THEN an HTML file is generated that displays a nicely formatted team roster based on user input
WHEN I click on an email address in the HTML
THEN my default email program opens and populates the TO field of the email with the address
WHEN I click on the GitHub username
THEN that GitHub profile opens in a new tab
WHEN I start the application
THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number
WHEN I enter the team manager’s name, employee ID, email address, and office number
THEN I am presented with a menu with the option to add an engineer or an intern or to finish building my team
WHEN I select the engineer option
THEN I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu
WHEN I select the intern option
THEN I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu
WHEN I decide to finish building my team
THEN I exit the application, and the HTML is generated
```
