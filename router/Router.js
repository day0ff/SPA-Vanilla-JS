class Router {
    constructor(routes){
        this._routes = null || routes;
    }

    get hash() {
        return location.hash.slice(1).toLowerCase() || '/home';
    }

    get componentName() {
        const hash = this.hash;
        const parsedRoutes = Object.keys(this.routes).reduce((acc, value) => {
            const matcher = value.split('/').map(value => value.includes(':') ? '(.*)' : value).join('/');
            return {...acc, [matcher]: value};
        }, {});
        const routesArray = Object.keys(parsedRoutes).reverse();
        const route = routesArray.find(route => {
            const regExp = new RegExp(route, 'g');
            return hash.match(regExp);
        });
        return parsedRoutes[route];
    }

    get component() {
        const componentName = this.componentName;
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
        const pageName = this.componentName;
        return pageName.split('/').reduce((acc, value, index) => value === hash[index] ? acc : {
            ...acc,
            [value.slice(1)]: hash[index]
        }, {});
    }

}

export const router = new Router();
