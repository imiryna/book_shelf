import { markupModal } from './templateCard.js';
import { getBookById } from '../api.js';

const modalWindow = document.getElementById('modalWindow');

const LocalStorageKey = 'shopingList';

export const openModal = async id => {
  const localStorageData = checkLocaleStorege(LocalStorageKey);

  const { data } = await getBookById(id);

  const templateCard = markupModal(data);

  modalWindow.innerHTML = templateCard;

  const addBtn = document.getElementById('addBtn');

  const isItemInLocaleStoreg = checkItemInLocaleStorage(localStorageData, data);
  addBtn.textContent = isItemInLocaleStoreg
    ? 'remove from the shopping list'
    : 'Add to shopping list';

  addBtn.addEventListener('click', () => {
    const newLocalStorageData = checkLocaleStorege(LocalStorageKey);
    toggleItemInLocStor(newLocalStorageData, data);
    const new1LocalStorageData = checkLocaleStorege(LocalStorageKey);
    const isItemInLocaleStoreg = checkItemInLocaleStorage(
      new1LocalStorageData,
      data
    );

    addBtn.textContent = isItemInLocaleStoreg
      ? 'remove from the shopping list'
      : 'Add to shopping list';
  });
};

// openModal(book.id);

function toggleItemInLocStor(storageData, data) {
  let list = [];
  if (storageData.length > 0) {
    const item = storageData.find(el => el._id === data._id);
    if (item) {
      list = [...storageData.filter(({ _id }) => _id !== data._id)];

      localStorage.setItem(LocalStorageKey, JSON.stringify(list));
    } else {
      list = [...storageData, item];
      localStorage.setItem(LocalStorageKey, JSON.stringify(list));
    }
  } else {
    list.push(data);
    localStorage.setItem(LocalStorageKey, JSON.stringify(list));
  }
}

function checkItemInLocaleStorage(storageData, data) {
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

function checkLocaleStorege(LocalStorageKey) {
  return localStorage.getItem(LocalStorageKey)
    ? JSON.parse(localStorage.getItem(LocalStorageKey))
    : [];
}
