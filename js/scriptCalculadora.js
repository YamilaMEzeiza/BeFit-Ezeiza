function calculadora(peso,altura){
    let resultado=parseInt(peso/(altura*altura));
    let calculo= document.getElementById('calculo');
    let calculoNuevo=resultado;
    calculo.innerText=calculoNuevo;
}

function calcularImc() {

		let peso = document.getElementById('peso').value;
		let altura =document.getElementById('altura').value;
		calculadora(peso, altura);
        imcResultado();
        
}
btnCalculo.addEventListener('click',calcularImc)

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
    