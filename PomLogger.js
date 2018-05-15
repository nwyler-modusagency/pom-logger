
class PomLogger {
    constructor(Logger) {
        // type of logger needed is not specified, throw an error
        if (!Logger) {
            const err = `You must specify the logger you want to use.`;
            throw err;
        } else {
            return new Logger();
        }
    }
}

module.exports = PomLogger;
