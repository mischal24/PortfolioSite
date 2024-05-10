const scroll_speed = 5;
let is_interping = true;
let scroll_percentage = 0;

function scroll_page(event) {
    if (event.deltaY < 0)
    {
        scroll_percentage += scroll_speed;
    }
    else if (event.deltaY > 0)
    {
        scroll_percentage -= scroll_speed;
    }

    document.getElementById('track').style.transform = "translateX(" + scroll_percentage + "vw)";

    interpolate_scroll();
    loop();
}

function interpolate_scroll() {
    if (is_interping == true) {
        document.getElementById('track').style.transition = "all 0.5s ease";
    } else {
        document.getElementById('track').style.transition = "none";
    }
}

const delay = ms => new Promise(res => setTimeout(res, ms));

const loop = async() => {
    if (scroll_percentage < -200) {
        is_interping = false;
        scroll_percentage = 200;
        await delay(50);
        is_interping = true;
    }
    if (scroll_percentage > 200) {
        is_interping = false;
        scroll_percentage = -200;
        await delay(50);
        is_interping = true;
    }
}

document.body.addEventListener("wheel", scroll_page);