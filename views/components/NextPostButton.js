import {Component} from "../../spa-engine/Component.js";

class NextPostButton extends Component {

    nextPost(first, second) {
        location.hash = '#/post/' + (first + second);
    }

    async render(title) {
        this.events = [this.nextPost];
        const post = [4, 7];

        return `
            <button onclick="this.nextPost(${post})">${title}</button>
        `
    }
}

export default NextPostButton;
