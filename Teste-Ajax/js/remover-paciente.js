var pacientes = document.querySelectorAll(".paciente");

var tabela = document.querySelector("table");

tabela.addEventListener("dblclick", function(evento){

    evento.target.parentNode.classList.add("fadeOut");

    setTimeout(function(){//como o navegador geralmente executa os códigos quase que instântaneamente, o elemento seria deletado sem nem aparecer a animação definida na classe fadeOut, por isso precisamos usar o setTimeout
        evento.target.parentNode.remove();
    }, 500);//o setTimeout recebe 2 parâmetros: a função que deve ser realizada depois do timeOut, e o tempo de timeout que o JavaScript precisa nos dar (contado em milissegundos);
})