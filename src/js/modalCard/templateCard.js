export function markupModal({
  _id,
  author,
  book_image,
  description,
  title,
  buy_links,
}) {
  return ` <div class="modal_wrappining" data-id="${_id}">
    <div class="book_image" width="329">
      <img
        class="image"
        src="${book_image}"
        loading="lazy"
        alt="${title} poster"
      />
    </div>

    <div class="book_info">
      <h2 class="book_tittle upper">${title}</h2>
      <h3 class="book_tittle_autor">${author}</h3>
      <p class="book_description">${description}</p>
      <ul class="book_shops_list list">
      <li class="book_shop_item">
        <a href="${buy_links[0].url}"  target="_blank" class="book_shop_link link">
          <img src="" width="50" height="50" alt="Приклад" /> 
        </a>
      </li>
      <li class="book_shop_item">
        <a href="${buy_links[1].url}" target="_blank" class="book_shop_link link">
          <img src="" width="50" height="50" alt="Приклад" /> 
          </a>
      </li>
      <li class="book_shop_item">
        <a href="${buy_links[2].url}" target="_blank" class="book_shop_link link">
          <img src="" width="50" height="50" alt="Приклад" /> 
        </a>
      </li>
      </ul>
    </div>

    <button type="button" class="book-add-btn" id="addBtn">
      Add to shopping list
    </button>
    
  </div>`;
}
