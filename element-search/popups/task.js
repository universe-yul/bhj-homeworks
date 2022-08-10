const openModal = document.querySelectorAll('div.modal');
const closeModal = document.querySelectorAll('div.modal__close')
const modal = document.getElementById('modal_main');
const objModalSuccess = document.getElementsByClassName('show-success')
const modalSuccess= document.getElementById('modal_success');

	for(let i = 0; i < closeModal.length; i++) {
	closeModal[i].addEventListener("click", handleOpenModal);
	}

	objModalSuccess[0].addEventListener("click", handleModalSuccess);

 	function handleOpenModal() {
 		for(let i = 0; i < openModal.length; i++) {
    	openModal[i].classList.remove('modal_active');
		}   
    }

    function handleModalSuccess() {
        modalSuccess.classList.add('modal_active');
        modal.classList.remove('modal_active');
    }

 	   	modal.classList.add('modal_active');
   		