class Router {
    constructor(routes) {
        this._routes = null || routes;
    }

    get hash() {
        return location.hash.slice(1).toLowerCase() || '/home';
    }

    get parsedRoutes() {
        return Object.keys(this.routes).reduce((acc, value) => {
            const matcher = value.split('/').map(value => value.includes(':') ? '(.*)' : value).join('/');
            return {...acc, [matcher]: value};
        }, {});
    }

    get componentRoute() {
        const hash = this.hash;
        const routesArray = Object.keys(this.parsedRoutes).reverse();
        const route = routesArray.find(route => {
            const regExp = new RegExp(route, 'g');
            return hash.match(regExp);
        });
        return this.parsedRoutes[route];
    }

    get Component() {
        const componentName = this.componentRoute;
        return componentName ? new this.routes[componentName]()
            : new this.routes['/error']();
    }

    get routes() {
        return this._routes;
    }

    set routes(routes) {
        this._routes = routes;
    }

    parseRequestURL() {
        const hash = this.hash.split('/');
        const pageName = this.componentRoute;
        return pageName.split('/').reduce((acc, value, index) => value === hash[index] ? acc : {
            ...acc,
            [value.slice(1)]: hash[index]
        }, {});
    }

    isActive(hash){
        return this.componentRoute === hash.slice(1) ? 'active' : '';
    }
}

export const router = new Router();
