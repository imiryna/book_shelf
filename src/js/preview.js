import { getBooksByCategory, getTopFiveBooks } from './api';
import { createBooks, toggleActiveLink } from './sidebar';
export { markupTopCategoryBooks };
import { createBookCard, addListenerToCards } from './utils';

function markupTopCategoryBooks() {
  getTopFiveBooks().then(res => {
    const topBooks = res.data;
    topBooks.forEach(category => {
      //   console.log(category);
      const categoryBox = createCategoryBox(category);
      document
        .querySelector('.category-list')
        .insertAdjacentHTML('beforeend', categoryBox);
    });
    addListenerToCards();
  });
}
// markupTopCategoryBooks();

function createCategoryBox(category) {
  const bookList = category.books
    .map(book => {
      return `
            <li class="top-book">
            ${createBookCard(book)}
            </li>
            `;
    })
    .join('');
  // const seeMoreBtn = document.querySelector('.category-list');
  const categoryList = document.querySelector('.category-list');
  categoryList?.addEventListener('click', function (event) {
    event.preventDefault();
    // toggleActiveLink(event);
    getBooksByCategory(event.target.value).then(
      ({ data }) => (categoryList.innerHTML = createBooks(data))
    );
  });
  return `
 <div class="category-box">
    <p class="name-category">${category.list_name}</p>
    <ul class="js-list-books category-list-book">${bookList}</ul>
      <button value="${category.list_name}" class="js-btn-books see-more">See more</button>
    </div>`;
}
