import {jsonPlaceholder} from '../../services/json.placeholder.js';

class Home {
    async render() {
        let posts = await jsonPlaceholder.getPosts().then(response => response.json());

        return `
            <section class="section">
                <h1> Home </h1>
                <ul>
                    ${ posts.map(post =>
            `<li><a href="#/post/${post.id}">${post.title}</a></li>`
        ).join('\n ')
            }
                </ul>
            </section>
        `;
    }

}

export default Home;