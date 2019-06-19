import {Component} from '../../comonent/Component.js';

class Navbar extends Component {
    async render() {
        return `
            <nav class="navbar" role="navigation" aria-label="main navigation">
                <a class="navbar-item" href="/#/home">
                    Home
                </a>            
                <a class="navbar-item" href="/#/error">
                    Error
                </a>         
            </nav>
        `;
    }
}

export default Navbar;
