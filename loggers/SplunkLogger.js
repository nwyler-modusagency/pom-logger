import BaseLogger from './BaseLogger';

class SplunkLogger extends BaseLogger {
    constructor() {
        super('SplunkLogger');
    }

    log(message) {
        console.log(message, 'from', this.name);
    }

    error(error) {
        console.log(this.name, '--->', error);
    }
}

export default SplunkLogger;
