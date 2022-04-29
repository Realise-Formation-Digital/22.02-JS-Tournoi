document.addEventListener('DOMContentLoaded', async function gettournoi() {
  
    let calendarEl = document.getElementById('calendar');
    async function gettournoi() {
      try {
        const response = await axios.get('https://apitournoi.nait-web.com/api/tournoi/list');
        console.log("reponse",response);
        for (const element of reponse.data) {
          title = element.nom
          calendar.innerHTML += calendar
        }
      } catch (error) {
        console.error(error);
      }
    }
    
    await gettournoi();
    let calendar = new FullCalendar.Calendar(calendarEl, {
      defaultView: 'timeGridWeek',
      headerToolbar: {
           left: 'dayGridMonth, dayGridWeek, timeGrid list',
           center: 'title',
           right: 'today prev,next' ,
         },
      events: [
        { // this object will be "parsed" into an Event Object
          title: 'The BUUR', // a property!
          start: '2022-04-25', // a property!
          end: '2018-09-02', // a property! ** see important note below about 'end' **
        
          
         
        }
      ]
      
      
      
    
    });
  
   
    calendar.render();
});
