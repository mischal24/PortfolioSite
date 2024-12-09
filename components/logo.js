const template = document.createElement("template");

template.innerHTML = `
    <style>
        #logo {
            filter: invert(97%) sepia(0%) saturate(1546%) hue-rotate(192deg) brightness(114%) contrast(74%);
            border: none;
            background: none;
            mix-blend-mode: difference;
            margin-top: 20px;
            margin-left: 10px;
            position: absolute;
            transition: all 0.4s ease;
            z-index: 2;
        }

        #logo:hover {
            animation: logo-wiggle 1s linear;
        }

        @keyframes logo-wiggle {
            0% {
            transform: scale3d(1, 1, 1);
            }
        
            10%, 20% {
            transform: scale3d(.9, .9, .9) rotate3d(0, 0, 1, -3deg);
            }
        
            30%, 50%, 70%, 90% {
            transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg);
            }
        
            40%, 60%, 80% {
            transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg);
            }
        
            100% {
            transform: scale3d(1, 1, 1);
            }
        }

        #logo img {
            width: 4vw;
            height: 4vw;
        }
    </style>

    <button id="logo" onclick="location.reload()">
        <img />
    </button>
`;

class Logo extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({mode : "open"});
        this.shadowRoot.appendChild(template.content.cloneNode(true));
    }

    static get observedAttributes() {
        return ["image"];
    }

    attributeChangedCallback(name, oldValue, newValue) {
        this.shadowRoot.querySelector("img").src = this.getAttribute('image');
    }

    grow(onAbout) {
        if (onAbout) {
            this.shadowRoot.querySelector("button").style.transform = 'translate(33vw, 18vw) scale(700%)';
            this.shadowRoot.querySelector("button").style.pointerEvents = 'none';
        } else {
            this.shadowRoot.querySelector("button").style.transform = 'translate(0vw, 0vw) scale(100%)';
            this.shadowRoot.querySelector("button").style.pointerEvents = 'all';
        }
    }
}

export default Logo;