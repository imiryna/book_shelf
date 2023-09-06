import { markupModal } from './templateCard.js';
import { getBookById } from '../api.js';

const modalWindow = document.getElementById('modalWindow');

const localStorageKey = 'shoppingList';

export const openModal = async id => {
  const localStorageData = checkLocalStorage(localStorageKey);

  const { data } = await getBookById(id);

  const templateCard = markupModal(data);

  modalWindow.innerHTML = templateCard;

  const addBtn = document.getElementById('addBtn');

  const isItemInLocalStorage = checkItemInLocalStorage(localStorageData, data);
  addBtn.textContent = isItemInLocalStorage
    ? 'remove from the shopping list'
    : 'Add to shopping list';

  addBtn.addEventListener('click', () => {
    let newLocalStorageData = checkLocalStorage(localStorageKey);
    toggleItemInLocStor(newLocalStorageData, data);
    newLocalStorageData = checkLocalStorage(localStorageKey);
    const isItemInLocalStorage = checkItemInLocalStorage(
      newLocalStorageData,
      data
    );

    addBtn.textContent = isItemInLocalStorage
      ? 'remove from the shopping list'
      : 'Add to shopping list';
  });
};

// openModal(book.id);

function toggleItemInLocStor(storageData, data) {
  let list = [];
  if (storageData.length > 0) {
    const isExist = storageData.find(el => el._id === data._id);
    if (isExist) {
      list = [...storageData.filter(({ _id }) => _id !== data._id)];

      localStorage.setItem(localStorageKey, JSON.stringify(list));
    } else {
      list = [...storageData, isExist];
      localStorage.setItem(localStorageKey, JSON.stringify(list));
    }
  } else {
    list.push(data);
    localStorage.setItem(localStorageKey, JSON.stringify(list));
  }
}

function checkItemInLocalStorage(storageData, data) {
  if (storageData.length > 0) {
    const item = storageData.find(el => el._id === data._id);
    if (item) {
      return true;
    } else {
      return false;
    }
  } else {
    return false;
  }
}

function checkLocalStorage(localStorageKey) {
  return localStorage.getItem(localStorageKey)
    ? JSON.parse(localStorage.getItem(localStorageKey))
    : [];
}
