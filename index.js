document.addEventListener('DOMContentLoaded', async function () {

   
    var calendarEl = document.getElementById('calendar');
    let eventsForCalendar = [];
    console.log(eventsForCalendar)

    //obtenir les infos depuis l'api
    let eventsList = await getEvents()
    //boucle à travers la liste d evenement pour inserer les elements dans le calendrier

    for (const element of eventsList) {
        let date = element.date
        let objectToPush = {
            id: element.id,
            start: date,
            duration: element.heure_debut,
            title: element.nom,
            lieu : element.lieu,
            allDay: false,
            start: element.date+"T"+element.heure_debut, 
            end: element.date+"T"+element.heure_fin    
        }

        eventsForCalendar.push(objectToPush)
    }
    // afficher les equipes
    let teamEl = document.getElementById("team")
    let teamList = await getTeams()
    
    for(const team of teamList) {
        
        teamEl.innerHTML += 
       
          ` <div class="card  col" style="width: 18rem;height: 25rem;">
                <img src="${team.logo}" class="card-img-top"style="height: 18rem; alt="...">
            <div class="card-body">
                <h5 class="card-title">${team.nom}</h5>
                <p class="card-text">Entraineur: ${team.entraineur}</p>
            </div>`;

    }
    
    
    var calendar = new FullCalendar.Calendar(calendarEl, {
        headerToolbar:  {

            left: "dayGridMonth, dayGridWeek, timeGrid, list", // will normally be on the left. if RTL, will be on the right
            center: 'title',
            right: 'today prev,next' // will normally be on the right. if RTL, will be on the left
          },
          events: eventsForCalendar
    });

    calendar.render();
    //afficher les joueurs
    let joueurList = await getPlayerList()
    let ulEl = document.getElementById("ul-liste")
    
      for(const joueur of joueurList){
          console.log(joueur)
       ulEl.innerHTML += `<li>
       <p>${joueur.nom}</p>
       <p>Age: ${joueur.age}</p>
       <p>Pays: ${joueur.nationalité}</p>
       </li>`
      
      }
    

});


// Get Evenment
async function getEvents() {
    try {
        let response = await axios.get("https://apitournoi.nait-web.com/api/tournoi/list")
        if (response.status !== 200) throw new Error('failed')
        return response.data
    } catch (e) {
        console.log(e)
    }
}
// get team
async function getTeams() {
    try {
        let response = await axios.get("https://apitournoi.nait-web.com/api/equipe/list")
        if (response.status !== 200) throw new Error('failed')
        return response.data
    } catch (e) {
        console.log(e)
    }
}

//get player list
async function getPlayerList() {
  try {
      let response = await axios.get("https://apitournoi.nait-web.com/api/joueur/list")
      if (response.status !== 200) throw new Error('failed')
      return response.data
  } catch (e) {
      console.log(e)
  }
}


// code gab formulaire

// function sub(){
//     let submitBtn = document.getElementById('submitter')
    
//     let myname = document.getElementById('nom')
//     // let myID = document.getElementById('id')
//     // let mymessage = document.getElementById('messagebox')
//     let mylogo = document.getElementById('logo')
//     // let myteam = document.getElementById('equipe_id')
//     let myentraineur = document.getElementById('entraineur')
    
//     let checkEnableButton = () => { 
//       submitBtn.disabled = !(
//           nom.value && 
//         //   id.value && 
//         //   messagebox.value &&
//           logo.value &&
//         //   equipe_id.value &&
//           entraineur.value
//         )
//     }
//     // il check si les casses sont rempliees
//     myname.addEventListener('change', checkEnableButton)
//     // myID.addEventListener('change', checkEnableButton)
//     // mymessage.addEventListener('change', checkEnableButton)
//     mylogo.addEventListener('change', checkEnableButton)
//     // myteam.addEventListener('change', checkEnableButton)
//     myentraineur.addEventListener('change', checkEnableButton)

// 