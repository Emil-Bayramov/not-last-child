(() => {
    const refs = {

        headerBtn: document.querySelector('[data-header-btn]'),
        burger: document.querySelector('[data-burger]'),
        btnClose: document.querySelector('[data-btn-close]'),

        home: document.querySelector('[data-home]'),
        products: document.querySelector('[data-products]'),
        about: document.querySelector('[data-about]'),
        gallery: document.querySelector('[data-gallery]'),
        contacts: document.querySelector('[data-contacts]'),
  
    };
  
    toggleBtn
        refs.burger.addEventListener('click', toggleBtn);
        refs.btnClose.addEventListener('click', toggleBtn);
    
        refs.home.addEventListener('click', toggleBtn);
        refs.products.addEventListener('click', toggleBtn);
        refs.about.addEventListener('click', toggleBtn);
        refs.gallery.addEventListener('click', toggleBtn);
        refs.contacts.addEventListener('click', toggleBtn);
    
    function toggleBtn() {
       
        refs.headerBtn.classList.toggle('visually-hidden');
           }
   
  })();
  