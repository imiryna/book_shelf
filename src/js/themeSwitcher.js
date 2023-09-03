const toggleSwitch = document.querySelector('input[type="checkbox"]');
const toggleIcon = document.getElementById('toggle-icon');
const headerEl = document.querySelector('header');
const menuBars = document.getElementById('menu-bars');

const DARK_THEME = 'dark';
const LIGHT_THEME = 'light';

function toggleDarkLightMode(isDark) {
  toggleIcon.children[0].textContent = isDark ? 'Dark Mode' : 'Light Mode';
  isDark
    ? toggleIcon.children[1].classList.replace('fa-sun', 'fa-moon')
    : toggleIcon.children[1].classList.replace('fa-moon', 'fa-sun');
}

function switchTheme(e) {
  if (e.target.checked) {
    document.documentElement.setAttribute('data-theme', DARK_THEME);
    toggleDarkLightMode(true);
    localStorage.setItem('theme', DARK_THEME);
  } else {
    document.documentElement.setAttribute('data-theme', LIGHT_THEME);
    toggleDarkLightMode(false);
    localStorage.setItem('theme', LIGHT_THEME);
  }
}

toggleSwitch.addEventListener('change', switchTheme);
const currentTheme = localStorage.getItem('theme');
if (currentTheme) {
  document.documentElement.setAttribute('data-theme', currentTheme);
  if (currentTheme === DARK_THEME) {
    toggleSwitch.checked = true;
    toggleDarkLightMode(true);
  }
}

function toggleNav() {
  menuBars.classList.toggle('change');
}

menuBars.addEventListener('click', toggleNav);
