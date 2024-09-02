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


// Script to turn greyscale icons into color effect
const targets = document.querySelectorAll(".w-20.h-20");
const isAnimated = "is-animated";
const threshold = 0.5;

function callback(entries, observer) {
  entries.forEach((entry) => {
    const elem = entry.target;
    if (entry.intersectionRatio >= threshold) {
      elem.classList.add(isAnimated);
      //observer.unobserve(elem);
    } else {
      elem.classList.remove(isAnimated); //When the is-animated class is added (when the element is in view), the filter is reset to grayscale(0) brightness(1); to show the original colors.
    }
  });
}

const observer = new IntersectionObserver(callback, { threshold }); //The IntersectionObserver monitors when your icons enter the viewport. When they are at least 50% visible (threshold: 0.5), the is-animated class is added, triggering the color transition.
for (const target of targets) {
  observer.observe(target);
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