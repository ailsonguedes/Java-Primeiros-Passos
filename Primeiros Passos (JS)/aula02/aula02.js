let res;
const num1 = 11;
const numeroPar = (num1 % 2) === 0;

if (numeroPar == false){
    res = num1 + " = Inpar";
}else{
    res = num1 + " =Par";
}

console.log(res);