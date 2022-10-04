const carro = new Carrito();
const carrito = document.getElementById('carrito');
const productos = document.getElementById('divProductos');

cargarEventos();

function cargarEventos(){
    productos.addEventListener('click', (e)=> {carro.comprarProducto(e)});
}
