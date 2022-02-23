/*
Para cada boa ideia de kata, parece haver algumas ruins!

Neste kata, você precisa verificar a matriz fornecida (x) para boas ideias 'boas' e más ideias 'ruins'. Se houver uma ou duas boas ideias, retorne 'Publicar!', se houver mais de 2, retorne 'Sinto cheiro de uma série!'. Se não houver boas ideias, como é frequentemente o caso, retorne 'Falha!'.

1 - verificar matrix (x);
2 - Se "good" == 1 || "good" == 2; return 'Publish!'
3 - Mas se 'good' > 2; return 'I smell a series!'
4 - Mas se 'good' == 0; return 'Fail!'
*/

function well(x){
    let cont = 0
    for (let i = 0 ; i <x.length ; i++){
        if (x[i] == 'good'){
          cont++
        }
    }
    if (cont>0 && cont<3){
      return 'Publish!';
    }else if (cont > 2){
      return 'I smell a series!';
    }else{
      return 'Fail!;'
    }
}

let b = ['good', 'bad', 'bad', 'good', 'good']
well(b)