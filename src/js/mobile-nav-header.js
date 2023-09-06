
  const mobileMenu = document.getElementById('menu-container');
  const openMenuBtn = document.getElementById('menu-bars');
  const containerMenu = document.querySelector('[js-container-dropdown]');
  

  const toggleMenu = () => {
    mobileMenu.classList.toggle('is-open');
  };

  openMenuBtn.addEventListener('click', toggleMenu);


