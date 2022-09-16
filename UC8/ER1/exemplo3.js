//sistema para um radar de velocidade

//variáveis
let velocidade;

//entrada
velocidade = 99;

//processamento / saída
if (velocidade >110){
    console.log("você foi multado!!!")
}
else 
    {
        if (velocidade >100 && velocidade <110){
            console.log("vovê está sendo notificado por andar acima do limite")
        }
        else{ 
            console.log("você está dentro do limite de velocidade")
        }
    }    