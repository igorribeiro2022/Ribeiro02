// Se você tiver uma matriz multidimensional, poderá usar a seguinte lógica para para percorrer tanto a matriz quanto quaisquer submatrizes. Aqui está um exemplo:

let arr = [
    [1,2], [3,4], [5,6]
  ];
  for (let i=0; i < arr.length; i++) {
    for (let j=0; j < arr[i].length; j++) {
      console.log(arr[i][j]);
    }
  }
  
  // Isso produz cada sub-elemento arr um de cada vez. Observe que, para o loop interno, estamos verificando o .length de arr[i], uma vez que arr[i] ele próprio é um array.
  
  // Exercício: 
  // Modifique a função multiplyAll para que ela retorne o produto de todos os números nas submatrizes de arr.
  
  // 1. multiplyAll([[1],[2],[3]]) deve retornar 6
  // 2. multiplyAll([[1,2],[3,4],[5,6,7]]) deve retornar 5040
  // 3. multiplyAll([[5,1],[0.2, 4, 0.5],[3, 9]])deve retornar 54
  
  function multiplyAll(arr) {
    let product = 1;
    // Apenas altere o código abaixo desta linha
  
    // Apenas altere o código abaixo desta linha
    return product;
  }
  
  multiplyAll([[1,2],[3,4],[5,6,7]]);