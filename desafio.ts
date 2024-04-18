/*
Desafio 1
Crie uma função que liste todos os números primos até 1000.
Número primo é aquele que é divisível somente por 1 e por ele mesmo.
NOME: Luís Eduardo Novaes Souza
*/
console.clear();

const teclado = require(`prompt-sync`)();
let sair: number = 0;

while (sair != 1) {

    console.log(`A ----> números primos até 1000`)
    console.log(`B ----> números primos até quando você desejar`)
    console.log(`C ----> quer saber se um número é primo`)
    console.log('S ----> Sair');
    
    let pergunta: string = (teclado(`O que você deseja?: `));
    let perguntaContinuar: number = 0;

    if (pergunta == `a` || pergunta == `A`) {
        function primo(num, divisor = 2) {
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
        function imprimirPrimos(determinadoNumero, atual: number = 2) {
            if (atual > determinadoNumero) {
                return;
            }
            if (primo(atual)) {
                console.log(atual);
            }
            imprimirPrimos(determinadoNumero, atual + 1);
        }
        let DeterminadoNumero: number = 1000;
        imprimirPrimos(DeterminadoNumero)
    }
    else if (pergunta == `b` || pergunta == `B`) {
        function primo2(num, divisor = 2) {
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
        function imprimirPrimos2(determinadoNumero, atual: number = 2) {
            if (atual > determinadoNumero) {
                return;
            }
            if (primo2(atual)) {
                console.log(atual);
            }
            imprimirPrimos2(determinadoNumero, atual + 1);
        }
        let DeterminadoNumero: number = parseFloat(teclado(`Digite até o numero primo que deseja: `));
        imprimirPrimos2(DeterminadoNumero)
    }
    else if (pergunta == `c` || pergunta == `C`) {
        console.clear();
        let num: number = parseInt(teclado('Digite um número inteiro: '));
        function ehPrimo(num: number, divisor: number = 2): boolean {
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
        } else {
            console.log('O número digitado não é primo');
        }
    } if(pergunta == `s` || pergunta == `S`) {
        sair = 1;
    }
    else {
        console.log(`Digite algo válido`)
    }
}
