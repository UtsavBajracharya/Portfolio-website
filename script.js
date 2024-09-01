// Script for header scroll
document.addEventListener('scroll', () => {
    const nav = document.querySelector('nav')

    if (window.scrollY > 0) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
});


// Script for mobile nav menu
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}

const navLink = document.querySelectorAll("li");

navLink.forEach(n => n.addEventListener("click", closeMenu));

function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}

//Script for timeline scroll effect
document.addEventListener('scroll', function() {
    var timeline = document.querySelector('.timeline');
    var timelinePosition = timeline.getBoundingClientRect().top;
    var screenPosition = window.innerHeight;

    if (timelinePosition < screenPosition) {
        timeline.classList.add('animate-line');
    } else {
        timeline.classList.remove('animate-line');
    }
});