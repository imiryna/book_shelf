import { update } from 'lodash';
import {
  registrationNewUser,
  loginUser,
  logOutUser,
  LS_USER_KEY,
} from './auth-firebase';

const elements = {
  backdrop: document.querySelector('.background-authentication'),
  closeButton: document.querySelector('.close-button'),
  form: document.querySelector('.name-form'),
};

const LOCAL_STORAGE_KEY = 'form-data';
let formData = {};

elements.closeButton.addEventListener('click', handleCloseButtonClick);
elements.form.addEventListener('submit', handleFormSubmit);
window.addEventListener('keydown', handleEscapeKey);

function handleCloseButtonClick() {
  elements.backdrop.classList.add('is-hidden');
  document.body.classList.remove('scroll-lock');
}

async function handleFormSubmit(event) {
  event.preventDefault();
  // collect data from form
  const { name, email, password } = event.currentTarget.elements;
  formData.name = name.value;
  formData.email = email.value;
  formData.password = password.value;
  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(formData));
  event.currentTarget.reset();

  // choose what is it - registration(sign up) or login (sign in)
  // event.submitter.id show us which of the button was clicked
  const btnId = event.submitter.id;
  if (btnId == 'sign-up-btn') {
    registrationNewUser(formData.email, formData.password, formData.name).then(
      () => {
        const currentUser = localStorage.getItem(LS_USER_KEY);
        if (currentUser && JSON.parse(currentUser).email === formData.email) {
          elements.backdrop.classList.add('is-hidden');
          // updateHeaderSpan();
          document.querySelector('.user-signin').textContent = formData.name;
        }
      }
    );
  } else if (btnId == 'sign-in-btn') {
    loginUser(formData.email, formData.password, formData.name);
  }
}
// function updateHeaderSpan() {
//   document.querySelector('.user-signin').textContent = formData.name;
// }

function handleEscapeKey(e) {
  if (e.code !== 'Escape') {
    return;
  }
  handleCloseButtonClick();
  window.removeEventListener('keydown', handleEscapeKey);
}

function openAuthenticationModal() {
  elements.backdrop.classList.remove('is-hidden');
  document.body.classList.remove('scroll-lock');
}

const buttonOpenSignIn = document.getElementById('signin-link');

buttonOpenSignIn.addEventListener('click', openAuthenticationModal);
