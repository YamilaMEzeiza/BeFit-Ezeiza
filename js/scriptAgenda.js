
let registros = [];
let registrosGuardados = document.getElementById("registrosGuardados");
let registroStorage = localStorage.getItem("registros");

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
    let nuevoRegistro = document.createElement("p");
    let div_registro = document.createElement("div");
    div_registro.className = "registro";
    nuevoRegistro.innerText = texto;
    div_registro.appendChild(nuevoRegistro);
    registrosGuardados.appendChild(div_registro);
   
;
      };
      let buttonAgregar = document.getElementById("boton_registro_nuevo");
      buttonAgregar.addEventListener("click", agregarRegistro);

const borrarTodosRegistros = () => {
    registrosGuardados.querySelectorAll("*").forEach(registro => registro.remove());
    localStorage.removeItem("registros");
    registros = [];
    console.log('Los registros guardados han sido borrados');
};
let buttonBorrar= document.getElementById("borrar");
      buttonBorrar.addEventListener("click", borrarTodosRegistros);

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
    registros.forEach(parrafo => {
        crearRegistro(parrafo);
    });
};

    