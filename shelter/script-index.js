const btn1 = document.querySelector('.btn1');
const navPage = document.querySelector('.nav-break');
const menuClose = document.querySelector('main');
const menuPoint = document.querySelectorAll('.li-page');

const screenWidth = window.screen.availWidth
const arrowLeft = document.querySelector('.arrow.one');
const arrowRight = document.querySelector('.arrow.two');
const petsCards= document.querySelectorAll('.pet-card');








window.addEventListener('resize', function () { 
    "use strict";
    window.location.reload(); 
});




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



menuClose.addEventListener("click", menuClosed);


for(var i = 0; i < menuPoint.length; i++) {
    menuPoint[i].addEventListener("click", menuClosed);
}


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




arrowLeft.addEventListener('click', replyMeLeft);
arrowRight.addEventListener('click', replyMeRight);
let a = 0;

function replyMeRight(event)  {
    if (screenWidth > 1279) { 
        a++;
        if (a >= petsCards.length - 2) { 
            a = 0;
            petsCards[0].classList.remove('disabled-for-full');
            petsCards[1].classList.remove('disabled-for-full');
            petsCards[2].classList.remove('disabled-for-full');
            petsCards[5].classList.add('disabled-for-full');
            petsCards[6].classList.add('disabled-for-full');
            petsCards[7].classList.add('disabled-for-full');
        } else { 
            petsCards[a - 1].classList.add('disabled-for-full');
            petsCards[a + 2].classList.remove('disabled-for-full');
        }
    } else if ((screenWidth <= 1279) && (screenWidth > 767)) {
        a++;
        if (a >= petsCards.length - 1) { 
            a = 0;
            petsCards[0].classList.remove('disabled-for-768');
            petsCards[1].classList.remove('disabled-for-768');
            petsCards[6].classList.add('disabled-for-768');
            petsCards[7].classList.add('disabled-for-768');
        } else { 
            petsCards[a - 1].classList.add('disabled-for-768');
            petsCards[a + 1].classList.remove('disabled-for-768');
        }
    } else if (screenWidth <= 767) {
        a++;
        if (a >= petsCards.length) { 
            a = 0;
            petsCards[0].classList.remove('disabled-for-320');
            petsCards[7].classList.add('disabled-for-320');
        } else { 
            petsCards[a - 1].classList.add('disabled-for-320');
            petsCards[a].classList.remove('disabled-for-320');
            
        }
    }
}



function replyMeLeft(event)  {
    if (screenWidth > 1279) { 
        a = a - 1;
        if (a < 0) {
            a = petsCards.length - 3;
            petsCards[5].classList.remove('disabled-for-full');
            petsCards[6].classList.remove('disabled-for-full');
            petsCards[7].classList.remove('disabled-for-full');
            petsCards[0].classList.add('disabled-for-full');
            petsCards[1].classList.add('disabled-for-full');
            petsCards[2].classList.add('disabled-for-full');
        } else { 
            petsCards[a].classList.remove('disabled-for-full');
            petsCards[a + 3].classList.add('disabled-for-full');
        }
    } else if ((screenWidth <= 1279) && (screenWidth > 767)) {
        a = a - 1;
        if (a < 0) { 
            a = petsCards.length - 2;
            petsCards[0].classList.add('disabled-for-768');
            petsCards[1].classList.add('disabled-for-768');
            petsCards[6].classList.remove('disabled-for-768');
            petsCards[7].classList.remove('disabled-for-768');
        } else { 
            petsCards[a].classList.remove('disabled-for-768');
            petsCards[a + 2].classList.add('disabled-for-768');
        }
    } else if (screenWidth <= 767) {
        a = a - 1;
        if (a < 0) { 
            a = petsCards.length - 1;
            petsCards[0].classList.add('disabled-for-320');
            petsCards[7].classList.remove('disabled-for-320');
        } else { 
            petsCards[a].classList.remove('disabled-for-320');
            petsCards[a + 1].classList.add('disabled-for-320');
            
        }
    }
        
        
}
