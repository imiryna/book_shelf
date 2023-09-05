const closeBtn = document.getElementById('auth-modal-btn');
const registrLink = document.querySelector('.registration');
const registrModal = document.querySelector('#registr-modal');
const registrCloseBtn = document.querySelector('#registr-modal-btn');
const authBackdrop = document.querySelector('.auth-modal__box');
const registrBackdrop = document.querySelector('.registr-modal__box');
const authModalLink = document.querySelector('.authorization-link');
const body = document.querySelector('body');
const signButtom = document.querySelector('header-signin-dropdown');
const idTest = document.getElementById('test');
const openAuthModalBtn = document.querySelector('header-signin-dropd');
const authModal = document.querySelector('.auth-modal');
export { onFormSub };

const elements = {
  backdrop: document.querySelector('.background-authentication'),
  closeButton: document.querySelector('.close-button'),
  form: document.querySelector('.name-area-form'),
};

const LOCAL_STORAGE_KEY = 'form-data';
let formData = {};

elements.closeButton.addEventListener('click', handleCloseButtonClick);
elements.form.addEventListener('submit', handleFormSubmit);
window.addEventListener('keydown', handleEscapeKey);

function handleCloseButtonClick() {
  elements.backdrop.classList.add('hidden');
  document.body.classList.remove('scroll-lock');
}

openAuthModalBtn.addEventListener('click', onClickOpenAuthModal);

// authLink.addEventListener('click', onClickAuthLink);
registrLink.addEventListener('click', onClickRegistrLink);

function onClickAuthLink(e) {
  e.preventDefault();
  authModal.classList.add('open');
  body.classList.add('overflow-hidden');
  document.addEventListener('keydown', onEscapeClick);
  closeBtn.addEventListener('click', onClickCloseBtn);
  authBackdrop.addEventListener('click', onAuthBackdropClick);
}

function handleFormSubmit(event) {
  event.preventDefault();
  const { name, email, password } = event.currentTarget.elements;
  formData.name = name.value;
  formData.email = email.value;
  formData.password = password.value;
  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(formData));
  event.currentTarget.reset();
  elements.backdrop.classList.add('hidden');
}

function handleEscapeKey(e) {
  if (e.code !== 'Escape') {
    return;
  }
  handleCloseButtonClick();
  window.removeEventListener('keydown', handleEscapeKey);
}

export function openAuthenticationModal() {
  elements.backdrop.classList.remove('hidden');
  document.body.classList.remove('scroll-lock');
}

openModalBtn.addEventListener('click', handleOpenModal);

function handleOpenModal(e) {
  const loginForm = document.querySelector('.auth-modal');
  loginForm.classList.add('open');
  const registerForm = document.querySelector('.registr-modal');
}
