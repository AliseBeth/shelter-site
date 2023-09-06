
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

const firstArrow = document.querySelector('.first-ar');
const lastArrow = document.querySelector('.last-ar');
const prevArrow = document.querySelector('.prev-ar');
const nextArrow = document.querySelector('.next-ar');

let a = 1;





function doActiveNext(event){
    nextArrow.classList.remove('inactive-arrow');
    nextArrow.classList.add('active-arrow');
    nextArrow.addEventListener("click", nextSlide);
};

function doActivePrev(event){
    prevArrow.classList.remove('inactive-arrow');
    prevArrow.classList.add('active-arrow');
    prevArrow.addEventListener("click", previousSlide);     
};

function doInactivePrev(event){
    prevArrow.classList.add('inactive-arrow');
    prevArrow.classList.remove('active-arrow');
    prevArrow.removeEventListener("click", previousSlide);     
};
function doInactiveNext(event){
    nextArrow.classList.add('inactive-arrow');
    nextArrow.classList.remove('active-arrow');
    nextArrow.removeEventListener("click", nextSlide);     
};

function doActiveLast(event){
    lastArrow.classList.remove('inactive-arrow');
    lastArrow.classList.add('active-arrow');
    lastArrow.addEventListener("click", lastSlide);     
}
function doInactiveLast(event){
    lastArrow.classList.add('inactive-arrow');
    lastArrow.classList.remove('active-arrow');
    lastArrow.removeEventListener("click", lastSlide);     
}

function doActiveFirst(event){
    firstArrow.classList.remove('inactive-arrow');
    firstArrow.classList.add('active-arrow');
    firstArrow.addEventListener("click", firstSlide);     
}
function doInactiveFirst(event){
    firstArrow.classList.add('inactive-arrow');
    firstArrow.classList.remove('active-arrow');
    firstArrow.removeEventListener("click", firstSlide);     
}



if (screenWidth <= 767) {
    doActiveNext();
    doActiveLast();
};




function nextSlide(event) {
    if (a >= petsCards.length - 3) { 
        petsCards[a - 1].classList.add('disabled-for-320');
        petsCards[a + 2].classList.remove('disabled-for-320');
        nextArrow.classList.remove('active-arrow');
        nextArrow.classList.add('inactive-arrow');
        nextArrow.removeEventListener("click", nextSlide);
        a++;
        doActivePrev();
        doActiveFirst();
        doInactiveLast();
    } else { 
        petsCards[a - 1].classList.add('disabled-for-320');
        petsCards[a + 2].classList.remove('disabled-for-320');
        a++;
        if (a > 1) {
            doActivePrev();
            doActiveFirst();
        };  
        
    } 
};



function previousSlide(event) {
    if (a >= petsCards.length - 2) { 
        petsCards[a - 2].classList.remove('disabled-for-320');
        petsCards[a + 1].classList.add('disabled-for-320');
        nextArrow.classList.add('active-arrow');
        nextArrow.classList.remove('inactive-arrow');   
        a = a - 1;
        doActiveNext();
        doActiveLast();
    } else { 
        petsCards[a - 2].classList.remove('disabled-for-320');
        petsCards[a + 1].classList.add('disabled-for-320');
        a = a - 1;
        doActiveNext();
        doActiveLast();
        if (a === 1) {
            doInactivePrev();
            doInactiveFirst();
        };  
    };
}


function lastSlide(event) {
    
    a = 0;
    while (a < petsCards.length) {
        petsCards[a].classList.add('disabled-for-320');
        a++;
    }

    a = petsCards.length - 3
    petsCards[a].classList.remove('disabled-for-320');
    petsCards[a + 1].classList.remove('disabled-for-320');
    petsCards[a + 2].classList.remove('disabled-for-320');
    a++;
    doActiveFirst();
    doActivePrev();
    doInactiveNext();
    doInactiveLast();      
}


function firstSlide(event) {
    a = 0;
    while (a < petsCards.length) {
        petsCards[a].classList.add('disabled-for-320');
        a++;
    }
    a = 0;
    petsCards[a].classList.remove('disabled-for-320');
    petsCards[a + 1].classList.remove('disabled-for-320');
    petsCards[a + 2].classList.remove('disabled-for-320');
    a++;
    doInactiveFirst();
    doInactivePrev();
    doActiveNext();
    doActiveLast();      
}