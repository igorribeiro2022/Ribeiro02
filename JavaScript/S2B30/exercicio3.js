// Empurre os números ímpares de 9 a 1 para myArray usando um loop for.

// 1. Você deve usar um forloop para isso.
// 2. Você deve usar o método array push (Chame um coach/facilitador se não conhecer o push).
// 3. myArray deve ser igual [9,7,5,3,1].

let myArray = [];

// Altere apenas o código abaixo desta linha

for (let i = 10 ; i > 0 ; i--){
  if (i%2===1){
    myArray.push(i);
  }
}
console.log(myArray);