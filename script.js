import Cursor from "./components/cursor.js";
import Logo from "./components/logo.js";
import Project from "./components/project.js";
import SkillCard from "./components/skill-card.js";
import Social from "./components/social.js";

window.customElements.define('new-cursor', Cursor);
window.customElements.define('new-logo', Logo);
window.customElements.define('new-project', Project);
window.customElements.define('new-skill-card', SkillCard);
window.customElements.define('new-social', Social);

const Pages = {
    HOME:0,
    PROJECTS:1,
    ABOUT:2
};

let current_page = Pages.HOME;

window.set_current_page = function(new_page) {
    current_page = new_page;
    console.log('Current page is:', current_page);
}

document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('[href="#"]').addEventListener('click', () => set_current_page(Pages.HOME));
    document.querySelectorAll('[href="#"]')[1].addEventListener('click', () => set_current_page(Pages.PROJECTS));
    document.querySelectorAll('[href="#"]')[2].addEventListener('click', () => set_current_page(Pages.ABOUT));
});

const logo = document.getElementById("logo");
const name_card = document.getElementById("name-card");
const project_elements = document.getElementById("projects");
const about_elements = document.getElementById("about");

function update_page() {
    switch(current_page) {
        case Pages.HOME:
            logo.grow(false);
            name_card.style.transform = 'translateX(0vw)';
            project_elements.style.transform = 'translateX(50vw)';
            project_elements.style.opacity = 0;
            project_elements.style.pointerEvents = 'none';
            about_elements.style.opacity = 0;
            about_elements.style.pointerEvents = 'none';
            break;
        case Pages.PROJECTS:
            logo.grow(false);
            name_card.style.transform = 'translateX(-35vw)';
            project_elements.style.transform = 'translateX(0vw)';
            project_elements.style.opacity = '100%';
            project_elements.style.pointerEvents = 'all';
            about_elements.style.opacity = 0;
            about_elements.style.pointerEvents = 'none';
            break;
        case Pages.ABOUT:
            logo.grow(true);
            name_card.style.transform = 'translateX(-100vw)';
            project_elements.style.transform = 'translateX(50vw)';
            project_elements.style.opacity = 0;
            project_elements.style.pointerEvents = 'none';
            about_elements.style.opacity = '100%';
            about_elements.style.pointerEvents = 'all';
            break;
    }
}

document.onload = update_page();
document.addEventListener("click", update_page);

let current_scroll = 0;

const project_list = document.getElementById("project-list");

function scroll_project_list(event) {
    const childHeight = project_list.firstElementChild.offsetHeight + 37.8;
    const totalChildren = project_list.childElementCount;
    const maxScroll = -childHeight * (totalChildren - 1);
    const dynamicOffset = 37.8 - (totalChildren * 0.12);

    if (totalChildren > 2 && current_page == Pages.PROJECTS) {
        if (event.deltaY > 0) {
            current_scroll -= 200;
        } else if (event.deltaY < 0) {
            current_scroll += 200;
        }
    
        current_scroll = Math.max(maxScroll + dynamicOffset, Math.min(37.8, current_scroll));
        project_list.style.transform = `translateY(${current_scroll}px)`;
    }
}

document.addEventListener("wheel", scroll_project_list);