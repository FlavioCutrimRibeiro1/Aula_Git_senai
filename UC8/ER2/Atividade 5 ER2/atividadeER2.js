/* 
Atividade do Card 9 - Atividade 5 - Encontro Remoto 2

Considere a quantidade de alunos presentes na sala,
ok ✔ percorra do zero até o número total e retornar os seguintes resultados:

- ok✔ Se o número for par escreva "par" e número correspondente
- ok✔ Se o número for impar escreva "impar" e o número correspondente
- ok✔ Se o número for zero, escreva "zero"
*/

// Primeira forma de resolver a atividade
/*
let numeroDeAlunos = 10;

for(let contador = 0; contador <= numeroDeAlunos; contador++) 
{
  
    if (contador == 0 ) {
        //console.log("O numero atual é zero")
        console.log(`${contador} - ZERO`) //interpolação
        //console.log(contador + " - ZERO") // concatenação
    }
    else if((contador % 2) == 0) {
        console.log(`${contador} - PAR`)
       
        //else if((contador % 2) != 0) {
            //console.log(`${contador} IMPAR`)
    } 
    else {
        console.log(`${contador} - IMPAR`)
    }
}
*/

//Segunda forma de resolver a atividade
/*
let numeroDeAlunos = 10;
let contador = 0
while (contador <= numeroDeAlunos)
{
  
    if (contador == 0) {
        //console.log("O numero atual é zero")
        console.log(`${contador} - ZERO`) //interpolação
        //console.log(contador + " - ZERO") // concatenação
    }
    else if((contador % 2) == 0) {
        console.log(`${contador} - PAR`)
       
        //else if((contador % 2) != 0) {
            //console.log(`${contador} IMPAR`)
    } 
    else {
        console.log(`${contador} - IMPAR`)
    }
    contador++
}
*/

// terceira forma de resolver a atividade

let numeroDeAlunos = 10;
let contador = 0
do
{
  
    if (contador == 0 ) {
        //console.log("O numero atual é zero")
        console.log(`${contador} - ZERO`) //interpolação
        //console.log(contador + " - ZERO") // concatenação
    }
    else if((contador % 2) == 0) {
        console.log(`${contador} - PAR`)
       
        //else if((contador % 2) != 0) {
            //console.log(`${contador} IMPAR`)
    } 
    else {
        console.log(`${contador} - IMPAR`)
    }
    contador++
}while(contador <= numeroDeAlunos)