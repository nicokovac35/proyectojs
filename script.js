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

class  Producto{
    constructor(ide, nombre, precio, descripcion, img, categoria){
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
        this.img = img;
        this.categoria = categoria;
    }
    obtenerInfo(){
        return 'ID: $(this.id) | $(this.nombre) $$(this.precio)';

    }
    obtenerAviso(emoji){
        return '${this.nombre} >>>>> valgo solo $${this.precio}${emoji}'; 
    }
}

const carrito = [];

const obtenerInfoProductos = (productosArray) => {
    return productosArray.map( (elemento)=> elemento.ObtenerAviso('#').join('\n'));
}


/*
inputText.addEventListener("input", () => {
    console.log(inputText.value)
})

09-08
  cabmsiojsd

*/
