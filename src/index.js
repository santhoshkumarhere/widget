
var body =  document.getElementsByTagName("BODY")[0];
body.innerHTML+= '<button id="myBtn" class="widget-button round-button"> Home</button>'
 
// Get the modal
var modal = document.getElementById("myModal");
var formWrapper = document.getElementById("form-wrapper");
formWrapper.innerHTML += '<form onsubmit = onSubmit()> <input type="text" id="name"/><button type="submit" id="sign-up" style="border: 0; background: transparent"> <img src="https://www.pinclipart.com/picdir/middle/108-1085256_student-webmail-login-email-icon-png-transparent-small.png" width="90" height="50" alt="submit" /></button></form>';

const  companyName = document.getElementById('company-name');
formWrapper.innerHTML += companyName.value;
formWrapper.style.backgroundColor = document.getElementById('company-background').value;


const signUpButton = document.getElementById('sign-up');
signUpButton.addEventListener('click', onSubmit)
// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

function onSubmit(e) {
e.preventDefault ();
console.log('prevented')
//method="post" action ="https://sales.phidev.com/api/catalog/productLine/010/subproduct/NJ87/quantity"
}