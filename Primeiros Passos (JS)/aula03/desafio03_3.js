
const precoEtiqueta = 100;
const formaDePagamento = 4;



if (formaDePagamento === 1){
    console.log("Valor a ser pago: " + parseInt(precoEtiqueta - (precoEtiqueta * 0.1)));
} else if (formaDePagamento === 2){
    console.log("Valor a ser pago: " + parseInt(precoEtiqueta - (precoEtiqueta * 0.15)));
} else if(formaDePagamento === 3){
    console.log("Valor a ser pago: " + precoEtiqueta);
} else {
    console.log("Valor a ser pago: " + parseInt(precoEtiqueta + (precoEtiqueta * 0.1)));
}