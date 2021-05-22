import menuCardTpl from './templates/menu-card.hbs';
import menu from './menu.json';

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const menuContainer = document.querySelector('.js-menu');
const menuMarkup = menuCardTpl(menu);
menuContainer.insertAdjacentHTML('beforeend', menuMarkup);

const currentTheme = localStorage.getItem('theme');
const themeToggle = document.querySelector('#theme-switch-toggle');

themeToggle.addEventListener('change', onToggleChange);

if (currentTheme) {
  document.body.classList.add(currentTheme);
}

if (currentTheme === Theme.DARK) {
  themeToggle.checked = true;
}

function onToggleChange() {
  if (themeToggle.checked) {
    document.body.classList.add(Theme.DARK);
    document.body.classList.remove(Theme.LIGHT);
    localStorage.setItem('theme', Theme.DARK);
  } else {
    document.body.classList.add(Theme.LIGHT);
    document.body.classList.remove(Theme.DARK);
    localStorage.setItem('theme', Theme.LIGHT);
  }
}
