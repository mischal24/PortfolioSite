const template = document.createElement("template");

template.innerHTML = `
    <style>
        img {
            width: 2cm;
            height: 2cm;
            transition: all 0.5s ease;
        }

        img:hover {
            transform: scale(125%) rotate(2.5deg);
        }
    </style>

    <a>
        <img />
    </a>
`;

class Social extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({mode : "open"});
        this.shadowRoot.appendChild(template.content.cloneNode(true));
        this.shadowRoot.querySelector('a').href= this.dataset.href;
    }

    static get observedAttributes() {
        return ["image"];
    }

    attributeChangedCallback(name, oldValue, newValue) {
        this.shadowRoot.querySelector("img").src = this.getAttribute('image');
    }
}

export default Social;