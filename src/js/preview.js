import { getTopFiveBooks } from './api';
export { markupTopCategoryBooks };
import { createBookCard, addListenerToCards } from './utils';

function markupTopCategoryBooks() {
  getTopFiveBooks().then(res => {
    const topBooks = res.data;
    topBooks.forEach(category => {
      //   console.log(category);
      const categoryBox = createCategoryBox(category);
      document
        .querySelector('.top-book-list')
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
  return `
<div class="category-box">
    <p class="name-category">${category.list_name}</p>
    <ul class="category-list-book">${bookList}</ul>
    <div>
      <button class="see-more">see&nbsp;more</button>
    </div>
        `;
}
