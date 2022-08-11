/*Cree un objeto constructor para el e-commerce
con 

*/
class Producto{
    constructor(id,nombre,autor,descripcion, precio){
            this.id_Producto = id
            this.nombre_Producto = nombre
            this.autor_Producto = autor
            this.descripcion_Producto = descripcion
            this.precio_Producto = precio
          }
}

const producto1 = new Producto("01","nombre01","autor01","Lorem Ipsum is simply dummy text of the printing and typesetting industry.","$120000")

const producto2 = new Producto("02","nombre02","auto02","Lorem Ipsum is simply dummy text","$75000")

const producto3 = new Producto("03","nombre03","autor3","Lorem Ipsum is simply dummy text","110000")

const producto4 = new Producto("04","nombre04","autor4","Lorem Ipsum is simply dummy text","10000")

const producto5 = new Producto("05","nombre05","autor5","Lorem Ipsum is simply dummy text","80000")

const producto6 = new Producto("06","nombre06","autor6","Lorem Ipsum is simply dummy text","10000")

// Arrays
const productos = [producto1, producto2, producto3, producto4, producto5, producto6]

console.table(productos)

const producto = new Producto(prompt("Ingrese el nombre del producto"), prompt ("Ingrese el autor"))

productos.push(producto)

console.table(productos)






/*

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
    },
    {
        id: '5',
        nombre: 'Prodcuto 5',
        precio:35000,
        descripcion: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry',
        img: '#',
        categoria:'categoria f',
    } 

];
 
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
