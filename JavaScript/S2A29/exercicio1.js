// Sabendo que uma matriz é um array de arrays. Crie uma função que receba uma Matriz de 10 x 10, percorra os arrays e escreva a localização (linha e a coluna) do maior valor.

/*

1 - Criar função, que recebe uma matriz 10x10;
2 - Percorrer os arrays;
        2.1 - Usar um loop for;
3 - Escrever a localização (linha e a coluna) do maior valor;
        3.1 - Escrever console.log(array["linha"]['coluna]);

*/

function newArray(arr){
    let maior = 0
    let local = 0
    for (let i = 0 ; i < arr.length ; i++){
       for ( let j = 0 ; j < arr[i].length ; j++){
         if (arr[i][j] > maior){
             maior = arr[i][j];
             console.log(i, j);
         }
       } 
    }
    return maior;
}


let array = [
    [91,51,33,101,30,60,0,99,94,28],
    [78,10,90,77,8,13,36,66,42,9],
    [59,72,20,36,81,53,48,66,15,68],
    [30,77,68,91,65,22,20,42,75,52],
    [24,40,88,2,35,22,49,94,3,62],
    [93,93,93,41,8,29,87,34,1,22],
    [17,73,13,58,15,70,64,1,18,62],
    [50,22,18,56,25,3,58,49,91,10],
    [58,13,38,75,71,11,83,22,19,54],
    [64,19,31,28,52,70,69,25,67,29]
]

console.log(newArray(array))