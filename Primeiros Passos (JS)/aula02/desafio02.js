const precoEtanol = 5.79;
const precoGasolina = 6.66;
const tipoCombustivel = "etanol";
const gastoMedio = 10;
const distanciaViagem = 100;

let valorFinal = 0;

if (tipoCombustivel == "etanol"){
    valorFinal = (precoEtanol / gastoMedio) * distanciaViagem

} else if (tipoCombustivel == "gasolina"){
    valorFinal = (precoGasolina / gastoMedio) * distanciaViagem
}

console.log("O Gasto total da viagem é: R$ " + valorFinal.toFixed(2))
console.log("Tipo de combustível usado: " + tipoCombustivel)