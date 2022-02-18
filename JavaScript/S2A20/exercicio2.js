// Crie uma função que receba um array com a idade de dez pessoas. Calcule e mostre a quantidade de pessoas com idade maior ou igual a 18 anos.

// 1 - Criar uma função
// 2 - Receber um Array como parâmetro com a idade de dez pessoas
// 3 - Calcular e mostrar a quantidade de pessoas com idade  >= a 18 anos
//  3.1 - Criar um for loop
//  3.2 - Fazer a verificação da idade com if (idade >= 18){contar pessoas}
//  3.3 - Imprimir essas pessoas num array com .push
//  3.4 - Criar uma variável e atribuir a ela array.legth

function idade(array){
    let maioresDeIdade = []
    console.log(maioresDeIdade)
    for (let i = 0 ; i < array.length ; i++){

        if (array[i] >= 18){
            maioresDeIdade.push(array[i])
        }
    }
    console.log(maioresDeIdade)

    let quantidade = maioresDeIdade.length
    return quantidade
}

let idades = [15, 56, 48, 12, 25, 45, 10, 18, 17, 20]
console.log(idade(idades))

