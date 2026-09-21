'usestrict'

const valores = [123, 50, 456, 3, 24, 78 , 10, 65, 1001, 200]
const valoresAbaixoMeta = valores .filter( valor => valor < 100)
const valoresAcimaMeta = valores .filter (valor => valor > 100)
const valoresTaxa = valores.map(valor => valor + 5)
const valoresFreteMenor100 = valores.map(valor => valor + 100).filter(valor => valor < 120)

const botaoCriarCards = document.getElementById("criar-cards")
const botaoAbaixoMeta = document.getElementById("abaixo-meta")
const botaoAcimaMeta = document.getElementById("acima-meta")
const botaoValoresTaxa = document.getElementById("valores-taxa")
const botaoFreteMenor100 = document.getElementById("frete-menor")

function criarCard (valor) {
    const container = document.getElementById('container')   
    const card = document.createElement('div')
    card.className = 'card'
    card.textContent = valor
    container.append(card)

    if (valor <= 100) {
        card.classList.add("cardvermelho")
    }

}
function criarcards(listaVAlores){
    const container = document.getElementById('container')
    container.replaceChildren()
    listaVAlores.forEach(criarCard)
}
    


botaoCriarCards.onclick = () => criarcards (valores)

botaoAbaixoMeta.onclick = () => criarcards (valoresAbaixoMeta)

botaoAcimaMeta.onclick = () => criarcards (valoresAcimaMeta)

botaoValoresTaxa.onclick = () => criarcards (valoresTaxa)

botaoFreteMenor100.onclick = () => criarcards (valoresFreteMenor100)



