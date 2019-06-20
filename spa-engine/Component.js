export class Component {
    get events() {
        return this._events;
    }

    set events(events) {
        this._events = events.map(event => event.toString().replace(/(\r\n|\n|\r)/gm, " ").replace(/\s+/g, " "))
            .reduce((acc, event) => {
                const key = 'this.' + event.match(/^(.*)(?=\(\)\s?{)/g);
                const value = event.match(/(?<={)(.*)(?=})/g);
                return ({...acc, [key]: value});
            }, {});
    }

    get component() {
        return this.renderComponent();
    }

    async render() {
        return null;
    }

    async afterRender() {
    }

    async renderComponent() {
        const textContent = await this.render();
        return this.parseEvents(textContent);
    }

    parseEvents(content) {
        const contentEvents = content.match(/(?<=onclick=")(.*)(?=")/g);
        contentEvents && contentEvents.forEach(contentEvent => {
            if (contentEvent.includes('this.') && this.events && this.events[contentEvent]) {
                content = content.replace(contentEvent, this.events[contentEvent]);
            }
        });
        return content;
    }
}
