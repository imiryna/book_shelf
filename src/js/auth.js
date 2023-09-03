const openModalBtn = document.getElementById('open-modal-btn');
openModalBtn.addEventListener('click', handleOpenModal);

function handleOpenModal(e) {
  const loginForm = document.querySelector('.auth-modal');
  loginForm.classList.add('open');
  const registerForm = document.querySelector('.registr-modal');
}
