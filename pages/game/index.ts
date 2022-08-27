import { state } from "../../src/state";

export function initGame(params) {
    const div = document.createElement("div");

    div.innerHTML = `

    <div class="container">
        <p class="counter"></p>
        
        <section class="hands-section">
            <custom-play class="choosen" value="rock"></custom-play>
            <custom-play class="choosen" value="paper"></custom-play>
            <custom-play class="choosen" value="scissors"></custom-play>
        </section>
    </div>
    
    <div class="fight"></div>`
       
    /*Counter*/

    let counter = 4;
    const counterContainer = div.querySelector(".counter")
    const countDown = setInterval(() => {
        counter--;
        counterContainer.innerHTML = `${counter}`
        console.log (counter)
        if (counter==0) {
            clearInterval(countDown);
            params.goTo("/dwf-m5-parcel-server/instructions")
        }
    }, 1500);
    
    

    const choosen = div.querySelectorAll(".choosen");
    const container = div.querySelector(".container");

    choosen.forEach(el => {
        el.addEventListener("click", (choosenMove) => {
            choosenMove.preventDefault();
            clearInterval(countDown);
            let pcMove = randomMove();
            let choosenOk = choosenMove.target as any;
            console.log ("Soy el choosenen ok: ", choosenOk)
            choosenOk.classList.add("big");


            let move = el.getAttribute("value");
            state.setMove(move, pcMove);

            
            setTimeout(() => {
                container.classList.add("off");
                const newDiv = document.querySelector(".fight");
                newDiv.innerHTML = `<custom-play class="rotate" value="${pcMove}"></custom-play>
               <custom-play value="${move}"></custom-play>`

            }, 1500);

            setTimeout(() => {
               params.goTo("/dwf-m5-parcel-server/score");

           }, 4500); 
            

               
        });
    });

    
    return div;
}

//PC move

function randomMove() {
    const plays = ["rock", "paper", "scissors"]
    const random = Math.random() * (2 - 0) + 0;
    const pcMove = plays[Math.round(random)];
    return pcMove;
}

