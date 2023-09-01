import { getBookCategories } from './api.js';
const sidebarList = document.querySelector('.sidebar-list');

getBookCategories().then(({ data }) =>
  sidebarList.insertAdjacentHTML('beforeend', createSidebarMarkup(data))
);

function createSidebarMarkup(data) {
  return data
    .map(
      item =>
        `<li class="sidebar-item"><a href="" class="sidebar-link">${item.list_name}</a></li>`
    )
    .join('');
}
