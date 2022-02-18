/*
Escreva uma função para obter os primeiros elementos de uma sequência. Passar um parâmetro n (padrão=1) retornará os primeiros n elementos da sequência.

Se n == 0 retorna uma sequência vazia []

1 - Escreve uma função;
2 -  Passar um parâmetro n (padrão=1);
3 - Obter primeiros elementos de uma sequência;
        3.1 - Criar um array que receba os primeiros valores;
        3.1 - Usar o loop for (let i = 0 ; i < n ; i++);
        3.2 - A cada loop: variável.push(arr[i])
4 - Retornará os primeiros "n" elementos da sequência;

*/

function first(arr, n=1) {
    let primeiros = []
    if (arr !== 0){
        for (let i = 0 ; i < n && i < arr.length ; i++){
            primeiros.push(arr[i]);
        }
    } else {
        primeiros.push()
    }
    console.log(primeiros)
    return primeiros;
}

let arr1 = [ 1, 2, 3, 4, 5, 6, 7, 8, 9]
first(arr1, 5)