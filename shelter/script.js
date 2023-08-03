const btn = document.querySelector('#bur');
const navPage = document.querySelector('.nav-break');


btn.addEventListener("click", function (event) {
    
    btn.classList.toggle('burger-turn');
    navPage.classList.toggle('none');
    navPage.classList.toggle('mini-menu');
    
    var menu = document.querySelectorAll('.li-page');
    for (var i = 0; i < menu.length; i++) {
        menu[i].classList.add('mini-menu-font');
    }  

});



