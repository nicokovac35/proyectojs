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
};



// Boton Para subir en la pagina
let mybutton = document.getElementById("myBtn");


window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}


function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}