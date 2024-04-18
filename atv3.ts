/* 
Exercício 3
Crie uma função que recebe por parâmetro o raio de uma esfera e calcula o seu volume
(v = 4/3*P*R^3).
NOME: Luís Eduardo Novaes Souza
*/

console.clear();

const teclado3 = require('prompt-sync')();
let raio : number = parseFloat(teclado3(`Digite o raio: `));
const pi : number =  3.14159;
let volumeLata: number = 0

function volumeEsfera(volumeLata: number): number {
    volumeLata = (4/3) * pi * ( raio * raio * raio);
    return volumeLata;
}

let resultado3 = volumeEsfera(raio);
console.log(`o volume da lata é ${resultado3}`)

