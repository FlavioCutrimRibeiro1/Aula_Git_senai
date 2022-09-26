/* redras para operadores de comparação
ao comparar duas coisa o resultado é booleano, portanto true ou false
= (é utiliazado para atribuição)
== p/comparação (verificação se é igual)
=== p/ comparação (verifica se é identico, portanto mesmo tipo de dado e valor)
!= diferente
< mennor
> maior
<= menor ou igual
>= maior ou igual
*/

/* operadores de atribuição
= atribuição
+= (x+= y) é a mesma coisa de (x = x + y)
-= (x-= y) é a mesma coisa de (x = x - y)
*= (X*= y) é a mesma coisa de (x = x * y)
/= (x/= y) é a mesma coisa de (x = x / y)
*/

/* operadores lógicos
&& (e)
|| (ou)
! (negação)

Operador E
V && V = V
V && F = F
F && F = F
F && V = F
Posso definir que com o operadoe E que a resposta apenas será verdade 
se ambas as preposições forem verdadeiras.

Operador OU
V || V = V
V || F = V
F || V = V
F || F = F
Posso definir que com o opeardor OU a resposta apenas será falsa 
se ambas as preposições forem falsas
*/

let x = true
let y = false
let resultado = (!x)
console.log(resultado)