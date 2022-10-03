const menuham = document.querySelector(".menuham");
const navList = document.querySelector(".nav-list");

if (menuham){
    menuham.addEventListener("click", () => {
        navList.classList.toggle("open");
    });
};