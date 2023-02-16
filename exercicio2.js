let numero = 24; // número a ser verificado
let a = 0;
let b = 1;
let resultado = 0;

while (resultado < numero) {
    resultado = a + b;
    a = b;
    b = resultado;
}

if (resultado === numero) {
    console.log(numero + ' pertence à sequência de Fibonacci.');
} else {
    console.log(numero + ' não pertence à sequência de Fibonacci.');
}

/*
Explicação do código:

O número a ser verificado é atribuído à variável numero.
As variáveis a e b são inicializadas com os dois primeiros números da sequência de Fibonacci.
O loop while é executado enquanto o resultado da soma de a e b for menor do que o número informado.
A cada iteração, as variáveis a e b são atualizadas para os dois números anteriores e o resultado é calculado.
Se o resultado for igual ao número informado, uma mensagem é exibida indicando que ele pertence à sequência de Fibonacci.
 Caso contrário, uma mensagem é exibida informando que ele não pertence.
* */