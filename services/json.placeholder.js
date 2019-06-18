class JsonPlaceholder {
    getPosts() {
        return fetch('https://jsonplaceholder.typicode.com/posts');
    }

    getPost(id) {
        return fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    }
}

export const jsonPlaceholder = new JsonPlaceholder();