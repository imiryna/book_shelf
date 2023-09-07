import { getBooksByCategory, getTopFiveBooks } from './api';
import { createBooks, toggleActiveLink } from './sidebar';
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

// function createCategoryBox(category) {
//   console.log(category.books);
//   const bookList = category.books.map(book => createBookCard(book)).join('');
//   const categoryList = document.querySelector('.js-books');
//   const sidebarList = document.querySelector('.sidebar-list');
//   const currentActiveLink = document.querySelector('.active');

//   // categoryList?.addEventListener('click', function (event) {
//   //   event.preventDefault();

//   //   sidebarList.childNodes.forEach(child => {
//   //     child.childNodes.forEach(c => {
//   //       if (c.innerHTML === event.target.value) {
//   //         currentActiveLink.classList.remove('active');
//   //         c.classList.add('active');
//   //       }
//   //     });
//   //   });

//   //   getBooksByCategory(event.target.value).then(
//   //     ({ data }) => (categoryList.innerHTML = createBooks(data))
//   //   );
//   // });
//   return `
//    <div class="category-box">
//       <p class="name-category">${category.list_name}</p>
//       <ul class="js-list-books category-list-book">${bookList}</ul>
//         <button value="${category.list_name}" class="js-btn-books see-more">See more</button>
//       </div>`;
// }
