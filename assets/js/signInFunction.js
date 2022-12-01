const button = document.getElementById("remove-button");
const modal = document.querySelector(".sign-in-modal");
const loginButton = document.querySelector('.login-button');
const backDrop = document.querySelector('.backdrop');
const body = document.getElementsByTagName('body')[0];

const showModalHandler = () => {
    modal.style.display = "block";
    body.style.overflow = 'hidden';
}

loginButton.addEventListener('click', showModalHandler);

const hideModalHandler = () => {
    modal.style.display = "none";
    body.style.overflow = 'auto';
}

backDrop.addEventListener('click', hideModalHandler);

button.addEventListener('click', hideModalHandler);

//
var usernameLogIn = document.querySelector('#exampleInputEmail1');
var passwordLogIn = document.querySelector('#exampleInputPassword1');

var usernameSignUp = document.querySelector('#email1');
var nameSignUp = document.querySelector('#nameInput');
var passwordSignUp1 = document.querySelector('#password1');
var passwordSignUp2 = document.querySelector('#password2');

var formLogin = document.querySelector('#form-login');
var formRegister = document.querySelector("#form-register")

function showError(input, message){
    let parent = input.parentElement;
    let small = parent.querySelector('small')
    parent.classList.add('error')
    small.innerText = message
}

function showSuccess(input){
    let parent = input.parentElement;
    let small = parent.querySelector('small')
    parent.classList.remove('error')
}

function checkEmpty(listInput){
    let isEmptyError = true;
    listInput.forEach(input => {
        input.value = input.value.trim()
        if(!input.value){
            isEmptyError = false;
            showError(input, 'Must be filled')
        }else{
            showSuccess(input)
        }
    });
    return isEmptyError
}

function checkEmail(input){
    const regexEmail = 
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    input.value=input.value.trim()

    let isEmailError = regexEmail.test(input.value)
    if(isEmailError){
        showSuccess(input)
    } else{
        showError(input,"Email invalid")
    }

    return isEmailError
}

function checkPassword(input){
    input.value = input.value.trim()

    if(input.value.length < 8 ){
        showError(input, "Must be more than 8 characters")
        return false
    }
    if (input.value.length >36 ) {
        showError(input, "Must be more less than 36 characters")
        return false
    }
    var passw=  /^[A-Za-z]\w{7,14}$/;
    if(input.value.match(passw)) {
        
    }
    else{
        showError(input, "Must not have special character")
        return false;
    }


    showSuccess(input)
    return true
}

function checkConfirmPassword(pass1, pass2) {
    pass1.value = pass1.value.trim()
    pass2.value = pass2.value.trim()
    if(pass1.value != pass2.value){
        showError(pass2, "Must be the same with previous password")
        return false
    }
    return true
}

formLogin.addEventListener('submit', function(e){
    e.preventDefault()
    let isEmpty = checkEmpty([usernameLogIn,passwordLogIn])

    if(!isEmpty) {
        // do nothing
    }
    else {
        // backend handle
    }
})

formRegister.addEventListener('submit', function(e){
    e.preventDefault()
    
    let isLegitEmail = checkEmail(usernameSignUp)
    let passwordLegit = checkPassword(passwordSignUp1)
    let passwordConfirm = checkConfirmPassword(passwordSignUp1, passwordSignUp2)
    let isEmpty = checkEmpty([usernameSignUp, nameSignUp, passwordSignUp1, passwordSignUp2])

    if(!isEmpty || !isLegitEmail || !passwordLegit || !passwordConfirm) {
        // do nothing
    }
    else {
        // backend handle
    }
})