// function subm(){
//     let sub = document.forms["formname"]["name"]["email"]["comment"].value;
//     if (sub == "") {
//         alert("name, email and a message must be filled");
//     }
// }

let submitBtn = document.getElementById('submitter')

let myname = document.getElementById('namebox')
let myemail = document.getElementById('emailbox')
let mymessage = document.getElementById('messagebox')
// run this function whenever the values of any of the above 4 inputs change.
// this is to check if the input for all 4 is valid.  if so, enable submitBtn.
// otherwise, disable it.
let checkEnableButton = () => {
  submitBtn.disabled = !(
      namebox.value && 
      emailbox.value && 
      messagebox.value
    )
}

myname.addEventListener('change', checkEnableButton)
myemail.addEventListener('change', checkEnableButton)
mymessage.addEventListener('change', checkEnableButton)