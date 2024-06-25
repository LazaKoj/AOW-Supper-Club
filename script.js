// script.js
const menuToggle = document.querySelector('.menu-button');
let menuOpen = false;

menuToggle.addEventListener('click', () => {
    const navList = document.querySelector('.nav-list');
    if (!menuOpen) {
        menuToggle.classList.add('open');
        navList.classList.remove('fade-out');
        navList.classList.add('active');
        menuOpen = true;
    } else {
        menuToggle.classList.remove('open');
        navList.classList.remove('active');
        navList.classList.add('fade-out');
        setTimeout(() => {
            navList.classList.remove('fade-out');
        }, 1000); // Match this with the duration of the fadeOut animation
        menuOpen = false;
    }
});

/* scroll fade effect */

const mainImage = document.getElementById('main-image'); 

window.addEventListener('scroll', () => {
    updateImage();
});

function updateImage() {
    mainImage.style.opacity = 1 - window.pageYOffset / 600;
}
