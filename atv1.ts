/*
Exercício 1
Faça uma função que recebe um valor inteiro e verifica se o valor é par. A unção deve retornar
1 se o número for par e 0 se for ímpar.
NOME: Luís Eduardo Novaes Souza
*/

console.clear();

const teclado1 = require (`prompt-sync`)();

let x : number = parseInt(teclado1(`Digite um número inteiro: `));

function divisao (dividendo: number): number{
    let resultado: number = dividendo % 2;
    if (resultado == 0){
        console.log(`Número par!! 0`);
    }
    else if (resultado == 1){
        console.log(`Número ímpar!! 1`);
    }
    return resultado;
}

let resultado1: number = divisao(x);


