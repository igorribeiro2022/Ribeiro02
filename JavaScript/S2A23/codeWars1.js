/*
Complete a função para que ela encontre a média das três pontuações passadas para ela e retorne o valor da letra associado a essa nota.

Pontuação Numérica	Grau de letra
90 <= pontuação <= 100	'A'
80 <= pontuação < 90	'B'
70 <= pontuação < 80	'C'
60 <= pontuação < 70	'D'
0 <= pontuação < 60	'F'
Os valores testados estão todos entre 0 e 100. Não há necessidade de verificar valores negativos ou valores maiores que 100.
*/

function getGrade (s1, s2, s3) {
    let letraMedia = '';
    
    let media = (s1 + s2 + s3) / 3;
    
    if (media >= 0 && media < 60){
        letraMedia = 'F';
    }if(media >= 60 && media < 70){
        letraMedia = 'D';
    }if(media >= 70 && media < 80){
        letraMedia = 'C';
    }if(media >= 80 && media < 90){
        letraMedia = 'B';
    }if(media >= 90 && media <= 100){
        letraMedia = 'A';
    }
    console.log(letraMedia);
    return letraMedia;
}

getGrade(75, 82, 68)
