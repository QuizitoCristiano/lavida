const menuIcon = document.querySelector('#menu-icon');
const openIcons = document.querySelector('.openIcons');
const closeIcons = document.querySelector('.closeIcons');
// menuIcon.onclick = () => {
//     menuIcon.classList.toggle('bx-x');
//     navebar.classList.toggle('active');
// }

// const header = document.querySelector('header');

// header.classList.toggle('sticky', window.scrollY > 100);

// 
// navebar.classList.remove('active')



const OpenIcons = () => {
    openIcons.style.display = "none"
    closeIcons.style.display = 'flex'
    document.querySelector(".navbar").style.display = 'flex'
}
const CloseIcons = () => {
    openIcons.style.display = "flex"
    closeIcons.style.display = 'none'
    document.querySelector(".navbar").style.display = 'none'
}