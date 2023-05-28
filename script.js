// const menuIcon = document.querySelector('#menu-icon');
// const openIcons = document.querySelector('.openIcons');
// const closeIcons = document.querySelector('.closeIcons');

//  const entrarNoZap = () => {


//  }


// menuIcon.onclick = () => {
//     menuIcon.classList.toggle('bx-x');
//     navebar.classList.toggle('active');
// }

// const header = document.querySelector('header');

// header.classList.toggle('sticky', window.scrollY > 100);

// 
// navebar.classList.remove('active')



// const OpenIcons = () => {
//     openIcons.style.display = "none"
//     closeIcons.style.display = 'flex'
//     document.querySelector(".navbar").style.display = 'flex'
// }
// const CloseIcons = () => {
//     openIcons.style.display = "flex"
//     closeIcons.style.display = 'none'
//     document.querySelector(".navbar").style.display = 'none'
// }

// function toggleMenu() {
//     var menuIcon = document.getElementById("menuIcon");

//     if (menuIcon.classList.contains("fa-bars")) {
//         menuIcon.classList.remove("fa-bars");
//         menuIcon.classList.add("fa-times");
//     } else {
//         menuIcon.classList.remove("fa-times");
//         menuIcon.classList.add("fa-bars");
//     }
// }
const linksDiv = document.querySelector(".navlinks");
const openMenu = document.querySelector('.bx-menu')
const fecharMenu = document.querySelector(".bx-tada")
openMenu.style.display = 'flex'
fecharMenu.style.display = 'none'

function CloseIcons() {


    if (linksDiv.style.display === "none") {
        linksDiv.style.display = "block";
        fecharMenu.style.display = 'flex'
        openMenu.style.display = 'none'

    } else {
        linksDiv.style.display = "none";
        fecharMenu.style.display = 'none'
        openMenu.style.display = 'flex'
    }


}