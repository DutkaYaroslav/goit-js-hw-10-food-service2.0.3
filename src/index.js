import menu from './menu.json';
import postFeedItemTemplate from './template/menu.hbs';
// import localStorage from './js/lockalStorage';
import './styles.css';

const refs = {
  postFeed: document.querySelector('.js-menu'),
  switchTheme: document.querySelector('.js-switch-input'),
  eBody: document.querySelector('body'),
};

buildPostFeed(menu);

function buildPostFeed(menu) {
  const item = menu.map(men => postFeedItemTemplate(men)).join('');

  refs.postFeed.insertAdjacentHTML('beforeend', item);
}

//Theme
const fTheme = event => {
  if (event.target.checked === true) {
    localStorage.setItem('theme', 'dark-theme');
    refs.eBody.classList.remove('light-theme');
    refs.eBody.classList.add('dark-theme');
  } else {
    localStorage.setItem('theme', 'light-theme');
    refs.eBody.classList.remove('dark-theme');
    refs.eBody.classList.add('light-theme');
  }
};

refs.switchTheme.addEventListener('click', fTheme);

const memory = localStorage.getItem('theme');
if (memory === 'dark-theme') {
  refs.eBody.classList.add(memory);
  refs.switchTheme.checked = true;
}
