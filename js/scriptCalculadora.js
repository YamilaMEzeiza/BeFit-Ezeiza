const btnSwal=document.getElementById('btnSwal');
function calculadora(peso,altura){
    let resultado=parseInt(peso/(altura*altura));
    let calculo= document.getElementById('calculo');
    let calculoNuevo=resultado;
    calculo.innerText=calculoNuevo;
}


btnSwal.addEventListener('click', () => {
let peso = document.getElementById('peso').value;
let altura =document.getElementById('altura').value;
let timerInterval
Swal.fire({
  title: 'Calculando tu indice de masa corporal',
  html: 'Tu resultado estará en <b></b> milisegundos',
  timer: 10000,
  timerProgressBar: true,
  didOpen: () => {
    Swal.showLoading()
    const b = Swal.getHtmlContainer().querySelector('b')
    timerInterval = setInterval(() => {
      b.textContent = Swal.getTimerLeft()
    }, 100)
  },
  willClose: () => {
    clearInterval(timerInterval)
  }
}).then((result) => {
 
  if (result.dismiss === Swal.DismissReason.timer) {
    calculadora();
imcResultado();
  }
})

})

function imcResultado(){
    let bajo=18.5;
    let saludable=18.6;
    let sobrepeso= 25;
    let obesidad= 30;
    
    if(calculadora <=bajo){
        let resultadoNuevo=document.getElementById('resultadoNuevo');
        let resultadoFinal= 'Su IMC se encuentra dentro del rango de peso insuficiente';
    }else if(calculadora>=saludable){
        let resultadoNuevo=document.getElementById('resultadoNuevo');
        let resultadoFinal='Su IMC se encuentra dentro del rango de peso normal o saludable';
    }else if(calculadora>=sobrepeso){
        let resultadoNuevo=document.getElementById('resultadoNuevo');
        let resultadoFinal='Su IMC se encuentra dentro del rango de sobrepeso.';
    }else{
        let resultadoNuevo=document.getElementById('resultadoNuevo');
        let resultadoFinal=' Su IMC se encuentra dentro del rango de obesidad.';
    }
    }
    