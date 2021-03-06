// add employee specific cards to the webpage
const developTeam = teamData => {
    var cardInput = ``;
    for (i =0; i<teamData.length; i++ ){
        console.log(teamData[i])
    
        if (teamData[i].getRole() === 'Manager'){
            cardInput += managerCard(teamData[i]);
        }
        else if (teamData[i].getRole() === 'Intern'){
            cardInput += internCard(teamData[i]);
        }
        else if (teamData[i].getRole() === 'Engineer'){
            cardInput += engineerCard(teamData[i]);
        }
    }
    return cardInput;
    console.log(cardInput);
}
// html input for manager info
const managerCard = (teamData) => {
    return `
    <section class="standard-card">
    <div class=title-li>
    <ul>
    ${teamData.getName()}
    </ul>
    <ul>
    ${teamData.getRole()}
    </ul>
    </div>
    <div class=employee-info>
    <ul>
    ID: ${teamData.id}
    </ul>
    <ul>
    Email :<a href= "mailto: ${teamData.email}">${teamData.email}</a>
    </ul>
    <ul>
    Office #: ${teamData.office}
    </ul>
    </div>
    </section>`;
}
// html input for intern info
const internCard = (teamData) => {
    return `
    <section class="standard-card">
    <div class=title-li>
    <ul>
    ${teamData.name}
    </ul>
    <ul>
    ${teamData.getRole()}
    </ul>
    </div>
    <div class=employee-info>
    <ul>
    ID: ${teamData.id}
    </ul>
    <ul>
    Email :<a href= "mailto: ${teamData.email}">${teamData.email}</a>
    </ul>
    <ul>
    School: ${teamData.school}
    </ul>
    </div>
    </section>`;
}
// html input for engineer info
const engineerCard = (teamData) => {
    return `
    <section class="standard-card">
    <div class=title-li>
    <ul>
    ${teamData.name}
    </ul>
    <ul>
    ${teamData.getRole()}
    </ul>
    </div>
    <div class=employee-info>
    <ul>
    ID: ${teamData.id}
    </ul>
    <ul>
    Email :<a href= "mailto: ${teamData.email}">${teamData.email}</a>
    </ul>
    <ul>
    Github :<a href="https://github.com/${teamData.github}">${teamData.github}</a>
    </ul>
    </div>
    </section>`;
}

const standard = (teamData) => {
    if (teamData.length >= 4){
        for (i=0;i<4;i++){
            forEngineers(teamData); 
            return `
            <section class="standard-card">
            </section>`;
            
        }
    } 
    else {
        for (i=0; i<teamData.length; i++){
            forEngineers(teamData); 
            return `
            <section class="standard-card">
            </section>`;
        }  
    }
};
// main html
function generateSite(teamData) {
return `
  <!DOCTYPE html>
  <html lang="en">
  
  <!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <link
      rel="stylesheet"
      href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
    />
    <link rel="stylesheet" href="./style.css">
      <title>My Team</title>
  </head>
  <body>
  <header class="container-lg">
  <section class= "row d-flex justify-content-center " id="header"> 
        <div class="text-light h1 ">
          My Team
        </div>
        <section>
</header>
    <main class="container-lg" id="cards">
      <section id="team">${developTeam(teamData)}</section>
    </main>
  </body>
  </html>
  `;
};


module.exports = generateSite;