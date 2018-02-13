import ClientController from '../client/client.controller';
import AdminController from '../admin/admin.controller';
import * as domutils from '../utilities/domutils';

export default class Router {

    constructor(routes, backendService) {
        this.backendService = backendService;
        this.domutils = domutils;
        this.routes = routes;
        this.view = null;
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
        if (window.location.hash.length > 2) {
            for(let route of routes) {
                if (route.isActiveRoute(window.location.hash.substr(1))) {
                    this.domutils.loadView(route.html).then((res) => {
                        let body = document.body;
                        body.innerHTML = res;
                        if (route.name === 'client') {
                            this.view = new ClientController(this.backendService);
                        } else if (route.name === 'admin') {
                            this.view = new AdminController(this.backendService);
                        }
                    });
                }
            }
        } else {
            for(let route of routes) {
                if (route.default) {
                    this.domutils.loadView(route.html).then((res) => {
                        document.body.innerHTML = res;
                        this.view = new ClientController(this.backendService);
                    });
                }
            }
        }
    }

}