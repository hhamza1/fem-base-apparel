let inputGroup = document.querySelector(".input-group")
let email = document.querySelector("input");
let emailError = document.querySelector("#error");
let form = document.querySelector("form")

let emailValidity = email.validity;

function emailValidator(input, validator) {
    if(!validator.valid || input.value === ""){
        emailError.classList.remove("hidden");
        inputGroup.classList.add("error");
    }
    else {
        emailError.classList.add("hidden");
        inputGroup.classList.remove("error");
    }
}

form.addEventListener("submit", function(event){
    event.preventDefault();
    emailValidator(email, emailValidity);
})