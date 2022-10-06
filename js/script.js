const divProductos =document.getElementById("divProductos")

fetch('./json/productos.json')
.then(response => response.json())
.then(productos => {
    productos.forEach((producto, indice) => {
        divProductos.innerHTML += `
        <div class="card" id="producto${indice}" style="width: 18rem;top:18 rem;margin:5px;">
        <img src="./img/${producto.img}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${producto.nombre}</h5>
                <p class="card-text">Marca:${producto.marca}</p>
                <p class="card-text">Precio:${producto.precio}</p>
                <p class="card-text">Stock: ${producto.stock}</p>

                <ul class="iconos2">
                    <li><i id="click-corazon" class='bx bx-heart-circle' ></i></li>
                    <li><i class='bx bx-search'></i></li>
                    <li><i class='bx bxs-cart-add'></i></li>
                </ul>
            <button id="AgregarAlCarrito" class=" btn1">Comprar</button>
            <button id="AgregarAFavoritos" class=" btn2"> Ver Mas</button>
            
        </div>
    </div>

    
        `
    
    
});

})
