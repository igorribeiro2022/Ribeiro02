// 1 - Somar elementos do array;
//      1.1 - criar uma variável pra abrigar o valor da soma;
//      1.2 - Usar loop for;
//      1.3 - Em cada loop somar a variável += i; 
// 2 - Mostrar a soma dos elementos do array;
// 3 - Retornar o resultado da soma;


function arrayPlusArray(arr1, arr2) {
    let soma = 0;
    for (let i = 0 ; i < arr1.length ; i++){
        soma += arr1[i];
    }
    for (let i = 0 ; i < arr2.length ; i++){
        soma += arr2[i];
    }
    console.log(soma);
    return soma;
}

let arr1 = [ 5, 8, 9]
let arr2 = [ 2, 5, 7]
arrayPlusArray(arr1, arr2)