
export default class Route {

    constructor(routeName, htmlName, defaultRoute = false) {
        this.name = routeName;
        this.html = htmlName;
        this.default = defaultRoute;
    }

    isActiveRoute(hashedLocation) {
        return hashedLocation.replace('/', '') === this.name;
    }

}