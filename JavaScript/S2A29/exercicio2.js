// Sabendo que uma matriz é um array de arrays declare uma matriz 5 x 5. Utilizando um laço de repetição preencha com 1 a diagonal principal e com 0 os demais elementos. Escreva ao final a matriz obtida.

/*

1 - Declarar matriz 5x5;
2 - Preencher com 1 a diagonal principal e 0 os demais elementos usando loop;
3 - Escrever a matriz obtida;

*/

let mat = []

for (let i = 0 ; i < 5 ; i++){
    mat.push([]);
    for (let j = 0 ; j < 5 ; j++){
       if (i === j){
        mat[i].push(1);
       }else {
        mat[i].push(0);
       }
        
    }
    
}

console.log(mat)
