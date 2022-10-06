// el carrito
let cartIcon =document.querySelector("#carrito-icono");
let cart =document.querySelector(".cart");
let closeCart =document.querySelector("#cerrar-cart");


cartIcon.onclick = () => {
    cart.classList.add("active");
}  

closeCart.onclick = () => {
    cart.classList.remove("active");
}
