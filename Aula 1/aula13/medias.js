let nota1 = 6;
let nota2 = 0;
let nota3 = 7;
let media = 0;

media = (nota1 + nota2 + nota3)/3;
console.log("nota1:" + nota1);
console.log("nota2:" + nota2);
console.log("nota3:" + nota3);
console.log("media:" + media);

if(media > 5 && media < 6){
    console.log("Aprovado por arredondamento");
}
else if(media < 5){
    console.log("Reprovado");

}
else{
    console.log("Aprovado com sucesso");
}