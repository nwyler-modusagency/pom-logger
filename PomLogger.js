
const fs = require('fs');
const path = require('path');

class PomLogger {
    constructor(Logger) {
        // type of logger needed is not specified, throw an error
        if (!Logger) {
            const err = 'You must specify the logger you want to use.';
            throw err;
        } else {
            const loggerPath = path.resolve(`./loggers/${Logger.name}.js`);
            if (!fs.existsSync(loggerPath)) {
                const err = 'The logger specified  was not found.';
                throw err;
            }
            return new Logger();
        }
    }
}

module.exports = PomLogger;
