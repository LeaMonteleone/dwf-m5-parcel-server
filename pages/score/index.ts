const winForm = require("../../img/win.png");
const looseForm = require("../../img/loose.png");
const tieForm = require("../../img/tie.png");

import { state } from "../../src/state";

export function initScore(params) {
    const div = document.createElement("div");
    const background = document.querySelector(".root");
    
    const result = state.whoWins();
    let resultForm;
    
    if (result === "win") {
        background.classList.add("win");
       resultForm = winForm;
        
    };
    
    if (result === "loose") {
        background.classList.add("loose")
        resultForm = looseForm;
    };
    
    if (result === "tie") {
        background.classList.add("tie")
        resultForm = tieForm;
    };

    div.innerHTML = `
    <div class="container">
        <img src="${resultForm} height="90%" width="90%">

        <div class="score-board"> 
            <h2>Score</h2>
            <p>Your Score: ${state.getState().history.myScore} </p>
            <p>Pc Score: ${state.getState().history.pcScore}</p>
        </div>
        <custom-button class="return" value="Restart"> </custom-button>
    </div>`

    const returnButton = div.querySelector(".return");
    returnButton.addEventListener("click", el => {
        el.preventDefault();
        background.classList.remove("win");
        background.classList.remove("loose");
        background.classList.remove("tie");
        params.goTo("/dwf-m5-parcel-server/instructions")
    });
    return div;
}

