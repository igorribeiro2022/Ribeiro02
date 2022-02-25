let filmesFavoritos = [
    {
        nome: "Interestelar",
        lancamento: 2014,
        duracao: "2:49",
        imdb: "8,6/10",
    },{
        nome: "Homem-Aranha - Sem Volta Pra Casa",
        lancamento: 2021,
        duracao: "2:28",
        imdb: "8,7/10",
    },{
        nome: "007 - Sem Tempo Para Morrer",
        lancamento: 2021,
        duracao: "2:43",
        imdb: "7,3/10",
    },{
        nome: "Ford vs Ferrari",
        lancamento: 2019,
        duracao: "2:32",
        imdb: "8,1/10",
    }
]

for (let i = 0 ; i<filmesFavoritos.length ; i++){
    console.log(filmesFavoritos[i].nome)
}