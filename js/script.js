
let productosItems=document.querySelector(".productosItems")
const carritoContenedor=document.getElementById("carritoContainer")
const vaciarCarrito= document.getElementById("vaciarCarrito")
const precioTotal= document.getElementById("precioTotal")
const btnSwal=document.getElementById('btnSwal');
let tiendaOnline = [{
    producto:"Milanesa Not chicken",
    imagen:'./img/img1.jpeg',
    id:001,
    cantidad:1,
    precio:355},
    {producto:'Not burger Premium Flowpack',
    imagen:'./img/img22.jpg',
    id:002,
    cantidad:1,
    precio:757},
    {producto:'Dulce de Frutos del Bosque Light',
    imagen:'./img/img2.jpg',
    id:003,
    cantidad:1,
    precio:786},
    {producto:'Galletita de Coco Sin Azucar',
    imagen:'./img/img33.jpg',
    id:004,
    cantidad:1,
    precio:144},
    {producto:'Pasta Organica Tallarin',
    imagen:'./img/img4.jpg',
    id:005,
    cantidad:1,
    precio:454},
    {producto:'Shiva Crackers Pimenton Ahumado x 100g - Shiva',
    imagen:'./img/img5.jpg',
    id:006,
    cantidad:1,
    precio:363},
    {producto:'Granola Clasica x 750g - Planta Abierta',
    imagen:'./img/img6.jpg',
    id:007,
    cantidad:1,
    precio:1645},
    {producto:'Harina de Lupino Integral x 400g - Epicos',
    imagen:'./img/img7.jpg',
    id:007,
    cantidad:1,
    precio:1363},
    {producto:'Yogurt a Base de Coco Durazno Sin Azucar Iogo x 160g - Crudda',
    imagen:'./img/img8.jpg',
    id:010,
    cantidad:1,
    precio:1364},
    {producto:'Leche de Coco Light x 200ml - Coco do Vale',
    imagen:'./img/img9.jpg',
    id:011,
    cantidad:1,
    precio:560},  
    {producto:'Bastoncitos de Queso Port Salut Light con Mix de Semillas x 290g ',
    imagen:'./img/img10.jpg',
    id:012,
    cantidad:1,
    precio:480},  
    {producto:'Not milk ',
    imagen:'./img/img13.jpg',
    id:013,
    cantidad:1,
    precio:380},  
];
let carrito= [];
vaciarCarrito.addEventListener("click",()=>{
    carrito.length=0
    carritoActual()
})
document.addEventListener("DOMContentLoaded",()=>{
if(localStorage.getItem("carrito")){
    carrito=JSON.parse(localStorage.getItem("carrito"))
    carritoActual()
}
})
for(const productos of tiendaOnline)  {
    let productosPlantilla= document.createElement("div");
    productosPlantilla.className = 'card ';
    productosPlantilla.id = `${productos.id}`;
    productosPlantilla.innerHTML=` 
    <div class="col">
    <h3 class="card-header">${productos.producto}</h3>
    <div class="card-body">
    <img src=${productos.imagen} class="card-img-top w-25 imagenProducto" alt="${productos.producto}">
        <span id="precio">$ ${productos.precio}</span>
        </div>
        <div class="card-footer"> <button class="btn btn-primary"id="agregar${productos.id}">Agregar al carrito</button>
        </div>
        </div>
        `;
       
        productosItems.appendChild(productosPlantilla);
  const botonAgregar=document.getElementById(`agregar${productos.id}`)
  botonAgregar.addEventListener('click',() =>{
    agregarCarrito(productos.id)
})
  }
 
const agregarCarrito= (productId)=>{
    const existe=carrito.some(product=> product.id === productId)
    if(existe){
        const product= carrito.map(product=>{
            if(product.id === productId){
                product.cantidad++
            }
        })
    }else{
    const itemProducto= tiendaOnline.find((product)=>product.id===productId)
    carrito.push(itemProducto)

} carritoActual()
}
const carritoActual= ()=>{
   carritoContainer.innerHTML=""
    carrito.forEach((product)=>{
const divNuevo= document.createElement("div")
    divNuevo.className="productoCarrito";
    divNuevo.innerHTML=`
<div class="row ">
      <div class="col-6">
          <div class= "d-flex align-items-center h-100 border-bottom pb-2 pt-3">
              <h6 class="text-truncate ml-3 mb-0">${product.producto}</h6>
          </div>
      </div>
      <div class="col-2">
          <div class=" d-flex align-items-center h-100 border-bottom pb-2 pt-3">
              <p>$${product.precio}</p>
          </div>
      </div>
      <div class="col-4">
          <div class=" d-flex justify-content-between align-items-center h-100 border-bottom pb-2 pt-3">
          <p><span id="cantidad">${product.cantidad}</span></p> 
              <button class="btn btn-danger buttonDelete " id="eliminarCarrito${product.id}" type="button">X</button>
          </div>
      </div>
  </div>`
  carritoContainer.appendChild(divNuevo);
  localStorage.setItem("carrito",JSON.stringify(carrito))
  const botonEliminar=document.getElementById(`eliminarCarrito${product.id}`)
  botonEliminar.addEventListener('click',() =>{
    eliminarDelCarrito(product.id)
  
    })
    
})
precioTotal.innerText= carrito.reduce((acc,product)=>acc+ product.precio,0)
}
const eliminarDelCarrito=(productId)=>{
    const itemProducto= carrito.find((product)=>product.id === productId)
const indice=carrito.indexOf(itemProducto)
carrito.splice(indice,1)
carritoActual()}

btnSwal.onclick = () => {
    Swal.fire({
        title: '¿Comprar este carrito?',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Comprar',
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire( {
            title: "¡Gracias por comprar los productos de BeFit! ",
            text: `Tu pedido llegará en los proximos dias`,

          })
           
        }
      })  };

    


function buscar(array, criterio, input) {
    return array.filter((productos) => productos[criterio].includes(input))
}

productos(tiendaOnline, productosItems);

let busqueda = document.querySelectorAll('.inputBusqueda');

busqueda.forEach(input => {
    input.addEventListener('input', () => {
        let cadena = (input.value).toLowerCase();
        console.log(cadena);
        crearTarjetas(buscar(tiendaOnline, input.id, cadena), productosItems);
    })
});

