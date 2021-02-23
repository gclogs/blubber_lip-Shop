
let onEnableForm = document.querySelector(".form-popup");
let doShowForm = document.querySelector(".form-contianer");

onEnableForm.addEventListener("click", function() {
    doShowForm.classList.toggle("active");
})

function login() {
    const form = document.login_form;
    const checkUsername = checkValidUsername(form);
    const checkEmail = checkValidEmail(form);
    const checkPassword = checkValidPassword(form);
    const checkPasswordConfirm = checkValidPasswordConfirm(form);

    if(checkUsername) {
        document.getElement
    }
}