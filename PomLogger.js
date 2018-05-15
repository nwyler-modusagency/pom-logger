const fs = require('fs');

const loggersAvailable = fs.readdirSync('./loggers/');
for (let i = 0; i < loggersAvailable.length; i++) {
    if (loggersAvailable[i] === 'BaseLogger.js') loggersAvailable.splice(i, 1);
    loggersAvailable[i] = loggersAvailable[i].replace('.js', '').trim();
}

class PomLogger {
    constructor(type) {
        // type of logger needed is not specified, throw an error
        if (!type) {
            const err = `You must specify the logger you want to use. Loggers available: ${loggersAvailable}`;
            throw err;
        }

        // check if the logger requested is in fact available
        const typeOfLogger = type.trim().toLowerCase();
        let whichLogger = null;

        for (let i = 0; i < loggersAvailable.length; i++) {
            const logger = loggersAvailable[i].toLocaleLowerCase();
            if (logger === typeOfLogger) {
                whichLogger = i;
                break;
            }
        }

        if (whichLogger === null) {
            const err = 'Type of logger requested does not exist';
            throw err;
        } else {
            const LoggerClass = loggersAvailable[whichLogger];
            return new LoggerClass();
        }
    }
}

export default PomLogger;
