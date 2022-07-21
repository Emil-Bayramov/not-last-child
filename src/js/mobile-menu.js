(() => {
    const refs = {
      mobileMenu: document.querySelector('[data-mobile-menu]'),
      burger: document.querySelector('[data-burger]'),
      btnClose: document.querySelector('[data-btn-close]'),

home: document.querySelector('[data-home]'),
      products: document.querySelector('[data-products]'),
      about: document.querySelector('[data-about]'),
      gallery: document.querySelector('[data-gallery]'),
      contacts: document.querySelector('[data-contacts]'),
  
    };
  
  
    refs.burger.addEventListener('click', toggleMobile);
    refs.btnClose.addEventListener('click', toggleMobile);
    refs.home.addEventListener('click', toggleMobile);
    refs.products.addEventListener('click', toggleMobile);
    refs.about.addEventListener('click', toggleMobile);
    refs.gallery.addEventListener('click', toggleMobile);
    refs.contacts.addEventListener('click', toggleMobile);
    
    function toggleMobile() {
      refs.mobileMenu.classList.toggle('is-open');
    }
  
   
  })();
  
  
  