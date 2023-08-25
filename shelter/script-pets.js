
const btn2 = document.querySelector('.btn2');
const navPage2 = document.querySelector('.header-nav');
const menuClose = document.querySelector('main');
const menuPoint = document.querySelectorAll('.li-page');
const screenWidth = window.screen.availWidth


window.addEventListener('resize', function () { 
    "use strict";
    window.location.reload(); 
});


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



menuClose.addEventListener("click", menuClosed);

for(var i = 0; i < menuPoint.length; i++) {
    menuPoint[i].addEventListener("click", menuClosed);
}
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


const petsCards= document.querySelectorAll('.card');

const fistArrow = document.querySelector('.first-ar');
const lastArrow = document.querySelector('.last-ar');
const prevArrow = document.querySelector('.prev-ar');
const nextArrow = document.querySelector('.next-ar');
let a = 1;



if (screenWidth <= 767) {
    nextArrow.classList.remove('inactive-arrow');
    nextArrow.classList.add('active-arrow');
    nextArrow.addEventListener("click", nextSlide);
};


function nextSlide(event) {
    if (a >= petsCards.length - 3) { 
        petsCards[a - 1].classList.add('disabled-for-320');
        petsCards[a + 2].classList.remove('disabled-for-320');
        nextArrow.classList.remove('active-arrow');
        nextArrow.classList.add('inactive-arrow');
    } else { 
        petsCards[a - 1].classList.add('disabled-for-320');
        petsCards[a + 2].classList.remove('disabled-for-320');
        a++;
    } 
};

if ((screenWidth <= 767) && (a > 1)) {
    prevArrow.classList.remove('inactive-arrow');
    prevArrow.classList.add('active-arrow');
    prevArrow.addEventListener("click", previousSlide);
};

function previousSlide(event) {
    console.log('hi mark')
}