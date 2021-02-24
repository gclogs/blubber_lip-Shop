
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
        document.getElementById('alert_username').innerText = "";
        form.username.style.border = '2px solid';
        form.username.style.borderColor = '#00D000';
    } else {
        form.username.style.border = '2px solid';
        form.username.style.borderColor = '#FF0000';
        document.getElementById('alert_username').style.color = '#FF0000';
    }

    if(checkEmail) {
        document.getElementById('alert_email').innerText = "";
        form.password.style.border = '2px solid';
        form.password.style.borderColor = '#00D000';
    } else {
        form.username.style.border = '2px solid';
        form.username.style.borderColor = '#FF0000';
        document.getElementById('alert_email').style.color = '#FF0000';
    }

    if(checkPassword) {
        document.getElementById('alert_password').innerText = "";
        form.password.style.border = '2px solid';
        form.password.style.borderColor = '#00D000';
    } else {
        form.username.style.border = '2px solid';
        form.username.style.borderColor = '#FF0000';
        document.getElementById('alert_password').style.color = '#FF0000';
    }

    if(checkPasswordConfirm) {
        document.getElementById('alert_password_confirm').innerText = "";
        form.password.style.border = '2px solid';
        form.password.style.borderColor = '#00D000';
    } else {
        form.username.style.border = '2px solid';
        form.username.style.borderColor = '#FF0000';
        document.getElementById('alert_password_confirm').style.color = '#FF0000';
    }

    if(checkUsername && checkValidEmail && checkPassword && checkPasswordConfirm) {
        console.log('complete. form.submit();');
    }
}

function checkValidUsername(form) {
    if(form.username.value == "") {
        document.getElementById('alert_username').innerText = "Please enter username";
        return false;
    }
    return true;
}

function checkValidEmail(form) {
    if(form.email.value == "") {
        document.getElementById('alert_email').innerText = "Plz enter email";
        return false;
    }
    const exptext = /^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-Za-z0-9\-]+/;

    if(exptext.test(form.email.value) === false) {
        document.getElementById('alert_email').innerText = "Email is not valid.";
        return false;
    }
    return true;
}

function checkValidPassword(form) {
    if(form.password.value == "") {
        document.getElementById('alert_password').innerText = "Plz enter password";
        return false;
    }
    const pw = form.password.vlaue;
    const num = pw.search(/[0-9]/g);
    const eng = pw.search(/[a-z]/ig);
    const spe = pw.search(/[`~!@@#$%^&*|₩₩₩'₩";:₩/?]/gi);

    if(pw.length < 6) {
        document.getElementById('alert_password').innerText = "Password must be at least 6 characters.";
        return false;
    } else if(pw.search(/\s/) != -1) {
        // 공백 제거
        document.getElementById('alert_password').innerText = "Please enter your password.";
        return false;
    } else if(num < 0 && eng < 0 && spe < 0) {
        // 한글과 같은 문자열 입력 방지
        document.getElementById('alert_password').innerText = "Password is not valid.";
        return false;
    }
    return true;
}

function checkPasswordConfirm(form) {
    if(form.passwordConfirm.value == "") {
        document.getElementById('alert_password_confirm').innerText = "PasswordConfirm is required";
        return false;
    }

    if(form.password.value !== form.passwordConfirm.value) {
        document.getElementById('alert_password_confirm').innerText = "Password and passwordConfirm is not match";
        form.username.style.border = '2px solid';
        form.username.style.borderColor = '#FF0000';
        document.getElementById('alert_password').style.color = '#FF0000';
        return false;
    }

    return true;
}