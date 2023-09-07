import { slicePhrase } from './utils.js';
import amazon from './images/book-links/amazon-shop.png';
import apple from './images/book-links/apple-shop.png';
import bookshop from './images/book-links/bookshop.png';
const shoppingContainer = document.querySelector('.main-shopping-markup');
const shoppingStorage = JSON.parse(localStorage.getItem('shoppingList'));
const shoppingList = document.querySelector('.shopping-list');
isEmptyPage();

function isEmptyPage() {
  if (shoppingStorage.length) {
    shoppingContainer.classList.remove('is-empty');
    shoppingContainer.classList.add('hidden');
    shoppingList.classList.remove('hidden');
    shoppingList.innerHTML = createShoppingListMarkup(shoppingStorage);
    const deleteShoppingBook = document.querySelectorAll(
      '.shopping-book-del-button'
    );
    deleteShoppingBook.forEach(btn =>
      btn.addEventListener('click', deleteBook)
    );
  } else {
    shoppingContainer.classList.remove('hidden');
    shoppingList.classList.add('hidden');
  }
}
function createShoppingListMarkup(arr) {
  return arr
    .map(
      ({
        _id,
        book_image,
        title,
        list_name,
        description,
        author,
        buy_links,
      }) => `  <li class="shopping-item" data-id="${_id}">
    <img src="${book_image}" alt="" width="100" height="142"/>
            <div class="main-card-wrapper">
          <h2 class="shopping-book-title">${slicePhrase(16, title)}</h2>
          <h3 class="shopping-book-category">${slicePhrase(19, list_name)}</h3>
          <p class="shopping-book-description">${slicePhrase(
            80,
            description
          )}</p>
                <div class="bottom-card-wrapper">
        <p class="shopping-book-author">${author}</p>
        <button class="shopping-book-del-button">
          <svg width="16" height="16" class="delete-button-icon">
            <use href="./images/icons.svg#trash"></use>
          </svg>
        </button>
        <ul class="shop-links-list">
          <li>
            <a class="shop-link" href="${buy_links[0].url}" target="_blank"
              ><img src="${amazon}" width="32" htight="11" alt=""></a
            >
          </li>
          <li>
            <a class="shop-link" href="${buy_links[1].url}" target="_blank"
              > <img src="${apple}" width="16" htight="16" alt="" /></a
            >
          </li>
          <li>
            <a class="shop-link" href="${buy_links[5].url}" target="_blank"
              >    <img src="${bookshop}" width="16" htight="16" alt="" /></a
            >
          </li>
        </ul>
      </div>
        </div>
  </li>`
    )
    .join('');
}

function deleteBook(evt) {
  const pressedBtn = evt.currentTarget.closest('.shopping-item');

  const bookIndex = shoppingStorage.findIndex(
    item => item._id === pressedBtn.dataset.id
  );
  if (bookIndex !== -1) {
    shoppingStorage.splice(bookIndex, 1);
    localStorage.setItem('shoppingList', JSON.stringify(shoppingStorage));
    isEmptyPage();
  }
}
