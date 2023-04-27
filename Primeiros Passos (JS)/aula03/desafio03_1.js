
const nota1 = 7;
const nota2 = 7;
const nota3 = 8;

const media = 5;
const aluno_media = (nota1 + nota2 + nota3) / 3;

console.log("Sua média é: "+aluno_media);

if (aluno_media < media){
    console.log("Média menor que 5, reprovado!")
} else if (aluno_media >= 5 && aluno_media <= 7) {
    console.log("Média entre 5 e 7, recuperação!")
} else {
    console.log("Média acima de 7, aprovado!")
}
