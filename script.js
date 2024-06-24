// script.js
const menuToggle = document.querySelector('.menu-button');
let menuOpen = false;

menuToggle.addEventListener('click', () => {
    if (!menuOpen) {
        menuToggle.classList.add('open');
        document.querySelector('.nav-list').classList.add('active');
        menuOpen = true;
    } else {
        menuToggle.classList.remove('open');
        document.querySelector('.nav-list').classList.remove('active');
        menuOpen = false;
    }
});
