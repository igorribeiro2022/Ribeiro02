let meuNome = "Igor";

let comprimentoMeuNome = meuNome.length;

console.log ("Meu nome possui "+ comprimentoMeuNome + " caracteres");


let preco = 15;

let precoFormatado = preco.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})

console.log('O valor formatado fica assim: ' + precoFormatado)