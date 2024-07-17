const pages = {
    HOME: 0,
    PROJECTS: 1,
    ABOUT: 2
};

let current_page = pages.HOME;
let background = document.getElementById("background");
let logo = document.getElementById("logo");
let projects = document.getElementById("projects");
let about = document.getElementById("about");
let about_text = document.getElementById("about-text");
let cursor = document.getElementById("cursor");

function page_loaded() {
    handle_page_change();
}

document.onload = page_loaded();

function select_page(x) {
    current_page = x;
    handle_page_change();
}

function handle_page_change() {
    if (current_page == pages.HOME) {
        background.style.setProperty("transform", "translateX(-60%)");
        logo.style.setProperty("transform", "scale(100%) translate(0, 0)");
        logo.style.setProperty("pointer-events", "all");
        projects.classList.remove("game-transition");
        projects.style.setProperty("opacity", "0");
        projects.style.setProperty("pointer-events", "none");
        about.style.setProperty("opacity", "0");
        about.style.setProperty("pointer-events", "none");
    }

    if (current_page == pages.PROJECTS) {
        background.style.setProperty("transform", "translateX(0%)");
        logo.style.setProperty("transform", "scale(100%) translate(0, 0)");
        logo.style.setProperty("pointer-events", "all");
        projects.classList.add("game-transition");
        projects.style.setProperty("opacity", "1");
        projects.style.setProperty("pointer-events", "all");
        about.style.setProperty("opacity", "0");
        about.style.setProperty("pointer-events", "none");
    }

    if (current_page == pages.ABOUT) {
        background.style.setProperty("transform", "translateX(-100%)");
        logo.style.setProperty("transform", "scale(500%) translate(11.4vh, 7vh)");
        logo.style.setProperty("pointer-events", "none");
        projects.classList.remove("game-transition");
        projects.style.setProperty("opacity", "0");
        projects.style.setProperty("pointer-events", "none");
        about.style.setProperty("opacity", "1");
        about.style.setProperty("pointer-events", "all");
    }
}

function set_about_text(new_text) {
    about_text.innerHTML = new_text;
}

document.body.onpointermove = event => {
    const { clientX, clientY } = event;

    document.getElementById("cursor").animate({
        left: `${clientX-25}px`,
        top: `${clientY-25}px`
    
    }, {duration: 1000, fill: "forwards"})
}

function mouse_on_div(x) {
    if (x != null && current_page != x) {
        return;
    }

    cursor.style.setProperty("scale", "200%");
}

function mouse_off_div(x) {
    if (x != null && current_page != x) {
        return;
    }
    
    cursor.style.setProperty("scale", "100%");
}