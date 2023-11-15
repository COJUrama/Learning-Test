const logIn = document.getElementById('log-in');
const signUp = document.getElementById('sign-up');
const closeInfo = document.getElementById('close-info');
const details = document.getElementById('sign-in-details');

function closePopUp() {
  details.style.display = 'none';
}

function openPopUp() {
  details.style.display = 'grid';
}

logIn.onclick = openPopUp;
signUp.onclick = openPopUp;

closeInfo.onclick = closePopUp;
