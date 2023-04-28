
function aplicaDesconto(formaPagamento, precoEtiqueta){

    if (formaPagamento === 1){
        return parseInt(precoEtiqueta - (precoEtiqueta * 0.1));
    } else if (formaPagamento === 2){
        return parseInt(precoEtiqueta - (precoEtiqueta * 0.15));
    } else if(formaPagamento === 3){
        return precoEtiqueta
    } else {
        return parseInt(precoEtiqueta + (precoEtiqueta * 0.1));
    }
}

const precoEtiqueta = 100;
const formaDePagamento = 1;

console.log("Valor a ser pago: " + aplicaDesconto(formaDePagamento, precoEtiqueta))