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

const managerCard = (teamData) => {
    return `
    <section class="standard-card">
    <div class=name_id_li>
    <ul>
    ${teamData.getName()}
    </ul>
    <ul>
    ${teamData.getRole()}
    </ul>
    </div>
    <div class=other_info>
    <ul>
    ID: ${teamData.id}
    </ul>
    <ul>
    Email :<a href= "mailto: ${teamData.email}">${teamData.email}</a>
    </ul>
    <ul>
    Office number: ${teamData.office}
    </ul>
    </div>
    </section>`;
}

const internCard = (teamData) => {
    return `
    <section class="standard-card">
    <div class=name_id_li>
    <ul>
    ${teamData.name}
    </ul>
    <ul>
    ${teamData.getRole()}
    </ul>
    </div>
    <div class=other_info>
    <ul>
    Email :<a href= "mailto: ${teamData.email}">${teamData.email}</a>
    </ul>
    <ul>
    ID: ${teamData.id}
    </ul>
    <ul>
    School: ${teamData.school}
    </ul>
    </div>
    </section>`;
}

const engineerCard = (teamData) => {
    return `
    <section class="standard-card">
    <div class=name_id_li>
    <ul>
    ${teamData.name}
    </ul>
    <ul>
    ${teamData.getRole()}
    </ul>
    </div>
    <div class=other_info>
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
      <section id="team-top">${developTeam(teamData)}</section>
      <section id="team-bottom"></section>
    </main>
  </body>
  </html>
  `;
};


module.exports = generateSite;