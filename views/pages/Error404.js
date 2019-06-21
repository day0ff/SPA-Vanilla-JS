import {Component} from '../../spa-engine/Component.js';

class Error404 extends Component {
    async render() {
        return `
            <section>
                <h1>404 Error</h1>
            </section>
        `;
    }
}

export default Error404;
