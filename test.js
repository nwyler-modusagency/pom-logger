const POMLogger = require('./index');
const SplunkLogger = require('./loggers/dist/SplunkLogger');
const NewRelicLogger = require('./loggers/dist/NewRelicLogger');

const splunkLogger = new POMLogger(SplunkLogger);
const newRelicLogger = new POMLogger(NewRelicLogger);
// const noLogger = new POMLogger(); // error: no logger defined
const custom = new POMLogger('asas'); // error: incorrect Logger

splunkLogger.log('This is a message');
newRelicLogger.log('This is a message');

