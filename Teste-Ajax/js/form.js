var botaoAdicionar = document.querySelector('#adicionar-paciente')
botaoAdicionar.addEventListener("click", function(evento){
    evento.preventDefault();

    let form = document.querySelector('#form-adiciona');
    var paciente = acessaDadosPaciente(form);

    let erros = validaPaciente(paciente); //esta é a variável que vai servir como parâmetro para validação

    if (erros.length > 0) {//visto que, se a variável erro não conter nenhum caracter, é pq tudo está certo
        exibeMsgErro(erros);
        return; //digitando um return vazio eu consigo fazer com que o navegador não leia além daquele bloco de código, portanto se o paciente for inválido, ele não será adicionado à tabela, que seria o próximo comando na ordem de execução
    }

    adicionarPacienteNaTabela(paciente);

    let msgErros = document.querySelector("#mensagens-erro");
    msgErros.innerHTML = '';

    form.reset();
})

function adicionarPacienteNaTabela(paciente){
    let pacienteTr = montaTableRow(paciente);
    let tabela = document.querySelector('#tabela-pacientes')
    tabela.appendChild(pacienteTr)
}

function acessaDadosPaciente(form) {
    let paciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calculaImc(form.peso.value, form.altura.value),
    }
    return paciente;
}

function montaTableRow(paciente){
    let pacienteTr = document.createElement("tr");
    pacienteTr.classList.add("paciente");

    let nomeTd = montaTableData(paciente.nome, "info-nome");
    let pesoTd = montaTableData(paciente.peso, "info-peso");
    let alturaTd = montaTableData(paciente.altura, "info-altura");
    let gorduraTd = montaTableData(paciente.gordura, "info-gordura");
    let imcTd = montaTableData(paciente.imc, "info-imc");

    nomeTd.textContent = paciente.nome;
    pesoTd.textContent = paciente.peso;
    alturaTd.textContent = paciente.altura;
    gorduraTd.textContent = paciente.gordura;
    imcTd.textContent = paciente.imc;

    pacienteTr.appendChild(nomeTd);
    pacienteTr.appendChild(pesoTd);
    pacienteTr.appendChild(alturaTd);
    pacienteTr.appendChild(gorduraTd);
    pacienteTr.appendChild(imcTd);

    return pacienteTr;
}

function montaTableData(dado, classe) {
    let td = document.createElement("td");
    td.textContent = dado;
    td.classList.add(classe);
    
    return td;
}

function exibeMsgErro(erros){
    var ul = document.querySelector("#mensagens-erro");

    ul.innerHTML = '' //dessa maneira, sempre limpamos o <ul> antes de adicionar as mensagens de erro para elas não acumularem toda vez que ocorre um erro

    erros.forEach(function(erro){//para cada instância da array erros, essa função vai ser realizada
        var li = document.createElement("li");
        li.textContent = erro;//como o parâmetro "erro" foi passado para uma função que está dentro de um forEach, o valor dele vai ser a instância do array.
        ul.appendChild(li);
    })
}

function validaPaciente(paciente) {
    /* if (validaPeso(paciente.peso) && validaAltura(paciente.altura)){
        //return true;  esse seria o passo certo a se fazer para validar em valor booleano, mas como além de validar, queremos mostrar uma mensagem de erro, a lógica vai ser alterada um pouco.
        return "";
    } else  if (!validaPeso(paciente.peso) && validaAltura(paciente.altura)){
        // return false;
        return "Peso inválido!"; //nesse caso, ao invés de fazer a validação pelo valor booleano, iremos validar de acordo com o length da string que vai sair da função validaPaciente(), sendo que uma string vazia (length == 0) é equivalente a true, e uma string com uma mensagem é equivalente a false.
    } else if (!validaAltura(paciente.altura) && validaPeso(paciente.peso)){
        return "Altura inválida";
    } else {
        return "Peso e altura inválidos!"
    } esse seria um dos modos de fazer, mas para seguir a lógica do exercício, vamos fazer da seguinte maneira:*/
    let erros = [];

    if (paciente.nome.length == 0){
        erros.push("O campo de nome não pode estar em branco.");
    }

    if(!validaPeso(paciente.peso)) {
        erros.push("Peso é inválido.");
    }

    if (!validaAltura(paciente.altura)) {
        erros.push("Altura é inválida.");
    }

    if (paciente.gordura.length == 0){
        erros.push("O campo de gordura corporal não pode estar vazio.")
    }

    if (paciente.peso.length == 0){
        erros.push("O campo de peso não pode ficar em branco.");
    }

    if (paciente.altura.length == 0){
        erros.push("O campo de altura não pode ficar em branco.")
    }
    return erros; //com essa lógica, os erros vão retornar em formato de array, porém a apresentação disso no site fica feia e mal espaçada, por isso iremos mudar o campo da mensagem de erro para um elemento <ul> e inserir cada um dos tipos de erro como uma <li> dentro dele.
}