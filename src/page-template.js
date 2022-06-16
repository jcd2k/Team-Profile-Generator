const createManager = function (manager) {
    return `

    `;
}

const createEngineer = function (engineer) {
    return `
    
    `;
}

const createIntern = function (intern) {
    return `
    
    `;
}

const createHtml = (members) => {
    
    cards = [];

    for (let i = 0; i < members.length; i++) {
        const member = members[i];
        const role = member.role;
        
        if (role === "Manager") {
            const manager = genManager(member);
            cards.push(manager);
        }

        if (role === "Intern") {
            const intern = genIntern(member);
            cards.push(intern);
        }

        if (role === "Engineer") {
            const engineer = genEngineer(member);
            cards.push(engineer);
        }
    }

    const employeeCards = cards.join("");

    const createTeam = genTeamMembersonPage(employeeCards);
    return createTeam;
}

const createPage = function (employeeCards) {   
    return`
    <!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Team Profile</title>
      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossorigin="anonymous">
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
      <link rel="stylesheet" href="style.css">
  </head>
  <div class="card">
  <img src="../blank-profile-picture.jpg" alt="profile" style="width:100%">
  <h1>John Doe</h1>
  <p class="role">CEO & Founder, Example</p>
  <p class="role">CEO & Founder, Example</p>
  <p class="role">CEO & Founder, Example</p>
  <p class="role">CEO & Founder, Example</p>
  <p class="role">CEO & Founder, Example</p>
</div>
  `;
}

module.exports = createHTML;