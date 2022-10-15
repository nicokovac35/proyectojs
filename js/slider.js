//const menuham = document.querySelector(".menuham");
//const navList = document.querySelector(".nav-list");

//if (menuham){
//    menuham.addEventListener("click", () => {
//        navList.classList.toggle("open");
//    });
//};





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
};


// Desparecer el sticky

