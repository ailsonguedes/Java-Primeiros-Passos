const peso = 65;
const altura = 1.75;

const imc = peso / Math.pow(altura, 2);
console.log("Seu IMC: " + imc)

if (imc < 18.5){
    console.log("Abaixo do peso ideal.")
} else if (imc >= 18.5 && imc < 25){
    console.log("O peso está ideal.");
} else if (imc >= 25 && imc < 30 ){
    console.log("Acima do peso ideal.");
} else if (imc >= 30 && imc < 40){
    console.log("Obesidade!");
} else {
    console.log("Obesidade grave!");
}