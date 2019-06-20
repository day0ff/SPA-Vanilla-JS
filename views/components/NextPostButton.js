import {Component} from "../../spa-engine/Component.js";

class Button extends Component {
    nextPost() {
        console.log(location.hash);
    }

    async render() {
        this.events = [this.nextPost];

        return `
            <button onclick="this.nextPost">Next</button>
        `
    }
}

export default Button;