import {Component} from '../../spa-engine/Component.js';
import {router} from '../../spa-engine/Router.js'
import {jsonPlaceholder} from '../../services/json.placeholder.js';
import Button from '../components/NextPostButton.js';

class Post extends Component {
    removeParagraph() {
        this.querySelector('p').remove();
    }

    async render() {
        let request = router.parseRequestURL();
        let post = await jsonPlaceholder.getPost(request.id).then(response => response.json());

        this.events = [this.removeParagraph];

        return `
            <section class="section" onclick="this.removeParagraph()">
                <h1>Post Id: ${post.id}</h1>
                <p>Post Title: ${post.title} </p>
                <p>Post Content: ${post.body} </p>
                <p>Post Author Id: ${post.userId} </p>
                ${await new Button().component('Next')}
            </section>
        `
    }

    afterRender() {
        console.log('Execute after render method.');
    }

}

export default Post;
