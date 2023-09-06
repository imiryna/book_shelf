import { getBookCategories, getBooksByCategory } from './api.js';
import { createBookCard, addListenerToCards } from './utils.js';

const sidebarList = document.querySelector('.sidebar-list');
const contentBox = document.getElementById('content');

getBookCategories().then(({ data }) =>
  sidebarList.insertAdjacentHTML('beforeend', createCategoryList(data))
);

function createCategoryList(data) {
  return data
    .map(
      item =>
        `<li class="sidebar-item"><a href="" class="sidebar-link">${item.list_name}</a></li>`
    )
    .join('');
}

function toggleActiveLink(evt) {
  const currentActiveLink = document.querySelector('.active');
  currentActiveLink.classList.remove('active');
  evt.target.classList.add('active');
}

sidebarList.addEventListener('click', categoryFilterBooks);
function categoryFilterBooks(evt) {
  if (evt.target.nodeName !== 'A') {
    return;
  }
  evt.preventDefault();
  toggleActiveLink(evt);
  getBooksByCategory(evt.target.textContent).then(({ data }) => {
    contentBox.innerHTML = `<div class="category-container">
    <ul class="category-list">${createBooks(data)}</ul>
  </div>`;
    addListenerToCards();
  });
}
function createBooks(arr) {
  return arr.map(item => createBookCard(item)).join('');
}
