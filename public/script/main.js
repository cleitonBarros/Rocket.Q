import Modal from './modal.js'
const modal = Modal();
// mapear a modal 
const modalTitle = document.querySelector('.modal h2')
const modalDiscription = document.querySelector('.modal p')
const modalButton = document.querySelector('.modal button')


//pega tod  os botoes
const btnCheck = document.querySelectorAll(".actions a.checked")
const btnDelete = document.querySelectorAll(".actions a.delete")

//Pegar todos os botões que existe com a classe check
for(const  element of btnCheck){
    element.addEventListener("click",handleClick)


//Quando o botão delete for clicado ele abre a modal 
}
for(const  element of btnDelete){
    element.addEventListener("click", (event) =>{
        handleClick(event, false)    
    })

}

function handleClick(event, check =true){
    console.log(event.target.dataset.id )
    event.preventDefault()
    //pegando action
    const slug = check ? "check" : "delete"
    //pegar o room-id
    const roomId = document.querySelector('#room-id').dataset.id
    //pegando o question
    const questionId = event.target.dataset.id ;
    //pegar o Form
    const form = document.querySelector('.modal form')
    ///room/:room/:quetion/:action
    form.setAttribute("action",`/question/${roomId}/${questionId}/${slug}`)


    //mudar o h2, p, button dependendo da escolha de marcar como lida ou excluir a pergunta
    if(check == true){
        modalTitle.innerHTML = "Marcar como lida "
        modalDiscription.innerHTML = "Tem certeza que deseja marcar como lida essa pergunta?"
        modalButton.innerHTML = "Sim, Marcar"
        modalButton.classList.remove("red")
    }else{
        modalTitle.innerHTML = "Excluir pergunta"
        modalDiscription.innerHTML = "Tem certeza que deseja excluir  esta pergunta?"
        modalButton.innerHTML = "Sim, Excluir"
        modalButton.classList.add("red")
    }
  
    modal.open();
}

