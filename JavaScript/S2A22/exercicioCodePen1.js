/* Crie uma função chamada multiplyList que receba um array de números, um multiplicador e devolva a multiplicação de cada elemento do array pelo multiplicador. Exemplo:
([1, 2, 3, 4, 5] , 3) deve retornar [3, 6, 9, 12, 15]

1 - Criar função chamada multiplyList;
2 - A função deve receber um array de números e um multiplicador;
3 - devolver a multiplicação de cada elemento do array pelo multiplicador;
        3.1 - Criar um novo array vazio para receber as multiplicações;
        3.2 - loop for (let i = 0 ; i< array.length ; i++);
        
----------  TABUADA ----------
*/

function multiplyList(arrayNumeros, multiplicador){
    let result = [];
    for (let i = 0 ; i < arrayNumeros.length ; i++){
        result.push(arrayNumeros[i] * multiplicador)
    }
    console.log(result)
    return result
}

let array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
multiplyList(array, 7)