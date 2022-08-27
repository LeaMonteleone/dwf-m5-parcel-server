type jugada = "rock" | "paper" | "scissors";

export const state = {
    data:{
        currentGame: {
            computerPlay: "",
            myPlay: "",
        },
        history: {
            myScore: 0,
            pcScore: 0}
    },

    listeners: [],

    getState () {
        return this.data;
    },

    setState(newState) {
        this.data = newState;
        for (let cb of this.listeners) {
            cb();
        }
        console.log ("Soy el state he cambiado: ", this.data)
    },

    subscribe(callback: (any) => any) {
        this.listeners.push(callback);
    },

    setMove(move: string, pcMove: string){
        const currentState = this.getState();
        currentState.currentGame.myPlay = move;
        currentState.currentGame.computerPlay = pcMove;
        this.setState(currentState);
        this.setHistory();
        console.log ("Esta es la history:", this.getState().history)

    },
    
    whoWins(){
        const currentState = this.getState();

        if (currentState.currentGame.myPlay === "rock" && currentState.currentGame.computerPlay === "rock") {
            return "tie"
        };
        if (currentState.currentGame.myPlay === "scissors" && currentState.currentGame.computerPlay === "scissors") {
            return "tie"
        };
        if (currentState.currentGame.myPlay === "paper" && currentState.currentGame.computerPlay === "paper") {
            return "tie"
        };

        if (currentState.currentGame.myPlay === "rock" && currentState.currentGame.computerPlay === "scissors") {
            return "win"
        };
        if (currentState.currentGame.myPlay === "rock" && currentState.currentGame.computerPlay === "paper") {
            return "loose"
        };
        if (currentState.currentGame.myPlay === "scissors" && currentState.currentGame.computerPlay === "paper") {
            return "win"
        };
        if (currentState.currentGame.myPlay === "scissors" && currentState.currentGame.computerPlay === "rock") {
            return "loose"
        };
        if (currentState.currentGame.myPlay === "paper" && currentState.currentGame.computerPlay === "scissors") {
            return "loose"
        };
        if (currentState.currentGame.myPlay === "paper" && currentState.currentGame.computerPlay === "rock") {
            return "win"
        };


    },
    
    
   setHistory() {
    const currentWin = this.whoWins();
    const currentState = this.getState();
    const myScore = currentState.history.myScore;
    const pcScore = currentState.history.pcScore;

    if (currentWin == "win") {
       this.setState({
          ...currentState,
          history: {
             myScore: myScore + 1,
             pcScore: pcScore,
          },
       });
    }
    if (currentWin == "loose") {
       this.setState({
          ...currentState,
          history: {
             myScore: myScore,
             pcScore: pcScore + 1,
          },
       });
    }

    this.savedData();
 },

 savedData() {
    const currentState = this.getState().history;
    localStorage.setItem("data", JSON.stringify(currentState));
 },


}