/*
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/
// Set global Variable for navbar
const navMenu = document.getElementById('navbar__list');
// Set global Variable for sections
const sections = document.querySelectorAll('section');

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/

function navList() {
    let navContent = '';
    for (section of sections) {
        const sectionLink = section.getAttribute('id');
        const sectionName = section.getAttribute('data-nav');
        navContent += `<li><a  class="menu__link" href="#${sectionLink}" data-section-id="${sectionLink}">${sectionName}</a></li>`;
    }
    navMenu.innerHTML = navContent;
}


/**
 * End Helper Functions
*/

// build the nav
navList();



//Set options that section isIntersecting
const options = {

    threshold: 0.6
}
const callback = (entries, observer) => {
    entries.forEach(entry => {
        // Check if section isIntersecting add active state property to the section
        if (entry.isIntersecting) {
            entry.target.classList.add("your-active-class");
        } else {
            // Remove active state property to the section
            entry.target.classList.remove("your-active-class");
        }

    });
};
//Create object  from IntersectionObserver
const observer = new IntersectionObserver(callback, options);
//Select section 
document.querySelectorAll("section").forEach(section => {
    observer.observe(section);
});






// Scroll to anchor ID using scrollTO event
navMenu.addEventListener("click", function (event) {
    event.preventDefault();
    document.getElementById(event.target.dataset.sectionId).scrollIntoView({ behavior: "smooth" });
});


/*
set responsive navbar for mobile
*/
const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]

toggleButton.addEventListener('click', () => {
    navbarLinks.classList.toggle('active')
})