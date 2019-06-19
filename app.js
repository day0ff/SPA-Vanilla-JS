"use strict";
import {router} from './router/Router.js';
import Navbar from './views/components/Navbar.js';
import Home from './views/pages/Home.js';
import Post from './views/pages/Post.js';
import Error404 from './views/pages/Error404.js';

const routes = {
    '/home': Home,
    '/post/:id': Post,
    '/error': Error404
};

router.routes = routes;

const App = async () => {

    const header = null || document.querySelector('header');
    const article = null || document.querySelector('article');
    const footer = null || document.querySelector('footer');

    await new Navbar().parent(header);
    await router.component.parent(article);
    footer.innerHTML = null;

};

window.addEventListener('hashchange', App);

window.addEventListener('load', App);
