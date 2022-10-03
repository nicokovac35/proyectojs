const divProductos = document.getElementById("divProductos")
/*----fetch local*/
fetch('./json/productos.json')
.then(response => response.json())
.then(productos => {
    

})






function mostrarProductos(arraysProductos) {
    arraysProductos.forEach((producto, indice) => {
        divProductos.innerHTML += `
            <div class="card" id="producto${indice}" style="width: 18rem;top:18 rem;margin:5px;p">
            <img src="./img/${producto.img}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${producto.nombre}</h5>
                    <p class="card-text">Marca:${producto.marca}</p>
                    <p class="card-text">Precio:${producto.precio}</p>
                    <p class="card-text">Stock: ${producto.stock}</p>
                <button id="AgregarAlCarrito" class=" btn btn-dark">Agregar al carrito</button>
                
                <button id="AgregarAFavoritos" class=" btn btn-dark"> A Favoritos</button>
                
            </div>
        </div>
       ` 
    });

}

inputProducto.addEventListener('input', () =>{
    let res = inputProducto.value

    traerProductos().then(productos =>{
        const productosFiltrados = productos.filter(producto => producto.nombre.toLowerCase().includes(res.toLowerCase()))
        divProductos.innerHTML =""
        mostrarProductos(productosFiltrados)
    }) 
})

botonProductos.addEventListener('click', () =>{
    traerProductos().then(productos => {
        mostrarProductos(productos)
    })
})



