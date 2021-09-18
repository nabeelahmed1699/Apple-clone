// Selectors
const hamburger = document.querySelector('.hamburger');
const navList = document.querySelector('.nav-list');
const navbar = document.querySelector('.navbar');

// Event listeners
hamburger.addEventListener('click', hamburgerOpen);






// functions
function hamburgerOpen() {
    hamburger.classList.toggle('open-hamburger');
    navList.classList.toggle('nav-open');
    navbar.classList.toggle('bg-black');


}