export function initWelcome(params) {
    const div = document.createElement("div");
    div.classList.add("container");
    div.innerHTML = `

    <section class="title">
        <h1>Rock</h1>
        <h1>Paper</h1>
        <h1>Scissors</h1>
    </section>

    <custom-button class="start" value="Start"></custom-button>

    <section class="hands-section">
        <custom-play  value="rock"></custom-play>
        <custom-play  value="paper"></custom-play>
        <custom-play  value="scissors"></custom-play>
    </section>`
    
    const button = div.querySelector(".start");
    button.addEventListener ("click", (el) => {
        params.goTo("/dwf-m5-parcel-server/instructions");
    });
    return div
}