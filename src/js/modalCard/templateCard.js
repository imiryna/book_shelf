export function markupModal(arr) {
  return arr.reduce(
    (markup, { id, autor, book_image, description, title }) =>
      markup +
      `
      <li data-id="${id}" class="book-card" id="product">
      <img src="${book_image}" alt="${title}" class="book-img" />
      <h2 class="book-title">${title}</h2>
      <h3 class="book-title">${autor}</h3>
      <p class="book-description">${description}</p>
      <button class="book-add-btn"id="addBtn" type="button">Add to shopping list</button>
      </li> `,
    ' '
  );
}
