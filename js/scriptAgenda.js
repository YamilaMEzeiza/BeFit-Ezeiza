
let registros = [];
let registrosGuardados = document.getElementById("registrosGuardados");
let registroStorage = localStorage.getItem("registro");
const btnSwal=document.getElementById('btnSwal');

const agregarRegistro = () => {
    let registro =  document.getElementById("registroNuevo");
    if (registro.value === "") {
        alert("No ingreses un registro vacío");
    } else {
        registros.push(registro.value);
        console.log('Array registro',registros);
        crearRegistro(registro.value);    
        guardarLocalStorage(registros);
        registro.value = "";
    };
};


const crearRegistro = (texto) => {
    let div_registro = document.createElement("div");
    let card = document.createElement("card");
    let nuevoRegistro = document.createElement("p");
    div_registro.className = "registro";
    nuevoRegistro.innerText = texto;
    div_registro.appendChild(nuevoRegistro);
    registrosGuardados.appendChild(div_registro); 
    registrosGuardados.appendChild(card); 


      };
      let buttonAgregar = document.getElementById("boton_registro_nuevo");
      buttonAgregar.addEventListener("click", agregarRegistro);

const borrarTodosRegistros = () => {
    registrosGuardados.querySelectorAll("*").forEach(registro => registro.remove());
    localStorage.removeItem("registros");
    registros = [];
};
btnSwal.onclick = () => {
Swal.fire({
    title: '¿Estás seguro de que quieres borrar todos los registros?',
    text: "¡No podrás revertir esta acción!",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Acepto',
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire(
        borrarTodosRegistros()
      )
    }
  })  };


const guardarLocalStorage = (registro_a_guardar) => {
    if (registroStorage == null) {
        localStorage.setItem("registro", JSON.stringify(registro_a_guardar));    
    } else {
        localStorage.setItem("registro", JSON.stringify(registro));
    };
};

if (registroStorage != null) {
    registroStorage = JSON.parse(registroStorage);
    console.log('registroStorage', registroStorage);  
   registros = registroStorage;
    registros.forEach(texto => {
        crearRegistro(texto);
    });
};

    