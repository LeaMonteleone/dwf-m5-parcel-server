export function initInstructions(params) {
    const div = document.createElement("div");
    div.innerHTML = `
    <div class="container">
        <p class="instructions">Press "Play", then choose rock, paper or scissor before 3 seconds</p>

        <custom-button class="start-game" value="Play"></custom-button>

        <section class="hands-section">
            <custom-play value="rock"></custom-play>
            <custom-play value="paper"></custom-play>
            <custom-play value="scissors"></custom-play>
        </section>
    </div>`
    
    const startButton = div.querySelector(".start-game");
    startButton.addEventListener("click", el => {
        params.goTo("/game");
    });
    return div;
}