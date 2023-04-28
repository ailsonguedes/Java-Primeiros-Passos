// Crie um programa que calcule o imc de uma pessoa.

function calcularImc(peso, altura) {
    return peso / Math.pow(altura, 2);
}

function classificarImc(imc){
    if (imc < 18.5){
        return ("Abaixo do peso ideal.")
    } else if (imc >= 18.5 && imc < 25){
        return ("O peso está ideal.");
    } else if (imc >= 25 && imc < 30 ){
        return ("Acima do peso ideal.");
    } else if (imc >= 30 && imc < 40){
        return ("Obesidade!");
    } else {
        return ("Obesidade grave!");
    }
}

function main(){
    const peso = 65;
    const altura = 1.75;
    const imc = calcularImc(peso, altura)

    console.log(classificarImc(imc));
}

main();
