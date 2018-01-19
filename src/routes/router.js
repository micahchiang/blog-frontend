
export default class Router {

    constructor(routes) {
        this.routes = routes;
        this.init();
    }

    //attach listener to window
    init() {
        window.addEventListener('hashchange', e => {
            this.hasChanged(this.routes);
        });
        this.hasChanged(this.routes);
    }

    hasChanged(routes) {
        console.log(window.location.hash.length);
        if (window.location.hash.length > 0) {
            for(let route of routes) {
                if (route.isActiveRoute(window.location.hash.substr(1))) {
                    // load html here
                }
            }
        } else {
            for(let route of routes) {
                if (route.default) {
                    // load html here
                }
            }
        }
    }

}