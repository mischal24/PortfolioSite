const template = document.createElement("template");

template.innerHTML = `
    <style>
        .skill-card {
            display: flex;
            background-color: #000;
            color: #FFF;
            margin: 10px;
            width: 8vw;
            height: 3vw;
            font-weight: bold;
            font-size: 1.05vw;
            border-radius: 40px;
            text-align: center;
            justify-content: center;
            transition: all 0.5s ease;
        }

        .skill-card:hover {
            transform: scale(120%) rotate(1.75deg);
        }

        p {
            transform: translateY(-0.25vw);
            pointer-events: none;
        }
    </style>

    <div class="skill-card" id="skill-card">
        <p></p>
    </div>
`;

class SkillCard extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({mode : 'open'});
        this.shadowRoot.appendChild(template.content.cloneNode(true));
        
        this.shadowRoot.getElementById('skill-card').addEventListener("mouseover", () => this.handleHover(true));
        this.shadowRoot.getElementById('skill-card').addEventListener("mouseout", () => this.handleHover(false));
    }

    static get observedAttributes() {
        return ["skill", "text"];
    }

    attributeChangedCallback(name, oldValue, newValue) {
        this.shadowRoot.querySelector("p").innerText = this.getAttribute('skill');
    }

    handleHover(isHovered) {
        const text = document.getElementById('skill-description');
    
        if (!text) return;
    
        if (isHovered) {
            if (!this.originalText) {
                this.originalText = text.innerText;
            }
            text.innerText = this.getAttribute('text');
        } else {
            text.innerText = this.originalText || "Oops. I screwed up when loading the description!";
        }
    }    
}

export default SkillCard;