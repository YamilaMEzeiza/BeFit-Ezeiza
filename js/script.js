let productosItems=document.querySelector(".productosItems")
let carrito= [];
const carritoContenedor=document.getElementById("carritoContainer")
const vaciarCarrito= document.getElementById("vaciarCarrito")
const precioTotal= document.getElementById("precioTotal")
const btnSwal=document.getElementById('btnSwal');const tiendaOnline=[];
const url='../tienda/productos.json'
 //Fetch de los productos
fetch(url)
    .then(response=> response.json() .then(data=>{
        mostrarProductos(data)
        tiendaOnline.push(...data)
        }))
function mostrarProductos(data) {
    for(const productos of data)  {
        let productosPlantilla= document.createElement("div");
        productosPlantilla.className = 'card ';
        productosPlantilla.id = `${productos.id}`;
        productosPlantilla.innerHTML=` 
         <div class="col ">
         <h3 class="card-header colorTexto">${productos.producto}</h3>
         <div class="card-body">
         <img src=${productos.imagen} class="card-img-top w-25 imagenProducto" alt="${productos.producto}">
         <span id="precio" class="colorTexto">$ ${productos.precio}</span>
          </div>
          <div class="card-footer"> <button class="btn-primary botones"id="agregar${productos.id}">Agregar al carrito</button>
            </div>
         </div>  `;
           
    productosItems.appendChild(productosPlantilla);
    const botonAgregar=document.getElementById(`agregar${productos.id}`)
    botonAgregar.addEventListener('click',() =>{
        agregarCarrito(productos.id)
    })
      }
}
 //Local Storage
document.addEventListener("DOMContentLoaded",()=>{
if(localStorage.getItem("carrito")){
    carrito=JSON.parse(localStorage.getItem("carrito"))
    carritoActual()
}
})

  //Agregar un producto al carrito
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
              <h3 class="text-truncate ml-3 mb-0">${product.producto}</h3>
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
 //Eliminar producto del carrito
const eliminarDelCarrito=(productId)=>{
    const itemProducto= carrito.find((product)=>product.id === productId)
const indice=carrito.indexOf(itemProducto)
carrito.splice(indice,1)
carritoActual()}
 //Vaciar todo el carrito
 vaciarCarrito.addEventListener("click",()=>{
    carrito.length=0
    carritoActual()
})
 //Boton de SweetAlert
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

     //Funcion para buscar un producto
function eventoSearch(){
    let busqueda = document.getElementById('nombre');
    busqueda.addEventListener('keyup',()=>{
    const buscarElemento=[];
    buscarElemento.splice(0)
    productosItems.innerHTML=""
    let texto= busqueda.value.toUpperCase()
    console.log(tiendaOnline)
        for(let producto of tiendaOnline){
        let nombreProducto=producto.producto.toUpperCase();
        if(nombreProducto.indexOf(texto)!==-1){
            buscarElemento.push(producto)
        }
    }
    mostrarProductos(buscarElemento)
})}
    eventoSearch()