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
    const content = null || document.querySelector('article');
    const footer = null || document.querySelector('footer');

    header.innerHTML = await Navbar.render();
    footer.innerHTML = null;

    content.innerHTML = await router.page.render();
};

window.addEventListener('hashchange', App);

window.addEventListener('load', App);