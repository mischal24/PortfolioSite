const template = document.createElement("template");

template.innerHTML = `
    <style>
        .project {
            background-color: #000;
            width: 40vw;
            height: 16.2vw;
            border-radius: 2.75vw;
            overflow: hidden;
            transition: all 0.5s ease;
            position: relative;
            z-index: 1;
        }

        .project:hover {
            transform: scale(110%) rotate(1.5deg);
        }

        .project img {
            background-color: #000;
            width: 100%;
            height: 100%;
            object-fit: cover;
            opacity: 50%;
            transition: all 0.5s ease;
            pointer-events: none;
            position: absolute;
            z-index: 2;
        }

        .project:hover > img {
            transform: scale(120%);
            opacity: 100%;
        }

        .project a, .project p {
            color: #FFF;
            font-weight: bold;
            text-decoration: none;
            text-shadow: 2px 2px 2px #000000A4;
            transition: all 0.5s ease;
            position: absolute;
            z-index: 3;
        }

        .project a {
            pointer-events: none;
            display: block;
            font-size: 1.8vw;
            transform: translate(2vw, 11vw);
        }

        .project p {
            pointer-events: none;
            transform: translate(2vw, 12vw);
            font-size: 1.25vw;
        }
    </style>

    <div class="project">
        <img />
        <a></a>
        <p></p>
    </div>
`;

class Project extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({mode : "open"});
        this.shadowRoot.appendChild(template.content.cloneNode(true));
    }

    static get observedAttributes() {
        return ["title", "year", "image"];
    }

    attributeChangedCallback(name, oldValue, newValue) {
        this.shadowRoot.querySelector(".project img").src = this.getAttribute('image');
        this.shadowRoot.querySelector(".project a").innerText = this.getAttribute('title');
        this.shadowRoot.querySelector(".project p").innerText = this.getAttribute('year');

        const link = this.shadowRoot.querySelector('a');

        if (this.dataset.href != null) {
            link.href = this.dataset.href;
        }
        
        if (link.hasAttribute('href')) {
            link.style.pointerEvents = 'auto';
            link.textContent += " ↗";
        }
    }
}

export default Project;