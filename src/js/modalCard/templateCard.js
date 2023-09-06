export function markupModal({
  _id,
  author,
  book_image,
  description,
  title,
  buy_links,
}) {
  const modalWindow = document.getElementById('modalWindow');
  window.onclick = function (event) {
    if (event.target === modalWindow) {
      modalWindow.style.display = 'none';
    }
  };

  document.addEventListener('keydown', event => {
    if (event.key === 'Escape') {
      modalWindow.style.display = 'none';
    }
  });

  return `<div class="modal-content" data-id="${_id}">

    <span class="close" onclick="modalWindow.style.display='none'">&times;</span>
    
<div class="modal-wrap">
    <div class="book_image">
      <img
        class="image"
        src="${book_image}"
        loading="lazy"
        alt="${title} poster"
      />
    </div>

    <div class="book_info">
      <h2 class="book_title">${title}</h2>
      <h3 class="book_tittle_autor">${author}</h3>
      <p class="book_description">${description}</p>

      <div class="book-links">
        <ul class="book_shops_list list">
        <li class="book_shop_item">
          <a href="${buy_links[0].url}"  target="_blank" class="book_shop_link link">
            <img src="" width="62" height="19" alt="amazon" /> 
          </a>
        </li>
        <li class="book_shop_item">
          <a href="${buy_links[1].url}" target="_blank" class="book_shop_link link">
            <img src="" width="32" height="33" alt="" /> 
            </a>
        </li>
        <li class="book_shop_item">
          <a href="${buy_links[2].url}" target="_blank" class="book_shop_link link">
            <img src="" width="38" height="36" alt="" /> 
          </a>
        </li>
        </ul>
      </div>

      </div>
    </div>

    <button type="button" class="book-add-btn" id="addBtn">
      Add to shopping list
    </button>
    
  </div>`;
}
