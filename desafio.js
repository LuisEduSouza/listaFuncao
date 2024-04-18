/*
Desafio 1
Crie uma função que liste todos os números primos até 1000.
Número primo é aquele que é divisível somente por 1 e por ele mesmo.
NOME: Luís Eduardo Novaes Souza
*/
console.clear();
var teclado = require("prompt-sync")();
var sair = 0;
while (sair != 1) {
    console.log("A ----> n\u00FAmeros primos at\u00E9 1000");
    console.log("B ----> n\u00FAmeros primos at\u00E9 quando voc\u00EA desejar");
    console.log("C ----> quer saber se um n\u00FAmero \u00E9 primo");
    console.log('S ----> Sair');
    var pergunta = (teclado("O que voc\u00EA deseja?: "));
    var perguntaContinuar = 0;
    if (pergunta == "a" || pergunta == "A") {
        function primo(num, divisor) {
            if (divisor === void 0) { divisor = 2; }
            if (num <= 1) {
                return false;
            }
            if (divisor === num) {
                return true;
            }
            if (num % divisor === 0) {
                return false;
            }
            return primo(num, divisor + 1);
        }
        function imprimirPrimos(determinadoNumero, atual) {
            if (atual === void 0) { atual = 2; }
            if (atual > determinadoNumero) {
                return;
            }
            if (primo(atual)) {
                console.log(atual);
            }
            imprimirPrimos(determinadoNumero, atual + 1);
        }
        var DeterminadoNumero = 1000;
        imprimirPrimos(DeterminadoNumero);
    }
    else if (pergunta == "b" || pergunta == "B") {
        function primo2(num, divisor) {
            if (divisor === void 0) { divisor = 2; }
            if (num <= 1) {
                return false;
            }
            if (divisor === num) {
                return true;
            }
            if (num % divisor === 0) {
                return false;
            }
            return primo2(num, divisor + 1);
        }
        function imprimirPrimos2(determinadoNumero, atual) {
            if (atual === void 0) { atual = 2; }
            if (atual > determinadoNumero) {
                return;
            }
            if (primo2(atual)) {
                console.log(atual);
            }
            imprimirPrimos2(determinadoNumero, atual + 1);
        }
        var DeterminadoNumero = parseFloat(teclado("Digite at\u00E9 o numero primo que deseja: "));
        imprimirPrimos2(DeterminadoNumero);
    }
    else if (pergunta == "c" || pergunta == "C") {
        console.clear();
        var num = parseInt(teclado('Digite um número inteiro: '));
        function ehPrimo(num, divisor) {
            if (divisor === void 0) { divisor = 2; }
            if (num <= 1) {
                return false;
            }
            if (divisor * divisor > num) {
                return true;
            }
            if (num % divisor === 0) {
                return false;
            }
            return ehPrimo(num, divisor + 1);
        }
        if (ehPrimo(num)) {
            console.log('O número digitado é primo');
        }
        else {
            console.log('O número digitado não é primo');
        }
    }
    if (pergunta == "s" || pergunta == "S") {
        sair = 1;
    }
    else {
        console.log("Digite algo v\u00E1lido");
    }
}
