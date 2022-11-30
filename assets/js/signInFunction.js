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