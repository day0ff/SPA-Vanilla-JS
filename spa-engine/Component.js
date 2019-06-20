export class Component {
    get events() {
        return this._events;
    }

    set events(events) {
        this._events = events.map(event => event.toString().replace(/(\r\n|\n|\r)/gm, " ").replace(/\s+/g, " "))
            .reduce((acc, event) => {
                const name = event.match(/^(.*)(?=\(.*\)\s?{)/g);
                const params = event.match(/(?<=\()(.*)(?=\)\s?{)/g);
                const parameters = params && params[0].split(',');
                const code = event.match(/(?<={)(.*)(?=})/g);

                return ({...acc, [name]: {name, parameters, code}});
            }, {});
    }

    async render() {
        return null;
    }

    async afterRender() {
    }

    async renderComponent(options) {
        const textContent = await this.render(options);
        return this.parseEvents(textContent);
    }

    component(options) {
        return this.renderComponent(options);
    }

    parseEvents(content) {
        const contentEvents = content.match(/(?<=onclick=")(.*)(?=")/g);
        contentEvents && contentEvents.forEach(contentEvent => {
            const name = contentEvent.match(/(?<=^this.)(.*)(?=\()/g);
            const params = contentEvent.match(/(?<=\()(.*)(?=\)$)/g);
            const parameters = params && params[0].split(',');

            if (contentEvent.includes('this.') && this.events[name]) {
                let code = this.events[name].code[0];

                parameters && parameters
                    .forEach((parameter, index) => {
                        code = code.replace(this.events[name].parameters[index], this.convertType(parameter));
                    });
                content = content.replace(contentEvent, code);
            }
        });
        return content;
    }

    parseHTML(content) {
        if (typeof content === 'string')
            return new DOMParser().parseFromString(content, 'text/html').body.firstChild;
        return content;
    };

    convertType(value) {
        try {
            return JSON.parse(value);
        } catch (error) {
            return value && `'${value}'`;
        }

    }
}
