import{s as l,h as g,i as m,j as k}from"./utils-0e469c85.js";const n=document.querySelector(".main-shopping-markup"),t=JSON.parse(localStorage.getItem("shoppingList")),p=document.querySelector(".shopping-list");r();function r(){t.length?(n.classList.remove("is-empty"),n.classList.add("hidden"),p.classList.remove("hidden"),p.innerHTML=u(t),document.querySelectorAll(".shopping-book-del-button").forEach(s=>s.addEventListener("click",f))):(n.classList.remove("hidden"),p.classList.add("hidden"))}function u(i){return i.map(({_id:s,book_image:o,title:e,list_name:h,description:c,author:d,buy_links:a})=>`  <li class="shopping-item" data-id="${s}">
    <img src="${o}" alt="" width="100" height="142"/>
            <div class="main-card-wrapper">
          <h2 class="shopping-book-title">${l(16,e)}</h2>
          <h3 class="shopping-book-category">${l(19,h)}</h3>
          <p class="shopping-book-description">${l(80,c)}</p>
                <div class="bottom-card-wrapper">
        <p class="shopping-book-author">${d}</p>
        <button class="shopping-book-del-button">
        <svg id="trash" viewBox="0 0 32 32">
        <path fill="none" stroke="#fff" style="stroke: var(--color1, #fff)" stroke-linejoin="round" stroke-linecap="round" stroke-miterlimit="4" stroke-width="2.9091" d="M12 4h8M4 8h24M25.333 8l-0.935 14.026c-0.14 2.104-0.21 3.157-0.665 3.954-0.4 0.702-1.004 1.267-1.731 1.619-0.826 0.4-1.881 0.4-3.99 0.4h-4.025c-2.109 0-3.163 0-3.99-0.4-0.727-0.353-1.331-0.917-1.731-1.619-0.455-0.798-0.525-1.85-0.665-3.954l-0.935-14.026M13.333 14v6.667M18.667 14v6.667"></path>
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
  </li>`).join("")}function f(i){const s=i.currentTarget.closest(".shopping-item"),o=t.findIndex(e=>e._id===s.dataset.id);o!==-1&&(t.splice(o,1),localStorage.setItem("shoppingList",JSON.stringify(t)),r())}
