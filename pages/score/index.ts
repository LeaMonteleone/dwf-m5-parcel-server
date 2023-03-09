const winForm = require("../../img/win.png");
const looseForm = require("../../img/loose.png");
const tieForm = require("../../img/tie.png");

import { disconnect } from "process";
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
        <img src="${resultForm}" height="300px" width="300px">

        <div class="score-board"> 
            <h2>Score</h2>
            <p>Your Score: ${state.getState().history.myScore} </p>
            <p>Pc Score: ${state.getState().history.pcScore}</p>
        </div>
        <custom-button class="return" value="Restart"> </custom-button>
        <custom-button class="reset" value="Reset Score"> </custom-button>
    </div>`

    const returnButton = div.querySelector(".return") as Element;
    returnButton.addEventListener("click", el => {
        el.preventDefault();
        background.classList.remove("win");
        background.classList.remove("loose");
        background.classList.remove("tie");
        params.goTo("/instructions")
        //params.goTo("/dwf-m5-parcel-server/game")
    });

    const resetButton = div.querySelector(".reset") as Element;
    resetButton.addEventListener("click", (el) => {
        el.preventDefault();
        state.cleanData();
        state.getStorage();
        background.classList.remove("win");
        background.classList.remove("loose");
        background.classList.remove("tie");
        params.goTo("/instructions")
        //params.goTo("/dwf-m5-parcel-server/instructions")

    })
    return div;
}

