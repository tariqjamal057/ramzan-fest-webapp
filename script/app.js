// DOM Elements 
const home = document.getElementById('home');

const navLinks = document.getElementById('navLinks');
const hamburger = document.querySelector('.hamburger');
const hamburger1 = document.getElementById('hamburger1');
const hamburger2 = document.getElementById('hamburger2');
const hamburger3 = document.getElementById('hamburger3');


// Creating stars Dnamically
function stars() {
    const count = 300;
    let i = 0;
    while (i < count) {
        const star = document.createElement('i');
        const x = Math.floor(Math.random() * window.innerWidth);
        const y = Math.floor(Math.random() * window.innerHeight);

        const size = Math.random() * 4;
        star.style.left = x + 'px';
        star.style.top = y + 'px';
        star.style.width = 1 + size + 'px';
        star.style.height = 1 + size + 'px';

        const duration = Math.random() * 2;
        star.style.animationDuration = 2 + duration + 's'
        star.style.animationDelay = 2 + duration + 's'
        home.appendChild(star);
        i++
    }
}
stars();


// Responsiveness 
hamburger.addEventListener('click' , ()=> {
    navLinks.classList.toggle('active');
    hamburger1.classList.toggle('toggle1');
    hamburger2.classList.toggle('toggle2');
    hamburger3.classList.toggle('toggle3');
})


document.onclick = function(e) {
    if(e.target.id !== 'navLinks' && e.target.id !== 'hamburger1' && e.target.id !== 'hamburger2' && e.target.id !== 'hamburger3')
    {
        navLinks.classList.remove('active');
        hamburger1.classList.remove('toggle1');
        hamburger2.classList.remove('toggle2');
        hamburger3.classList.remove('toggle3');
    }
}