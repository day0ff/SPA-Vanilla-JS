import {router} from '../../router/Router.js'
import {jsonPlaceholder} from '../../services/json.placeholder.js';

class Post {
    async render(){
        let request = router.parseRequestURL();
        let post = await jsonPlaceholder.getPost(request.id).then(response => response.json());

        return `
            <section class="section">
                <h1>Post Id: ${post.id}</h1>
                <p>Post Title: ${post.title} </p>
                <p>Post Content: ${post.body} </p>
                <p>Post Author Id: ${post.userId} </p>
            </section>
        `
    }
}

export default Post;
