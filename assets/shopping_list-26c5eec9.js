import{s as a,h as g,i as m,j as k}from"./utils-0e469c85.js";const l=document.querySelector(".main-shopping-markup"),t=JSON.parse(localStorage.getItem("shoppingList")),r=document.querySelector(".shopping-list");h();function h(){t.length?(l.classList.remove("is-empty"),l.classList.add("hidden"),r.classList.remove("hidden"),r.innerHTML=u(t),document.querySelectorAll(".shopping-book-del-button").forEach(s=>s.addEventListener("click",f))):(l.classList.remove("hidden"),r.classList.add("hidden"))}function u(i){return i.map(({_id:s,book_image:o,title:e,list_name:p,description:c,author:d,buy_links:n})=>`  <li class="shopping-item" data-id="${s}">
    <img src="${o}" alt="" width="100" height="142"/>
            <div class="main-card-wrapper">
          <h2 class="shopping-book-title">${a(16,e)}</h2>
          <h3 class="shopping-book-category">${a(19,p)}</h3>
          <p class="shopping-book-description">${a(80,c)}</p>
                <div class="bottom-card-wrapper">
        <p class="shopping-book-author">${d}</p>
        <button class="shopping-book-del-button">
      //   <svg id="trash" class="sh-list-delete-icon" viewBox="0 0 32 32">
      //   <path fill="none" stroke="#fff" style="stroke: var(--color1, #fff)" stroke-linejoin="round" stroke-linecap="round" stroke-miterlimit="4" stroke-width="2.9091" d="M12 4h8M4 8h24M25.333 8l-0.935 14.026c-0.14 2.104-0.21 3.157-0.665 3.954-0.4 0.702-1.004 1.267-1.731 1.619-0.826 0.4-1.881 0.4-3.99 0.4h-4.025c-2.109 0-3.163 0-3.99-0.4-0.727-0.353-1.331-0.917-1.731-1.619-0.455-0.798-0.525-1.85-0.665-3.954l-0.935-14.026M13.333 14v6.667M18.667 14v6.667"></path>
      // </svg>
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="-2 -2 24 24">
      <path d="M7.25 1.75h5.5m-11 2.75h16.5m-1.833 0-.643 9.643c-.097 1.446-.145 2.17-.457 2.718a2.75 2.75 0 0 1-1.19 1.114c-.569.275-1.293.275-2.743.275H8.616c-1.45 0-2.174 0-2.743-.275a2.75 2.75 0 0 1-1.19-1.114c-.312-.548-.36-1.272-.457-2.718L3.583 4.5m4.584 4.125v4.583m3.666-4.583v4.583" />
    </svg>
        </button>
        <ul class="shop-links-list">
          <li>
            <a class="shop-link" href="${n[0].url}" target="_blank">
            <img src="${g}" width="32" htight="11" alt="">
            </a>
          </li>
          <li>
            <a class="shop-link" href="${n[1].url}" target="_blank"> 
            <img src="${m}" width="16" htight="16" alt="" />
            </a>
          </li>
          <li>
            <a class="shop-link" href="${n[5].url}" target="_blank">
            <img src="${k}" width="16" htight="16" alt="" />
            </a>
          </li>
        </ul>
      </div>
        </div>
  </li>`).join("")}function f(i){const s=i.currentTarget.closest(".shopping-item"),o=t.findIndex(e=>e._id===s.dataset.id);o!==-1&&(t.splice(o,1),localStorage.setItem("shoppingList",JSON.stringify(t)),h())}
