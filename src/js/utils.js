export { createBookCard };

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
      alt="${book_obj.title}" class="book-img"/>
      <h2 class="book-title">${slicePhrase(book_obj.title)}</h2>
      <p class="book-author">${book_obj.author}</p>

    </li>`;
}
