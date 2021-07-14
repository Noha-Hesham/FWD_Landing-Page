/**
 * Define Global Variables
 * 
*/

const sections = document.querySelectorAll("section");
const ul = document.getElementById("navbarList");
const fragAction = document.createDocumentFragment();

/**
 * End Global Variables
 *  build the nav
 * 
*/

//create links
sections.forEach((elm, index)=> {
    let textLink = elm.getAttribute("data-nav");
    let liNewnk = document.createElement("a");
    let textNode = document.createTextNode(textLink);
    let liNew = document.createElement("li");
    let idLink= document.createElement('link'); 
    idLink.setAttribute("id", "link"); 
//adding the new links
    liNewnk.appendChild(textNode);
    liNew.appendChild(liNewnk);

//navigate to sections when click
    liNew.addEventListener("click", () => {
        elm.scrollIntoView({behavior:"smooth"}); //scroll to section
    })

    fragAction.appendChild(liNew)


//highlihgt links and sections while scrolling
    window.addEventListener("scroll", () => {
            domRect = elm.getBoundingClientRect();
            elm.classList.remove("activeSection");
            if (domRect.top>=0 && domRect.top<350) {
                elm.classList.add("activeSection");
                liNew.classList.add("activeLink");
            }
            else {
                liNew.classList.remove("activeLink");
            }
        });
    
    

});


ul.appendChild(fragAction);


