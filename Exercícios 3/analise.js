var valores = []

function adicionar() {
    let entrada =  document.querySelector('#entradaNumero');
    let n1 = Number(entrada.value);
    let lista = document.querySelector('#listaValores');
    if (valores.indexOf(n1) == -1) {
        valores.push(n1);
        if (n1 < 1 || n1 > 100) {
            window.alert('Por favor, digite um valor válido!');
        } else {
            lista.innerHTML += `<option value="${n1}"> ${n1} inserido.</option>`;
        }
    } else {
        alert('Esse é um número repetido. Por favor selecione outro.')
    }
    entrada.value = ''
}

function verificar () {
    let soma = 0
    valores.sort(function(a, b){return a-b});
    saida = document.querySelector('#dadosAnalise');
    for (i=0; i<valores.length; i++) {
        soma += valores[i];
    }
    saida.innerHTML = `<p>Ao todo foram digitados ${valores.length} números.</p>`;
    saida.innerHTML += `<p>O maior número foi o ${valores[valores.length-1]}.</p>`;
    saida.innerHTML += `<p>O menor número foi o ${valores[0]}.</p>`;
    saida.innerHTML += `<p>A soma de todos os valores foi ${soma}.</p>`
    saida.innerHTML += `<p>A média dos valores digitados é ${soma/valores.length}.</p>`
}