const menuIcon = document.querySelector('#menu-icon');
const navebar =document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navebar.classList.toggle('active');
}

const header = document.querySelector('header');

header.classList.toggle('sticky', window.scrollY > 100);

menuIcon.classList.remove('bx-x');
navebar.classList.remove('active')
