const kmPorLitro = 12;
const precoCobustivel = 5.79;
const distanciaPercorrida = 1580;

let valorFinal = 0;

valorFinal = (precoCobustivel / kmPorLitro) * distanciaPercorrida;

console.log('Total Gasto: R$', valorFinal.toFixed(2))