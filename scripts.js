const button = document.querySelector('.button-add-task')
const input = document.querySelector('.input-task')
const ListaCompleta = document.querySelector('.list-task')

let ListaItens = [] //Array - Está aguardando os itens aqui

function AddTask() {
    ListaItens.push({

        tarefa: input.value,
        StatusTask: false
    }
    )
    
    input.value = ''

   
    mostrarTarefa()
}

function mostrarTarefa() {

    let novaLi = ''
    ListaItens.forEach((item, posicao) => {

        novaLi = novaLi + `
            <li class="task">
                <img src="./img/checked.png" alt="check-tarefa">
                <input class="input-QTD" placeholder="quant" name="" id="quantidade">
                <p>${item.tarefa}</p>
                <img src="./img/trash.png" alt="tarefa-para-lixo" onclick="deletariten(${posicao})">
            </li>
            `
    })

    ListaCompleta.innerHTML = novaLi



}

function deletariten(posicao) {
    ListaItens.splice(posicao, 1)

    mostrarTarefa()

}

function concluirtarefa() {


}

button.addEventListener('click', AddTask)