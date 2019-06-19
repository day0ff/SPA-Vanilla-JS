export class Component {
    async render() {
        return null;
    }

    async afterRender() {
    }

    parseHTML(content) {
        if (typeof content === 'string')
            return new DOMParser().parseFromString(content, 'text/html').body.firstChild;
        return content;
    };

    async parent(parent) {
        const textContent = await this.render();
        const nodeContent = this.parseHTML(textContent);
        parent.innerHTML = '';
        parent.appendChild(nodeContent);
        await this.afterRender();
    }
}
