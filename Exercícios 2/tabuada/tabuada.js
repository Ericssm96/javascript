function tabu() {
    var numero_entrada = document.getElementById('entradaNumero');
    var x = Number(numero_entrada.value);
    var listaRes = document.getElementById('listaRes');
    listaRes.innerHTML = '';

    if (numero_entrada.value.length == 0) {
        listaRes.innerHTML = '<option value="invalido">Por favor, insira um número.</option>'
    } else {
        for (c = 1; c <= 10; c++) {
            listaRes.innerHTML += `<option value="${c}">${x} x ${c} = ${c*x}</option><br>`
        }
    }
}