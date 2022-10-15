

const contenedorProductos = document.getElementById('contenedor-productos')



const contenedorCarrito = document.getElementById('carrito-contenedor')

const botonVaciar = document.getElementById('vaciar-carrito')

const contadorCarrito = document.getElementById('contadorCarrito')


const cantidad = document.getElementById('cantidad')
const precioTotal = document.getElementById('precioTotal')
const cantidadTotal = document.getElementById('cantidadTotal')

let carrito = []

document.addEventListener('DOMContentLoaded', () => {
    if (localStorage.getItem('carrito')){
        carrito = JSON.parse(localStorage.getItem('carrito'))
        actualizarCarrito()
    }
})

botonVaciar.addEventListener('click', () => {
    carrito.length = 0
    actualizarCarrito()
})

//PRIMER PRIMER PASO, INYECTAR EL HTML
stockProductos.forEach((producto) => {
    const div = document.createElement('div')
    div.classList.add('producto')
    div.innerHTML = `
   
        <img src="./img/${producto.img}" class="card-img-top" alt="...">
    <h3>${producto.nombre}</h3>
    
    <p>Talla: ${producto.talle}</p>
    <p class="precioProducto">Precio:$ ${producto.precio}</p>
    <button id="ver${producto.id}" class="boton-ver">Ver MAS</button>
    <button id="agregar${producto.id}" class="boton-agregar"></i>Agregar </button>

    `
    contenedorProductos.appendChild(div)

   



    const boton = document.getElementById(`agregar${producto.id}`)
    
    boton.addEventListener('click', () => {
       
        agregarAlCarrito(producto.id)
    
    })
})




const agregarAlCarrito = (prodId) => {


    const existe = carrito.some (prod => prod.id === prodId) //

    if (existe){ 
        const prod = carrito.map (prod => { 
            if (prod.id === prodId){
                prod.cantidad++
            }
        })
    } else { 
        const item = stockProductos.find((prod) => prod.id === prodId)
        carrito.push(item)
    }
   
    actualizarCarrito() 
}



const eliminarDelCarrito = (prodId) => {
    const item = carrito.find((prod) => prod.id === prodId)

    const indice = carrito.indexOf(item) 

    carrito.splice(indice, 1) 
    actualizarCarrito() 
    
}

const actualizarCarrito = () => {
    
    contenedorCarrito.innerHTML = "" 
    carrito.forEach((prod) => {
        const div = document.createElement('div')
        div.className = ('productoEnCarrito')
        div.innerHTML = `
        <img src="./img/${prod.img}" class="card-img-top" alt="...">
        <p>${prod.nombre}</p>
        <p>Precio:$${prod.precio}</p>
        <p>Talla: <span id="cantidad">${prod.talle}</span></p>
        <button onclick="eliminarDelCarrito(${prod.id})" class="boton-eliminar"><i class="fas fa-trash-alt"></i></button>
        `

        contenedorCarrito.appendChild(div)
        //LocalStorage
        localStorage.setItem('carrito', JSON.stringify(carrito))

    })
    
    contadorCarrito.innerText = carrito.length 
  
    precioTotal.innerText = carrito.reduce((acc, prod) => acc + prod.stock * prod.precio, 0)
   
}