class Producto {
    constructor(id, nombre, cantidad, descripcion, precio, talla, img,marca,stock){
        this.id = id
        this.nombre = nombre
        this.marca = marca
        this.precio = precio
        this.stock = stock

    }
}

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
let productosStock = [
    {id: 1, nombre:" Producto 1", cantidad: 1, descripcion: "Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto", precio: 12000, talla: "XL", img: "#", tipo: "TipoA",},
    {id: 1, nombre:" Producto 1", cantidad: 1, descripcion: "Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto", precio: 12000, talla: "XL", img: "#", tipo: "TipoA",},
    {id: 1, nombre:" Producto 1", cantidad: 1, descripcion: "Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto", precio: 12000, talla: "XL", img: "#", tipo: "TipoA",},
    {id: 1, nombre:" Producto 1", cantidad: 1, descripcion: "Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto", precio: 12000, talla: "XL", img: "#", tipo: "TipoA",},
    {id: 1, nombre:" Producto 1", cantidad: 1, descripcion: "Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto", precio: 12000, talla: "XL", img: "#", tipo: "TipoA",},
   

]

//libreria
Swal.fire({
    position: 'top-end',
    icon: 'success',
    title: 'Agregado Correctamente',
    showConfirmButton: true,
    timer: 1500
  })