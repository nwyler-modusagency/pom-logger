const BaseLogger = require('./BaseLogger');

class NewRelicLogger extends BaseLogger {
    constructor() {
        super('NewRelicLogger');
    }

    log(message) {
        console.log(message, 'from', this.name);
    }

    error(error) {
        console.log(this.name, '--->', error);
    }
}

module.exports = NewRelicLogger;
