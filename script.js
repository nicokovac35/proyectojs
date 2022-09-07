class Producto {
    constructor(id, nombre, cantidad, descripcion, precio, talla, img,marca,stock){
        this.id = id
        this.nombre = nombre
        this.marca = marca
        this.precio = precio
        this.stock = stock

    }
}

//Agregue un logeo , pero no se si podra poner un sweet alert dentro de otro?


const botonLogin = document.getElementById("login")

botonLogin.addEventListener("click",() => {
    Swal.fire({
        title: 'Login',
        html:
          'Usuario<input id="swal-input1" class="swal2-input">' +
          'Contraseña<input id="swal-input2" class="swal2-input">',
        focusConfirm: false,
        preConfirm: () => {
          return [
            document.getElementById('swal-input1').value,
            document.getElementById('swal-input2').value
          ]
        }
      })
})

// en cada caja de producto tiene un corazon para agregar a favoritos

const botonAgregarFavoritos = document.getElementById("agregarFavoritos")

botonAgregarFavoritos.addEventListener("click",() => {
    Swal.fire({
        icon: 'success',
        title: 'Agregado a favoritos',
        text: 'Dale click en favoritos para ver todos...',
        footer: '<a href="#">ir a carrito</a>'
      })
})

// Ingrese un input de correo con sweetalert2

const botonEnviarCorreo = document.getElementById("enviarEmail")

botonEnviarCorreo.addEventListener("click",() =>{ 
        Swal.fire({
        title: 'Ingrese su correo!',
        input: 'email',
        inputLabel: 'Conoce descuentos y noticias',
        inputPlaceholder: 'Ingrese su correo'
      })
      
      if (email) {
        Swal.fire(`Ingrese su Correo: ${email}`)
      }
    
})


/*----fetch*/

fetch('./json/productos.json')

/*
let darkMode

if(localStorage.getItem("darkMode")) { //null si no existe la key
    darkMode = localStorage.getItem("darkMode") //consulto el local storage
} else {
    localStorage.setItem("darkMode", "light") //Creo
}

if(darkMode == "dark") {
    document.body.classList.add('darkMode')
}

const botonDarkMode = document.getElementById("botonDarkMode")
const botonLightMode = document.getElementById("botonLightMode")
const botonProductos = document.getElementById("botonProductos")
const divProductos = document.getElementById("divProductos")

botonDarkMode.addEventListener('click', () => {
   // document.body.style.backgroundColor = "black"
   // document.body.style.color = "white"
   document.body.classList.add('darkMode')
   localStorage.setItem("darkMode", "dark")
})

botonLightMode.addEventListener('click', () => {
   // document.body.style.backgroundColor = "white"
   // document.body.style.color = "black"
   document.body.classList.remove('darkMode')
   localStorage.setItem("darkMode", "light")
})
// Stock 
*/

// Agregar carrito
const contenedorProductos = document.getElementById("contenedor-productos")

let carrito = []

productosStock.forEach((producto) =>{
    const div = document.createElement("div")
    div.classList.add("producto")
    div.innerHTML = `
        <img src="${producto.img} alt="">
        <h3>${producto.nombre} </h3>
        <p>${producto.descripcion}</p>
        <p>Talla: ${producto.talla}</p>
        <p class="precioProducto">Precio:$ ${producto.precio}</p>
        <button id="agregar${producto.id}" class="boton-agregar">Agregar <span class="material-symbols-outlined">
        shopping_cart 
        </span> 
        </buttom>
    
    `
    contenedorProductos.appendChild(div)
})

const agregarAlcarrito = (proID) => {
    const item = productosStock.find((prod) =>  prod.id === prodID)
    carrito.push(item)
}


// Stock


//libreria
