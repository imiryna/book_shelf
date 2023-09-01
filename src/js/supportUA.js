const arraySupports = [
  {
    title: 'Save the Children',
    url: 'https://www.savethechildren.net/what-we-do/emergencies/ukraine-crisis',
    img: null,
  },
  {
    title: 'Project HOPE',
    url: 'https://www.projecthope.org/country/ukraine/',
    img: null,
  },
  {
    title: 'UNITED24',
    url: 'https://u24.gov.ua/uk',
    img: null,
  },
  {
    title: 'International Medical Corps',
    url: 'https://internationalmedicalcorps.org/country/ukraine/',
    img: null,
  },
  {
    title: 'Medicins Sans Frontieres',
    url: 'https://www.msf.org/ukraine',
    img: null,
  },
  {
    title: 'RAZOM',
    url: 'https://www.razomforukraine.org/',
    img: null,
  },
  {
    title: 'Action against hunger',
    url: 'https://www.actionagainsthunger.org/location/europe/ukraine/',
    img: null,
  },
  {
    title: 'World vision',
    url: 'https://www.wvi.org/emergencies/ukraine',
    img: null,
  },
  {
    title: 'Serhiy Prytula Charity Foundation',
    url: 'https://prytulafoundation.org/en',
    img: null,
  },
];

const supCard = document.querySelector('.support-card');
const supList = document.querySelector('.support-list');
const showAllButton = document.querySelector('.support-btn');

const array = [];

function formatNumber(number) {
  return number.toLocaleString('en-US', {
    minimumIntegerDigits: 2,
    useGrouping: false,
  });
}

function renderSupport(arraySupports) {
  let counter = 0;

  supList.innerHTML = arraySupports
    .map(
      ({ title, url }) =>
        `<li class="support-item"><a class="support-link link" href="${url}" target="_blank" rel="noopener noreferrer"><span class="support-numbers">${formatNumber(
          (counter += 1)
        )}</span>${title}
                </li>
                </a>`
    )
    .join('');
}
// <img class="img-support" src="" alt="support UA" srcset="./image/saveTheChildren1.png">
console.log(arraySupports);
renderSupport(arraySupports);

// Показати лише перші 6 елементів
function showSixItems() {
  const listItems = supList.querySelectorAll('.support-item');
  listItems.forEach((item, index) => {
    if (index >= 6) {
      item.style.display = 'none';
    }
  });
}
showSixItems();

showAllButton.addEventListener('click', onClick);
function onClick(event) {
  event.preventDefault();

  const listItems = supList.querySelectorAll('.support-item');

  listItems.forEach(item => {
    item.style.display = 'block';
  });
  supCard.style.maxHeight = 'none'; // Розширення блоку
  showAllButton.style.display = 'none'; // Ховаємо кнопку "Показати все"

  showAllButton.removeEventListener('click', onClick); // Видалення обробника кліку після кліку
}

document.addEventListener('click', onOutside);
function onOutside(event) {
  if (!supCard.contains(event.target)) {
    // showAllButton.removeEventListener('click', onClick);
    showAllButton.addEventListener('click', onClick);

    showSixItems();
    showAllButton.style.display = 'block'; // Показуємо кнопку "Показати все"
  }
}
