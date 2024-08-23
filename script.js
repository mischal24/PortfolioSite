// Page Changes
const Pages = {
    HOME:0,
    PROJECTS:1,
    ABOUT:2
};

let current_page = Pages.ABOUT;

let nc = document.getElementById("name-card");
let pr = document.getElementById("project-reel");
let ab = document.getElementById("about");
let lo = document.getElementById("logo");

function set_current_page(new_page) {
    current_page = new_page;
}

function update_page() {
    switch(current_page) {
        case Pages.HOME:
            nc.style.setProperty("transform", "translateX(-5vw)");
            pr.style.setProperty("right", "-25cm");
            ab.style.setProperty("opacity", "0");
            ab.style.setProperty("pointer-events", "none");
            lo.style.setProperty("transform", "translate(0, 0) scale(100%)");
            lo.style.setProperty("pointer-events", "all");
            break;
        case Pages.PROJECTS:
            nc.style.setProperty("transform", "translateX(-46vw)");
            pr.style.setProperty("right", "3cm");
            ab.style.setProperty("opacity", "0");
            ab.style.setProperty("pointer-events", "none");
            lo.style.setProperty("transform", "translate(0, 0) scale(100%)");
            lo.style.setProperty("pointer-events", "all");
            break;
        case Pages.ABOUT:
            nc.style.setProperty("transform", "translateX(-95vw)");
            pr.style.setProperty("right", "-25cm");
            ab.style.setProperty("opacity", "100%");
            ab.style.setProperty("pointer-events", "all");
            lo.style.setProperty("transform", "translate(11cm, 8cm) scale(600%)");
            lo.style.setProperty("pointer-events", "none");
    }
}

/* debug */ document.onload = update_page();
document.addEventListener("click", update_page);

//Project Scrolling
let current_scroll = 0;

function scroll_project_reel(event) {
    if(event.deltaY > 0) {
        current_scroll += 1;
    }

    if(event.deltaY < 0) {
        current_scroll -= 1;
    }

    if(current_scroll > 0) {
        current_scroll = 0;
    }

    if(current_scroll < -((pr.childElementCount-2) * 10)) {
        current_scroll = -((pr.childElementCount-2) * 10);
    }

    pr.style.setProperty("transform", "translateY(" + current_scroll + "cm)");
    pr.getElementsByClassName("project").style.setProperty("margin-bottom", "" + (pr.childElementCount-1) + "cm");
}

document.body.addEventListener("wheel", scroll_project_reel);