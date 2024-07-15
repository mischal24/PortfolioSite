let current_page = 0;
let project_scroll = 0;
let is_interping = true;

let bg = document.getElementById("background");
let pj = document.getElementById("projects");
let am = document.getElementById("about");
let sc = document.getElementById("social");

let mn = document.getElementById("main-nav");
let pn = document.getElementById("projects-nav");

function set_page(x) {
    current_page = x;
    handle_pages();
}

function handle_pages() {
    if (current_page == 0) {
        bg.style.setProperty("transform", "translateX(0vh)");
        pj.style.setProperty("opacity", "0");
        pj.style.setProperty("transform", "translate(100vw, 30vh)");
        pn.style.setProperty("opacity", "0");
        pn.style.setProperty("pointer-events", "none");
        am.style.setProperty("opacity", "0");
        sc.style.setProperty("opacity", "0");
    }

    if (current_page == 1) {
        bg.style.setProperty("transform", "translateX(-60vh)");
        pj.style.setProperty("opacity", "1");
        pj.style.setProperty("transform", "translate(" + project_scroll + "vh, 30vh)");
        pn.style.setProperty("opacity", "1");
        pn.style.setProperty("pointer-events", "all");
        am.style.setProperty("opacity", "0");
        sc.style.setProperty("opacity", "0");
    }
    
    if (current_page == 2) {
        bg.style.setProperty("transform", "translateX(-150vh)");
        pj.style.setProperty("opacity", "0");
        pj.style.setProperty("transform", "translate(100vw, 30vh)");
        pn.style.setProperty("opacity", "0");
        pn.style.setProperty("pointer-events", "none");
        am.style.setProperty("opacity", "1");
        sc.style.setProperty("opacity", "1");
    }
}

function scroll_projects(event) {
    if (current_page != 1) {
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

    pj.style.setProperty("transform", "translate(" + project_scroll + "vh, 30vh)");

    if (project_scroll < (-105 * pj.querySelectorAll("img").length)) {
        pj.classList.add("notransition");
        project_scroll = (22 * pj.querySelectorAll("img").length);
        setTimeout(() => {pj.classList.remove("notransition");}, 500)
    }
    if (project_scroll > (22 * pj.querySelectorAll("img").length)) {
        pj.classList.add("notransition");
        project_scroll = (-105 * pj.querySelectorAll("img").length);
        setTimeout(() => {pj.classList.remove("notransition");}, 500)
    }
}

document.body.addEventListener("wheel", scroll_projects);

function jump_projects(x) {
    if (project_scroll != -102 * (x-1)) {
        project_scroll = -102 * (x-1);
    }
    
    pj.style.setProperty("transform", "translate(" + project_scroll + "vh, 30vh)");
}

document.body.addEventListener("mousemove", mouse_update);
    
function mouse_update(event) {
    document.getElementById("me").style.setProperty("transform", "translateX(" + event.pageX/50 +"vw)")
}

document.body.onpointermove = event => {
    const { clientX, clientY } = event;

    document.getElementById("cursor").animate({
        left: `${clientX-25}px`,
        top: `${clientY-25}px`
    
    }, {duration: 1000, fill: "forwards"})
}

function mouse_on_div() {
    document.getElementById("cursor").style.setProperty("scale", "200%");
}

function mouse_off_div() {
    document.getElementById("cursor").style.setProperty("scale", "100%");
}