// Crie uma função que receba um array. Percorra este array, some quantos números pares este array possuí e retorne a soma.

/*
1 - Criar uma função;
2 - Receber um array;
3 - Percorrer o array;
        3.1 - Usar um loop for;
4 - Somar números pares;
        4.1 - Usar if;
5 - Retornar a soma;
        5.1 - Criar uma variável soma
        5.2 - Return soma;
*/

function numberPar(numbers){
    let soma = 0;
    for (let i = 0 ; i<numbers.length ; i++){
        if (numbers[i] % 2 === 0){
            soma += numbers[i];
        }
    }
    console.log(soma)
    return soma;
}

let array = [5, 6, 21, 12, 45, 78, 2, 3, 5, 7, 45, 54]

numberPar(array)