//Carrito de ventaa
let carritoIcono = document.querySelector('#cart-icon')

let carrito =document.querySelector('.ventana-carrito')



let carritoCerrar = document.querySelector('#close-ventana-carrito')

// Abrir ventana de carrito
carritoIcono.onclick = () =>{
    carrito.classList.add("active");
};

//Cerrar ventana de carrito

carritoCerrar.onclick = () =>{
    carrito.classList.remove("active");
}


//Carrito trabajando con js para


if (document.readyState == "loading"){
    document.addEventListener("DOMContentLoaded", ready);

} else {
    ready();
}


// Creando funciones para
function ready(){
    //remover itens desde el carrito
    const removerCarritoBoton = document.getElementsByClassName('.cart-remove')
        for (let i = 0; i < removerCarritoBoton.length; i++){
            const button = removerCarritoBoton [i];
            button.addEventListener("click", removerCarritoItem);
        }
}

// remover items desde el carrito del
function removerCarritoItem(event){
    const buttonClicked = event.target;
    buttonClicked.parentElement.remove();
}

//


