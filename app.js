"use strict";
import {router} from './spa-engine/Router.js';
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

    header.innerHTML = await new Navbar().component;

    article.innerHTML = await router.Component.component;
    await router.Component.afterRender();

    footer.innerHTML = null;

};

window.addEventListener('hashchange', App);

window.addEventListener('load', App);
