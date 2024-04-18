console.clear();
var teclado1 = require("prompt-sync")();
var x = parseInt(teclado1("Digite um n\u00FAmero inteiro: "));
function divisao(dividendo) {
    var resultado = dividendo % 2;
    if (resultado == 0) {
        console.log("N\u00FAmero par!! 0");
    }
    else if (resultado == 1) {
        console.log("N\u00FAmero \u00EDmpar!! 1");
    }
    return resultado;
}
var resultado1 = divisao(x);
