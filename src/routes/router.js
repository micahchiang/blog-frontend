import ClientController from '../client/client.controller';
import AdminController from '../admin/admin.controller';

export default class Router {

    constructor(routes, backendService) {
        this.backendService = backendService;
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
                    this.loadView(route.name, route.html).then((res) => {
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
                    this.loadView(route.name, route.html).then((res) => {
                        document.body.innerHTML = res;
                        this.view = new ClientController(this.backendService);
                    });
                }
            }
        }
    }

    loadView(routeName, fileName) {
        let url = `views/${fileName}.html`;
        return new Promise((resolve, reject) => {
            let xhr = new XMLHttpRequest();
            xhr.open('GET', url, true);
            xhr.onreadystatechange = function() {
                if (this.readyState !== 4) {
                    return;
                }
                if (this.status !== 200) {
                    return;
                }
                resolve(this.responseText);
            };
            xhr.send();
        });
    }

}