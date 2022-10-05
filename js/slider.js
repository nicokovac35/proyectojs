const menuham = document.querySelector(".menuham");
const navList = document.querySelector(".nav-list");

if (menuham){
    menuham.addEventListener("click", () => {
        navList.classList.toggle("open");
    });
};


// Para cerrar el banner en la x

const popup =document.querySelector(".bannerfinal");
const closePopup =document.querySelector(".bannerfinal-close");

if(popup) {
    closePopup.addEventListener("click", () =>{
        popup.classList.add("hide-popup");
    });
    window.addEventListener("load", ()=>{
        setTimeout(()=>{
            popup.classList.remove("hide.popup");
        }, 1000);
    });
}