const form = document.querySelector('form');
const tituloValue = document.getElementById('titleField');
const descricaoValue = document.getElementById('descriptionField');
const imageValue = document.getElementById('imageLink');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    criarCard();
});

function criarCard() {
    let titulo = tituloValue.value;
    let descricao = descricaoValue.value;
    let imagem = imageValue.value;
    let cardCriado = `<div class="bg-azul-claro p-1 flex flex-col rounded-lg justify-center w-3/4 lg:w-3/12 h-2/4">
                        <img class="rounded-lg p-1" src=${imagem} />
                        <div class="flex justify-center items-center text-black text-2xl break-all">
                            <h2>${titulo}</h2>
                        </div>
                    <div class="flex flex-wrap overflow-y-scroll overflow-visible">    
                            <p class="break-words overflow-wrap: normal">${descricao}</p>
                        </div>
                        </div>`;

    document.querySelector('#cardSection').innerHTML += cardCriado;
}
