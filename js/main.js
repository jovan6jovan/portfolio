// DOM elements

const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');
const menuNav = document.querySelector('.menu__nav');
const navItems = document.querySelectorAll('.menu__nav__item');

// Initial state for menu

let showMenu = false;

menuBtn.addEventListener('click', toggleMenu);

function toggleMenu() {
    menuBtn.classList.toggle('close');
    menu.classList.toggle('show');
    menuNav.classList.toggle('show');
    navItems.forEach(item => item.classList.toggle('show'));
    showMenu = !showMenu;
}

// Typed js

