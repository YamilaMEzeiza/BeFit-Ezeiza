

let edad=18;
for(let i=0; i<3; i++){
    let edad=parseInt(prompt ('Ingresá tu edad'));
    if (edad>=18){
        alert('¡Bienvenido a be fit!');
        break;
    }
else{
    alert('Esta app es solo para mayores de edad')
}
}
/* 
let diasRecomendados = 4;
let diasUsuario = prompt("¿Cuantas veces a la semana es recomendado hacer deporte?");

while (diasUsuario < diasRecomendados) {
	alert("Eso no es correcto");
    let diasUsuario = prompt("¿Cuantas veces a la semana es recomendado hacer deporte?")
}	
alert ('Correcto');


function tienda() {
	let respuesta = "si";
	let respuestaUsuario = prompt("¿Te gustaría probar nuestros productos saludables?");

	if (respuestaUsuario === respuesta) {
		alert ('¡Bienvenido/a a nuestra tienda!')
	} else {
		alert("Continua disfrutando de Be Fit");
	}
}


const productoBarato= tiendaOnline.filter((productoBarato)=>productoBarato.precio<500);
console.log(productoBarato)
const productoCaro= tiendaOnline.filter((productoCaro)=>productoCaro.precio>500);
console.log(productoCaro)

let keyword= prompt('Ingresá el nombre del producto que estás buscando');
const filtroProducto=tiendaOnline.filter((filtroProducto)=>filtroProducto.producto.includes(keyword));
*/
let catalogoTarjetas = document.querySelector('.catalogoTarjetas');
let tiendaOnline = [{
    producto:"Milanesa Not chicken",
    imagen:'./img/img1.jpg',
    id:001,
    precio:355},
    {producto:'Not burger Premium Flowpack',
    imagen:'./img/img22.jpg',
    id:002,
    precio:757},
    {producto:'Dulce de Frutos del Bosque Light',
    imagen:'./img/img2.jpg',
    id:003,
    precio:786},
    {producto:'Galletita de Coco Sin Azucar',
    imagen:'./img/img3.jpg',
    id:004,
    precio:144},
    {producto:'Pasta Organica Tallarin',
    imagen:'./img/img4.jpg',
    id:005,
    precio:454},
    {producto:'Shiva Crackers Pimenton Ahumado x 100g - Shiva',
    imagen:'./img/img5.jpg',
    id:006,
    precio:363},
    {producto:'Granola Clasica x 750g - Planta Abierta',
    imagen:'./img/img6.jpg',
    id:007,
    precio:1645},
    {producto:'Harina de Lupino Integral x 400g - Epicos',
    imagen:'./img/img7.jpg',
    id:007,
    precio:1363},
    {producto:'Yogurt a Base de Coco Durazno Sin Azucar Iogo x 160g - Crudda',
    imagen:'./img/img8.jpg',
    id:010,
    precio:1364},
    {producto:'Leche de Coco Light x 200ml - Coco do Vale',
    imagen:'./img/img9.jpg',
    id:011,
    precio:560},  
    {producto:'Bastoncitos de Queso Port Salut Light con Mix de Semillas x 290g ',
    imagen:'./img/img10.jpg',
    id:012,
    precio:480},  
];
for (const productosPlantilla of tiendaOnline) {
    let productos = document.createElement('div');
    productos.className = 'card  bg-light ms-2';
    productos.id = `${productosPlantilla.id}`;
    productos.innerHTML = `
    <h3 class="card-header">${productosPlantilla.producto}</h3>
    <div class="card-body">
    <img src="${productos.imagen}" class="card-img-top imagenProducto" alt="${productos.producto}">
        <span id="precio">$ ${productosPlantilla.precio}</span>
    </div>
    <div class="card-footer"><a href="#" class="btn btn-primary">Comprar</a></div>`;
    catalogoTarjetas.append(productos)
}

function buscar(array, criterio, input) {
    return array.filter((productosPlantilla) => productosPlantilla[criterio].includes(input))
}

productosPlantilla(tiendaOnline, catalogoTarjetas);

let busqueda = document.querySelectorAll('.inputBusqueda');

busqueda.forEach(input => {
    input.addEventListener('input', () => {
        let cadena = (input.value).toLowerCase();
        console.log(cadena);
        crearTarjetas(buscar(tiendaOnline, input.id, cadena), catalogoTarjetas);
    })
});

