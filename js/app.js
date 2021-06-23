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

sections.forEach((elm, index)=> {
    let linkTxt = elm.getAttribute("data-nav");
    let nwLink = document.createElement("a");
    let nodeText = document.createTextNode(linkTxt);
    let nwli = document.createElement("li");  
//adding the new links
    nwLink.appendChild(nodeText);
    nwli.appendChild(nwLink);

//adding listener to click
    nwLink.addEventListener("click", () => {
        elm.scrollIntoView({behavior:"smooth"});
        elm.classList.add("selected");
    })
    fragment.appendChild(nwli)

//adding listener to highlight sections while scrolling
    window.addEventListener("scroll", function() {
        elm.classList.add("activeSection");
    })

    // window.addEventListener("scroll", () => {
    //     if (elm.classList.contains("selected")) {
    //         nwli.classList.add("activeLink");
    //     }
    // })

//highlihgt links while scrolling
    window.addEventListener("scroll", () => {
            domRect = elm.getBoundingClientRect();
            if (domRect.top>0 && domRect.top<300) {
                nwli.classList.add("activeLink");
            }
            
        });
        
    })

myul.appendChild(fragment);





