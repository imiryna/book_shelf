import { markupModal } from './templateCard.js';
import { getBookById } from '../api.js';

const modalCard = document.getElementById('modalCard');
const openModalCard = document.getElementById('openModalCard');
const modalWindow = document.getElementById('modalWindow');

const LocalStorageKey = 'shopingList';

const openModal = async () => {
  const localStorageData = checkLocaleStorege(LocalStorageKey);

  // Отримав дані і записав в розмітку
  const { data } = await getBookById('643282b1e85766588626a0b4');
  console.log(data);
  const templateCard = markupModal(data);
  console.log(templateCard);
  modalWindow.innerHTML = templateCard;

  // Отримали доступ до кнопки

  const addBtn = document.getElementById('addBtn');

  const isItemInLocaleStoreg = checkItemInLocaleStorage(localStorageData, data);
  addBtn.textContent = isItemInLocaleStoreg
    ? 'remove from the shopping list'
    : 'Add to shopping list';

  addBtn.addEventListener('click', () => {
    console.log('click');
    // toggleItemInLocStor(localStorageData, data);
    const newLocalStorageData = checkLocaleStorege(LocalStorageKey);
    toggleItemInLocStor(newLocalStorageData, data);
    const new1LocalStorageData = checkLocaleStorege(LocalStorageKey);
    const isItemInLocaleStoreg = checkItemInLocaleStorage(
      new1LocalStorageData,
      data
    );
    console.log(addBtn);
    console.log(isItemInLocaleStoreg);
    addBtn.textContent = isItemInLocaleStoreg
      ? 'remove from the shopping list'
      : 'Add to shopping list';
  });
};

openModalCard.addEventListener('click', openModal);

function toggleItemInLocStor(storageData, data) {
  let list = [];
  if (storageData.length > 0) {
    const item = storageData.find(el => el._id === data._id);
    if (item) {
      list = [...storageData.filter(({ _id }) => _id !== data._id)];
      console.log(list);
      localStorage.setItem(LocalStorageKey, JSON.stringify(list));
    } else {
      //   Записуємо в зміну ліст попередні дані з локал сторидж через спред і до них пушимо цей айтем
      // записуємо в локал сторидж
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
