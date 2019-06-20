import {Component} from '../../spa-engine/Component.js';

class Error404 extends Component{
    async render() {
        let view = `
            <section class="section">
                <h1> 404 Error </h1>
            </section>
        `;
        return view
    }
}

export default Error404;
