const btn1 = document.querySelector('.btn1');
const navPage = document.querySelector('.nav-break');
const menuClose = document.querySelector('main');



btn1.addEventListener("click", menuOne);

menuClose.addEventListener("click", menuClosed);

function menuOne(event)  {
    btn1.classList.toggle('burger-turn');
    navPage.classList.toggle('nav-break-new');
    navPage.classList.toggle('mini-menu');
    var menu = document.querySelectorAll('.li-page');
    for (var i = 0; i < menu.length; i++) {
        menu[i].classList.add('mini-menu-font');
    }   
};


function menuClosed(event)  {
    if (btn1.classList.contains('burger-turn')) {
        btn1.classList.toggle('burger-turn');
        navPage.classList.toggle('nav-break-new');
        navPage.classList.toggle('mini-menu');
        var menu = document.querySelectorAll('.li-page');
        for (var i = 0; i < menu.length; i++) {
            menu[i].classList.add('mini-menu-font');
        }
    } 
};

