 async function inscrireEquipe(){
    
    await axios.post("https://apitournoi.nait-web.com/api/equipe/add"),{
           id: document.getElementById("id").value,
           nom: document.getElementById("nom").value,
           entraineur: document.getElementById("entraineur").value,
           logo: document.getElementById("logo").value


       } .then(function (response) {
           console.log(response);
         })
         .catch(function (error) {
           console.log(error);
         });

  
}