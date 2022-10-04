class Carrito {

    comprarProducto(e){
        e.preventDefault();
        if(e.target.classList.contains('AgregarAlCarrito')){
            const producto = e.target.parentElement.parentElement;
           // this.leerDatosProducto(producto);
           console.log(producto);
        }
    }
}