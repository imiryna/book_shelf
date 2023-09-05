const toggleSwitch = document.querySelector('input[type="checkbox"]');
const toggleIcon = document.getElementById('toggle-icon');
const headerEl = document.querySelector('header');
const menuBars = document.getElementById('menu-bars');

const DARK_THEME = 'dark';
const LIGHT_THEME = 'light';

function switchTheme(e) {
  if (e.target.checked) {
    document.documentElement.setAttribute('data-theme', DARK_THEME);
    localStorage.setItem('theme', DARK_THEME);
  } else {
    document.documentElement.setAttribute('data-theme', LIGHT_THEME);
    localStorage.setItem('theme', LIGHT_THEME);
  }
}

toggleSwitch.addEventListener('change', switchTheme);
const currentTheme = localStorage.getItem('theme');
if (currentTheme) {
  document.documentElement.setAttribute('data-theme', currentTheme);
  if (currentTheme === DARK_THEME) {
    toggleSwitch.checked = true;
  }
}

function toggleNav() {
  menuBars.classList.toggle('change');
}

menuBars.addEventListener('click', toggleNav);

//DROPDOWN JS

const dropdown = document.querySelector('.header-signin-dropdown');
const dropdownContent = document.querySelector('.dropdown-content');

dropdown.addEventListener('click', function () {
  dropdownContent.style.display =
    dropdownContent.style.display === 'block' ? 'none' : 'block';
});
