import { getBooksByCategory, getTopFiveBooks } from './api';
// import { createBooks, toggleActiveLink } from './sidebar';
export { markupTopCategoryBooks };
import { createBookCard, addListenerToCards } from './utils';

function markupTopCategoryBooks() {
  getTopFiveBooks().then(res => {
    const topBooks = res.data;
    topBooks.forEach(category => {
      const categoryBox = createCategoryBox(category);
      document
        .querySelector('.top-book-list')
        .insertAdjacentHTML('beforeend', categoryBox);
    });
    addListenerToCards();
    document.querySelectorAll('.see-more').forEach(btn => {
      btn.addEventListener('click', handleSeeMore);
    });
  });
}

function createCategoryBox(category) {
  const bookList = category.books.map(book => createBookCard(book)).join('');
  return `
<div class="category-box">
    <p class="name-category">${category.list_name}</p>
    <ul class="category-list">${bookList}</ul>
    <div>
      <button value="${category.list_name}" class="js-btn-books see-more">See more</button>
    </div>
        `;
}

function handleSeeMore(evt) {
  const aForClick = document.getElementById(
    evt.target.value.split(' ').join('').toLowerCase()
  );
  aForClick.click();
}
