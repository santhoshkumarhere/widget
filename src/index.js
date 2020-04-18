
const body =  document.getElementsByTagName("BODY")[0];
const modal = document.getElementById("myModal");
const companyName = document.getElementById('company-name');
const discountButtonImageName = document.getElementById('button-name');
const discountButtonImages = {
  "bogo": "url('./img/bogo.png')",
  "gift": "url('./img/gift.png')",
  "tenPercent": "url('./img/tenPercent.png')",
  "percentOff": "url('./img/percentOff.png')"
};

const createDiscountButton = () => {
  let discountButton = document.createElement("BUTTON");   // Create a <button> element
  discountButton.className = 'discount-button';
  discountButton.id ='discount-btn';
  discountButton.style.backgroundImage = discountButtonImages[discountButtonImageName.value];

  // When the user clicks the button, open the modal 
  discountButton.onclick = function() {
    modal.style.display = "block";
  }

  body.appendChild(discountButton);
}

const createModalForm = () => {
  const formWrapper = document.getElementById("form-wrapper");
  formWrapper.innerHTML += 
    `<form onsubmit = onSubmit()> 
        <input type="text" id="name"/>
        <button type="submit" id="sign-up" style="border: 0; background: transparent">
          <img src="https://www.pinclipart.com/picdir/middle/108-1085256_student-webmail-login-email-icon-png-transparent-small.png" width="90" height="50" alt="submit" />
        </button>
      </form>`;
  formWrapper.innerHTML += companyName.value;
  formWrapper.style.backgroundColor = document.getElementById('company-background').value;

  const signUpButton = document.getElementById('sign-up');
  signUpButton.addEventListener('click', onSubmit) 
}

const closeModalWindow = () => {
  const span = document.getElementById("close-button");
  span.onclick = () => {
    modal.style.display = "none";
  }

  window.onclick = (event) => {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }
}

createDiscountButton();
createModalForm();
closeModalWindow();


function onSubmit(e) {
  e.preventDefault ();
  console.log('prevented')
  //method="post" action ="https://sales.phidev.com/api/catalog/productLine/010/subproduct/NJ87/quantity"
}

