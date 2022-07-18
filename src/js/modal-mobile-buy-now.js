(() => {
    const refs = {
      openModalBtn: document.querySelector("[data-modal-mobile-open-buy-now]"),
      closeModalBtn: document.querySelector("[data-modal-mobile-close-buy-now]"),
      modal: document.querySelector("[data-modal-mobile-buy-now]"),
    };
  
    refs.openModalBtn.addEventListener("click", toggleModal);
    refs.closeModalBtn.addEventListener("click", toggleModal);
  
    function toggleModal() {
      refs.modal.classList.toggle("is-hidden");
    }
  })();