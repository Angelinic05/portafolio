const hamburger = document.querySelector('.hamburger');
const navList = document.querySelector('nav ul');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navList.classList.toggle('active');
});

const typed = new Typed('.multiple', {
    strings: ['Front-end','Back-end','Design','DataBases'],
    typeSpeed:100,
    backSpeed:100,
    backDelay:1000,
    loop:true
})