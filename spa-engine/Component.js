export class Component {
    get events() {
        return this._events;
    }

    set events(events) {
        this._events = events.map(event => event.toString().replace(/(\r\n|\n|\r)/gm, " ").replace(/\s+/g, " "))
            .reduce((acc, event) => {
                // const key = 'this.' + event.match(/^(.*)(?=\(.*\)\s?{)/g);
                // const value = event.match(/(?<={)(.*)(?=})/g);

                const name = event.match(/^(.*)(?=\(.*\)\s?{)/g);
                const parameter = event.match(/(?<=\()(.*)(?=\)\s?{)/g);
                const code = event.match(/(?<={)(.*)(?=})/g);
                console.log(name, parameter, code);
                return ({...acc, [name]: {name, parameter, code}});
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
        console.log(contentEvents);
        contentEvents && contentEvents.forEach(contentEvent => {
            console.log('contentEvent', contentEvent);

            const name = contentEvent.match(/(?<=^this.)(.*)(?=\()/g);
            const parameter = contentEvent.match(/(?<=\()(.*)(?=\)$)/g);
            console.log(name, parameter);

            if (contentEvent.includes('this.') && this.events[name]) {
                console.log('convertType', this.convertType(parameter[0]));
                const code = this.events[name].code[0].replace(this.events[name].parameter[0], this.convertType(parameter[0]));

                console.log('code', code);
                content = content.replace(contentEvent, code);
                console.log(content)
            }
        });
        return content;
    }

    convertType(value) {
        if (typeof +value === 'number') return +value;
        if (value === 'null') return null;
        return `'${value}'`;
    }
}
