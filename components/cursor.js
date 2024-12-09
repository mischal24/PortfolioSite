const template = document.createElement("template");

template.innerHTML = `
    <style>
        div {
            width: 3vw;
            height: 3vw;
            background-color: #DEDEDE;
            border-radius: 50%;
            pointer-events: none;
            mix-blend-mode: difference;
            position: absolute;
            display: block;
            transition-property: width, height;
            transition-duration: 0.5s;
            transition-timing-function: ease;
            z-index: 3;
        }
    </style>

    <div>
    </div>
`;

class Cursor extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({mode : "open"});
        this.shadowRoot.appendChild(template.content.cloneNode(true));

        document.addEventListener("mousemove", (event) => {
            const offsetX = this.shadowRoot.querySelector("div").offsetWidth / 2.3;
            const offsetY = this.shadowRoot.querySelector("div").offsetHeight / 2.3;

            const translateX = event.clientX - offsetX;
            const translateY = event.clientY - offsetY;

            this.shadowRoot.querySelector("div").style.transform = `translate(${translateX}px,${translateY}px)`;
            this.handleMouseMove(event);
        });
    }

    handleMouseMove(event) {
        const types = ["new-skill-card", "new-logo", "new-social", "a", "new-project"];
        const normalizedTypes = types.map((type) => type.toLowerCase());
    
        const element = document.elementFromPoint(event.clientX, event.clientY);
    
        if (element && normalizedTypes.includes(element.tagName.toLowerCase())) {
            this.grow(true);
        } else {
            this.grow(false);
        }
    }
    
    grow(isHovered) {
        if (isHovered) {
            this.shadowRoot.querySelector("div").style.width = "6vw";
            this.shadowRoot.querySelector("div").style.height = "6vw";
        } else {
            this.shadowRoot.querySelector("div").style.width = "3vw";
            this.shadowRoot.querySelector("div").style.height = "3vw";
        }
    }
}

export default Cursor;