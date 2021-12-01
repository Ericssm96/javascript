let titulo = document.querySelector('.titulo');
let pacientesTr = document.querySelectorAll('.paciente');

for (var i=0; i<pacientesTr.length; i++){//essa função serve para identificar os elementos HTML em variáveis e depois analisar se os valores contam como válidos, portanto, no futuro é capaz dividir em mais de uma função caso precisemos usar essa validação em outra parte do código (e vamos precisar).
    let paciente = pacientesTr[i]; //variável usada para não precisar botar "pacientes[i]" em cada expressão/instrução, não que vá fazer muita diferença, mas é um jeito de se fazer.

    let tdPeso = paciente.querySelector('.info-peso');
    let peso = tdPeso.textContent;

    let tdAltura = paciente.querySelector('.info-altura')
    let altura = tdAltura.textContent;

    let tdImc = paciente.querySelector('.info-imc');

    let pesoEhValido = validaPeso(peso);
    let alturaEhValida = validaAltura(altura);

    titulo.textContent = 'Aparecida Nutricionista';

    if (!pesoEhValido) {
        pesoEhValido = false;
        tdPeso.textContent = 'Peso inválido';
        paciente.classList.add('paciente-invalido')
    }

    if (!alturaEhValida) {
        alturaEhValida = false;
        tdAltura.textContent = 'Altura inválida';
        paciente.classList.add('paciente-invalido')
    }

    if (pesoEhValido && alturaEhValida){
        let imc = calculaImc(peso, altura);
        tdImc.textContent = imc;
    } else {
        tdImc.textContent = 'Altura/Peso inválido(s).'
        paciente.classList.add('paciente-invalido')
    }
}

function validaPeso(peso){
    if (peso > 500 || peso < 0) {
        return false;
    } else {
        return true;
    }
}

function validaAltura(altura){
    if (altura > 2.5 || altura < 0) {
        return false;
    } else {
        return true;
    }
}

function calculaImc(peso=0, altura=0){// essa é uma das funções que estava dentro da primeira, prova de que é bem útil dividir as funções, já que isso foi útil tanto nesse arquivo quanto no form.js
    let imc = 0;
    imc = peso / (altura * altura);
    return imc.toFixed(2);
}

