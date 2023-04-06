let menu = document.querySelector('#menu-icon');
let navList = document.querySelector('.navlist');

menu.onClick = () =>
{
    menu.classList.toggle('bx-x');
    navList.classList.toggle('open');
};