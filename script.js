document.addEventListener("DOMContentLoaded",()=>{
 const btn=document.querySelector(".menu-btn");
 const links=document.querySelector(".navlinks");
 if(btn&&links){btn.addEventListener("click",()=>{const open=links.classList.toggle("open");btn.setAttribute("aria-expanded",String(open));});}
 document.querySelectorAll(".navlinks a").forEach(a=>a.addEventListener("click",()=>links?.classList.remove("open")));
 const year=document.querySelector("[data-year]"); if(year) year.textContent=new Date().getFullYear();
});