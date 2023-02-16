// Definindo a string a ser invertida
const stringOriginal = "Olá, mundo!";

// Convertendo a string em um array de caracteres
const arrayCaracteres = stringOriginal.split("");

// Invertendo a ordem do array de caracteres
const arrayInvertido = [];
for (let i = arrayCaracteres.length - 1; i >= 0; i--) {
    arrayInvertido.push(arrayCaracteres[i]);
}

// Convertendo o array invertido de caracteres de volta para uma string
const stringInvertida = arrayInvertido.join("");

// Exibindo o resultado
console.log(stringInvertida);