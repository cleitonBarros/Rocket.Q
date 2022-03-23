import Modal from './modal.js'

const modal = Modal();
//pega tod  os botoes

const btnCheck = document.querySelectorAll(".actions a.checked")
const btnDelete = document.querySelectorAll(".actions a.delete")
//pegar quando o marco for lido

btnCheck.forEach(button => {
    button.addEventListener("click",event=>{
        modal.open();
    })
})
/*for(const  element of btnCheck){
    element.addEventListener("click", event =>{
        //abrir a modal
        modal.open();
    })

}
*/
