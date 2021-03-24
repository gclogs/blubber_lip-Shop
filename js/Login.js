
var loginForm = document.getElementById('id01');

window.onclick = function(e) {
    if (e.target == loginForm) {
        loginForm.style.display = "none";
    }
}

// 의도하지 않은 폼 submit 캔슬
window.onload = function() {
    document.login_form.onsubmit = function() {
        return false;
    };
};

function login() {
    const form = document.login_form;
    const checkEmail = checkValidEmail(form);
    const checkPassword = checkValidPassword(form);

    if (checkEmail) {
        setBorderStyle(form.email, '#00D000');
        document.getElementById('alert_email').innerText = "";
    } else {
        setBorderStyle(form.email, '#FF0000');
        document.getElementById('alert_email').style.color = '#FF0000';
    }

    if (checkPassword) {
        setBorderStyle(form.psw, '#00D000');
        document.getElementById('alert_password').innerText = "";
    } else {
        setBorderStyle(form.psw, '#FF0000');
        document.getElementById('alert_password').style.color = '#FF0000';
    }

    if (checkEmail && checkPassword) {
        console.log('complete Login');
    }
}

// setter 방식으로 스타일 설정
function setBorderStyle(obj, _hex) {
    obj.style.color = '#888';
    obj.style.borderColor = _hex;
}

// input 입력값들을 확인
function checkValidUsername(form) {
    if (form.username.value == "") {
        document.getElementById('alert_username').innerText = "Please enter username";
        return false;
    }
    return true;
}

function checkValidEmail(form) {
    if (form.email.value == "") {
        document.getElementById('alert_email').innerText = "Plz enter email";
        return false;
    }
    const exptext = /^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-Za-z0-9\-]+/;

    if (exptext.test(form.email.value) === false) {
        document.getElementById('alert_email').innerText = "Email is not valid.";
        return false;
    }
    return true;
}

function checkValidPassword(form) {
    if (form.psw.value == "") {
        document.getElementById('alert_password').innerText = "Plz enter password";
        return false;
    }
    const pw = form.psw.value;
    const num = pw.search(/[0-9]/g);
    const eng = pw.search(/[a-z]/ig);
    const spe = pw.search(/[`~!@@#$%^&*|₩₩₩'₩";:₩/?]/gi);

    if (pw.length < 6) {
        document.getElementById('alert_password').innerText = "Password must be at least 6 characters.";
        return false;
    } else if (pw.search(/\s/) != -1) {
        // 공백 제거
        document.getElementById('alert_password').innerText = "Please enter your password.";
        return false;
    } else if (num < 0 && eng < 0 && spe < 0) {
        // 한글과 같은 문자열 입력 방지
        document.getElementById('alert_password').innerText = "Password is not valid.";
        return false;
    }
    return true;
}

// password를 passwordConfirm에서 한 번 더 확인하면서 값이 서로 동일한지 확인
// function checkPasswordConfirm(form) {
//     if(form.passwordConfirm.value == "") {
//         document.getElementById('alert_password_confirm').innerText = "PasswordConfirm is required";
//         return false;
//     }

//     if(form.password.value !== form.passwordConfirm.value) {
//         document.getElementById('alert_password_confirm').innerText = "Password and passwordConfirm is not match";
//         form.username.style.border = '2px solid';
//         form.username.style.borderColor = '#FF0000';
//         document.getElementById('alert_password').style.color = '#FF0000';
//         alert("비밀번호가 맞지 않습니다 다시 작성해주세요!");
//         return false;
//     }

//     return true;
// }

// 입력 받은 데이터들을 서버로 전송
// function getInputData(form) {
// }