// Crie uma função que receba um array com dez números e usando laços de repetição calcule e mostre a quantidade de números entre 30 e 90.

// 1 - Criar uma função;
// 2 - Receber na função um array com 10 números;
// 3 - Usar laços de repetição;
//  3.1 - Usar o loop for
// 4 - Calcular e mostrar a quantidade de números entre 30 e 90;
//  4.1 - Criar uma variável "entreTriNov" que recebe 0
//  4.2 - Usar if(array[i] > 30 && array[i] <60){entreTriNov += array[i]}
//  4.3 - Adicionar os valores dentro de outro array com array.push()
//  4.4 - Criar uma nova variável que recebe o novo array.length
//  4.5 - Retornar a nova variável criada

function dezNumeros(numbers){
    let entreTriNov = []
    for (let i = 0 ; i < numbers.length ; i++ ){
        if (numbers[i] > 30 && numbers[i] < 90){
            entreTriNov.push(numbers[i])
        }
    }
    let quantidade = entreTriNov.length
    console.log(quantidade)
    return quantidade
}

let arrayNumbers = [ 56, 87, 45, 12, 24, 23, 45, 87 ,96, 23]
dezNumeros(arrayNumbers)