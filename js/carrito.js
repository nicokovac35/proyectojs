// el carrito
let cartIcon =document.querySelector("#carrito-icono");
let cart =document.querySelector(".cart");
let closeCart =document.querySelector("#cerrar-cart");


cartIcon.onclick = () => {
    cart.classList.add("active");
}  

closeCart.onclick = () => {
    cart.classList.remove("active");
};

 
// cart con js

if (document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', ready);
} else  {
    ready();
}

// Funciones 

function ready(){
    const removeCartButtons = document.getElementById('#cart-remove')
    console.log (removeCartButtons)

    for (let i = 0; i < removeCartButtons.length; i++) {
        let button = removeCartButtons[i]
        button.addEventListener('click', removeCartItem)
    }
}
//Cantidad de productos

const cantidadInputs = document.getElementsByClassName ("cart-cantidad");
for (let i = 0; i < cantidadInputs.length; i++) {
    let input = catnicoInputs[i];
    input.addEventListener("change", cantidadInputs);
}

// Remover Itemos del carrito de
function removeCartItem(event){
    let buttonClicked = event.target;
    buttonClicked.parantElement.remove();
}

// Cantidad de productos al cambiar
function cantidadChanged(event){
    let input = event.target;
    if (isNaN(input.value) || input.value <= 0){
        input.value = 1;
    }
    updatetotal();

}

//Total
function updatetotal (){
    const cartContent = document.getElementsByClassName('cart-contenido')[0];
    const cartBoxes = carContent.getElementsByClassName ('cart-caja');
    let total =0;
    for (let i = 0; i < cartBoxes.length; i++){
        let cartBox = cartBoxes[i];
        const priceElement = cartBox.getElementsByClassName("cart-precio")[0];
        
        const quantityElement =cart.Box.getElementsByClassName("cart-cantidad")[0];

        const price = parseFloat(priceElement.innerText.replace("$", "" ));

        let quantity = quantityElement.value;
        total = total + price * quantity;

        total = Math.round(total * 100 )/ 100;


        document.getElementsByClassName("total-price")[0].innerText = "$" + total;
    }
}
