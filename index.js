// node modules 
const fs = require('fs'); 
const inquirer = require('inquirer');

// roles
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern'); 

// html synthesis
const createHTML = require('./src/page-template');

// establishes team array
const team = [];