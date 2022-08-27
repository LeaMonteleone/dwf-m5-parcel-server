import { myPlay } from "../components/play";
import { customButton } from "../components/button";
import {initRouter} from "./router"

function main () {
    const root = document.querySelector(".root");
    console.log (root);
    myPlay();
    customButton();
    initRouter(root);
    
}

main ();