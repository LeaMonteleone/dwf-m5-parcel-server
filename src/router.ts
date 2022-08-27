import { initWelcome } from "../pages/welcome";
import { initInstructions } from "../pages/instructions";
import { initGame } from "../pages/game";
import { initScore } from "../pages/score";

/*Router */

export function initRouter(container) {

    const basePath = "/dwf-m5-parcel-server";

      const routes = [
      {
        path: /\/dwf-m5-parcel-server\/welcome/,
        page: initWelcome,
      },
      {
        path: /\/dwf-m5-parcel-server\/instructions/,
        page: initInstructions,
      },
      {
        path: /\/dwf-m5-parcel-server\/game/,
        page: initGame,
      },
      {
        path: /\/dwf-m5-parcel-server\/score/,
        page: initScore,
      }
      
      
    ];
  /**/
  function goTo(path) {
    history.pushState({}, "", path);
    handleRoute(path);
  };

  /*Searchs route (argument) with regex test method in routes (collection) then triggers the corresponding page*/

  function handleRoute (route){
    console.log ("El handleroute recibio esta ruta: ", route);

    for (const r of routes) {
      if (r.path.test(route)) {
        const el = r.page({goTo: goTo});
        
        if (container.firstChild) {
          container.firstChild.remove();
        }
        container.appendChild(el);
      }
      
    }
  }
  /*Always initialices in welcome page*/
  if (location.host.includes("leamonteleone.github.io")) {
    goTo("/dwf-m5-parcel-server/welcome")
  } else {
    handleRoute(location.pathname)
  }
  
  /**/
  window.onpopstate = function() {
    handleRoute(location.pathname)
  }

}
  