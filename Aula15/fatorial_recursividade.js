function fatorial(n) {
    if (n == 1) {
        return 1;
    } else {
        return n * fatorial(n-1);
    }
}

console.log(fatorial(7));

// Dessa maneira, sempre que o n não for um, vamos invocar a função para testar a condição com o valor de n-1 até que esse valor seja 1, então ele vai retornar para o fatorial de 2 o valor 1 e o cálculo feito vai ser 2*1, depois disso será feito 3*2, 4*6, 5*20, etc...