export { getBookCategories, getBooksByCategory, getTopFiveBooks, getBookById };

import axios from 'axios';

const BASE_URL = 'https://books-backend.p.goit.global/';

async function getBookCategories() {
  try {
    const data = await axios.get(BASE_URL + 'books/category-list');

    return data;
  } catch (error) {
    console.log('Something went wrong, please try again.');
    return error;
  }
}
// example
// getBookCategories().then(res => console.log(res));

async function getBooksByCategory(selectedCategory) {
  try {
    const data = await axios.get(
      BASE_URL + `books/category?category=${selectedCategory}`
    );
    return data;
  } catch (error) {
    console.log('Something went wrong, please try again.');
    return error;
  }
}
// example
// getBooksByCategory('Audio Nonfiction').then(res => console.log(res));

async function getTopFiveBooks() {
  try {
    const books = await axios.get(BASE_URL + 'books/top-books');
    return books;
  } catch (error) {
    console.log('Something went wrong, please try again.');
    return error;
  }
}
// example
// getTopFiveBooks().then(res => console.log(res));

async function getBookById(bookId) {
  try {
    const book = await axios.get(BASE_URL + `books/${bookId}`);
    return book;
  } catch (error) {
    console.log('Something went wrong, please try again.');
    return error;
  }
}
// example
// getBookById('643282b1e85766588626a0b4').then(res => console.log(res));
