document.addEventListener('DOMContentLoaded', async function () {

   
    var calendarEl = document.getElementById('calendar');
    let nomMonEvenement = ""
    let datemonEvenement = ""
    let eventsForCalendar = [

        
    ];
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
    
    var calendar = new FullCalendar.Calendar(calendarEl, {
        headerToolbar:  {

            left: "dayGridMonth, dayGridWeek, timeGrid, list", // will normally be on the left. if RTL, will be on the right
            center: 'title',
            right: 'today prev,next' // will normally be on the right. if RTL, will be on the left
          },
          events: eventsForCalendar
          //[
        //      { // this object will be "parsed" into an Event Object
        //          initialView: 'dayGridMonth',
        //          title: nomMonEvenement, // a property!
        //          start: datemonEvenement // a property!
        //          // end: '2022-04-28' // a property! ** see important note below about 'end' **
        //      }
        //  ]
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