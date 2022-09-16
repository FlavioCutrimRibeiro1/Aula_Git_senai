let listaDePecas = ["Filtro de ar","Roda","Pnel",""]

listaDePecas.push("Disco de Freio")
listaDePecas.push("motor")
listaDePecas.push("amortecedor")

//listaDePecas[] = "Pastilha" //alterar ítem da lista pelo índice

if (listaDePecas.length < 10){
    console.log("É possível cadastrar mais pecas!!!")
}
else{
    console.log("não há mais espaço na caixa")
}

let Peso = 150
if (Peso < 100){
    console.log("A peça deve pesar nomínimo 100g")
}
else{
    console.log("A peça possui peso adequado")
}

let nomePeca = "Freio"

if (nomePeca.length > 3){
   console.log("O nome da Peca está adequado para o cadastro")
}
else if(nomePeca.length == 0){
    console.log("O nome da Peca não pode ser vazio.")
}
else{
    console.log("O nome da peca deve ter mais de 3 caracteres, digite o nome adequado")
}