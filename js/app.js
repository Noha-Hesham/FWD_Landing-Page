/**
 * Define Global Variables
 * 
*/

const sections = document.querySelectorAll("section");
const myul = document.getElementById("navbar__list");
const fragment = document.createDocumentFragment();

/**
 * End Global Variables
 *  build the nav
 * 
*/

//create links
sections.forEach((elm, index)=> {
    let linkTxt = elm.getAttribute("data-nav");
    let nwLink = document.createElement("a");
    let nodeText = document.createTextNode(linkTxt);
    let nwli = document.createElement("li");
    let linkId= document.createElement('link'); 
    linkId.setAttribute("id", "link"); 
//adding the new links
    nwLink.appendChild(nodeText);
    nwli.appendChild(nwLink);

//navigate to sections when click
    nwli.addEventListener("click", () => {
        elm.scrollIntoView({behavior:"smooth"}); //scroll to section
    })

    fragment.appendChild(nwli)


//highlihgt links and sections while scrolling
    window.addEventListener("scroll", () => {
            domRect = elm.getBoundingClientRect();
            elm.classList.remove("activeSection");
            if (domRect.top>=0 && domRect.top<350) {
                elm.classList.add("activeSection");
                nwli.classList.add("activeLink");
            }
            else {
                nwli.classList.remove("activeLink");
            }
        });
    
    

});


myul.appendChild(fragment);


