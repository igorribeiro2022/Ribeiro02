// Sabendo que uma matriz é um array de arrays, crie uma função que recebe matriz 6 x 6, conte e retorne quantos valores maiores que 10 ela possui.

function contador(cont){
    let maioresDe10 = 0;
    for (let i = 0 ; i < 6 ; i++){
        for (let j = 0 ; j < 6 ; j++){
            if ( cont[i][j] > 10){
                maioresDe10++
            }
        }
    }
    return maioresDe10;
}
let matriz = [
    [52,86,59,65,32,3],
    [44,34,35,20,15,1],
    [39,27,83,82,14,53],
    [50,31,-63,-47,5,-75],
    [-2,2,53,36,29,93],
    [13,50,13,-10,18,-45]
]

contador(matriz)
console.log(contador(matriz))
