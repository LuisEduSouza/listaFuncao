/*
Exercício 3
Crie uma função que recebe por parâmetro o raio de uma esfera e calcula o seu volume
(v = 4/3*P*R^3).
NOME: Luís Eduardo Novaes Souza
*/
console.clear();
var teclado3 = require('prompt-sync')();
var raio = parseFloat(teclado3("Digite o raio: "));
var pi = 3.14159;
var volumeLata = 0;
function volumeEsfera(volumeLata) {
    volumeLata = (4 / 3) * pi * (raio * raio * raio);
    return volumeLata;
}
var resultado3 = volumeEsfera(raio);
console.log("o volume da lata \u00E9 ".concat(resultado3));
