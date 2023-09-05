(() => {
    const refs = {
      openModalBtn: document.querySelector('[modal-developers-open]'),
      closeModalBtn: document.querySelector('[modal-developers-close]'),
      modalDeveloper: document.querySelector('[data-modal-developer]'),
    };
  
    refs.openModalBtn.addEventListener('click', openModalDeveloper);
    refs.closeModalBtn.addEventListener('click', closeModalDeveloper);
    refs.modalDeveloper.addEventListener('click', onBackdropClickDeveloper);
  
    function openModalDeveloper() {
      refs.modalDeveloper.classList.remove('is-hidden_developers');
    }
    function closeModalDeveloper() {
      refs.modalDeveloper.classList.add('is-hidden_developers');
    }
    function onBackdropClickDeveloper(event) {
      if (event.currentTarget === event.target) {
        closeModalDeveloper();
      }
    }
    document.addEventListener('keydown', e => {
      if (e.code === 'Escape') {
        closeModalDeveloper();
      }
    });
  })();