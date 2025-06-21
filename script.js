// Script for header scroll
document.addEventListener('scroll', () => {
    const nav = document.querySelector('nav')

    if (window.scrollY > 0) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
});

// Footer Year Script
const year = new Date().getFullYear(); // Footer copyright year
const yearElement = document.getElementById("currentYear");
if (yearElement) {
  yearElement.innerText = year;
}


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
let sortBtn = document.querySelector('.filter-menu')?.children;
let sortItem = document.querySelector('.filter-item')?.children;

if (sortBtn && sortItem) {
  for (let i = 0; i < sortBtn.length; i++) {
    sortBtn[i].addEventListener('click', function () {
      for (let j = 0; j < sortBtn.length; j++) {
        sortBtn[j].classList.remove('current');
      }

      this.classList.add('current');

      let dataFilter = this.getAttribute('data-filter');

      for (let k = 0; k < sortItem.length; k++) {
        if (dataFilter === 'all' || sortItem[k].getAttribute('data-item') === dataFilter) {
          sortItem[k].classList.remove('hide');
          sortItem[k].classList.add('active');
        } else {
          sortItem[k].classList.add('hide');
          sortItem[k].classList.remove('active');
        }
      }
    });
  }
}


// Toggle functionality for desktop
if (window.innerWidth >= 769) {
  document.querySelector('.filter-toggle').addEventListener('click', function () {
    const filterMenu = document.querySelector('.filter-menu');
    const toggleIcon = document.querySelector('.toggle-icon'); // Get the icon

    if (filterMenu.classList.contains('active')) {
      // If the menu is active, close the menu and change the icon back to ri-menu-2-fill
      filterMenu.classList.remove('active');
      filterMenu.classList.add('fade-out');
      toggleIcon.classList.remove('ri-menu-4-fill'); // Remove hamburger icon
      toggleIcon.classList.add('ri-menu-2-fill'); // Add menu icon
    } else {
      // If the menu is inactive, open it and change the icon to ri-menu-4-fill
      filterMenu.classList.remove('fade-out');
      filterMenu.classList.add('active');
      toggleIcon.classList.remove('ri-menu-2-fill'); // Remove menu icon
      toggleIcon.classList.add('ri-menu-4-fill'); // Add hamburger icon
    }
  });
}


//Pagination
// JavaScript: Filter + Pagination
const itemsPerPage = 6;
const allItems = document.querySelectorAll('.filter-item li');
const filterMenu = document.querySelector('.filter-menu');
const paginationNumbers = document.querySelector('.page-numbers');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');

let currentPage = 1;
let filteredItems = Array.from(allItems); // Start with all items
let totalPages = Math.ceil(filteredItems.length / itemsPerPage);

// Show items for the current page
function showItems(page) {
    allItems.forEach(item => item.style.display = 'none'); // Hide all items first

    const start = (page - 1) * itemsPerPage;
    const end = start + itemsPerPage;

    filteredItems.slice(start, end).forEach(item => {
        item.style.display = 'block';
    });

    paginationNumbers.textContent = `Page ${page} of ${totalPages}`;

    // Disable/enable buttons based on current page
    prevButton.disabled = page === 1;
    nextButton.disabled = page === totalPages;
}

// Handle pagination buttons
prevButton.addEventListener('click', () => {
    if (currentPage > 1) {
        currentPage--;
        showItems(currentPage);
    }
});

nextButton.addEventListener('click', () => {
    if (currentPage < totalPages) {
        currentPage++;
        showItems(currentPage);
    }
});

// Handle filtering
filterMenu.addEventListener('click', (e) => {
    if (e.target.tagName === 'LI') {
        const filter = e.target.getAttribute('data-filter');

        // Update active class
        document.querySelectorAll('.filter-menu li').forEach(li => li.classList.remove('current'));
        e.target.classList.add('current');

        if (filter === 'all') {
            filteredItems = Array.from(allItems);
        } else {
            filteredItems = Array.from(allItems).filter(item => item.getAttribute('data-item') === filter);
        }

        totalPages = Math.ceil(filteredItems.length / itemsPerPage);
        currentPage = 1; // Reset to first page on filter change
        showItems(currentPage);
    }
});

// Initial load
showItems(currentPage);


document.querySelectorAll('.social-icons a').forEach(icon => {
  icon.addEventListener('mouseenter', () => {
    const tooltip = document.createElement('span');
    tooltip.innerText = icon.getAttribute('aria-label');
    tooltip.className = 'tooltip';
    icon.appendChild(tooltip);
  });

  icon.addEventListener('mouseleave', () => {
    const tooltip = icon.querySelector('.tooltip');
    if (tooltip) icon.removeChild(tooltip);
  });
});









