// Script for header scroll
document.addEventListener('scroll', () => {
    const nav = document.querySelector('nav')

    if (window.scrollY > 0) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
});



//Script for timeline scroll effect
document.addEventListener('scroll', function() {
  var timeline = document.querySelector('.timeline');
  var infoBoxes = document.querySelectorAll('.info-box');
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
  // timeline.querySelector('.timeline::after').style.height = lineHeight + 'px';

   // Check each info-box's position relative to the viewport and apply the 'visible' class
   infoBoxes.forEach(function(box) {
      var boxTop = box.getBoundingClientRect().top;
      if (boxTop < windowHeight * 0.85) { // Trigger slightly before it's fully in view
          box.classList.add('visible');
      } else {
          box.classList.remove('visible');
      }
  });

});



// Script for nav menu link hover effect
const menuItems = document.querySelectorAll('.nav-menu li a'); // Select all the menu links

// Loop through each menu item
menuItems.forEach(item => {
item.addEventListener('mouseenter', () => {
  // Add 'hovered' class to the current hovered item
  item.classList.add('hover');
  
  // Remove 'hovered' class from all other items, and add 'non-hovered' class
  menuItems.forEach(otherItem => {
    if (otherItem !== item) {
      otherItem.classList.add('non-hovered');
    }
  });
});

item.addEventListener('mouseleave', () => {
  // Remove all 'hovered' and 'non-hovered' classes when no item is hovered
  item.classList.remove('hover');
  menuItems.forEach(otherItem => {
    otherItem.classList.remove('non-hovered');
  });
});
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

// Script for project filter
let sortBtn = document.querySelector('.filter-menu').children;
let sortItem = document.querySelector('.filter-item').children;

for(let i = 0; i < sortBtn.length; i++){
    sortBtn[i].addEventListener('click', function(){
        for(let j = 0; j< sortBtn.length; j++){
            sortBtn[j].classList.remove('current');
        }

        this.classList.add('current');
        

        let dataFilter = this.getAttribute('data-filter');

        for(let k = 0; k < sortItem.length; k++){
            sortItem[k].classList.remove('active');
            sortItem[k].classList.add('hide');

            if(sortItem[k].getAttribute('data-item') == dataFilter || dataFilter == "all"){
                sortItem[k].classList.remove('hide');
                sortItem[k].classList.add('active');
            }
        }
    });
}












