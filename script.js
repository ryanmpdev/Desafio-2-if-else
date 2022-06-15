let idade = 20;

if(idade >= 18){
    console.log("É maior de idade pode entrar");
}else{
    console.log("infelizmente menor de  idade não é permitido");
}

let corRoupa = "branca";
let maiorIdade = true;

if((maiorIdade = true) && (corRoupa === "branca")){
    console.log("É maior de idade e está com a roupa branca, pode entrar na festa");
}

let mes = "Dezembro";

if((mes === "Janeiro") || (mes === "Dezembro")){
    console.log("fez ano em menos de 8 meses");
}else{
    console.log("vez ano em mais de 8 meses");

}

let nome = "Ryan";

if( nome[0] === "R") {
    console.log('Seu nome é:',nome);

}else{
    console.log("seu nome não começa com R")//caso o nome não seja com R
}

let sobrenome = "Maciel";
console.log(sobrenome);
console.log(sobrenome.length)

if( (sobrenome >= 6 ) || (nome[0] === "E") ){
    console.log("condição verdadeira") 
}else{
    console.log("condição falsa")
}