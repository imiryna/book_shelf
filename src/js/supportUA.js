import someImg1 from '../images/supportUA/SaveTheChildren.png';
import someImg2 from '../images/supportUA/projectHope.png';
import someImg3 from '../images/supportUA/interMed.png';
import someImg4 from '../images/supportUA/razom.png';
import someImg5 from '../images/supportUA/prytula.png';
import someImg6 from '../images/supportUA/united24_1.png';
import someImg7 from '../images/supportUA/medSans.png';
import someImg8 from '../images/supportUA/worldV.png';
import someImg9 from '../images/supportUA/actionAH.png';

const arraySupports = [
  {
    title: 'Save the Children',
    url: 'https://www.savethechildren.net/what-we-do/emergencies/ukraine-crisis',
    img: someImg1,
  },
  {
    title: 'Project HOPE',
    url: 'https://www.projecthope.org/country/ukraine/',
    img: someImg2,
  },
  {
    title: 'International Medical Corps',
    url: 'https://internationalmedicalcorps.org/country/ukraine/',
    img: someImg3,
  },
  {
    title: 'RAZOM',
    url: 'https://www.razomforukraine.org/',
    img: someImg4,
  },
  {
    title: 'Action against hunger',
    url: 'https://www.actionagainsthunger.org/location/europe/ukraine/',
    img: someImg5,
  },
  {
    title: 'Serhiy Prytula Charity Foundation',
    url: 'https://prytulafoundation.org/en',
    img: someImg6,
  },
  {
    title: 'UNITED24',
    url: 'https://u24.gov.ua/uk',
    img: someImg7,
  },
  {
    title: 'Medicins Sans Frontieres',
    url: 'https://www.msf.org/ukraine',
    img: someImg8,
  },
  {
    title: 'World vision',
    url: 'https://www.wvi.org/emergencies/ukraine',
    img: someImg9,
  },
];

const arrayImg = [
  { name: 'Save the Children', img: './images/supportUA/SaveTheChildren.png' },
  { name: 'Project HOPE', img: './images/supportUA/projectHope.png"' },
  { name: 'International Medical Corps', img: './images/supportUA/interMed.png' },
  { name: 'UNITED24', img: './images/supportUA/united24_1.png' },
  { name: 'Medicins Sans Frontieres', img: './images/supportUA/medSans.png' },
  { name: 'RAZOM', img: './images/supportUA/razom.png' },
  { name: 'Action against hunger', img: './images/supportUA/actionAH.png' },
  { name: 'World vision', img: './images/supportUA/worldV.png' },
  { name: 'Serhiy Prytula Charity Foundation', img: './images/supportUA/prytula.png' },
];

const supCard = document.querySelector('.support-card');
const supList = document.querySelector('.support-list');
const showAllButton = document.querySelector('.support-btn');

const array = [];
let initialListItems = []; // Зберігаємо початковий стан списку li


function formatNumber(number) {
  return number.toLocaleString('en-US', {
    minimumIntegerDigits: 2,
    useGrouping: false,
  });
}


function renderSupport(arraySupports, arrayImg) {
  let counter = 0;

  supList.innerHTML = arraySupports
    .map(({ title, url, img}) => {
      const imgInfo = arrayImg.find(imgObj => imgObj.name === title);
      const imgSrc = imgInfo ? imgInfo.img : ''; // Отримуємо шлях до зображення

      return `
                <li class="support-item">
                    <a class="support-link link" href="${url}" target="_blank" rel="noopener noreferrer">
                        <span class="support-numbers">${formatNumber(
                          (counter += 1)
                        )}</span>
                        <img class="img-support" src="${img}" alt="${title}">
                        
                    </a>
                </li>
            `;
    })
    .join('');
}
renderSupport(arraySupports, arrayImg);


// Показати лише перші  елементи
function updateVisibleItems() {
  const listItems = supList.querySelectorAll('.support-item');

  if (window.innerWidth <= 767) {
      // Мобільна версія - показуємо 4 елементи
      for (let i = 0; i < listItems.length; i+=1) {
          if (i < 4) {
              listItems[i].style.display = 'block';
          } else {
              listItems[i].style.display = 'none';
          }
      }
  } else if (window.innerWidth >= 768 ) {
      // Планшет - показуємо 6 елементів
      for (let i = 0; i < listItems.length; i+=1) {
          if (i < 6) {
              listItems[i].style.display = 'block';
          } else {
              listItems[i].style.display = 'none';
          }
      }
  } else {
      // Десктоп
      listItems.forEach(item => {
          item.style.display = 'block';
      });
  }
}

updateVisibleItems();

showAllButton.addEventListener('click', onClick);
function onClick() {
  const listItems = supList.querySelectorAll('.support-item');

  listItems.forEach(item => {
      item.style.display = 'block';
  });

  supCard.style.maxHeight = 'none';
  showAllButton.style.display = 'none';

  showAllButton.removeEventListener('click', onClick);
  
};

window.addEventListener('resize', updateVisibleItems);

document.addEventListener('click', onOutside);
function onOutside(event) {
    if (!supCard.contains(event.target)) {
        showAllButton.addEventListener('click', onClick);

        updateVisibleItems();


        showAllButton.style.display = 'block'; // Показуємо кнопку "Показати все"
    }
  
}