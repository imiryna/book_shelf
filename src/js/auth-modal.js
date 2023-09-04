const authModal = document.querySelector('.auth-modal');
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
// console.log(authLink);

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

function onClickCloseBtn() {
  authModal.classList.remove('open');
  body.classList.remove('overflow-hidden');
  document.removeEventListener('keydown', onEscapeClick);
  closeBtn.removeEventListener('click', onClickCloseBtn);
  authBackdrop.removeEventListener('click', onAuthBackdropClick);
}

function onAuthBackdropClick(e) {
  if (e.currentTarget === e.target) {
    onClickCloseBtn();
  }
}

function onClickRegistrLink(e) {
  e.preventDefault();
  authModal.classList.remove('open');
  registrModal.classList.add('open');
  registrCloseBtn.addEventListener('click', onRegistrCloseBtn);
  registrBackdrop.addEventListener('click', onRegistrBackdropClick);
  authModalLink.addEventListener('click', onClickAuthModalLink);
}

function onClickAuthModalLink(e) {
  e.preventDefault();
  registrModal.classList.remove('open');
  authModal.classList.add('open');
}

function onRegistrCloseBtn() {
  registrModal.classList.remove('open');
  body.classList.remove('overflow-hidden');
  registrCloseBtn.removeEventListener('click', onRegistrCloseBtn);
  registrBackdrop.removeEventListener('click', onRegistrBackdropClick);
  authModalLink.removeEventListener('click', onClickAuthModalLink);
}

function onRegistrBackdropClick(e) {
  if (e.currentTarget === e.target) {
    onRegistrCloseBtn();
  }
}

function onEscapeClick(e) {
  if (e.code === 'Escape') {
    onClickCloseBtn();
    onRegistrCloseBtn();
  }
}

openModalBtn.addEventListener('click', handleOpenModal);

function handleOpenModal(e) {
  const loginForm = document.querySelector('.auth-modal');
  loginForm.classList.add('open');
  const registerForm = document.querySelector('.registr-modal');
}
