
var fs = require('fs');
var path =

class PomLogger {
    constructor(Logger) {
        // type of logger needed is not specified, throw an error
        if (!Logger) {
            const err = `You must specify the logger you want to use.`;
            throw err;
        } else {
            const loggerPath = path.resolve('/loggers', `${Logger.name}.js`);
            if (fs.existsSync(loggerPath)) {
                return new Logger();
            } else {
                const err = `The logger specified  was not found.`;            
                throw err;
            }   
        }
    }
}

module.exports = PomLogger;
