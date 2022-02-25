/*
Construa uma função que recebe um número e retorne true se ele for par e false se for ímpar.

1 - Construir uma função
2 - Recebr um número;
3 - Retornar true se for par, e false se for impar;
*/

function parOuImpar(n){
    if (n%2===0){
        return true;
    }else {
        return false;
    }
}


console.log(parOuImpar(20))