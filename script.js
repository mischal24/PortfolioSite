const pages = {
    HOME: 0,
    PROJECTS: 1,
    ABOUT: 2
};

let current_page = pages.PROJECTS;
let background = document.getElementById("background");
let logo = document.getElementById("logo");
let projects = document.getElementById("projects");
let about = document.getElementById("about");
let about_text = document.getElementById("about-text");
let cursor = document.getElementById("cursor");

let project_scroll = 0;

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
        background.style.setProperty("transform", "translateX(-30%)");
        logo.style.setProperty("transform", "scale(100%) translate(0, 0)");
        if (window.innerWidth > 1400) {
            logo.style.setProperty("pointer-events", "all");
        } else {
            logo.style.setProperty("pointer-events", "none");
        }
        projects.style.setProperty("right", "-110vh");
        projects.style.setProperty("pointer-events", "none");
        about.style.setProperty("opacity", "0");
        about.style.setProperty("pointer-events", "none");
    }

    if (current_page == pages.PROJECTS) {
        background.style.setProperty("transform", "translateX(-70%)");
        logo.style.setProperty("transform", "scale(100%) translate(0, 0)");
        if (window.innerWidth > 1400) {
            logo.style.setProperty("pointer-events", "all");
        } else {
            logo.style.setProperty("pointer-events", "none");
        }
        projects.style.setProperty("right", "10vh");
        projects.style.setProperty("pointer-events", "all");
        about.style.setProperty("opacity", "0");
        about.style.setProperty("pointer-events", "none");
    }

    if (current_page == pages.ABOUT) {
        background.style.setProperty("transform", "translateX(-100%)");
        logo.style.setProperty("transform", "scale(500%) translate(11.4vh, 7vh)");
        logo.style.setProperty("pointer-events", "none");
        projects.style.setProperty("right", "-110vh");
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

document.body.addEventListener("wheel", scroll_projects);

function scroll_projects(event) {
    if (current_page != pages.PROJECTS) {
        return
    }

    if (event.deltaY < 0)
    {
        project_scroll += 10;
    }
    else if (event.deltaY > 0)
    {
        project_scroll -= 10;
    }

    projects.style.setProperty("transform", "translateY(" + project_scroll + "vh)");

    if (project_scroll >= -10) {
        project_scroll = -10;
    }

    let all_projects = projects.getElementsByClassName("project");

    if (project_scroll <= -(all_projects.length * 2.2) * all_projects.length) {
        project_scroll = -(all_projects.length * 2.2) * all_projects.length;
    }
}