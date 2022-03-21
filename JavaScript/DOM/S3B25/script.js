const tagMain = document.createElement('main')
tagMain.setAttribute('id', 'idMain')

document.body.appendChild(tagMain)

const paragrafo = document.createElement('p')
const imagem = document.createElement('img')
const link = document.createElement('a')
const listaUL = document.createElement('ul')

paragrafo.innerText = "No curso de JavaScript você vai aprender do básico ao avançado, as aulas contem teoria e prática sobre JS. Alguns dos assuntos abordados serão: operadores lógicos, condicionais, estruturas de repetição e condição."

imagem.setAttribute('src', 'https://scontent.fcgh26-1.fna.fbcdn.net/v/t1.6435-9/29365649_1811376182216098_8510349621099233280_n.jpg?_nc_cat=103&ccb=1-5&_nc_sid=730e14&_nc_ohc=7AYwLRrf634AX-3XzuK&_nc_ht=scontent.fcgh26-1.fna&oh=00_AT_OhPSe1CJ7L4nZC-GhLlVLx_qLeq1oWXBfVKmYmMDGmw&oe=624C6B48')

link.setAttribute('href', 'https://spider-man-miles-morales.netlify.app')

link.setAttribute('target', 'blank')

link.innerText = "Spider-man"

const listaLI1 = document.createElement('li')
const listaLI2 = document.createElement('li')
const listaLI3 = document.createElement('li')

listaLI1.innerText = "Violão"
listaLI2.innerText = "Guitarra"
listaLI3.innerText = "Viola"

listaUL.appendChild(listaLI1)
listaUL.appendChild(listaLI2)
listaUL.appendChild(listaLI3)

tagMain.appendChild(paragrafo)
tagMain.appendChild(imagem)
tagMain.appendChild(link)
tagMain.appendChild(listaUL)

