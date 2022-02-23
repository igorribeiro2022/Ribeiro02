function uefaEuro2016(teams, scores){
    let resultado;
    
    if (scores[0] > scores[1]) {
      resultado = teams[0] + ' Ganhou!';
    } else if (scores[0] == scores[1]) {
      resultado = ' As equipes empataram.';
    } else {
      resultado = teams[1] + ' Ganhou!';
    }
    console.log(`Na partida ${teams[0]} - ${teams[1]}, ${resultado}`)
    return `Na partida ${teams[0]} - ${teams[1]}, ${resultado}`;
}

arrayTimes = ['Corinthians', 'Barcelona']
let arrayGols = [ 4, 1]
uefaEuro2016(arrayTimes, arrayGols)

