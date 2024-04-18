/*
Exercício 2
Crie uma função que receba 3 números como parâmetro e retorne o MENOR dentre eles.
NOME: Luís Eduardo Novaes Souza
*/
console.clear();
var teclado2 = require("prompt-sync")();
var n1 = parseFloat(teclado2("Digite o primeiro n\u00FAmero: "));
var n2 = parseFloat(teclado2("Digite o segundo n\u00FAmero: "));
var n3 = parseFloat(teclado2("Digite o terceiro n\u00FAmero: "));
function parametro(numero1, numero2, numero3) {
    var menor = 0;
    if (n1 < n2 && n1 < n3) {
        console.log("O menor numero \u00E9: ".concat(n1));
    }
    else if (n2 < n1 && n2 < n3) {
        console.log("O menor numero \u00E9: ".concat(n2));
    }
    else if (n3 < n1 && n3 < n2) {
        console.log("O menor numero \u00E9: ".concat(n3));
    }
}
parametro(n1, n2, n3);
