const i_menu = document.getElementById("i_menu");
const nav_bar = document.querySelector(".nav_bar");
const homepage = document.querySelector(".homepage");

i_menu.addEventListener("click",()=>{
    nav_bar.classList.toggle("close");
    homepage.classList.toggle("close");
});

