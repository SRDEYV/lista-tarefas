const button = document.querySelector('.button-add-task')
const input = document.querySelector('.input-task')
const ListaCompleta = document.querySelector('.list-task')

let ListaItens = [] //Array - Está aguardando os itens aqui

function AddTask() {
    ListaItens.push({

        tarefa: input.value,
        StatusTask: false
    })

    input.value = ''


    mostrarTarefa()
}

function mostrarTarefa() {

    let novaLi = ''
    ListaItens.forEach((item, posicao) => {

        novaLi = novaLi + `
            <li class="task ${item.StatusTask && "done"}">
                <img src="./img/checked.png" alt="check-tarefa" onclick="concluirtarefa(${posicao})">
                <input class="input-QTD" placeholder="quant" name="" id="quantidade">
                <p>${item.tarefa}</p>
                <img src="./img/trash.png" alt="tarefa-para-lixo" onclick="deletariten(${posicao})">
            </li>
            `
    })

    ListaCompleta.innerHTML = novaLi

    localStorage.setItem('lista', JSON.stringify(ListaItens))



}

function recarregarTarefas(){
    const tarefaDoLocalStorage = localStorage.getItem('lista')

    ListaItens = JSON.parse(tarefaDoLocalStorage)
    console.log(tarefaDoLocalStorage)
    mostrarTarefa()
}

recarregarTarefas()

function deletariten(posicao) {
    ListaItens.splice(posicao, 1)

    mostrarTarefa()

}

function concluirtarefa(posicao) { //é o colo onclicer no hltml, para saber qual intem foi clicado e informar a posição
    ListaItens[posicao].StatusTask = !ListaItens[posicao].StatusTask
    mostrarTarefa()
    console.log(posicao)
}

button.addEventListener('click', AddTask)