let productosEnCarrito = JSON.parse(localStorage.getItem('shoppingCart'));
if(!productosEnCarrito){
    productosEnCarrito = [];
}
const parentElement =document.querySelector('.AgregarAlCarrito');
const cartSumPrice = document.querySelector('.carrito-icono');
const products = document.querySelectorAll('.card');

const countTheSumPrice = function () { // 4
	let sum = 0;
	productosEnCarrito.forEach(item => {
		sum += item.price;
	});
	return sum;
}

