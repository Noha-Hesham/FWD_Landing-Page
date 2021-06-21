/**
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


/**
 * End Global Variables
 * Start Helper Functions
 * 
*/



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav


// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active


const sections = document.querySelectorAll("section");
const myul = document.getElementById("navbar__list");
const fragment = document.createDocumentFragment();

sections.forEach((elm, index)=> {
    let linkTxt = elm.getAttribute("data-nav");
    let nwLink = document.createElement("a");
    let nodeText = document.createTextNode(linkTxt);
    let nwli = document.createElement("li");

    nwLink.appendChild(nodeText);
    nwli.appendChild(nwLink);
    nwLink.addEventListener("click", () => {
        elm.scrollIntoView({behavior:"smooth"});
    })
    fragment.appendChild(nwli)

})

myul.appendChild(fragment);