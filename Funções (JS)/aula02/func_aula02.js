
function escrevaMeuNome(nome){
    return "Meu nome é " + nome;
}

function verIdade(idade){
    if (idade >= 18){
        return "maior de idade.";
    } else {
        return "menor de idade.";
    }
}

const nome = "Ailson";
const idade = 25;

console.log(escrevaMeuNome(nome) + " e eu sou " + verIdade(idade));