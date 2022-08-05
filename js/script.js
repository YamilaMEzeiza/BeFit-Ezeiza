

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
let tiendaOnline = [{
    producto:"Milanesa Not chicken",
    id:001,
    precio:355},
    {producto:'Not burger Premium Flowpack',
    id:002,
    precio:757},
    {producto:'Dulce de Frutos del Bosque Light',
    id:002,
    precio:786},
    {producto:'Galletita de Coco Sin Azucar',
    id:003,
    precio:144},
    {producto:'Pasta Organica Tallarin',
    id:004,
    precio:454},
];


