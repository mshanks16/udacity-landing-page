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
const navbarList = document.getElementById("navbar__list");
const sections = document.getElementsByTagName("Section");

/**
 * End Global Variables
 * Start Helper Functions
 *
 */

function makeActive() {
  for (const section of sections) {
    const box = section.getBoundingClientRect();
    const activeAnchor = document.getElementById("menu__item__" + section.id);

    if (box.top <= 150 && box.bottom >= 150) {
      // Apply active state on the current section and the corresponding Nav link.
      section.className = "active";
      activeAnchor.className = "menu__link active";
    } else {
      // Remove active state from other section and corresponding Nav link.
      section.className = "";
      activeAnchor.className = "menu__link";
    }
  }
}

function scrollTo(event) {
  event.preventDefault()
  const sectionId = event.target.id.replace("menu__item__", "");
  const section = document.getElementById(sectionId);
  section.scrollIntoView();
}

/**
 * End Helper Functions
 * Begin Main Functions
 *
 */

// build the nav
for (let i = 0; i < sections.length; i++) {
  const section = sections[i];

  let anchor = document.createElement("a");
  anchor.className = "menu__link";
  anchor.textContent = section.getAttribute("data-nav");
  anchor.id = "menu__item__" + section.id;
  anchor.href = "#";
  anchor.addEventListener("click", scrollTo);


  let listItem = document.createElement("li");
  listItem.append(anchor);
  navbarList.append(listItem);
}

/**
 * End Main Functions
 * Begin Events
 *
 */

document.addEventListener("scroll", makeActive);