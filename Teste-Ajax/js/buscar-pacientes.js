var botaoAdicionar = document.querySelector("#buscar-pacientes");

botaoAdicionar.addEventListener("click", function(){//o objetivo desse clique é inserir pacientes carregados de uma API externa para o nosso site da Aparecida Nutrição
    var xhr = new XMLHttpRequest();

    xhr.open("GET", "https://api-pacientes.herokuapp.com/pacientes")

    xhr.addEventListener("load", function(){
        var erroAjax = document.querySelector("#erro-ajax");
        if( xhr.status == 200 ){
            erroAjax.classList.add("invisivel")
            var resposta = xhr.responseText;//aqui eu atribuo o texto de resposta do servidor a uma variável
            var pacientes = JSON.parse(resposta);//aqui podemos esse texto em uma string de objetos, já que ele está em formato JSON

            pacientes.forEach(function(paciente){
                adicionarPacienteNaTabela(paciente);
            });
        } else {
            console.log(xhr.status);
            console.log(xhr.responseText);
            erroAjax.classList.remove("invisivel");
        }
    })

    xhr.send();
})

