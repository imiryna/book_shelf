const toggleSwitch = document.getElementById('theme-switch-id');
const toggleIcon = document.getElementById('toggle-icon');
const headerEl = document.querySelector('header');
const menuBars = document.getElementById('menu-bars');
const lightSvg = document.getElementById('light-theme-icon');
const darkSvg = document.getElementById('dark-theme-icon');
const body = document.querySelector('body');

const DARK_THEME = 'dark';
const LIGHT_THEME = 'light';

function switchTheme(e) {
  if (e.target.checked) {
    document.documentElement.setAttribute('data-theme', DARK_THEME);
    lightSvg.classList.add('hidden');
    darkSvg.classList.remove('hidden');
    localStorage.setItem('theme', DARK_THEME);
  } else {
    document.documentElement.setAttribute('data-theme', LIGHT_THEME);
    lightSvg.classList.remove('hidden');
    darkSvg.classList.add('hidden');
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
  body.classList.toggle('stop-scroll');
}

menuBars.addEventListener('click', toggleNav);

//DROPDOWN JS

const dropdown = document.querySelector('.header-signin-dropdown');
const dropdownContent = document.querySelector('.dropdown-content');

dropdown.addEventListener('click', function () {
  dropdownContent.style.display =
    dropdownContent.style.display === 'block' ? 'none' : 'block';
});
