const PRODUCTOS_NOTART =[
    { 
        id: '1',
        nombre: 'Prodcuto 1',
        precio:35000,
        descripcion: 'Lorem Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry',
        img: '#',
        categoria: 'categoria a',
    },
    { 
        id: '2',
        nombre: 'Prodcuto 2',
        precio:35000,
        descripcion: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry',
        img: '#',
        categoria: 'categoria b',
    },
    {
        id: '3',
        nombre: 'Prodcuto 3',
        precio:35000,
        descripcion: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry}',
        img: '#',
        categoria: 'categoria c',
    },
    { 
        id: '4',
        nombre: 'Prodcuto 4',
        precio:35000,
        descripcion: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry}',
        img: '#',
        categoria: 'categoria d',
    }

];
/* Propiedades  */ 
class  Producto{
    constructor(id, nombre, precio, descripcion, img, categoria){
        this.id = id;
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.precio = precio;
        this.img = img;
        this.categoria = categoria;
    }
    //metodos 
    obtenerInfo(){
        return 'ID: $(this.id) | $(this.nombre) $$(this.precio)';

    }
    obtenerAviso(emoji){ 
        return '${this.nombre} >>>>> valgo solo $${this.precio}${emoji}'; 
    }
}
// variables
const carrito = [];

// FUnciones 

const obtenerInfoProductos = (productosArray) => {
    return productosArray.map( (elemento)=> elemento.obtenerInfo()  ).join('\n');
}
const agregarAlcarritoPorId = (productos) => {
    const infoProductos = obtenerInfoProductos(productos);
    const id = prompt ("ingrese el id del producto que desea agregar:\n "+ infoProductos);
    const producto = productos.find((producto) => producto.id === id);

    if(!producto) return;
    carrito.push(producto);
    alert ("producto agregado al carrito");
}
const imprimirCarrito = (carritoDeproductos) => {
    carritoDeproductos.forEach ((producto) =>{  // para recorrer los productos 
        console.log(producto.obtenerAviso());
    });
}

// Ejecucion, metodo .map 

const productos = PRODUCTOS_NOTART.map (producto => new Producto(
    producto.id,
    producto.nombre,
    producto.precio,
    producto.descripcion,
    producto.img,
    producto.categoria
));

agregarAlcarritoPorId(productos);
agregarAlcarritoPorId(productos);
agregarAlcarritoPorId(productos);

alert ("Abre la consola");
imprimirCarrito(carrito);
console.log(obtenerTotal(carrito));




/*
inputText.addEventListener("input", () => {
    console.log(inputText.value)
})

09-08
 para formulario 
idForm.addEventListener('submit', (e) => {
    e.preventDefault()
    const username = document.getElementById("username").value
    const email = document.getElementById("email").value
    const password = document.getElementById("password").value

    const user = new User(username, email, password)

    users.push(user)

    idForm.reset()
    console.log(users)
})



*/
