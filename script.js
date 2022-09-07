
/*----fetch local*/

const divProductos = document.getElementById("divProductos")

fetch('./json/productos.json')
.then(response => response.json())
.then(productos => {
    productos.forEach((producto, indice) => {
        divProductos.innerHTML += `
            <div class="card" id="producto${indice}" style="width: 18rem;top:18 rem;margin:5px;p">
            <img src="./img/zapatilla.jgp" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${producto.nombre}</h5>
                    <p class="card-text">Marca:${producto.marca}</p>
                    <p class="card-text">Precio:${producto.precio}</p>
                    <p class="card-text">Stock: ${producto.stock}</p>
                <button class=" btn btn-dark">Agregar al carrito</button>
            </div>
        </div>
       ` 
    });

})


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



