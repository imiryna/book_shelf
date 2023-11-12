import{s as n,h as g,i as m,j as k}from"./themeSwitcher-1a50a09b.js";const l=document.querySelector(".main-shopping-markup"),t=JSON.parse(localStorage.getItem("shoppingList")),p=document.querySelector(".shopping-list");h();function h(){t.length?(l.classList.remove("is-empty"),l.classList.add("hidden"),p.classList.remove("hidden"),p.innerHTML=u(t),document.querySelectorAll(".shopping-book-del-button").forEach(s=>s.addEventListener("click",f))):(l.classList.remove("hidden"),p.classList.add("hidden"))}function u(i){return i.map(({_id:s,book_image:o,title:e,list_name:r,description:c,author:d,buy_links:a})=>`  <li class="shopping-item" data-id="${s}">
    <img src="${o}" alt="" width="100" height="142"/>
            <div class="main-card-wrapper">
          <h2 class="shopping-book-title">${n(16,e)}</h2>
          <h3 class="shopping-book-category">${n(19,r)}</h3>
          <p class="shopping-book-description">${n(80,c)}</p>
                <div class="bottom-card-wrapper">
        <p class="shopping-book-author">${d}</p>
        <button class="shopping-book-del-button">

      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="-2 -2 24 24">
      <path d="M7.25 1.75h5.5m-11 2.75h16.5m-1.833 0-.643 9.643c-.097 1.446-.145 2.17-.457 2.718a2.75 2.75 0 0 1-1.19 1.114c-.569.275-1.293.275-2.743.275H8.616c-1.45 0-2.174 0-2.743-.275a2.75 2.75 0 0 1-1.19-1.114c-.312-.548-.36-1.272-.457-2.718L3.583 4.5m4.584 4.125v4.583m3.666-4.583v4.583" />
    </svg>
        </button>
        <ul class="shop-links-list">
          <li>
            <a class="shop-link" href="${a[0].url}" target="_blank">
            <img src="${g}" width="32" htight="11" alt="">
            </a>
          </li>
          <li>
            <a class="shop-link" href="${a[1].url}" target="_blank"> 
            <img src="${m}" width="16" htight="16" alt="" />
            </a>
          </li>
          <li>
            <a class="shop-link" href="${a[5].url}" target="_blank">
            <img src="${k}" width="16" htight="16" alt="" />
            </a>
          </li>
        </ul>
      </div>
        </div>
  </li>`).join("")}function f(i){const s=i.currentTarget.closest(".shopping-item"),o=t.findIndex(e=>e._id===s.dataset.id);o!==-1&&(t.splice(o,1),localStorage.setItem("shoppingList",JSON.stringify(t)),h())}
