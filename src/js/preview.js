import { getTopFiveBooks } from './api';
export { markupTopCategoryBooks };
// import { openModal } from './modalCard/modalCard';

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
    const galleryImg = document.querySelectorAll('.book-img');
    galleryImg.forEach(img => {
      img.addEventListener('click', handleClickOnPhoto);
    });
  });
}
markupTopCategoryBooks();

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
    <ul class="category-list">${bookList}</ul>
    <div>
      <button></button>
    </div>
        `;
}

function createBookCard(book) {
  return `<li class="category-list-item">
  <img class="book-img" src="${book.book_image}" alt="${book.title}" title ="${book.title}" id="${book._id}" loading="lazy" />
  <div class="info">
    <h2 class="title">
     ${book.title}
    </h2>
    <p class="info-item">
       ${book.author}
    </p>
  </div>
</li>`;
}

function handleClickOnPhoto(e) {
  // openModal(e.target.id);
  console.log('should be openModal call');
}
