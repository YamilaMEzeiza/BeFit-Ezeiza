function calculadora(peso,altura){
    let resultado=parseInt(peso/(altura*altura));
    let calculo= document.getElementById('calculo');
    calculo.innerText=resultado;
}

function imc() {
	let respuesta = "si";
	let respuestaUsuario = prompt("¿Querés calcular tu indice de masa corporal?");

	if (respuestaUsuario === respuesta) {
		let peso = prompt("Ingresa tu peso");
		let altura = prompt("Ingresa tu altura");
		calculadora(peso, altura);
	} else {
		alert("Continua disfrutando de Be Fit");
	}
}

imc();


/*
No logro que me funcione
function imcResultado(){
    let bajo=18.5;
    let saludable=18.6;
    let sobrepeso= 25;
    let obesidad= 30;
    
    if(calculadora <=bajo){
        return alert( 'Su IMC se encuentra dentro del rango de peso insuficiente');
    }else if(calculadora>=saludable){
alert('Su IMC se encuentra dentro del rango de peso normal o saludable');
    }else if(calculadora>=sobrepeso){
        alert('Su IMC se encuentra dentro del rango de sobrepeso.');
    }else{
        alert (' Su IMC se encuentra dentro del rango de obesidad.');
    }
    }
    imcResultado();*/