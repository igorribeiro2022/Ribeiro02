// Crie uma função que receba um array de números retorne a soma dos primeiros 5 números ímpares desse array.
/*
1 - Criar função;
2 - receber array;
3 - retornar soma dos 5 primeiros números ímpares do array;
        3.1 - Usar o loop for(let i = 0 ; i < array.length ; i++);
        3.2 - Usar o if(array[i]%2!==0);
        3.3 - Soma += array[i]; 
*/

function arrayNumbers(array){
    let soma = 0;
    let cont = 0
    for (let i = 0 ; i < array.length ; i++){
        if (array[i]%2!==0){
            cont++;
            do{
                soma += array[i];
            } while (cont <= 5 )
        }
    }
    console.log(soma);
    return soma;
}
let arrayDois = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 13]
arrayNumbers(arrayDois)