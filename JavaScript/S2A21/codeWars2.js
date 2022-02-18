/* Complete a função que recebe dois inteiros (a, b, onde a < b) e retorne uma matriz de todos os inteiros entre os parâmetros de entrada, incluindo-os.

a = 1
b = 4
--> [1, 2, 3, 4]

1 - criar função;
2 - função recebe dois números inteiros, "a" e "b", onde a < b;
3 - retornar matriz com todos os inteiros entre "a" e "b";
        3.1 - Criar uma matriz
        3.2 - Usar um loop for(let i = a ; i < b ; i++)
        3.3 - A cada loop: matriz.push(i)
*/

function between(a, b) {
    let matriz = [];
    for (let i = a ; i <= b ; i++){
        matriz.push(i)
    }
    console.log(matriz)
    return matriz;
}

between(2, 8)