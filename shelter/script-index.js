const btn1 = document.querySelector('.btn1');
const navPage = document.querySelector('.nav-break');
const menuChecked = document.querySelector('.li-page');



btn1.addEventListener("click", menuOne);


function menuOne(event)  {
    btn1.classList.toggle('burger-turn');
    navPage.classList.toggle('nav-break-new');
    navPage.classList.toggle('mini-menu');
    var menu = document.querySelectorAll('.li-page');
    for (var i = 0; i < menu.length; i++) {
        menu[i].classList.add('mini-menu-font');
    }  
};

