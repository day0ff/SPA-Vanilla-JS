import {Component} from "../../spa-engine/Component.js";

class NextPostButton extends Component {

    nextPost(id) {

        location.hash = '#/post/' + (id + 5);
    }

    async render(title) {
        this.events = [this.nextPost];
        const id = 10;

        return `
            <button onclick="this.nextPost(${id})">${title}</button>
        `
    }
}

export default NextPostButton;