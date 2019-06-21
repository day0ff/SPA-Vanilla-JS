import {Component} from '../../spa-engine/Component.js';
import {router} from '../../spa-engine/Router.js'

class Navbar extends Component {

    async render() {
        return `
            <nav role="navigation" aria-label="main navigation">
                <a href="#/home" class="${router.isActive('#/home')}">
                    Home
                </a>   
                <a href="#/post" class="${router.isActive('#/post')}">
                    Posts
                </a>         
                <a href="#/error" class="${router.isActive('#/error')}">
                    Error
                </a>         
            </nav>
        `;
    }

}

export default Navbar;
