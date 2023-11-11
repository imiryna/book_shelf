import{s as n,h as g,i as m,j as u}from"./utils-0e469c85.js";const k="/book_shelf/assets/trash-1f3e79b4.svg",l=document.querySelector(".main-shopping-markup"),t=JSON.parse(localStorage.getItem("shoppingList")),p=document.querySelector(".shopping-list");h();function h(){t.length?(l.classList.remove("is-empty"),l.classList.add("hidden"),p.classList.remove("hidden"),p.innerHTML=b(t),document.querySelectorAll(".shopping-book-del-button").forEach(s=>s.addEventListener("click",f))):(l.classList.remove("hidden"),p.classList.add("hidden"))}function b(i){return i.map(({_id:s,book_image:e,title:o,list_name:r,description:c,author:d,buy_links:a})=>`  <li class="shopping-item" data-id="${s}">
    <img src="${e}" alt="" width="100" height="142"/>
            <div class="main-card-wrapper">
          <h2 class="shopping-book-title">${n(16,o)}</h2>
          <h3 class="shopping-book-category">${n(19,r)}</h3>
          <p class="shopping-book-description">${n(80,c)}</p>
                <div class="bottom-card-wrapper">
        <p class="shopping-book-author">${d}</p>
        <button class="shopping-book-del-button">
          <svg width="16" height="16" class="delete-button-icon">
            <use href="${k}"></use>
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
            <img src="${u}" width="16" htight="16" alt="" />
            </a>
          </li>
        </ul>
      </div>
        </div>
  </li>`).join("")}function f(i){const s=i.currentTarget.closest(".shopping-item"),e=t.findIndex(o=>o._id===s.dataset.id);e!==-1&&(t.splice(e,1),localStorage.setItem("shoppingList",JSON.stringify(t)),h())}
