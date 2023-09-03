import { getBookCategories, getBooksByCategory } from './api.js';
const sidebarList = document.querySelector('.sidebar-list');
const categoryList = document.querySelector('.category-list');

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
  getBooksByCategory(evt.target.textContent).then(
    ({ data }) => (categoryList.innerHTML = createBooks(data))
  );
}
function createBooks(arr) {
  return arr
    .map(item => {
      function slicePhrase(phrase) {
        if (phrase.length > 16) {
          return phrase.slice(0, 16) + '...';
        } else {
          return phrase;
        }
      }
      return `<li class="category-item" >

      <img src="${item.book_image}" alt="${item.title}" class="book-img"/>
      <h2 class="book-title">${slicePhrase(item.title)}</h2>
      <p class="book-author">${item.author}</p>

    </li>`;
    })
    .join('');
}
