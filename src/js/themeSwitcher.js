const toggleSwitch = document.querySelector('input[type="checkbox"]');
const toggleIcon = document.getElementById('toggle-icon');

const DARK_THEME = 'dark';
const LIGHT_THEME = 'light'


function toggleDarkLightMode(isDark) {
  // сюди будуть писатись тернарники де буде провірятись яка тема стоїть у юзера та будуть застосовуватись відповідні стилі

  // example 
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