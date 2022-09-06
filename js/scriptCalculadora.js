const btnSwal = document.getElementById("btnSwal");

let bajo = 18.5;
let saludable = 18.6;
let sobrepeso = 25;
let obesidad = 30;
const calculadora = (e) => {
  e.preventDefault();
  let peso = Number(document.getElementById("peso").value);
  let altura = Number(document.getElementById("altura").value);
  let calculo = document.getElementById("calculo");
  let resultadoNuevo = document.getElementById("resultadoFinal");
  let mensaje;
  let resultado = peso / (altura * altura);
  console.log(altura, peso);
  if (resultado <= bajo) {
    mensaje = "Su IMC se encuentra dentro del rango de peso insuficiente";
  } else if (resultado >= saludable) {
    mensaje = "Su IMC se encuentra dentro del rango de peso normal o saludable";
  } else if (resultado >= sobrepeso) {
    mensaje = "Su IMC se encuentra dentro del rango de sobrepeso.";
  } else {
    mensaje = " Su IMC se encuentra dentro del rango de obesidad.";
  }
  // let calculoNuevo=resultado;

  console.log(resultado, mensaje);
  calculo.innerText = resultado;
  resultadoNuevo.innerText = mensaje;
  mostrarSwal(resultado);
};

btnSwal.addEventListener("click", calculadora);

function mostrarSwal(resultado) {
  Swal.fire({
    title: "Se calculó tu IMC ",
    backdrop: `rgba(0, 0, 0, 0.9)`,
    text: `Tu IMC es ${resultado}`,
    timer: 3000,
  });
}

    