var campoFiltro = document.querySelector("#filtrar-tabela");

campoFiltro.addEventListener("input", function(){
    console.log(this.value);
    var pacientes = document.querySelectorAll(".paciente");

    if (this.value.length > 0){//se o seguinte bloco de códigos não for considerado apenas quando houver algo digitado na barra de filtro/pesquisa, nossa tabela não vai voltar a mostrar os itens escondidos a nãoo ser qu atualizemos a página
        for(var i=0; i<pacientes.length; i++){//aqui vamos checar se o nome de cada um dos pacientes é igual ao nome na barra de filtro/pesquisa, e se não for, vamos escondê-lo. 
            var paciente = pacientes[i];
            var tdNome = paciente.querySelector(".info-nome");
            var nome = tdNome.textContent;
            var expressao = new RegExp(this.value, "i"); //a variavel expressao vai receber  o valor da expressão regular que vai ser pesquisada usando o valor do paciente atual e procurando por palavras dentro dele que coorrespondam ao que foi digitado na barra a cada vez que digitamos, o "i" serve para indicar que é para comparar os caracteres independente do case
            if(!expressao.test(nome)){ //aqui realizamos um teste lógico para saber se o valor que está na variável nome corresponde pelo menos em partes ao valor recebido na RegExp
                paciente.classList.add("invisivel");
            } else {
                paciente.classList.remove("invisivel");
            }
        }
    } else{
        for (var i=0; i<pacientes.length; i++){
            var paciente = pacientes[i];
            paciente.classList.remove("invisivel");
        }
    }
})