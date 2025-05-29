// Home Section Starts
var hamburgerBtn = document.querySelector('.main-navbar .hamburger-btn');
var navList = document.querySelector('.main-navbar .nav-list');
var navListItems = document.querySelectorAll('.nav-list li a');

hamburgerBtn.addEventListener('click',activeClass);

function activeClass(){
    hamburgerBtn.classList.toggle('active');
    navList.classList.toggle('active');
}

for(var i = 0; i < navListItems.length; i++){
    navListItems[i].addEventListener('click',listItemClicked);
}

function listItemClicked(){
    hamburgerBtn.classList.remove('active');
    navList.classList.remove('active');
}

