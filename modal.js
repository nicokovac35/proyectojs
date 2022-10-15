const contenedorModal = document.getElementsByClassName('modal-contenedor')[0]
const botonAbrir = document.getElementById('boton-carrito')
const botonCerrar = document.getElementById('carritoCerrar')
const modalCarrito = document.getElementsByClassName('modal-carrito')[0]


botonAbrir.addEventListener('click', ()=>{
    contenedorModal.classList.toggle('modal-active')
})
botonCerrar.addEventListener('click', ()=>{
    contenedorModal.classList.toggle('modal-active')
})

contenedorModal.addEventListener('click', (event) =>{
    contenedorModal.classList.toggle('modal-active')

})
modalCarrito.addEventListener('click', (event) => {
    event.stopPropagation() 
});


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