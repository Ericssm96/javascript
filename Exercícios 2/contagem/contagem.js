function contar() {
    var iniciotxt = document.getElementById('numInicial');
    var finaltxt = document.getElementById('numFinal');
    var passotxt = document.getElementById('numPasso');
    var inicio = Number(iniciotxt.value);
    var final = Number(finaltxt.value);
    var passo = Number(passotxt.value);
    var contagem = document.getElementById('res');
    contagem.innerHTML = ''

    if (iniciotxt.length == 0 || finaltxt.length == 0 || passotxt.length == 0 || passo == 0){
        alert('Por favor, digite todos os valores.')
    } else if (inicio == final) {
        alert('Digite outro valor, o início está com o mesmo valor do final!');
    } else if (inicio > final) {
        for (inicio; inicio >= final; inicio -= passo){
            contagem.innerHTML += `<span>${inicio} 👉 <span>`
        }
        contagem.innerHTML += `<span>🏁</span>`;
    } else {
        for (inicio; inicio <= final; inicio += passo) {
            contagem.innerHTML += `<span>${inicio} 👉 </span>`
        }
        contagem.innerHTML += '<span>🏁</span>';
    }
}

