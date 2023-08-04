
const btn2 = document.querySelector('.btn2');
const navPage2 = document.querySelector('.header-nav');



btn2.addEventListener("click", menuTwo);

function menuTwo(event) {
    
    btn2.classList.toggle('burger-turn');
    navPage2.classList.toggle('header-nav-new');
    navPage2.classList.toggle('mini-menu2');
    var menu = document.querySelectorAll('.li-page');
    for (var i = 0; i < menu.length; i++) {
        menu[i].classList.add('mini-menu-font2');
    }  

};