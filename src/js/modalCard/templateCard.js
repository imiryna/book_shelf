export function markupModal({ _id, author, book_image, description, title }) {
  return `
      <div data-id="${_id}" class="book-card" id="product">
      <img src="${book_image}" alt="${title}" class="book-img" />
      <h2 class="book-title">${title}</h2>
      <h3 class="book-title">${author}</h3>
      <p class="book-description">${description}</p>
      <button class="book-add-btn"id="addBtn" type="button">Add to shopping list</button>
      </div> `;
}
