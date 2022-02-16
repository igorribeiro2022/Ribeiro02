let myArr = [5,10,20,10,20]
// Declare e inicialize uma variável total com valor 0. Use um forloop para adicionar o valor de cada elemento do array myArr no total.

// 1. Total deve ser declarado e inicializado como 0.
// 2. Total deve ser igual a 65.
// 3. Você deve usar um loop for para percorrer myArr.
// 4. Você não deve tentar atribuir diretamente o valor 65 a total.
let total = 0
for (let cont = 0;cont <= 4; cont++){
  total += myArr[cont]
}
console.log(total)