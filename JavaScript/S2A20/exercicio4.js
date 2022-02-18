// Crie uma função que recebe inteiro e mostra os números pares e ímpares (separados), de 1 até esse inteiro.

// 1 - Criar uma função;
// 2 - A função vai receber um número inteiro;
// 3 - Mostrar números PARES e ÍMPARES! 1 - (Número Inteiro);
//  3.1 - Criar dois arrays, par e ímpar
//  3.2 - Usar o loop for (let i = 1 ; i<= Número Inteiro ; i++)
//  3.3 - Usar o if(i % 2 === 0){par.push(i)}  /  else {impar.push(i)}
//  3.4 - Fazer um console.log mostrando os dois arrays
//  3.5 - Retornar 

function numeroInt(numInt){
    let par = []
    let impar = []
    for (let i = 1 ; i <= numInt ; i++){
        if (i % 2 === 0){
            par.push(i)
        } else {
            impar.push(i)
        }
    }
    console.log(`Os números pares são: ${par}. E os números ímpares são ${impar}`)
    return
}

numeroInt(10)