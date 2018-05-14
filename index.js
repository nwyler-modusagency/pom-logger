const fs = require('fs');

const loggersAvailable = fs.readdirSync('loggers/dist');
for (let i = 0; i < loggersAvailable.length; i++) {
    loggersAvailable[i] = loggersAvailable[i].replace('.js', '').trim();
}

class PomLogger {
    constructor(Logger) {
        // type of logger needed is not specified, throw an error
        if (!Logger) {
            const err = `You must specify the logger you want to use. Loggers available: ${loggersAvailable}`;
            throw err;
        }

        // check if the logger requested is in fact available
        let typeOfLogger = null;
        let whichLogger = null;

        if (Logger.name) {
            typeOfLogger = Logger.name.trim().toLowerCase();
        } else {
            const err = `The Logger you are trying to use was not found. Loggers available: ${loggersAvailable}`;
            throw err;
        }

        for (let i = 0; i < loggersAvailable.length; i++) {
            const loggers = loggersAvailable[i].toLocaleLowerCase();
            if (loggers === typeOfLogger) {
                whichLogger = i;
                break;
            }
        }

        // if whichLogger == null, then the type of logger requested was not found
        if (whichLogger === null) {
            const err = 'The logger requested does not exist';
            throw err;
        } else {
            return new Logger();
        }
    }
}

module.exports = PomLogger;
