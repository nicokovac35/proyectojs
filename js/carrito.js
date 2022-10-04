let cartIcon =document.querySelector("#carrito-icono");

let cart = document.querySelector("AgregarAlCarrito");

let closeCart =document.querySelector("#close-cart");

cartIcon.onclick = () =>{
    cart.classList.add("active");
}

