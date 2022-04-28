let submitBtn = document.getElementById('submitter')

let myname = document.getElementById('namebox')
let myemail = document.getElementById('emailbox')
let mymessage = document.getElementById('messagebox')

let checkEnableButton = () => { // il check si les casses sont rempliees
  submitBtn.disabled = !(
      namebox.value && 
      emailbox.value && 
      messagebox.value
    )
}

myname.addEventListener('change', checkEnableButton)
myemail.addEventListener('change', checkEnableButton)
mymessage.addEventListener('change', checkEnableButton)