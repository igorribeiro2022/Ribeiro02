const tag = document.createElement('p')
console.log(tag)
tag.innerText = "Olá, sou uma tag criada pelo JavaScript!"
document.body.appendChild(tag)

const tagInput = document.createElement('input')
tagInput.placeholder = "Digite seu texto aqui: "
const form = document.querySelector('form')
form.appendChild(tagInput)

const article = document.createElement('article')
const titulo = document.createElement('h1')
const descricao = document.createElement('p')
const linkVerMais = document.createElement('a')

titulo.innerText = "Título do Post"
descricao.innerText = "Descrição do Post"
linkVerMais.innerText = "Ver post completo"

article.appendChild(titulo)
article.appendChild(descricao)
article.appendChild(linkVerMais)

document.body.appendChild(article)

console.log(article)