import {Component} from "../../spa-engine/Component.js";

class NextPostButton extends Component {

    nextPost() {
        location.hash = location.hash.replace(/\d$/g, +location.hash.match(/\d$/g)[0] + 1);
    }

    async render() {
        this.events = [this.nextPost];

        return `
            <button onclick="this.nextPost">Next</button>
        `
    }
}

export default NextPostButton;