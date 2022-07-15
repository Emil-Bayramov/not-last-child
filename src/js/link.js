(() => {
    const refs = {
      
      closeMenuLink: document.querySelector('[link-menu-close]'),
      menu: document.querySelector('[link-menu]'),
    };
    
    refs.closeMenuLink.addEventListener('click', toggleModal);
    function toggleModal() {
      refs.menu.classList.toggle('is-open');
    }
  })();