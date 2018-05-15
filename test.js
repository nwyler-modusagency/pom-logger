
const PomLogger = require('./PomLogger');
const NewRelicLogger = require('./loggers/NewRelicLogger');
const SplunkLogger = require('./loggers/SplunkLogger');

const loggerNR = new PomLogger(NewRelicLogger);
const loggerS = new PomLogger(SplunkLogger);

loggerNR.log('Hey');
loggerS.log('Hey');
