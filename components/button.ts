
export function customButton() {
    class Button extends HTMLElement {
        shadow = this.attachShadow({ mode: "open" });
        text: string;

        constructor() {
            super();
            this.text = this.getAttribute("value");
            this.render();
        };

        render() {
            const style = document.createElement("style");
            style.innerHTML = ` 
            .button {
                font-size: 1.5em;
                color: #D8FCFC;
                background: cornflowerblue;
                border: solid 5px #ADC4F0;
                border-radius: 10px;
                width: 100%;
                padding: 0.5em;
                cursor: pointer;
            }
            
            `
            this.shadow.innerHTML = `
            <button class="button">${this.text}</button>`
            this.shadow.appendChild(style);
        }
    }
    customElements.define("custom-button", Button);

}