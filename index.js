document.addEventListener('DOMContentLoaded', async function () {

   
    var calendarEl = document.getElementById('calendar');
    let eventsForCalendar = [];
    console.log(eventsForCalendar)

    //obtenir les ino depuis l'api
    let eventsList = await getEvents()
    //boucler à travers la liste d evenement pour inserer les elements dans le calendrier
    // console.log(eventsList)

    for (const element of eventsList) {
        let date = element.date
        let objectToPush = {
            id: element.id,
            start: date,
            duration: element.heure_debut,
            title: element.nom,     
        }

        eventsForCalendar.push(objectToPush)
    }
    let teamEl = document.getElementById("team")
    let teamList = await getTeams()
    for(const team of teamList) {
        teamEl.innerHTML += 
       
                           ` <div class="card col" style="width: 18rem;">
  <img src="${team.logo}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${team.nom}</h5>
    <p class="card-text">Entraineur: ${team.entraineur}</p>
    <!-- Button trigger modal -->
<button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#${team.nom}">
  Liste des joueurs
</button>

<!-- Modal -->
<div class="modal fade" id="${team.nom}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        ...
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>
  </div>
</div> `
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