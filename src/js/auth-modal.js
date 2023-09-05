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
