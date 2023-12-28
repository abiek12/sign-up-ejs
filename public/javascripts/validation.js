const form = document.querySelector('form');
const userName = document.querySelector('input[name="userName"]');
const emailField = document.querySelector('input[type="email"]');
const passwordField = document.querySelector('input[name="password"]');
const confirmPasswordField = document.querySelector('input[name="re-password"]');


form.addEventListener("submit", (event)=>{
  if (userName.value === "" || emailField.value === "" || passwordField.value === "" || confirmPasswordField.value === "") {
    event.preventDefault();
    alert("Please fill up the form completly");
    return false;
  }
});
