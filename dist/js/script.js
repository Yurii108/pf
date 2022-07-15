const hamburger = document.querySelector('.hamburger'),
        menu = document.querySelector('.menu'),
        closeMenu = document.querySelector('.menu__close');

hamburger.addEventListener('click', () => {
        menu.classList.add('active');
});

closeMenu.addEventListener('click', () => {
        menu.classList.remove('active');
});

//skills-procent
const procent = document.querySelectorAll('.skills__procent-procent'),
        rectaingle = document.querySelectorAll('.skills__procent_rectangle span');

procent.forEach( (item, i) => {
        rectaingle[i].style.width = item.innerHTML;
});
