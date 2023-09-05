document.addEventListener('DOMContentLoaded', function () {
  // Получите данные из локального хранилища
  const booksData = JSON.parse(localStorage.getItem('books')) || [];

  // Получите контейнер для карточек
  const bookContainer = document.getElementById('bookContainer');

  // Отрисовка карточек на основе данных из хранилища
  booksData.forEach(book => {
    const cardHTML = `
            <div class="card">
                <img src="${book.image}" alt="${book.title}" class="card-img" />
                <div class="text-container">
                    <h2 class="card-header">${book.title}</h2>
                    <p class="card-genre">${book.genre}</p>
                    <div class="description-container">
                        <p class="card-description">${book.description}</p>
                    </div>
                    <div class="bottom-container">
                        <p class="bottom-container__author">${book.author}</p>
                        <div class="bottom-container_icons">
                        <svg class="icon">
                        <use href="/images/icons/lock-02.svg#asd"></use>
                      </svg>
                      <svg>
                        <use href="/images/icons/lock-02.svg#asd"></use>
                      </svg>
                      <svg>
                        <use> href="/images/icons/lock-02.svg#asd"</use>
                      </svg>
                        </div>
                    </div>
                </div>
            </div>
        `;

    // Вставьте сгенерированную HTML-разметку в контейнер
    bookContainer.insertAdjacentHTML('beforeend', cardHTML);
  });
});
