// Crie uma função chamada onlyPositiveNumbers que recebe um array de 40 posições. Percorra e atribua valor 0 para todos os elementos que possuírem valores negativos.
/*
1 - Criar uma função chamada onlyPositiveNumbers;
2 - A função deve receber um array de 40 posições;
3 - Percorra e atribua valor 0 para todos os elementos que possuírem valores negativos;
    3.1 - usa loop for (let i= 0 , i < array.length ; i++);
    3.2 - usar if (array[i] < 0){array.splice(i, 1, 0)};
    3.3 - retornar array;
*/

function onlyPositiveNumbers(close){
    for (let i = 0; i<close.length; i++){
        if (close[i] < 0){
            close.splice(i, 1, 0)
        }
    }
    console.log(close);
    return close;
}

let array = [-8, 5, 9, 56, 45, -54, -7, -1, 1, 6, -7, 5, 9, 56, 45, -55, -31, -3, 1, 6, -9, 5, 9, 56, 45, -52, -35, -4, 1, 6, -11, 5, 9, 56, 45, -45, -23, -6, 1, 6]

onlyPositiveNumbers(array)