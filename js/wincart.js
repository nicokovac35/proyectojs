//Carrito de ventaa
let carritoIcono = document.querySelector('#cart-icon')

let carrito =document.querySelector('.ventana-carrito')



let carritoCerrar = document.querySelector('#close-ventana-carrito')

// Abrir ventana de carrito
carritoIcono.onclick = () =>{
    carrito.classList.add("active");
};

//Cerrar ventana de carrito