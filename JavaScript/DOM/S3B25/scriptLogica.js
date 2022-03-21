const body = document.querySelector("body")


const tagH1 = document.createElement('h1')
tagH1.innerText = "Olá, Mundo!"
tagH1.setAttribute('class', 'especial')

const tagH2 = document.createElement('h2')
tagH2.innerText = "Hello, World!"
tagH2.setAttribute('class', 'not')

tagH1.removeAttribute('class')
body.appendChild(tagH1)
console.log(tagH1)

body.appendChild(tagH2)
console.log(tagH2)


const tagP = document.createElement('p')
tagP.innerText = "No curso de JavaScript você vai aprender do básico ao avançado, as aulas contem teoria e prática sobre JS. Alguns dos assuntos abordados serão: operadores lógicos, condicionais, estruturas de repetição e condição."
body.appendChild(tagP)
tagP.textContent += " Igor Rogério Ribeiro"
console.log(tagP) 
