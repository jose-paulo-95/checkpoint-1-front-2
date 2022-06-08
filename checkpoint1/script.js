const form = document.querySelector('form');
const tituloValue = document.getElementById('titleField')
const descricaoValue = document.getElementById('descriptionField')
const imageValue = document.getElementById('imageLink')

form.addEventListener('submit', (event) =>{
    event.preventDefault();
    criarCard()
})

function criarCard() {
    let titulo = tituloValue.value
    let descricao = descricaoValue.value
    let imagem = imageValue.value
    let cardCriado = `<div class="card">
    <img src=${imagem} />
    <h2>${titulo}</h2>
    <p>${descricao}</p>
    </div>`

    document.querySelector('#cardSection').innerHTML+=cardCriado
}