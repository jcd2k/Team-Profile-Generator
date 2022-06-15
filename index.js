const { typeParameterDeclaration } = require("@babel/types");

async function managerFunction() {
    const initAnswers = await inquirer.prompt(initQuestions);
    const managerObj = {
        name: initAnswers.name,
        email: initAnswers.email,
        employeeID: initAnswers.employeeID,
        officeNumber: initAnswers.officeNumber
    };
    teamArr.push(managerObj);
    console.log(teamArr);
    promptAnswers = initAnswers;
    return promptAnswers;
}

async function engineerFunction() {
    const initAnswers = await inquirer.prompt(initQuestions);
    const managerObj = {
        name: initAnswers.name,
        email: initAnswers.email,
        employeeID: initAnswers.employeeID,
        officeNumber: initAnswers.officeNumber
    };
    teamArr.push(managerObj);
    console.log(teamArr);
    promptAnswers = initAnswers;
    return promptAnswers;
}