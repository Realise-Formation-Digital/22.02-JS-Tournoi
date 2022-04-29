document.addEventListener('DOMContentLoaded', async function gettournoi() {

   
  let calendarEl = document.getElementById('calendar');
  // let nomMonEvenement = ""
  // let datemonEvenement = ""
  // let heureMonEvenement = ""
  let eventsForCalendar = [];

  //obtenir les ino depuis l'api
  let eventsList = await getEvents()
  //boucler à travers la liste d evenement pour inserer les elements dans le calendrier
  // console.log(eventsList)

  for (const element of eventsList) { 
      let objectToPush = {
          id: element.id,
          title: element.nom,
          date: element.date,
          lieu : element.lieu,
          // allDay: false,
          start: element.date+"T"+element.heure_debut, 
          end: element.date+"T"+element.heure_fin
      }  

      eventsForCalendar.push(objectToPush)
  }

  console.log(eventsForCalendar)
  
  var calendar = new FullCalendar.Calendar(calendarEl, {
      locale: 'fr',
      headerToolbar:  {

          left: "dayGridMonth, dayGridWeek, timeGrid, list", // will normally be on the left. if RTL, will be on the right
          center: 'title',
          right: 'today prev,next', // will normally be on the right. if RTL, will be on the left
        
        },
      events: eventsForCalendar,
      dateClick: function(arg) {
        console.log(arg.date.toString()); // use *local* methods on the native Date Object
        // will output something like 'Sat Sep 01 2018 00:00:00 GMT-XX:XX (Eastern Daylight Time)'
      }
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
