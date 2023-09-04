export { createBookCard, addListenerToCards };
import { openModal } from './modalCard/modalCard';

function slicePhrase(phrase) {
  if (phrase.length > 16) {
    return phrase.slice(0, 16) + '...';
  } else {
    return phrase;
  }
}

function createBookCard(book_obj) {
  return `<li class="category-item" >
      <img src="${book_obj.book_image}" 
      alt="${book_obj.title}" class="book-img" id="${book_obj._id}/>
      <h2 class="book-title">${slicePhrase(book_obj.title)}</h2>
      <p class="book-author">${book_obj.author}</p>

    </li>`;
}

function addListenerToCards() {
  const galleryImg = document.querySelectorAll('.book-img');
  galleryImg.forEach(img => {
    img.addEventListener('click', handleClickOnPhoto);
  });
}

function handleClickOnPhoto(e) {
  const modalWindow = document.getElementById('modalWindow');
  modalWindow.style.display = 'block';
  openModal(e.target.id);
}
