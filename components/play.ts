const rockUrl = require("../img/rock.png");
const paperUrl = require("../img/paper.png");
const scissorsUrl = require("../img/scissors.png");
import { state } from "../src/state";

export function myPlay() {
    class Play extends HTMLElement {
        shadow = this.attachShadow({ mode: "open" });
        type: string;

        constructor() {
            super();
            this.type = this.getAttribute("value");
            this.render();
        };
        
        render() {
            const style = document.createElement("style");
            style.innerHTML = `.hand {
                width: 100%;
                height: 100%;
                margin: 0;
            }`
            if (this.type === "rock") {
                this.shadow.innerHTML = `<img class="hand" src=${rockUrl}>`
            };
            if (this.type === "paper") {
                this.shadow.innerHTML = `<img class="hand" src=${paperUrl}>`
            };
            if (this.type === "scissors") {
                this.shadow.innerHTML = `<img class="hand" src=${scissorsUrl}>`
            }
        };

        
    }
    customElements.define("custom-play", Play);

}