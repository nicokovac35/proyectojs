class Producto {
    constructor(id, nombre, cantidad, descripcion, precio, talla, img,tipo){
        this.id = id

    }
}

// Stock 
const contenedorProductos = document.getElementById("contenedor -productos")

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
let productosStock = [
    {id: 1, nombre:" Producto 1", cantidad: 1, descripcion: "Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto", precio: 12000, talla: "XL", img: "#", tipo: "TipoA",},
    {id: 1, nombre:" Producto 1", cantidad: 1, descripcion: "Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto", precio: 12000, talla: "XL", img: "#", tipo: "TipoA",},
    {id: 1, nombre:" Producto 1", cantidad: 1, descripcion: "Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto", precio: 12000, talla: "XL", img: "#", tipo: "TipoA",},
    {id: 1, nombre:" Producto 1", cantidad: 1, descripcion: "Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto", precio: 12000, talla: "XL", img: "#", tipo: "TipoA",},
    {id: 1, nombre:" Producto 1", cantidad: 1, descripcion: "Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto", precio: 12000, talla: "XL", img: "#", tipo: "TipoA",},
    {id: 1, nombre:" Producto 1", cantidad: 1, descripcion: "Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto", precio: 12000, talla: "XL", img: "#", tipo: "TipoA",},
    {id: 1, nombre:" Producto 1", cantidad: 1, descripcion: "Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto", precio: 12000, talla: "XL", img: "#", tipo: "TipoA",},
    {id: 1, nombre:" Producto 1", cantidad: 1, descripcion: "Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto", precio: 12000, talla: "XL", img: "#", tipo: "TipoA",},
    {id: 1, nombre:" Producto 1", cantidad: 1, descripcion: "Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto", precio: 12000, talla: "XL", img: "#", tipo: "TipoA",},
    {id: 1, nombre:" Producto 1", cantidad: 1, descripcion: "Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto", precio: 12000, talla: "XL", img: "#", tipo: "TipoA",},
    ,{id: 1, nombre:" Producto 1", cantidad: 1, descripcion: "Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto", precio: 12000, talla: "XL", img: "#", tipo: "TipoA",},
    {id: 1, nombre:" Producto 1", cantidad: 1, descripcion: "Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto", precio: 12000, talla: "XL", img: "#", tipo: "TipoA",}
    

]