class BaseLogger {
    constructor(name) {
        this.name = name;
    }

    error() {
        const err = `${this.name} --> You must override error(...) when you extend BaseLogger`;
        throw err;
    }

    log() {
        const err = `${this.name} --> You must override log(...) when you extend BaseLogger`;
        throw err;
    }
}

export default BaseLogger;
