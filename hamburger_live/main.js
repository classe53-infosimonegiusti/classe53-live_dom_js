const menuToggle = document.querySelector('.header-right > a');
const close = document.querySelector('.close');
const htmlHamburgerMenu = document.querySelector('.hamburger-menu');

menuToggle.addEventListener('click',
    function() {
        htmlHamburgerMenu.classList.add('active');
    }
)

close.addEventListener('click',
    function() {
        htmlHamburgerMenu.classList.remove('active');
    }
);