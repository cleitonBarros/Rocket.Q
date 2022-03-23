import Modal from './modal.js'
const modal = Modal();
// mapear a modal 
const modalTitle = document.querySelector('.modal h2')
const modalDiscription = document.querySelector('.modal p')
const modalButton = document.querySelector('.modal button')


//pega tod  os botoes
const btnCheck = document.querySelectorAll(".actions a.checked")
const btnDelete = document.querySelectorAll(".actions a.delete")
//pegar quando o marco for lido
for(const  element of btnCheck){
    element.addEventListener("click",handleClick)

}
for(const  element of btnDelete){
    element.addEventListener("click", (event) =>{
        handleClick(event, false)    
    })

}

function handleClick(event, check =true){
    event.preventDefault()
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

