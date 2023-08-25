
const btn2 = document.querySelector('.btn2');
const navPage2 = document.querySelector('.header-nav');
const menuClose = document.querySelector('main');
const menuPoint = document.querySelectorAll('.li-page');


btn2.addEventListener("click", menuTwo);

menuClose.addEventListener("click", menuClosed);

for(var i = 0; i < menuPoint.length; i++) {
    menuPoint[i].addEventListener("click", menuClosed);
}

function menuTwo(event) {
    
    btn2.classList.toggle('burger-turn');
    navPage2.classList.toggle('header-nav-new');
    navPage2.classList.toggle('mini-menu2');
    var menu = document.querySelectorAll('.li-page');
    for (var i = 0; i < menu.length; i++) {
        menu[i].classList.add('mini-menu-font2');
    }  

};

function menuClosed(event)  {
    if (btn2.classList.contains('burger-turn')) {
        btn2.classList.toggle('burger-turn');
        navPage2.classList.toggle('header-nav-new');
        navPage2.classList.toggle('mini-menu2');
        var menu = document.querySelectorAll('.li-page');
        for (var i = 0; i < menu.length; i++) {
            menu[i].classList.add('mini-menu-font2');
        } 
    } 
};