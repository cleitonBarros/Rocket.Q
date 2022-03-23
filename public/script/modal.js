export default function Modal(){
    function open(){
        document.querySelector('.modal-wrapper').classList("active")
    }
   function close(){

    }



    return{
        open,
        close
    }

}