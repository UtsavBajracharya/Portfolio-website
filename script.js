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
    var timelineTop = timeline.getBoundingClientRect().top;
    var timelineHeight = timeline.offsetHeight;
    var windowHeight = window.innerHeight;

    // Calculate how far the top of the timeline is within the viewport
    var scrollPosition = windowHeight - timelineTop;

    // Normalize the scroll position to a percentage of the timeline's height
    var scrollPercent = Math.max(0, Math.min(1, scrollPosition / (windowHeight + timelineHeight)));

    // Set the height of the line based on the scroll percentage
    var lineHeight = scrollPercent * timelineHeight;

    // Apply the height to the ::after pseudo-element using inline styles
    timeline.style.setProperty('--line-height', lineHeight + 'px');
    timeline.querySelector('.timeline::after').style.height = lineHeight + 'px';
});